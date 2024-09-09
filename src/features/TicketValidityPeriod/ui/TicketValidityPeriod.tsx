import { Box, Button, Typography } from '@mui/material';
import cn from 'classnames';
import React, { useState } from 'react';

import { ActivateDialogForm } from '@/features/ActivateDialogForm';

import classes from './TicketValidityPeriod.module.scss';

interface ITicketValidityPeriodProps {
  expired?: boolean
  className?: string;
}

export const TicketValidityPeriod: React.FC<ITicketValidityPeriodProps> = (props) => {
  const {
    className = '',
    expired= false
  } = props;

  const [ isOpenActivateDialog, setIsOpenActivateDialog ] = useState( false );

  const handleCloseActivateDialog = () => {
    setIsOpenActivateDialog(false);
  };

  const handleOpenActivateDialog = () => {
    setIsOpenActivateDialog(true);
  };

  return (
    <>
      <Box className={ cn(classes.wrapper, {
        [`${classes.expired}`]: expired
      }, [ className ]) }>
        <Box className={classes.leftContent}>
          <Typography className={classes.label}>
            {expired && 'Срок действия'}
            {!expired && 'Действует ещё'}
          </Typography>
          <Typography className={classes.amount}>
            {expired && 'Закончился'}
            {!expired && '15 дней'}
          </Typography>
        </Box>
        <span className={classes.divider}/>
        <Box className={classes.rightContent}>
          <Button className={classes.button} variant='text' onClick={handleOpenActivateDialog}>
            {expired && 'Активация'}
            {!expired && 'Продлить'}
          </Button>
        </Box>
      </Box>

      <ActivateDialogForm isOpen={isOpenActivateDialog} onClose={handleCloseActivateDialog}/>
    </>
  );
};
