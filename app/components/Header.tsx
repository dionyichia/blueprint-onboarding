import React from 'react';
import Image from 'next/image';
import bp_logo from '../../assets/images/bp-logo.png';
import './component_styles.css';
import { FiArrowLeft } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <button id="backButton" className="back-button">
          <FiArrowLeft />
        </button>
      </div>

      <div className="header-center">
        <div className="logo">
          <Image width="32" src={bp_logo} alt="bp-logo"></Image>
        </div>
        <div className="header-text">
          <span style={{ color: '#0078E8' }}>blueprint</span> blog
        </div>
      </div>

      <div className="header-right"></div>
    </div>
  );
};

export default Header;
