import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  label: string;
  buttonType: 'primary' | 'secondary' | 'black';
}

export const Button = ({ label, buttonType = 'secondary' }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[`${buttonType}`]}`}>
      {label}
    </button>
  );
};
