const prisma = require('../../../config/prisma')
exports.getAllComputers = async(req, res, next) => {
    try{
        console.time("getAllComputers")
        const pro = prisma.computer.findMany({
            where: { performance: 'Pro' },
            select: { name: true }
        })
        const advanced = prisma.computer.findMany({
            where: { performance: 'Advanced' },
            select: { name: true }
        })
        const premium = prisma.computer.findMany({
            where: { performance: 'Premium' },
            select: { name: true }
        })

        const computers = await Promise.all([pro, advanced, premium])
        console.timeEnd("getAllComputers");

        // console.log(computers)
        res.json({
            pro: computers[0],
            advanced: computers[1],
            premium: computers[2]
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