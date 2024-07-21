import { useEffect, useState } from 'react'
import ActionButton from '../Commons/Button'
import toast from 'react-hot-toast'
import { ReSendOTP, VerifyOTP } from 'api/services/auth&poll'
import { Link, useNavigate } from 'react-router-dom'
import Spin from 'components/Spin/Spin'

const VerifyForm = () => {
  const [loading, setLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [inputValues, setInputValues] = useState({
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
    inputValue4: '',
    inputValue5: '',
  })
  const navigate = useNavigate()
  const [inputRefs] = useState([null, null, null, null, null])
  const registrationData = JSON.parse(localStorage?.getItem('registrationData'))
  const userData = JSON.parse(localStorage?.getItem('2gedaUserInfo'))

  const registrationEmail = registrationData?.email

  const HandleSendOTP = async () => {
    try {
      setLoading(true)
      const response = await ReSendOTP('account_verification')
      if (response.status === 200) {
        toast.success(response.data.message)
      }
    } catch (error) {
      console.log('otp', error)
      toast.error(
        error.response.data.message ||
          error.response.data.error ||
          'Something went wrong!'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e, inputNumber) => {
    const value = e.target.value
    if (value.length <= 1) {
      setInputValues((prevState) => ({
        ...prevState,
        [`inputValue${inputNumber}`]: value,
      }))

      if (value.length === 1 && inputNumber < 5) {
        inputRefs[inputNumber].focus()
      }
    }
  }

  const allInputsComplete = Object.values(inputValues).every(
    (value) => value !== ''
  )

  const otp_code = { otp_code: Object.values(inputValues).join('') }

  const verifyData = {
    email: registrationEmail,
    otp: otp_code.otp_code,
  }

  const HandleVerify = async () => {
    try {
      setIsLoading(true)

      const response = await VerifyOTP(verifyData)

      if (response.status === 200) {
        toast.success(response.data.message || 'Verification Successful!')
        setTimeout(() => {
          navigate('/Signin', { replace: true })
        }, 2000)
      }
    } catch (error) {
      toast.error(
        error.response.data.message ||
          error.response.data.error ||
          'Something went wrong!'
      )
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (allInputsComplete) {
      HandleVerify()
    }
  }, [allInputsComplete])

  useEffect(() => {
    if (inputRefs[0]) {
      inputRefs[0].focus()
    }
  }, [inputRefs])

  return (
    <>
      <div className='verify-form-container'>
        {userData?.is_verified ? (
          <Link
            to='/'
            className='text-[16px] lg:text-[18px] mb-5 lg:mb-10 text-[#4F0DA3]'
          >
            Back to Home
          </Link>
        ) : (
          <Link
            to='/Signin'
            className='text-[16px] lg:text-[18px] mb-5 lg:mb-10 text-[#4F0DA3]'
          >
            Back to Home
          </Link>
        )}

        <div className='be-condo'>Please verify your email</div>

        <div className='ins-tst-dig text-center'>
          We sent a 5 digits code to your email address
          <br />
          {registrationEmail}
        </div>

        <form action=''>
          <div className='verify-inputs'>
            {[1, 2, 3, 4, 5].map((inputNumber) => (
              <input
                key={inputNumber}
                type='number'
                value={inputValues[`inputValue${inputNumber}`]}
                onChange={(e) => handleInputChange(e, inputNumber)}
                className={`ver-inp ${
                  inputValues[`inputValue${inputNumber}`].length === 1
                    ? 'input-background-fill'
                    : ''
                }`}
                ref={(input) => (inputRefs[inputNumber - 1] = input)}
              />
            ))}
          </div>

          <div className='counter-resend'>
            <div className='resend'>
              <div>
                Didn’t get code ?{' '}
                <button
                  className={`act-resend `}
                  onClick={HandleSendOTP}
                  disabled={loading}
                >
                  {loading ? 'Resending...' : 'Resend'}
                </button>
              </div>
            </div>
          </div>
          <div className='veri-bttn-bx'>
            <ActionButton
              label={'Verify'}
              loading={isLoading}
              bg={allInputsComplete ? 'complete-button ver-uncop' : 'ver-uncop'}
              type={allInputsComplete ? 'submit' : 'button'}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default VerifyForm
