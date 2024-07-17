const MusicDash = ({ title, author }) => {
  return (
    <div className='music-das-container'>
      <img src='images/over.png' alt='' className='sud' />
      <div className='mus-img'>
        <img src='images/p1.png' alt='' />
      </div>
      <div className='mus-title'>{title}</div>
      <div className='mus-autor'>{author}</div>
    </div>
  )
}

export default MusicDash
