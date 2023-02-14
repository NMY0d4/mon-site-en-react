import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../home/Home.component";

const Navbar = () => {
    return (
        <div>
            Navbar
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default Navbar;
