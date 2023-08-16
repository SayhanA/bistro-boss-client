/**
 * 1. install stripe and react stripe js
 * 2. create a checkout form with card element(card element contains: card number, expiration data, cvs, zip code)
 * 3. create account on stripe and get the publishable key pk
 * 4. get card information
 * 5. create a payment method
 * 6. use test card to test payment
 * 7. on the server side: install stipe: npm install --save stripe
 * 8. create a payment intend api with a payment method types: ['card'] make sure you provide amount in cents (multiply price with 100)
 * 9. call payment intent api to get client secret and store it in a state
 * 10. use confirmCartPayment api with client secret card info
 * 11. display confirm card error
 * 12. display confirm card success
 * 13. do thinks after payment --->
 */