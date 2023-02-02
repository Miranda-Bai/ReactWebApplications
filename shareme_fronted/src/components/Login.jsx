import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import jwt_decode from "jwt-decode";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { client } from "../client";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    const decoded = jwt_decode(response.credential);
    // console.log(decoded);
    localStorage.setItem("user", JSON.stringify(decoded));
    const { name, sub, picture } = decoded;
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          muted
          controls={false}
          autoPlay
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              render={(renderProps) => {
                return (
                  <button
                    type="button"
                    className="bg-mainColor flex justfy-center items-center p-3 rounded-lg cursor-pointer outline-none"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <FcGoogle className="mr-4" /> Sign in with Google
                  </button>
                );
              }}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
