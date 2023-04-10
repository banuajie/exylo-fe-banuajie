import "./style.css";
import React from "react";
import GreenDot from "../../assets/images/green-dot.png";
import OrangeDot from "../../assets/images/orange-dot.png";
import TotalProfitGraph from "../../assets/images/total-profit-graph.png";
import BalanceGraph from "../../assets/images/latest-month-balance-graph.png";

const TotalProfitChart = () => {
    return (
        <>
            <section id="total-profit-chart">
                <div className="container">
                    <div className="row">
                        <div className="total-profit-left col col-8">
                            <div className="row align-items-center">
                                <div className="col col-6">
                                    <p className="total-profit-title text-white fw-bold my-auto">Total Profit</p>
                                </div>
                                <div className="col">
                                    <img src={GreenDot} alt="Green Dot" />
                                    <span className="earning-notation ms-1">Earning</span>
                                </div>
                                <div className="col">
                                    <img src={OrangeDot} alt="Orange Dot" />
                                    <span className="expense-notation ms-1">Expense</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <img src={TotalProfitGraph} alt="Total Profit Graph" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="total-profit-right col col-4">
                            {/* select year */}
                            <div className="row mb-5">
                                <div className="col d-flex justify-content-center">
                                    <select className="select-year form-select form-select-sm" aria-label=".form-select-sm example">
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                    </select>
                                </div>
                            </div>

                            {/* total profit value */}
                            <div className="row p-3">
                                <div className="col d-flex flex-column justify-content-around align-items-center">
                                    <p className="total-profit-value fs-3 text-white h1">$842.98</p>
                                    <p className="total-profit-balance text-secondary">Latest Month Balance $426.20k</p>
                                </div>
                            </div>

                            {/* total profit value */}
                            <div className="row p-3">
                                <div className="col d-flex justify-content-center">
                                    <img src={BalanceGraph} alt="BalanceGraph" />
                                </div>
                            </div>

                            <div className="row p-3">
                                <div className="col d-flex justify-content-center">
                                    <button className="btn btn-sm btn-success">View Report</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TotalProfitChart;
