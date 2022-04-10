import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [signInWithGithub] = useSignInWithGithub(auth);

  const [signInWithFacebook] = useSignInWithFacebook(auth);

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
    } else {
      setError("");
    }

    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/login");
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
          <p className="text-red-500">{error}</p>

          <input
            className="text-center mx-auto py-3 w-full mb-1 mt-2 bg-[#ff990073] rounded-md font-semibold hover:bg-[#ff9900a1] cursor-pointer"
            type="submit"
            value="
        Sign Up"
          />
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link className="text-[#ff9900] underline" to="/login">
              Login
            </Link>
          </p>

          <div className="flex items-center pt-2">
            <hr className="w-1/2" />
            <p className="px-3">or</p>
            <hr className="w-1/2" />
          </div>

          <div
            onClick={() => signInWithGoogle()}
            className="flex items-center justify-center w-full mt-4 p-1 border cursor-pointer"
          >
            <img
              className="w-7"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
              alt=""
            />
            <p className="pl-2">Continue With Google</p>
          </div>
          <div
            onClick={() => signInWithFacebook()}
            className="flex items-center justify-center w-full mt-2 p-1 border cursor-pointer"
          >
            <img
              className="w-7 "
              src="https://image.similarpng.com/very-thumbnail/2020/04/Popular-facebook-Logo-png.png"
              alt=""
            />
            <p className="pl-2">Continue With Facebook</p>
          </div>
          <div
            onClick={() => signInWithGithub()}
            className="flex items-center justify-center w-full mt-2 p-1 border cursor-pointer"
          >
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

export default SignUp;
