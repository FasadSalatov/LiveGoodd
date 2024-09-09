import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { ITransaction } from '@/entities/Transaction/types/transaction';
import ReplenishmentIcon from '@/shared/assets/svg/replenishment.svg?react';
import WithdrawalIcon from '@/shared/assets/svg/withdrawal.svg?react';

import classes from './TransactionsListItem.module.scss';

interface ITransactionsListItemProps {
  transaction: ITransaction;
  className?: string;
}

export const TransactionsListItem: React.FC<ITransactionsListItemProps> = (props) => {
  const {
    className = '',
    transaction
  } = props;
  return (
    <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
      <Box className={ classes.right }>
        { transaction.type === 'replenishment' && <ReplenishmentIcon/> }
        { transaction.type === 'withdrawal' && <WithdrawalIcon/> }

        <Typography className={ classes.title }>
          { transaction.type === 'replenishment' && 'Пополнение' }
          { transaction.type === 'withdrawal' && 'Вывод' }
        </Typography>
      </Box>
      <Typography className={ classes.amount }>
        { transaction.amount } TON
      </Typography>
    </Box>
  );
};
