import { Popover } from '@headlessui/react';

import NavigationBarDesktop from './NavigationBarDesktop';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavigationBar = ({ home = false }) => {
  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as='header'
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-gray-100 lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ open }) => (
          <>
            <NavigationBarDesktop home={home} />
          </>
        )}
      </Popover>
    </>
  );
};

export default NavigationBar;
