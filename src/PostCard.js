import React from 'react'
import { NavLink } from 'react-router-dom';

const PostCard = ({post}) => {
  return (
    <li key={post.id}>
      <div>
        <NavLink to={'/posts/' + post.id} className="card-link">
          <div className={post.request_offer ? "card text-white bg-info mb-3 card-margin" : "card text-white bg-success mb-3 card-margin"}>
            <div className="card-header text-style-bold">
              { post.request_offer ? "Request" : "Offer" }: {post.title}
            </div>
            <div className={post.request_offer ? "card-body text-info bg-white" : "card-body text-success bg-white"}>
              <p className="card-text">{post.details}</p>
            </div>
          </div>
        </NavLink>
      </div>
    </li>
  )
}

export default PostCard;
