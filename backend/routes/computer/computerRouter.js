const { Router } = require('express')
const { getAllComputers } = require('../../controllers/computer/GET/getAllComputers')

const computerRouter = Router()

computerRouter.get("/", getAllComputers)

module.exports = computerRouter