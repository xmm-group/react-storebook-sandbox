import React from 'react';
import Button from '_common/ui/base/Button';
import styles from './index.module.scss';

interface SomeBlockPropsTypes {
  text: string;
  okButtonLoading?: boolean;
  onClickOk?: (e: object) => void;
  cancelButtonLoading?: boolean;
  onClickCancel?: (e: object) => void;
}
export type { SomeBlockPropsTypes };

const SomeBlock = ({
  text,
  okButtonLoading = false,
  onClickOk = () => {},
  cancelButtonLoading = false,
  onClickCancel = () => {},
}: SomeBlockPropsTypes) => {
  return (
    <div className={styles.someBlock}>
      <h3>{text}</h3>
      <div className="buttons">
        <Button
          type="success"
          onClick={onClickOk}
          loading={okButtonLoading}
          disabled={cancelButtonLoading}
        >
          OK
        </Button>
        <Button
          type="muted"
          onClick={onClickCancel}
          loading={cancelButtonLoading}
          disabled={okButtonLoading}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default SomeBlock;
