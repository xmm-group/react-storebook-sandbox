import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss'

interface ButtonPropsTypes {
  type: 'primary' | 'success' | 'warning' | 'danger' | 'muted';
  loading: boolean;
  children: ReactNode;
  onClick: (event: object) => void;
  disabled: boolean;
  block: boolean;
}
const Button = ({
  type = 'primary',
  loading = false,
  children = null,
  onClick = () => {},
  disabled = false,
  block = false,
}: ButtonPropsTypes) => {
  return (
    <button
      className={classNames(
        styles.btn,
        {
          'btn-primary': type === 'primary',
          'btn-success': type === 'success',
          'btn-warning': type === 'warning',
          'btn-danger': type === 'danger',
          'btn-muted': type === 'muted',
          'btn-disabled': loading || disabled,
          'btn-block': block,
        }
      )}
      onClick={(event) => onClick(event)}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
