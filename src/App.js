import "./App.styles.scss";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/header/Hero.component";
import Navbar from "./routes/navbar/Navbar.component";
import Portefolio from "./components/portefolio/Portefolio.component";
import TrainReact from "./components/trainReact/TrainReact.component";
import Todos from "./components/trainReact/todosWithMax/Todos/Todos.component";
import MeetupsHome from "./components/trainReact/meetupsWithMax/MeetupsHome";

const App = () => {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Hero />} />
                    <Route path="portefolio" element={<Portefolio />} />
                    <Route path="trainReact/*" element={<TrainReact />} />
                    <Route path="trainReact/todos" element={<Todos />} />
                    <Route
                        path="trainReact/meetupsHome/*"
                        element={<MeetupsHome />}
                    />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
