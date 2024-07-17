import { useNavigate } from 'react-router-dom'

const CategoryCard = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/commerce')
  }
  return (
    <div className='cat-card-container' onClick={goBack}>
      <div className='img-cont-box'>
        <img src='images/c1.png' alt='' />
      </div>
      <div className='cat-text'>Phones & Devices</div>
    </div>
  )
}

export default CategoryCard
