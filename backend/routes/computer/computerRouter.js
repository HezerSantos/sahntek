const { Router } = require('express')
const { getAllComputers } = require('../../controllers/computer/GET/getAllComputers')
const { getComputerById } = require('../../controllers/computer/GET/getComputerById')
const { getAllComputersLimiter } = require('../../ratelimiters/getAllComputersLimiter')
const { getComputerByIdLimiter } = require('../../ratelimiters/getComputerById')

const computerRouter = Router()

computerRouter.get("/", getAllComputersLimiter, getAllComputers)
computerRouter.get("/:id", getComputerByIdLimiter, getComputerById)
module.exports = computerRouter