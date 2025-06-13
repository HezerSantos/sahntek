const prisma = require('../../../config/prisma')
const { throwError } = require('../../../helpers/errorHelper')
 

const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3')

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const S3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CF_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CF_ACCESS,
    secretAccessKey: process.env.CF_SECRET,
  },
});


exports.getComputerById = async(req, res, next) => {
    try{
        const computerId = Number(req.params.id)
        if (isNaN(computerId)){
            throwError("Invalid Computer Id", 404, [{msg: "404 Not Found"}])
        }
        const computerData = prisma.computer.findUnique({
            where:{
                id: computerId
            },
            select: {
                name: true,
                casePrice: true,
                performance: true,
                cpu: {
                    select:{
                        name: true,
                        price: true
                    }
                },
                gpu: {
                    select: {
                        name: true,
                        price: true
                    }
                },
                ram: {
                    select: {
                        name: true,
                        price: true
                    }
                },
                motherboard: {
                    select: {
                        name: true,
                        price: true
                    }
                },
                cooler: {
                    select: {
                        name: true,
                        price: true
                    }
                },
                urls: true
            }
        })

        const storageOptions = prisma.computerPart.findMany({
            where: {
                parttype: 'Storage'
            },
            select:{
                id: true,
                name: true,
                price: true
            }
        })

        const computerDetails = await Promise.all([computerData, storageOptions])

        // console.log(computerDetails)
        if (!computerDetails[0]){
            throwError("Invalid Computer Id", 404, [{msg: "404 Not Found"}])
        }

        const urls = [...computerDetails[0].urls].map(async(url) => {
            const promise = await getSignedUrl(
                S3,
                new GetObjectCommand({
                    Bucket: "sahntek",
                    Key: `PC${url.computerId}/${url.url}`
                }),
                {expiresIn: 3600}
            )
            return {
                id: url.id,
                url: promise,
                color: url.color,
                computerId: url.computerId
            }
        })

        const signedUrls = await Promise.all(urls)

        
        computerDetails[0].urls = signedUrls
        res.json({
            computer: computerDetails
        })
    } catch(error){
        next(error)
    }
}