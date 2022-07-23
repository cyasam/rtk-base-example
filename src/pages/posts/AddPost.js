import React, { useState } from 'react';
import { useAddPostMutation } from '../../services';

function AddPost() {
  const [title, setTitle] = useState('');
  const [addPost, { isLoading, error }] = useAddPostMutation();

  return (
    <div className="mb-10">
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ title, userId: 1 });
        }}
      >
        <input
          type="text"
          value={title}
          className="px-3 rounded text-black mr-2"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button" type="submit">
          Add
        </button>
        {isLoading && (
          <p className="ml-3 text-xl flex items-center">Adding...</p>
        )}
      </form>
      {error && <p>{JSON.stringify(error)}</p>}
    </div>
  );
}

export default AddPost;
