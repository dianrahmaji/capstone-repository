import React from 'react';
import NavigationBar from '../components/common/NavigationBar';
import Sidebar from '../components/common/Sidebar';
import Card from '../components/generic/card';
import Footer from '../components/common/Footer';
import FileDetail from '../components/generic/filedetail';

function Repository() {
  return (
    <div>
      <NavigationBar />
      <div className='w-full flex flex-row flex-grow'>
        <Sidebar />
        <div className='w-full px-12 pt-12'>
          <Card />
          <FileDetail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Repository;
