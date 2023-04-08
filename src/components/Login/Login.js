import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

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
    <div className='flex flex-col items-center'>
      <div className='text-center mt-20'>
        <h2>Login</h2>
      </div>

      <form onSubmit={loginHandler} className="form-control w-full max-w-xs mx-auto my-10">
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered w-full max-w-xs" required />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered w-full max-w-xs" required />
          {errText}
        </div>

        <button type="submit" className="btn btn-active btn-ghost my-2">Login</button>
      </form>

      <button onClick={googleSignInHandler} type="submit" className="btn btn-active btn-ghost my-2">Google Sign-in</button>
    </div>
  );
};

export default Login;