import React from 'react';
import NavigationBar from '../components/common/NavigationBar';
import BaseBarChart from '../components/generic/charts/BaseBarChart';

function Repository() {
  return (
    <div>
      <NavigationBar />
      <div className='flex flex-col items-center mt-24'>
        <div className='text-4xl font-bold'>Member Name</div>
        <div className='text-2xl font-bold mt-4 mb-12'>Position</div>
        <BaseBarChart />
      </div>
    </div>
  );
}

export default Repository;
