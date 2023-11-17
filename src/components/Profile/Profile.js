import React from 'react'
import "./Profile.css"
import cover from "../../assets/cover.jpg"
import profile from "../../assets/profile.jpeg"
import {GiCutDiamond} from "react-icons/gi"
import {TiTick} from "react-icons/ti"
import { CiStar } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const Profile = () => {
  return (
    <div className='profile'>
      <div className="cover">
        <img src={cover} alt="" />
      </div>
      <div className="about">
        <div className="ppic">
          <img src={profile} alt="" />
        </div>
        <div className="downright">
        <div className="name">
          <h3>Anuj Gosalia</h3>
          <span className='icons'><GiCutDiamond style={{fontSize:"25px",background:"blue",color:"white", borderRadius:"50%",padding:"5px"}} className='smallicon'/> <TiTick style={{fontSize:"25px",backgroundColor:"green",color:"black", borderRadius:"50%",padding:"5px"}} className='smallicon'/></span>
        </div>
        <div className="follower">
          <span><h5>6250</h5>
          <p>Followers</p></span>
          <span><h5>250</h5>
          <p>Following</p></span>
        </div>

        </div>
      </div>
      <div className="highlight">
        <p>Co-founder & CEO at Terribly Tiny Tales.</p>
        <a href="https://www.google.com/" target='blank'>https://www.google.com/</a>
        <div className="likes">
          <span className='likeicon'><CiStar className='conicon' style={{backgroundColor:"lightblue"}}/> <p>128</p></span>
          <span className='likeicon'><BiLike className='conicon' style={{backgroundColor:"yellow"}}/> <p>128</p></span>
          <span className='likeicon'><FaEye className='conicon' style={{backgroundColor:"gray"}}/> <p>128</p></span>
          <span className='likeicon'><FaRegHeart className='conicon' style={{backgroundColor:"lightred"}}/> <p>128</p></span>
        </div>
      </div>
    </div>
  )
}

export default Profile
