import Card from "../Card";
import "./style.css";
import React from "react";

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

                {/* Card */}
                <Card />
            </section>
        </>
    );
};

export default Dashboard;
