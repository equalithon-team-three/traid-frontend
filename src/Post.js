import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Adapter from './Adapter';
import PostCard from './PostCard';

const Post = ({ id: postId }) => {
  const [post, setPost] = useState({
    matching_posts: [],
    post_category: {},
    user: {},
  });

  useEffect(() => {
    Adapter.getPost(postId, setPost);
  }, [postId, setPost]); // No array runs on every render, empty array is essentially componentDidMount

  return (
    <div className="text-center board">
      <h1>
        {post.request_offer ? 'Request' : 'Offer'}: {post.title}
      </h1>

      <p>{`Category: ${post.post_category.name}`}</p>

      <p>{`Location: ${post.location ? post.location : 'N/A'}`}</p>

      <p>
        {`Deadline: ${
          post.deadline ? moment(post.deadline).format('L') : 'N/A'
        }`}
      </p>

      <p>
        Email: <a href={'mailto:' + post.user.email}>{post.user.email}</a>
      </p>

      <p>{`Quantity: ${post.quantity ? post.quantity : 'N/A'}`}</p>

      <h5>Description:</h5>

      <p className="text-color-gray">{`${post.details}`}</p>

      <h2>
        {`${post.request_offer ? 'Offers' : 'Requests'} In This Category`}
      </h2>

      <ul>
        {post.matching_posts.map(curPost => (
          <PostCard key={curPost.id} post={curPost} />
        ))}
      </ul>
    </div>
  );
};

export default Post;
