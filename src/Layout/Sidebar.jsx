import { BiSolidHome } from 'react-icons/bi'
import { BsPersonCircle, BsTicketFill } from 'react-icons/bs'
import { IoChatbubbleEllipsesOutline, IoLogOutOutline } from 'react-icons/io5'
import { ModalContext } from 'Context/ModalContext'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { MdOutlineHowToVote } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom'
import './style.css'
import { IoMdBook } from 'react-icons/io'
import { useQueryClient } from '@tanstack/react-query'

const Sidebar = ({ isCollapsed }) => {
  const queryClient = useQueryClient()

  const nav = useNavigate()
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
    <div
      className={isCollapsed ? 'sidebar-container  nil' : 'sidebar-container'}
    >
      <div className='sidebar-box'>
        <div className='side-items '>
          <NavLink
            to='/Home'
            className={({ isActive }) =>
              isActive ? 'active_link side-item' : 'side-item'
            }
          >
            <BiSolidHome className='side-icon ' />
            <div className='sidebar-text'>Home</div>
          </NavLink>
          <NavLink
            to='/education'
            className={({ isActive }) =>
              isActive ? 'active_link side-item' : 'side-item'
            }
          >
            <IoMdBook className='side-icon ' />
            <div className='sidebar-text'>Education</div>
          </NavLink>

          <NavLink
            to='/chat'
            className={({ isActive }) =>
              isActive ? 'active_link side-item' : 'side-item'
            }
          >
            <IoChatbubbleEllipsesOutline className='side-icon ' />
            <div className='sidebar-text'>Chats</div>
          </NavLink>
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              isActive ? 'active_link side-item' : 'side-item'
            }
          >
            <BsPersonCircle className='side-icon ' />
            <div className='sidebar-text'>Profile</div>
          </NavLink>

          <NavLink className='side-item flex flex-row' onClick={handleLogout}>
            <IoLogOutOutline className='side-icon ' />
            <div className='sidebar-text'>Sign Out</div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
