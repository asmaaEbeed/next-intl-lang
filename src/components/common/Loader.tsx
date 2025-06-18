"use client";
import Lottie from "lottie-react";
import animationData from "../../../public/loader/system_loading.json";

const Loader = () => {
    
  return (
    <div className="w-60 flex flex-col mx-auto h-screen justify-center">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Loader;