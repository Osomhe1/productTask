const ShortMessage = () => {
  return (
    <div className='short-mess-container'>
      <div className='pro-name-cont'>
        <img
          src='https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080'
          alt=''
        />
        <div className='name-txt-sot'>
          <div className='pro-name-tst'>Abraham Adesanya</div>
          <div className='sot-text'>How was your flight Joe, i couldnt </div>
        </div>
      </div>
      <div className='time-unread'>
        <div className='pro-time-tx'>12:00</div>
        <div className='unread-cir'></div>
      </div>
    </div>
  )
}

export default ShortMessage
