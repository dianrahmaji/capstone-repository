import React from 'react';
import CardHeading from './CardHeading';

function Card() {
  return (
    <div className='flex flex-col flex-grow'>
      <CardHeading />
      <p className='text-md font-medium text-gray-900 mt-6'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima cumque
        delectus nisi, eveniet, odio quis repudiandae commodi optio quaerat quas
        possimus qui beatae? Quis quam maxime reprehenderit odit ex fuga!
      </p>
    </div>
  );
}

export default Card;
