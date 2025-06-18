require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_API_KEY)


exports.postStripeSession = async(req, res, next) => {
    const sessionId = req.body.sessionId
    try{
        const session = await stripe.checkout.sessions.retrieve(sessionId)

        if(!session){
            return res.status(403).send()
        }

        res.status(200).send()
    } catch(e){
        next(e)
    }
}