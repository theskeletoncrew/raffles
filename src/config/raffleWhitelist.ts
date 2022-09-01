import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
  [
    '8W3MC8RRPf5ePVepULHVNBY898e7yhrFTwsKX5GsvyW1',
    {
      name: 'Skull Thought',
      artist: 'Yellow Trash Can',
      description: "Art by Yellow Trash Can's, JittaOnTheTrack",
    },
  ],
  [
    '9RZGj3imfhtBKh6bVzd8oAfZ8xx5pMkM1YKxXW7Fi8ab',
    {
      name: 'Spirits in the jungle',
      artist: 'Jason Wolcott',
      description:
        'The hairs on my arm stood on end as I framed this shot. The Ubud monkey forest in Bali Indonesia has a reputation for being haunted. The cemetery is not part of the tourist experience, but if you know where to look, you will find it…. Or will it find you?',
    },
  ],
  [
    'ARAGaY4RWi79g7rQgEYdQWXVvjTLRzJYQWGABXS8WXin',
    {
      name: 'Blah',
      artist: '',
    },
  ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    'GprsnLZNdtc3rFvvm3mdES2a7ecNJMB9WQF2SVYqyqzw',
    {
      name: 'The Bargain (1/1)',
      artist: 'LOGAN CARROLL',
      description:
        '5400 x 7200 // Digital // Skullana Academy. 2022. The raffle is for a 1/1 with 2 other color variants going to SKULLANA ACADEMY patrons.',
    },
  ],
  [
    '5WFMyWi6q82p91Pnp2BtFhyRFmNvmw8PgSRQARQEEWXr',
    {
      name: 'Spilled Milk (1/3)',
      artist: 'IKAA',
      description:
        'A 1 of 3 edition created by IKAA for SKULLANA ACADEMY. The raffle is for 1 edition of 3, with the other 2 going to SKULLANA ACADEMY patrons.',
    },
  ],
  [
    '5iwbTGaDQiwX8Ny2mLsa8KGWCswnPuiQzsAdpZe3ms4B',
    {
      name: 'Spent my Serotonin (1/3)',
      artist: 'IIISO GHOSTLORD',
      description:
        'This 1/1 is a stand alone NFT not connected to any collection. Created by IIISO GHOSTLORD. The raffle is for 1 edition of 3, with the other 2 going to SKULLANA ACADEMY patrons.',
    },
  ],
  [
    'HyHMTMqHEunBmrzUgBVryL1qgp57yyGCmKZyUY1aB3si',
    {
      name: 'What was that?',
      artist: 'Zen0',
      description:
        "A unique 1/1 created by Zen0m for Skeleton Crew. Monster Friend finds himself surrounded by strangeness. Things don't look quite the same as they usually do... Something hums from around the corner.",
    },
  ],
  [
    '8WUX2o16i7U8RUrNn87ZDfRRd6VACwTk5t5PAoiQgQB6',
    {
      name: 'SKULLS x Just Ape',
      artist: 'Ayyo',
      description:
        'All heart, all guts, all skull. Just Ape. Winner also receives our final WL to the Just Ape mint!',
    },
  ],
  [
    '7xDXyg3sifaCqXbFBepJ53nDMbpHMAPA85brFhCawqWq',
    {
      name: 'Too Many',
      artist: 'Nashotobi',
      description:
        'Even one would be too many, and there are hundreds already.',
    },
  ],
  [
    '8W3MC8RRPf5ePVepULHVNBY898e7yhrFTwsKX5GsvyW1',
    {
      name: 'Skull Thought',
      artist: 'Yellow Trash Can',
      description: "Art by Yellow Trash Can's, JittaOnTheTrack",
    },
  ],
  [
    '9RZGj3imfhtBKh6bVzd8oAfZ8xx5pMkM1YKxXW7Fi8ab',
    {
      name: 'Spirits in the jungle',
      artist: 'Jason Wolcott',
      description:
        'The hairs on my arm stood on end as I framed this shot. The Ubud monkey forest in Bali Indonesia has a reputation for being haunted. The cemetery is not part of the tourist experience, but if you know where to look, you will find it…. Or will it find you?',
    },
  ],
]);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
