const prisma = require('../../../config/prisma')
require('dotenv').config()


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



exports.getAllComputers = async(req, res, next) => {
    try{
        // console.time("getAllComputers")
        const pro = prisma.computer.findMany({
            where: { performance: 'Pro' },
            select: { id: true, name: true, urls: {select: {url: true}} }
        })
        const advanced = prisma.computer.findMany({
            where: { performance: 'Advanced' },
            select: { id: true, name: true, urls: {select: {url: true}} }
        })
        const premium = prisma.computer.findMany({
            where: { performance: 'Premium' },
            select: { id: true, name: true, urls: {select: {url: true}} }
        })

        const computers = await Promise.all([pro, advanced, premium])
        // console.timeEnd("getAllComputers");
        const proComputers = computers[0].map(computer => ({
            id: computer.id,
            name: computer.name,
            imageUrl: computer.urls[Math.floor(Math.random() * computer.urls.length)].url
        }))
        
        const advancedComputers = computers[1].map(computer => ({
            id: computer.id,
            name: computer.name,
            imageUrl: computer.urls[Math.floor(Math.random() * computer.urls.length)].url
        }))
        const premiumComputers = computers[2].map(computer => ({
            id: computer.id,
            name: computer.name,
            imageUrl: computer.urls[Math.floor(Math.random() * computer.urls.length)].url
        }))
        // console.log(computers)



        // console.time("getAllComputers")
        const proPromises = proComputers.map(async (computer) => {
            // The "await" inside the async function ensures we wait for the signed URL, but does NOT block the next iteration.
            const signedUrl = await getSignedUrl(
                S3,
                new GetObjectCommand({
                    Bucket: "sahntek",
                    Key: `PC${computer.id}/${computer.imageUrl}`
                }),
                { expiresIn: 3600 }
            );
            return {
                id: computer.id,
                name: computer.name,
                imageUrl: signedUrl
            };
        });

        const advancedPromises = advancedComputers.map(async (computer) => {
            // The "await" inside the async function ensures we wait for the signed URL, but does NOT block the next iteration.
            const signedUrl = await getSignedUrl(
                S3,
                new GetObjectCommand({
                    Bucket: "sahntek",
                    Key: `PC${computer.id}/${computer.imageUrl}`
                }),
                { expiresIn: 3600 }
            );
            return {
                id: computer.id,
                name: computer.name,
                imageUrl: signedUrl
            };
        });

        const premiumPromises = premiumComputers.map(async (computer) => {
            // The "await" inside the async function ensures we wait for the signed URL, but does NOT block the next iteration.
            const signedUrl = await getSignedUrl(
                S3,
                new GetObjectCommand({
                    Bucket: "sahntek",
                    Key: `PC${computer.id}/${computer.imageUrl}`
                }),
                { expiresIn: 3600 }
            );
            return {
                id: computer.id,
                name: computer.name,
                imageUrl: signedUrl
            };
        });

        const signedPro = await Promise.all(proPromises)
        const signedAdvanced = await Promise.all(advancedPromises)
        const signedPremium = await Promise.all(premiumPromises)

        // const test = await Promise.all([...proPromises, ...premiumPromises, ...advancedPromises])
        // console.timeEnd("getAllComputers");

        console.log(signedPro)
        res.json({
            pro: signedPro,
            advanced: signedAdvanced,
            premium: signedPremium
        })

    } catch(error){
        next(error)
    }
}
/*
    getAllComputers: 610.207ms
    getAllComputers: 33.097ms
    getAllComputers: 33.517ms
    getAllComputers: 32.978ms
    getAllComputers: 32.998ms
    getAllComputers: 32.538ms
    getAllComputers: 35.264ms
    getAllComputers: 34.94ms
    getAllComputers: 34.842ms
    getAllComputers: 33.137ms
    getAllComputers: 33.276ms
    getAllComputers: 33.461ms
*/

// exports.getAllComputers = async(req, res, next) => {
//     try{
//         console.time("getAllComputers")
//         const pro = await prisma.computer.findMany({
//             where: { performance: 'Pro' },
//             select: { id: true, name: true }
//         })
//         const advanced = await prisma.computer.findMany({
//             where: { performance: 'Advanced' },
//             select: { id: true, name: true }
//         })
//         const premium = await prisma.computer.findMany({
//             where: { performance: 'Premium' },
//             select: { id: true, name: true }
//         })

        
//         console.timeEnd("getAllComputers");

//         res.json({
//             pro: pro,
//             advanced: advanced,
//             premium: premium
//         })
//     } catch(error){
//         next(error)
//     }
// }
/* 
    getAllComputers: 439.14ms
    getAllComputers: 102.518ms
    getAllComputers: 103.606ms
    getAllComputers: 103.062ms
    getAllComputers: 103.538ms
    getAllComputers: 102.43ms
    getAllComputers: 102.742ms
    getAllComputers: 102.669ms
    getAllComputers: 137.371ms
    getAllComputers: 102.626ms
    getAllComputers: 103.163ms
    getAllComputers: 102.236ms
*/


// exports.getAllComputers = async(req, res, next) => {
//     try{
//         console.time("getAllComputers")
//         const computers = await prisma.computer.findMany({
//             where: { 
//                 performance: { 
//                     in: ['Pro', 'Advanced', 'Premium'] 
//                 } 
//             },
//             select: { 
//                 name: true, 
//                 performance: true 
//             }
//         })
        
//         // Group by performance if needed
//         const grouped = {
//             pro: computers.filter(c => c.performance === 'Pro'),
//             advanced: computers.filter(c => c.performance === 'Advanced'),
//             premium: computers.filter(c => c.performance === 'Premium')
//         }
        
//         console.timeEnd("getAllComputers");
//         console.log(grouped)
//     } catch(error){
//         next(error)
//     }
// }