import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import CommonUserSignIn from "../CommonUserSignin/CommonUserSignIn";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError] = useState("");
  const navigate = useNavigate();
  const locaton = useLocation();

  const from = locaton?.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handlePassInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitUser = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="flex items-center h-[90vh]">
      <div className="w-96 mx-auto px-7 py-5  text-[#2A414F] border border-[#2A414F] rounded-lg">
        <h1 className="text-center text-4xl font-semibold mb-4 text-[#2A414F]">Log In</h1>
        <form onSubmit={handleSubmitUser}>
          <div className="my-4">
            <label className="text-xl font-semibold  block pb-1" htmlFor="email">
              Email
            </label>
            <input
              onBlur={handleEmailInput}
              className="border border-[#95A0A7] rounded-md w-full py-3 px-3 focus:outline-[0.01rem] outline-[#FFD18C]"
              type="email"
              name="email"
              placeholder="Email here"
              required
            />
          </div>
          <div className="my-4">
            <label className="text-xl font-semibold block pb-1" htmlFor="password">
              Password
            </label>

            <input
              onBlur={handlePassInput}
              className="border border-[#95A0A7] rounded-md w-full py-3 px-3 focus:outline-[0.01rem] outline-[#FFD18C]"
              type="password"
              name="password"
              placeholder="Password here"
              required
              autoComplete="false"
            />
          </div>

          <p className="text-red-500">{error?.message}</p>
          <input
            className="text-center mx-auto py-3 w-full mb-1 mt-2 bg-[#ff990073] rounded-md font-semibold hover:bg-[#ff9900a1] cursor-pointer"
            type="submit"
            value="
        Log In"
          />
          <p className="text-center text-sm">
            New to Ema-john?{" "}
            <Link className="text-[#ff9900] underline" to="/signup">
              Create an account
            </Link>
          </p>

          <CommonUserSignIn></CommonUserSignIn>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
