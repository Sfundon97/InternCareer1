import "./login.css"
import React from 'react'
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <div className="login">
        
      <form className="loginForm">
      <span className="loginTitle">
            Login
        </span>
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Your Email"/>
        <label>Password</label>
        <input type="passord" className="loginInput" placeholder="Your Password"/>
        <button className="loginButton">
          <Link className="link" to="/home">Login</Link>
        </button>
        <label>Not Registered? Click below!</label>
        <button className="registerButton">
          <Link className="link" to="/register">Register</Link>
        </button>
      </form>
      
    </div>
  )
}
