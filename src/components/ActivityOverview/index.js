import "./style.css";
import React from "react";
import ArrowUp from "../../assets/images/arrow-up.png";
import CircleActivity from "../../assets/images/circle-activity.png";

const ActivityOverview = () => {
    return (
        <>
            <section id="activity-overview">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="activity-title text-white fs-5 h1 mb-3">Activity overview</p>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <img src={ArrowUp} alt="ArrowUp" />
                            <span className="ms-2 text-white">16% this month</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-1">
                            <img src={CircleActivity} alt="Circle Activity" />
                            <div className="line-activity d-flex">
                                <div className="vr text-white"></div>
                            </div>
                        </div>
                        <div className="col col-11">
                            <p className="activity-detail my-auto">
                                <b>Nick Mark</b> Mentioned <b>Sara Smith</b> In New Post
                            </p>
                            <p className="activity-date my-auto">11 JUL 8:10 PM</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-1">
                            <img src={CircleActivity} alt="Circle Activity" />
                            <div className="line-activity d-flex">
                                <div className="vr text-white"></div>
                            </div>
                        </div>
                        <div className="col col-11">
                            <p className="activity-detail my-auto">
                                The <b>Post Name</b> was removed by <b>Nick Mark</b>
                            </p>
                            <p className="activity-date my-auto">11 JUL 9:10 PM</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-1">
                            <img src={CircleActivity} alt="Circle Activity" />
                            <div className="line-activity d-flex">
                                <div className="vr text-white"></div>
                            </div>
                        </div>
                        <div className="col col-11">
                            <p className="activity-detail my-auto">
                                <b>Patrick Sulivan</b> Published a New Post
                            </p>
                            <p className="activity-date my-auto">12 JUL 10:10 PM</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-1">
                            <img src={CircleActivity} alt="Circle Activity" />
                            <div className="line-activity d-flex">
                                <div className="vr text-white"></div>
                            </div>
                        </div>
                        <div className="col col-11">
                            <p className="activity-detail my-auto">
                                <b>240+ users</b> have subscribed to Newsletter #1
                            </p>
                            <p className="activity-date my-auto">18 JUL 19:10 PM</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-1">
                            <img src={CircleActivity} alt="Circle Activity" />
                            <div className="line-activity d-flex">
                                <div className="vr text-white"></div>
                            </div>
                        </div>
                        <div className="col col-11">
                            <p className="activity-detail my-auto">
                                <b>The Post Name</b> was suspanded by <b>Nick Mark</b>
                            </p>
                            <p className="activity-date my-auto">11 JUL 9:10 PM</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ActivityOverview;
