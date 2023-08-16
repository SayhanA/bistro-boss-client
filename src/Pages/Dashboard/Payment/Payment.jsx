import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../hooks/useCart';

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWat_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseInt(total.toFixed(2))

    return (
        <div>
            <SectionTitle heading="Payment" subHeading="please process" />
            <h2>Payment potion will added here to get payment form users</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price} />
            </Elements>
        </div>
    );
};

export default Payment;