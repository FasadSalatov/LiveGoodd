import cn from 'classnames';
import React, { useEffect } from 'react';

import BackgroundTonCoins from '@/shared/assets/png/background-ton-coins.png';
import { TransactionsPageBottom } from '@/widgets/TransactionsPageBottom/TransactionsPageBottom';
import { TransactionsPageTop } from '@/widgets/TransactionsPageTop/TransactionsPageTop';

import classes from './TransactionsPage.module.scss';

interface ITransactionsPageProps {
  className?: string;
}

const TransactionsPage: React.FC<ITransactionsPageProps> = (props) => {
  const { className = '' } = props;

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
    <div className={cn(classes.wrapper, {}, [className])}>
      <img className={classes.backgroundTonCoins} src={BackgroundTonCoins} alt="Задний фон с TON коинами" />
      <TransactionsPageTop />
      <TransactionsPageBottom />
    </div>
  );
};

export default TransactionsPage;
