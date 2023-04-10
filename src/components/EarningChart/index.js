import "./style.css";
import React, { useState } from "react";
import EarningGraph from "../../assets/images/earnings-graph.png";
import EarningGraphOther from "../../assets/images/earnings-graph-other.png";
import GreenDot from "../../assets/images/green-dot.png";
import OrangeDot from "../../assets/images/orange-dot.png";

const EarningChart = () => {
    const [range, setRange] = useState("");

    return (
        <>
            <section id="earning-chart">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col col-7">
                            <p className="earning-title text-white">Earnings</p>
                        </div>
                        <div className="col col-5">
                            <select
                                className="earning-range form-select form-select-sm"
                                value={range}
                                onChange={(event) => {
                                    setRange(event.target.value);
                                }}
                            >
                                <option value="This Week">This Week</option>
                                <option value="Last Week">Last Week</option>
                                <option value="2 Weeks ago">2 Weeks ago</option>
                                <option value="Last Month">Last Month</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">{range === "This Week" ? <img src={EarningGraph} alt="Earning Graph" /> : <img src={EarningGraphOther} alt="Earning Graph" />}</div>

                        <div className="col mb-2">
                            <div className="row">
                                <div className="col col-1 d-flex justify-content-center align-items-center">
                                    <img src={GreenDot} alt="Green Dot" />
                                </div>
                                <div className="col col-auto d-flex flex-column justify-content-between">
                                    <p className="earning-desc mt-2 mb-1">Total Sales</p>
                                    <p className="earning-value mt-1 mb-2">{range === "This Week" ? "251K" : "165K"}</p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col col-1 d-flex justify-content-center align-items-center">
                                    <img src={OrangeDot} alt="Orange Dot" />
                                </div>
                                <div className="col">
                                    <p className="earning-desc mt-2 mb-1">Total Orders</p>
                                    <p className="earning-value mt-1 mb-2">{range === "This Week" ? "176K" : "147K"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EarningChart;
