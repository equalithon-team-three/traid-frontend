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
    <div className="text-center">
      <h3>Not Completed</h3>

      <div>
        {state.user_posts.not_completed.length ? (
          state.user_posts.not_completed.map(curPost => (
            <div key={curPost.id} className="card post-preview">
              <div className="card text-white bg-info mb-3 card-margin">
                <div className="card-header text-style-bold">
                  {curPost.title}
                </div>

                <div className="card-body text-success bg-white">
                  <p className="card-text">{curPost.details}</p>
                </div>
              </div>
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
            <div key={curPost.id} className="card post-preview">
              <div className="card text-white bg-info mb-3 card-margin">
                <div className="card-header text-style-bold">
                  {curPost.title}
                </div>

                <div className="card-body text-success bg-white">
                  <p className="card-text">{curPost.details}</p>
                </div>
              </div>
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
