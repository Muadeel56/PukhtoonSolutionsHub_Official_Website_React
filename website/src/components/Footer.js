import React from "react";
import logo from '../assets/images/logo-transparent.png'
import { Icon, Typography } from "@mui/material";

function Footer() {
  return (
    <div className="w-screen h-full bg-black ">
      <div className="flex flex-col w-screen h-full justify-between items-center">
        <div className="flex flex-row justify-evenly items-center w-screen">
          <img src={logo} alt="logo" width={300} height={300}/>
          <div className="flex flex-col justify-center items-start  space-y-2 text-white ">
            <h1 className="text-red-800 text-3xl font-bold">Services</h1>
            <div className="flex flex-col space-y-1">
            <p>Software Development</p>
            <p>Call Center</p>
            <p>Video Editing</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start  space-y-2 text-white ">
            <h1 className="text-red-800 text-3xl font-bold">Quick Links</h1>
            <div className="flex flex-col space-y-1">
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start  space-y-2 text-white ">
            <h1 className="text-red-800 text-3xl font-bold">Address</h1>
            <div className="flex flex-col space-y-1">
            <p>J, block, Block J Phase 2 Johar Town, <br />Lahore, Punjab 54000, Pakistan</p>
            <p></p>
            <p>Video Editing</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4 justify-around items-center text-white mb-10">
          <p>Copyright © 2024 Pukhtoon Solutions Hub. All rights reserved.</p>
          <div className="flex flex-row space-x-4">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
