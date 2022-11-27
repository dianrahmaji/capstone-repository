import { Routes, Route } from 'react-router-dom';
import dashboard from './config/dashboard';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      {dashboard.map(({ route, navigation }) => (
        <Route {...route} key={navigation.name} />
      ))}
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
