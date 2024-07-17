import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { Register } from 'api/services/auth&poll'
import ActionButton from '../Commons/Button'
import InputField from '../Commons/InputField'

const SignForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [allFieldsFilled, setAllFieldsFilled] = useState(false)

  const navigate = useNavigate()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
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

  const signupUser = async (event) => {
    event.preventDefault()

    if (!allFieldsFilled) {
      return
    }

    setIsLoading(true)

    const userData = {
      username: username,
      email: email,
      password: password,
    }

    try {
      const response = await Register(userData)

      localStorage?.setItem(
        'registrationData',
        JSON.stringify(response.data.data)
      )

      if (response.status === 201) {
        const token = response?.data?.data?.token

        localStorage?.setItem('authTOken', token)

        navigate('/verify')
      }
    } catch (error) {
      console.log(error)
      if (error.response && error.response.status === 400) {
        if (error.response.data.data.email) {
          toast.error(error.response.data.data.email[0])
        } else if (error.response.data.data.username) {
          toast.error(error.response.data.data.username[0])
        } else {
          toast.error('Something went wrong!')
        }
      } else if (error.response && error.response.status === 500) {
        toast.error('Something went wrong!')
      } else {
        toast.error(
          error.message ||
            error.response?.data?.data.message ||
            'Something went wrong!'
        )
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (email.trim() && username.trim() && password.trim()) {
      setAllFieldsFilled(true)
    } else {
      setAllFieldsFilled(false)
    }
  }, [email, username, password])

  // const isPasswordValid = () => {
  //   const regex =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   return regex.test(password);
  // };

  return (
    <div className='sign-form'>
      <div className='create-ead-txt text-red-500'>Create an Account</div>
      <div className='greet-txt'>
        Welcome to 2geda! <br /> To continue, please provide your details
      </div>

      <form action='' onSubmit={signupUser}>
        <div className='inp-email'>
          <InputField
            placeholder={'Input email address'}
            type={'text'}
            value={email}
            onChange={handleEmailChange}
          />
          <div className='ins-bx-txt'>
            We’ll verify the email provided to be sure it belongs to you
          </div>
        </div>

        <InputField
          placeholder={'Username'}
          type={'text'}
          name='username'
          value={username}
          onChange={handleUsernameChange}
        />
        <div className='pass-con'>
          <InputField
            placeholder={'Create Password'}
            type={passwordVisible ? 'text' : 'password'}
            name='password'
            value={password}
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
        {/* {password && !isPasswordValid() && (
          <div className="error-msg text-[12px] text-red-500">
            Password must contain at least 8 characters, one uppercase letter,
            one lowercase letter, one number, and one special character.
          </div>
        )} */}
        <div className='btn-continu'>
          {isLoading ? (
            <Lottie
              style={{
                width: '300px',
                height: '100px',
              }}
            />
          ) : (
            <ActionButton
              // disabled={!isPasswordValid()}
              onClick={signupUser}
              label={'Continue'}
              bg={'pruplr'}
              type={'submit'}
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
            to='/Signin'
            className='alr-ave'
            style={{ color: '#4f0da3' }}
          >
            Already have an account? &nbsp;
            <span style={{ fontSize: '14px' }}>Sign In</span>
          </NavLink>
        </div>
      </form>
    </div>
  )
}

export default SignForm
