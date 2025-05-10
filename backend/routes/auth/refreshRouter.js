const { Router } = require('express')
const { getRefresh } = require('../../controllers/auth/refreshController')
const {validate} = require('../../controllers/auth/validateFingerprint')
const refreshRouter = Router()

refreshRouter.get("/", getRefresh)

module.exports = refreshRouter