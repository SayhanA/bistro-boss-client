import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import './CheckoutForm.css'

const CheckoutForm = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        if (!price ) {
            return
        }
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log("error", error);
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
            // setCardError(confirmError)
        }

        console.log("paymentIntent", paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            console.log(transactionId)
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                data: new Date(),
                quantity: cart?.length,
                cartItems: cart?.map(item => item._id),
                menuItems: cart?.map(item => item.menuItemId),
                status: 'service pending',
                itemsName: cart?.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    // display confirm
                }
            })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='w-9/12 mx-auto p-10 bg-white rounded-xl' >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn btn-outline btn-primary mt-5'>
                    Pay
                </button>
                {cardError && <p className='text-red-500'>{cardError}</p>}
                {transactionId && <p className='text-green-500'>Transaction Completed With transactionId: {transactionId}</p>}
            </form>
        </>
    );
};

export default CheckoutForm;