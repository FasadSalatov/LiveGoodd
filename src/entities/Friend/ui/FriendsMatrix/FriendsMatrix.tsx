import cn from 'classnames';
import React from 'react';
import { useParams } from 'react-router-dom';

import { mockFriendsNode, mockFriendsNode2 } from '@/entities/Friend/const/mockFriendsNode';
import { FriendsMatrixList } from '@/entities/Friend/ui/FriendsMatrixList/FriendsMatrixList';

import classes from './FriendsMatrix.module.scss';

interface IFriendsMatrixProps {
  className?: string;
}

export const FriendsMatrix: React.FC<IFriendsMatrixProps> = (props) => {
  const {
    className = '',
  } = props;

  const { username } = useParams();

  const matrix = username ? mockFriendsNode2 : mockFriendsNode;

  return (
    <div className={ cn( classes.wrapper, {}, [ className ] ) }>
      { matrix.map( (friend) => (
        <FriendsMatrixList key={ `friend-matrix-${ friend.username }` } friend={ friend }/>
      ) ) }
    </div>
  );
};
