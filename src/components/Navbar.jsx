import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[65px] bg-black flex flex-row justify-between">
        <div>
          <h2 className="text-white text-3xl p-4 ml-1 hover:cursor-pointer">
            iTech.
          </h2>
        </div>
        <div>
          <ul className="flex p-6">
            <a href="https://www.facebook.com">
              <li className="text-white text-base hover:text-lime-400 transition-colors">
                Facebook
              </li>
            </a>
            <a href="https://www.twitter.com">
              <li className="text-white text-base ml-4 hover:text-lime-400 transition-colors">
                Twitter
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
