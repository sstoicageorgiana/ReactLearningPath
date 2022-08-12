import React from 'react'
import {Link} from 'react-router-dom';

const Posts = () => {
  return (
    <div>
        <div><Link to="/posts/1"> Posts 1</Link></div>
        <div><Link to="/posts/2"> Posts 2</Link></div>
        <div><Link to="/posts/3"> Posts 3</Link></div>
    </div>
  )
}

export default Posts;