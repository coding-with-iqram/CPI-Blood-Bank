import React from 'react';

const DonorList = ({ donors }) => {
  return (
    <div>
      <h2>All Donors</h2>
      {donors.length === 0 ? (
        <p>No donors registered yet.</p>
      ) : (
        <ul>
          {donors.map((donor, index) => (
            <li key={index}>
              {donor.name} - {donor.group} - {donor.mobile}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DonorList;
