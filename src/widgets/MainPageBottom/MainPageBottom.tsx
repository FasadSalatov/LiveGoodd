import cn from 'classnames';
import React from 'react';

import { CoinContent } from '@/widgets/CoinContent/CoinContent';
import { InvitedPartnersContent } from '@/widgets/InvitedPartnersContent/InvitedPartnersContent';

import classes from './MainPageBottom.module.scss';

interface IMainPageBottomProps {
  className?: string;
}

export const MainPageBottom: React.FC<IMainPageBottomProps> = (props) => {
  const {
    className = '',
  } = props;
  return (
    <div className={ cn(classes.wrapper, {}, [ className ]) }>
      <CoinContent expired={false}/>

      <InvitedPartnersContent/>
    </div>
  );
};
