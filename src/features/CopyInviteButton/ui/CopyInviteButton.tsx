import { Button, Tooltip } from '@mui/material';
import cn from 'classnames';
import React, { useRef, useState } from 'react';

import classes from './CopyInviteButton.module.scss';

interface ICopyInviteButtonProps {
  className?: string;
}

export const CopyInviteButton: React.FC<ICopyInviteButtonProps> = (props) => {
  const {
    className = '',
  } = props;

  const [ isOpenTooltip, setIsOpenTooltip ] = useState<boolean>( false );
  const timeout = useRef<ReturnType<typeof setTimeout> | null>( null );

  const handleClickInviteButton = () => {
    if (timeout.current) {
      clearTimeout( timeout.current );
    }

    setIsOpenTooltip( true );

    timeout.current = setTimeout( () => {
      setIsOpenTooltip( false );
    }, 3000 );
  };

  return (
    <Tooltip open={isOpenTooltip} arrow placement='top' title='Реферальная ссылка скопирована!' className={ cn( classes.wrapper, {}, [ className ] ) }>
      <Button fullWidth variant='contained' onClick={handleClickInviteButton}>Пригласить друга</Button>
    </Tooltip>
  );
};
