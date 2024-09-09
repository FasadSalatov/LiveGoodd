import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import CoinIcon from '@/shared/assets/svg/coin.svg?react';

import classes from './CoinsAmount.module.scss';

interface ICoinsAmountProps {
  amount: string;
  className?: string;
}

export const CoinsAmount: React.FC<ICoinsAmountProps> = (props) => {
  const {
    className = '',
    amount
  } = props;
  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <CoinIcon/>
      <Typography className={classes.amount}>
        {amount}
      </Typography>
    </Box>
  );
};
