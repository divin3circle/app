import React from 'react';
import { FaHands } from 'react-icons/fa';
import { MdLaunch } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="p-4 mt-2 flex justify-between items-center max-w-[1240px] mx-auto my-0">
      <div className="flex gap-2 cursor-pointer justify-center items-center m">
        {/*  Logo*/}
        <div className="text-green-500">
          <FaHands size={38} />
        </div>
        {/*  Inua*/}
        <div>
          <h1 className="font-bold sm:text-5xl text-green-500 ">InuaDAO.</h1>
        </div>
      </div>
      <div>
        <ul className="flex justify-between sm:gap-8 gap-2 items-center sm:text-3xl font-bold">
          <li className="hover:text-green-700 ease-in-out duration-200 hover:border-b-2 border-green-700 cursor-pointer">
            Whitepaper
          </li>
          <li className="hover:text-green-700 ease-in-out duration-200 hover:border-b-2 border-green-700 cursor-pointer">
            Architecture
          </li>
          <li className="border-[1px] border-green-500 rounded-md">
            <button
              className="bg-green-500 border-[1px] border-green-500 flex justify-center items-center gap-2 p-1 sm:px-2 sm:py-2 text-white font-semibold hover:text-green-500 hover:bg-white ease-in duration-150"
              onClick={() => {}}
            >
              Launch
              <MdLaunch />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
