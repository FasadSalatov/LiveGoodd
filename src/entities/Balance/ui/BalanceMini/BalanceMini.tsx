import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import classes from './BalanceMini.module.scss';

interface IBalanceMiniProps {
  className?: string;
}

export const BalanceMini: React.FC<IBalanceMiniProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
      <Typography className={ classes.tonAmount }>
        1000 TON
      </Typography>
      <Typography className={ classes.lgAmount }>
        8555 LG
      </Typography>
    </Box>
  );
};
