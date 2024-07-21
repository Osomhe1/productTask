import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link, Link as RouterLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './style.css'
import MobileNav from './MobileNav'
import logo from '../../assets/connectwhitelogo.jpg'

const data = [
  { label: 'About', to: 'about' },
  { label: 'Features', to: 'features' },
  { label: 'Contact', to: 'contact' },
]

const NonAuthNavbar = () => {
  const [toggleOn, setToggleOn] = useState(false)

  const handleToggleIcon = () => {
    setToggleOn(!toggleOn)
  }

  return (
    <div
      className={`non-navbar-container top-0 z-20 ${toggleOn ? 'active' : ''}`}
    >
      <div className='w-full flex justify-between items-center'>
        <div className='logon'>
          <img
            src={logo}
            className='md:ml-20'
            alt='logo'
            style={{ width: '80px' }}
          />
        </div>
        {/* <div className='flex items-center gap-2'>
          <div
            className='text-[#4f0da3] cursor-pointer block md:hidden text-[24px] mr-[10px]'
            onClick={handleToggleIcon}
          >
            {toggleOn ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          <ul className='hidden md:flex md:items-center gap-12'>
            {data.map((item, key) => (
              <li className='' key={key}>
                <ScrollLink
                  className='navbar_links'
                  to={item.to}
                  smooth={true}
                  duration={500}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {toggleOn && <MobileNav />}
        </div> */}
        <div className='hiddn md: flex gap-4'>
          <Link
            to='/Signin'
            className='px-4 md:px-12 py-3 text-center bg-[#4F0DA3]  hover:bg-purple-700 transition duration-200 text-[#fff] md:text-[14px] text-[13px] no-underline rounded-xl flex items-center justify-center'
          >
            Login
          </Link>
          <Link
            to='/Signup'
            className='px-4 md:px-12 py-3 text-center bg-[#4F0DA3]  hover:bg-purple-700 transition duration-200 text-[#fff] md:text-[14px] text-[13px] no-underline rounded-xl flex items-center justify-center'
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NonAuthNavbar
