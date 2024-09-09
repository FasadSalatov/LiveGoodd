import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IFriendNode } from '@/entities/Friend/types/friend';
import { UserAvatar } from '@/shared/ui/UserAvatar/UserAvatar';

import classes from './FriendsMatrixList.module.scss';

interface IFriendsMatrixListProps {
  friend: IFriendNode | null;
  depth?: number;
  className?: string;
}

const sizes = {
  1: 80,
  2: 60,
  3: 38,
};

export const FriendsMatrixList: React.FC<IFriendsMatrixListProps> = (props) => {
  const {
    className = '',
    depth = 1,
    friend,
  } = props;

  const navigate = useNavigate();

  const onRoute = () => {
    if (friend) {
      navigate(`/friends/${friend.username}`);
    }
  };

  return (
    <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
      <Box
        width={sizes[depth as keyof typeof sizes]}
        className={ cn(classes.friendInfo, {
          [`${ classes.lastDepth }`]: depth === 3,
          [`${ classes.secondDepth }`]: depth === 2,
        }) }
        onClick={onRoute}
      >
        <UserAvatar width={ sizes[depth as keyof typeof sizes] } height={ sizes[depth as keyof typeof sizes] } src={ friend?.avatar || null }/>
        <Typography className={classes.username} sx={{ width: sizes[depth as keyof typeof sizes] }}>
          { friend?.username || '—' }
        </Typography>
      </Box>
      {depth < 3 && (
        <Box className={cn(classes.nextDept, {
          [`${classes.lastDepth}`]: depth === 2
        })}>
          <FriendsMatrixList friend={friend?.left || null} depth={depth + 1}/>
          <FriendsMatrixList friend={friend?.right || null} depth={depth + 1}/>
        </Box>
      )}
    </Box>
  );
};
