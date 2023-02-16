import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../home/Home.component";
import "./navbar.styles.scss";

const Navbar = () => {
    return (
        <section className="navbar-container">
            <button className="navbar-container__button">
                <span className="navbar-container__icon">&nbsp;</span>
            </button>
            <div className="navbar">
                Navbar
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </section>
    );
};

export default Navbar;
