// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CreateItem from './pages/CreateItem';
import EditItem from './pages/EditItem';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-4">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">React CRUD App</h1>
          </div>
        </header>

        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateItem />} />
              <Route path="/edit/:id" element={<EditItem />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;