import React from 'react';
import CardHeading from './CardHeading';

function BaseCard({ main, firstSection, secondSection, data, id }) {
  const classNames = {
    main: 'pb-12 border-b-2 border-slate-900',
    firstSection: 'ml-8 mt-12 pb-12 border-b-2 border-slate-900',
    secondSection: 'ml-16 mt-12',
  };
  return (
    <div
      className={
        'flex flex-col flex-grow ' +
        (main ? classNames.main : '') +
        (firstSection ? classNames.firstSection : '') +
        (secondSection ? classNames.secondSection : '')
      }
      id={id}
    >
      <CardHeading title={data.name} />
      <p className='text-md font-medium text-gray-900 mt-6'>
        {data.description}
      </p>
    </div>
  );
}

BaseCard.defaultProps = {
  data: {
    name: 'Default Title',
    description: 'Default Description',
  },
};

export default BaseCard;
