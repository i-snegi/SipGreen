import React from 'react';
import './offers.css';

function Offers() {

    return (
        <div className='rewards'>
            <div className="jumbotron">

                <div class="card text-center reward-card" style={{ width: "18rem" }}>
                    <img class="card-img-top" src="../images/rewards-logo.png" alt="Card cap" />
                    <h5 class="card-title">Refer and earn...</h5>
                    <div class="card-body">
                        <p class="card-text">Earn reward by referral.</p>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Offers;