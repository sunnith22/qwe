// src/components/Header.jsx
import React from 'react';
import { HiMenu } from 'react-icons/hi';
import './Header.css';

export const Header = ({ title, onMenuClick }) => {
  return (
    <header className="app-header">
      <button onClick={onMenuClick} className="menu-btn"><HiMenu size={24} /></button>
      <h1 className="header-title">{title}</h1>
    </header>
  );
};