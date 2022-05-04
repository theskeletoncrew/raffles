import { FC } from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import Screen from '../../components/layout/Screen';
import { routes } from '../../router/routes';
import useCommonStyles from '../../assets/styles';
import { useStyles } from './styles';
import { useViewport } from '../../hooks/useViewport';
import { DeviceType } from '../../providers/ViewportProvider';
import ReactiveButton from 'reactive-button';

const LandingScreen: FC = () => {
  const { device } = useViewport();
  const classes = { ...useCommonStyles(), ...(useStyles({ device }) as any) };
  const { push } = useHistory();

  return (
    <div className={classes.root}>
      <Typography
        variant="h1"
        className={classes.titleBar}
        style={{ fontWeight: 'bold' }}
      >
        <br></br>
      </Typography>
      <ReactiveButton
        onClick={() => push(routes.RAFFLES)}
        color={'violet'}
        idleText={'VIEW ALL RAFFLES'}
        style={{
          fontFamily: 'Druk Wide Web',
          fontWeight: 900,
          borderRadius: '5px',
        }}
        size={'normal'}
      />
    </div>
  );
};

const LandingScreenWithLayout = () => (
  <Screen>
    <LandingScreen />
  </Screen>
);

export default LandingScreenWithLayout;
