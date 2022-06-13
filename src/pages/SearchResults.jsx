import React from 'react';
import NavigationBar from '../components/common/NavigationBar';
import BaseFileDetail from '../components/generic/filedetail/BaseFileDetail';

function SearchResults() {
  return (
    <div>
      <NavigationBar />
      <div className='w-full flex flex-col flex-grow pt-16 px-16'>
        <div className='text-2xl font-bold mb-6'>
          Search results for - <span>something</span>
        </div>
        <div className='text-4xl text-blue-400 font-bold'>Files</div>
        <div className='flex flex-col gap-y-8 my-12'>
          <BaseFileDetail />
          <BaseFileDetail />
        </div>
        <div className='text-4xl text-blue-400 font-bold'>Repositories</div>
        <div className='flex flex-col gap-y-8 my-12'>
          <BaseFileDetail />
          <BaseFileDetail />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
