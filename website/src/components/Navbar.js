import React, { useState } from 'react';
import logo from '../assets/images/logo-transparent.png';
import { Typography, Menu, MenuItem } from '@mui/material';

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
    <header className='h-20 w-screen bg-gradient-to-r from-black via-black to-red-800'>
      <div className='flex flex-row items-center justify-between px-10'>
        <img src={logo} width={80} height={80} alt="Logo" />
        <div className='flex flex-row justify-center space-x-6 text-white'>
          <Typography className='border p-3 rounded hover:bg-gradient-to-r from-black via-black to-red-800 font-bold'>
            Home
          </Typography>
          <Typography className='border p-3 rounded hover:bg-gradient-to-r from-black via-black to-red-800 font-bold'>
            About
          </Typography>
          
          {/* Services with dropdown */}
          <div
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
          >
            <Typography
              aria-controls="services-menu"
              aria-haspopup="true"
              className='border p-3 rounded hover:bg-gradient-to-r from-black via-black to-red-800 font-bold cursor-pointer'
            >
              Services
            </Typography>

            {/* Dropdown Menu */}
            <Menu
            className='mt-3'
              id="services-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseLeave: handleMenuClose,
                sx: { backgroundColor: 'gradient to-r from-black via-black to-red-800', padding: '10px' },
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
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
              <MenuItem onClick={handleMenuClose}>Web Development</MenuItem>
              <MenuItem onClick={handleMenuClose}>App Development</MenuItem>
              <MenuItem onClick={handleMenuClose}>Shopify Development</MenuItem>
              <MenuItem onClick={handleMenuClose}>Artificial Intelligence</MenuItem>
              <MenuItem onClick={handleMenuClose}>E-commerce</MenuItem>
              <MenuItem onClick={handleMenuClose}>Call Center</MenuItem>
              <MenuItem onClick={handleMenuClose}>Digital Marketing</MenuItem>
              <MenuItem onClick={handleMenuClose}>Video Editing</MenuItem>
              <MenuItem onClick={handleMenuClose}>Graphic Designing</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
