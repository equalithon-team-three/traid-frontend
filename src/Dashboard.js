import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Adapter from './Adapter';
import FormModal from './FormModal';

const renderItem = post => (
  <li key={post.id}>
    <div className="card post-preview">
      <NavLink to={'/posts/' + post.id} className="card-link">
        <div
          className="card text-white bg-primary mb-3 card-margin"
          styles={{ maxWidth: '20rem' }}
        >
          <div className="card-header text-style-bold">{post.title}</div>
          <div className="card-body">
            <p className="card-text">CONTENT PLACEHOLDER</p>
          </div>
        </div>
      </NavLink>
    </div>
  </li>
);

const renderListItems = items => items.map(renderItem);

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  const [requestFormOpen, setRequestFormOpen] = useState(false);

  useEffect(() => {
    Adapter.getPosts(setPosts);
  }, []);

  const showModal = () => {
    console.log('handled click');
    setRequestFormOpen(true);
  };

  const closeModal = () => {
    console.log('closed form');
    setRequestFormOpen(false);
  };

  // # t.string :title
  // # t.boolean :request_offer
  // # t.string :details
  // # t.datetime :date_posted
  // # t.string :location
  // # t.string :quantity
  // # t.datetime :deadline
  // # t.boolean :completed

  return (
    <div>
      <div className="board">
        <button
          type="button"
          className="btn btn-success btn-lg btn-block"
          onClick={showModal}
        >
          Request Aid
        </button>
        <ul>{renderListItems(posts)}</ul>

        <FormModal
          showModal={showModal}
          closeModal={closeModal}
          formOpen={requestFormOpen}
        >
          <p>Modal</p>
          <p>Data</p>
        </FormModal>
      </div>
    </div>
  );
};

export default Dashboard;
