import cn from 'classnames';
import React from 'react';

import { UserInfo } from '@/entities/User';
import { ReferralsInfo } from '@/widgets/ReferralsInfo/ReferralsInfo';

import classes from './FriendsPageTop.module.scss';

interface IFriendsPageTopProps {
  avatar: string;
  username: string;
  amountFriend: string;
  incomeAmount: string;
  invitedAmount: string;
  className?: string;
}

export const FriendsPageTop: React.FC<IFriendsPageTopProps> = (props) => {
  const {
    className = '',
    avatar,
    amountFriend,
    username,
    incomeAmount,
    invitedAmount
  } = props;
  return (
    <div className={ cn( classes.wrapper, {}, [ className ] ) }>
      <UserInfo amountFriend={ amountFriend } username={ username } avatar={ avatar }/>
      <ReferralsInfo incomeAmount={ incomeAmount } invitedAmount={ invitedAmount }/>
    </div>
  );
};
