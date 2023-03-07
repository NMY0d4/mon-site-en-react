import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../../../store/context/favorites.context';
import styles from './meetUpNav.module.scss';

export default function MeetupNav() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={styles.MeetUpNavContainer}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/trainReact/meetupsHome/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/trainReact/meetupsHome/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/trainReact/meetupsHome/favorites'>
              My Favorites{' '}
              <span className={styles.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
