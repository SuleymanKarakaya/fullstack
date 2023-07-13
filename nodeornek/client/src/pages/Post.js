import axios from 'axios';
import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    let {id}=useParams();
    const [postObject,setPostObject]= useState({});
    
    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=>{
        setPostObject(response.data)
     });
    },[])

  return (
    <div className='postPage'>
      <div className='leftSide'>
        <div className='title'>Title: {postObject.title}</div>
        <div className='postText'>Title: {postObject.postText}</div>
        <div className='footer'>Title: {postObject.username}</div>
      </div>
      <div className='rightSide'>Comment</div>
    </div>
  )
}

export default Post
