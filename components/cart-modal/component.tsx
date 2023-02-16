import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { CloseIcon } from '../../img';
import { useTranslation } from 'react-i18next';
import { BrushButton, CartCard } from '../../components';
import { useNavigate } from 'react-router-dom';
import { SadSmile } from '../../img';
import useMousePosition from '../../hooks/useMousePosition';

const cx = classNames.bind(styles);

export const CartModal: React.FC<{
  cart: any;
  openCartModal: any;
  cancelAllOrders: any;
}> = ({ cart, openCartModal, cancelAllOrders }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const mousePosition = useMousePosition();

  const [posX, setPosX] = React.useState(`translate(0px, 0px)`);
  React.useEffect(() => {
    setPosX(
      `translate(calc(5% - ${mousePosition.x / 50}px), calc(-25% - ${
        mousePosition.y / 10
      }px)`
    );
  }, [mousePosition]);

  const [isEmpty, setIsEmpty] = React.useState(
    Object.keys(cart.order).length === 0
  );

  React.useEffect(() => {
    setIsEmpty(Object.keys(cart.order).length === 0);
  }, [cart]);

  const closeModal = () => {
    openCartModal(false);
  };

  const goToMenu = () => {
    navigate('/menu');
    openCartModal(false);
  };

  return (
    <React.Fragment>
      <div className={cx('bkg')}>
        <div className={cx('cart-modal')}>
          <div className={cx('cart-modal-close')}>
            <button onClick={closeModal} className={cx('cart-modal-close-btn')}>
              <CloseIcon />
            </button>
          </div>
          {isEmpty ? (
            <div className={cx('empty-cart')}>
              <div className={cx('empty-cart-bkg')} style={{ transform: posX }}>
                <SadSmile />
              </div>
              <h2 className={cx('empty-cart-header')}>
                {t('cart.empty-header')}
              </h2>
              <h3 className={cx('empty-cart-propose')}>
                {t('cart.empty-propose-pt1')}
                <span className="red">{t('cart.empty-propose-pt2')}</span>
                {'?'}
              </h3>
              <BrushButton title={t("main.let's-go")} onClick={goToMenu} />
            </div>
          ) : (
            <div className={cx('cart-container')}>
              <h2 className={cx('cart-header')}>{t('cart.title')}</h2>
              <div className={cx('cards-container')}>
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
              </div>
              <BrushButton
                title={t('cart.cancel-btn')}
                onClick={cancelAllOrders}
              />
            </div>
          )}

          {/*
          <button onClick={cancelAllOrders}>Cancel All</button>
          <br />
          <p className={cx('p')}>{JSON.stringify(cart.order)}</p>*/}
        </div>
      </div>
    </React.Fragment>
  );
};
