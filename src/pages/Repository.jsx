import React from 'react';
import NavigationBar from '../components/common/NavigationBar';
import Sidebar from '../components/common/Sidebar';
import BaseCard from '../components/generic/card/BaseCard';
import Footer from '../components/common/Footer';

function Repository() {
  return (
    <div>
      <NavigationBar />
      <div className='w-full flex flex-row flex-grow'>
        <Sidebar />
        <div className='w-full px-12 pt-12'>
          <BaseCard main={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Repository;
