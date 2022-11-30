import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavigationBar from '../components/common/NavigationBar';
import Sidebar from '../components/common/Sidebar';
import BaseCard from '../components/generic/card/BaseCard';
import Footer from '../components/common/Footer';

import { fetchTeam, fetchSingleTeam } from '../store/actions/teamActions';

function Repository() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { teamLoading, singleTeamData } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchSingleTeam(id));
  }, [dispatch, id]);

  return (
    <div>
      <NavigationBar />
      <div className='w-full flex flex-row flex-grow'>
        <Sidebar />
        <div className='w-full px-12 pt-12'>
          {teamLoading ? (
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
            <BaseCard main={true} data={singleTeamData} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Repository;
