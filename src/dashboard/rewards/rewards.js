import React from 'react';
import './rewards.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement,registerables } from "chart.js";

ChartJS.register(BarElement, ArcElement, Tooltip, Legend,...registerables );

function Rewards() {
    const holdings = [{ "name": "APPLE INC.", "symbol": "AAPL", "investment": 4152.4, "stocks": 28, 'esg_rating': 3 }, { "name": "INTEL", "symbol": "INTC", "investment": 2895.3, "stocks": 51, 'esg_rating': 2 }, { "name": "MARRIOTT INC.", "symbol": "MAR", "investment": 13557.3, "stocks": 98, 'esg_rating': 1 }, { "name": "DISNEY", "symbol": "DIS", "investment": 18421.5, "stocks": 104, 'esg_rating': 2 }];

    let getReward = (esg_rating, investment) => {
        switch (esg_rating) {
            case 1:
                return investment / 200;
            case 2:
                return investment / 150;
            case 3:
                return investment / 100;
            default:
                return 0;
        }
    }

    let rewardData = {
        labels: holdings.map(holding => holding.name),
        datasets: [
            {
                label: 'Earning',
                backgroundColor: [
                    '#42145fdb',
                    '#d10a18b5',
                    '#fbbb21b8',
                    '#00A6B4',
                ],
                hoverBackgroundColor: [
                    '#42145f',
                    '#d10a18',
                    '#fbbb21',
                    '#003350',
                ],
                data: holdings.map(holding => getReward(holding.esg_rating, holding.investment))
            }
        ]
    }

    let totalRewards = () => {
        let rewards = holdings.map(holding => getReward(holding.esg_rating, holding.investment));
        return rewards.reduce((partialSum, a) => partialSum + a, 0);
    }


    return (
        <div className='rewards'>
            <div className="jumbotron">
                <h1 className="display-4">Total Points: ${Number((totalRewards()).toFixed(1)) || 0}</h1>
                <p className="lead">Invest with Green - Earn Rewards while Supporting the Planet. It's a win-win situation, where your investments align with your values, and you have the opportunity to play a role in creating a more sustainable and prosperous future for both yourself and the planet.</p>
                <hr className="my-4" />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-9'>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Summary</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Earned rewards on your investment:</h6>
                                    <Bar
                                        data={rewardData}
                                        options={{
                                            title: {
                                                display: true,
                                                text: 'Environment Ratings',
                                                fontSize: 20
                                            },
                                            legend: {
                                                display: true,
                                                position: 'top'
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h6>How we calculate rewards</h6>
                            <table class="table clearfix">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Environment rating</th>
                                        <th scope="col">Earn per $100</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>A</td>
                                        <td>$1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>B</td>
                                        <td>$0.66</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>C</td>
                                        <td>$0.5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rewards;