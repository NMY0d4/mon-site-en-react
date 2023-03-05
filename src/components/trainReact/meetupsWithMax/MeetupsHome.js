import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups.page';
import FavoritesPage from './pages/Favorites.page';
import NewMeetupPage from './pages/NewMeetup.page';
import './meetupsHome.styles.scss';
import Layout from './layout/Layout.layout';

export default function MettupsHome() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<AllMeetupsPage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
                <Route path='/new-meetup' element={<NewMeetupPage />} />
            </Routes>
        </Layout>
    );
}
