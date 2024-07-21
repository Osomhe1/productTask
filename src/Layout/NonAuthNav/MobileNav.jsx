import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const data = [
  { label: 'About', to: 'about' },
  { label: 'Features', to: 'features' },
  { label: 'Contact', to: 'contact' },
]

const MobileNav = () => {
  return (
    <div className='flex flex-col items-center md:hidden absolute p-8 top-[70px] left-0 right-0 mx-auto w-[80%] bg-[#fff] shadow-lg rounded'>
      <ul className='flex flex-col items-center mr-4 gap-4'>
        {data.map((item, key) => (
          <li className='' key={key}>
            <ScrollLink
              className='navbar_links_mobile'
              to={item.to}
              smooth={true}
              duration={500}
            >
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
      <div className='flex flex-col items-center'>
        <Link
          to='/Signin'
          className='px-6 py-3 text-center bg-[#4F0DA3]  text-[#fff] md:text-[14px] text-[13px] no-underline rounded-xl flex items-center justify-center w-[150px]'
        >
          Login
        </Link>
        <Link
          to='/Signup'
          className='px-6 py-3 text-center bg-[#4F0DA3] mt-4  text-[#fff] md:text-[14px] text-[13px] no-underline rounded-xl flex items-center justify-center w-[150px]'
        >
          Get started
        </Link>
      </div>
    </div>
  )
}

export default MobileNav
