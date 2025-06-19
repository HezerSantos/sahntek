const { Router } = require("express")
const { postStripeCheckout } = require("../controllers/POST/postStripeCheckout")
const { postStripeSession } = require("../controllers/POST/postStripeSessionId")
const { postStripeCheckoutLimiter } = require("../../ratelimiters/postStripeCheckoutLimiter")
const { postStripeSessionLimiter } = require("../../ratelimiters/postStripeSessionLimiter")

const stripeRouter = Router()

stripeRouter.post("/checkout/sessions", postStripeCheckoutLimiter, postStripeCheckout)
stripeRouter.post("/checkout/sessions/verify", postStripeSessionLimiter, postStripeSession)
module.exports = stripeRouter
