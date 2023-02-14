import "./hero.styles.scss";
import logoDarkGreen from "../../images/logo_original_vert_fonce.png";

export const Hero = () => {
    return (
        <header
            id="header"
            class="header"
            //         style={{
            //             backgroundImage: `linear-gradient(
            //         to right bottom,
            //         rgba(113,162,35, 0.2),
            //         rgba(195,237,108, 0.5)
            //     ),
            //     url("/images/hero_resize.jpg")
            // `,
            //         }}
        >
            <div class="header__container">
                <h1 class="header__myname heading-1">Grégory Marini</h1>
                <div class="header__logo">
                    <a href="{{path('app_home')}}" class="logo-link">
                        <img
                            src={logoDarkGreen}
                            alt="logo GM_Web"
                            class="logo-icon"
                        />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Hero;
