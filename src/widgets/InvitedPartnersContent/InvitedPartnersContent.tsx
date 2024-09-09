import { Box, Button } from '@mui/material';
import cn from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StatusesDrawer } from '@/entities/Status';
import { InvitedPartnersAmount } from '@/widgets/InvitedPartnersAmount/InvitedPartnersAmount';

import classes from './InvitedPartnersContent.module.scss';

interface IInvitedPartnersContentProps {
  className?: string;
}

export const InvitedPartnersContent: React.FC<IInvitedPartnersContentProps> = (props) => {
  const {
    className = '',
  } = props;

  const [ isOpenDrawer, setIsOpenDrawer ] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCloseDrawer = () => {
    setIsOpenDrawer( false );
  };

  const handleOpenDrawer = () => {
    setIsOpenDrawer( true );
  };

  const handleClickInvite = () => {
    navigate('/friends');
  };

  return (
    <>
      <Box className={ cn( classes.wrapper, {}, [ className ] ) }>
        <Box onClick={handleOpenDrawer}>
          <InvitedPartnersAmount amount='4' maxAmount='5'/>
        </Box>
        <Button fullWidth variant='contained' onClick={handleClickInvite}>Пригласить друга</Button>
      </Box>
      <StatusesDrawer isOpen={isOpenDrawer} onClose={handleCloseDrawer}/>
    </>
  );
};
