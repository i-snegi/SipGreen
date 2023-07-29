import React from 'react';
import './portfolio.css';
import portfolio from '../../_dump/investment-account-response';
import esg_scores from '../../_dump/companies-esg-scores';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, registerables } from "chart.js";

ChartJS.register(BarElement, ArcElement, Tooltip, Legend, ...registerables);

function Portfolio() {

    const listHoldings = portfolio.accounts[0].holdings.map((holding, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index}</th>
                <td>{holding.stock.name}</td>
                <td>{holding.stock.symbol}</td>
                <td>{holding.stock.isin}</td>
                <td>{holding.stock.closingPrice}</td>
                <td>{holding.owned}</td>
            </tr>
        )
    });


    const transform_esg = (inputData, key) => {

        let modified_ratings = inputData.map(esg_score => {
            let temp_var = JSON.parse(JSON.stringify(esg_score));
            let env_esg = String(temp_var[key]).toLowerCase();
            switch (env_esg) {
                case "a":
                    temp_var[key] = 3;
                    return temp_var;
                case 'b':
                    temp_var[key] = 2;
                    return temp_var;
                case 'c':
                    temp_var[key] = 1;
                    return temp_var;
                default:
                    return temp_var;
            }
        });
        return modified_ratings;
    }

    const env = transform_esg(esg_scores, 'Environment Score');
    const overall = transform_esg(env, 'Total ESG Score');


    let envRatingPie = {};
    let overallRatingPie = {};

    let comapny_names = [], env_ratings = [], total_esg = [];

    for (let index = 0; index < overall.length; index++) {
        const element = overall[index];
        comapny_names.push(element['company']);
        env_ratings.push(element['Environment Score']);
        total_esg.push(element['Total ESG Score']);
    }



    envRatingPie = {
        labels: comapny_names,
        datasets: [
            {
                label: 'Environment Ratings',
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
                data: env_ratings
            }
        ]
    }

    overallRatingPie = {
        labels: comapny_names,
        datasets: [
            {
                label: 'Environment Ratings',
                backgroundColor: [
                    '#42145fdb',
                    '#d10a18b5',
                    '#2FDE00',
                    '#00A6B4',
                ],
                hoverBackgroundColor: [
                    '#42145f',
                    '#d10a18',
                    '#175000',
                    '#003350',
                ],
                data: total_esg
            }
        ]
    }
    console.log(overallRatingPie, envRatingPie);
    let portfolioStats = () => {
        let companyHoldings = portfolio.accounts[0].holdings.map((holding, index) => {
            return {
                name: holding.stock.name,
                symbol: holding.stock.symbol,
                investment: Number((holding.stock.closingPrice * holding.owned).toFixed(1)),
                stocks: holding.owned

            }
        });
        console.log(`Total holdings: ${JSON.stringify(companyHoldings)}`);
        return companyHoldings;
    }
    portfolioStats();
    // console.log(`env: ${JSON.stringify(envRatingPie)}, overall: ${JSON.stringify(overallRatingPie)}`)

    const portfolioPie = {
        labels: portfolioStats().map(element => element.name),
        datasets: [
            {
                label: 'Environment Ratings',
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
                data: portfolioStats().map(element => element.investment)
            }
        ]
    }

    const listTransactions = portfolio.accounts[0].transactions.map((transaction, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index}</th>
                <td>{String(transaction.id)?.slice(0, 12)}</td>
                <td>{transaction.date}</td>
                <td>{transaction.symbol}</td>
                <td>{transaction.quantity}</td>
                <td>{String(transaction.price)?.slice(0, 8)}</td>
                <td>{String(transaction.type).toLowerCase() === 'buy' ? <span className="badge badge-success">{transaction.type}</span> : <span className="badge badge-danger">{transaction.type}</span>}</td>
            </tr>
        )
    });

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                    <div className='card-2d portfolio-table'>
                        <h5 style={{ marginBottom: '1.2rem' }}>Holdings</h5>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">ISIN</th>
                                    <th scope="col">Closing Price</th>
                                    <th scope="col">Holdings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listHoldings}
                            </tbody>
                        </table>

                    </div>
                    <div className='card-2d transaction-table'>
                        <h5 style={{ marginBottom: '1.2rem' }}>Transactions</h5>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listTransactions}
                            </tbody>
                        </table>

                    </div>

                </div>
                <div className='col-6'>
                    <div className='card-2d small-chart text-center'>
                        <h5>Current Holdings</h5>
                        <Pie
                            data={portfolioPie}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Current Holdings',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'top'
                                }
                            }}
                        />
                    </div>
                    <div className='card-2d bar-chart text-center'>

                        <h5>Environment Ratings </h5>

                        <Bar
                            data={envRatingPie}
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
        </div>
    );
}

export default Portfolio;