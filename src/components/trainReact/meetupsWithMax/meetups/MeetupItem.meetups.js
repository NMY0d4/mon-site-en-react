import React from "react";
import styles from "./MeetupItem.module.scss";

export default function MeetupItem({ meetup }) {
    const { image, title, address, description } = meetup;
    return (
        <li className={styles.item}>
            <div className={styles.image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <address>{address}</address>
                <p>{description}</p>
            </div>
            <div className={styles.actions}>
                <button>To Favorites</button>
            </div>
        </li>
    );
}
