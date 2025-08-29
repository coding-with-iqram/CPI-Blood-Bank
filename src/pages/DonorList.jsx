import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DonorList = ({ onEdit }) => {
  const [donors, setDonors] = useState([]);
  const navigate = useNavigate(); // ✅ React Router hook

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('donors')) || [];
    setDonors(stored);
  }, []);

  const deleteDonor = (index) => {
    const updatedDonors = [...donors];
    updatedDonors.splice(index, 1);
    setDonors(updatedDonors);
    localStorage.setItem('donors', JSON.stringify(updatedDonors));
  };

  const handleEdit = (index) => {
    const donor = donors[index];
    if (onEdit) {
      onEdit(donor, index); // ✅ App.jsx এ পাঠানো হবে
      navigate('/register'); // ✅ Edit form page এ নিয়ে যাবে
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🩸 Donor List</h1>

      {donors.length === 0 ? (
        <p style={styles.message}>No donors registered yet.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Blood Group</th>
              <th style={styles.th}>Mobile</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index}>
                <td style={styles.td}>{donor.name}</td>
                <td style={styles.td}>{donor.group}</td>
                <td style={styles.td}>{donor.mobile}</td>
                <td style={styles.td}>
                  <button style={styles.editBtn} onClick={() => handleEdit(index)}>✏️</button>
                  <button style={styles.deleteBtn} onClick={() => deleteDonor(index)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Styles object একই থাকুক

export default DonorList;

const styles = {
  page: {
    padding: '30px 20px',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  title: {
    color: '#d90429',
    fontSize: '28px',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    borderCollapse: 'collapse',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  th: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '12px',
    border: '1px solid #ddd',
  },
  td: {
    padding: '12px',
    border: '1px solid #ddd',
    textAlign: 'center',
  },
  editBtn: {
    marginRight: '8px',
    backgroundColor: '#ffc107',
    color: '#000',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    fontSize: '18px',
    color: '#666',
    marginTop: '20px',
  },
};
