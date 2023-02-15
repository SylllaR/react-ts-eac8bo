import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import * as i18n from 'i18next';

const cx = classNames.bind(styles);

export const LangSelector: React.FC = () => {
  const [lang, setLang] = React.useState<string>(i18n.language);

  React.useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <select
      className={cx('lang-select')}
      name="select"
      value={lang}
      onChange={(e) => setLang(e.target.value)}
    >
      <option className={cx('lang-option')} value="ua">
        УКР
      </option>
      <option className={cx('lang-option')} value="ru">
        РУС
      </option>
    </select>
  );
};
