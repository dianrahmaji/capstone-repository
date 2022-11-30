import React from 'react';

const SidebarItemMain = ({ item, classNames }) => {
  return (
    <div key={item.name}>
      <a
        href={item.href}
        className={classNames(
          item.current
            ? 'bg-gray-200 text-gray-900'
            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
          'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium'
        )}
      >
        {item.name}
      </a>
    </div>
  );
};

export default SidebarItemMain;
