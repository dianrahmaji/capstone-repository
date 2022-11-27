import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NavigationBar from '../components/common/NavigationBar';
import InputKeyboard from '../components/generic/form/input/InputKeyboard';

const Home = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const onSearch = () => {
    navigate(`/search-results?searchText=${searchText}`);
  };

  return (
    <>
      <NavigationBar />
      <div className='max-w-md mx-auto mt-64 px-3 lg:px-0'>
        <InputKeyboard
          searchText={searchText}
          onChange={onChange}
          onSearch={onSearch}
        />
      </div>
    </>
  );
};

export default Home;
