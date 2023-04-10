import { Link } from "react-router-dom";
import "./style.css";
import React from "react";

const Footer = () => {
    return (
        <>
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-1">
                            <Link className="footer-link">
                                <p className="text-footer">Privacy Policy</p>
                            </Link>
                        </div>
                        <div className="col col-1">
                            <Link className="footer-link">
                                <p className="text-footer">Terms of Use</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
