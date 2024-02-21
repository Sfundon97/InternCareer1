import "./topbar.css"
import {Link} from "react-router-dom"
import React from 'react'

export default function TopBar(){
    const user = false;
    return(
        <div className="TopBar">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-whatsapp"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/home" style={{textDecoration: "none", color:""}}>Home</Link></li>
                    <li className="topListItem"><Link to="/about" style={{textDecoration: "none", color:""}}>About</Link></li>
                    <li className="topListItem"><Link to="/" style={{textDecoration: "none", color:""}}>Contact</Link></li>
                    <li className="topListItem"><Link to="/blog" style={{textDecoration: "none", color:""}}>Write</Link></li>

                </ul>
            </div>
            <div className="topRight">
                {
                    user ? 
                    (
                        <img
                        className="topImage"
                        src="https://sfundon97.github.io/InternCareer/sfundo.jpg" alt=""/>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                       <Link className="link" to="/login" style={{textDecoration: "none", color:""}}>
                        Login
                        </Link>
                        </li>
                        <li className="topListItem">
                       <Link className="link" to="/register" style={{textDecoration: "none", color:""}}>
                        Register
                        </Link>
                        </li>
                       </ul>
                    )
                }
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}