import MainLayout from '../../Layout/MainLayout'
import DashMessage from '../../components/Dashboard/DasMess'
import Follower from '../../components/Dashboard/Follower'
import PostComp from '../../components/Dashboard/PostComp'
import SelectCategory from '../../components/Dashboard/SelectCategory'
import './style.css'
import ProductDash from '../../components/Dashboard/product-card/ProductDAs'
import Stick from '../../components/Dashboard/Stick'
import SearchBox from '../../components/SearchComp/searchBox'
import Data from '../../utils/data.json'
// import { NavLink } from "react-router-dom";
import { useState } from 'react'
import MediaCard from '../../components/SearchComp/MediaCard'
import PlacesComp from '../../components/SearchComp/PlacesComp'
// import SearchBusinessCard from "../../components/SearchComp/SearchBusinessCard";
import SearchJobCard from '../../components/SearchComp/SearchJobCard'
import ClamBuss from '../BussinessDirectory/ClamBuss'
import BusinessStick from '../../components/Commons/BusinessStick'

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState('All')
  const [isBussinessOpen, setIsBussinessOpen] = useState(false)
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false)
  const [isClaimModalOpenOne, setIsClaimModalOpenOne] = useState(false)
  const [isClaimModalOpenTwo, setIsClaimModalOpenTwo] = useState(false)
  const [isClaimModalOpenThree, setIsClaimModalOpenThree] = useState(false)
  const [isClaimModalOpenDone, setIsClaimModalOpenDone] = useState(false)

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
  const handleTabClick = (text) => {
    setActiveTab(text)
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
        <div className='left-side-container'>
          {isBussinessOpen && (
            <BusinessStick handleBussinessClose={handleBussinessClose} />
          )}
          {!isBussinessOpen && (
            <>
              <SearchBox />
              <div className='select-what-display w-dis'>
                {Data.map((item, index) => (
                  <div
                    key={index}
                    className={`tab-item ${
                      item.text === activeTab ? 'sel-act' : 'anot-wid add-bor'
                    }`}
                    onClick={() => handleTabClick(item.text)}
                  >
                    <div className='dis-sel-name'>{item.text}</div>
                  </div>
                ))}
              </div>
              {activeTab === 'All' ? (
                <>
                  <PostComp />
                  <div className='you-may-know-bo'>
                    <div className='may-know-box'>
                      <Stick />
                      <Stick />
                      <Stick />
                      <Stick />
                      <Stick />
                    </div>
                  </div>
                  <PostComp />

                  <PostComp />
                  <div className='ticket-das-row'>
                    <ProductDash />
                    <ProductDash />
                    <ProductDash />
                    <ProductDash />
                    <ProductDash />
                  </div>
                  <PostComp />
                </>
              ) : null}
              {/* <PostComp /> */}

              {activeTab === 'People' ? (
                <div className='csss'>
                  <div className=' you-may-know-bo'>
                    <div className='may-know-box'>
                      <Stick />
                      <Stick />
                      <Stick />
                      <Stick />
                      <Stick />
                    </div>
                  </div>
                </div>
              ) : null}

              {activeTab === 'Media' ? (
                <div className='csss'>
                  <div className='media-das-row'>
                    <MediaCard />
                  </div>
                </div>
              ) : null}

              {activeTab === 'Business' ? (
                <div className='csss'>
                  <div className=' you-may-know-bo'>
                    <div className='may-know-box'>
                      {/* <SearchBusinessCard
                        handleClaimClick={handleClaimClick}
                        handleBussinessClick={handleBussinessClick}
                      />
                      <SearchBusinessCard
                        handleClaimClick={handleClaimClick}
                        handleBussinessClick={handleBussinessClick}
                      />
                      <SearchBusinessCard
                        handleClaimClick={handleClaimClick}
                        handleBussinessClick={handleBussinessClick}
                      />
                      <SearchBusinessCard
                        handleClaimClick={handleClaimClick}
                        handleBussinessClick={handleBussinessClick}
                      /> */}
                    </div>
                  </div>
                </div>
              ) : null}
              {activeTab === 'Places' ? (
                <div className='csss'>
                  <div className=' you-may-know-bo'>
                    <div className='may-know-box'>
                      <PlacesComp />
                    </div>
                  </div>
                </div>
              ) : null}
              {activeTab === 'Jobs' ? (
                <div className='csss'>
                  <div className=' you-may-know-bo'>
                    <div className='may-know-box'>
                      <SearchJobCard />
                      <SearchJobCard />
                      <SearchJobCard />
                      <SearchJobCard />
                      <SearchJobCard />
                    </div>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>
        <div className='middle-side-container'>
          <img src='images/ads1.png' alt='' />
          {/* <img src="images/ads2.png" alt="" />
            <img src="images/ads3.png" alt="" /> */}
        </div>
        <div className='right-side-container'>
          <SelectCategory />
          <Follower />
          <div className='mess-bxx-conn'>
            <DashMessage />
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchPage
