import React, { Fragment } from "react";
import Todo from "../Todo/Todo.component";
import "./todos.styles.scss";

export default function Todos() {
    return (
        <Fragment>
            <h1 className="title-train">My Todos</h1>
            <div className="todos-container center-container">
                <Todo text="Learn React" />
                <Todo text="Master React" />
                <Todo text="Explore the full React Course" />
            </div>
        </Fragment>
    );
}
