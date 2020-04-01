import Config from './Config'

const apiUrlBase = Config.read("REACT_APP_API_URL_BASE")

class Adapter {
  
  static getPosts(callback){
    fetch(apiUrlBase + "posts")
      .then(res => res.json())
      .then(callback)
  }

  static getPost(postId, callback) {
    fetch(apiUrlBase + "posts/" + postId)
      .then(res => res.json())
      .then(callback)
  }

}

export default Adapter;