import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError] = useState("");
  const navigate = useNavigate();

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
    navigate("/");
  }
  console.log(user);
  return (
    <div className="flex items-center h-[90vh]">
      <div className="w-96 mx-auto px-7 py-5  text-[#2A414F] border border-[#2A414F] rounded-lg">
        <h1 className="text-center text-4xl font-semibold mb-4 text-[#2A414F]">Log In</h1>
        <form action="" onSubmit={handleSubmitUser}>
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
          {loading && <p>Loading...</p>}
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

          <div className="flex items-center pt-2">
            <hr className="w-1/2" />
            <p className="px-3">or</p>
            <hr className="w-1/2" />
          </div>

          <div className="flex items-center justify-center w-full mt-4 p-1 border cursor-pointer">
            <img
              className="w-7"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
              alt=""
            />
            <p className="pl-2">Continue With Google</p>
          </div>
          <div className="flex items-center justify-center w-full mt-2 p-1 border cursor-pointer">
            <img
              className="w-7 "
              src="https://image.similarpng.com/very-thumbnail/2020/04/Popular-facebook-Logo-png.png"
              alt=""
            />
            <p className="pl-2">Continue With Facebook</p>
          </div>
          <div className="flex items-center justify-center w-full mt-2 p-1 border cursor-pointer">
            <img
              className="w-7 "
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt=""
            />
            <p className="pl-2">Continue With Github</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
