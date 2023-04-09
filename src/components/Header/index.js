import "./style.css";
import React from "react";
import DisplayProfile from "../../assets/images/display-profile.png";

const Header = () => {
    return (
        <>
            <section id="header">
                <div className="container-fluid p-3">
                    <div className="row">
                        <div className="col d-flex justify-content-end">
                            <img src={DisplayProfile} alt="Display Profile" className="display-profile me-3" />
                            <span className="text-white my-auto">Hello, Stephanie!</span>
                        </div>
                        <hr className="line" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
