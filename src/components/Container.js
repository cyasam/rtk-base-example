import React from 'react';
import classNames from 'classnames';

function Container({ children, fluid }) {
  return (
    <div className={classNames('container m-auto', { 'max-w-full': fluid })}>
      {children}
    </div>
  );
}

export default Container;
