import cn from 'classnames';
import React, {FC} from 'react';
import {ITEMS_FORM} from '../../const';
import {IFormItem} from '../../interfaces';
import styles from './styles/index.module.css';

const FormItem: FC<IFormItem> = ({formik, name}) => (
  <div className={styles.group}>
      <span
        className={
          cn({
            [styles.group__label]: true,
            error: formik.errors[name]
          })
        }>
        {ITEMS_FORM[name]}
      </span>
    <input
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      className={styles.group__input}
    />
    {formik.errors[name] && (
      <div className={styles.error}>{formik.errors[name]}</div>
    )}
  </div>
);

export default FormItem;