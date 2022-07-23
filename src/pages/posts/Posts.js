import React from 'react';
import { Link } from 'react-router-dom';

function PostsIndex() {
  return (
    <Link to="add">
      <div className="button mb-4">Add Post</div>
    </Link>
  );
}

export default PostsIndex;
