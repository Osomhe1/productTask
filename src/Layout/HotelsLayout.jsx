import { Link, Outlet } from "react-router-dom";
import ad from "../assets/profile_images/large-ads.png"
import { Dialog } from "@mui/material";
import { useContext, useState } from "react";
import AddListing from "components/Modals/Hotels/AddListing";
import { HotelsContext } from "Context/HotelsContext";
import "./hotels.css" 


const HotelsLayout = ({ fetchHotels }) => {
    const [showCreateModal, setShowCreateModal] = useState(false)

    const { setTriggerFunction } = useContext(HotelsContext);


    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-4/5 mb-4 md:mb-0 md:mr-4">

                <Outlet />
            </div>
            <div className="w-full md:w-1/5 hidden md:block">
                <Link to="/hotels/my-listings">
                    <button className="mt-3 btn w-full py-3 text-lg" style={{ background: "#FF8A15", color: "#ffffff" }}>Manage listings</button>
                </Link>
                <button className="mt-3 mb-3 btn w-full py-3 text-lg bg-white hover:bg-gray-500" onClick={()=> setShowCreateModal(true)}>
                    Add a listing
                </button>

                <img src={ad} alt="" className="w-full" />
            </div>


            <Dialog
                open={showCreateModal}
                onClose={() => setShowCreateModal((prev) => !prev)}
                fullWidth
              >
                 <AddListing
                  onClose={setShowCreateModal}
                  fetchHotels={()=>setTriggerFunction(true)}
                />
              </Dialog>
        </div>
    );
};

export default HotelsLayout;
