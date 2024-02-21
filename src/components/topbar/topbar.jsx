import "./topbar.css"
import {Link} from "react-router-dom"
import React from 'react'

export default function TopBar(){
    const user = false;
    return(
        <div className="TopBar">
            <div className="topLeft">
                <a href="https://facebook.com/innon97"><i className="topIcon fa-brands fa-facebook"></i></a>
                <a href="https://instagram.com/sfundo_nondi"><i className="topIcon fa-brands fa-instagram"></i></a>
                <a href="https://wa.me/27833394920"><i className="topIcon fa-brands fa-whatsapp"></i></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/home" style={{textDecoration: "none", color:""}}>Home</Link></li>
                    <li className="topListItem"><Link to="/about" style={{textDecoration: "none", color:""}}>About</Link></li>
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
                       <Link className="link" to="/login" style={{textDecoration: "none", color:"black"}}>
                        Login
                        </Link>
                        </li>
                        <li className="topListItem">
                       <Link className="link" to="/register" style={{textDecoration: "none", color:"black"}}>
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