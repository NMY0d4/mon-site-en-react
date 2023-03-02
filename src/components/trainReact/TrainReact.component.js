import React from "react";
import Todos from "./todosWithMax/Todos/Todos.component";

import "./trainReact.styles.scss";

const TrainReact = () => {
    return (
        <div className="train-container">
            <h1>Trainning day</h1>
            <Todos />
        </div>
    );
};

export default TrainReact;
