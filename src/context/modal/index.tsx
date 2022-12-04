import React from 'react';
import { ITodo } from 'utils/types';

interface IModalState {
  isOpen: boolean;
  open: (content?: ITodo) => void;
  close: () => void;
}

let initModalState: IModalState = {
  isOpen: false,
  open: () => {},
  close: () => {},
};

export const ModalContext = React.createContext(initModalState);
