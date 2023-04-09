import React from "react";
import SideMenu from "../../components/SideMenu";
import Header from "../../components/Header";

const HomePage = () => {
    return (
        <div className="container-fluid p-0" style={{ background: "#151A2E" }}>
            <div className="row">
                {/* Left side */}
                <div className="col col-2 left-side">
                    <SideMenu />
                </div>

                {/* Right side */}
                <div className="col col-10 right-side">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Header />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
