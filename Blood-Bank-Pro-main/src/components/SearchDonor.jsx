import React, { useState } from 'react';

const SearchDonor = ({ donors, hideTitle }) => {
  const [searchGroup, setSearchGroup] = useState('');
  const [filteredDonors, setFilteredDonors] = useState([]);

  const handleSearch = () => {
    const matched = donors.filter(
      (donor) => donor.group.toLowerCase() === searchGroup.toLowerCase()
    );
    setFilteredDonors(matched);
  };

  return (
    <div style={styles.container}>
      {!hideTitle && (
        <h2 style={styles.title}>Search Donor by Blood Group</h2>
      )}
      <select
        value={searchGroup}
        onChange={(e) => setSearchGroup(e.target.value)}
        style={styles.input}
      >
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>
      <button onClick={handleSearch} style={styles.button}>Find</button>

      <h3 style={styles.subtitle}>Matched Donors</h3>
      {filteredDonors.length === 0 ? (
        <p>No donors found.</p>
      ) : (
        <ul>
          {filteredDonors.map((donor, index) => (
            <li key={index}>
              {donor.name} - {donor.group} - {donor.mobile}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Basic inline styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ddd',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#c1121f',
  },
  subtitle: {
    marginTop: '20px',
    color: '#444',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default SearchDonor;
