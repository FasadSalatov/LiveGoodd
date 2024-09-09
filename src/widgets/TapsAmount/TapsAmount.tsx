import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import classes from './TapsAmount.module.scss';

interface ITapsAmountProps {
  amount: string;
  maxAmount: string;
  className?: string;
}

export const TapsAmount: React.FC<ITapsAmountProps> = (props) => {
  const {
    className = '',
    amount,
    maxAmount
  } = props;
  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <Typography className={classes.label}>
        Осталось тапов
      </Typography>
      <Typography className={classes.amount}>
        {amount}/{maxAmount}
      </Typography>
    </Box>
  );
};
