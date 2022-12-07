import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchIcon } from '@heroicons/react/solid';

const NavigationBarDesktop = ({ home }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const onSearch = () => {
    navigate(`/search-results?searchText=${searchText}`);
  };

  return (
    <div
      className={home ? 'px-4 sm:px-6 lg:px-8 py-3' : 'px-4 sm:px-6 lg:px-8'}
    >
      <div className='relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8'>
        <div className='flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2'>
          <div className='flex-shrink-0 flex items-center'>
            <Link to='/'>
              <img
                className='block h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
                alt='Workflow'
              />
            </Link>
          </div>
        </div>
        {!home ? (
          <div className='min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6'>
            <div className='flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0'>
              <div className='w-full'>
                <label htmlFor='search' className='sr-only'>
                  Search
                </label>
                <div className='relative'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'>
                    <SearchIcon
                      className='h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </div>
                  <input
                    value={searchText}
                    onChange={onChange}
                    onKeyPress={(e) => e.key === 'Enter' && onSearch()}
                    id='search'
                    name='search'
                    className='block w-1/2 bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    placeholder='Search'
                    type='search'
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationBarDesktop;
