import cn from 'classnames';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import { mockFriendsList } from '@/entities/Friend/const/mockFriendsList';
import { mockAvatar } from '@/shared/const/mockAvatar';
import { FriendsPageBottom } from '@/widgets/FriendsPageBottom/FriendsPageBottom';
import { FriendsPageTop } from '@/widgets/FriendsPageTop/FriendsPageTop';

import classes from './FriendsPage.module.scss';

export interface IFriendsPageProps {
  className?: string;
}

const FriendsPage: React.FC<IFriendsPageProps> = (props) => {
  const { className = '' } = props;
  const { username } = useParams();

  const user = mockFriendsList.find((friend) => friend.username === username);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg && tg.BackButton) {
      const BackButton = tg.BackButton;

      BackButton.show();

      BackButton.onClick(() => {
        window.location.href = '/';
      });

      return () => {
        BackButton.offClick();
      };
    }
  }, []);

  return (
    <Box className={cn(classes.wrapper, {}, [className])}>
      <FriendsPageTop
        amountFriend={user?.friendsCount.toString() || '2'}
        invitedAmount='2'
        incomeAmount='55'
        username={user?.username || '@username'}
        avatar={user?.avatar || mockAvatar}
      />
      <FriendsPageBottom />
    </Box>
  );
};

export default FriendsPage;
