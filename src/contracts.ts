import { ChainId } from '@baseswapfi/sdk-core';

export type ContractKey =
  | 'Timelock'
  | 'GasOracleL2'
  | 'PancakeFactory'
  | 'PancakeRouter'
  | 'PancakeZapV1'
  | 'PancakeMasterChef'
  | 'Multicall'
  | 'Multicall2'
  | 'Multicall3'
  | 'UniMultical'
  | 'UniswapV3Factory'
  | 'SwapRouter'
  | 'UniveralRouter'
  | 'V3Migrator'
  | 'QuoterV2'
  | 'TickLens'
  | 'NonfungiblePositionManager'
  | 'NFTDescriptorLibrary'
  | 'NonfungibleTokenPositionDescriptor'
  | 'Permit2'
  | 'MasterChef'
  | 'DummyToken'
  | 'NftPoolFactory'
  | 'YieldBooster'
  | 'Dividends'
  | 'UnsupportedProtocol'
  | 'FeeOnTransferDetector';

export const BASESWAP_CONTRACTS: { [contract in ContractKey]: { [chainId in ChainId]?: string } } = {
  Timelock: {
    [ChainId.BASE]: '0x016E71A3e342031f2229F0b7Bf2C5d11fD2713a6',
  },
  GasOracleL2: {
    [ChainId.BASE]: '0x420000000000000000000000000000000000000F',
    [ChainId.SCROLL]: '0x5300000000000000000000000000000000000002',
  },

  // V2
  PancakeFactory: {
    [ChainId.BASE]: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
    [ChainId.SCROLL]: '0x74a52eb08d699CD8BE1d42dA4B241d526B8a8285',
    [ChainId.BASE_GOERLI]: '0x14db9CFcaE4E7F6971034F0E8e4D9Fc3e54CDafE',
    [ChainId.MODE]: '0xfb926356baf861c93c3557d7327dbe8734a71891',
    [ChainId.MODE_TESTNET]: '0xa26655bab784c9bd9daadaaff2a05a93484bf9c7',
    [ChainId.OPTIMISM]: '0x22505cb4D5d10b2C848A9d75C57eA72A66066D8C', // block 125750368
    [ChainId.SONEIUM_TESTNET]: '0x82995F682dc38b17B99079Cf63DF8d263C6D5eE0', // block 2737914
    [ChainId.SONIC_TESTNET]: '0x8DFAf055e21B16302DBf00815e5b4d9b6042a4Df', // block 78538686
  },
  PancakeRouter: {
    [ChainId.BASE]: '0x327Df1E6de05895d2ab08513aaDD9313Fe505d86',
    [ChainId.SCROLL]: '0x8DFAf055e21B16302DBf00815e5b4d9b6042a4Df',
    [ChainId.BASE_GOERLI]: '0x87B90CaFe79A3ec9C1CcBED718E6999155270e03',
    [ChainId.MODE]: '0xc1e624c810d297fd70ef53b0e08f44fabe468591',
    [ChainId.MODE_TESTNET]: '0x9ce528e9a6bd2d489b9bbe2f97f4c8d6a23805f7',
    [ChainId.OPTIMISM]: '0x6D0829dABd4B41e9a999283a11DDa1516F591e86',
    [ChainId.SONEIUM_TESTNET]: '0x74a52eb08d699CD8BE1d42dA4B241d526B8a8285',
    [ChainId.SONIC_TESTNET]: '0xB687282AD4Fb8897D5Cd41f3C1A54DeB4cc88625',
  },
  PancakeZapV1: {
    [ChainId.BASE]: '0xc102505248c36f933934d4B2d7579D962a342eBC',
    [ChainId.SCROLL]: '0xB687282AD4Fb8897D5Cd41f3C1A54DeB4cc88625',
    [ChainId.BASE_GOERLI]: '0xd7973b1bC4Bea68b7d2D15a7360DDB94A07c852E',
    [ChainId.MODE]: '0xbf79915e80de0a361a4f35175ba9bf2e91b10424',
    [ChainId.MODE_TESTNET]: '0x857217b4723bc38ea0d2767d86af0dfb04b0cafe',
    [ChainId.OPTIMISM]: '0xbA38040Af245ca5829B32AF4D4C9be7dB26d8c15',
    [ChainId.SONEIUM_TESTNET]: '0x8DFAf055e21B16302DBf00815e5b4d9b6042a4Df',
    [ChainId.SONIC_TESTNET]: '0x7bb14ED986Dae0C8423350A7f1C59a31b3C84509',
  },
  PancakeMasterChef: {
    [ChainId.BASE]: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A',
  },

  Multicall: {
    [ChainId.BASE]: '0x942a772191A34040121C69bE6caBFEE6312ab641',
    [ChainId.BASE_GOERLI]: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
    [ChainId.SCROLL_SEPOLIA]: '0x82995F682dc38b17B99079Cf63DF8d263C6D5eE0',
    [ChainId.FRAX_TESTNET]: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720',
    [ChainId.MODE]: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720',
    [ChainId.MODE_TESTNET]: '0x8DFAf055e21B16302DBf00815e5b4d9b6042a4Df',
    [ChainId.OPTIMISM]: '0x2dc0e2aa608532da689e89e237df582b783e552c',
    [ChainId.SONIC_TESTNET]: '0x74a52eb08d699CD8BE1d42dA4B241d526B8a8285',
    [ChainId.SONEIUM_TESTNET]: '0xB687282AD4Fb8897D5Cd41f3C1A54DeB4cc88625',
  },

  Multicall2: {
    [ChainId.BASE]: '0x942a772191A34040121C69bE6caBFEE6312ab641',
    [ChainId.BASE_GOERLI]: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
    [ChainId.SCROLL_SEPOLIA]: '0x82995F682dc38b17B99079Cf63DF8d263C6D5eE0',
    [ChainId.SCROLL]: '0x82995F682dc38b17B99079Cf63DF8d263C6D5eE0',
    [ChainId.OPTIMISM]: '0x2dc0e2aa608532da689e89e237df582b783e552c',
    [ChainId.SONIC_TESTNET]: '0x74a52eb08d699CD8BE1d42dA4B241d526B8a8285',
    [ChainId.SONEIUM_TESTNET]: '0xB687282AD4Fb8897D5Cd41f3C1A54DeB4cc88625',
  },
  Multicall3: {
    [ChainId.SCROLL]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  },
  UniMultical: {
    [ChainId.BASE]: '0x091e99cb1C49331a94dD62755D168E941AbD0693',
    [ChainId.BASE_GOERLI]: '0xC5F0F11926d6355273cB66fCf6fB7A5CbD78f848',
    [ChainId.SCROLL]: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A',
    [ChainId.MODE]: '0x7bb14ed986dae0c8423350a7f1c59a31b3c84509',
    [ChainId.MODE_TESTNET]: '0x30d273e96038cc14d1eedf0aa44e77be9caaa9b2',
    [ChainId.OPTIMISM]: '0x1F98415757620B543A52E61c46B32eB19261F984',
    [ChainId.SONIC_TESTNET]: '0x82995F682dc38b17B99079Cf63DF8d263C6D5eE0',
    [ChainId.SONEIUM_TESTNET]: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A',
  },

  // V3
  UniswapV3Factory: {
    [ChainId.BASE]: '0x38015D05f4fEC8AFe15D7cc0386a126574e8077B',
    [ChainId.BASE_GOERLI]: '0xd4e13e0451D32bf846a77b7C354c7cf611290CfC',
    [ChainId.SCROLL_SEPOLIA]: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720',
    [ChainId.SCROLL]: '0xbF79915e80DE0A361A4F35175BA9bF2e91B10424',
    [ChainId.MODE]: '0x6E36FC34eA123044F278d3a9F3819027B21c9c32',
    [ChainId.MODE_TESTNET]: '0xB2ddE46dacFA72Ce778420aAC091A768741F7e71',
    [ChainId.OPTIMISM]: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720', // block 124982239
    [ChainId.SONIC_TESTNET]: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720', // block 75266442
    [ChainId.SONEIUM_TESTNET]: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720', // block 2735067
  },
  SwapRouter: {
    [ChainId.BASE]: '0x1B8eea9315bE495187D873DA7773a874545D9D48',
    [ChainId.BASE_GOERLI]: '0x35eE2020dada758d1b8fE89D5D74F61312e9c94E',
    [ChainId.SCROLL_SEPOLIA]: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
    [ChainId.SCROLL]: '0x7FFE23bf32053F84C72Dc686f526c584dAF5f8D6',
    [ChainId.MODE]: '0x7107112065dAF2EEedD56B06cdF185f3eFFF516D',
    [ChainId.MODE_TESTNET]: '',
    [ChainId.OPTIMISM]: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
    [ChainId.SONIC_TESTNET]: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910',
    [ChainId.SONEIUM_TESTNET]: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
  },
  UniveralRouter: {
    [ChainId.BASE]: '0x33446f09E2a70C1C35718903c7c27f97989B33d9',
    [ChainId.BASE_GOERLI]: '0xD3b9f4fe491Ac92AD75B214cfdCb16dc412154E2',
    [ChainId.SCROLL]: '0xA6Fae39901858a6dD51B5068C11348305a031cdF',
    [ChainId.MODE]: '',
    [ChainId.MODE_TESTNET]: '',
    [ChainId.SONIC_TESTNET]: '0xbF79915e80DE0A361A4F35175BA9bF2e91B10424',
    [ChainId.SONEIUM_TESTNET]: '0xfb926356BAf861c93C3557D7327Dbe8734A71891',
  },
  // For UniversalRouter
  UnsupportedProtocol: {
    [ChainId.BASE]: '',
    [ChainId.MODE]: '0x34fE0774bB38b1c0047BD25694d1979225c35B8b',
    [ChainId.OPTIMISM]: '0x30D273e96038CC14D1eEdf0aa44E77Be9caaa9b2',
    [ChainId.SONIC_TESTNET]: '0xc1e624C810D297FD70eF53B0E08F44FABE468591',
    [ChainId.SONEIUM_TESTNET]: '0x7bb14ED986Dae0C8423350A7f1C59a31b3C84509',
  },
  V3Migrator: {
    [ChainId.BASE]: '0x596C5c71A079BddE96f940649C21a39201d4C47b',
  },
  QuoterV2: {
    [ChainId.BASE]: '0x4fDBD73aD4B1DDde594BF05497C15f76308eFfb9',
    [ChainId.BASE_GOERLI]: '0x154184eAe9de0dcac56c804Ffee021e7F2B0B2bf',
    [ChainId.SCROLL_SEPOLIA]: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910',
    [ChainId.SCROLL]: '0x2ee99Be3c520B7Bd64f51641c3e7Ef28950E03B7',
    [ChainId.MODE]: '0xA642c56a9bCd863E52348798b31A8Db2BCdA5aee',
    [ChainId.MODE_TESTNET]: '',
    [ChainId.OPTIMISM]: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910',
    [ChainId.SONIC_TESTNET]: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
    [ChainId.SONEIUM_TESTNET]: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910',
  },
  TickLens: {
    [ChainId.BASE]: '0x49a3A5cf91DE1b78c43Dc1adD03E8A71f1Ea2e30',
    [ChainId.BASE_GOERLI]: '0x4460e525CAbF58d2E8F742482A0D228641abfAF6',
    [ChainId.SCROLL_SEPOLIA]: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
    [ChainId.SCROLL]: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
    [ChainId.MODE]: '0x62e879c8979694DbC3A4EF1dd324b08Ee3Ac3688',
    [ChainId.MODE_TESTNET]: '',
    [ChainId.OPTIMISM]: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
    [ChainId.SONIC_TESTNET]: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
    [ChainId.SONEIUM_TESTNET]: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
  },
  NonfungiblePositionManager: {
    [ChainId.BASE]: '0xDe151D5c92BfAA288Db4B67c21CD55d5826bCc93',
    [ChainId.BASE_GOERLI]: '0x4c656A290161CE89538e305075098FE92bDcB5E6',
    [ChainId.SCROLL_SEPOLIA]: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9',
    [ChainId.SCROLL]: '0x396F2cA2a470EfC92511fD3e99833d28D38CFf53',
    [ChainId.MODE]: '0xcc3726bCc27f232bC1CaAB40853AEa91ae43C216',
    [ChainId.MODE_TESTNET]: '',
    [ChainId.OPTIMISM]: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9', // block 125278292
    [ChainId.SONIC_TESTNET]: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A', // block 75975300
    [ChainId.SONEIUM_TESTNET]: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9', // block 2736050
  },
  NFTDescriptorLibrary: {
    [ChainId.BASE]: '0xC3C7418e738E8B116A89dF0941b13C306bbb0200',
    [ChainId.BASE_GOERLI]: '0xf625015fBc5bBC6253EF7AEA5b0e85Bf8fEC6b2F',
    [ChainId.SCROLL_SEPOLIA]: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
    [ChainId.SCROLL]: '0x4Ab974442D6e67c32E40f44BcDC22388F3F16d9e',
    [ChainId.MODE]: '0xc94E9aB330353ff6EeF4AB415f4605616CB998aE',
    [ChainId.MODE_TESTNET]: '',
    [ChainId.OPTIMISM]: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
    [ChainId.SONIC_TESTNET]: '0x327Df1E6de05895d2ab08513aaDD9313Fe505d86',
    [ChainId.SONEIUM_TESTNET]: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
  },
  NonfungibleTokenPositionDescriptor: {
    [ChainId.BASE]: '0x898E49e2cb08C644cE02565f3533eB370F2772Ac',
    [ChainId.BASE_GOERLI]: '0x8fDA3405fbcA054a5a36fCF9b0991C5ef2d6D67b',
    [ChainId.SCROLL_SEPOLIA]: '0x327Df1E6de05895d2ab08513aaDD9313Fe505d86',
    [ChainId.SCROLL]: '0x0321739FafF198f614C93A0EE3d33f3b2B172fe5',
    [ChainId.MODE]: '0x36d1Ab9DDD6b59e8F2c01F8e3E9D0AdEcA0E864d',
    [ChainId.MODE_TESTNET]: '',
    [ChainId.OPTIMISM]: '0x74a52eb08d699CD8BE1d42dA4B241d526B8a8285',
    [ChainId.SONIC_TESTNET]: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9',
    [ChainId.SONEIUM_TESTNET]: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
  },
  Permit2: {
    [ChainId.BASE]: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    [ChainId.BASE_GOERLI]: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    [ChainId.SCROLL]: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    [ChainId.MODE]: '0x94265f90728993A3f7089049045ceef566A36bB9',
    [ChainId.MODE_TESTNET]: '',
    [ChainId.OPTIMISM]: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    [ChainId.SONIC_TESTNET]: '',
    [ChainId.SONEIUM_TESTNET]: '',
  },
  FeeOnTransferDetector: {
    [ChainId.BASE]: '0x45ede445bf511f14cc4809d81355d4dbf8d97847',
    [ChainId.BASE_GOERLI]: '0x1222766DA7a1CbCD8451dF214dcD41579a9fb60E',
    [ChainId.ARBITRUM]: '0x1222766DA7a1CbCD8451dF214dcD41579a9fb60E',
    [ChainId.MODE]: '0xc09BF50ac5774f0F1a2406a2D08713683a2Bd3b9',
    [ChainId.OPTIMISM]: '0x96F701640Ff6f1f7541bb9647BFB8c2E0e0d33B0',
    [ChainId.SONIC_TESTNET]: '0x7FFE23bf32053F84C72Dc686f526c584dAF5f8D6',
    [ChainId.SONEIUM_TESTNET]: '0xc1e624C810D297FD70eF53B0E08F44FABE468591',
  },
  // Camelot
  MasterChef: {
    [ChainId.BASE]: '0x6Fc0f134a1F20976377b259687b1C15a5d422B47',
    [ChainId.SCROLL_SEPOLIA]: '0xbF79915e80DE0A361A4F35175BA9bF2e91B10424',
    [ChainId.MODE]: '0x327df1e6de05895d2ab08513aadd9313fe505d86',
    [ChainId.MODE_TESTNET]: '0x396f2ca2a470efc92511fd3e99833d28d38cff53',
  },
  DummyToken: {
    [ChainId.BASE]: '0x29399d824a99789f587a491C59210326e8ef4545',
  },
  NftPoolFactory: {
    [ChainId.BASE]: '0x1d23317069d9a01b99A2B755A4Bb7528450198B8',
    [ChainId.BASE_GOERLI]: '',
    [ChainId.SCROLL_SEPOLIA]: '0x7FFE23bf32053F84C72Dc686f526c584dAF5f8D6',
    [ChainId.SCROLL]: '',
    [ChainId.MODE]: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9',
    [ChainId.MODE_TESTNET]: '0xA6Fae39901858a6dD51B5068C11348305a031cdF',
  },
  YieldBooster: {
    [ChainId.BASE]: '0x0F5433c9f1c2E86588304eD09BC79AbEcc89e0de',
    [ChainId.BASE_GOERLI]: '',
    [ChainId.SCROLL_SEPOLIA]: '0xc1e624C810D297FD70eF53B0E08F44FABE468591',
    [ChainId.MODE]: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
    [ChainId.MODE_TESTNET]: '0x4Ab974442D6e67c32E40f44BcDC22388F3F16d9e',
  },
  Dividends: {
    [ChainId.BASE_GOERLI]: '0x6E9776a02fF00d2D0FC986B78B64fAD7414c3B00',
    [ChainId.SCROLL_SEPOLIA]: '0x7bb14ED986Dae0C8423350A7f1C59a31b3C84509',
  },
};
