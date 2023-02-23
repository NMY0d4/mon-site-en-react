import "./hero.styles.scss";
import logoDarkGreen from "../../images/logo_original_vert_fonce.png";

export const Hero = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__myname heading-1">Grégory Marini</h1>
                <div className="header__logo">
                    <a href="{{path('app_home')}}" className="logo-link">
                        <img
                            src={logoDarkGreen}
                            alt="logo GM_Web"
                            className="logo-icon"
                        />
                    </a>
                </div>
            </div>
            <div className="comment">
                <p>Développeur</p>
                <p>Full-Stack</p>
            </div>
        </header>
    );
};

export default Hero;
