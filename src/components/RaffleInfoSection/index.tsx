import {
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { FC, useState } from 'react';
import CountUp from 'react-countup';

import { getDisplayAmount } from '../../lib/accounts';
import { Raffle } from '../../lib/types';
import useCommonStyles from '../../assets/styles';
import { useStyles } from './styles';
import { useViewport } from '../../hooks/useViewport';

interface RaffleInfoSectionProps {
  raffle: Raffle;
  userConnected: boolean;
  userTickets?: number[];
}

const RaffleInfoSection: FC<RaffleInfoSectionProps> = ({
  userConnected,
  raffle,
  userTickets,
}) => {
  const { device } = useViewport();
  const classes = { ...useCommonStyles(), ...(useStyles({ device }) as any) };

  return (
    <div className={classes.root}>
      <div className={classes.ticketsSection}>
        <div className={classes.totalTickets}>
          <Typography
            variant="overline"
            className={classes.label}
            style={{
              color: '#6435C9',
              fontWeight: 'bold',
            }}
          >
            Tickets sold
          </Typography>
          <div className={classes.value}>
            <Typography
              variant="h4"
              style={{
                fontSize: '18px',
                fontFamily: 'neue-haas-unica, sans-serif',
              }}
            >
              {raffle.totalTickets}
            </Typography>
            {/* <Typography
              variant="h4"
              className={classes.separator}
              style={{
                fontSize: '18px',
                fontFamily: 'neue-haas-unica, sans-serif',
              }}
            >
              /
            </Typography>
            <Typography
              variant="h4"
              style={{
                fontSize: '18px',
                fontFamily: 'neue-haas-unica, sans-serif',
              }}
            >{`${raffle.entrantsCap}`}</Typography> */}
          </div>
        </div>
        <div className={classes.ticketPrice}>
          <Typography
            variant="overline"
            className={classes.label}
            style={{
              color: '#6435C9',
              fontWeight: 'bold',
            }}
          >
            Ticket Price
          </Typography>
          <Typography
            variant="h4"
            style={{
              fontSize: '18px',
              fontFamily: 'neue-haas-unica, sans-serif',
            }}
          >
            {`${getDisplayAmount(
              raffle.proceeds.ticketPrice,
              raffle.proceeds.mint
            )} ${raffle.proceeds.mint.symbol}`}
          </Typography>
        </div>
      </div>
      {userConnected && (
        <div className={classes.ticketsSection}>
          <div className={classes.myTickets}>
            <Typography
              variant="overline"
              className={classes.label}
              style={{
                color: '#6435C9',
                fontWeight: 'bold',
              }}
            >
              My tickets
            </Typography>
            <div className={classes.value}>
              <Typography
                variant="h4"
                style={{
                  fontSize: '18px',
                  fontFamily: 'neue-haas-unica, sans-serif',
                }}
              >
                {userTickets?.length ?? 0}
              </Typography>
            </div>
          </div>
          {/* {userTickets?.length && (
            <div className={classes.showMyTickets}>
              <Button
                variant="text"
                size="medium"
                disableRipple
                onClick={() => {
                  setOpen(true);
                }}
                className={classes.ticketButton} style={{ textDecoration: 'underline', color: '#6435C9', 
        fontFamily: 'Druk Wide Web',
        fontWeight: 900 }}
              >
                View my tickets
              </Button>
              <UserTicketsDialog
                userTickets={userTickets}
                open={open}
                setOpen={setOpen}
              />        
            </div>
          )} */}
        </div>
      )}
    </div>
  );
};

export default RaffleInfoSection;
