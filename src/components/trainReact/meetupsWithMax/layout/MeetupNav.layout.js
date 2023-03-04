import React from "react";
import { Link } from "react-router-dom";
import styles from "./meetUpNav.module.scss";

export default function MeetupNav() {
    return (
        <header className={styles.MeetUpNavContainer}>
            <div className={styles.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/trainReact/meetupsHome/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/trainReact/meetupsHome/new-meetup">
                            Add New Meetup
                        </Link>
                    </li>
                    <li>
                        <Link to="/trainReact/meetupsHome/favorites">
                            My Favorites
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
