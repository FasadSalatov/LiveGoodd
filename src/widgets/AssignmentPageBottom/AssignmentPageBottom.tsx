import { Box } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { AssignmentRefreshTimer } from '@/widgets/AssignmentRefreshTimer/AssignmentRefreshTimer';

import classes from './AssignmentPageBottom.module.scss';

interface IAssignmentPageBottomProps {
  className?: string;
}

export const AssignmentPageBottom: React.FC<IAssignmentPageBottomProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <AssignmentRefreshTimer/>
    </Box>
  );
};
