import { Box, IconButton, TextField, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import ArrowLeftIcon from '@/shared/assets/svg/arrow-left-orange.svg?react';
import ArrowRightIcon from '@/shared/assets/svg/arrow-right-orange.svg?react';

import classes from './CustomInputWithButtons.module.scss';

interface ICustomInputWithButtonsProps {
  value: string;
  onChange: (value: string) => void
  label?: string;
  className?: string;
}

export const CustomInputWithButtons: React.FC<ICustomInputWithButtonsProps> = (props) => {
  const {
    className = '',
    value,
    onChange,
    label
  } = props;

  const handleClickDecrement = () => {
    const newValue = +value - 1;

    onChange( newValue.toString() );
  };

  const handleClickIncrement = () => {
    const newValue = +value + 1;

    onChange( newValue.toString() );
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;

    onChange( value );
  };

  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <IconButton onClick={handleClickDecrement}>
        <ArrowLeftIcon/>
      </IconButton>
      <Box className={classes.textWrapper}>
        {label &&
          <Typography className={ classes.label }>
            {label}
          </Typography>
        }
        <TextField className={classes.input} variant='standard' value={value} size='small' onChange={handleChangeInput}/>
      </Box>
      <IconButton onClick={handleClickIncrement}>
        <ArrowRightIcon/>
      </IconButton>
    </Box>
  );
};
