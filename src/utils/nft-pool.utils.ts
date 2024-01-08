import { ChainId } from '@baseswapfi/sdk-core';
import { NFTPoolFactory__factory } from '../types/factories/contracts';
import { getBaseswapContractAddress } from './contract.utils';
import { doTransaction } from './transaction.utils';

/**
 * Creates a chain specific instance the NFTPoolFactory contract
 * @param chainId
 * @param signer
 * @returns
 */
export function getNftPoolFactory(chainId: ChainId, signer) {
  return NFTPoolFactory__factory.connect(getBaseswapContractAddress(chainId, 'NftPoolFactory'), signer);
}

/**
 * Creates an NFTPool through the NFTPoolFactory
 * @param depositToken
 * @param chainId
 * @param signer
 * @returns address of the new NFTPool
 */
export async function createNftPool(depositToken: string, chainId: ChainId, signer): Promise<string> {
  const factory = getNftPoolFactory(chainId, signer);
  const txReceipt = await doTransaction(factory.createPool(depositToken));
  const event = txReceipt.events?.find(e => e.event === 'PoolCreated');
  return event?.args?.pool;
}
