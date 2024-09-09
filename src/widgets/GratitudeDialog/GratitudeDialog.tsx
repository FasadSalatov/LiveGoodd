import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import classes from './GratitudeDialog.module.scss';

interface IGratitudeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const GratitudeDialog: React.FC<IGratitudeDialogProps> = (props) => {
  const {
    isOpen,
    onClose,
    className = '',
  } = props;
  return (
    <Dialog open={isOpen} className={ cn(classes.wrapper, {}, [ className ]) }>
      <DialogContent>
        <Typography className={classes.text}>
          Спасибо, что остаётесь с нами! <br/>
          Ваша активность возобновлена
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button fullWidth variant='contained' onClick={onClose}>Супер!</Button>
      </DialogActions>
    </Dialog>
  );
};
