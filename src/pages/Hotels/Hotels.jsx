import { HotelsContext } from 'Context/HotelsContext'
import React, { useContext, useEffect } from 'react'
import image from "../../assets/images/hotel1.png"
import HotelCard from 'components/Hotels/HotelCard'
import { FaSearch } from 'react-icons/fa'

import hotels2 from "../../assets/images/hotel (1).png"
import hotels3 from "../../assets/images/hotel (2).png"
import hotels4 from "../../assets/images/hotel (3).png"

const Hotels = () => {




    const { triggerFunction, setTriggerFunction } = useContext(HotelsContext);


    useEffect(() => {
        if (triggerFunction) {
            const fetchData = async () => {
                console.log("fetched")
                setTriggerFunction(false) // Reset the trigger after the call
            };

            fetchData();

        }
    }, [triggerFunction, setTriggerFunction]);

    const {
        hotels, fetchHotels
      } = useContext(HotelsContext);

    useEffect(() => {
        fetchHotels()
    },  [])

    return (

        <div>
            <div className="flex items-center justify-between mt-5 mb-2">
                <h1>Hotels</h1>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search Hotels"
                        className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full max-w-s"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaSearch />
                    </div>
                </div>
            </div>

            <div className="bg-white mb-5 p-4">
                <h2>Promoted Hotels</h2>

                <div className="flex gap-6 overflow-auto mt-5">
                    {hotels && hotels.length > 0 ? (
                        hotels.map((hotel) => (
                            <HotelCard key={hotel.id} data={hotel} />
                        ))
                    ) : (
                        <p className="col-span-full">No hotels available.</p>
                    )}
                </div>

                <h3 style={{ color: "#4F0DA3" }}>LOCATIONS</h3>

                <h2>
                    Top Hotel Locations
                </h2>

                <div className="flex gap-6 overflow-auto mt-5">
                    <div class="relative w-full h-full">
                        <img src={hotels2} alt="" class="w-full h-full object-cover" />
                        {/* <div class="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                            Your Text Here
                        </div> */}
                    </div>

                    <div class="relative w-full h-full">
                        <img src={hotels3} alt="" class="w-full h-full object-cover" />
                        {/* <div class="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                            Your Text Here
                        </div> */}
                    </div>

                    <div class="relative w-full h-full">
                        <img src={hotels4} alt="" class="w-full h-full object-cover" />
                    </div>
                </div>



           <h2 className="mt-5">     Hotels Around You</h2>

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

    )
}

export default Hotels