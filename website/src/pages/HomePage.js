import { Typography } from "@mui/material";
import React from "react";
import astr from "../assets/images/astr.jpg";

function HomePage() {
  return (
    <div className="flex w-screen  h-screen">
      <div className="flex flex-row justify-start items-center ml-20 ">
        <div className="flex flex-col justify-center items-start">
            <Typography variant="h6" className="text-white">Welcome to</Typography>
            <Typography variant="h3" className="text-white">
                <span className="text-red-800 font-bold font-sans">Pukhtoon Solutions Hub</span>
        </Typography>
        <Typography variant="h6" className="text-white">Software Development & IT Solutions Company</Typography>
        </div>
        
      </div>
    </div>
  );
}

export default HomePage;
