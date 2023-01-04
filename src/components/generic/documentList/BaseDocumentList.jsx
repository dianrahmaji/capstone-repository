import React from 'react';
import { Link } from 'react-router-dom';

const BaseDocumentList = ({ documents }) => {
  return (
    <div className='flex flex-col border-2 rounded border-slate-600 p-4 max-w-fit mt-8'>
      <h3 className='uppercase font-bold'>Documents:</h3>
      <div className='links flex flex-col gap-y-1 mt-4'>
        {documents.length === 0 ? (
          <div>none</div>
        ) : (
          documents.map((document) => (
            <Link
              className='text-blue-600'
              to={`/file-detail/${document._id}`}
              key={document._id}
            >
              <span className='underline'>{document.name}</span>{' '}
              <span className='no-underline'>{`(${document.extension})`}</span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

BaseDocumentList.defaultProps = {
  documents: [],
};

export default BaseDocumentList;
