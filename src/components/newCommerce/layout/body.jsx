import { Box, Button, Stack } from '@mui/material'
import Header from '../typography/txtHeader'
import InputField from '../shared/inputField'
import Description from '../typography/txtDescription'
import {
  Furniture,
  Kids,
  trendSales,
} from 'components/newCommerce/data/commerceMock'
import { Store } from '../data/storeData'
import Stacked from '../shared/Stacked'
import { useContext } from 'react'
import Template from '../shared/template'
// import Adds from "assets/images/adds-section.png";
import { Link, useNavigate } from 'react-router-dom'
import sugBusiess from '../data/suggestedBusiness'
import Suggested from './suggestedBus'
import { CiSearch } from 'react-icons/ci'
import { LiaTimesSolid } from 'react-icons/lia'
import { useEffect, useRef, useState } from 'react'
import { ModalContext } from 'Context/ModalContext'
import { getProduct, getCarts } from 'api/commerce/Apiactions'
import toast from 'react-hot-toast'
import Loader from 'components/newCommerce/layout/loader'
import { CommerceModal } from '../Modals/Reviewpopup'
import Overlay from '../shared/maodalOverlay'
import Managestoremobile from 'components/newCommerce/layout/mobile/Managestoremobilw'
const inpStyle = {
  pointerEvents: 'none',
  div: {
    borderRadius: '10px',
  },
  input: {
    padding: '8px 12px',
    textIndent: '30px',
    width: '350px',
    fontFamily: 'Ubuntu !important',
    '&::placeholder': {
      color: '#000000 !important',
      fontStyle: 'italic',
      fontSize: '12px',
      fontFamily: 'Ubuntu',
    },
  },
}

const Body = () => {
  const [searchpop, Setsearchpop] = useState(false)
  const [loading, setLoading] = useState(true)
  const [datas, setDatas] = useState([])
  const [error, setError] = useState(null)
  const searchpopRef = useRef(null)
  // const [cartItems, setCartItems] = useState([]);
  const { topProduct } = useContext(ModalContext)

  // const funiture =

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await getProduct()
        // const cartResponse = await getCarts();
        // setCartItems(cartResponse);
        setLoading(false)
        setDatas(response.data)
      } catch (err) {
        err.code === 'ERR_NETWORK'
          ? toast.error('Network Error')
          : toast.error('Problem Fetching Products')
        console.log('Error', err)
        setLoading(false)
        setError(err)
      }
    }

    fetchList()
  }, [])

  const handlesearchpop = () => {
    Setsearchpop(true)
  }

  const clearPopup = (e) => {
    if (searchpopRef.current && !searchpopRef.current.contains(e.target)) {
      Setsearchpop(false)
    }
  }

  useEffect(() => {
    searchpop
      ? document.addEventListener('mousedown', clearPopup)
      : document.removeEventListener('mousedown', clearPopup)
    return () => {
      document.removeEventListener('mousedown', clearPopup)
    }
  }, [searchpop])

  // saerch-value
  const [searchValue, Setsearchvalue] = useState('')

  const navigate = useNavigate()
  // submisiion
  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchValue !== '') {
      // pass
      navigate(`search/${searchValue}`)
    } else {
      window.alert('Field Cant be empty')
    }
  }
  //handle-search-change
  const handleChange = (e) => {
    Setsearchvalue(e.target.value)
  }

  if (loading) {
    return (
      <Box
        pt={3}
        bgcolor='#F5F5F5'
        sx={{}}
        flex={8}
        pb={2}
        className='main_container'
      >
        <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
          <Loader />
        </div>
      </Box>
    )
  }

  if (error) {
    return (
      <Box
        pt={3}
        bgcolor='#F5F5F5'
        sx={{}}
        flex={8}
        pb={2}
        className='h-[100vh] main_container'
      >
        <div className='mt-[25%] text-center'>
          <h2 className='text-center'>Failed to Fetch products</h2>
          <Button
            className='mt-2'
            variant='contained'
            sx={{ fontSize: '1.35rem' }}
            onClick={() => window.location.reload()}
          >
            Reload
          </Button>
        </div>
      </Box>
    )
  }

  // filter product by categories
  const Automobiledatas = datas.filter(({ category }) => category === 1)
  // console.log(Automobiledatas);

  const Phones = datas.filter(({ category }) => category === 2)
  const Homes = datas.filter(({ category }) => category === 3)
  const Electronics = datas.filter(({ category }) => category === 4)
  const Beauty = datas.filter(({ category }) => category === 5)
  const Food = datas.filter(({ category }) => category === 9)
  const Recreation = datas.filter(({ category }) => category === 10)
  const Fitness = datas.filter(({ category }) => category === 11)
  const Others = datas.filter(({ category }) => category === 12)

  // kids-and-toys
  const KidsToys = datas.filter(({ category }) => category === 7)
  // furniture-and-decoration
  const Furnitures = datas.filter(({ category }) => category === 6)
  // Clothings-wears
  const Clothings = datas.filter(({ category }) => category === 8)

  return (
    <Box
      pt={3}
      bgcolor='#F5F5F5'
      sx={{}}
      flex={8}
      pb={2}
      className='main_container'
    >
      {/* conditional-rendering-of-store-and-top-store */}
      {topProduct === 'topProducts' ? (
        <>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{
              paddingLeft: {
                sm: '10px',
                xs: '10px',
                lg: '0px',
                xl: '0px',
                position: 'relative',
              },
            }}
          >
            <Header title='Buy and sell instantly' />
            <div
              className='relative search_popup_commerce cursor-pointer'
              onClick={() => {
                handlesearchpop()
              }}
            >
              <InputField
                placeholder='Search products'
                styles={inpStyle}
                cname='input-search'
              />
            </div>

            {/* mock-box-popup-for-serach-box */}
            {searchpop ? (
              <div
                ref={searchpopRef}
                className='search_popup absolute top-0 right-0 w-[400px] border-1 rounded-xl border-[#00000066] pt-2 pb-3 bg-white flex flex-col gap-y-4 px-4 z-50 search_box'
              >
                <form action='#' autoComplete='off' onSubmit={handleSubmit}>
                  <div className='flex items-center gap-x-[3rem] '>
                    <div className='flex items-center gap-x-0 w-full'>
                      <CiSearch fontSize='30px' fill='#00000066' />
                      <input
                        type='text'
                        name='Search_input'
                        value={searchValue}
                        onChange={handleChange}
                        placeholder='Start typing |'
                        className='input_pop border-none w-full font-[Ubuntu] whitespace-nowrap placeholder: font-[400] text-[#000000cc] text-[14px]'
                      />
                    </div>
                    <div>
                      <button type='submit'>
                        {/* send-butoton */}
                        <Send />
                      </button>
                    </div>
                  </div>
                </form>
                {/* recent-searches-action-btns */}
                <div className='flex justify-between items-center'>
                  <Header title='Recent Searches' />
                  {/* danger-clear-btn */}
                  <button className='text-[#FF0000] text-[12px]'>
                    Clear all
                  </button>
                </div>

                {/* search suggestions-from-api */}
                <div className='flex flex-col gap-y-3'>
                  {mockSuggestions.map((ct) => {
                    return (
                      <div
                        className='flex justify-between items-center'
                        key={ct.id}
                      >
                        <Description cl='#000000' title={ct.searched} />
                        <button>
                          <LiaTimesSolid fontSize='15px' />
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : null}
          </Stack>

          {/* call-to-action-areas */}
          <Stack direction='column' gap={3} mt={2}>
            {/* trnending-section */}
            {/* <Box bgcolor="#ffff" pt={2} pb={2} pr={2} pl={2} className="box_trend">
        <Header title="Trending and Hot" sx={{ textAlign: "left" }} />
        <Box pt={1} className="grid_commerce">
          <Template content={trendSales} />
        </Box>
      </Box>
      {/* adds-section */}
            {/* <Box
        sx={{
          paddingInline: { sm: "10px", xs: "10px", lg: "0px", xl: "0px" },
        }}
      >
        <img
          src={Adds}
          alt="adds-section"
          className="img_ads"
          style={{ width: "100%" }}
        />
      </Box>
       */}
            {/* automobile-section */}
            {Automobiledatas.length >= 1 && (
              <Box
                bgcolor='#ffff'
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                className='box_trend'
              >
                <Stacked d='row' jc='space-between' ai='center'>
                  <Header title='Automobile' />
                  <Link
                    to=''
                    style={{
                      color: '#4F0DA3',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    View more&gt;&gt;
                  </Link>
                </Stacked>
                {Automobiledatas.length < 1 ? (
                  <h3 className='text-center'>No Content here!</h3>
                ) : (
                  <Box pt={1} className='grid_commerce'>
                    {/* <Template content={Automobiledatas} /> */}
                    <Template content={Store} />
                  </Box>
                )}
              </Box>
            )}
            {/* Suggested-business-stick- */}
            {/* <Box bgcolor="#ffff" p={2}>
              <Header
                title="Suggested Business"
                sx={{
                  textAlign: "left",
                  paddingTop: ".2rem",
                  paddingBottom: ".9rem",
                }}
              />
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="space-between"
                sx={{ rowGap: "1px" }}
              >
                {sugBusiess.map((business) => {
                  return <Suggested list={business} key={business.id} />;
                })}
              </Stack>
            </Box> */}
            {/* kids-and toys */}
            {/* {KidsToys.length >= 1 && ( */}
            {Kids?.length >= 1 && (
              <Box
                bgcolor='#ffff'
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                className='box_trend'
              >
                <Stacked d='row' jc='space-between' ai='center'>
                  <Header title='Kids and Toys' />
                  <Link
                    to=''
                    style={{
                      color: '#4F0DA3',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    View more&gt;&gt;
                  </Link>
                </Stacked>
                <Box pt={1} className=''>
                  {/* {KidsToys.length < 1 ? ( */}
                  {Kids?.length < 1 ? (
                    <h3 className='text-center'>No Content here!</h3>
                  ) : (
                    <Box pt={1} className='grid_commerce'>
                      {/* <Template content={KidsToys} /> */}
                      <Template content={Kids} />
                    </Box>
                  )}
                </Box>
              </Box>
            )}
            {/* Furniture-and-Decorations */}

            {/* {Furnitures.length >= 1 && ( */}
            {Furniture.length >= 1 && (
              <Box
                bgcolor='#ffff'
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                className='box_trend'
              >
                <Stacked d='row' jc='space-between' ai='center'>
                  <Header title='Furniture and Decoration' />
                  <Link
                    to=''
                    style={{
                      color: '#4F0DA3',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    View more&gt;&gt;
                  </Link>
                </Stacked>
                {/* {Furnitures.length < 1 ? ( */}
                {Furniture?.length < 1 ? (
                  <h3 className='text-center'>No Content here!</h3>
                ) : (
                  <Box pt={1} className='grid_commerce'>
                    {/* <Template content={Furnitures} /> */}
                    <Template content={Furniture} />
                  </Box>
                )}
              </Box>
            )}
            {/*Clothings*/}

            {Clothings.length >= 1 && (
              <Box
                bgcolor='#ffff'
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                className='box_trend'
              >
                <Stacked d='row' jc='space-between' ai='center'>
                  <Header title='Clothings' />
                  <Link
                    to=''
                    style={{
                      color: '#4F0DA3',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    View more&gt;&gt;
                  </Link>
                </Stacked>
                {Clothings.length < 1 ? (
                  <h3 className='text-center'>No Content here!</h3>
                ) : (
                  <Box pt={1} className='grid_commerce'>
                    <Template content={Clothings} />
                  </Box>
                )}
              </Box>
            )}

            {/* Phones */}
            {Phones.length >= 1 && (
              <Box
                bgcolor='#ffff'
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                className='box_trend'
              >
                <Stacked d='row' jc='space-between' ai='center'>
                  <Header title='Clothings' />
                  <Link
                    to=''
                    style={{
                      color: '#4F0DA3',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    View more&gt;&gt;
                  </Link>
                </Stacked>
                {Phones.length < 1 ? (
                  <h3 className='text-center'>No Content here!</h3>
                ) : (
                  <Box pt={1} className='grid_commerce'>
                    <Template content={Phones} />
                  </Box>
                )}
              </Box>
            )}
            {/* Homes */}
            {Homes.length >= 1 && (
              <Box
                bgcolor='#ffff'
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                className='box_trend'
              >
                <Stacked d='row' jc='space-between' ai='center'>
                  <Header title='Clothings' />
                  <Link
                    to=''
                    style={{
                      color: '#4F0DA3',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    View more&gt;&gt;
                  </Link>
                </Stacked>
                {Homes.length < 1 ? (
                  <h3 className='text-center'>No Content here!</h3>
                ) : (
                  <Box pt={1} className='grid_commerce'>
                    <Template content={Homes} />
                  </Box>
                )}
              </Box>
            )}

            {/* Electronics */}
            {Electronics.length >= 1 && (
              <Box
                bgcolor='#ffff'
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                className='box_trend'
              >
                <Stacked d='row' jc='space-between' ai='center'>
                  <Header title='Clothings' />
                  <Link
                    to=''
                    style={{
                      color: '#4F0DA3',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    View more&gt;&gt;
                  </Link>
                </Stacked>
                {Electronics.length < 1 ? (
                  <h3 className='text-center'>No Content here!</h3>
                ) : (
                  <Box pt={1} className='grid_commerce'>
                    <Template content={Electronics} />
                  </Box>
                )}
              </Box>
            )}

            {/* Food */}
            {Food.length >= 1 && (
              <Box
                bgcolor='#ffff'
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                className='box_trend'
              >
                <Stacked d='row' jc='space-between' ai='center'>
                  <Header title='Clothings' />
                  <Link
                    to=''
                    style={{
                      color: '#4F0DA3',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    View more&gt;&gt;
                  </Link>
                </Stacked>
                {Food.length < 1 ? (
                  <h3 className='text-center'>No Content here!</h3>
                ) : (
                  <Box pt={1} className='grid_commerce'>
                    <Template content={Food} />
                  </Box>
                )}
              </Box>
            )}
            {/* Recreation */}
            {Recreation.length >= 1 && (
              <Box
                bgcolor='#ffff'
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                className='box_trend'
              >
                <Stacked d='row' jc='space-between' ai='center'>
                  <Header title='Clothings' />
                  <Link
                    to=''
                    style={{
                      color: '#4F0DA3',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    View more&gt;&gt;
                  </Link>
                </Stacked>
                {Recreation.length < 1 ? (
                  <h3 className='text-center'>No Content here!</h3>
                ) : (
                  <Box pt={1} className='grid_commerce'>
                    <Template content={Recreation} />
                  </Box>
                )}
              </Box>
            )}
            {/* Fitness */}
            {Fitness.length >= 1 && (
              <Box
                bgcolor='#ffff'
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                className='box_trend'
              >
                <Stacked d='row' jc='space-between' ai='center'>
                  <Header title='Clothings' />
                  <Link
                    to=''
                    style={{
                      color: '#4F0DA3',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    View more&gt;&gt;
                  </Link>
                </Stacked>
                {Fitness.length < 1 ? (
                  <h3 className='text-center'>No Content here!</h3>
                ) : (
                  <Box pt={1} className='grid_commerce'>
                    <Template content={Fitness} />
                  </Box>
                )}
              </Box>
            )}
            {/* Beauty */}
            {Beauty.length >= 1 && (
              <Box
                bgcolor='#ffff'
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                className='box_trend'
              >
                <Stacked d='row' jc='space-between' ai='center'>
                  <Header title='Clothings' />
                  <Link
                    to=''
                    style={{
                      color: '#4F0DA3',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    View more&gt;&gt;
                  </Link>
                </Stacked>
                {Beauty.length < 1 ? (
                  <h3 className='text-center'>No Content here!</h3>
                ) : (
                  <Box pt={1} className='grid_commerce'>
                    <Template content={Beauty} />
                  </Box>
                )}
              </Box>
            )}
            {/* Others */}
            {Others.length >= 1 && (
              <Box
                bgcolor='#ffff'
                pt={2}
                pb={2}
                pr={2}
                pl={2}
                className='box_trend'
              >
                <Stacked d='row' jc='space-between' ai='center'>
                  <Header title='Clothings' />
                  <Link
                    to=''
                    style={{
                      color: '#4F0DA3',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                  >
                    View more&gt;&gt;
                  </Link>
                </Stacked>
                {Others.length < 1 ? (
                  <h3 className='text-center'>No Content here!</h3>
                ) : (
                  <Box pt={1} className='grid_commerce'>
                    <Template content={Others} />
                  </Box>
                )}
              </Box>
            )}
          </Stack>
        </>
      ) : (
        <>
          <Managestoremobile />
        </>
      )}
      {/* overlay-modals */}
      <CommerceModal />
      <Overlay />
    </Box>
  )
}
export default Body

const Send = () => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 19 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.5875 8.33311L2.08754 0.0831151C1.95821 0.0184402 1.81295 -0.00747368 1.66924 0.00849392C1.52554 0.0244615 1.38951 0.0816297 1.27754 0.173115C1.1706 0.262735 1.09079 0.380405 1.04707 0.512898C1.00334 0.645391 0.997446 0.787454 1.03004 0.923115L3.01754 8.25062H11.5V9.75062H3.01754L1.00004 17.0556C0.969455 17.1689 0.965886 17.2878 0.989614 17.4027C1.01334 17.5176 1.06371 17.6254 1.13665 17.7173C1.2096 17.8092 1.3031 17.8827 1.40964 17.9319C1.51617 17.9811 1.63276 18.0047 1.75004 18.0006C1.86744 17.9999 1.98304 17.9717 2.08754 17.9181L18.5875 9.66811C18.7104 9.60518 18.8135 9.50956 18.8855 9.39178C18.9575 9.27401 18.9956 9.13865 18.9956 9.00062C18.9956 8.86258 18.9575 8.72722 18.8855 8.60945C18.8135 8.49168 18.7104 8.39605 18.5875 8.33311Z'
        fill='#4F0DA3'
      />
    </svg>
  )
}

const mockSuggestions = [
  { id: 1, searched: 'Nike Shoes' },
  { id: 2, searched: 'Laptop ' },
  { id: 3, searched: 'Chair ' },
  { id: 4, searched: 'efootball' },
]
