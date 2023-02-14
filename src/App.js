import "./App.styles.scss";
import Hero from "./components/header/Hero.component";
import Portefolio from "./components/portefolio/Portefolio.component";
import Navbar from "./routes/navbar/Navbar.component";

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <Portefolio />
        </div>
    );
};

export default App;
