import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
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
