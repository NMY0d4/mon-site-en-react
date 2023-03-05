import styles from './MeetupList.module.scss';
import MeetupItem from './MeetupItem.meetups';

export default function MeetupList({ meetups }) {
    return (
        <ul className={styles.list}>
            {meetups.map((meetup) => (
                <MeetupItem key={meetup.id} meetup={meetup} />
            ))}
        </ul>
    );
}
