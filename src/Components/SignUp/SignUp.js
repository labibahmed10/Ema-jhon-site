import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CommonUserSignIn from "../CommonUserSignin/CommonUserSignIn";
import Spinner from "../Spinner/Spinner";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const locaton = useLocation();
  const from = locaton?.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, Cloading, Cerror] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handlePassInput = (event) => {
    setPassword(event.target.value);
  };

  const handleConfrimPassInput = (event) => {
    setConfirmPass(event.target.value);
  };

  const handleSubmitUser = (event) => {
    event.preventDefault();

    if (password !== confirmPass) {
      setError("Password must need to be matched!");
      return;
    } else if (Cerror) {
      setError(Cerror);
    } else {
      setError("");
    }

    createUserWithEmailAndPassword(email, password);
  };

  if (Cloading) {
    return <Spinner></Spinner>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="flex items-center h-[90vh]">
      <div className="w-96 mx-auto px-7 py-5  text-[#2A414F] border border-[#2A414F] rounded-lg shadow-2xl">
        <h1 className="text-center text-4xl font-semibold mb-4 text-[#2A414F]">Sign Up</h1>
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
          <div className="my-4">
            <label className="text-xl font-semibold block pb-1" htmlFor="confirmpassword">
              Confirm Password
            </label>

            <input
              onBlur={handleConfrimPassInput}
              className="border border-[#95A0A7] rounded-md w-full py-3 px-3 focus:outline-[0.01rem] outline-[#FFD18C]"
              type="password"
              name="confirmpassword"
              placeholder="Confrim Password"
              required
              autoComplete="false"
            />
          </div>

          {/* error here  */}
          <p className="text-red-500">{error}</p>

          <input
            className="text-center mx-auto py-3 w-full mb-1 mt-2 bg-[#ff990073] rounded-md font-semibold hover:bg-[#ff9900a1] cursor-pointer"
            type="submit"
            value="
        Sign Up"
          />
          <p className="text-center text-sm">
            Already have an account?
            <Link className="text-[#ff9900] underline" to="/login">
              Login
            </Link>
          </p>

          <CommonUserSignIn></CommonUserSignIn>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
