import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <div className="w-96 mx-auto px-5 py-3 text-[#2A414F]">
        <h1 className="text-center text-4xl font-semibold mb-4 text-[#2A414F]">Sign Up</h1>
        <div className="my-4">
          <label className="text-xl font-semibold" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="border border-[#95A0A7] rounded-md w-full py-3 px-3"
            type="email"
            name="email"
            placeholder="Email here"
          />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className="border border-[#95A0A7] rounded-md w-full py-3 px-3"
            type="password"
            name="password"
            placeholder="Password here"
          />
        </div>
        <div className="my-4">
          <label className="text-xl font-semibold" htmlFor="confirmpassword">
            Confirm Password
          </label>
          <br />
          <input
            className="border border-[#95A0A7] rounded-md w-full py-3 px-3"
            type="password"
            name="confirmpassword"
            placeholder="Confrim Password"
          />
        </div>
        <input
          className="text-center mx-auto py-3 w-full mb-1 mt-3 bg-[#ff990073] rounded-md"
          type="submit"
          value="
        Sign Up"
        />
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link className="text-[#ff9900]" to="/">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
