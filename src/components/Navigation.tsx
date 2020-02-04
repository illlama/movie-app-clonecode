import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/movie/:id">Detail</Link>
    </div>
  );
};

export default Navigation;
