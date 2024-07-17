import { useContext } from 'react';
import { ModalContext } from '../Context/ModalContext';

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error('Context Provider cannot be found here :)');

  return context;
};
