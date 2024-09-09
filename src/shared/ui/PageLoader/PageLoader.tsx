import cn from 'classnames';
import React from 'react';

import { Loader } from '@/shared/ui/Loader/Loader';

import classes from './PageLoader.module.scss';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<IPageLoaderProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <div className={ cn(classes.wrapper, {}, [ className ]) }>
      <Loader/>
    </div>
  );
};
