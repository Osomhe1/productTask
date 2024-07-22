import { Fragment } from 'react'
import Description from 'components/newCommerce/typography/txtDescription'
import { ButtonSide } from 'components/newCommerce/shared/sideButton'
import Stacked from 'components/newCommerce/shared/Stacked'
import Successpic from 'assets/images/successproduct.png'
export default function SuccessModal({ newpost }) {
  return (
    <Fragment>
      <Stacked d='column' g={3} jc={'center'}>
        {/* Stacked-buttons */}
        <div className='self-center'>
          <img
            src={Successpic}
            alt='posted-successful'
            className='w-[125px] h-[163px] object-cover'
          />
        </div>
        <Description
          title='Product posted successfully! 🎉 Start connecting with buyers now.'
          fs={'1.35rem'}
          cl={'black'}
          align={'center'}
          sx={{ maxWidth: '35ch' }}
        />

        <Stacked d='column' g={2} ai='center' jc={'center'} cname={'w-full'}>
          {/* outlet-view */}
          <ButtonSide
            title='View in outlet'
            bg='#4F0DA3'
            cl='#ffff'
            jc={'center'}
            styles={{
              width: '100%',
              paddingBlock: '.9rem',
              fontSize: '1.3rem',
              fontWeight: '400',
            }}
            br='10px'
            // click={publishItem}
          />
          {/* upload-another-product */}
          <ButtonSide
            title='Upload another product'
            bg='#4F0DA3'
            cl='#ffff'
            jc={'center'}
            styles={{
              width: '100%',
              paddingBlock: '.9rem',
              fontSize: '1.3rem',
              fontWeight: '400',
            }}
            br='10px'
            click={newpost}
          />

          {/* promote-item */}
          {/* <div className="btn_success_commerce w-full">
            <button
              className="w-full flex flex-row gap-4 justify-center items-center text-[1.4rem]
              text-[#4f0da3] rounded-[10px] py-3 "
            >
              <Flash />
              Promote this item
            </button>
          </div> */}
        </Stacked>
      </Stacked>
    </Fragment>
  )
}

// flash-icon
const Flash = () => {
  return (
    <svg
      width='16'
      height='18'
      viewBox='0 0 16 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.2862 0.0769926C12.4236 0.14082 12.53 0.240097 12.5879 0.358606C12.6457 0.477116 12.6518 0.607851 12.6049 0.729455L10.0764 7.31258H14.7417C14.8788 7.31254 15.013 7.34466 15.1275 7.40499C15.2421 7.46533 15.3321 7.55122 15.3865 7.65208C15.4408 7.75293 15.4571 7.86433 15.4334 7.97253C15.4096 8.08072 15.3468 8.18097 15.2528 8.2609L4.02119 17.8229C3.91251 17.9155 3.7679 17.9758 3.61092 17.9941C3.45394 18.0124 3.29385 17.9876 3.15674 17.9237C3.01963 17.8597 2.91359 17.7605 2.8559 17.6421C2.79821 17.5237 2.79228 17.3931 2.83906 17.2716L5.36758 10.6874H0.702255C0.565152 10.6874 0.431034 10.6553 0.316458 10.595C0.201881 10.5346 0.111862 10.4487 0.0575121 10.3479C0.00316251 10.247 -0.0131381 10.1356 0.0106225 10.0274C0.0343831 9.91925 0.0971645 9.819 0.191217 9.73907L11.4228 0.177112C11.5314 0.0846412 11.6757 0.0243103 11.8325 0.00592874C11.9893 -0.0124528 12.1492 0.0121961 12.2862 0.0758676V0.0769926Z'
        fill='url(#paint0_linear_1659_28597)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1659_28597'
          x1='7.722'
          y1='0'
          x2='7.722'
          y2='18'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FFA800' />
          <stop offset='1' stop-color='#FF0000' />
        </linearGradient>
      </defs>
    </svg>
  )
}
