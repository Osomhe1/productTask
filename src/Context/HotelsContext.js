import { getHotels } from 'api/services/hotels';
import React, { createContext, useState } from 'react';
import toast from "react-hot-toast";
 
export const HotelsContext = createContext();


const HotelsProvider = ({ children }) => {
    const [triggerFunction, setTriggerFunction] = useState(null);
    const [hotels, setHotels] = useState([]);


    const fetchHotels = async (e) => {
        try {
          // setLoading(true);
          const resp = await getHotels();
          
          
          console.log(resp)

    
          if (resp.data) {
            setHotels(resp?.data);
          }
        } catch (error) {
          console.log("myhotels", error);
          toast.error(error.response.data.message || "Something went wrong!");
        } finally {
        //   setIsPageLoading(false);
        }
      };
    

    return (
        <HotelsContext.Provider value={{ triggerFunction, setTriggerFunction, hotels, fetchHotels }}>
            {children}
        </HotelsContext.Provider>
    );
};

export default HotelsProvider;
