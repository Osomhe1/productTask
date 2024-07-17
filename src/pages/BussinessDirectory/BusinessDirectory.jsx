import { useEffect, useState } from 'react'
import MainLayout from '../../Layout/MainLayout'
import BusinessSearch from '../../components/BusinessDirectoryComp/BusinessSearch'
import BusinessCard from '../../components/BusinessDirectoryComp/BusinessSmallCard'
import './style.css'
import ClamBuss from './ClamBuss'
import { BusinessesNearbyApi } from 'api/services/connect'
import toast from 'react-hot-toast'
import Businesses from './Businesses'
import Spin from 'components/Spin/Spin'

const BusinessDirectory = () => {
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false)
  const [isClaimModalOpenOne, setIsClaimModalOpenOne] = useState(false)
  const [isClaimModalOpenTwo, setIsClaimModalOpenTwo] = useState(false)
  const [isClaimModalOpenThree, setIsClaimModalOpenThree] = useState(false)
  const [isClaimModalOpenDone, setIsClaimModalOpenDone] = useState(false)
  const [isBussinessOpen, setIsBussinessOpen] = useState(false)

  const handleClaimClickDone = (e) => {
    e.preventDefault()
    setIsClaimModalOpenDone(true)
  }

  const handleClaimClickCloseDone = () => {
    setIsClaimModalOpenDone(false)
    setIsClaimModalOpenThree(false)
    setIsClaimModalOpenTwo(false)
    setIsClaimModalOpenOne(false)
    setIsClaimModalOpen(false)
  }

  const handleClaimClickThree = (e) => {
    e.preventDefault()
    setIsClaimModalOpenThree(true)
  }
  const handleClaimClickCloseThree = () => {
    setIsClaimModalOpenThree(false)
  }
  const handleClaimClickTwo = (e) => {
    e.preventDefault()
    setIsClaimModalOpenTwo(true)
  }
  const handleClaimClickCloseTwo = () => {
    setIsClaimModalOpenTwo(false)
  }
  const handleClaimClickOne = (e) => {
    e.preventDefault()
    setIsClaimModalOpenOne(true)
  }
  const handleClaimClickCloseOne = () => {
    setIsClaimModalOpenOne(false)
  }
  const handleClaimClick = () => {
    setIsClaimModalOpen(true)
  }
  const handleClaimClickClose = () => {
    setIsClaimModalOpen(false)
  }
  const handleBussinessClose = () => {
    setIsBussinessOpen(false)
  }

  const handleBussinessClick = () => {
    setIsBussinessOpen(true)
  }

  const [bizloading, setBizLoading] = useState(true)
  const [NearbyBiz, setNearbyBiz] = useState([])
  const [originalNearbyBiz, setOriginalNearbyBiz] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  // Nearby businesses
  const nearbyBusinesses = async () => {
    try {
      const res = await BusinessesNearbyApi()

      if (res.data.status) {
        setNearbyBiz(res.data.data)
        setOriginalNearbyBiz(res.data.data)
      }
    } catch (error) {
      console.log('nearbyBusinesses', error)
      toast.error(
        error.response.data.message ||
          error.response.message ||
          'Something went wrong!'
      )
    } finally {
      setBizLoading(false)
    }
  }

  useEffect(() => {
    nearbyBusinesses()
  }, [])

  // Handler to clear the search query and restore original data
  const handleClearSearch = () => {
    setSearchQuery('')
    setNearbyBiz(originalNearbyBiz)
  }

  return (
    <>
      <ClamBuss
        handleClaimClickDone={handleClaimClickDone}
        handleClaimClickCloseDone={handleClaimClickCloseDone}
        handleClaimClickThree={handleClaimClickThree}
        handleClaimClickCloseThree={handleClaimClickCloseThree}
        handleClaimClickTwo={handleClaimClickTwo}
        handleClaimClickCloseTwo={handleClaimClickCloseTwo}
        handleClaimClickOne={handleClaimClickOne}
        handleClaimClickCloseOne={handleClaimClickCloseOne}
        handleClaimClickClose={handleClaimClickClose}
        handleClaimClick={handleClaimClick}
        isClaimModalOpen={isClaimModalOpen}
        isClaimModalOpenOne={isClaimModalOpenOne}
        isClaimModalOpenTwo={isClaimModalOpenTwo}
        isClaimModalOpenThree={isClaimModalOpenThree}
        isClaimModalOpenDone={isClaimModalOpenDone}
      />
      <div className='main-containe'>
        <div className='left-side-container buss-all-container '>
          {!isBussinessOpen && (
            <>
              <h1>Business Directory</h1>
              <BusinessSearch
                NearbyBiz={NearbyBiz}
                setNearbyBiz={setNearbyBiz}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleClearSearch={handleClearSearch}
              />
              {bizloading ? (
                <Spin />
              ) : (
                <div className='business-card-boxx'>
                  {NearbyBiz.length === 0 ? (
                    <p className='text-center'>No Business</p>
                  ) : (
                    NearbyBiz.map((biz, index) => (
                      <Businesses
                        key={index}
                        biz={biz}
                        handleClaimClick={handleClaimClick}
                        handleBussinessClick={handleBussinessClick}
                      />
                    ))
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {!isBussinessOpen && (
          <div className=' flex w-[70%] gap-[20px]'>
            <div className='middle-side-container w-full'>
              <img src='images/ads1.png' alt='' />
              <img src='images/ads2.png' alt='' />
              <img src='images/ads3.png' alt='' />
            </div>
            <div className='right-side-container buss-dir-right w-full'>
              <div className='head-line busss text-center w-full font-semibold'>
                Businesses Around You
              </div>
              {bizloading ? (
                <Spin />
              ) : (
                <div className='buss-small-bxx'>
                  <BusinessCard />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default BusinessDirectory
