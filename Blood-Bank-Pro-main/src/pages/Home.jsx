import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // We'll define styles separately

const Home = ({donors}) => {
  console.log(donors, 'donors');
  return (
    <div className="home-container">
      <div className="welcome-box">
        <h1 className="title">🩸 Welcome to Blood Bank</h1>
        <p className="subtitle">Donate blood, save lives. Be someone's hero today!</p>
        <div className="cta-buttons">
          <Link to="/register" className="btn register-btn">📝 Register Donor</Link>
          <Link to="/find" className="btn find-btn">🔍 Search Donor</Link>
          <Link to="/list" className="btn list-btn">📋 Donor List</Link>
        </div>
        <div className="stats">
          <p>✅ <strong>{donors?.length}</strong> Donors Registered</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
