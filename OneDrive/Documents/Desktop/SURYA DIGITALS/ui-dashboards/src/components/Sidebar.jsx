// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import './Sidebar.css';

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={toggle}></div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button onClick={toggle} className="close-btn"><IoClose size={24} /></button>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/" onClick={toggle}>Cards 1</NavLink>
          <NavLink to="/cards2" onClick={toggle}>Cards 2</NavLink>
          <NavLink to="/charts" onClick={toggle}>Charts</NavLink>
          <NavLink to="/users" onClick={toggle}>Table & Photos</NavLink>
        </nav>
      </div>
    </>
  );
};