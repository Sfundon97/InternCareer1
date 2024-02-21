import "./post.css"
import React from 'react'
import {Link} from "react-router-dom"

export default function Post() {
  return (
    <div className="post">
      <img 
      className="postImg"
      src="https://img.fruugo.com/product/1/62/589018621_max.jpg"
      alt="">

      </img>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
          <span className="postCat">Music</span>
        </div>
        <span className="postTitle"> <Link to="/single">Lorem ipsum dolor sit amet!</Link>
        </span>
        <hr/>
        <span className="postDate">1 Hour Ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Optio minus eaque vero officia, accusamus inventore facere dicta ratione sequi rem 
      laudantium magnam error quam eum illo veritatis. Debitis, officia labore?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Optio minus eaque vero officia, accusamus inventore facere dicta ratione sequi rem 
      laudantium magnam error quam eum illo veritatis. Debitis, officia labore?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Optio minus eaque vero officia, accusamus inventore facere dicta ratione sequi rem 
      laudantium magnam error quam eum illo veritatis. Debitis, officia labore?
      </p>
    </div>
  )
}
