import React from 'react';
import { Disclosure } from '@headlessui/react';

const SidebarItemChildren = ({ item, classNames }) => {
  return (
    <Disclosure
      as='div'
      key={item.name}
      className='space-y-1 transition-transform'
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              item.current
                ? 'bg-gray-200 text-gray-900'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
            )}
          >
            <svg
              className={classNames(
                open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
              )}
              viewBox='0 0 20 20'
              aria-hidden='true'
            >
              <path d='M6 6L14 10L6 14V6Z' fill='currentColor' />
            </svg>
            {item.name}
          </Disclosure.Button>
          <Disclosure.Panel className='space-y-1'>
            {item.children.map((subItem) => (
              <Disclosure.Button
                key={subItem.name}
                as='a'
                href={subItem.href}
                className='group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50'
              >
                {subItem.name}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default SidebarItemChildren;
