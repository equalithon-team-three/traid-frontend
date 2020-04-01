import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Adapter from './Adapter';

const renderItem = post => <li key={ post.id }>
                              <Link to={ "/post/" + post.id } >{ post.title }</Link>
                            </li>

const renderListItems = items => items.map(renderItem)

const Dashboard = props => {

  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    Adapter.getPosts(setPosts)
  }, [])

  return <ul>
      {
        renderListItems(posts)
      }
    </ul>
}

export default Dashboard;