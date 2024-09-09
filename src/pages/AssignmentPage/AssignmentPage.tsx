import React, { useEffect } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import cn from 'classnames';

import { AssignmentPageBottom } from '@/widgets/AssignmentPageBottom/AssignmentPageBottom';
import { AssignmentPageTop } from '@/widgets/AssignmentPageTop/AssignmentPageTop';

import classes from './AssignmentPage.module.scss';

interface IAssignmentPageProps {
  className?: string;
}

const AssignmentPage: React.FC<IAssignmentPageProps> = (props) => {
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
    <Box className={cn(classes.wrapper, {}, [className])}>
      <AssignmentPageTop />
      <AssignmentPageBottom />
    </Box>
  );
};

export default AssignmentPage;
