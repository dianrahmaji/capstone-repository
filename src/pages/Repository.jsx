import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavigationBar from '../components/common/NavigationBar';
import Sidebar from '../components/common/Sidebar';
import BaseCard from '../components/generic/card/BaseCard';
import Footer from '../components/common/Footer';

import { fetchFolder } from '../store/actions/repositoryActions';

const dataToNavigation = (data) => {
  if (Object.keys(data).length === 0) {
    return [
      { name: 'Navigation', href: '#', current: true },
      { name: 'Team', href: '#', current: false },
    ];
  }

  const navigation = [];

  navigation.push({ name: data.name, href: '#root', current: true });

  for (let i = 0; i < data.folders.length; i++) {
    navigation.push({
      name: data.folders[0 + i].name,
      href: `#section-${i + 1}`,
      current: false,
    });
  }

  return navigation;
};

function Repository() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { folderLoading, folder, repository } = useSelector(
    (state) => state.folder
  );

  useEffect(() => {
    dispatch(fetchFolder(id));
  }, [dispatch, id]);

  const navigation = dataToNavigation(folder);
  let idSection = 0;

  console.log(folder);

  return (
    <div className='flex flex-col grow min-h-screen'>
      <NavigationBar />
      <div className='w-full h-full flex flex-row grow'>
        <Sidebar navigation={navigation} />
        <div className='w-full h-full px-12 pt-12 pb-36'>
          {folderLoading ? (
            <h1 className='text-4xl font-bold mb-12'>Repository Name</h1>
          ) : repository ? (
            <h1 className='text-4xl font-bold mb-12'>{repository.title}</h1>
          ) : null}
          {folderLoading ? (
            <div className='flex items-center justify-center'>
              <svg
                className='mx-3 h-5 w-5 animate-spin'
                viewBox='0 0 24 24'
                fill='white'
              >
                <circle cx='12' cy='12' r='10' stroke='white' strokeWidth='4' />
                <path
                  className='opacity-50'
                  fill='black'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
              </svg>
            </div>
          ) : (
            <BaseCard main={true} data={folder} id='root' />
          )}
          {!folder.folders || folder.folders.length === 0
            ? null
            : folder.folders.map((folder) => {
                idSection++;
                return (
                  <BaseCard
                    firstSection={true}
                    data={folder}
                    key={folder._id}
                    id={`section-${idSection}`}
                  />
                );
              })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Repository;
