const rateLimit = require('express-rate-limit')
const { throwError } = require('../helpers/errorHelper')

exports.postStripeCheckoutLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 3,
    handler: (req, res, next) => {
        next(throwError("Rate Limit Exceeded", 429, ["Too many Requests"]))
    }
})