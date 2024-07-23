import logo_2geda from './../assets/connectwhitelogo.jpg'

import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <header className='app_header   lg:flex'>
      <div className='flex justify-between  lg:py-3 items-center   w-40'>
        <img
          src={logo_2geda}
          alt='fisolak Logo'
          onClick={() => {
            navigate('/')
          }}
          className='cursor-pointer lg:ml-[280px]'
        />
      </div>
    </header>
  )
}
