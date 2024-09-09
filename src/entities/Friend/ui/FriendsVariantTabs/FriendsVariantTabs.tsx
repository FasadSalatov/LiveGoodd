import { Tab, Tabs } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import classes from './FriendsVariantTabs.module.scss';

interface IFriendsVariantTabsProps {
  value: string;
  onChange: (value: string) => void
  className?: string;
}

export const FriendsVariantTabs: React.FC<IFriendsVariantTabsProps> = (props) => {
  const {
    className = '',
    value,
    onChange
  } = props;

  const handleOnChange = (event: React.SyntheticEvent<Element, Event>, value: string) => {
    onChange( value );
  };

  return (
    <Tabs className={ cn(classes.wrapper, {}, [ className ]) } value={value} onChange={ handleOnChange } aria-label="lab API tabs example">
      <Tab className={classes.tab} label="Матрица" value="matrix" />
      <Tab className={classes.tab} label="Список" value="list" />
    </Tabs>
  );
};
