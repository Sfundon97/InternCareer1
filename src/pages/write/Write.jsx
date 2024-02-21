import "./write.css"
import React from 'react'
import {Link} from "react-router-dom"

export default function Write() {
  return (
    <div className="write">
        <img 
        className="writeImg"
        src="https://images.squarespace-cdn.com/content/v1/5a908bea1aef1d83b3152e4f/1667233995921-IJ7LBXFREWO5ZG1GKCHE/unsplash-image-noydSJIWMSg.jpg" 
        alt="">

        </img>
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i className="writeFormIcon fa-solid fa-upload"></i>
            </label>
            <input type="file"  id="fileInput" style={{display: "none"}}/>
            <input type="text" placeholder="Title" id="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea 
            placeholder="Type here..." 
            type="text"
            className="writeInput writeText">
            </textarea>
        </div>
        <button className="writeSubmit"> <Link className="link" to="/home">Publish</Link></button>
      </form>
    </div>
  )
}
