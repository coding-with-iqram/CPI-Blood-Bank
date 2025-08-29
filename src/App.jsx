import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Find from './pages/Search';
import DonorList from './pages/DonorList';

function App() {
  const [donors, setDonors] = useState([]);
  const [editData, setEditData] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  // Load donors from localStorage when app starts
  useEffect(() => {
    const stored = localStorage.getItem('donors');
    if (stored) setDonors(JSON.parse(stored));
  }, []);

  // Add or Update donor
  const addDonor = (donor) => {
    let updated = [...donors];
    if (editIndex !== null) {
      updated[editIndex] = donor;
      setEditIndex(null);
      setEditData(null);
    } else {
      updated.push(donor);
    }

    setDonors(updated);
    localStorage.setItem('donors', JSON.stringify(updated));
  };

  // Set donor to be edited
  const handleEdit = (donor, index) => {
    setEditData(donor);
    setEditIndex(index);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home donors={donors} />} />
        <Route
          path="/register"
          element={<Register onAddDonor={addDonor} editData={editData} />}
        />
        <Route path="/find" element={<Find donors={donors} />} />
        <Route path="/list" element={<DonorList onEdit={handleEdit} />} />
      </Routes>
    </Router>
  );
}

export default App;
