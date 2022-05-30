import { Routes, Route } from 'react-router-dom';
// import dashboard from './config/dashboard';

// import NavigationBar from './components/common/NavigationBar';

import Home from './pages/Home';

function App() {
  return (
    <Routes>
      {/* <NavigationBar /> */}
      {/* {dashboard.map(({ route, navigation }) => (
        <Route {...route} key={navigation.name} />
      ))} */}
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
