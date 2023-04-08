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
    <div className="navbar bg-slate-100">
      <div className="flex-1 ">
        <Link to='/' className="btn btn-ghost normal-case text-xl">MadVenturers</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/adventures'>Adventures</Link></li>
        </ul>
        {
          user?.uid ?

            // <ul className="menu menu-horizontal px-1">
            //   <li><Link to={`/orders/${user?.email}`}>My Orders</Link></li>
            //   <li><Link to='/orders'>Orders</Link></li>
            //   <li><p>{user?.displayName}</p></li>
            //   <li><button onClick={logOutHandler}>Sign Out</button></li>
            // </ul>
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ring ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} alt='' />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <Link to={`/orders/${user?.email}`} className="justify-between">
                      My Orders
                    </Link>
                  </li>
                  <li><Link to='/orders'>All Orders</Link></li>
                  <li><Link to='/addnewadventure'>Add a New Adventure <span className="badge">Admin</span></Link></li>
                  <li><button onClick={logOutHandler}>Sign Out</button></li>
                </ul>
              </div>
            </div>
            :
            <ul><li><Link to='/login'>Login</Link></li></ul>
        }
      </div>
    </div>
  );
};

export default Header;