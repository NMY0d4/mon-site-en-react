import React from 'react';
import MeetupNav from './MeetupNav.layout';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
    return (
        <div className={`full-container ${styles.meetupsContainer}`}>
            <MeetupNav />
            <main>{children}</main>
        </div>
    );
}
