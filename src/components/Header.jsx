import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const LoggedInUser = () => {
    // Any API call
    return true;
}
const Header = () => {
    
    const [loggedIn, setLoggedIn] = useState(false);
    return <div className="p-5">
        <div className="flex justify-center p-5">
            <img src="https://questmall.in/images/quest-logo.jpg" alt="logo"/> 
        </div>
        <div className="flex justify-between">
            <nav className="shift">
                <ul className="flex justify-evenly gap-4">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><Link to="/stores/:id">STORE</Link></li>
                    <li><Link to="/mallmap">MALL MAP</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                </ul>
            </nav>
            <div className="authentication">
                { (loggedIn) ? 
                    <button className="log-btn" onClick={ () => setLoggedIn(false)}
                    >Logout</button> :
                    <button className="log-btn" onClick={() => setLoggedIn(true)}
                    >Login</button>
                }
            </div>
        </div>
    </div>
};

export default Header;