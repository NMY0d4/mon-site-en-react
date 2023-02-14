import "./App.styles.scss";
import Hero from "./components/header/Hero.component";
import Portefolio from "./components/portefolio/Portefolio.component";

const App = () => {
    return (
        <div className="app-container">
            <Hero />
            <Portefolio />
        </div>
    );
};

export default App;
