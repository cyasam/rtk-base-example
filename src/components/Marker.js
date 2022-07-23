import React from 'react';

function Marker({ children, onClick }) {
  return (
    <div className="hover:z-50 absolute top-1/2 left-1/2 w-3 h-3 bg-orange-400 rounded-full select-none -translate-x-1/2 -translate-y-1/2">
      <div
        onClick={onClick}
        className="relative w-full h-full peer cursor-pointer"
      ></div>
      <div className="marker-info opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition">
        {children}
      </div>
    </div>
  );
}

export default Marker;
