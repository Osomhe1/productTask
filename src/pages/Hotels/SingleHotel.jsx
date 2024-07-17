import React, { useContext, useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'


import { Dialog } from "@mui/material";
import image from "../../assets/images/hotel1.png"
import hotels1 from "../../assets/images/hotel (1).png"
import HotelCard from 'components/Hotels/HotelCard'
import ShareHotel from 'components/Modals/Hotels/ShareHotel';
import { HotelsContext } from 'Context/HotelsContext';
import { FaShare } from 'react-icons/fa6';
import PromoteHotel from 'components/Modals/Hotels/PromoteHotel';

const SingleHotel = () => {

  const [showReviewModal, setShowReviewModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [showPromoteModal, setShowPromoteModal] = useState(false)
  const location = useLocation();
  const { plan } = location.state || {};

  const {
    hotels, fetchHotels, setTriggerFunction
  } = useContext(HotelsContext);

  useEffect(() => {
    fetchHotels()
  }, [])



  console.log(plan)


  return (
    <div>
      <h2 className="flex items-center mt-5"><Link to={'/hotels'}><FaArrowLeft /></Link> &emsp; Hotel Information</h2>

      <div className="bg-white mt-5 mb-5 p-4">

        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2 p-4">
              <img src={hotels1} alt="" class="w-full rounded-lg" />

              <button className="hotel-gray-btn" onClick={() => setShowReviewModal(true)}><FaShare /> Share review </button>


              <button className="hotel-gray-btn" onClick={() => setShowPromoteModal(true)}><FaShare />Promote </button>
            </div>
            <div className="md:col-span-3 p-4">
              <h1>The Stamford Bridge
              </h1>
              <p>Room in Oluyole Estate, Ibadan</p>

              <p style={{ color: "#FF8A15" }}>1 room - Private attached bathroom</p>


              <h2 className='mt-5'>About this place</h2>
              <p>The location is ideal for getting off the grid and enjoying private trails for hiking, biking, xc ski and snowshoe.  4WD or AWD preferred travel in winter.  The location is remote and beautiful.  The Moose Haven is at about 9000 feet along the Park Range in the Rocky Mountains.The heat is furnished by a wood stove that does require stoking through cold nights.  The composting bathroom is 20 feet away and the shower house a short walk. </p>

              <p className="text-right"><span className='purple'>View more {'>>'}</span></p>

              <h2>Features and Facilities</h2>




              <h2 className="mt-5">Similar Hotels</h2>

              <div className="flex gap-6 overflow-auto mt-5">
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
        </div>
      </div>

      <Dialog
        open={showReviewModal}
        onClose={() => setShowReviewModal((prev) => !prev)}
        fullWidth
      >
        <ShareHotel
          onClose={() => setShowReviewModal((prev) => !prev)}
          fetchHotels={() => setTriggerFunction(true)}

        />
      </Dialog>

      <Dialog
        open={showPromoteModal}
        onClose={() => setShowPromoteModal((prev) => !prev)}
        fullWidth
      >
        <PromoteHotel
          onClose={() => setShowPromoteModal((prev) => !prev)}

        />
      </Dialog>


    </div>
  )
}

export default SingleHotel