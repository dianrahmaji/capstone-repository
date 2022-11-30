import SidebarItems from './SidebarItems';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  {
    name: 'Team',
    current: false,
    children: [
      {
        name: 'Overview',
        href: '#',
        children: [
          { name: 'GrandChildren1', href: '#' },
          { name: 'Grandchildren2', href: '#' },
        ],
      },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Projects',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Calendar',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Documents',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Reports',
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavigationBar() {
  return (
    <div className='flex flex-col w-1/6 pb-4 bg-gray-50 overflow-y-auto'>
      <div className='mt-5 flex-grow flex flex-col'>
        <nav className='flex-1 space-y-1 bg-gray-50' aria-label='Sidebar'>
          {navigation.map((item) => {
            return (
              <SidebarItems
                item={item}
                classNames={classNames}
                key={item.name}
              />
            );
          })}
        </nav>
      </div>
    </div>
  );
}
