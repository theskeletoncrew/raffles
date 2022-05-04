import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DeviceType } from '../../../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: ({ device }) => ({
      position: 'relative',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 3px 10px 0 #111',
        transform: 'scale3d(1.02, 1.02, 1)',
      },
      '&:active': {
        transform: 'scale3d(1, 1, 1)',
      },
      display: 'flex',
      flexDirection: device === DeviceType.Phone ? 'row' : 'column',
      justifyContent: device === DeviceType.Phone ? 'flex-start' : 'center',
    }),
    media: ({ device }) => ({
      ...(device === DeviceType.Phone
        ? { maxHeight: '25vw' }
        : { maxHeight: '400px' }),
    }),
    prizeInfo: ({ device }) => ({
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: device === DeviceType.Phone ? 'baseline' : 'center',
      fontSize: device === DeviceType.Phone ? '15px' : '15px',
      padding: device === DeviceType.Phone ? ' 8px' : '8px',
    }),
    prizeInfoInner: {},
    prizeNameRow: ({ device }) => ({
      display: 'flex',
      flexDirection: 'row',
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      alignItems: 'center',
      justifyContent: device === DeviceType.Phone ? 'left' : 'center',
      textAlign: device === DeviceType.Phone ? 'left' : 'center',
    }),
    prizeName: {
      color: 'white',
      marginLeft: '5px',
      fontFamily: 'Druk Wide Web',
      fontWeight: 900,
    },
    winnerSection: {
      width: '100%',
      marginTop: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    winnerRow: {
      display: 'flex',
      flexDirection: 'row',
    },
    winnertTicket: {
      marginLeft: '10px',
    },
    winnerPubkey: {
      color: theme.palette.secondary.main,
      marginLeft: '10px',
    },
    cardBadge: ({ device }) => ({
      fontSize: '12px',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '2px 8px',
      position: 'absolute',
      top: '5px',
      right: '0px',
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '2px',
      boxShadow: '0 2px 6px 0 #000',
    }),
  })
);
