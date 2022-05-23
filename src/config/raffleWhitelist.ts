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
    '7xDXyg3sifaCqXbFBepJ53nDMbpHMAPA85brFhCawqWq',
    {
      name: 'Too Many',
      artist: 'Nashotobi',
      description: 'Too Many by Nashotobi',
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
