import "./sidebar.css"
import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="data:image/png;base64,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"
          alt=""></img>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur nemo provident consequuntur voluptate non. Consequatur, expedita atque illum saepe vero eos magni rerum
          ad porro, velit consequuntur ut fuga molestias?</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Sport</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW</span>
        <div className="sidebarSocial">
          <a href="https://facebook.com/innon97"><i className="topIcon fa-brands fa-facebook"></i></a>
          <a href="https://instagram.com/sfundo_nondi"><i className="topIcon fa-brands fa-instagram"></i></a>
          <a href="https://wa.me/27833394920"><i className="topIcon fa-brands fa-whatsapp"></i></a>
        </div>
      </div>


    </div>
  )
}
