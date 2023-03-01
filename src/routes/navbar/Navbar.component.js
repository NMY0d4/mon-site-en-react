import React, { Fragment, useState } from "react";
import "./navbar.styles.scss";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBtnclick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <Fragment>
            <section className={`navbar-container ${isOpen ? "nav-open" : ""}`}>
                <button
                    className="navbar-container__button"
                    onClick={handleBtnclick}
                >
                    <span className="navbar-container__icon">&nbsp;</span>
                </button>
                <div className="navbar">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="portefolio">Portefolio</NavLink>
                    <NavLink to="trainReact">Trainning</NavLink>
                </div>
            </section>
            <Outlet />
        </Fragment>
    );
};

export default Navbar;
