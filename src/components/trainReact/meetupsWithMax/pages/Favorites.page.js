import React, { useContext } from 'react';
import FavoritesContext from '../../../../store/context/favorites.context';
import MeetupList from '../meetups/MeetupList.meetups';

export default function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content =
    favoritesCtx.totalFavorites === 0 ? (
      <p>You got no favorites yet. Start adding some?</p>
    ) : (
      <MeetupList meetups={favoritesCtx.favorites} />
    );
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
