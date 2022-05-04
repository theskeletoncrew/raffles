import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeviceType } from '../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: ({ device }) => ({
      height: '420px',
      width: '280px',
      position: 'relative',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 3px 10px 0 #111',
        transform: 'scale3d(1.02, 1.02, 1)',
      },
      '&:active': {
        transform: 'scale3d(1, 1, 1)',
      },
    }),
    media: {
      height: '250px',
      minHeight: '250px',
    },
    raffleInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: '13px',
      padding: '15px',
    },
    cardLabel: {
      fontSize: '14px',
      color: '#6ef600',
      textTransform: 'uppercase',
    },
    detailsRow1: {
      color: 'white',
      textTransform: 'uppercase',
      marginBottom: '10px',
      fontFamily: 'Druk Wide Web',
      fontWeight: 900,
    },
    detailsRow2: {
      color: theme.palette.common.white,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      marginBottom: '10px',
    },
    detailsRow3: {
      color: theme.palette.common.white,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    label: {
      fontSize: '10px',
      color: '#777',
    },
    ticketsSold: {
      width: '50%',
    },
    endingIn: {
      width: '50%',
    },
    ticketPrice: {
      width: '80%',
    },
    goToRaffle: {
      color: 'white',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    cardPrizesBadge: {
      fontSize: '11px',
      width: '100px',
      textAlign: 'center',
      padding: '2px',
      position: 'absolute',
      top: '5px',
      left: '5px',
      color: 'black',
      backgroundColor: '#6ef600',
      borderRadius: '2px',
      boxShadow: '0 2px 6px 0 #000',
      textTransform: 'uppercase',
      fontFamily: 'Druk Wide Web',
      fontWeight: 900,
    },
    cardEndedBadge: {
      fontSize: '11px',
      width: '100px',
      textAlign: 'center',
      padding: '2px',
      position: 'absolute',
      top: '5px',
      right: '5px',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: '2px',
      boxShadow: '0 2px 6px 0 #000',
      textTransform: 'uppercase',
      fontFamily: 'Druk Wide Web',
      fontWeight: 900,
    },
  })
);
