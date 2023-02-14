import Project from "../project/Project.component";
import "./portefolio.styles.scss";
import imgForkify from "../../images/portefolio/pexels-elina-fairytale-3806983.jpg";
import imgMarvel from "../../images/portefolio/marvel.png";
import imgRsGarage from "../../images/portefolio/hero_rs.jpg";
import imgReactEcom from "../../images/portefolio/reactEcom.jpg";
import imgNatours from "../../images/portefolio/natours.jpg";
import imgTodayLearn from "../../images/portefolio/todayILearned.jpg";
import { Fragment } from "react";

const Portefolio = () => {
    const projects = [
        {
            id: 1,
            title: "Forkify",
            imageURL: imgForkify,
        },
        {
            id: 2,
            title: "Marvel-Quizz",
            imageURL: imgMarvel,
        },
        {
            id: 3,
            title: "RS garage",
            imageURL: imgRsGarage,
        },
        {
            id: 4,
            title: "React-Ecom",
            imageURL: imgReactEcom,
        },
        {
            id: 5,
            title: "Natours",
            imageURL: imgNatours,
        },
        {
            id: 6,
            title: "Today I Learned",
            imageURL: imgTodayLearn,
        },
    ];

    return (
        <Fragment>
            <h2>Portefolio</h2>
            <div className="portfolio-container">
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
        </Fragment>
    );
};

export default Portefolio;
