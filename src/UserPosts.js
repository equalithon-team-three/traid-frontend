import React, { useState, useEffect } from 'react';

import Adapter from './Adapter';

const UserPosts = ({ authData }) => {
  const [state, setState] = useState({
    user_posts: {
      completed: [],
      not_completed: [],
      other_posts: [],
    },
  });

  useEffect(() => {
    if (authData.id) {
      Adapter.getUserPosts(setState, authData.id);
    }
  }, [authData.id]);

  return (
    <div>
      <h3>Not Completed</h3>

      <div>
        {state.user_posts.not_completed.length ? (
          state.user_posts.not_completed.map(curPost => (
            <div key={curPost.id}>
              <div>{curPost.title}</div>

              <div>{curPost.details}</div>
            </div>
          ))
        ) : (
          <div>No posts were found.</div>
        )}
      </div>

      <h3>Completed</h3>

      <div>
        {state.user_posts.completed.length ? (
          state.user_posts.completed.map(curPost => (
            <div key={curPost.id}>
              <div>{curPost.title}</div>

              <div>{curPost.details}</div>
            </div>
          ))
        ) : (
          <div>No posts were found.</div>
        )}
      </div>
    </div>
  );
};

export default UserPosts;
