import { CloseRounded } from '@mui/icons-material';
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { IAssignment } from '@/entities/Assignment/types/assignment';
import StarCoinIcon from '@/shared/assets/svg/Assignment/star-coin.svg?react';

import classes from './AssignmentInfoDrawer.module.scss';

interface IAssignmentInfoDrawerProps {
  assignment: IAssignment;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const AssignmentInfoDrawer: React.FC<IAssignmentInfoDrawerProps> = (props) => {
  const {
    className = '',
    isOpen,
    onClose,
    assignment
  } = props;
  return (
    <Drawer anchor='bottom' open={ isOpen } onClose={ onClose } className={ cn( classes.wrapper, {}, [ className ] ) }>
      <IconButton className={ classes.closeIcon } onClick={ onClose }>
        <CloseRounded color='primary'/>
      </IconButton>
      <Box className={ classes.topContent }>
        <Box className={ classes.infoWrapper }>
          <Box className={ classes.titleWrapper }>
            <img className={ classes.img } src={ assignment.icon } alt="Изображение задания"/>
            <Typography className={ classes.title }>
              { assignment.title }
            </Typography>
          </Box>
          <Typography className={ classes.text }>
            { assignment.text }
          </Typography>
        </Box>
        <Button variant='contained' className={ classes.subscribeButton }>Подписаться</Button>
      </Box>
      <Box className={classes.rewardWrapper}>
        <StarCoinIcon/>
        <Typography className={classes.rewardText}>
          +{ assignment.reward } LG
        </Typography>
      </Box>
      <Button fullWidth variant='contained' className={classes.checkButton}>Проверить</Button>
    </Drawer>
  );
};
