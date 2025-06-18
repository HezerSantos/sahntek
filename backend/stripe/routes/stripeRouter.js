const { Router } = require("express")
const { postStripeCheckout } = require("../controllers/POST/postStripeCheckout")

const stripeRouter = Router()

stripeRouter.post("/checkout/sessions", postStripeCheckout)

module.exports = stripeRouter
