import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 p-4 text-white text-center">
    <h1 className="text-xl">React CRUD Application</h1>
    <nav>
      <Link to="/" className="text-white mr-4">Home</Link>
      <Link to="/create" className="text-white">Create</Link>
    </nav>
  </header>
);

export default Header;