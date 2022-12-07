import React from 'react';
import { Link } from 'react-router-dom';

import {
  DocumentTextIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@heroicons/react/outline';

function BaseFileDetail({ data }) {
  const date = data.updatedAt.split('T')[0];
  return (
    <Link
      to={`/file-detail/${data._id}`}
      className='flex flex-row justify-between rounded-md py-2 items-center h-44 hover:bg-gray-50 shadow cursor-pointer'
    >
      <DocumentTextIcon className='h-[90%] basis-1/7' />
      <div className='flex flex-col basis-1/2 justify-around h-full ml-6'>
        <div className='text-2xl font-semibold'>File Name: {data.name}</div>
        <div className='text-base text-gray-500'>Authors: {data.authors}</div>
        <div className='text-base font-normal'>
          Description: {data.description}
        </div>
      </div>
      <div className='flex justify-around items-end flex-col basis-1/4 h-full ml-6 pr-6'>
        <div className='flex flex-row'>
          <div>{data.status}</div>
          <CheckCircleIcon className='w-6 ml-2' />
        </div>
        <div className='flex flex-row'>
          <div>{data.extension}</div>
          <DocumentTextIcon className='w-6 ml-2' />
        </div>
        <div className='flex flex-row'>
          <div>{date}</div>
          <ClockIcon className='w-6 ml-2' />
        </div>
      </div>
    </Link>
  );
}

export default BaseFileDetail;
