import { ReactElement } from 'react';

import styles from './index.module.scss';

export const OtherComponent = (): ReactElement => {
  return (
    <>
      <div className={styles.simpleComponentBase}>
        This is a Different Component using it's own module with the
        simpleComponentBase class
      </div>
    </>
  );
};
