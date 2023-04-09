import "./style.css";
import React from "react";
import Logo from "../../assets/images/logo.png";
import Home from "../../assets/images/home.png";
import Reports from "../../assets/images/reports.png";
import Notifications from "../../assets/images/notifications.png";
import NotificationsOne from "../../assets/images/notifications-one.png";
import Settings from "../../assets/images/settings.png";
import LogOut from "../../assets/images/logout.png";

const SideMenu = () => {
    return (
        <>
            <section id="side-menu">
                {/* Logo */}
                <div className="container mb-5">
                    <div className="row">
                        <div className="col">
                            <img src={Logo} alt="Logo" />
                        </div>
                    </div>
                </div>

                {/* List menu */}
                <div className="container list-menu">
                    {/* Home menu */}
                    <div className="row menu pt-3 pb-1">
                        <div className="col col-2">
                            <img src={Home} alt="Home" />
                        </div>
                        <div className="col">
                            <p className="text-menu">Home</p>
                        </div>
                    </div>

                    {/* Reports menu */}
                    <div className="row menu pt-3 pb-1">
                        <div className="col col-2">
                            <img src={Reports} alt="Reports" />
                        </div>
                        <div className="col">
                            <p className="text-menu">Reports</p>
                        </div>
                    </div>

                    {/* Notifications menu */}
                    <div className="row menu pt-3 pb-1">
                        <div className="col col-2">
                            <img src={Notifications} alt="Notifications" />
                        </div>
                        <div className="col">
                            <p className="text-menu">Notifications</p>
                        </div>
                        <div className="col">
                            <img src={NotificationsOne} alt="NotificationsOne" />
                        </div>
                    </div>

                    {/* Settings menu */}
                    <div className="row menu pt-3 pb-1">
                        <div className="col col-2">
                            <img src={Settings} alt="Settings" />
                        </div>
                        <div className="col">
                            <p className="text-menu">Settings</p>
                        </div>
                    </div>

                    {/* Log out menu */}
                    <div className="row menu pt-3 pb-1">
                        <div className="col col-2">
                            <img src={LogOut} alt="LogOut" />
                        </div>
                        <div className="col">
                            <p className="text-menu">Log out</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SideMenu;
