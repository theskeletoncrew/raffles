import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '15px 20px 15px 20px',
  },
  titleSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: '15px',
  },
  amountLabel: {
    width: '100%',
    display: 'flex',
  },
  ticketAmountSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlign: 'left',
    marginBottom: '15px',
  },
  ticketAmountSectionLeft: {
    width: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ticketAmountSectionMiddle: {
    maxWidth: '120px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ticketAmountSectionRight: {
    width: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  changeTicketAmountButton: {
    color: 'white',
  },
  ticketAmountTextField: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
    '& .MuiOutlinedInput-input': {
      color: 'white',
      textAlign: 'center',
      fontSize: '15px',
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: '0px',
    },
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: '0px',
    },
  },
  maxButton: {
    color: theme.palette.primary.main,
    fontSize: '15px',
    width: '30px',
    minWidth: '30px',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  priceSection: {
    width: '100%',
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '10px',
  },
  priceLabel: {
    margin: '-5px 0 -5px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paymentOptionSection: {
    width: '100%',
    display: 'flex',
  },
  basketPrice: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  paymentOptionSelect: {
    width: '100%',
    height: '50px',
    marginTop: '-10px',
    padding: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  paymentOptionSelection: {
    padding: '0',
    margin: '-8px 0 0 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentOptionMenu: {
    padding: '0 10px 0 0',
    margin: '5px 10px 5px 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  paymentOptionLogoContainer: {
    height: '30px',
    width: '30px',
    margin: '5px 5px 5px 5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paymentOptionLogo: {
    height: '100%',
    borderRadius: '50%',
  },

  buySection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  purchaseButtonContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  purchaseButtonContentLeft: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
  },
  purchaseButtonContentMiddle: {
    width: '60%',
  },
  purchaseButtonContentRight: {
    width: '20%',
  },
  purchaseSpinner: {
    height: '50px',
    color: theme.palette.secondary.main,
  },
  walletBalance: {
    marginTop: '10px',
    fontSize: '12px',
    color: '#aaa',
    textAlign: 'center',
  },
  countdown: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0px',
    marginBottom: '10px',
    color: '#A442B8',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  buyButton: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Druk Wide Web',
    fontWeight: 900,
    background: '#6435C9',
    color: 'white',
    '&:hover': {
      backgroundColor: '#6435C9',
    },
  },
}));
