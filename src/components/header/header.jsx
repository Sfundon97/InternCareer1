import "./header.css"
import React from 'react'

export default function Header(){
    return(
        <div className="header">
<div className="headerTitles">
    <span className="headerTitleSm"></span>
    <span className="headerTitleLg">Blog</span>
    </div> 
    <img 
    className="headerImg" 
    src="https://images.squarespace-cdn.com/content/v1/5a908bea1aef1d83b3152e4f/1667233995921-IJ7LBXFREWO5ZG1GKCHE/unsplash-image-noydSJIWMSg.jpg"
    alt="">

    </img>    
       </div>
    )
}

