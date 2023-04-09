import "./style.css";
import React from "react";
import TotalCost from "../../assets/images/total-cost.png";
import TotalSales from "../../assets/images/total-sales.png";
import ThisWeek from "../../assets/images/this-week.png";
import Revenue from "../../assets/images/revenue.png";
import LastPayment from "../../assets/images/last-payment.png";

const Card = () => {
    return (
        <>
            <section id="card">
                <div className="container d-flex justify-content-between">
                    {/* Total cost */}
                    <div className="card-item card mb-3">
                        <div className="row g-0">
                            <div className="d-flex justify-content-center align-items-center col-md-4">
                                <img src={TotalCost} className="img-fluid rounded-start" alt="Total Cost" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-white">Total Cost</h5>
                                    <p className="card-text text-secondary">$31.868</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Total sales */}
                    <div className="card-item card mb-3">
                        <div className="row g-0">
                            <div className="d-flex justify-content-center align-items-center col-md-4">
                                <img src={TotalSales} className="img-fluid rounded-start" alt="Total Sales" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-white">Total Sales</h5>
                                    <p className="card-text text-secondary">$66,053</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* This week */}
                    <div className="card-item card mb-3">
                        <div className="row g-0">
                            <div className="d-flex justify-content-center align-items-center col-md-4">
                                <img src={ThisWeek} className="img-fluid rounded-start" alt="This Week" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-white">This Week</h5>
                                    <p className="card-text text-secondary">$35,000,00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Revenue */}
                    <div className="card-item card mb-3">
                        <div className="row g-0">
                            <div className="d-flex justify-content-center align-items-center col-md-4">
                                <img src={Revenue} className="img-fluid rounded-start" alt="Revenue" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-white">Revenue</h5>
                                    <p className="card-text text-secondary">$63,00K</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Last payment */}
                    <div className="card-item card mb-3">
                        <div className="row g-0">
                            <div className="d-flex justify-content-center align-items-center col-md-4">
                                <img src={LastPayment} className="img-fluid rounded-start" alt="Last Payment" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-white">$1250</h5>
                                    <p className="card-text text-secondary">Last payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Card;
