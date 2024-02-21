import "./singlePost.css"
import React from 'react'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img
         src="https://images.squarespace-cdn.com/content/v1/5a908bea1aef1d83b3152e4f/1667233995921-IJ7LBXFREWO5ZG1GKCHE/unsplash-image-noydSJIWMSg.jpg" 
         alt="" 
         className="singlePostImg" />
         <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur
         <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
         </div>
         </h1>
         <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Sfundo</b></span>
            <span className="singlePostDate">2 Hours Ago</span>
            
         </div>
         <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi nihil, 
            quaerat molestias quisquam et! Nam, iusto? Quo veniam unde pariatur dignissimos,
             at corrupti voluptatum nisi, magnam eaque quod ad.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi nihil, 
            quaerat molestias quisquam et! Nam, iusto? Quo veniam unde pariatur dignissimos,
             at corrupti voluptatum nisi, magnam eaque quod ad.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi nihil, 
            quaerat molestias quisquam et! Nam, iusto? Quo veniam unde pariatur dignissimos,
             at corrupti voluptatum nisi, magnam eaque quod ad.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi nihil, 
            quaerat molestias quisquam et! Nam, iusto? Quo veniam unde pariatur dignissimos,
             at corrupti voluptatum nisi, magnam eaque quod ad.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nisi nihil, 
            quaerat molestias quisquam et! Nam, iusto? Quo veniam unde pariatur dignissimos,
             at corrupti voluptatum nisi, magnam eaque quod ad.
            </p>
      </div>
    </div>
  )
}
