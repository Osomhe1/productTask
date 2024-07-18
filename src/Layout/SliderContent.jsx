import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiSolidHome } from 'react-icons/bi'
import { BsPersonCircle, BsTicketFill } from 'react-icons/bs'
import { IoChatbubbleEllipsesOutline, IoLogOutOutline } from 'react-icons/io5'
import {
  MdOutlineHowToVote,
  MdOutlineStorefront,
  MdOutlineOndemandVideo,
} from 'react-icons/md'
import { ModalContext } from 'Context/ModalContext'
import toast from 'react-hot-toast'
import connectwhitelogo from '../assets/connectwhitelogo-removebg.svg'
import { LiaConnectdevelop } from 'react-icons/lia'
import { IoMdBook } from 'react-icons/io'
import { TiBusinessCard } from 'react-icons/ti'
import { IoMusicalNotesSharp } from 'react-icons/io5'
import { useQueryClient } from '@tanstack/react-query'
import { FaHotel } from 'react-icons/fa'
import { PiTelevisionSimpleBold } from 'react-icons/pi'

import { useProfile } from 'Hooks/profile/useProfile'

const nav_item_style = {
  active:
    'flex space-x-4 text-[14px] font-medium items-center no-underline text-[#fff]',
  non_active:
    'flex space-x-4 text-[14px] font-light items-center no-underline text-[#c47efb]',
}

export const SliderContent = ({ setSlider }) => {
  const nav = useNavigate()
  const queryClient = useQueryClient()
  const { setIsAuthenticated } = useContext(ModalContext)

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('2gedaUserInfo')
    queryClient.removeQueries()
    setIsAuthenticated(false)
    nav('/')
    toast.success('Successfully Logged Out')
  }

  return (
    <>
      <div className='flex flex-col space-y-10'>
        <NavLink
          to='/commerce'
          className={({ isActive }) =>
            isActive ? nav_item_style['active'] : nav_item_style['non_active']
          }
        >
          <img src={connectwhitelogo} alt='' />
        </NavLink>

        <NavLink
          to='/commerce'
          className={({ isActive }) =>
            isActive ? nav_item_style['active'] : nav_item_style['non_active']
          }
        >
          <MdOutlineStorefront className='text-[23px]' />
          <div>Fisolak Online Store</div>
        </NavLink>
      </div>

      {/* <button
        className='flex items-center space-x-2 text-[15px] text-white'
        onClick={handleLogout}
      >
        <IoLogOutOutline className='text-[23px]' />
        <span>Sign out</span>
      </button> */}
    </>
  )
}
