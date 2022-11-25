import React, { FC, PropsWithChildren } from 'react';
//styles
import './styles.css';

type ButtonProps = {
  className?: string;
  type?: 'default' | 'close' | 'edit' | 'delete';
  onClick?: (event: React.MouseEvent<HTMLElement>, [...props]?: any[]) => void;
} & PropsWithChildren;

export const Button: FC<ButtonProps> = ({
  children,
  className = '',
  type = 'default',
  onClick,
}) => {
  return (
    <button
      type='button'
      className={`todo__button ${type !== 'default' ? type + '-button' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
