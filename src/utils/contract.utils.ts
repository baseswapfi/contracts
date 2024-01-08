import { ChainId } from '@baseswapfi/sdk-core';
import { BASESWAP_CONTRACTS, ContractKey } from '../contracts';

export function getBaseswapContractAddress(chainId: ChainId, contract: ContractKey): string {
  return BASESWAP_CONTRACTS[contract][chainId] || '';
}
