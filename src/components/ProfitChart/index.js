import "./style.css";
import React from "react";
import ProfitGraph from "../../assets/images/profit-graph.png";

const ProfitChart = () => {
    return (
        <>
            <section id="profit-chart">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="profit-title text-white fw-bold">Profit</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="profit-value fs-3">8,24k</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <img src={ProfitGraph} alt="Profit Graph" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfitChart;
