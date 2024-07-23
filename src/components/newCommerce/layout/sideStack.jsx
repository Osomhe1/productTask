import { Box, Typography, Button } from '@mui/material'
import Stacked from '../shared/Stacked'
import { ButtonSide } from '../shared/sideButton'
import Categorynav from '../shared/category'
import Header from '../typography/txtHeader'
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// import Business from "../../../assets/images/Bus-img.png";
import { ModalContext } from 'Context/ModalContext'

const StackSide = () => {
  // const topBus = new Array(7).fill(null);
  const location = useLocation()
  const [content, setContent] = useState('Manage Store')
  const [comp, setComp] = useState(Link)
  const [disable, setDisable] = useState(false)
  // console.log(location.pathname);
  const isAdmin = localStorage.getItem('isAdmin')
  console.log(isAdmin)

  const { isOpen, setModalContent, openModal, storeContext } =
    useContext(ModalContext)
  useEffect(() => {
    if (
      location.pathname === '/commerce/managestore/' ||
      location.pathname === '/commerce/managestore'
    ) {
      setContent('Sell an Item')
      setComp(Button)
      setDisable(storeContext.length < 1)
    }
  }, [location, storeContext])

  const SellItem = (payload) => {
    if (content === 'Sell an Item' && comp === Button) {
      // alert(payload);
      setModalContent(payload)
      !isOpen && openModal()
    } else {
      return
    }
  }

  return (
    <>
      <Stacked d='column' g='1rem'>
        {/* Category-and -sell-items */}
        <Stacked
          bg='#ffff'
          d='column'
          g='20px'
          styles={{
            paddingRight: '1em',
            paddingLeft: '1em',
          }}
        >
          {isAdmin && (
            <ButtonSide
              cp={comp}
              title={content}
              bg='#FF8A15'
              w='100%'
              route='/commerce/managestore'
              click={() => SellItem('sellitem')}
              isDisabled={disable}
            />
          )}

          <ButtonSide
            title='View Cart'
            bg='#F5F5F5'
            cl='#000000'
            cp={Link}
            w='100%'
            route='/commerce/cart'
          />

          {/* Category */}

          <Box
            pt={4}
            pb={4}
            pl={1}
            pr={1}
            sx={{
              background: 'linear-gradient(180deg, #B469EF 0%, #4F0DA3 100%)',
              borderRadius: '10px',
              width: '100%',
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontSize: '14px',
                fontFamily: 'Ubuntu',
              }}
            >
              Select Category
            </Typography>
            <Stacked
              d='row'
              ai='center'
              jc='center'
              pt={2}
              fw='wrap'
              styles={{
                rowGap: '2px',
                columnGap: '12px',
              }}
            >
              <Categorynav />
            </Stacked>
          </Box>
        </Stacked>
        {/* id-display-mock */}
        <Box bgcolor='#f5f5f5' p='10px'></Box>
        {/* Top-business */}
        {/* <Box bgcolor="#ffff" pt={1} pb={1}>
          <Header title="Top Business" sx={{ textAlign: "center" }} />
          <Stacked
            d="row"
            fw="wrap"
            jc="center"
            g="5px"
            pt={1}
            styles={{ paddingInline: "1rem" }}
          >
            {topBus.map((bus, indx) => {
              return (
                <Link to="" key={indx}>
                  <img src={Business} alt="businesses" />
                </Link>
              );
            })}
          </Stacked>
        </Box> */}
      </Stacked>
    </>
  )
}

export default StackSide
