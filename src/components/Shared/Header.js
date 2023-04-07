import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';



const Header = () => {
  const { user, setUser, logOut } = useContext(AuthContext);

  const logOutHandler = () => {
    const confirm = window.confirm('Are you sure you want to sign out?')

    if (confirm) {
      logOut()
        .then(setUser({}))
        .catch(err => console.log(err.message))
    }
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl">MadVenturers</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/adventures'>Adventures</Link></li>


          {/* <li tabIndex={0}>
            <a>
              Orders
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><a>My Orders</a></li>
              <li><a>See all Orders</a></li>
            </ul>
          </li> */}
          <li><Link to='/'>Flights</Link></li>
        </ul>
        {
          user?.uid ?

            <ul className="menu menu-horizontal px-1">
              <li><Link to={`/orders/${user?.email}`}>My Orders</Link></li>
              <li><Link to='/orders'>Orders</Link></li>
              <li><p>{user?.displayName}</p></li>
              <li><button onClick={logOutHandler}>Sign Out</button></li>
            </ul>
            :
            <li><Link to='/login'>Login</Link></li>
        }
      </div>
    </div>
  );
};

export default Header;