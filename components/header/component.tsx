import * as React from 'react';
import { Logo } from '../../img/logo';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';
import { LangSelector } from '../';
import { CartIcon, InstIcon, FBIcon } from '../../img';

const cx = classNames.bind(styles);

interface HeaderProps {
  cart: any;
  getCartAmountAction: any;
  openCartModal: any;
}

export const Header: React.FC<HeaderProps> = ({
  cart,
  getCartAmountAction,
  openCartModal,
}) => {
  const { t } = useTranslation();
  const [orderAmount, setOrderAmount] = React.useState(
    Object.keys(cart.order).length
  );

  const openCloseModal = () => {
    openCartModal(!cart.isOpen);
  };

  const closeModal = () => {
    openCartModal(false);
  };

  React.useEffect(() => {
    setOrderAmount(Object.keys(cart.order).length);
  }, [cart]);

  const routeList = [
    {
      name: t('header.main'),
      route: '/',
    },
    {
      name: t('header.menu'),
      route: '/menu',
    },
    {
      name: t('header.delivery'),
      route: '/delivery',
    },
    {
      name: t('header.contacts'),
      route: '/contacts',
    },
  ];

  return (
    <div className={cx('header-container')}>
      <header className={cx('header')}>
        <div className={cx('logo-container')}>
          <NavLink to="/" className={cx('logo')}>
            <Logo />
          </NavLink>
        </div>

        <nav>
          <ul className={cx('nav-list')}>
            {routeList.map((item) => (
              <li className={cx('nav-item')} key={item.name}>
                <NavLink
                  className={({ isActive }) =>
                    cx('nav-link', {
                      disabled: item.route === 'disabled',
                      active: isActive,
                    })
                  }
                  to={item.route}
                  onClick={closeModal}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={cx('socials')}>
          <LangSelector />

          <button onClick={openCloseModal} className={cx('cart-btn')}>
            <CartIcon />

            {orderAmount !== 0 && (
              <mark className={cx('cart-btn-mark')}>{orderAmount}</mark>
            )}
          </button>

          <ul className={cx('socials-list')}>
            <li>
              <a href="https://uk-ua.facebook.com/" target="_blank">
                <FBIcon />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <InstIcon />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
