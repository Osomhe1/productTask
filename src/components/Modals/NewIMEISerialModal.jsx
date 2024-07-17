import { useState } from 'react'
import ModalButton from './ModalButton'
import CustomDropdown from './CustomDropdown'
import Spinner from 'components/Spinner'
import { useCreateGadget } from 'Hooks/profile/useCreateGadget'
import { useUpdateGadget } from 'Hooks/profile/useUpdateGadjet'
import toast from 'react-hot-toast'
import { updateGadget } from 'api/services/profile'
import { useModal } from 'Hooks/useModal'
import { useGetGadgets } from 'Hooks/profile/useGetGadjets'
import { useParams } from 'react-router-dom'
//import { createGadget } from "api/services/profile";

const inputStyle =
  'rounded-[8px] border border-neutral-500 py-[10px] text-[14px] placeholder:text-[14px] text-black outline-none'

const NewIMEISerialModal = () => {
  const [data, setData] = useState({})

  const { id } = useParams()

  const { gadgetStatus, createGadgetError, createGadget } = useCreateGadget()
  const { gadgetStatus: updatingStatus } = useUpdateGadget()
  const { gadgetRefetch } = useGetGadgets()

  const handleChange = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      id_number: data.id_number,
      phone_name: data.phone_name,
      category: data.category,
    }

    createGadget(formData)
  }

  return (
    <>
      <div className='px-[15px] mb-0 py-[10px] lg:px-[10px] lg:mb-[1.5rem]'>
        <form
          className='flex flex-col gap-[30px] mt-[5rem]'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            placeholder='Preferred name'
            className={inputStyle}
            onChange={handleChange}
            name='phone_name'
            defaultValue={data?.phone_name}
          />

          <input
            type='text'
            placeholder={`imei or serial number`}
            className={inputStyle}
            onChange={handleChange}
            name='id_number'
            defaultValue={data?.id_number}
          />

          <CustomDropdown
            stallValue='Select category'
            menu={[
              { label: 'Imei', value: 'imei' },
              { label: 'Serial', value: 'serial_number' },
            ]}
            setData={setData}
            name='category'
            defaultValue={data?.category}
          />

          <ModalButton>
            {gadgetStatus === 'pending' || updatingStatus === 'pending' ? (
              <Spinner />
            ) : (
              'Save'
            )}
          </ModalButton>
        </form>
      </div>
    </>
  )
}

export default NewIMEISerialModal
