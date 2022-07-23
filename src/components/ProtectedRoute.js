import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import ProtectedLayout from './ProtectedLayout';

function ProtectedRoute({ element }) {
  const key = useSelector((state) => state.api?.key);
  const location = useLocation();

  if (!key) {
    return (
      <Navigate
        to="/login"
        state={{
          return_url: location.pathname,
        }}
      />
    );
  }

  return <ProtectedLayout>{element}</ProtectedLayout>;
}

export default ProtectedRoute;
