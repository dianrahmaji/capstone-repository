export default function InputKeyboard({ searchText, onChange, onSearch }) {
  return (
    <>
      <label
        htmlFor='search'
        className='block text-sm font-medium text-gray-800'
      >
        Quick search
      </label>
      <div className='mt-1 relative flex items-center'>
        <input
          value={searchText}
          onChange={onChange}
          onKeyPress={(e) => e.key === 'Enter' && onSearch()}
          type='text'
          name='search'
          id='search'
          className='h-11 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 lg:text-lg sm:text-sm border-2 border-slate-500 rounded-md'
        />
        <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
          <kbd className='inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400'>
            ⌘K
          </kbd>
        </div>
      </div>
    </>
  );
}
