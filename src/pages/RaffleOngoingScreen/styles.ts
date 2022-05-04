import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DeviceType } from '../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: {
      width: '100%',
      height: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionTagline: {
      width: '100%',
      marginBottom: '20px',
    },
    textHighlight: {
      fontWeight: 'bold',
      color: theme.palette.secondary.main,
      marginBottom: '10px',
    },
    topSection: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontWeight: 'bold',
    },
    raffleTitle: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      justifyItems: 'space-between',
    },
    leftTitleSection: {
      width: '10%',
    },
    middleTitleSection: {
      width: '90%',
      justifyContent: 'center',
      textAlign: 'center',
    },
    rightTitleSection: {
      width: '10%',
    },
    backButton: {
      color: 'black',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    mainContent: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    prizesSection: {
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      paddingRight: '40px',
      minHeight: '450px',
      justifyContent: 'center',
      alignItems: 'center',
    },
    prizesHeader: {
      marginBottom: '10px',
    },
    labelPrizeAmount: {
      marginLeft: '5px',
      color: theme.palette.secondary.main,
      textTransform: 'initial',
      '&:hover': {
        textShadow: `0px 0px 5px ${theme.palette.secondary.main}`,
        backgroundColor: 'transparent',
        textDecoration: 'none',
      },
    },
    seeAllPrizesLabel: {},
    detailsSection: ({ device }) => ({
      paddingTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      width: '30%',
      minWidth: device === DeviceType.Phone ? '256px' : '313px',
      maxWidth: device === DeviceType.Phone ? '380px' : '380px',
      maxHeight: '500px',
    }),
    actionSectionContainer: {
      padding: '20px 0 20px 0',
    },
    actionSectionInner: {
      padding: '10px 0',
      width: '90%',
      textAlign: 'center',
    },
    connectToBuyButton: {
      marginTop: '20px',
      width: '80%',
      height: '40px',
      background: '#6435C9',
      fontFamily: 'Druk Wide Web',
      fontWeight: 900,
      fontSize: '11px',
      '&:hover': {
        backgroundColor: '#6435C9',
      },
    },
    scrollIcon: {
      color: theme.palette.common.white,
      transform: `rotate(90deg)`,
      fontSize: '50px',
      opacity: '0.6',
      marginTop: '20px',
      marginBottom: '60px',
    },
    spacer: {
      width: '100%',
      height: '20px',
    },
    spacer2: {
      width: '100%',
      height: '80px',
    },
  })
);
