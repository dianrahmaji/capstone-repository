import { Fragment } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

const NavigationBarDesktop = ({ open, user, userNavigation, classNames }) => {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8'>
        <div className='flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2'>
          <div className='flex-shrink-0 flex items-center'>
            <a href='#'>
              <img
                className='block h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
                alt='Workflow'
              />
            </a>
          </div>
        </div>
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
        <div className='flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden'>
          {/* Mobile menu button */}
          <Popover.Button className='-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
            <span className='sr-only'>Open menu</span>
            {open ? (
              <XIcon className='block h-6 w-6' aria-hidden='true' />
            ) : (
              <MenuIcon className='block h-6 w-6' aria-hidden='true' />
            )}
          </Popover.Button>
        </div>
        <div className='hidden lg:flex lg:items-center lg:justify-end xl:col-span-4'>
          <a
            href='#'
            className='ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <span className='sr-only'>View notifications</span>
            <BellIcon className='h-6 w-6' aria-hidden='true' />
          </a>

          {/* Profile dropdown */}
          <Menu as='div' className='flex-shrink-0 relative ml-5'>
            <div>
              <Menu.Button className='bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <span className='sr-only'>Open user menu</span>
                <img
                  className='h-8 w-8 rounded-full'
                  src={user.imageUrl}
                  alt=''
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none'>
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block py-2 px-4 text-sm text-gray-700'
                        )}
                      >
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>

          <a
            href='#'
            className='ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            New Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBarDesktop;
