import "./project.styles.scss";
import React from "react";

const Project = ({ project }) => {
    const { imageURL, title, link } = project;
    return (
        <div className="project-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageURL})` }}
            />

            <a
                href={link}
                className="project-body-container"
                rel="noreferrer"
                target="_blank"
            >
                <h2>{title}</h2>
                <p>See Now </p>
            </a>
        </div>
    );
};

export default Project;
