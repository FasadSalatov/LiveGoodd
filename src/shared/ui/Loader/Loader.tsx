import cn from 'classnames';
import React from 'react';

import classes from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader: React.FC<ILoaderProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <div className={ cn(classes.loader, {}, [ className ]) }>
    </div>
  );
};
