import Lottie from 'lottie-react'
import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import 'react-phone-number-input/style.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Login, UserInfoApi } from 'api/services/auth&poll'
import preloader from './Animation.json'
import ActionButton from '../Commons/Button'
import InputField from '../Commons/InputField'
import { EmailVerify } from '../Modals/EmailVerify'
import Modal from '../Modals/Modal'
import { ModalContext } from 'Context/ModalContext'

const SigninForm = () => {
  const { setIsAuthenticated } = useContext(ModalContext)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [IsEmailVerify, setIsEmailVerify] = useState(false)

  const navigate = useNavigate()

  const goToForgot = () => {
    navigate('/reset-password')
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    const formData = {
      email: email,
      password: password,
    }

    try {
      const response = await Login(formData)

      setIsAuthenticated(true)

      localStorage.setItem('authToken', response.data.data.token)
      localStorage.setItem('accounts', response.data.data.accounts)

      const userInfo = await UserInfoApi(response.data.data.token)

      userInfo.data &&
        localStorage.setItem(
          '2gedaUserInfo',
          JSON.stringify(userInfo?.data.data)
        )

      if (userInfo?.data?.data.user.is_verified) {
        toast.success(userInfo?.data?.message || 'Log In Successful')
        navigate('/Home')
      } else {
        setIsEmailVerify(true)
      }
    } catch (error) {
      console.log(error)
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          error?.response?.data?.detail ||
          'Something went wrong!'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className='sign-form'>
        <div className='create-ead-txt'>Log In to your Account</div>
        <div className='greet-txt'>
          Welcome back! <br /> Enter your details to continue.
        </div>

        <form action='' onSubmit={handleLogin}>
          <div className='inp-email'>
            <InputField
              placeholder={'Email address or username'}
              type={'email'}
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className='pass-con'>
            <InputField
              placeholder={'Enter your password'}
              type={passwordVisible ? 'text' : 'password'}
              onChange={handlePasswordChange}
            />
            <div className='eye-box' onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <BsEyeSlashFill className='eye-icon' />
              ) : (
                <BsEyeFill className='eye-icon' />
              )}
            </div>
          </div>
          <div className='forg-pas-contan' onClick={goToForgot}>
            Forgot password?
          </div>

          <div className='btn-continu'>
            {isLoading ? (
              <Lottie
                animationData={preloader}
                style={{
                  width: '300px',
                  height: '100px',
                }}
              />
            ) : (
              <ActionButton
                label={'Continue'}
                bg={'pruplr'}
                onClick={handleLogin}
                className='bg-[#4f0da3] w-full text-white'
              />
            )}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <NavLink
              to='/Signup'
              className='alr-ave'
              style={{ color: '#4f0da3' }}
            >
              New User? &nbsp;
              <span style={{ fontSize: '14px' }}>Sign Up</span>
            </NavLink>
          </div>
        </form>
      </div>

      {IsEmailVerify && (
        <Modal>
          <EmailVerify setIsEmailVerify={setIsEmailVerify} />
        </Modal>
      )}
    </>
  )
}

export default SigninForm
