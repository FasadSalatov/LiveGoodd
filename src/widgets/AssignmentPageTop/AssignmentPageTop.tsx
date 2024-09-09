import { Box } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { AssignmentList } from '@/entities/Assignment';

import classes from './AssignmentPageTop.module.scss';

interface IAssignmentPageTopProps {
  className?: string;
}

export const AssignmentPageTop: React.FC<IAssignmentPageTopProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
      <AssignmentList/>
    </Box>
  );
};
