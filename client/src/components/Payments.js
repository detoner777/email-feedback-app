import React, { Component } from 'react';
import StripeChekout from 'react-stripe-checkout';

class Payments extends Component {
	render() {
		//	debugger;
		return (
			<StripeChekout
				name="Emaily"
				description="$5 for 5 emails credits"
				amount={500}
				token={token => console.log(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn" style={{ fontSize: "" }}>
					Add Credits
				</button>
			</StripeChekout>
		);
	}
}

export default Payments;