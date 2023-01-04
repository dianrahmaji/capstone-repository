import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchFolderByDocumentId } from '../store/actions/repositoryActions';

import NavigationBar from '../components/common/NavigationBar';
import BaseBreadcrumbs from '../components/generic/breadcrumbs/BaseBreadcrumbs';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

function FileDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { folderLoading, folder, document } = useSelector(
    (state) => state.folder
  );

  useEffect(() => {
    dispatch(fetchFolderByDocumentId(id));
  }, [dispatch, id]);

  const docs = [{ uri: require('../example_files/kalender_akademik.pdf') }];

  return (
    <div>
      <NavigationBar />
      <div className='flex flex-col p-12'>
        <BaseBreadcrumbs />
        <div className='self-center w-[90%]'>
          <DocViewer
            pluginRenderers={DocViewerRenderers}
            documents={docs}
            config={{
              pdfZoom: {
                defaultZoom: 0.7, // 1 as default,
                zoomJump: 0.2, // 0.1 as default,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FileDetail;
