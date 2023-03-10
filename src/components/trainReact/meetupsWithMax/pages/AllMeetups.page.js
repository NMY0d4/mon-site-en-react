import { useEffect, useState } from 'react';
import MeetupList from '../meetups/MeetupList.meetups';
import styles from './AllMeetups.module.scss';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    const datas = async () => {
      await fetch(
        'www.https://gmweb-react-default-rtdb.europe-west1.firebasedatabase.app/meetups'
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          return data;
        });
    };
    setIsLoading(false);
    setLoadedMeetups(datas);
  }, []);

  console.log(loadedMeetups);

  return (
    <section className={styles.allMeetups}>
      <h1 className='meetup-h1'>All Meetups</h1>
      {isLoading ? <p>Loading page...</p> : <MeetupList meetups={DUMMY_DATA} />}
    </section>
  );
}
