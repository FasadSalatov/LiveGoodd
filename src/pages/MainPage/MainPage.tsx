import { Box } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import BackgroundTonCoins from '@/shared/assets/png/background-ton-coins.png';
import { MainPageBottom } from '@/widgets/MainPageBottom/MainPageBottom';
import { MainPageTop } from '@/widgets/MainPageTop/MainPageTop';

import classes from './MainPage.module.scss';

export interface IMainPageProps {
  className?: string;
}

const MainPage: React.FC<IMainPageProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <Box className={ cn(classes.wrapper, {}, [ className ]) }>
      <img className={classes.backgroundTonCoins} src={BackgroundTonCoins} alt="Задний фон с TON коинами"/>
      <MainPageTop/>
      <MainPageBottom/>
    </Box>
  );
};

export default MainPage;
