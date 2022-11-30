import Home from '../pages/Home';
import Repository from '../pages/Repository';
import RepositorySection from '../pages/RepositorySection';
import SearchResults from '../pages/SearchResults';
import FileDetail from '../pages/FileDetail';
import MemberContribution from '../pages/MemberContribution';

const dashboard = [
  {
    route: { path: '/', element: <Home /> },
    navigation: { name: 'Beranda', path: '/' },
  },
  {
    route: { path: '/repository/:id', element: <Repository /> },
    navigation: {
      name: 'Repository',
      path: '/repository/:id',
    },
  },
  {
    route: {
      path: '/repository/:id/:sectionTitle',
      element: <RepositorySection />,
    },
    navigation: {
      name: 'Repository-section',
      path: '/repository/:id/:sectionTitle',
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
    route: { path: '/file-detail/:id', element: <FileDetail /> },
    navigation: {
      name: 'File Detail',
      path: '/file-detail/:id',
    },
  },
  {
    route: { path: '/member/:id', element: <MemberContribution /> },
    navigation: {
      name: 'Member Contribution',
      path: '/member/:id',
    },
  },
];

export default dashboard;
