import React from 'react';
import '../pricing.css'; // Import the CSS file

const Pricing = (props) => {
  return (
    <div id="pricing"> 
        <div className="pricing-container">
            <div className="row">
                <h2 className="pricing-title"> Pricing</h2>
                <div className="pricing-boxes">
                    <div className="pricing-box">
                        <h3>First Consultation</h3>
                        <p>Free of charge</p>
                    </div>
                    <div className="pricing-box">
                        <h3>Project Rates</h3>
                        <p>Starting at $39.99/hour</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Pricing;

