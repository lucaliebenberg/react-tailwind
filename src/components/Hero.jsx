import React from "react";
// import { heroImage } from "../assets/heroImage.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center text-center align-middle pt-14">
      <h1 className="text-4xl">Have a look around</h1>
      <div>
        <input
          className="border-gray border-2 rounded-md w-[60%] mt-3 p-1"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Hero;
