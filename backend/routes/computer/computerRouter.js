const { Router } = require('express')
const { getAllComputers } = require('../../controllers/computer/GET/getAllComputers')
const { getComputerById } = require('../../controllers/computer/GET/getComputerById')

const computerRouter = Router()

computerRouter.get("/", getAllComputers)
computerRouter.get("/:id", getComputerById)
module.exports = computerRouter