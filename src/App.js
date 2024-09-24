import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Calendar from './Components/Calendar';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router >
      <div className='App'>
        <Sidebar/>
        
        <Routes>
        <Route path="/" element={<Dashboard/>} />
          <Route path="/Calendar" element={<Calendar />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;