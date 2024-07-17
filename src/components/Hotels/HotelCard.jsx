import React from 'react'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import image from "../../assets/images/hotel1.png"
import { Link } from 'react-router-dom'

const HotelCard = ({ data }) => {
  return (
    <div className='hotel-card'style={{ minWidth: "300px"}}>
      <Link    to={{
                        pathname: `/hotels/${data.id}`,
                        state: { plan: data }
                    }}>  <div>
          <img src={data?.image ? data?.image: image} alt="" className="w-full h-auto rounded-xl" />
        </div>
      <div className='content'>
      <p className='flex items-center'><FaStar style={{ color: "gold"}}/>&nbsp; <span>9.5 out of 256 reviews</span></p>
        <h3>{data?.name}</h3>

        <p className='flex items-center'><FaMapMarkerAlt/> <span>456 Oak Street Springfield, IL 62701</span></p>
      </div></Link>
    </div>
  )
}

export default HotelCard