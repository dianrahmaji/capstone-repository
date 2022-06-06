import Home from '../pages/Home';
import Repository from '../pages/Repository';
import RepositorySection from '../pages/RepositorySection';

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
  {
    route: { path: '/repository/:id', element: <RepositorySection /> },
    navigation: {
      name: 'Repository-section',
      path: '/repository/:id',
    },
  },
];

export default dashboard;
