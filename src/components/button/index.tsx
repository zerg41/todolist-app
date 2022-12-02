import React, { FC, HTMLProps } from 'react';
//styles
import './styles.css';

type ButtonProps = {
  className?: string;
  variation?: 'primary' | 'close' | 'edit' | 'delete' | 'danger';
  onClick?: (event: React.MouseEvent<HTMLElement>, [...props]?: any[]) => void;
} & HTMLProps<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
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
      {children}
    </button>
  );
};
