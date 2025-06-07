const prisma = require('../../../config/prisma')
const { throwError } = require('../../../helpers/errorHelper')
 
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
        if (!computerData){
            throwError("Invalid Computer Id", 404, [{msg: "404 Not Found"}])
        }
        res.json({
            computer: computerDetails
        })
    } catch(error){
        next(error)
    }
}