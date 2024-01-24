import React from 'react';
import { FaHands } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="p-4 mt-2 flex justify-between">
      <div className="flex gap-2 cursor-pointer">
        {/*  Logo*/}
        <div className="text-green-500">
          <FaHands size={34} />
        </div>
        {/*  Inua*/}
        <div>
          <h1 className="font-bold text-3xl text-green-500 ">InuaDAO.</h1>
        </div>
      </div>
      <div>
        <button
          className="bg-green-500 px-4 py-2 text-white font-semibold text-xl rounded-md hover:text-green-500 border-green-500 hover:bg-transparent border-[1px] ease-in duration-150"
          onClick={() => {}}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
