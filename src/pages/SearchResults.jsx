import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { fetchDocument } from '../store/actions/documentActions';
import { fetchRepository } from '../store/actions/repositoryActions';

import NavigationBar from '../components/common/NavigationBar';
import BaseFileDetail from '../components/generic/filedetail/BaseFileDetail';
import BaseStackedLists from '../components/generic/stackedlists/BaseStackedLists';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('searchText');
  const dispatch = useDispatch();

  const { documentLoading, documentData } = useSelector(
    (state) => state.document
  );
  const { repositoryLoading, repositoryData } = useSelector(
    (state) => state.repository
  );

  useEffect(() => {
    dispatch(fetchDocument(searchText));
    dispatch(fetchRepository(searchText));
  }, [dispatch, searchText]);

  return (
    <div>
      <NavigationBar />
      <div className='w-full flex flex-col flex-grow pt-16 px-16'>
        <div className='text-2xl font-bold mb-6'>
          Search results for -{' '}
          <span className='uppercase text-blue-400 font-bold'>
            {searchText}
          </span>
        </div>
        <div className='text-4xl text-blue-400 font-bold'>Files</div>
        {documentLoading ? (
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
          <div className='flex flex-col gap-y-8 my-12'>
            {documentData.map((document) => (
              <BaseFileDetail data={document} key={document._id} />
            ))}
          </div>
        )}
        <div className='text-4xl text-blue-400 font-bold'>Repositories</div>
        {repositoryLoading ? (
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
          <div className='flex flex-col gap-y-8 my-12'>
            {repositoryData.map((repository) => (
              <BaseStackedLists key={repository._id} data={repository} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
