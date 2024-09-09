import { Box } from '@mui/material';
import cn from 'classnames';
import React, { useState } from 'react';

import { FriendsMatrix, FriendsVariantTabs } from '@/entities/Friend';
import { FriendsList } from '@/entities/Friend/ui/FriendsList/FriendsList';
import { CopyInviteButton } from '@/features/CopyInviteButton/ui/CopyInviteButton';

import classes from './FriendsPageBottom.module.scss';

interface IFriendsPageBottomProps {
  className?: string;
}

export const FriendsPageBottom: React.FC<IFriendsPageBottomProps> = (props) => {
  const {
    className = '',
  } = props;

  const [ activeVariant, setActiveVariant ] = useState('matrix');

  const handleChangeActiveVariant = (value: string) => {
    setActiveVariant( value );
  };

  return (
    <Box className={ cn( classes.wrapper, {
      [`${ classes.matrixVariant }`]: activeVariant === 'matrix',
    }, [ className ] ) }>
      <Box className={ classes.top }>
        <FriendsVariantTabs value={ activeVariant } onChange={ handleChangeActiveVariant }/>
        {activeVariant === 'matrix' && <FriendsMatrix/>}
        {activeVariant === 'list' && <FriendsList/>}
      </Box>
      <Box className={classes.bottom}>
        <CopyInviteButton/>
      </Box>
    </Box>
  );
};
