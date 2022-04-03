import * as React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css"
import "./girl-avatar.png"

function Topbar(){
    return(
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topList-Item">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topList-Item">
                        <Link className="link" to="/about">About</Link>
                    </li>
                    <li className="topList-Item">
                        <Link className="link" to="/write">Write</Link>
                    </li>
                    <li className="topList-Item">
                        <Link className="link" to="/contact">Contact</Link>
                    </li>
                    <li className="topList-Item">
                        <Link className="link" to="/login">Login</Link>
                    </li>
                    <li className="topList-Item">
                        <Link className="link" to="/register">register</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}
export default Topbar;