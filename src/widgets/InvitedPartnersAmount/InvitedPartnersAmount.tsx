import { Box, LinearProgress, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import classes from './InvitedPartnersAmount.module.scss';

interface IInvitedPartnersAmountProps {
  amount: string;
  maxAmount: string;
  className?: string;
}

export const InvitedPartnersAmount: React.FC<IInvitedPartnersAmountProps> = (props) => {
  const {
    className = '',
    amount,
    maxAmount
  } = props;
  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <Box className={classes.content}>
        <Typography className={classes.label}>
          Партнер
        </Typography>
        <Typography className={classes.invitedInfo}>
          Приглашено <span>{amount} чел.</span>
        </Typography>
        <Typography className={cn(classes.label, {}, [classes.orange])}>
          Бронза
        </Typography>
      </Box>
      <LinearProgress className={classes.linear} variant="determinate" value={80} />
    </Box>
  );
};
