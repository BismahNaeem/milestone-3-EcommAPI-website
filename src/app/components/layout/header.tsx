// Header.tsx
import React from 'react';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'; // Font Awesome icons

const Header = () => {
  return (
    <header className="header">
      <div className="logo">BN.</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="lipsticks">lipsticks</a>
        <a href="blushons">blushons</a>
        <a href="eyeshadow">eyeshadow</a>
      </nav>
      <div className="icons">
        <FaUser className="icon" />
        <FaHeart className="icon" />
        <FaShoppingCart className="icon" />
      </div>
    </header>
  );
};

export default Header;