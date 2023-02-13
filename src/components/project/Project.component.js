import "./project.styles.scss";
import React from "react";

const Project = ({ project }) => {
    const { imageURL, title } = project;
    return (
        <div className="project-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageURL})` }}
            />
            <div className="project-body-container">
                <h2>{title}</h2>
                <p>See Now </p>
            </div>
        </div>
    );
};

export default Project;
