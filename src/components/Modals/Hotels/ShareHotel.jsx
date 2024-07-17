import React, { useState, useContext } from 'react'
import toast from 'react-hot-toast'
import { CreateHotelApi } from 'api/services/hotels'
import { FaTimes } from 'react-icons/fa'
import image from '../../../assets/share.svg'

const ShareHotel = ({ onClose, fetchHotels }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='form-wrapper hotel-small-modal'>
      <div
        className='createTop'
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          paddingBottom: '20px',
          justifyContent: 'flex-end',
        }}
      >
        <div className='hotel-close-btn'>
          <FaTimes onClick={onClose} />
        </div>
      </div>

      <center>
        <img src={image} alt='Image' />
        <br />

        <h2>Share Your Hotel Experience</h2>

        <p>
          Your opinion matters! Help fellow travelers by sharing your recent
          hotel experiences.{' '}
        </p>
      </center>

      <button className='create-poll-btn outline-none' disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Share on 2geda'}
      </button>

      <button
        className='create-poll-btn hotel-btn2 outline-none'
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Copy hotel link'}
      </button>
    </div>
  )
}

export default ShareHotel
