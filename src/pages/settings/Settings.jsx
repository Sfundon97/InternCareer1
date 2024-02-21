import Sidebar from "../../components/sidebar/sidebar"
import "./settings.css"
import React from 'react'

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Account</span>
            <span className="settingsUpdateTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsProfilePicture">
                <img 
                src="https://images.squarespace-cdn.com/content/v1/5a908bea1aef1d83b3152e4f/1667233995921-IJ7LBXFREWO5ZG1GKCHE/unsplash-image-noydSJIWMSg.jpg"
                alt="">
                </img>
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Sfundo"/>
            <label>Email</label>
            <input type="email" placeholder="sfundo@gmail.com"/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsUpdate" p>Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
