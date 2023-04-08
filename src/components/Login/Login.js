import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import loginImg from '../../images/login/login.jpg';

const Login = () => {

  useTitle('Login');

  const [errText, setErrText] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { userLogin, googleSignIn } = useContext(AuthContext);


  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        setErrText(null);
      })
      .catch(err => {
        console.error(err.message)
        setErrText(<p>User not found.</p>);
      });

  }

  const googleSignInHandler = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(err => console.error(err.message))
  }

  return (

    <div className="hero min-h-[70vh] adventure-font" style={{ backgroundImage: `url(${loginImg})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className='flex flex-col items-center'>
          <div className='text-center'>
            <h2 className='custom-font font-bold text-7xl mt-5'>Login</h2>
          </div>

          <form onSubmit={loginHandler} className="form-control w-full max-w-xs mx-auto mt-10">
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered w-full max-w-xs text-black" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered w-full max-w-xs text-black" required />
              {errText}
            </div>

            <button type="submit" className="text-white btn btn-outline btn-ghost mt-4 w-1/2 mx-auto">Login</button>
          </form>
          <p className='my-2 text-xl'>or,</p>

          <button onClick={googleSignInHandler} type="submit" className="text-white btn btn-outline btn-ghost my-2">Google Sign-in</button>
          <p className='my-5 text-lg'>New to Madventurers? <Link to='/signup' className='text-orange-500'>Register</Link></p>
        </div>
      </div>
    </div>


  );
};

export default Login;