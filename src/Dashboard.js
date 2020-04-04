import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Adapter from './Adapter';
import FormModal from './FormModal';


const renderItem = (post) => (
  
  //hello
  <li key={post.id}>
    <div className="card post-preview">
      <NavLink to={'/posts/' + post.id} className="card-link">
        <div className={post.request_offer ? "card text-white bg-danger mb-3 card-margin" : "card text-white bg-success mb-3 card-margin"}>
          <div className="card-header text-style-bold">{post.title}
          {console.log(post)}
          </div>

          <div className={post.request_offer ? "card-body text-danger bg-white" : "card-body text-success bg-white"}>
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
  const [postCategories, setPostCategories] = useState([]);
  const [requestFormOpen, setRequestFormOpen] = useState(false);

  useEffect(() => {
    Adapter.getPosts(setPosts);
    Adapter.getPostCategories(setPostCategories)
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

        <ul>{ renderListItems(posts) }</ul>

        { 
          requestFormOpen && postCategories.length ? <FormModal
            showModal={showModal}
            closeModal={closeModal}
            formOpen={requestFormOpen}
            postCategories={postCategories}
          /> : null }
      </div>
    </div>
  );
};

export default Dashboard;
