// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import Pagination from './components/Pagination'; 

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="/creator/:id" element={<ViewCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
          <Route path="/add" element={<AddCreator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
