import React, { FC, useMemo, useState } from 'react';
import {
  Card,
  CardActions,
  CardClassKey,
  CardMedia,
  PaperProps,
  StandardProps,
  Typography,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { Prize, PrizeType } from '../../../../lib/types';
import { useStyles } from './styles';
import { useViewport } from '../../../../hooks/useViewport';
import ShortenedString from '../../../../components/ShortenedString';
import { DeviceType } from '../../../../providers/ViewportProvider';
import PrizeDetailsModal from '../../../../components/PrizeDetailsModal';
import { Raffle } from '../../../../lib/types';

export interface PrizeCardOngoingProps
  extends StandardProps<PaperProps, CardClassKey> {
  prize: Prize;
  raffle?: Raffle;
  index?: number;
}

const PrizeCardOngoing: FC<PrizeCardOngoingProps> = ({
  prize,
  raffle,
  index,
  className,
  ...otherProps
}) => {
  const { device } = useViewport();
  const classes = useStyles({ device });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageUrl = prize.meta.imageUri;

  const maxPrizeNameLength = useMemo(
    () => (device === DeviceType.Phone ? 21 : 32),
    [device]
  );

  return (
    <>
      <PrizeDetailsModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        prize={prize}
        prizeRank={index}
        raffle={raffle}
      />
      <Card
        onClick={() => {
          setIsModalOpen(true);
        }}
        {...otherProps}
        className={`${classes.root} ${className}`}
      >
        {!isLoaded && (
          <div>
            <Skeleton
              variant="rect"
              animation={'wave'}
              classes={{
                root: classes.media,
              }}
            />
          </div>
        )}
        <CardMedia
          component="img"
          classes={{
            root: classes.media,
          }}
          src={imageUrl}
          alt={prize.mint.name}
          style={isLoaded ? {} : { display: 'none' }}
          onLoad={() => setIsLoaded(true)}
        />
      </Card>
    </>
  );
};

export default PrizeCardOngoing;
