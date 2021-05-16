import "./navbar.css";
import image from "../Assets/Images/mm-logo-react.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#">
                <img className="navbar__logo-container" src={image} />
            </a>
            <a class="navbar__toggler" href="#">
                <span>
                    <i
                        className="fas fa-align-justify"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    ></i>
                </span>
            </a>
        </nav>
    );
};

export default Navbar;
