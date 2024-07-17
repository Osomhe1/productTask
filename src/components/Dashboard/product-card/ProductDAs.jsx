import { FaStar } from 'react-icons/fa'
import ProductImage from 'assets/images/sample-product.png'
import './product-dash.css'
import { useFetchProduct } from 'api/services/feeds'

const ProductDash = () => {
  const { data: getProducts } = useFetchProduct()

  return (
    <>
      {getProducts?.map((item) => (
        <div key={item?.post} className='product-card-container'>
          <div className='product-image-wrapper'>
            <img src={item?.product_image} alt='product_image' />
          </div>
          <div className='product-details'>
            <h3>{item?.product_name}</h3>
            {/* <div className='rating-wrapper'>
              <FaStar className='rating-star' />
              <span>4.5</span>
              <div className='rating-circle'></div> <p>180+ Reviews</p>
            </div> */}
            <h5>₦{item?.product_price}</h5>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProductDash
