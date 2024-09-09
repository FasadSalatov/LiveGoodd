import { Box, Button } from '@mui/material';
import cn from 'classnames';
import React, { useState } from 'react';

import { Balance } from '@/entities/Balance/ui/Balance';
import { ReplenishmentDialogForm } from '@/features/ReplenishmentDialogForm';
import { WithdrawalFundsDialogForm } from '@/features/WithdrawalFundsDialogForm';

import classes from './TransactionsPageTop.module.scss';

interface ITransactionsPageTopProps {
  className?: string;
}

export const TransactionsPageTop: React.FC<ITransactionsPageTopProps> = (props) => {
  const {
    className = '',
  } = props;

  const [ isOpenReplenishmentDialog, setIsOpenReplenishmentDialog ] = useState<boolean>( false );

  const [ isOpenWithdrawalDialog, setIsOpenWithdrawalDialog ] = useState<boolean>( false );

  const handleOpenReplenishmentDialog = () => {
    setIsOpenReplenishmentDialog( true );
  };

  const handleCloseReplenishmentDialog = () => {
    setIsOpenReplenishmentDialog( false );
  };

  const handleOpenWithdrawalDialog = () => {
    setIsOpenWithdrawalDialog( true );
  };

  const handleCloseWithdrawalDialog = () => {
    setIsOpenWithdrawalDialog( false );
  };

  return (
    <>
      <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
        <Balance/>

        <Box className={classes.actions}>
          <Button fullWidth variant='contained' onClick={handleOpenReplenishmentDialog}>Пополнить</Button>
          <Button fullWidth variant='outlined' onClick={handleOpenWithdrawalDialog}>Вывести</Button>
        </Box>
      </Box>

      <ReplenishmentDialogForm isOpen={isOpenReplenishmentDialog} onClose={handleCloseReplenishmentDialog}/>

      <WithdrawalFundsDialogForm isOpen={isOpenWithdrawalDialog} onClose={handleCloseWithdrawalDialog}/>
    </>
  );
};
