/* This example requires Tailwind CSS v2.0+ */
export default function CardHeading({ title }) {
  return (
    <div className='bg-white py-5 border-b border-gray-300'>
      <h3 className='text-4xl leading-6 font-bold text-gray-900'>{title}</h3>
    </div>
  );
}
