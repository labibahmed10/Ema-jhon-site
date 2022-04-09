import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <div className="w-96 mx-auto px-5 py-3">
        <h1 className="text-center text-4xl font-semibold mb-4">Sign Up</h1>
        <div className="my-4">
          <label className="text-xl font-semibold" htmlFor="email">
            Email
          </label>
          <br />
          <input className="border w-full" type="email" name="email" />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold" htmlFor="password">
            Password
          </label>
          <br />
          <input className="border w-full" type="password" name="password" />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold" htmlFor="confirmpassword">
            Confirm Password
          </label>
          <br />
          <input className="border w-full" type="password" name="confirmpassword" />
        </div>
        <button>Sign Up</button>
        <p>
          Already have an account? <Link to=".">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
