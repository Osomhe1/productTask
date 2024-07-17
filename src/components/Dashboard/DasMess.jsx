import ShortMessage from '../Commons/ShortMessage'

const DashMessage = () => {
  return (
    <div className='das-mess-container !bg-white' style={{ width: '100%' }}>
      <div className='mess-unread'>
        <div className='mess-headline'>Messages</div>
        <div className='unread-box'>6</div>
      </div>
      <div className='list-people-st'>
        <ShortMessage />
        <ShortMessage />
        <ShortMessage />
        <ShortMessage />
        <ShortMessage />
        {/* <ShortMessage />
        <ShortMessage />
 */}{' '}
      </div>
    </div>
  )
}

export default DashMessage
