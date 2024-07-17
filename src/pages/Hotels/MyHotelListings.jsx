import React from 'react'
import image from "../../assets/images/hotel1.png"
import HotelCard from 'components/Hotels/HotelCard'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MyHotelListings = () => {

    const hotels = [
        { id: 1, name: "Ibadan, Nigeria", date: "Jan 18-23", distance: "2km away", price: "$109 night", image: image },
        { id: 2, name: "Ibadan, Nigeria", date: "Jan 18-23", distance: "2km away", price: "$109 night", image: image },
        { id: 3, name: "Ibadan, Nigeria", date: "Jan 18-23", distance: "2km away", price: "$109 night", image: image },
        { id: 4, name: "Ibadan, Nigeria", date: "Jan 18-23", distance: "2km away", price: "$109 night", image: image },
        { id: 5, name: "Ibadan, Nigeria", date: "Jan 18-23", distance: "2km away", price: "$109 night", image: image },
        { id: 6, name: "Ibadan, Nigeria", date: "Jan 18-23", distance: "2km away", price: "$109 night", image: image },
    ]
  return (
    <div>
         <h2 className="flex items-center mt-5"><Link to={'/hotels'}><FaArrowLeft /></Link> &emsp; My listings</h2>

        <div className="bg-white mt-5 mb-5 p-4">
               

                <div className="grid gap-5 sm:grid-cols-2">
                    {hotels && hotels.length > 0 ? (
                        hotels.map((hotel) => (
                            <HotelCard key={hotel.id} data={hotel} />
                        ))
                    ) : (
                        <p className="col-span-full">No hotels available.</p>
                    )}
                </div>
            </div>
    </div>
  )
}

export default MyHotelListings