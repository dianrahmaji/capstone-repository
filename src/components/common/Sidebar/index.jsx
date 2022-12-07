import SidebarItems from './SidebarItems';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar({ navigation }) {
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
