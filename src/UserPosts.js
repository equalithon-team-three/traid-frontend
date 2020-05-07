import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
    <div className="text-center board">
      <h2 className="post-category-header">Not Completed</h2>

      <div>
        {state.user_posts.not_completed.length ? (
          state.user_posts.not_completed.map(curPost => (
            <NavLink
              key={curPost.id}
              to={'/posts/' + curPost.id}
              className="card-link"
            >
              <div className="card user-post">
                <div className="card text-white bg-info mb-3 card-margin">
                  <div className="card-header text-color-white text-style-bold">
                    {curPost.title}
                  </div>

                  <div className="card-body text-success">
                    <p className="card-text text-color-white text-style-bold">
                      {curPost.details}
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <div>No posts were found.</div>
        )}
      </div>

      <h2 className="post-category-header">Completed</h2>

      <div>
        {state.user_posts.completed.length ? (
          state.user_posts.completed.map(curPost => (
            <NavLink
              key={curPost.id}
              to={'/posts/' + curPost.id}
              className="card-link"
            >
              <div key={curPost.id} className="card user-post">
                <div className="card text-white bg-info mb-3 card-margin">
                  <div className="card-header text-color-white text-style-bold">
                    {curPost.title}
                  </div>

                  <div className="card-body text-success">
                    <p className="card-text text-color-white text-style-bold">
                      {curPost.details}
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <div>No posts were found.</div>
        )}
      </div>
    </div>
  );
};

export default UserPosts;
