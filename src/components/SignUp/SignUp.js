import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';





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
    <div className='flex flex-col items-center'>
      <div className='text-center mt-20'>
        <h2>Sign Up</h2>
      </div>

      <form onSubmit={signUpHandler} className="form-control w-full max-w-xs mx-auto my-10">
        <div>
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" name='firstName' placeholder="first name" className="input input-bordered w-full max-w-xs" required />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" name='lastName' placeholder="last name" className="input input-bordered w-full max-w-xs" required />
        </div>
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
        </div>
        <div>
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered w-full max-w-xs" />
          {errText}
        </div>

        <button type="submit" className="btn btn-active btn-ghost my-2">Sign up</button>
      </form>

      <button onClick={googleSignInHandler} type="submit" className="btn btn-active btn-ghost my-2">Google Sign-in</button>
    </div>
  );
};

export default SignUp;