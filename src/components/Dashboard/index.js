import "./style.css";
import Card from "../Card";
import EarningChart from "../EarningChart";
import React from "react";
import OrdersChart from "../OrdersChart";
import ProfitChart from "../ProfitChart";

const Dashboard = () => {
    return (
        <>
            <section className="dashboard">
                {/* Dashboard title */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="fs-3 h1 text-white">Marketing Dashboard</p>
                            <p className="fs-6 text-secondary">
                                Home / <span className="text-success">Dashboard</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    {/* top row */}
                    <div className="row">
                        <div className="col ps-0 pe-0">
                            {/* Card */}
                            <Card />
                        </div>
                    </div>

                    {/* bottom row */}
                    <div className="row">
                        {/* left column */}
                        <div className="left-column col col-7">
                            <div className="row">
                                <div className="col col-5 d-flex justify-content-center">
                                    {/* earnings chart */}
                                    <EarningChart />
                                </div>
                                <div className="col col-4 d-flex justify-content-center">
                                    {/* orders chart */}
                                    <OrdersChart />
                                </div>
                                <div className="col col-3 d-flex justify-content-center">
                                    {/* profit chart */}
                                    <ProfitChart />
                                </div>
                            </div>
                        </div>

                        {/* right column */}
                        <div className="col col-auto"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
