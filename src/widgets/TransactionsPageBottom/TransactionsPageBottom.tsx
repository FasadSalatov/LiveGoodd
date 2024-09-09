import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { TransactionsList } from '@/entities/Transaction';

import classes from './TransactionsPageBottom.module.scss';

interface ITransactionsPageBottomProps {
  className?: string;
}

export const TransactionsPageBottom: React.FC<ITransactionsPageBottomProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <Typography className={classes.title}>
        Транзакции
      </Typography>

      <TransactionsList/>
    </Box>
  );
};
