import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import classes from './AssignmentRefreshTimer.module.scss';

interface IAssignmentRefreshTimerProps {
  className?: string;
}

export const AssignmentRefreshTimer: React.FC<IAssignmentRefreshTimerProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
      <Typography className={classes.title}>
        Задания обновятся через:
      </Typography>
      <Box className={classes.timerWrapper}>
        <Typography className={classes.timerText}>
          15:05:32
        </Typography>
      </Box>
    </Box>
  );
};
