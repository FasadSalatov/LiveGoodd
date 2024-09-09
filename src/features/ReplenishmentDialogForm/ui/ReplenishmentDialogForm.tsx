import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import cn from 'classnames';
import React, { useState } from 'react';

import { CustomInputWithButtons } from '@/shared/ui/CustomInputWithButtons/CustomInputWithButtons';

import classes from './ReplenishmentDialogForm.module.scss';

interface IReplenishmentDialogFormProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ReplenishmentDialogForm: React.FC<IReplenishmentDialogFormProps> = (props) => {
  const {
    className = '',
    isOpen,
    onClose
  } = props;

  const [ value, setValue ] = useState<string>( '1' );

  const handleChangeValue = (newValue: string) => {
    setValue( newValue );
  };

  return (
    <Dialog open={ isOpen } onClose={ onClose } className={ cn( classes.wrapper, {}, [ className ] ) }>
      <DialogTitle>
        Пополнение
      </DialogTitle>
      <DialogContent>
        <Box className={ classes.form }>
          <CustomInputWithButtons value={ value } onChange={ handleChangeValue }/>
          <Typography className={ classes.tonLabel }>TON</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button fullWidth variant='contained' onClick={ onClose }>Купить</Button>
      </DialogActions>
    </Dialog>
  );
};
