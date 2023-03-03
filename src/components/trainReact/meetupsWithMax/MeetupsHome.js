import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

export default function MettupsHome() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AllMeetupsPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/newMeetup" element={<NewMeetupPage />} />
            </Routes>
        </div>
    );
}
