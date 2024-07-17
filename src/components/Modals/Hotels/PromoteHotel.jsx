import React, { useState, useContext } from 'react'
import toast from 'react-hot-toast'
import { CreateHotelApi } from 'api/services/hotels'
import { FaTimes } from 'react-icons/fa'
import image from '../../../assets/share.svg'

const PromoteHotel = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false)

  const hotelPromotionPlans = [
    { name: 'Basic', users: 1000, price: 1000 },
    { name: 'Standard', users: 5000, price: 5000 },
    { name: 'Premium', users: 10000, price: 10000 },
    { name: 'Pro', users: 50000, price: 50000 },
  ]

  const [selectedPlan, setSelectedPlan] = useState(null)

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan)

    console.log(plan)
  }

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

        <h2>Promote your hotels!</h2>

        <p>
          Promote your poll, attract a wider audience, and boost hotel
          visibility effortlessly.
        </p>
      </center>

      <div className='promote-hotel'>
        {hotelPromotionPlans.map((plan, index) => (
          <div
            key={index}
            onClick={() => handlePlanClick(plan)}
            style={{ cursor: 'pointer' }}
          >
            <div>
              <div>
                {plan.name}
                {plan.users}
              </div>

              <div>
                {plan.price}
                <input type='radio' name='plan' checked={true} readOnly />
              </div>
            </div>
          </div>
        ))}
      </div>

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

export default PromoteHotel
