import NavigationBar from '../components/common/NavigationBar';
import InputKeyboard from '../components/generic/form/input/InputKeyboard';

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div className='max-w-md mx-auto mt-64 px-3 lg:px-0'>
        <InputKeyboard />
      </div>
    </>
  );
};

export default Home;
