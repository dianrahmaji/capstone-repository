import React from 'react';
import CardHeading from './CardHeading';

function BaseCard({ main, firstSection, secondSection }) {
  const classNames = {
    main: 'pb-12 border-b-2 border-slate-900',
    firstSection: 'ml-8 mt-12',
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
    >
      <CardHeading />
      <p className='text-md font-medium text-gray-900 mt-6'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima cumque
        delectus nisi, eveniet, odio quis repudiandae commodi optio quaerat quas
        possimus qui beatae? Quis quam maxime reprehenderit odit ex fuga!
      </p>
    </div>
  );
}

export default BaseCard;
