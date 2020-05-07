import Config from './Config';

const apiUrlBase = Config.read('REACT_APP_API_URL_BASE');
const authUrlBase = Config.read('REACT_APP_AUTH_URL_BASE');

class Adapter {
  static getPosts(callback) {
    fetch(apiUrlBase + '/posts', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(callback);
  }

  static getUserPosts(callback, id) {
    fetch(apiUrlBase + `/users/${id}/posts`, {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(callback);
  }

  static getPostCategories(callback) {
    fetch(apiUrlBase + '/post_categories', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(callback);
  }

  static getPost(postId, callback) {
    fetch(apiUrlBase + '/posts/' + postId, {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(callback);
  }

  static logIn(credentials, callback) {
    fetch(authUrlBase + '/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res => res.json())
      .then(callback);
  }

  static signUp(credentials, callback) {
    fetch(authUrlBase + '/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res => res.json())
      .then(callback);
  }

  static createPost(post, callback) {
    fetch(apiUrlBase + '/posts', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(res => res.json())
      .then(callback);
  }

  static logOut(callback) {
    fetch(authUrlBase + '/logout', {
      method: 'POST',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(callback);
  }

  static authCheck(callback) {
    fetch(authUrlBase + '/check', {
      method: 'POST',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(callback);
  }
}

export default Adapter;
