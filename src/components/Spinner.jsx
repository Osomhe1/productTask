import { ClipLoader } from 'react-spinners';

const Spinner = ({ color = '#ffff' }) => {
  return <ClipLoader color={color} size={20} />;
};

export default Spinner;
