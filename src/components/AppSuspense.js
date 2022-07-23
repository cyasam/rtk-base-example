import React, { Suspense } from 'react';

function AppSuspense({ children }) {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

export default AppSuspense;
