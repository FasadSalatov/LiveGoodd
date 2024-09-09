import { Box, Button } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import CoinBigIcon from '@/shared/assets/svg/coin-big.svg?react';
import { CoinClickDeactivate } from '@/widgets/CoinClickDeactivate/CoinClickDeactivate';
import { CoinsAmount } from '@/widgets/CoinsAmount/CoinsAmount';
import { TapsAmount } from '@/widgets/TapsAmount/TapsAmount';

import classes from './CoinContent.module.scss';

interface ICoinContentProps {
  expired?: boolean;
  className?: string;
}

export const CoinContent: React.FC<ICoinContentProps> = (props) => {
  const {
    className = '',
    expired = false
  } = props;
  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <Box className={classes.top}>
        <CoinsAmount amount='8 555'/>
        <TapsAmount amount='15' maxAmount='100'/>
      </Box>
      <Box className={classes.bottom} id='coin-click-wrapper'>
        {expired && <CoinClickDeactivate/>}
        <Button className={cn(classes.coinButton, {
          [`${classes.disabledButton}`]: expired
        })}>
          <CoinBigIcon/>
        </Button>
      </Box>
    </Box>
  );
};
