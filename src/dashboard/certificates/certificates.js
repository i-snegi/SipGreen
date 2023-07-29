import React from 'react';
import './certificates.css';

function Certificates() {

    return (
        <div className='certificates'>
            <div className="jumbotron">
                <h1 className="display-4">Certificates</h1>
                <p className="lead">A Green Loan from NatWest aims to help eligible UK businesses finance business assets to support their sustainability ambitions, such as solar panels, electric vehicles, or heat pumps on commercial buildings, that fall within the eligible list, which has been developed by the bank and is subject to review and change on an ongoing basis.</p>
                <hr className="my-4" />
                <p>Here are the benefits of green loans presented as bullet points:</p>
                <ul>
                    <li><strong>Supporting Sustainability:</strong> Support sustainability and eco-friendly projects.</li>
                    <li><strong>Cost Savings:</strong> Lead to cost savings through energy-efficient initiatives.</li>
                    <li><strong>Competitive Advantage:</strong> Provide a competitive advantage for businesses with environmentally responsible practices.</li>
                    <li><strong>Positive Reputation:</strong> Improve a company's reputation and public perception.</li>
                    <li><strong>Regulatory Compliance:</strong> Help businesses comply with environmental regulations and access incentives.</li>
                    <li><strong>Access to Capital:</strong> Facilitate easier access to capital for green projects.</li>
                    <li><strong>Addressing Climate Challenges:</strong> Contribute to addressing global climate challenges and making a positive impact on the environment.</li>
                </ul>
                <a className="btn btn-primary btn-lg" href="https://www.natwest.com/business/loans-and-finance/sustainable-finance/green-loans.html" role="button">Apply for Green Loans &nbsp;<i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
        </div>
    );
}

export default Certificates;