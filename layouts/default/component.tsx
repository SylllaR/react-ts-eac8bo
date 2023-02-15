import * as React from 'react';
import { Header, CartModal } from '../../components';
import './styles.scss';

export const DefaultLayout: React.FC<{ isOpenCartModal: boolean }> = ({
  children,
  isOpenCartModal,
}) => {
  return (
    <div>
      <div className="bkg" />
      <Header />
      {isOpenCartModal && <CartModal />}
      {children}
    </div>
  );
};
