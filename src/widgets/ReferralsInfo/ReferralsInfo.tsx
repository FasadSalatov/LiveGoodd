import { Box, Button, Typography } from '@mui/material';
import cn from 'classnames';
import React, { useState } from 'react';

import { WithdrawalFundsDialogForm } from '@/features/WithdrawalFundsDialogForm';

import classes from './ReferralsInfo.module.scss';

interface IReferralsInfoProps {
  incomeAmount: string;
  invitedAmount: string;
  className?: string;
}

export const ReferralsInfo: React.FC<IReferralsInfoProps> = (props) => {
  const {
    className = '',
    invitedAmount,
    incomeAmount
  } = props;

  const [ isOpenDialog, setIsOpenDialog ] = useState<boolean>( false );

  const handleCloseDialog = () => {
    setIsOpenDialog( false );
  };

  const handleOpenDialog = () => {
    setIsOpenDialog( true );
  };

  return (
    <>
      <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
        <Box className={classes.grid}>
          <Box className={classes.content}>
            <Typography className={classes.label}>
              Доход с рефералов
            </Typography>
            <Typography className={classes.value}>
              {incomeAmount} TON
            </Typography>
          </Box>
          <Box className={classes.content}>
            <Typography className={classes.label}>
              Друзей приглашено
            </Typography>
            <Typography className={classes.value}>
              {incomeAmount}
            </Typography>
          </Box>
        </Box>
        <Button variant='contained' onClick={handleOpenDialog}>Вывести</Button>
      </Box>

      <WithdrawalFundsDialogForm isOpen={isOpenDialog} onClose={handleCloseDialog}/>
    </>
  );
};
