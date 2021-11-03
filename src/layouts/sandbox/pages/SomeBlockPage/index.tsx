import React, { useState } from 'react';
import SomeBlock from '_common/ui/blocks/SomeBlock';
import styles from './index.module.scss';

const SomeBlockPage = () => {
  const [loadingOk, setLoadingOk] = useState(false);
  const [loadingCancel, setLoadingCancel] = useState(false);

  const [result, setResult] = useState<string | null>(null);

  const handleOk = () => {
    if (!loadingOk) {
      setLoadingOk(true);
      new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
        setLoadingOk(false);
        setResult('You pressed "Ok"');
      });
    }
  };

  const handleCancel = () => {
    if (!loadingCancel) {
      setLoadingCancel(true);
      new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
        setLoadingCancel(false);
        setResult('You pressed "Cancel"');
      });
    }
  };

  return (
    <div className={styles.someBlockContainer}>
      <SomeBlock
        text={result || 'Click on the button'}
        onClickOk={handleOk}
        okButtonLoading={loadingOk}
        onClickCancel={handleCancel}
        cancelButtonLoading={loadingCancel}
      />
    </div>
  );
};

export default SomeBlockPage;
