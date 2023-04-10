import "./style.css";
import React from "react";
import SideMenu from "../../components/SideMenu";
import Header from "../../components/Header";
import Dashboard from "../../components/Dashboard";
import Footer from "../../components/Footer";

const HomePage = () => {
    return (
        <div className="home-page container-fluid p-0">
            <div className="row">
                {/* Left side */}
                <div className="col col-2 left-side">
                    <SideMenu />
                </div>

                {/* Right side */}
                <div className="col col-10 right-side">
                    {/* Header */}
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Header />
                            </div>
                        </div>
                    </div>

                    {/* Dashboard */}
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Dashboard />
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
