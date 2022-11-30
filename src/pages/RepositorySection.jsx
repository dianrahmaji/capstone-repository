import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import NavigationBar from '../components/common/NavigationBar';
import Sidebar from '../components/common/Sidebar';
import BaseCard from '../components/generic/card/BaseCard';
import Footer from '../components/common/Footer';
import BaseFileDetail from '../components/generic/filedetail/BaseFileDetail';
import BaseBreadcrumbs from '../components/generic/breadcrumbs/BaseBreadcrumbs';
import { useDispatch } from 'react-redux';

import { fetchSingleTeam } from '../store/actions/teamActions';

function Repository() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const { teamLoading, singleTeamData } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchSingleTeam(id));
  }, [dispatch, id]);

  return (
    <div>
      <NavigationBar />
      <div className='w-full flex flex-row flex-grow'>
        <Sidebar />
        <div className='w-full px-12 pt-12'>
          <BaseBreadcrumbs />
          <BaseCard main={true} />
          <BaseCard firstSection={true} />
          <BaseCard secondSection={true} />
          <div className='flex flex-col mt-24'>
            {/* <BaseFileDetail />
            <BaseFileDetail /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Repository;
