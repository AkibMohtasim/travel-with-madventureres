import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import loginImg from '../../images/login/login.jpg';
import { Link } from 'react-router-dom';





const SignUp = () => {

  const { createUser, googleSignIn, updateUser, setUser } = useContext(AuthContext);

  const [errText, setErrText] = useState(null)

  const signUpHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = `${firstName} ${lastName}`
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setErrText(<p>The passwords don't match</p>)
      return;
    }
    else {
      setErrText(null);
      createUser(email, password)
        .then(result => {
          const user = result.user;
          user.displayName = name;
          setUser(user);
          // console.log(user);

          updateUser(name)
            .then(() => {
              console.log('displayName added')
            });

          form.reset();
        })
        .catch(err => console.error(err.message));

    }
  }

  const googleSignInHandler = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(err => console.error(err.message))
  }

  return (
    <div className="hero min-h-[70vh] adventure-font" style={{ backgroundImage: `url(${loginImg})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className='flex flex-col items-center'>
          <div className='text-center'>
            <h2 className='custom-font font-bold text-7xl'>Sign Up</h2>
          </div>

          <form onSubmit={signUpHandler} className="form-control w-full max-w-xs mx-auto mt-10">
            <div>
              <label className="label">
                <span className="label-text text-white">First Name</span>
              </label>
              <input type="text" name='firstName' placeholder="first name" className="input input-bordered w-full max-w-xs text-black" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white">Last Name</span>
              </label>
              <input type="text" name='lastName' placeholder="last name" className="input input-bordered w-full max-w-xs text-black" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered w-full max-w-xs text-black" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered w-full max-w-xs text-black" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white">Confirm Password</span>
              </label>
              <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered w-full max-w-xs text-black" />
              {errText}
            </div>

            <button type="submit" className="text-white btn btn-outline btn-ghost mt-4 w-1/2 mx-auto">Sign up</button>
          </form>
          <p className='my-2 text-xl'>or,</p>

          <button onClick={googleSignInHandler} type="submit" className="text-white btn btn-outline btn-ghost my-2">Google Sign-in</button>
          <p className='my-5 text-lg'>Already have an account? <Link to='/login' className='text-orange-500'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;