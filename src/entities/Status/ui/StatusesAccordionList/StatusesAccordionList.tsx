import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import cn from 'classnames';
import React from 'react';

import { IStatus } from '@/entities/Status/types/status';
import ExpandMoreIcon from '@/shared/assets/svg/chevron-down.svg?react';

import classes from './StatusesAccordionList.module.scss';

interface IStatusesAccordionListProps {
  statuses: IStatus[];
  className?: string;
}

export const StatusesAccordionList: React.FC<IStatusesAccordionListProps> = (props) => {
  const {
    className = '',
    statuses
  } = props;
  return (
    <div className={ cn(classes.wrapper, {}, [ className ]) }>
      {statuses.map(status => (
        <Accordion key={`statuses-list-item-${status.id}`}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            {status.title}
          </AccordionSummary>
          <AccordionDetails>
            <Box className={classes.contentWrapper}>
              <Box className={classes.content}>
                <Typography className={classes.listTitle}>
                  Вознаграждение
                </Typography>
                <Box className={classes.list}>
                  {status.rewards.length > 0
                    ? status.rewards.map( (reward) => (
                      <Typography key={`status-list-item-${status.id}-reward-${reward}`} className={classes.listItem}>
                        {reward}
                      </Typography>
                    ) )
                    :  <Typography className={classes.listItem}>—</Typography>
                  }
                </Box>
              </Box>
              <Box className={classes.content}>
                <Typography className={classes.listTitle}>
                  Условия
                </Typography>
                {status.conditions.length > 0
                  ? status.conditions.map( (condition) => (
                    <Typography key={`status-list-item-${status.id}-condition-${condition}`} className={classes.listItem}>
                      {condition}
                    </Typography>
                  ) )
                  :  <Typography className={classes.listItem}>—</Typography>
                }
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
