import React from 'react';
import AppSuspense from './AppSuspense';
import Header from './Header';

function ProtectedLayout({ children }) {
  return (
    <>
      <Header />
      <AppSuspense>{children}</AppSuspense>
    </>
  );
}

export default ProtectedLayout;
