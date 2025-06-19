require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_API_KEY)
const prisma = require('../../../config/prisma')
const { throwError } = require('../../../helpers/errorHelper')
exports.postStripeCheckout = async(req, res, next) => {
    try{
        const { shoppingCart } = req.body

        const shoppingCartMap = new Map(shoppingCart.map(item => {
            return [item.sku, item.items]
        }))

        if(!shoppingCartMap || shoppingCartMap.size === 0){
            throwError("Invalid Shopping Cart", 400, [{msg: "Bad Request"}])
        }
        // console.log(shoppingCartMap)
        const cart = [...shoppingCartMap].map( async([key, value]) => {
            const prices = await prisma.computer.findUnique({
                where: {
                    id: parseInt(value.id)
                },
                select: {
                    cpu: {
                        select: {
                            price: true
                        }
                    },
                    gpu: {
                        select: {
                            price: true
                        }
                    },
                    cooler: {
                        select: {
                            price: true
                        }
                    },
                    motherboard: {
                        select: {
                            price: true
                        }
                    },
                    psu: {
                        select: {
                            price: true
                        }
                    },
                    ram: {
                        select: {
                            price: true
                        }
                    },
                    casePrice: true
                }
            })
            const storagePrice = await prisma.computerPart.findFirst({
                where: {
                    name: value.storageSelected
                },
                select: {
                    name: true,
                    price: true
                }
            })
            // console.log(prices)
            // console.log(storagePrice)
            let totalPrice = Object.values(prices).reduce((sum, part) => sum + (part.price? part.price : part), 0)
            totalPrice += storagePrice.price
            // totalPrice *= value.quantity
            return {
                name: `${value.name}-${value.storageSelected}-${value.color}`,
                quantity: value.quantity,
                image: value.imageUrl,
                price: totalPrice
            }
        })

        const finalizedCart = await Promise.all(cart)
        // finalizedCart.map((item) => {
        //     console.log(item.quantity)
        //         // return {
        //         //     price_data: {
        //         //         currency: 'usd',
        //         //         product_data: {
        //         //             name: item.name,
        //         //             images: [item.image]
        //         //         },
        //         //         unit_amount: item.price
        //         //     },
        //         //     quantity: item.quantity,
        //         // }
        // })
        const session = await stripe.checkout.sessions.create({
            success_url: "https://sahntek.hallowedvisions.com/stripe/checkout/success/?session_id={CHECKOUT_SESSION_ID}",
            cancel_url: "https://sahntek.hallowedvisions.com/stripe/checkout/cancel/?session_id={CHECKOUT_SESSION_ID}",
            line_items: finalizedCart.map((item) => {
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name,
                            images: [item.image]
                        },
                        unit_amount: item.price * 100
                    },
                    quantity: item.quantity,
                }
            }),
            mode: 'payment'
        })

        res.json({
            url: session.url
        })
    } catch(e) {
        next(e)
    }
}