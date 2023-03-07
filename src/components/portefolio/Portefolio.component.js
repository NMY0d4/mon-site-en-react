import { Fragment } from 'react';
import Project from '../project/Project.component';
import './portefolio.styles.scss';
import { selectProjects } from '../../store/projects/project.selector';
import { useSelector } from 'react-redux';

const Portefolio = () => {
  const projects = useSelector(selectProjects);
  // console.log(projects);

  return (
    <Fragment>
      <div className='portfolio-container full-container'>
        <h2 className='portfolio-title'>Portfolio</h2>
        {projects &&
          projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
      </div>
    </Fragment>
  );
};

export default Portefolio;
