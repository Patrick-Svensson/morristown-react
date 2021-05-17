import "./navbar.css";
import image from "../Assets/Images/mm-logo-react.svg";
import { MdQueueMusic } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#">
                <img className="navbar__logo-container" src={image} />
            </a>
            <a className="navbar__toggler" href="#">
                <span className="navbarToggler" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <MdQueueMusic />
                </span>
            </a>
            <div className="navbar__link-container" id="navDropdownMenu">
                <ul className="navbar__link-wrapper animate__animated">
                    <li className="navbar__link">
                        <a className="navbar__link--item navbar__link--close" href="#">
                            &#215;
                        </a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__link--item" href="#">
                            A-style
                        </a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__link--item" href="#">
                            F-style
                        </a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__link--item" href="#">
                            View Cart
                        </a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__link--item" href="#">
                            About Us
                        </a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__link--item" href="#">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
