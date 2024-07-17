import React from 'react'

const SearchDropdown = ({ searchResults }) => {
  return (
    <div className='absolute left-2 mt-10 w-[300px] md:w-[410px] text-black bg-white rounded-md shadow-lg z-50 overflow-hidden'>
      <div className='px-4 py-2 border-b flex justify-between items-center border-gray-200 font-bold'>
        <div className=' font-bold'>Recent Searches</div>
        <button className='cursor-pointer text-center text-[#FF0000]'>
          Clear all
        </button>
      </div>
      {searchResults ? (
        <div className='flex flex-col'>
          {searchResults?.posts?.map((post, index) => (
            <div
              key={index}
              className='px-4 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer'
            >
              {post?.title || post.content}
              <button className='absolute mt-2 right-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  className='size-6 stroke-black'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          ))}
          {searchResults?.users?.map((user, index) => (
            <div
              key={index}
              className='px-4 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer'
            >
              {user?.name || user.username}
              <button className='absolute mt-2 right-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  className='size-6 stroke-black'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          ))}
          {/* Repeat for jobs and businesses */}
        </div>
      ) : (
        <div className='px-4 py-2 text-gray-500 text-center'>
          No recent searches
        </div>
      )}
    </div>
  )
}

export default SearchDropdown
