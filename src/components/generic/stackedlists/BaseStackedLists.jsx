import { Link } from 'react-router-dom';

import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from '@heroicons/react/solid';

export default function BaseStackedLists({ data }) {
  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-md'>
      <ul className='divide-y divide-gray-200'>
        <li key={data._id}>
          <Link
            to={`/repository?repository=${data._id}&root=${data.root}`}
            className='block hover:bg-gray-50'
          >
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-medium text-indigo-600 truncate'>
                  {data.title}
                </p>
                <div className='ml-2 flex-shrink-0 flex'>
                  <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                    {data.status}
                  </p>
                </div>
              </div>
              <div className='mt-2 sm:flex sm:justify-between'>
                <div className='sm:flex'>
                  <p className='flex items-center text-sm text-gray-500'>
                    <UsersIcon
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                    department
                  </p>
                  <p className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6'>
                    <LocationMarkerIcon
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                    location
                  </p>
                </div>
                <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                  <CalendarIcon
                    className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  <p>something</p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

BaseStackedLists.defaultProps = {
  data: {
    _id: 1,
    root: 1,
    title: 'title',
    status: 'status',
  },
};
