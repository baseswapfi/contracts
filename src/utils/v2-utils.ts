import { ChainId } from '@baseswapfi/sdk-core';
import { PancakeFactory__factory } from '../types/factories/contracts';
import { getBaseswapContractAddress } from './contract.utils';

export function getV2Factory(chainId: ChainId, signerOrProvider) {
  return PancakeFactory__factory.connect(getBaseswapContractAddress(chainId, 'PancakeFactory'), signerOrProvider);
}
