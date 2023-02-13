import "./portfolio.styles.scss";

const App = () => {
    const categories = [
        { id: 1, title: "React" },
        { id: 2, title: "Symfony" },
        { id: 3, title: "node" },
    ];
    return (
        <div className="portfolio-container">
            {categories.map((category) => (
                <div key={category.id} className="category-container">
                    {/* <img/> */}
                    <div className="cat-body-container">
                        <h2>{category.title}</h2>
                        <p>my blog</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default App;
