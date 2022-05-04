import { FC, RefObject, useEffect, useMemo } from 'react';
import { Button, Typography } from '@material-ui/core';
import { PublicKey } from '@solana/web3.js';
import { WalletMultiButton } from '@solana/wallet-adapter-material-ui';
import confetti from 'canvas-confetti';

import { Entrant, Raffle } from '../../../../lib/types';
import useCommonStyles from '../../../../assets/styles';
import { useStyles } from './styles';

interface EndedRaffleActionsSectionProps {
  raffle: Raffle;
  userPubkey: PublicKey | undefined;
  entrant: Entrant | undefined;
  entrantWinningTickets: { prizeIndex: number; ticketIndex: number }[];
  scrollRef: RefObject<HTMLDivElement>;
}

const EndedRaffleActionSection: FC<EndedRaffleActionsSectionProps> = ({
  raffle,
  userPubkey,
  entrant,
  entrantWinningTickets,
  scrollRef,
}) => {
  const classes = { ...useCommonStyles(), ...useStyles() };

  const noPrizes = useMemo(() => raffle.prizes.length === 0, [raffle]);
  const winnersRevealed = useMemo(() => !!raffle.randomness, [raffle]);
  const userIsConnected = useMemo(() => !!userPubkey, [userPubkey]);
  const userHasParticipated = useMemo(
    () => (entrant?.tickets.length || 0) > 0,
    [entrant]
  );

  useEffect(() => {
    if (entrantWinningTickets.length === 0) return;
    const confettiTimerId = makeConfetti();
    return () => clearInterval(confettiTimerId);
  }, [entrantWinningTickets.length]);

  if (noPrizes) return <>No prizes to reveal!</>;

  if (!userIsConnected)
    return (
      <>
        <Typography
          variant="h3"
          className={classes.textHighlight}
          style={{
            color: '#6ef600',
            fontFamily: 'Druk Wide Web',
            fontWeight: 900,
          }}
        >
          Winners have been announced.
        </Typography>
        <Typography
          variant="body1"
          style={{
            color: 'white',
            fontFamily: 'Druk Wide Web',
            fontWeight: 900,
          }}
        >
          Connect your wallet to check if you have won any prizes!
        </Typography>
        <WalletMultiButton
          className={`${classes.mainButton} ${classes.connectToBuyButton}`}
        >
          Connect to reveal
        </WalletMultiButton>
      </>
    );

  if (!winnersRevealed)
    return (
      <>
        <Typography
          variant="h3"
          className={classes.textHighlight}
          style={{
            color: '#6ef600',
            fontFamily: 'Druk Wide Web',
            fontWeight: 900,
          }}
        >
          Winners to be announced soon.
        </Typography>
        <Typography
          variant="body1"
          style={{
            color: 'white',
            fontFamily: 'Druk Wide Web',
            fontWeight: 900,
          }}
        >
          Stay tuned!
        </Typography>
      </>
    );

  if (!userHasParticipated)
    return (
      <Typography
        variant="h3"
        style={{
          color: '#6ef600',
          fontFamily: 'Druk Wide Web',
          fontWeight: 900,
        }}
      >
        Uh oh! It looks like you did not participate in this raffle!
      </Typography>
    );

  if (entrantWinningTickets.length === 0)
    return (
      <div>
        <Typography
          variant="h3"
          className={classes.textHighlight}
          style={{
            color: '#6ef600',
            fontFamily: 'Druk Wide Web',
            fontWeight: 900,
          }}
        >
          Sorry, you were not a winner :(
        </Typography>
        <Typography variant="body1" style={{ color: 'white' }}>
          Better luck next time!
        </Typography>
      </div>
    );

  return (
    <div>
      <Typography
        variant="h3"
        className={classes.textHighlight}
        style={{
          color: '#6ef600',
          fontFamily: 'Druk Wide Web',
          fontWeight: 900,
        }}
      >
        Hooray, you won!
      </Typography>
      <div>
        <Typography
          style={{
            color: 'white',
            fontFamily: 'Druk Wide Web',
            fontWeight: 900,
          }}
        >
          <Button
            className={classes.scrollLink}
            variant="text"
            style={{
              color: '#000000',
              fontFamily: 'Druk Wide Web',
              fontWeight: 900,
            }}
            onClick={() =>
              scrollRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          >
            Scroll down
          </Button>
          to claim your prize(s)!
        </Typography>
      </div>
    </div>
  );
};

const makeConfetti = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  let intervalId: ReturnType<typeof setInterval>;
  intervalId = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(intervalId);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);

  return intervalId;
};

export default EndedRaffleActionSection;
