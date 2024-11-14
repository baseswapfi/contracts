import { ChainId } from '@baseswapfi/sdk-core';

interface TokensProps {
 eth: {
  name: string;
  address: string;
  symbol: string;
  decimals: number;
  iconUrl: string;
};
 weth: {
  name: string; 
  symbol: string; 
  address: string; 
  addressFormatted: string; 
 }
 wbtc?: string;
 arb?: string;
 mode?: string; 
 op?: string; 
 sonic?: string; 
 coral?: string; 

}

export const TOKEN_CONFIGS: { [chainId in ChainId]?: TokensProps } = {
  [ChainId.ARBITRUM]: {
    weth: {
      name: 'Wrapped Ether', 
      symbol: 'WETH', 
      address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      addressFormatted: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      }, 
    eth: {
      name: 'Ethereum',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      symbol: 'ETH',
      decimals: 18,
      iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    },
    wbtc: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 
    arb: '0x912CE59144191C1204E64559FE8253a0e49E6548', 
  },

   [ChainId.BASE]: {
    weth: {
      name: 'Wrapped Ether', 
      symbol: 'WETH', 
      address: '0x4200000000000000000000000000000000000006',
      addressFormatted: '0x4200000000000000000000000000000000000006',
      }, 
    eth: {
      name: 'Ethereum',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      symbol: 'ETH',
      decimals: 18,
      iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    },
    wbtc: '0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad', //axlwbtc. 
  },

  [ChainId.MODE]: {
    weth: {
      name: 'Wrapped Ether', 
      symbol: 'WETH', 
      address: '0x4200000000000000000000000000000000000006',
      addressFormatted: '0x4200000000000000000000000000000000000006',
    }, 
    eth: {
      name: 'Ethereum',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      symbol: 'ETH',
      decimals: 18,
      iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    },
    wbtc: '0xcdd475325d6f564d27247d1dddbb0dac6fa0a5cf', 
    mode: '0xDfc7C877a950e49D2610114102175A06C2e3167a', 
  },

  [ChainId.OPTIMISM]: {
      weth: {
      name: 'Wrapped Ether', 
      symbol: 'WETH', 
      address: '0x4200000000000000000000000000000000000006',
      addressFormatted: '0x4200000000000000000000000000000000000006',
      }, 
    eth: {
      name: 'Ethereum',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      symbol: 'ETH',
      decimals: 18,
      iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
   },
    wbtc: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
    op: '0x4200000000000000000000000000000000000042',  
   },
  [ChainId.SONEIUM_TESTNET]: {
    weth: {
      name: 'Wrapped Ether', 
      symbol: 'WETH', 
      address: '0x4200000000000000000000000000000000000006',
      addressFormatted: '0x4200000000000000000000000000000000000006',
      }, 
    eth: {
      name: 'Ethereum',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      symbol: 'ETH',
      decimals: 18,
      iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    },
    wbtc: '', 
  },

  [ChainId.SONIC_TESTNET]: {
    weth: {
      name: 'Wrapped Sonic', 
      symbol: 'wSONIC', 
      address: '0x4200000000000000000000000000000000000006',
      addressFormatted: '0x4200000000000000000000000000000000000006',
    }, 
    //placeholder content 
    eth: {
      name: 'S',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      symbol: 'S',
      decimals: 18,
      iconUrl: '',
      },
   sonic: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 
   coral: '0xAF93888cbD250300470A1618206e036E11470149', 
  },

  [ChainId.UNICHAIN]: {
    weth: {
      name: 'Wrapped Ether', 
      symbol: 'WETH', 
      address: '0x4200000000000000000000000000000000000006',
      addressFormatted: '0x4200000000000000000000000000000000000006',
    }, 
    eth: {
      name: 'Ethereum',
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      symbol: 'ETH',
      decimals: 18,
      iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      },
  },
};
