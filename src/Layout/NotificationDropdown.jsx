import {
  useFetchUnreadNotification,
  useRealAllNotification,
} from 'api/services/feeds'
import React from 'react'

const NotificationDropdown = ({ handleCloseNotice }) => {
  const { data: unreadNotification, refetch } = useFetchUnreadNotification()
  const { mutateAsync: markAllAsRead } = useRealAllNotification()

  const handleClearAll = async () => {
    const ids = unreadNotification.map((notification) => notification.id)

    try {
      const res = await markAllAsRead({ ids })
      if(res?.status){

        refetch()
        handleCloseNotice()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='absolute right-0 mt-2 w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
      <div className=' border-b w-[300px] wfull border-gray-200'>
        <div className='text-[2rem] py-3 text-[#4F0DA3] flx item shadow-xl text-center font-semibold'>
          Notifications
          <button onClick={handleCloseNotice} className='absolute mt-2 right-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              // stroke='currentColor'
              className='size-8 stroke-black'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='px-4 gap-3 flex justify-between py-3 items-center flex-wrap'>
          <div className='text-lg text-black  text-center '>
            You have{' '}
            <span className='text-[#4F0DA3]'>
              {unreadNotification?.length} new
            </span>{' '}
            notifications
          </div>
          <button
            onClick={handleClearAll}
            className='text-sm text-[#FF0000] hover:underline'
          >
            Clean up
          </button>
        </div>
      </div>
      {unreadNotification?.map((item) => (
        <div
          key={item?.id}
          className='p-4 grid gap-1                                                                                                                                                                                                                   '
        >
          {/* Example Notifications */}
          <div className='flex  itemscenter gap4 py2'>
            {/* <img
            src='/path/to/image.png'
            alt='Profile'
            className='w-8 h-8 rounded-full'
          /> */}
            <div>
              <div className='font-semibold !text-[13px] !text-black'>
                {item?.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NotificationDropdown
