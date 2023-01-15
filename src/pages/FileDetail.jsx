import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

import { fetchFolderByDocumentId } from '../store/actions/repositoryActions';

import NavigationBar from '../components/common/NavigationBar';
import BaseBreadcrumbs from '../components/generic/breadcrumbs/BaseBreadcrumbs';
import SimpleFileDetail from '../components/generic/filedetail/SimpleFileDetail';

function FileDetail() {
  const [file, setFile] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();

  const { folderLoading, folder, document } = useSelector(
    (state) => state.folder
  );
  const url = document ? document.url : null;
  const parents = folder.parents || [];
  const rootName = folder.name;
  const references = document ? document.references : null;

  useEffect(() => {
    dispatch(fetchFolderByDocumentId(id));

    const request = new Request(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
    });

    fetch(request)
      .then((response) => response.blob())
      .then((blob) => {
        setFile(window.URL.createObjectURL(blob));
      })
      .catch((err) => {
        // process error
      });
  }, [dispatch, id, url]);

  const docs = [
    {
      uri: null || file,
      fileName: document
        ? `${document.name}.${document.extension}`
        : 'file name',
    },
  ];

  return (
    <div>
      <NavigationBar />
      <div className='mt-8 pl-12'>
        <BaseBreadcrumbs
          pages={[
            ...parents
              .sort((a, b) => b.level - a.level)
              .map(({ _id, name }) => ({
                name,
                redirect: `/repository/${_id}`,
                current: false,
              })),
            {
              name: rootName,
              redirect: `/repository/${folder._id}`,
              current: true,
            },
          ]}
          separator={ChevronRightIcon}
        />
      </div>
      <div className='flex flex-col p-4'>
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
      <div className='flex flex-col'>
        <div className='self-center w-[90%]'>
          <h1 className='text-3xl text-blue-400 my-8 font-bold'>
            Daftar Dokumen Referensi:
          </h1>
          <div className='reference-list'>
            <div className='grid grid-cols-2 gap-2'>
              {references &&
                references.map((reference) => (
                  <SimpleFileDetail data={reference} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileDetail;
