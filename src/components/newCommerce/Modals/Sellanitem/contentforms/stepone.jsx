import {
  Box,
  FormControl,
  TextField,
  MenuItem,
  Select,
  InputAdornment,
} from '@mui/material'
import styled from '@emotion/styled'
import { ButtonSide } from 'components/newCommerce/shared/sideButton'
import Header from 'components/newCommerce/typography/txtHeader'
import { useState, useEffect } from 'react'
import Stacked from 'components/newCommerce/shared/Stacked'
import Hint from 'components/newCommerce/shared/hintComp'
import Progress from 'components/newCommerce/shared/useProgress'
import { BiDollar, BiEuro, BiPound } from 'react-icons/bi'
import { FaNairaSign } from 'react-icons/fa6'
import { useFetchCategories } from 'api/commerce/Apiactions'
const MenuList = styled(MenuItem)({
  fontFamily: 'Ubuntu',

  '&.MuiButtonBase-root': {
    fontSize: '1.4rem !important',
    opacity: '1 !important',
  },
})
const Textfield = styled(TextField)(({ theme }) => ({
  // Apply styles to the input element
  '& .MuiInputBase-input': {
    color: 'black',
    fontSize: '1.5rem',
    fontWeight: '500',
    fontFamily: 'Ubuntu !important',
  },

  // Apply styles to the placeholder
  '& .MuiInputBase-input::placeholder': {
    color: 'black',
    opacity: '1',
    fontSize: '1.4rem',
    fontFamily: 'Ubuntu !important',
  },
}))

const SteponeForm = ({ click, datas }) => {
  const [val, setVal] = useState({
    category: '',
    item_details: '',
    item_desc: '',
    item_location: '',
    item_price: '',
  })
  // disable-continue-ifinputs are empty
  const [disable, setDisable] = useState(true)
  const { data: categories } = useFetchCategories()
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setVal((values) => ({ ...values, [name]: value }))
  }

  useEffect(() => {
    // store the values into datas
    datas(val)
    // perform a loop operation onthe object to check if fields are empty
    const isallfilled = Object.values(val).every((value) => value.trim() !== '')

    setDisable(!isallfilled)

    // console.log(isallfilled);
  }, [val, datas])

  return (
    <div className='w-full'>
      <div className='flex flex-col w-full gap-3 sell_container'>
        <Header
          title='Sell any items in 3 simple steps'
          styles={{ fontSize: '17px' }}
        />
        <FormControl fullWidth>
          <Select
            className='select_drop'
            variant='outlined'
            onChange={handleChange}
            inputProps={{
              name: 'category',
              id: 'select-category',
            }}
            value={val.category || 'placeholder'}
          >
            <MenuList disabled value='placeholder'>
              Set product category
            </MenuList>
            {categories?.map((category, index) => (
              <MenuList key={index} value={category?.name}>
                {category?.name}
              </MenuList>
            ))}
          </Select>
        </FormControl>
        <Textfield
          variant='outlined'
          required
          name='item_details'
          placeholder='Product details'
          value={val.item_details || ''}
          onChange={handleChange}
        />
        <textarea
          name='item_desc'
          placeholder='Description'
          rows={6}
          cols={10}
          onChange={handleChange}
          value={val.item_desc || ''}
          style={{
            width: '100%',
            resize: 'none',
            paddingBlock: '.4rem',
            border: '1px  solid #d9d9d9',
            borderRadius: '5px',
            paddingInline: '1rem',
          }}
        />
        <Textfield
          variant='outlined'
          required
          name='item_location'
          placeholder='Set sale location'
          value={val.item_location || ''}
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <Textfield
            variant='outlined'
            required
            name='item_price'
            // placeholder="Item price"
            value={val.item_price || ''}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <div className='flex flex-row items-center gap-x-3'>
                    <p
                      className='text-[1.45rem] text-[black] mb-0'
                      style={{ fontWeight: '500' }}
                    >
                      Item Price
                    </p>
                    <div className='select_currency'>
                      <Select
                        onChange={handleChange}
                        inputProps={{
                          name: 'currency',
                          id: 'select-currency',
                        }}
                        value={val.currency || 'Dollars'}
                        sx={{
                          maxHeight: '3.8rem',
                          maxWidth: '4.2rem',
                        }}
                      >
                        <MenuList value='Dollars'>
                          <BiDollar
                            className='menu_currency'
                            fontSize={'20px'}
                            // fill="#ffff"
                          />
                        </MenuList>
                        <MenuList value='Naira'>
                          <FaNairaSign
                            className='menu_currency'
                            fontSize={'16px'}
                            // fill="#ffff"
                          />
                        </MenuList>
                        <MenuList value='Euro'>
                          <BiEuro
                            className='menu_currency'
                            fontSize={'20px'}
                            // fill="#ffff"
                          />
                        </MenuList>
                      </Select>
                    </div>
                  </div>
                </InputAdornment>
              ),
            }}
            onChange={handleChange}
          />
        </FormControl>
      </div>
      <Stacked pt={5} mt={1} d='column' g={2}>
        <Hint title='Read our pricing guidelines' />
        <Hint title='How to sell faster' />
      </Stacked>
      <Stacked jc='center' d='column' g={3} ai='center'>
        <ButtonSide
          title='Continue'
          bg='#4F0DA3'
          cl='#ffff'
          isDisabled={disable}
          styles={{
            paddingInline: '10rem',
            marginTop: '5rem',
            paddingBlock: '.9rem',
            fontSize: '1.4rem',
          }}
          br='5px'
          click={click}
        />

        <Progress w={'33%'} />
      </Stacked>
      <Box pt={10} sx={{ backgroundColor: '#ffff' }}></Box>
    </div>
  )
}

export default SteponeForm
