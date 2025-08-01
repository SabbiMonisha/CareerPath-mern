import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Streams from './pages/Streams';
import StreamDetail from './pages/StreamDetail';
import GovtJobs from './pages/GovtJobs';
import Register from './pages/Register';
import Login from './pages/Login';
import CareerGuidance from './pages/CareerGuidance';
import LearningResources from './pages/LearningResources';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/streams" element={<Streams />} />
        <Route path="/streams/:streamId" element={<StreamDetail />} />
        <Route path="/govt-jobs" element={<GovtJobs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CareerGuidance" element={<CareerGuidance />} />
        <Route path="/learning-resources" element={<LearningResources />} />
      </Routes>
    </Router>
  );
}

export default App;
