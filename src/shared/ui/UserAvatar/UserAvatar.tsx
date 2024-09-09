import { Box } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import classes from './UserAvatar.module.scss';

interface IUserAvatarProps {
  src: string | null;
  outlined?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export const UserAvatar: React.FC<IUserAvatarProps> = (props) => {
  const {
    className = '',
    src,
    height = 45,
    width = 45,
    outlined = false
  } = props;

  if (!src) {
    return (
      <Box style={ { width: `${ width }px`, height: `${ height }px` } } className={ cn( classes.wrapper, {
        [`${ classes.emptyImage }`]: classes.emptyImage
      }, [ className ] ) }></Box>
    );
  }

  return (
    <img className={ cn( classes.wrapper, {
      [`${ classes.outlined }`]: outlined,
    }, [ className ] ) } style={ { width: `${ width }px`, height: `${ height }px` } } src={ src }
    alt='Изображение пользователя'/>
  );
};
