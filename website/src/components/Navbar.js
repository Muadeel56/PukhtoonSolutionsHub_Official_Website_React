import React, { useState } from "react";
import logoBlack from "../assets/images/logo-black.png";
import logoWhite from "../assets/images/logo-transparent.png"
import { Typography, Menu, MenuItem } from "@mui/material";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Handle opening of the dropdown menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsHovered(true);
  };

  // Handle closing of the dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsHovered(false);
  };

  return (
    <header className="fixed border rounded-full mt-5 h-20 w-[94vw] mx-8 justify-center bg-white">
      <div className="flex flex-row items-center justify-between px-10">
        <img
          src={logoBlack}
          width={80}
          height={80}
          alt="Logo"
          className="rounded-full"
        />

        <div className="flex flex-row justify-center space-x-6 text-black">
          {/* Services with dropdown */}
          <div
            onMouseEnter={handleMenuOpen}
            onMouseLeave={() => {
              if (!anchorEl) setIsHovered(false);
            }}
          >
            <Typography
              aria-controls="services-menu"
              aria-haspopup="true"
              className={`border p-3 rounded-2xl cursor-pointer ${
                isHovered
                  ? "text-white bg-gradient-to-r from-black to-red-800"
                  : "hover:text-white hover:bg-gradient-to-r from-black to-red-800"
              } transition-all duration-300`}
            >
              Services
            </Typography>

            {/* Dropdown Menu */}
            <Menu
              id="services-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              slotProps={{
                paper: {
                  sx: {
                    backgroundColor: "white",
                    color: "black",
                    transition: "opacity 0.3s ease-in-out",
                    opacity: anchorEl ? 1 : 0,
                    transform: anchorEl ? "scale(1)" : "scale(0.95)",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                  },
                },
              }}
              className="mt-6"
            >
              <div className="flex flex-row justify-evenly w-screen">
                 <MenuItem onClick={handleMenuClose}>
                <div className="flex flex-col space-y-4">
                  <h1 className="font-bold text-2xl">Development</h1>
                  <div className="flex flex-col space-y-1">
                    <p>Website Development</p>
                    <p>App Development</p>
                    <p>Custom Software Development</p>
                    <p>Mobile App Development</p>
                  </div>
                </div>
              </MenuItem>

                
                 

              <MenuItem onClick={handleMenuClose}>
                <div className="flex flex-col space-y-4">
                  <h1 className="font-bold text-2xl">Development</h1>
                  <div className="flex flex-col space-y-1">
                    <p>Website Development</p>
                    <p>App Development</p>
                    <p>Custom Software Development</p>
                    <p>Mobile App Development</p>
                  </div>
                </div>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <div className="flex flex-col space-y-4">
                  <h1 className="font-bold text-2xl">Development</h1>
                  <div className="flex flex-col space-y-1">
                    <p>Website Development</p>
                    <p>App Development</p>
                    <p>Custom Software Development</p>
                    <p>Mobile App Development</p>
                  </div>
                </div>
              </MenuItem>

              <img src={logoBlack} alt="logo" width={300} height={300} />
              
              </div>
             
            </Menu>
          </div>

          <Typography className="border p-3 rounded-2xl font-bold cursor-pointer hover:bg-gradient-to-r from-black to-red-800 hover:text-white transition-all duration-300">
            Home
          </Typography>
          <Typography className="border p-3 rounded-2xl font-bold cursor-pointer hover:bg-gradient-to-r from-black to-red-800 hover:text-white transition-all duration-300">
            About
          </Typography>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
