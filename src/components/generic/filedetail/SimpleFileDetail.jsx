import React from 'react';
import { Link } from 'react-router-dom';

import {
  DocumentTextIcon,
  FolderOpenIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';

function SimpleFileDetail({ data }) {
  const parent = data.folders.parent.sort((a, b) => b.level - a.level).pop();
  return (
    <Link
      to={`/file-detail/${data._id}`}
      className='flex flex-col rounded-md py-2 px-4 w-fit h-fit hover:bg-gray-50 border-2 border-black cursor-pointer'
    >
      <div className='flex flex-row h-full items-center'>
        <DocumentTextIcon className='h-16 basis-1/7 mr-2' />
        <div className='flex flex-col w-full'>
          <div className='h-full text-blue-400'>
            <div className='text-xl font-semibold'>
              File Name: {`${data.name} (${data.extension})`}
            </div>
          </div>
          <div className='source flex flex-row w-full mt-2'>
            <div className='folder w-fit flex mr-2'>
              <FolderOpenIcon className='h-6 mr-2' />
              <span className='font-bold'>{data.folders.name}</span>
            </div>
            <div className='repo w-fit flex'>
              <UserGroupIcon className='h-6 mr-2' />
              <span className='font-bold'>
                {parent ? parent.name : data.folders.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SimpleFileDetail;
