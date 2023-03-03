import React from "react";
import { NavLink } from "react-router-dom";

import "./trainReact.styles.scss";

const TrainReact = () => {
    return (
        <div className="train-container">
            <h1>Trainning day</h1>
            <ul>
                <li>
                    <NavLink to="todos">Todos-list</NavLink>
                </li>
                <li>
                    <NavLink to="meetupsHome">Meetups Project</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default TrainReact;
