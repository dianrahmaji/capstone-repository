import { Link } from 'react-router-dom';

import {
  CalendarIcon,
  UserGroupIcon,
  UsersIcon,
  BookOpenIcon,
} from '@heroicons/react/solid';

export default function BaseStackedLists({ data }) {
  const date = data.startDate.split('T')[0];
  const topics =
    data.team && data.team.length !== 0
      ? data.team[0].topics.join(', ')
      : 'no data';
  const teamMembers =
    data.team && data.team.length !== 0
      ? `${data.team[0].members.length} members`
      : 'no data';
  const teamName =
    data.team && data.team.length !== 0 ? data.team[0].name : 'no data';

  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-md'>
      <ul className='divide-y divide-gray-200'>
        <li key={data._id}>
          <Link
            to={`/repository/${data.root}`}
            className='block hover:bg-gray-50'
          >
            <div className='px-4 py-4 sm:px-6'>
              <div className='flex items-center justify-between'>
                <p className='text-xl font-medium text-indigo-600 truncate mb-4'>
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
                    <UserGroupIcon
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                    {teamName}
                  </p>
                  <p className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6'>
                    <UsersIcon
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                    {teamMembers}
                  </p>
                </div>
              </div>
              <div className='mt-3 sm:flex sm:justify-between'>
                <div className='sm:flex'>
                  <p className='flex items-center text-sm text-gray-500'>
                    <BookOpenIcon
                      className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                    {topics}
                  </p>
                </div>
                <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                  <CalendarIcon
                    className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  <p>{date}</p>
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
