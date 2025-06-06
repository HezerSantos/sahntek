const prisma = require('../../../config/prisma')
const { throwError } = require('../../../helpers/errorHelper')
 
exports.getComputerById = async(req, res, next) => {
    try{
        const computerId = Number(req.params.id)
        if (isNaN(computerId)){
            throwError("Invalid Computer Id", 404, [{msg: "404 Not Found"}])
        }
        const computerData = await prisma.computer.findUnique({
            where:{
                id: computerId
            },
            select: {
                name: true,
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
                urls:{
                    select:{
                        url: true
                    }
                }
            }
        })
        if (!computerData){
            throwError("Invalid Computer Id", 404, [{msg: "404 Not Found"}])
        }
        res.json({
            computer: computerData
        })
    } catch(error){
        next(error)
    }
}