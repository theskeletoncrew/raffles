import { Theme } from '@material-ui/core';
import { makeStyles, darken } from '@material-ui/core/styles';
import { Style } from '@material-ui/icons';

export const useStyles = makeStyles<Theme, { isCurrent: boolean }>(
  (theme: Theme) => ({
    navButtons: ({ isCurrent }) => ({
      fontSize: '16px',
      fontFamily: 'Druk Wide Web',
      fontWeight: 900,
      textTransform: 'none',
      color: 'black',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }),
  })
);
