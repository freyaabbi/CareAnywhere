const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Route to create a payment intent
router.post('/create-payment-intent', async (req, res) => {
  const { amount, currency = 'usd' } = req.body;

  try {
    // Create a payment intent with the specified amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,  // Amount in cents
      currency: currency,
      payment_method_types: ['card'],
    });

    // Send client secret back to client
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });

  }
});

module.exports = router;
