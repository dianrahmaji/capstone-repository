import React from 'react';
import NavigationBar from '../components/common/NavigationBar';
import BaseBreadcrumbs from '../components/generic/breadcrumbs/BaseBreadcrumbs';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

function FileDetail() {
  const docs = [
    { uri: require('../example_files/kalender_akademik.pdf') }, // Local File
  ];

  return (
    <div>
      <NavigationBar />
      <div className='flex flex-col p-12'>
        <BaseBreadcrumbs />
        <div className='self-center w-[90%]'>
          <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
        </div>
      </div>
    </div>
  );
}

export default FileDetail;
