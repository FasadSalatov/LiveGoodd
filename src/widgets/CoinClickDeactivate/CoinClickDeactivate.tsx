import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import classes from './CoinClickDeactivate.module.scss';


interface ICoinClickDeactivateProps {
  className?: string;
}

export const CoinClickDeactivate: React.FC<ICoinClickDeactivateProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <Box className={cn(classes.wrapper, {}, [className])}>
      <Typography className={classes.text}>
        Активируйте билет, <br/>чтобы <span>продолжить игру!</span>
      </Typography>
    </Box>
  );
};
