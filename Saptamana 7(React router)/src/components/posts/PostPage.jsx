import React from 'react';
import { useParams } from 'react-router-dom'; 

const PostPage = () => {
  const test = useParams();
  const {type, productId} = useParams();

  console.log('params1 : ',test);
  console.log('params2 : ',type, productId);
  return (
    <div>
        <p>PostPage</p>  
        
    </div>
  )
}

export default PostPage