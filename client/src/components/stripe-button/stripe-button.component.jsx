import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Tg017RUufbiwHMY5yikCJrHB';

  const onToken = (token) => {
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error');
        alert(
          'There was an issue with the payment! Please make sure you have entered the right card.'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
