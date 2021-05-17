import { useState } from "react";
import "./navbar.css";
import image from "../Assets/Images/mm-logo-react.svg";
import { MdQueueMusic } from "react-icons/md";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const openMenu = () => setMenu(true);
    const closeMenu = () => setMenu(false);

    return (
        <nav className="navbar">
            <a href="#">
                <img className="navbar__logo-container" src={image} />
            </a>
            <a
                href="#"
                className={menu ? "navbarToggler hide" : "navbarToggler"}
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={openMenu}
            >
                <MdQueueMusic />
            </a>
            <div className={menu ? "navbar__link-container menu" : "navbar__link-container"}>
                <ul className="navbar__link-wrapper">
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
