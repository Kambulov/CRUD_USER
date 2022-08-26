import React, {FC} from 'react';
import styles from './styles/index.module.css';
import {IButton} from '../../interfaces';
import cn from 'classnames';

const Button: FC<IButton> = ({className,title, ...props}) => (
    <button className={cn(styles.btn, className)}  {...props}>
      {title}
    </button>
  );

  export default Button;;