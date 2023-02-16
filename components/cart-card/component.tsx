import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

export const CartCard: React.FC = () => {
  return <div className={cx('card')}></div>;
};
