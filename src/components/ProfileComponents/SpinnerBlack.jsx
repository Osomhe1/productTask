import { ClipLoader } from 'react-spinners';

const SpinnerBlack = ({ color = 'white' }) => {
  return <ClipLoader color={color} size={20} />;
};

export default SpinnerBlack;
