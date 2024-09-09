import { Box } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { mockAssignmentList } from '@/entities/Assignment/const/mockAssignmentList';
import { AssignmentListItem } from '@/entities/Assignment/ui/AssignmentListItem/AssignmentListItem';

import classes from './AssignmentList.module.scss';

interface IAssignmentListProps {
  className?: string;
}

export const AssignmentList: React.FC<IAssignmentListProps> = (props) => {
  const {
    className = '',
  } = props;



  return (
    <>
      <Box className={ cn(classes.wrapper, {}, [ className ]) }>
        {mockAssignmentList.map(assignment => (
          <AssignmentListItem key={`assignment-list-item-${assignment.id}`} assignment={assignment}/>
        ))}
      </Box>
    </>
  );
};
