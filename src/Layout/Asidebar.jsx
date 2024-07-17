import { SliderContent } from './SliderContent'

export const Asidebar = () => {
  return (
    <aside className='app_aside  h-screen overflow-scroll bg-[#4F0DA3] fixed w-[50%] lg:w-[260px] z-40 top-0 left-0'>
      <SliderContent />
    </aside>
  )
}
