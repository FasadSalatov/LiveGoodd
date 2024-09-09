import { CloseRounded } from '@mui/icons-material';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { mockStatuses } from '../../const/mockStatuses';
import { StatusesAccordionList } from '../StatusesAccordionList/StatusesAccordionList';
import classes from './StatusesDrawer.module.scss';

interface IStatusesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const StatusesDrawer: React.FC<IStatusesDrawerProps> = (props) => {
  const {
    isOpen,
    onClose,
    className = '',
  } = props;
  return (
    <Drawer anchor='bottom' open={isOpen} onClose={onClose} className={ cn(classes.wrapper, {}, [ className ]) }>
      <Box className={classes.titleWrapper}>
        <Typography className={classes.title}>Статусы</Typography>
        <IconButton onClick={onClose}>
          <CloseRounded color='primary'/>
        </IconButton>
      </Box>

      <StatusesAccordionList statuses={mockStatuses}/>
    </Drawer>
  );
};
