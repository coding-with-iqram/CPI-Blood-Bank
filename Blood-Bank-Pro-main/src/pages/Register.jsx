import React from 'react';
import DonorForm from '../components/DonorForm';

const Register = ({ onAddDonor, editData }) => {
  return (
    <div style={{ paddingTop: '30px'}}>
      <h1 style={{ textAlign: 'center', color: '#d90429', marginBottom: '20px' }}>
        Register a Donor
      </h1>
      <DonorForm onAddDonor={onAddDonor} editData={editData} hideTitle={true} />
    </div>
  );
};
export default Register;

