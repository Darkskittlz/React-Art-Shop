require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5500",
}))


const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, { priceInCents: 40000, name: 'Bubble Gum Bath Time'}],
    [2, {priceInCents: 20000, name: 'N/A'}],
])

app.post('/create-checkout-session', async (req,res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',

                        //Line_Items Explanation
    //This is an array of items that I'm sending down that I want to purchase
    //Name of item, price of item, etc. Therefore I just need to reference my 
    //items object in the request body referenced in my script.js file. I then map
    //through each of my items in the proper stripe format. 

            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${process.env.CLIENT_URL}/success.html`,
            cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
        })
        res.json({ url: session.url })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }

})

app.listen(3000)