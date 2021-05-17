import { useState } from "react";
import "./navbar.css";
import image from "../Assets/Images/mm-logo-react.svg";
import { MdQueueMusic } from "react-icons/md";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const openMenu = () => setShowMenu(true);
    const closeMenu = () => setShowMenu(false);

    return (
        <nav className="navbar">
            <a href="#">
                <img className="navbar__logo-container" src={image} />
            </a>
            <a
                href="#"
                className={showMenu ? "navbarToggler hide" : "navbarToggler"}
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={openMenu}
            >
                <MdQueueMusic />
            </a>
            <div className={showMenu ? "navbar__link-wrapper slide" : "navbar__link-wrapper"}>
                <ul>
                    <li className="navbar__link">
                        <a className="navbar__link--item navbar__link--close" href="#" onClick={closeMenu}>
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
