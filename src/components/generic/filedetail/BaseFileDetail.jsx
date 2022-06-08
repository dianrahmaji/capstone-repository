import React from 'react';
import {
  DocumentTextIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@heroicons/react/outline';

function BaseFileDetail() {
  return (
    <div className='flex flex-row py-3 items-center h-40'>
      <DocumentTextIcon className='h-[90%] basis-1/7' />
      <div className='flex flex-col basis-1/2 justify-around h-full ml-6'>
        <div className='text-2xl font-semibold'>
          This is Where You Put Your Title
        </div>
        <div className='text-base text-gray-500'>
          This is where you put the author
        </div>
        <div className='text-base font-normal'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ipsa
          qui aliquid amet cum impedit recusandae explicabo, eos nobis assumenda
          dolorem commodi sed doloribus, voluptate officia? Amet dicta numquam
          eius?
        </div>
      </div>
      <div className='flex justify-around flex-col basis-1/4 h-full ml-6'>
        <div className='flex flex-row'>
          <CheckCircleIcon className='w-6 mr-2' />
          <div>Completed</div>
        </div>
        <div className='flex flex-row'>
          <DocumentTextIcon className='w-6 mr-2' />
          <div>Completed</div>
        </div>
        <div className='flex flex-row'>
          <ClockIcon className='w-6 mr-2' />
          <div>Completed</div>
        </div>
      </div>
    </div>
  );
}

export default BaseFileDetail;
