import React, { useEffect, useState } from 'react';
import Adapter from './Adapter';
import PostCard from './PostCard';

const Post = ({ id: postId }) => {
  const [post, setPost] = useState({ matching_posts: [], post_category: {}, user: {} });

  useEffect(() => {
    Adapter.getPost(postId, setPost);
  }, [postId, setPost]); // no array runs on every render, empty array is essentially componentDidMount

  return (
    <>
      <h1>{ post.request_offer ? "Request" : "Offer" }: {post.title}</h1>
      <p>{post.post_category.name}</p>
      <p>Location: {post.location}</p>
      <p>Deadline: {post.deadline}</p>
      <p>Email: <a href={ "mailto:" + post.user.email }>{ post.user.email }</a></p>
      <p>Quantity: {post.quantity}</p>
      <p class="lead">{post.details}</p>

      <h2>{ post.request_offer ?  "Requests" : "Offers" } in this category</h2>
      <ul>
        {post.matching_posts.map(post => {
          return <PostCard post={post}/>
        })}
      </ul>
    </>
  );
};

export default Post;
