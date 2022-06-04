import { Popover } from '@headlessui/react';

import NavigationBarDesktop from './NavigationBarDesktop';
import NavigationBarMobile from './NavigationBarMobile';

const user = {
  name: 'Chelsea Hagon',
  email: 'chelsea.hagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Teams', href: '#', current: false },
  { name: 'Directory', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavigationBar = () => {
  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as='header'
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-gray-50 lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ open }) => (
          <>
            <NavigationBarDesktop
              open={open}
              user={user}
              userNavigation={userNavigation}
              classNames={classNames}
            />
            <NavigationBarMobile
              user={user}
              navigation={navigation}
              userNavigation={userNavigation}
              classNames={classNames}
            />
          </>
        )}
      </Popover>
    </>
  );
};

export default NavigationBar;
