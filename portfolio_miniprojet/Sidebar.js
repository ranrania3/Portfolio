// Sidebar.js
import React from 'react';
import './App.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a className='font' target='_blank' href='
https://www.facebook.com/profile.php?id=100012205020421&mibextid=nb1MFm3jZYALyyMy'><FaFacebook /></a>
      <a className='font'  target='_blank' href='https://www.instagram.com/_.ran_nia'><FaInstagramSquare /></a>
      <a className='font' target='_blank' href='https://t.me/ran261'><FaTelegram /></a>
    </div>
  );
};

export default Sidebar;
