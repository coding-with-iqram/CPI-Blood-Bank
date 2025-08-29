import React from 'react';
import SearchDonor from '../components/SearchDonor';

const Find = ({ donors }) => {
  return (
    <div style={{ paddingTop: '30px' }}>
      <h1 style={{ textAlign: 'center', color: '#d90429', marginBottom: '20px' }}>
        Search Donor
      </h1>
      <SearchDonor donors={donors} hideTitle={true} />
    </div>
  );
};

export default Find;
