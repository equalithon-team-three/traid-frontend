import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Adapter from './Adapter';
import FormModal from './FormModal';
import PostCard from './PostCard';


const renderItem = (post) => (
  <PostCard post={post} />
);


const renderListItems = items => items.map(renderItem);

const Dashboard = ({ history }) => {
  const [posts, setPosts] = useState([]);
  const [postCategories, setPostCategories] = useState([]);
  const [requestFormOpen, setRequestFormOpen] = useState(false);

  useEffect(() => {
    Adapter.getPosts(setPosts);
    Adapter.getPostCategories(setPostCategories)
  }, []);

  const showModal = () => setRequestFormOpen(true);

  const closeModal = () => setRequestFormOpen(false);

  const visitPost = (postId) => history.push(`/posts/${ postId }`) 

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
            visitPost={visitPost}
            closeModal={closeModal}
            formOpen={requestFormOpen}
            postCategories={postCategories}

          /> : null }
      </div>
    </div>
  );
};

export default Dashboard;
