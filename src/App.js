import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useContext, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { ProtectedRoutes } from './routes/ProtectedRoutes'
import MainLayout from 'Layout/MainLayout'
import ProductCategory from 'pages/Commerce/category/index'
import Productinformation from 'pages/Commerce/products/productInfo'
import Cart from 'pages/Commerce/cart'

import { Toaster } from 'react-hot-toast'

/**
 * ---------------------------
 * PROFILE PAGE DEV
 * ---------------------------
 */
import { ModalContext } from 'Context/ModalContext'

import { AppLayout } from 'Layout/AppLayout'

import Commerce from 'pages/Commerce/commerce'
// import SearchPage from "pages/Stereo/Pages/Search"
import OrderHistroy from 'pages/Commerce/orderhistory'
import ManageStore from 'pages/Commerce/Managestore'
import Storeproduct from 'pages/Commerce/Managestore/storeproduct'
import Myorder from 'pages/Commerce/Managestore/myorders'
import SearchProduct from 'pages/Commerce/search'
import Signup from 'pages/Signup'
import Signin from 'pages/Signin'
import ForgotPassword from 'pages/ForgotPassword'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const { isAuthenticated } = useContext(ModalContext)

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated)
  }, [isAuthenticated])
  return (
    <>
      <div className='App'>
        <ScrollToTop />

        <Toaster
          toastOptions={{
            style: {
              maxWidth: '700px',
              padding: '12px 16px',
              fontSize: '17px',
              fontWeight: '400',
            },
            error: {
              style: {
                color: 'red',
              },
            },
            success: {
              style: {
                color: 'green',
              },
            },
          }}
          position='top-center'
          reverseOrder={false}
        />

        <Routes>
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/reset-password' element={<ForgotPassword />} />
          {/* Below are the pages with aside containers */}

          <Route element={<AppLayout />}>
            <Route element={<Navigate replace to='/' />} />

            {/* Commerce-routes */}
            <Route
              // removed-protected-route-for-testing-purpose
              path='/'
              element={<Commerce />}
            />

            {/* route-to-specific-category in commerce page */}
            <Route
              path='/commerce/:category'
              element={<ProtectedRoutes element={<ProductCategory />} />}
            />
            <Route
              // removed-protected-route-for-testing-purpose
              path='/commerce/product/:productName'
              element={<ProtectedRoutes element={<Productinformation />} />}
            />

            <Route
              path='/commerce/cart'
              element={<ProtectedRoutes element={<Cart />} />}
            />

            {/* Search_commerce-page */}
            <Route
              path='/commerce/search/:query'
              element={<ProtectedRoutes element={<SearchProduct />} />}
            />
            {/* OrderHistorycommerce-page */}
            <Route
              path='/commerce/orderhistory'
              element={<ProtectedRoutes element={<OrderHistroy />} />}
            />

            {/* manage_store-commerce-page */}

            <Route
              path='/commerce/managestore'
              element={<ProtectedRoutes element={<ManageStore />} />}
            />
            {/* manage_store-commerce-page */}

            <Route
              path='/commerce/managestore/:product'
              element={<ProtectedRoutes element={<Storeproduct />} />}
            />
            {/* manage-store-my-orders */}

            <Route
              path='/commerce/managestore/myorders'
              element={<ProtectedRoutes element={<Myorder />} />}
            />
          </Route>
        </Routes>
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
