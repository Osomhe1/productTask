// This file contains all API activities for commerce page
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const API_URL = `https://fisolak-backend.onrender.com/api`
const UserToken = localStorage.getItem('token')

const commerceBase = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${UserToken}`,
  },
})

// get-current-username
export const User = JSON.parse(localStorage.getItem('fisolak'))?.user.username

// get-username-id
export const UserID = JSON.parse(localStorage.getItem('fisolak'))?.user.id

// getuser_location
export const getUserlocation = JSON.parse(
  localStorage.getItem('fisolak')
)?.created_at

// reuest_to_get_all_products
export const getProduct = async () => {
  const response = await commerceBase.get(`/commerce/products/all`)
  console.log(response, 'products')

  return response
}

// request-to-post-products-to-endpoint
export const Sellitem = async (requestBody) => {
  const response = await axios.post(
    `${API_URL}/commerce/products/`,
    { ...requestBody },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${UserToken}`,
      },
    }
  )

  return response
}

// reuest-to-post-andadd-sub-images-to-item-afterbeing-created

export const Addsubimagestoproduct = async (productid, payloadimages) => {
  const response = await axios.post(
    `${API_URL}/commerce/products/${productid}/sub_images/`,
    { ...payloadimages },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${UserToken}`,
      },
    }
  )

  return response
}

// add-an-item-to-cart
export const Addtocart = async (payloads) => {
  const response = await axios.post(
    `${API_URL}/commerce/cart/`,
    {
      ...payloads,
    },
    {
      headers: {
        Authorization: `Bearer ${UserToken}`,
      },
    }
  )
  return response
}

export const useFetchCategories = () => {
  return useQuery({
    queryKey: ['fetch_categories'],
    queryFn: async () => {
      const res = await commerceBase.get(`/commerce/categories/`)
      return res?.data
    },
  })
}

// deletefrom-cart
export const Deletecart = async (delid) => {
  // const response = await commerceBase.delete(`/commerce/cart/${delid}/`);
  const response = await commerceBase.delete(`/commerce/cart/`)

  return response
}

// get-a-particular-productinformation-by-id
export const getProductInfo = async (productid) => {
  const response = await commerceBase.get(`/commerce/products/${productid}/`)

  return response
}

// request-to-delete-a-product-from-endpoint
// this can only be performed by a user-with-a-store
export const deleteProduct = async (productid) => {
  const response = await commerceBase.delete(`/commerce/products/${productid}/`)

  return response
}
export const deleteStore = async (storeid) => {
  const response = await commerceBase.delete(`/commerce/stores/${storeid}/`)

  return response
}

// find-item-seller-by-the seller id
export const getSellerdetails = async (userid) => {
  const response = await commerceBase.get(`account/profiles/`)
  const { data } = response.data

  if (!Array.isArray(data)) {
    throw new Error('Unexpected response structure')
  }

  let filteredDetails = null

  for (const item of data) {
    const { stickings } = item
    if (Array.isArray(stickings)) {
      filteredDetails = stickings.find((user) => user.id === userid)
      if (filteredDetails) break
    }
  }

  if (!filteredDetails) {
    throw new Error(`User with id ${userid} not found`)
  }

  return filteredDetails
}

// rate-a-product
export const rateProduct = async (payload) => {
  const response = await axios.post(
    `${API_URL}/commerce/ratings/`,
    { ...payload },
    {
      headers: {
        Authorization: `Bearer ${UserToken}`,
      },
    }
  )

  return response
}

// get-product-rating
export const getproductRating = async () => {
  const response = await commerceBase.get(`/commerce/ratings`)

  return response
}

// gel-listof-cart-items
export const getCarts = async () => {
  const response = await commerceBase.get(`/commerce/cart`)
  return response.data
}

// create-store-api
export const createStore = async (payload) => {
  const response = await axios.post(
    `${API_URL}/commerce/stores/`,
    { ...payload },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${UserToken}`,
      },
    }
  )

  return response
}

// get-items-in-store
export const Storeslist = async () => {
  const response = await commerceBase.get(`/commerce/stores`)
  return response
}

// get-products in a store
export const getStoreproducs = async () => {
  const response = await commerceBase.get(`/commerce/products`)
  return response
}

// review-fetch-api-for -a-product
export const getReviewcontent = async (productID) => {
  const response = await commerceBase.get(
    `/commerce/products/${productID}/ratings/`
  )

  return response.data
}

// edit-store-api
export const editStore = async (patchoptions, storeid) => {
  const request = await axios.patch(
    `${API_URL}/commerce/stores/${storeid}/`,
    { ...patchoptions },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${UserToken}`,
      },
    }
  )

  return request
}

// edit-product
export const editProduct = async (patchdata, pid) => {
  const request = await axios.patch(
    `${API_URL}/commerce/products/${pid}/`,
    { ...patchdata },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${UserToken}`,
      },
    }
  )

  return request
}

// mark-as-sold
export const markasSold = async (pid) => {
  const response = await axios.post(
    `${API_URL}/commerce/products/${pid}/mark-as-sold/`,
    null,
    {
      headers: {
        Authorization: `Bearer ${UserToken}`,
      },
    }
  )
  return response
}
