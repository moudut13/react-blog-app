import "./Login.css"
import {Link} from "react-router-dom";
import * as React from "react";

function Login() {
    return(
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" placeholder="Enter your email.." autoFocus={true}/>
                <label>Email</label>
                <input type="password" placeholder="Enter your password.." autoFocus={true}/>
                <button type="submit" className="loginFormButton">Login</button>
            </form>
            <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>
        </div>
    );
}
export default Login;