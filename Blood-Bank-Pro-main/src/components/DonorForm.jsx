import React, { useState, useEffect } from 'react';
import './DonorForm.css';

const DonorForm = ({ onAddDonor, hideTitle, editData }) => {
  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [mobile, setMobile] = useState('');

  // ✅ যদি Edit মোডে ঢোকে, তাহলে input গুলা auto-fill হবে
  useEffect(() => {
    if (editData) {
      setName(editData.name || '');
      setGroup(editData.group || '');
      setMobile(editData.mobile || '');
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && group && mobile) {
      const donor = { name, group, mobile };
      onAddDonor(donor);

      // ✅ Edit হলে বা Add হলেও input reset করে দিচ্ছি
      setName('');
      setGroup('');
      setMobile('');

      if (editData) {
        alert('✏️ Donor updated successfully!');
      } else {
        alert('✅ Donor added successfully!');
      }
    } else {
      alert('⚠️ Please fill in all fields!');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        {!hideTitle && (
          <h2 className="form-title">
            {editData ? 'Update Donor Info' : 'Register a Donor'}
          </h2>
        )}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name"
            maxLength={40}
            required
          />
        </div>

        <div className="form-group">
          <label>Blood Group</label>
          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            required
          >
            <option value="">Select group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="01XXXXXXXXX"
            maxLength={11}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          {editData ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default DonorForm;
