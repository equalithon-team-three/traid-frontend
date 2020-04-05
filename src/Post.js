import React, { useEffect, useState } from 'react';
import Adapter from './Adapter';
import PostCard from './PostCard';

const Post = ({ id: postId }) => {
  const [post, setPost] = useState({matching_posts: []});

  useEffect(() => {
    Adapter.getPost(postId, setPost);
  }, [postId, setPost]); // no array runs on every render, empty array is essentially componentDidMount

  return (
    <>
      <h1>{post.title}</h1>
      <p class="lead">{post.details}</p>

      <p class='lead'>Related Posts</p>
      <ul>
        {post.matching_posts.map(post => {
          return <PostCard post={post}/>
        })}
      </ul>
    </>
  );
};

export default Post;
