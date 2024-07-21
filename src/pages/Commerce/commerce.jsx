import React from 'react'
import './main.css'
import Body from 'components/newCommerce/layout/body'
import Container from 'components/newCommerce/layout/container'
const Commerce = () => {
  return (
    <div className='!bg-red-500'>
      <Container main={<Body />} />
    </div>
  )
}

export default Commerce
//main Commerce page for production
//replaced by previous commerce page
