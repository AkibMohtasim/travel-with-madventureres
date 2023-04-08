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
    <div className="flex flex-col md:flex-row items-center md:justify-between bg-slate-100 p-2 flex-wrap">

      {/* flex item */}
      <div>
        <Link to='/' className="btn btn-ghost text-xl custom-font">MadVenturers</Link>
      </div>

      <div className="flex items-center">
        {/* flex item starts */}

        <ul>
          <li><Link className='btn btn-ghost' to='/adventures'>Adventures</Link></li>
        </ul>

        {/* flex item ends */}
        {
          user?.uid ?

            // Another flex item starts

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

            // Another flex item ends
            :

            // Another flex item starts

            <ul className='flex items-center'>
              <li className='mr-2 btn btn-ghost'><Link to='/login'>Login</Link></li>
              <li className='ml-2 btn btn-ghost'><Link to='/signup'>Sign Up</Link></li>
            </ul>

          // Another flex item ends
        }
      </div>
    </div>
  );
};

export default Header;