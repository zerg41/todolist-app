import React, { FC } from 'react';
//styles
import './styles.css';

type ButtonProps = {
  text?: string;
  variation?: 'primary' | 'close' | 'edit' | 'delete' | 'danger';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>, [...props]?: any[]) => void;
} & React.HTMLProps<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  text,
  className = '',
  variation = 'default',
  onClick,
}) => {
  return (
    <button
      type='button'
      className={`button ${variation ? variation + '-button' : ''} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
