import React from 'react';
import { ITodo } from 'utils/types';

interface IModalState {
  open: (content?: ITodo) => void;
}

export const ModalContext = React.createContext<IModalState | undefined>(undefined);
