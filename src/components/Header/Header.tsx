import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo-tertiary-white.svg';
import styles from './Header.module.scss';

export interface HeaderProps {
  isLoggedIn: boolean;
}

export const Header = ({ isLoggedIn = false }: HeaderProps) => {
  const getInnerStyles = () => {
    return isLoggedIn
      ? styles.inner
      : `${styles.inner} ${styles.innerCentered}`;
  };

  return (
    <header className={styles.header}>
      <div className={getInnerStyles()}>
        <Logo className={styles.logo} />
        {isLoggedIn && (
          <span
            className={styles.logout}
            // label='Logout'
            id='logout'
            onClick={() => {
              console.log('logging out');
            }}
          >
            Logout
          </span>
        )}
      </div>
    </header>
  );
};
