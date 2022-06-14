import React from 'react';
import NavigationBar from '../components/common/NavigationBar';
import BaseFileDetail from '../components/generic/filedetail/BaseFileDetail';
import BaseStackedLists from '../components/generic/stackedlists/BaseStackedLists';

function SearchResults() {
  const positions = [
    {
      id: 1,
      title: 'Back End Developer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      closeDate: '2020-01-07',
      closeDateFull: 'January 7, 2020',
    },
    {
      id: 2,
      title: 'Front End Developer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Engineering',
      closeDate: '2020-01-07',
      closeDateFull: 'January 7, 2020',
    },
    {
      id: 3,
      title: 'User Interface Designer',
      type: 'Full-time',
      location: 'Remote',
      department: 'Design',
      closeDate: '2020-01-14',
      closeDateFull: 'January 14, 2020',
    },
  ];

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
          {positions.map((position) => (
            <BaseStackedLists position={position} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
