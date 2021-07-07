import { ReactElement } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

export const SimpleComponent = (): ReactElement => {
  return (
    <>
      <div className={styles.simpleComponentBase}>
        This is a Simple Component
      </div>

      <div className={[styles.simpleComponentBase, 'globalClass'].join(' ')}>
        This is a Simple Component with a global class
      </div>
      <div className={styles.simpleComponentBorder}>
        This is a Simple Component using 'composes' keyword
      </div>
      <div className={styles.simpleComponentUgly}>
        This is a Simple Ugly Component using 'composes' keyword from a sibling
        component
      </div>
      <div className={styles.simpleComponentExtend}>
        This is a Simple Component using Sass @extend
        <div className={styles.inner}>
          This is a Simple Component element using Sass @extend
        </div>
        <div className={classNames(styles.inner, styles['inner--modifier'])}>
          This is a Simple multi-class Component modified element using Sass
          @extend and classNames
        </div>
        <div className={[styles.inner, styles['inner--modifier']].join(' ')}>
          This is a Simple multi-class Component element using Sass @extend
          '.join'
        </div>
      </div>
    </>
  );
};
