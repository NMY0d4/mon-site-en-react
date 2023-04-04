import React from 'react';
import { NavLink } from 'react-router-dom';

import './trainReact.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faLocation } from '@fortawesome/free-solid-svg-icons';

const TrainReact = () => {
  return (
    <div className='train-container'>
      <h1>Trainning day</h1>
      <ul>
        <li>
          <NavLink className='container-link' to='todos'>
            <FontAwesomeIcon className='link-trainReact' icon={faList} />
            Todos-list
          </NavLink>
        </li>
        <li>
          <NavLink className='container-link' to='meetupsHome'>
            <FontAwesomeIcon className='link-trainReact' icon={faLocation} />
            Meetups Project
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default TrainReact;
