import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
  [
    '9RZGj3imfhtBKh6bVzd8oAfZ8xx5pMkM1YKxXW7Fi8ab',
    {
      name: '"Spirits in the jungle" by Jason Wolcott',
    },
  ],
  // [
  //   'ARAGaY4RWi79g7rQgEYdQWXVvjTLRzJYQWGABXS8WXin',
  //   {
  //     name: 'Blah',
  //   },
  // ],
  // [
  //   '5JgAgpWnd9wNcZKwhJvTEbnmZwCEMLsu1LvbCfXBwFvs',
  //   { name: 'x100 your $t',
  //   overviewImageUri: '/resources/tdwos.png',
  //   },
  // ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    '9RZGj3imfhtBKh6bVzd8oAfZ8xx5pMkM1YKxXW7Fi8ab',
    {
      name: '"Spirits in the jungle" by Jason Wolcott',
    },
  ],
  // [
  //   'ARAGaY4RWi79g7rQgEYdQWXVvjTLRzJYQWGABXS8WXin',
  //   {
  //     name: 'Blah',
  //   },
  // ],
]);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
