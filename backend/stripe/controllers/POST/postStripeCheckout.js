require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_API_KEY)

exports.postStripeCheckout = (req, res, next) => {
    try{
        const body = req.body
        console.log(body)

        res.json({
            msg: "Payment Created"
        })
    } catch(e) {
        next(e)
    }
}