import { createContext, useState } from 'react'
import toast from 'react-hot-toast'

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
  // --------------------COMMERCE-START----------------------
  // for-modalpopup-review-sections
  const [isOpen, setOpen] = useState(false)
  //currently active if checking reviews or create/add A review
  const [currentCheck, setCurrentcheck] = useState('readReview')
  const [contentType, setcontentType] = useState('')

  // cart-page-current-modal-popup
  const [cartContent, setCartcontent] = useState('')

  // mobile-switchproductsand-store-toggle
  const [topProduct, Setstore] = useState('topProducts')

  const switchStore = (payload) => {
    Setstore(payload)
  }
  const [storeContext, setStorecontext] = useState([])

  // state-to-setandchange-thecart-object that is clicked -through-id and fetch the items data and buyers data

  const [cartParam, setCartparams] = useState(0)
  const [isCreated, setisCreated] = useState(false)
  // isStoreedit?
  const [storeEdit, isStoredit] = useState({
    edit: false,
    id: null,
    prevdata: null,
  })

  // isProductedit?

  const [productEdit, isProductedit] = useState({
    edit: false,
    id: null,
    prevdata: null,
  })
  // fuction-tochange-the state-changes-and-renderings
  //of which cart tem is clicked
  //of which cart tem is clicked
  const fetchCartid = (paramsid) => {
    setCartparams(paramsid)
  }

  // state-to-setandchange-theitem-object that is clicked -through-id and fetch the items data and buyers data

  const [itemParam, setItemparam] = useState([])

  // fuction-tochange-the state-changes-and-renderings
  //of which  tem is clicked to buy
  const fetchItemid = (itemid) => {
    setItemparam([itemid])
  }

  // function-to-setcartcontent-basedoncurrent buy action
  const nextCartPopup = (payload) => {
    setCartcontent(payload)
  }

  //fuction-to-set-isopen-to-false(open modal)
  const openModal = () => {
    setOpen(true)
  }

  // //function-to-close-modal(close modal)-false
  const closeModal = () => {
    setOpen(false)
  }

  //if after checking decides to add then render-the layout-for-add -review
  const movetoAdd = () => {
    setCurrentcheck('addReview')
  }

  // /arrow-back-to-review
  const movetoReview = () => {
    setCurrentcheck('readReview')
  }

  //setmodalcontent
  const setModalContent = (content) => {
    setcontentType(content)
  }

  const setcontentstore = (payload) => {
    setStorecontext(payload)
  }

  // -----------------COMMERCE END---------------

  // ----------------- AUTH & POLL & CONNECT START---------------
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  )
  const [modal, setModal] = useState({})
  const [loading, setLoading] = useState(true)

  const [singlePoll, setSinglePoll] = useState(null)
  const [polls, setPolls] = useState([])
  const [activePolls, setActivePolls] = useState([])
  const [endedPolls, setEndedPolls] = useState([])
  const [showAction, setShowAction] = useState(false)
  const [isPageLoading, setIsPageLoading] = useState(true)

  const [userDistance, setUserDistance] = useState(null)

  const isCloseTimeReached = (closeTime) => {
    const closeDate = new Date(closeTime)
    const currentDate = new Date()
    return currentDate.getTime() >= closeDate.getTime()
  }

  // -----------------AUTH & POLL & CONNECT END---------------

  return (
    <ModalContext.Provider
      value={{
        setModal,
        modal,
        setSinglePoll,
        singlePoll,
        polls,
        setPolls,
        activePolls,
        setActivePolls,
        endedPolls,
        setEndedPolls,
        showAction,
        setShowAction,
        loading,
        isAuthenticated,
        setIsAuthenticated,
        isPageLoading,
        isCloseTimeReached,
        isOpen,
        openModal,
        closeModal,
        currentCheck,
        movetoAdd,
        movetoReview,
        contentType,
        setModalContent,
        cartContent,
        nextCartPopup,
        cartParam,
        fetchCartid,
        topProduct,
        switchStore,
        itemParam,
        fetchItemid,
        storeContext,
        setcontentstore,
        storeEdit,
        isStoredit,
        productEdit,
        isProductedit,
        isCreated,
        setisCreated,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
