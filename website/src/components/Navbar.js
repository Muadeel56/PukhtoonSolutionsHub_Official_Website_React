import React, { useState } from "react";
import logo from "../assets/images/logo-transparent.png";
import { Typography, Menu, MenuItem } from "@mui/material";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle opening of the dropdown menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing of the dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="fixed h-20 w-screen bg-gradient-to-r from-black via-black to-red-800">
      <div className="flex flex-row items-center justify-between px-10">
        <img src={logo} width={80} height={80} alt="Logo" />
        <div className="flex flex-row justify-center space-x-6 text-white">
          {/* Services with dropdown */}
          <div onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
            <Typography
              aria-controls="services-menu"
              aria-haspopup="true"
              className="border p-3 rounded-2xl  cursor-pointer"
            >
              Services
            </Typography>

            {/* Dropdown Menu */}
            <Menu
              className="mt-3"
              id="services-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseLeave: handleMenuClose,
                sx: {
                  backgroundColor:
                    "gradient to-r from-black via-black to-red-800",
                  padding: "10px",
                },
                className: " w-screen flex flex-row space-x-20",
              }}
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
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "white",
                  },
                },
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <h1 className="text-2xl font-bold text-red-800">Development</h1>
                  <div className="flex flex-col justify-center items-start font-bold space-y-3">
                    <p >Custom Web Development</p>
                    <p>Shopify</p>
                    <p>E-commerce</p>
                    <p>Call Center</p>
                    <p>Digital Marketing</p>
                    <p>Video Editing</p>
                    <p>Graphic Designing</p>
                    <p>App Development</p>
                    <p>Artificial Intelligence</p>
                    <p>Cloud Migration</p>
                  </div>
                </div>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <h1 className="text-2xl font-bold text-red-800">Development</h1>
                  <div className="flex flex-col justify-center items-start font-bold space-y-3">
                    <p >Custom Web Development</p>
                    <p>Shopify</p>
                    <p>E-commerce</p>
                    <p>Call Center</p>
                    <p>Digital Marketing</p>
                    <p>Video Editing</p>
                    <p>Graphic Designing</p>
                    <p>App Development</p>
                    <p>Artificial Intelligence</p>
                    <p>Cloud Migration</p>
                  </div>
                </div>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <h1 className="text-2xl font-bold text-red-800">Development</h1>
                  <div className="flex flex-col justify-center items-start font-bold space-y-3">
                    <p >Custom Web Development</p>
                    <p>Shopify</p>
                    <p>E-commerce</p>
                    <p>Call Center</p>
                    <p>Digital Marketing</p>
                    <p>Video Editing</p>
                    <p>Graphic Designing</p>
                    <p>App Development</p>
                    <p>Artificial Intelligence</p>
                    <p>Cloud Migration</p>
                  </div>
                </div>
              </MenuItem>

              <div>
                <img src={logo} width={400} height={400} alt="Logo"/>
              </div>

              {/* <MenuItem onClick={handleMenuClose}>App Development</MenuItem>
              <MenuItem onClick={handleMenuClose}>Shopify Development</MenuItem>
              <MenuItem onClick={handleMenuClose}>
                Artificial Intelligence
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>E-commerce</MenuItem>
              <MenuItem onClick={handleMenuClose}>Call Center</MenuItem>
              <MenuItem onClick={handleMenuClose}>Digital Marketing</MenuItem>
              <MenuItem onClick={handleMenuClose}>Video Editing</MenuItem>
              <MenuItem onClick={handleMenuClose}>Graphic Designing</MenuItem> */}
            </Menu>
          </div>
          <Typography className=" p-3 rounded-2xl hover:bg-black font-bold">
            Home
          </Typography>
          <Typography className=" p-3 rounded-2xl hover:bg-red-950 font-bold">
            About
          </Typography>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
