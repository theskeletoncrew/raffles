import React, { FC } from 'react';
import {
  Backdrop,
  Button,
  Fade,
  IconButton,
  Modal,
  Typography,
} from '@material-ui/core';

import { useViewport } from '../../hooks/useViewport';
import { Prize, PrizeType, Raffle } from '../../lib/types';
import { useStyles } from './styles';
import { shortenPubkeyString } from '../../lib/utils';
import { Close, Launch } from '@material-ui/icons';
import Spacer from '../Spacer';
import { DeviceType } from '../../providers/ViewportProvider';

interface PrizeDetailsModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  prize: Prize;
  prizeRank?: number;
  raffle?: Raffle;
}

const PrizeDetailsModal: FC<PrizeDetailsModalProps> = ({
  isOpen,
  setIsOpen,
  prize,
  prizeRank,
  raffle,
}) => {
  const { device } = useViewport();
  const classes = useStyles({ device });

  const imageUrl = prize.meta.imageUri;

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      className={classes.modal}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.content}>
          <div className={classes.header}>
            <IconButton size="small" onClick={() => setIsOpen(false)}>
              <Close style={{ color: '#6ef600' }} />
            </IconButton>
          </div>
          <div className={classes.body}>
            <div className={classes.contentLeft}>
              <img
                src={imageUrl}
                className={classes.media}
                alt={prize.mint.name}
              />
            </div>
            <div className={classes.contentRight}>
              <div>
                <Typography
                  variant="overline"
                  style={{
                    color: '#6ef600',
                    fontFamily: 'Druk Wide Web',
                    fontWeight: 900,
                  }}
                >
                  TITLE
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Druk Wide Web',
                    fontWeight: 900,
                  }}
                >
                  {prize.mint.name}
                </Typography>
              </div>
              <Spacer height={device === DeviceType.Phone ? '5px' : '10px'} />

              {raffle && (
                <>
                  <div>
                    <Typography
                      variant="overline"
                      style={{
                        color: '#6ef600',
                        fontFamily: 'Druk Wide Web',
                        fontWeight: 900,
                      }}
                    >
                      ARTIST
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: '#FFFFFF',
                        fontFamily: 'neue-haas-unica, sans-serif',
                        fontSize: '13px',
                      }}
                    >
                      {raffle.metadata.artist}
                    </Typography>
                  </div>
                  <Spacer
                    height={device === DeviceType.Phone ? '5px' : '10px'}
                  />

                  <div>
                    <Typography
                      variant="overline"
                      style={{
                        color: '#6ef600',
                        fontFamily: 'Druk Wide Web',
                        fontWeight: 900,
                      }}
                    >
                      DESCRIPTION
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: '#FFFFFF',
                        fontFamily: 'neue-haas-unica, sans-serif',
                        fontSize: '13px',
                      }}
                    >
                      {`${raffle.metadata.description}`}
                    </Typography>
                  </div>
                  <Spacer
                    height={device === DeviceType.Phone ? '5px' : '10px'}
                  />
                </>
              )}

              {prizeRank !== undefined && (
                <>
                  <div>
                    <Typography
                      variant="overline"
                      style={{
                        color: '#6ef600',
                        fontFamily: 'Druk Wide Web',
                        fontWeight: 900,
                      }}
                    >
                      Prize rank
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: '#FFFFFF',
                        fontFamily: 'neue-haas-unica, sans-serif',
                        fontSize: '13px',
                      }}
                    >
                      {prizeRank + 1}
                    </Typography>
                  </div>
                  <Spacer
                    height={device === DeviceType.Phone ? '5px' : '10px'}
                  />
                </>
              )}
              <div>
                <Typography
                  variant="overline"
                  style={{
                    color: '#6ef600',
                    fontFamily: 'Druk Wide Web',
                    fontWeight: 900,
                  }}
                >
                  Mint address
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'neue-haas-unica, sans-serif',
                    fontSize: '13px',
                  }}
                >
                  {prize.mint.publicKey.toString()}
                </Typography>
              </div>
              <Spacer height={device === DeviceType.Phone ? '5px' : '10px'} />
              <Button
                variant="text"
                size="small"
                disableRipple
                onClick={() => {
                  var win = window.open(
                    `https://solscan.io/token/${prize.mint.publicKey.toString()}`,
                    '_blank'
                  );
                  win?.focus();
                }}
                className={classes.ticketButton}
                style={{
                  color: '#6ef600',
                  fontFamily: 'Druk Wide Web',
                  fontWeight: 900,
                  marginLeft: '-6px',
                }}
              >
                View on Solscan{' '}
                <Launch
                  style={{
                    height: '17px',
                    marginLeft: '5px',
                  }}
                />
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default PrizeDetailsModal;
