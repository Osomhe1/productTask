import { Outlet, useLocation } from 'react-router-dom'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { Asidebar } from './Asidebar'
import { Header } from './Header'
import { useContext, useEffect, useState } from 'react'
import { Slider } from './Slider'
import NonAuthNavbar from './NonAuthNav/NonAuthNavbar'
import { ModalContext } from 'Context/ModalContext'

export const AppLayout = () => {
  const [slider, setSlider] = useState(false)
  const { pathname } = useLocation()

  const handleSlider = () => {
    setSlider((slider) => !slider)
  }

  const { isAuthenticated } = useContext(ModalContext)

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated)
  }, [isAuthenticated])

  return (
    <div
      className={`${
        isAuthenticated ? 'max-w-[1440px]  mx-auto' : 'max-w-full'
      } app_layout `}
    >
      <div className=''>{isAuthenticated ? <Header /> : <NonAuthNavbar />}</div>
      <Asidebar />
      <main className='app_main mt4 !md: mt-40'>
        <Outlet />
      </main>
      {pathname !== '/' && (
        <button
          className={`w-[41px] h-[41px] rounded-full bg-[#4F0DA3] flex justify-center items-center fixed ${
            slider ? 'left-[39%]' : 'left-[1rem]'
          } top-8  text-white text-[20px] cursor-pointer lg:hidden z-[9999] shadow-lg `}
          onClick={handleSlider}
        >
          {slider ? (
            <RiArrowLeftSLine size={30} />
          ) : (
            <RiArrowRightSLine size={30} />
          )}
        </button>
      )}
      <Slider slider={slider} setSlider={setSlider} />
    </div>
  )
}
