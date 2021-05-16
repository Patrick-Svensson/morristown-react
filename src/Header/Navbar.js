import "./navbar.css";
import image from "../Assets/Images/mm-logo-react.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#">
                <img className="navbar__logo-container" src={image} />
            </a>
        </nav>
    );
};

export default Navbar;
