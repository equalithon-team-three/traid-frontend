import React, { useEffect, useState } from 'react';
import Adapter from './Adapter';

const Post = ({ id: postId }) => {

  const [ post, setPost ] = useState([]);

  useEffect(() => {
    Adapter.getPost(postId, setPost)
  }, [ postId, setPost ]); // no array runs on every render, empty array is essentially componentDidMount

  return (
    <>
      <h1>{post.title}</h1>
    </>
  );
};

export default Post;
