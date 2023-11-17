import React from 'react';
import "./Post.css";
import { BiLike } from "react-icons/bi";
import {data} from "../../data.js";

const Post = () => {
  return (
    <div className='post'>
      <span>{data.length} Post</span>
      <div className="posts">
        {data.map(item => (
          <div className="pack" key={item.date}>
            <div className="head">
              <h2>{item.title}</h2>
              <BiLike className='icon'/>
            </div>
            <p>{item.paragraph}</p>
            <div className="bottom">
              <div className="left">
                <h7>{item.feeling}</h7> by anujgosalia
              </div>
              <div className="right">
                <p>{item.date}</p>
                <p>2 mins read</p>
                <p>102 views</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
