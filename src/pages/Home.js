import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../components/Container';
import ListType from '../components/ListType';

function Home() {
  return (
    <>
      <Container>
        <div className="flex justify-center items-center py-3 sticky top-0 bg-slate-700">
          <ListType />
        </div>
      </Container>
      <Outlet />
    </>
  );
}

export default Home;
