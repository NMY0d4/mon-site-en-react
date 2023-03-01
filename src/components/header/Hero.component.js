import "./hero.styles.scss";
import logoDarkGreen from "../../images/logo_original_vert_fonce.png";

export const Hero = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__myname heading-1">Grégory Marini</h1>
                <div className="header__logo">
                    <div className="logo-link">
                        <img
                            src={logoDarkGreen}
                            alt="logo GM_Web"
                            className="logo-icon"
                        />
                    </div>
                </div>
            </div>
            <div className="comment">
                <h2>Développeur</h2>
                <h3>Full-Stack</h3>
            </div>
        </header>
    );
};

export default Hero;
