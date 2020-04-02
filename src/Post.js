import React, { useEffect, useState } from 'react';
import Adapter from './Adapter';

const Post = ({ id: postId }) => {

  const [ post, setPost ] = useState([])

  useEffect(() => {
    Adapter.getPost(postId, setPost)
  }, [])

  return <>
    <h1>{ post.title }</h1>
  </>
}

export default Post;