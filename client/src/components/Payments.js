import React, { Component } from 'react';
import StripeChekout from 'react-stripe-checkout';

class Payments extends Component {
	render() {

		return (
			<StripeChekout
				amount={500}
				token={token => console.log(token)}
				stripeKey={process.env.RACT_APP_STRIPE_KEY}
			/>
		);
	}
}

export default Payments;