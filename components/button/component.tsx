import * as React from 'react';
import classNames from 'classnames/bind';
import { Border } from '../../img/border';
import { BrushBtn } from '../../img/brush-btn';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

interface BrushButtonProps {
  title: string;
  onClick: () => void;
}

export const BrushButton: React.FC<BrushButtonProps> = ({ title, onClick }) => {
  return (
    <div className={cx('brush-btn-container')}>
      <div className={cx('border')}>
        <Border />
      </div>
      <button className={cx('brush-btn')} onClick={onClick}>
        {title}
      </button>
      <div className={cx('brush-bkg-container')}>
        <BrushBtn />
      </div>
    </div>
  );
};
