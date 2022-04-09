import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center h-[90vh]">
      <div className="w-96 mx-auto px-7 py-5  text-[#2A414F] border border-[#2A414F] rounded-lg">
        <h1 className="text-center text-4xl font-semibold mb-4 text-[#2A414F]">Sign Up</h1>
        <div className="my-4">
          <label className="text-xl font-semibold  block pb-1" htmlFor="email">
            Email
          </label>
          <input
            className="border border-[#95A0A7] rounded-md w-full py-3 px-3"
            type="email"
            name="email"
            placeholder="Email here"
          />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold block pb-1" htmlFor="password">
            Password
          </label>

          <input
            className="border border-[#95A0A7] rounded-md w-full py-3 px-3"
            type="password"
            name="password"
            placeholder="Password here"
          />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold block pb-1" htmlFor="confirmpassword">
            Confirm Password
          </label>

          <input
            className="border border-[#95A0A7] rounded-md w-full py-3 px-3"
            type="password"
            name="confirmpassword"
            placeholder="Confrim Password"
          />
        </div>
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

        <div className="flex items-center justify-center w-full mt-5 p-1 border cursor-pointer">
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
      </div>
    </div>
  );
};

export default SignUp;
