import { useField } from 'formik';

const BaseSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <select
        className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className='mt-1 text-xs text-red-500'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default BaseSelect;
