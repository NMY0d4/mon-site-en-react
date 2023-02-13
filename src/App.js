import "./App.styles.scss";
import "./portfolio.styles.scss";

const App = () => {
    const projects = [
        {
            id: 1,
            title: "Forkify",
            imageURL: "./images/portefolio/pexels-elina-fairytale-3806983.jpg",
        },
        {
            id: 2,
            title: "Marvel-Quizz",
            imageURL: "./images/portefolio/marvel.png",
        },
        {
            id: 3,
            title: "RS garage",
            imageURL: "./images/portefolio/hero_rs.jpg",
        },
        {
            id: 4,
            title: "React-Ecom",
            imageURL: "./images/portefolio/reactEcom.jpg",
        },
        {
            id: 5,
            title: "Natours",
            imageURL: "./images/portefolio/natours.jpg",
        },
        {
            id: 6,
            title: "Today I Learned",
            imageURL: "./images/portefolio/todayILearned.jpg",
        },
    ];
    return (
        <div className="app-container">
            <div className="portfolio-container">
                {projects.map(({ title, id, imageURL }) => (
                    <div key={id} className="project-container">
                        <div
                            className="background-image"
                            style={{ backgroundImage: `${imageURL}` }}
                        />
                        <div className="project-body*container">
                            <h2>{title}</h2>
                            <p>See Now</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
