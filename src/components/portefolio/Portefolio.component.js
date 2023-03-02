import { Fragment, useEffect } from "react";
import Project from "../project/Project.component";
import "./portefolio.styles.scss";
import { setProjects } from "../../store/projects/project.action";
import { useDispatch, useSelector } from "react-redux";
import { projectsdata } from "../../utils/data/projects.data";
import { selectProjects } from "../../store/projects/project.selector";

const Portefolio = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProjects(projectsdata));
    }, [dispatch]);

    const projects = useSelector(selectProjects);
    // console.log(projects);

    return (
        <Fragment>
            <div className="portfolio-container full-container">
                <h2 className="portfolio-title">Portfolio</h2>
                {projects &&
                    projects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
            </div>
        </Fragment>
    );
};

export default Portefolio;
