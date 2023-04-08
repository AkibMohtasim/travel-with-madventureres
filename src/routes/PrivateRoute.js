import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className='flex justify-center my-20'>
      <button className="btn btn-square loading"></button>
    </div>
  }

  if (user && user.uid) {
    return children;
  }


  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;