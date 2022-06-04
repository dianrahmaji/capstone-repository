import Home from '../pages/Home';
import Repository from '../pages/Repository';

const dashboard = [
  {
    route: { path: '/', element: <Home /> },
    navigation: { name: 'Beranda', path: '/' },
  },
  {
    route: { path: '/repository', element: <Repository /> },
    navigation: {
      name: 'Repository',
      path: '/repository',
    },
  },
];

export default dashboard;
