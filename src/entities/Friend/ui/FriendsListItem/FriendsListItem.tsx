import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { IFriend } from '@/entities/Friend/types/friend';
import { UserAvatar } from '@/shared/ui/UserAvatar/UserAvatar';

import classes from './FriendsListItem.module.scss';

interface IFriendsListItemProps {
  friend: IFriend;
  className?: string;
}

export const FriendsListItem: React.FC<IFriendsListItemProps> = (props) => {
  const {
    className = '',
    friend
  } = props;
  return (
    <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
      <Box className={ classes.right }>
        <UserAvatar src={ friend.avatar }/>
        <Box className={ classes.infoWrapper }>
          <Typography className={ classes.username }>
            { friend.username }
          </Typography>
          <Typography className={classes.friendsCountLabel}>
            { friend.friendsCount } друга
          </Typography>
        </Box>
      </Box>
      <Typography className={classes.lgCoins}>
        { friend.lgCoinsAmount } <span>LG</span>
      </Typography>
    </Box>
  );
};
