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
  | 'Dividends';

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
  },
  PancakeRouter: {
    [ChainId.BASE]: '0x327Df1E6de05895d2ab08513aaDD9313Fe505d86',
    [ChainId.SCROLL]: '0x8DFAf055e21B16302DBf00815e5b4d9b6042a4Df',
    [ChainId.BASE_GOERLI]: '0x87B90CaFe79A3ec9C1CcBED718E6999155270e03',
  },
  PancakeZapV1: {
    [ChainId.BASE]: '0xc102505248c36f933934d4B2d7579D962a342eBC',
    [ChainId.SCROLL]: '0xB687282AD4Fb8897D5Cd41f3C1A54DeB4cc88625',
    [ChainId.BASE_GOERLI]: '0xd7973b1bC4Bea68b7d2D15a7360DDB94A07c852E',
  },
  PancakeMasterChef: {
    [ChainId.BASE]: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A',
  },

  Multicall: {
    [ChainId.BASE]: '0x942a772191A34040121C69bE6caBFEE6312ab641',
    [ChainId.BASE_GOERLI]: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
    [ChainId.SCROLL_SEPOLIA]: '0x82995F682dc38b17B99079Cf63DF8d263C6D5eE0',
  },

  Multicall2: {
    [ChainId.BASE]: '0x942a772191A34040121C69bE6caBFEE6312ab641',
    [ChainId.BASE_GOERLI]: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
    [ChainId.SCROLL_SEPOLIA]: '0x82995F682dc38b17B99079Cf63DF8d263C6D5eE0',
    [ChainId.SCROLL]: '0x82995F682dc38b17B99079Cf63DF8d263C6D5eE0',
  },
  Multicall3: {
    [ChainId.SCROLL]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  },
  UniMultical: {
    [ChainId.BASE]: '0x091e99cb1C49331a94dD62755D168E941AbD0693',
    [ChainId.BASE_GOERLI]: '0xC5F0F11926d6355273cB66fCf6fB7A5CbD78f848',
    [ChainId.SCROLL]: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A',
  },

  // V3
  UniswapV3Factory: {
    [ChainId.BASE]: '0x38015D05f4fEC8AFe15D7cc0386a126574e8077B',
    [ChainId.BASE_GOERLI]: '0xd4e13e0451D32bf846a77b7C354c7cf611290CfC',
    [ChainId.SCROLL_SEPOLIA]: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720',
    [ChainId.SCROLL]: '0xbF79915e80DE0A361A4F35175BA9bF2e91B10424',
  },
  SwapRouter: {
    [ChainId.BASE]: '0x1B8eea9315bE495187D873DA7773a874545D9D48',
    [ChainId.BASE_GOERLI]: '0x35eE2020dada758d1b8fE89D5D74F61312e9c94E',
    [ChainId.SCROLL_SEPOLIA]: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
    [ChainId.SCROLL]: '0x7FFE23bf32053F84C72Dc686f526c584dAF5f8D6',
  },
  UniveralRouter: {
    [ChainId.BASE]: '0x33446f09E2a70C1C35718903c7c27f97989B33d9',
    [ChainId.BASE_GOERLI]: '0xD3b9f4fe491Ac92AD75B214cfdCb16dc412154E2',
    [ChainId.SCROLL]: '0xA6Fae39901858a6dD51B5068C11348305a031cdF',
  },
  V3Migrator: {
    [ChainId.BASE]: '0x596C5c71A079BddE96f940649C21a39201d4C47b',
  },
  QuoterV2: {
    [ChainId.BASE]: '0x4fDBD73aD4B1DDde594BF05497C15f76308eFfb9',
    [ChainId.BASE_GOERLI]: '0x154184eAe9de0dcac56c804Ffee021e7F2B0B2bf',
    [ChainId.SCROLL_SEPOLIA]: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910',
    [ChainId.SCROLL]: '0x2ee99Be3c520B7Bd64f51641c3e7Ef28950E03B7',
  },
  TickLens: {
    [ChainId.BASE]: '0x49a3A5cf91DE1b78c43Dc1adD03E8A71f1Ea2e30',
    [ChainId.BASE_GOERLI]: '0x4460e525CAbF58d2E8F742482A0D228641abfAF6',
    [ChainId.SCROLL_SEPOLIA]: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
    [ChainId.SCROLL]: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
  },
  NonfungiblePositionManager: {
    [ChainId.BASE]: '0xDe151D5c92BfAA288Db4B67c21CD55d5826bCc93',
    [ChainId.BASE_GOERLI]: '0x4c656A290161CE89538e305075098FE92bDcB5E6',
    [ChainId.SCROLL_SEPOLIA]: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9',
    [ChainId.SCROLL]: '0x396F2cA2a470EfC92511fD3e99833d28D38CFf53',
  },
  NFTDescriptorLibrary: {
    [ChainId.BASE]: '0xC3C7418e738E8B116A89dF0941b13C306bbb0200',
    [ChainId.BASE_GOERLI]: '0xf625015fBc5bBC6253EF7AEA5b0e85Bf8fEC6b2F',
    [ChainId.SCROLL_SEPOLIA]: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
    [ChainId.SCROLL]: '0x4Ab974442D6e67c32E40f44BcDC22388F3F16d9e',
  },
  NonfungibleTokenPositionDescriptor: {
    [ChainId.BASE]: '0x898E49e2cb08C644cE02565f3533eB370F2772Ac',
    [ChainId.BASE_GOERLI]: '0x8fDA3405fbcA054a5a36fCF9b0991C5ef2d6D67b',
    [ChainId.SCROLL_SEPOLIA]: '0x327Df1E6de05895d2ab08513aaDD9313Fe505d86',
    [ChainId.SCROLL]: '0x0321739FafF198f614C93A0EE3d33f3b2B172fe5',
  },
  Permit2: {
    [ChainId.BASE]: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    [ChainId.BASE_GOERLI]: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
    [ChainId.SCROLL]: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
  },

  // Camelot
  MasterChef: {
    [ChainId.BASE]: '0x6Fc0f134a1F20976377b259687b1C15a5d422B47',
    [ChainId.SCROLL_SEPOLIA]: '0xbF79915e80DE0A361A4F35175BA9bF2e91B10424',
  },
  DummyToken: {
    [ChainId.BASE]: '0x29399d824a99789f587a491C59210326e8ef4545',
  },
  NftPoolFactory: {
    [ChainId.BASE]: '0x1d23317069d9a01b99A2B755A4Bb7528450198B8',
    [ChainId.BASE_GOERLI]: '',
    [ChainId.SCROLL_SEPOLIA]: '0x7FFE23bf32053F84C72Dc686f526c584dAF5f8D6',
    [ChainId.SCROLL]: '',
  },
  YieldBooster: {
    [ChainId.BASE]: '0x0F5433c9f1c2E86588304eD09BC79AbEcc89e0de',
    [ChainId.BASE_GOERLI]: '',
    [ChainId.SCROLL_SEPOLIA]: '0xc1e624C810D297FD70eF53B0E08F44FABE468591',
  },
  Dividends: {
    [ChainId.BASE_GOERLI]: '0x6E9776a02fF00d2D0FC986B78B64fAD7414c3B00',
    [ChainId.SCROLL_SEPOLIA]: '0x7bb14ED986Dae0C8423350A7f1C59a31b3C84509',
  },
};