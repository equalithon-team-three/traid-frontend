import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Adapter from './Adapter';
import FormModal from './FormModal';


const renderItem = (post) => (
  
  
  <li key={post.id}>
    <div className="card post-preview">
      <NavLink to={'/posts/' + post.id} className="card-link">
        <div className={post.request_offer ? "card text-white bg-danger mb-3 card-margin" : "card text-white bg-success mb-3 card-margin"}>
          <div className="card-header text-style-bold">{post.title}
          {console.log(post)}
          </div>

          <div className="card-body">
            <p className="card-text">{post.details}</p>
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

  const showModal = () => setRequestFormOpen(true);

  const closeModal = () => setRequestFormOpen(false);

  return (
    <div>
      <div className="text-center board">
        <button
          className="btn btn-primary btn-lg btn request-aid"
          type="button"
          onClick={showModal}
        >
          Request/Offer Aid
        </button>

        <ul>{renderListItems(posts)}</ul>

        <FormModal
          showModal={showModal}
          closeModal={closeModal}
          formOpen={requestFormOpen}
        />
      </div>
    </div>
  );
};

export default Dashboard;
