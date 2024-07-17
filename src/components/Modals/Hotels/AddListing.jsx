import React, { useState, useContext } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import toast from 'react-hot-toast'
import { CreateHotelApi } from 'api/services/hotels'
import { WithContext as ReactTags } from 'react-tag-input'
import { ModalContext } from 'Context/ModalContext'

const AddListing = ({ onClose, fetchHotels }) => {
  const [isLoading, setIsLoading] = useState(false)

  const [tags, setTags] = useState([])
  const [listing, setListing] = useState({
    name: '',
    location: '',
    type: '',
    rooms: '',
    description: '',
    image: '',
    features: tags,
  })

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i))
  }

  const handleAddition = (tag) => {
    setTags([...tags, tag])
  }

  const handleInputChange = (name, value) => {
    setListing((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleAddListing = async (e) => {
    e.preventDefault()

    const missingFields = []
    if (!listing.name) missingFields.push('name')
    if (!listing.location) missingFields.push('location')
    if (!listing.type) missingFields.push('type')
    if (!listing.rooms) missingFields.push('rooms')
    if (!listing.description) missingFields.push('description')

    if (missingFields.length > 0) {
      toast.error(`Missing required fields: ${missingFields.join(', ')}`)
      return
    }

    setListing((prevState) => ({ ...prevState, features: tags }))

    console.log('added')

    try {
      setIsLoading(true)

      const resp = await CreateHotelApi(listing)

      if (resp.data.status) {
        toast.success('Poll created successfully')
      }
    } catch (error) {
      console.log('createt', error)
      toast.error(error.response.data.message || 'Something went wrong!')
    } finally {
      fetchHotels()
      setIsLoading(false)
      onClose()
    }
  }

  return (
    <form className='form-wrapper' onSubmit={handleAddListing}>
      <div
        className='createTop'
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          paddingBottom: '20px',
        }}
      >
        <FaArrowLeftLong
          style={{ fontSize: '20px' }}
          onClick={() => onClose(false)}
          className='cursor-pointer'
        />
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
          List Apartment
        </span>
      </div>
      <div className='form-field'>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Name'
          className='outline-none p-[9px]'
          value={listing.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>

      <div className='form-field'>
        <input
          type='text'
          id='location'
          name='location'
          placeholder='Location'
          className='outline-none p-[9px]'
          value={listing.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
        />
      </div>

      <div className='form-field'>
        <select
          name='type'
          id='type'
          value={listing.type}
          onChange={(e) => handleInputChange('type', e.target.value)}
        >
          <option value=''>Apartment type</option>
          <option value='Appartment1'>Apartment 1</option>
          <option value='Appartment2'>Apartment 2</option>
        </select>
      </div>

      <div className='form-field'>
        <input
          type='text'
          id='rooms'
          name='rooms'
          placeholder='Number of rooms'
          className='outline-none p-[9px]'
          value={listing.rooms}
          onChange={(e) => handleInputChange('rooms', e.target.value)}
        />
      </div>

      <div className='form-field'>
        <input
          type='text'
          id='description'
          name='description'
          placeholder='Description'
          className='outline-none p-[9px]'
          value={listing.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />
      </div>

      <div className='form-field'>
        <input
          type='file'
          id='image'
          name='image'
          placeholder='image'
          className='outline-none p-[9px]'
          value={listing.image}
          onChange={(e) => handleInputChange('image', e.target.value)}
        />
      </div>

      <p>
        <b>Facilities</b>
      </p>
      <ReactTags
        tags={tags}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        inputFieldPosition='bottom'
        autocomplete
        placeholder='Type and press enter to add a feature'
      />

      <button
        className='create-poll-btn outline-none'
        type='submit'
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Publish this item'}
      </button>
    </form>
  )
}

export default AddListing
