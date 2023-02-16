import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "../home/Home.component";
import "./navbar.styles.scss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBtnclick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <section className={`navbar-container ${isOpen ? "nav-open" : ""}`}>
            <button
                className="navbar-container__button"
                onClick={handleBtnclick}
            >
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
