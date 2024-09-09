import { Box } from '@mui/material';
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import { mockFriendsList } from '@/entities/Friend/const/mockFriendsList';
import { FriendsListItem } from '@/entities/Friend/ui/FriendsListItem/FriendsListItem';

import classes from './FriendsList.module.scss';

interface IFriendsListProps {
  className?: string;
}

export const FriendsList: React.FC<IFriendsListProps> = (props) => {
  const {
    className = '',
  } = props;
  const [ scrollEnd, setScrollEnd ] = useState<boolean>( false );
  const ref = useRef<HTMLDivElement>();

  const checkScroll = () => {
    if (ref.current) {
      const currentScroll = ref.current?.scrollTop + ref.current?.clientHeight + 60;

      if (currentScroll >= ref.current.scrollHeight) {
        setScrollEnd( true );

        return;
      }

      setScrollEnd( false );
    }
  };

  useEffect( () => {
    ref.current?.addEventListener( 'scroll', checkScroll );

    return () => {
      ref.current?.removeEventListener( 'scroll', checkScroll );
    };
  }, [] );

  return (
    <Box className={ cn( classes.wrapper, {
      [`${ classes.scrollEnd }`]: scrollEnd,
    }, [ className ] ) }>
      <Box ref={ ref } className={ classes.listWrapper }>
        { mockFriendsList.map( friend => (
          <FriendsListItem key={ `friend-list-item-${ friend.username }` } friend={ friend }/>
        ) ) }
      </Box>
    </Box>
  );
};
