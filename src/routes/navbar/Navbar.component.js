import React, { Fragment, useState } from 'react';
import './navbar.styles.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faBriefcase,
    faBrain,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBtnclick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <Fragment>
            <section className={`navbar-container ${isOpen ? 'nav-open' : ''}`}>
                <button
                    className='navbar-container__button'
                    onClick={handleBtnclick}
                >
                    <span className='navbar-container__icon'>&nbsp;</span>
                </button>
                <div className='navbar'>
                    <NavLink to='/'>
                        <FontAwesomeIcon className='link' icon={faHouse} />
                    </NavLink>
                    <NavLink to='portefolio'>
                        <FontAwesomeIcon className='link' icon={faBriefcase} />
                    </NavLink>
                    <NavLink to='trainReact'>
                        <FontAwesomeIcon className='link' icon={faBrain} />
                    </NavLink>
                </div>
            </section>
            <Outlet />
        </Fragment>
    );
};

export default Navbar;
