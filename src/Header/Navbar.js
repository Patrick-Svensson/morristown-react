import { useState } from "react";
import "./navbar.css";
import image from "../Assets/Images/mm-logo-react.svg";
import { MdQueueMusic } from "react-icons/md";

const Navbar = () => {
    /* Toggle menu. */
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar" id="currentPage">
            <a href="#currentPage">
                <img className="navbar__logo-container" src={image} alt="Company Logo" />
            </a>
            <a
                href="#currentPage"
                className={showMenu ? "navbarToggler hide" : "navbarToggler"}
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowMenu(true)}
            >
                <MdQueueMusic />
            </a>
            <div className={showMenu ? "navbar__link-wrapper slide" : "navbar__link-wrapper"}>
                <ul>
                    <li className="navbar__link">
                        <a
                            className="navbar__link--item navbar__link--close"
                            href="#currentPage"
                            onClick={() => setShowMenu(false)}
                        >
                            &#215;
                        </a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__link--item" href="#currentPage">
                            A-style
                        </a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__link--item" href="#currentPage">
                            F-style
                        </a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__link--item" href="#currentPage" onClick={() => setShowMenu(false)}>
                            View Cart
                        </a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__link--item" href="#currentPage">
                            About Us
                        </a>
                    </li>
                    <li className="navbar__link">
                        <a className="navbar__link--item" href="#currentPage">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
