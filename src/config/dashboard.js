import Home from '../pages/Home';
import Repository from '../pages/Repository';
import RepositorySection from '../pages/RepositorySection';
import SearchResults from '../pages/SearchResults';
import MemberContribution from '../pages/MemberContribution';

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
  {
    route: { path: '/search-results', element: <SearchResults /> },
    navigation: {
      name: 'Search Results',
      path: '/search-results',
    },
  },
  {
    route: { path: '/contribution/:id', element: <MemberContribution /> },
    navigation: {
      name: 'Member Contribution',
      path: '/contribution/:id',
    },
  },
];

export default dashboard;
