import { FaMagnifyingGlass } from 'react-icons/fa6'
import { FaRegBell } from 'react-icons/fa'
// import logo_2geda from './../assets/profile_images/2geda_logo.png'
import logo_2geda from './../assets/connectwhitelogo.jpg'
import { useProfile } from 'Hooks/profile/useProfile'
import { useFetchSearch, useFetchUnreadNotification } from 'api/services/feeds'
import { useState } from 'react'
import NotificationDropdown from './NotificationDropdown'
import SearchDropdown from './SearchDropdown'
import { noUser } from 'utils/noUser'

import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const { profileData } = useProfile()
  const { data: unreadNotification } = useFetchUnreadNotification()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  // const [searchResults, setSearchResults] = useState([])
  const { data: resultForSearch } = useFetchSearch()

  const { data: searchResults } = useFetchSearch(searchQuery)

  console.log(resultForSearch, 'reselt')

  console.log(unreadNotification, 'unreadNotification')
  const handleCloseNotice = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  const navigate = useNavigate()

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    if (e.target.value) {
      setIsSearchDropdownOpen(true)
    } else {
      setIsSearchDropdownOpen(false)
    }
  }

  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value)
  //   if (e.target.value) {
  //     // setSearchResults(['Sandra', 'Worship', 'Ask me', 'Sola kay', '2geda'])
  //     setSearchResults(resultForSearch)
  //     setIsSearchDropdownOpen(true)
  //   } else {
  //     setIsSearchDropdownOpen(false)
  //   }
  // }

  return (
    <header className='app_header hiddn  lg:flex'>
      <div className='flex justify-between  lg:gap[200px] 2xl:gap[350px] py-3 items-center   w-40'>
        <img
          src={logo_2geda}
          alt='2geda Logo'
          onClick={() => {
            navigate('/home')
          }}
          className='cursor-pointer lg:ml-[280px]'
        />

        {/* <div className='flex justify-between gap-10  items-center'>
          <form className='flex relative p-2 space-x-2 rounded-[8px] border border-gray-400 focus-within:bg-slate-200 transition-colors duration-300'>
            <input
              type='text'
              placeholder='Search Name, Place and Jobs'
              className='w-[400px] h-8 background-transparent border-none outline-none text-[13px] text-gray-700 font-light placeholder:text-[13px] placeholder:text-gray-700 placeholder:font-light'
              value={searchQuery}
              onChange={handleSearchChange}
            />

            <button type='button'>
              <FaMagnifyingGlass className='text-[16px] text-gray-700' />
            </button>

            {isSearchDropdownOpen && (
              <SearchDropdown searchResults={searchResults} />
            )}
          </form>

          <div className='relative cursor-pointer'>
            <div onClick={handleCloseNotice}>
              <FaRegBell className='text-[25px] cursor-pointer' />
              {unreadNotification?.length > 0 && (
                <div className='w-[17px] h-[17px] rounded-full bg-[#4f0da3] absolute -top-[2px] -right-[4px] text-white flex items-center justify-center'>
                  {unreadNotification?.length}
                </div>
              )}
            </div>
            {isDropdownOpen && (
              <NotificationDropdown handleCloseNotice={handleCloseNotice} />
            )}
          </div>

          <button
            onClick={() => {
              navigate(`/${profileData?.data?.data?.user?.username}`)
            }}
            className='flex flex-col py-4 gap-2 items-center'
          >
            <img
              src={profileData?.data?.data?.profile_picture || noUser}
              alt='Profile'
              className=' w-20 h-20 rounded-full object-cover'
            />
            <div className='text-[10px] w-40  font-extralight'>My Profile</div>
          </button>
        </div> */}
      </div>
    </header>
  )
}
