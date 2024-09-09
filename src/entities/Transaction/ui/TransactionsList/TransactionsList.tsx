import { Box } from '@mui/material';
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import { mockTransactionsList } from '@/entities/Transaction/const/mockTransactionsList';
import { TransactionsListItem } from '@/entities/Transaction/ui/TransactionsListItem/TransactionsListItem';

import classes from './TransactionsList.module.scss';

interface ITransactionsListProps {
  className?: string;
}

export const TransactionsList: React.FC<ITransactionsListProps> = (props) => {
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
      <Box ref={ref} className={ classes.listWrapper }>
        { mockTransactionsList.map( transaction => (
          <TransactionsListItem key={`transaction-list-item-${transaction.id}`} transaction={transaction}/>
        ) ) }
      </Box>
    </Box>
  );
};
