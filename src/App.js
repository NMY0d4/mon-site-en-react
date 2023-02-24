import "./App.styles.scss";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/header/Hero.component";
import Navbar from "./routes/navbar/Navbar.component";
import Portefolio from "./components/portefolio/Portefolio.component";

const App = () => {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Hero />} />
                    <Route path="portefolio" element={<Portefolio />} />
                    {/* <Route path="blog" element={<Blog />} /> */}
                </Route>
            </Routes>
        </div>
    );
};

export default App;
