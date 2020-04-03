import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Adapter from './Adapter';

import Navbar from './Navbar';

const renderItem = post => (
  <li key={post.id}>
    <div className="card post-preview">
      <Link to={'/post/' + post.id} className="card-link">
        <div
          className="card text-white bg-primary mb-3 card-margin"
          styles={{ maxWidth: '20rem' }}
        >
          <div className="card-header">{post.title}</div>
          <div className="card-body">
            <p className="card-text">CONTENT PLACEHOLDER</p>
          </div>
        </div>
      </Link>
    </div>
  </li>
);

const renderListItems = items => items.map(renderItem);

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Adapter.getPosts(setPosts);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="board">
        <ul>{renderListItems(posts)}</ul>
      </div>
    </div>
  );
};

export default Dashboard;
