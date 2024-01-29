import { Link } from "react-router-dom";
import Logo from "../assets/svgs/Logo.svg";
function Navbar() {
    return (
        <nav>
            <div className="nav-logo-container">
                <Link to='/' className="nav-logo">
                    <img src={Logo} alt="dezyn-freak logo" />
                </Link>
            </div>
            <div className="nav-link">
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='contact'>Contact Us</Link>
            </div>
            <div className="nav-cta">
                <a>
                    <span>
                        Hire Me
                    </span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_21_29)">
                            <path d="M4.09601 13.0627C3.98773 13.1757 3.92879 13.3272 3.93215 13.4837C3.93551 13.6401 4.00089 13.7889 4.11393 13.8972C4.22696 14.0055 4.37838 14.0644 4.53487 14.0611C4.69137 14.0577 4.84012 13.9923 4.9484 13.8793L9.98385 8.62289L12.9672 11.4808C13.0515 11.5615 13.1578 11.6153 13.2727 11.6355C13.3876 11.6558 13.5059 11.6415 13.6127 11.5946C13.7195 11.5476 13.8099 11.4701 13.8727 11.3717C13.9354 11.2734 13.9676 11.1586 13.9652 11.042L13.8219 4.36621C13.8184 4.20984 13.753 4.06125 13.6401 3.95305C13.5272 3.84486 13.3759 3.78592 13.2195 3.78917L6.54373 3.93248C6.42711 3.93506 6.31386 3.97214 6.2183 4.03904C6.12273 4.10594 6.04914 4.19966 6.0068 4.30836C5.96447 4.41706 5.9553 4.53587 5.98045 4.64978C6.0056 4.76369 6.06395 4.8676 6.14811 4.94837L9.13147 7.80633L4.09601 13.0627Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_21_29">
                                <rect width="14.1647" height="11.017" fill="white" transform="translate(0 10.2286) rotate(-46.2298)" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;