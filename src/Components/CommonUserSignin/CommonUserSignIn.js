import React from "react";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";
const CommonUserSignIn = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

  const [signInWithGithub, Guser, Gloading] = useSignInWithGithub(auth);

  const [signInWithFacebook, Fuser, Floading] = useSignInWithFacebook(auth);

  if (loading || Gloading || Floading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
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
    </div>
  );
};

export default CommonUserSignIn;
