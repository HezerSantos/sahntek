const { Router } = require("express")
const { postStripeCheckout } = require("../controllers/POST/postStripeCheckout")
const { postStripeSession } = require("../controllers/postStripeSessionId")

const stripeRouter = Router()

stripeRouter.post("/checkout/sessions", postStripeCheckout)
stripeRouter.post("/checkout/sessions/verify", postStripeSession)
module.exports = stripeRouter
