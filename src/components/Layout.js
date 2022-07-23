import React from 'react';
import AppSuspense from './AppSuspense';

function Layout({ children }) {
  return <AppSuspense>{children}</AppSuspense>;
}

export default Layout;
