import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../../components/Container';
import { useGetPostsQuery } from '../../services';

function Posts() {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  return (
    <Container>
      <Outlet />

      <h1 className="text-2xl">Posts</h1>
      {isLoading && (
        <div className="flex items-center h-64 justify-center">Loading...</div>
      )}

      {error && <p>Error</p>}
      {posts?.map(({ title, id }) => (
        <div key={id} className="flex">
          <svg
            className="mt-[5px] mr-2 fill-orange-400 shrink-0"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 14C5.2 14 3.3 13.2 2 11.9C0.7 10.6 0 8.8 0 7C0 5.2 0.8 3.4 2 2C3.3 0.7 5.1 0 7 0C8.8 0 10.6 0.8 11.9 2C13.2 3.3 14 5.1 14 7C14 8.8 13.2 10.6 11.9 11.9C10.6 13.2 8.8 14 7 14Z" />
          </svg>
          <h2>{title}</h2>
        </div>
      ))}
    </Container>
  );
}

export default Posts;
