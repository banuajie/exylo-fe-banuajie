import "./style.css";
import Card from "../Card";
import EarningChart from "../EarningChart";
import React from "react";
import OrdersChart from "../OrdersChart";

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
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    {/* earnings chart */}
                                    <EarningChart />
                                </div>
                                <div className="col">
                                    {/* orders chart */}
                                    <OrdersChart />
                                </div>
                            </div>
                        </div>

                        {/* right column */}
                        <div className="col"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
