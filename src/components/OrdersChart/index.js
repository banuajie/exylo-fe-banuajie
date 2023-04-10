import "./style.css";
import React from "react";
import OrdersGraph from "../../assets/images/orders-graph.png";

const OrdersChart = () => {
    return (
        <>
            <section id="orders-chart">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="orders-title text-white fw-bold">Orders</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="orders-value mt-1 mb-4">189k</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={OrdersGraph} alt="Orders Graph" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrdersChart;
