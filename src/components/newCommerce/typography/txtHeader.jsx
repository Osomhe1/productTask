import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const Header = ({ title, sx, fs, fw, cl, cname, align }) => {
  return (
    <>
      <Typography
        variant='body1'
        sx={{
          fontFamily: 'Ubuntu',
          fontSize: fs || '1.5rem',
          fontWeight: fw || 500,
          color: cl,
          ...sx,
          textAlign: align || 'inherit',
        }}
        className={`${cname} text-black`}
      >
        {title}
      </Typography>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string || PropTypes.number,
}

export default Header
