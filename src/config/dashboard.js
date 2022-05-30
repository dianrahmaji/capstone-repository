import { HomeIcon, DocumentTextIcon } from '@heroicons/react/outline';

import Home from '../pages/Home';
import Repository from '../pages/Repository';

const dashboard = [
  {
    route: { path: '/', element: <Home /> },
    navigation: { name: 'Beranda', path: '/', icon: HomeIcon },
  },
  {
    route: { path: '/repository', element: <Repository /> },
    navigation: {
      name: 'Repository',
      path: '/repository',
      icon: DocumentTextIcon,
    },
  },
];

export default dashboard;
