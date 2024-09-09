import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import TonIcon from '@/shared/assets/svg/Balance/ton.svg?react';

import classes from './Balance.module.scss';

interface IBalanceProps {
  className?: string;
}

export const Balance: React.FC<IBalanceProps> = (props) => {
  const {
    className = '',
  } = props;

  const navigate = useNavigate();

  const onClickBalance = () => {
    navigate( '/transactions' );
  };

  return (
    <div className={ cn(classes.wrapper, {}, [ className ]) } onClick={onClickBalance}>
      <Typography className={classes.label}>Баланс</Typography>
      <Box className={classes.balanceWrapper}>
        <TonIcon/>
        <Typography className={classes.balanceText}>
          <span>1000</span> TON
        </Typography>
      </Box>
    </div>
  );
};
