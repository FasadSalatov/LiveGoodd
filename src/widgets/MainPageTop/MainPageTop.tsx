import { Box, Button } from '@mui/material';
import cn from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Balance } from '@/entities/Balance/ui/Balance';
import { TicketValidityPeriod } from '@/features/TicketValidityPeriod';
import BookmarkIcon from '@/shared/assets/svg/bookmark.svg?react';

import classes from './MainPageTop.module.scss';

interface IMainPageTopProps {
  className?: string;
}

export const MainPageTop: React.FC<IMainPageTopProps> = (props) => {
  const {
    className = '',
  } = props;

  const navigate = useNavigate();

  const onClickDaily = () => {
    navigate( '/assignment' );
  };

  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <Box className={classes.top}>
        <Balance/>

        <Button className={classes.dailyButton} onClick={onClickDaily}>
          <BookmarkIcon/>
          Ежедневки
        </Button>
      </Box>

      <TicketValidityPeriod expired={false}/>
    </Box>
  );
};
