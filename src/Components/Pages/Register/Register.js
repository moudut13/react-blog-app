import "./Register.css"
import {Link} from "react-router-dom";
import * as React from "react";

function Register() {
    return(
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" placeholder="Enter your username..." autoFocus={true}/>
                <label>Email</label>
                <input type="text" placeholder="Enter your email..." autoFocus={true}/>
                <label>Email</label>
                <input type="password" placeholder="Enter your password..." autoFocus={true}/>
                <button type="submit" className="registerButton">Register</button>
            </form>
            <button className="loginButton"><Link className="link" to="/login">Login</Link></button>
        </div>
    );
}
export default Register;