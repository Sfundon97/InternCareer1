import "./signUp.css"
import React from 'react'
import {Link} from "react-router-dom"

export default function Register() {
  return (
    <div className="register">
        
      <form className="registerForm">
      <span className="registerTitle">
            Sign-Up
        </span>
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Your Username"/>
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Your Email"/>
        <label>Password</label>
        <input type="passord" className="registerInput" placeholder="Your Password"/>
        <button className="registerButton"><Link  className="link" to="/home">Register</Link></button>
      
      </form>
      
    </div>
  )
}
