import Minimal_chair from '../../../assets/images/Minimal_chair.png'
import Avatar from '../../../assets/images/avatar.png'
import infolg from '../../../assets/images/bg_car.png'
import infosm1 from '../../../assets/images/infosm1.png'
import infosm2 from '../../../assets/images/infosm2.png'
import infosm3 from '../../../assets/images/infosm3.png'
import infosm4 from '../../../assets/images/infosm4.png'
import infosm5 from '../../../assets/images/infosm5.png'

const Store = [
  {
    id: 1,
    product_img: `https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D`,
    product_name: 'Minimal chair',
    product_price: `$239`,
    product_rating: '4.5',
    sold: true,
  },
  {
    id: 2,
    product_img: `https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D`,
    product_name: 'Minimal chair',
    product_price: `$239`,
    product_rating: '4.5',
    sold: false,
  },
  {
    id: 3,
    product_img: `https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D`,
    product_name: 'Minimal chair',
    product_price: `$239`,
    product_rating: '4.5',
    sold: true,
  },
  {
    id: 4,
    product_img: Minimal_chair,
    product_name: 'Minimal chair',
    product_price: `$239`,
    product_rating: '4.5',
  },
  {
    id: 5,
    product_img: Minimal_chair,
    product_name: 'Minimal chair',
    product_price: `$239`,
    product_rating: '4.5',
    sold: false,
  },
]
const storeDetails = [
  {
    id: 1,
    product_name: 'Toyota Camry',
    product_category: 'Furniture',
    product_location: 'Lagos NG',
    product_price: 'N2,000,000',
    product_seller: 'Omo Baba',
    product_seller_avatar: Avatar,
    product_description:
      'Newly used Toyota venza | V6 engine | Full optionCustom duty and Fully registered. Average speed 245km/sec, Auto and Manual transmission for Sport mode. Newly used Toyota venza | V6 engine | Full optionCustom duty and Fully registered. Average speed 245km/sec, Auto and Manual transmission for Sport mode.',
    product_ratings: '15',
    product_img_large: infolg,
    product_img_small: [infosm1, infosm2, infosm3, infosm4, infosm5],
    // product_img_large: [infolg, infolg2, infolg3, infolg4, infolg5],
    // product_img_small_one: infosm1,
    // product_img_small_two: infosm2,
    // product_img_small_three: infosm3,
    // product_img_small_four: infosm4,
    // product_img_small_last: infosm5,
    product_reviews_poll: ['60%', '50%', '40%', '30%', '20%'],
    similar_items: [
      {
        id: 1,
        item_similar: 'Minimal Chair',
        similar_img: Minimal_chair,
        similar_price: `$239`,
        similar_rating: '4.5',
      },
      {
        id: 2,
        item_similar: 'Minimal Chair',
        similar_img: Minimal_chair,
        similar_price: `$239`,
        similar_rating: '4.5',
      },
    ],
  },
  {
    id: 2,
    product_name: 'Minimal chair',
    product_category: 'Furniture',
    product_location: 'Lagos NG',
    product_price: 'N2,000,000',
    product_seller: 'Omo Baba',
    product_seller_avatar: Avatar,
    product_description:
      'Newly used Toyota venza | V6 engine | Full optionCustom duty and Fully registered. Average speed 245km/sec, Auto and Manual transmission for Sport mode. Newly used Toyota venza | V6 engine | Full optionCustom duty and Fully registered. Average speed 245km/sec, Auto and Manual transmission for Sport mode.',
    product_ratings: '15',
    product_img_large: infolg,
    product_img_small: [infosm1, infosm2, infosm3, infosm4, infosm5],
    // product_img_large: [infolg, infolg2, infolg3, infolg4, infolg5],
    // product_img_small_one: infosm1,
    // product_img_small_two: infosm2,
    // product_img_small_three: infosm3,
    // product_img_small_four: infosm4,
    // product_img_small_last: infosm5,
    product_reviews_poll: ['60%', '50%', '40%', '30%', '20%'],
    similar_items: [
      {
        id: 1,
        item_similar: 'Minimal Chair',
        similar_img: Minimal_chair,
        similar_price: `$239`,
        similar_rating: '4.5',
      },
      {
        id: 2,
        item_similar: 'Minimal Chair',
        similar_img: Minimal_chair,
        similar_price: `$239`,
        similar_rating: '4.5',
      },
    ],
  },
]

export { Store, storeDetails }
