import { ChainId } from '@baseswapfi/sdk-core';
import { NFTPoolFactory__factory, NFTPool__factory } from '../types/factories/contracts';
import { getBaseswapContractAddress } from './contract.utils';
import { doTransaction } from './transaction.utils';
import { parseUnits } from 'ethers/lib/utils';

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
 * Gets a contract instance of an NFTPool
 * @param nftPoolAddress
 * @param signer
 * @returns
 */
export function getNftPool(
  nftPoolAddress: string,

  signer
) {
  return NFTPool__factory.connect(nftPoolAddress, signer);
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

/**
 * Creates an spNFT position for an NFTPool
 * @param nftPoolAddress
 * @param amount
 * @param lockDurationSeconds
 * @param signer
 * @returns tokenId of the new position
 */
export async function createNftPoolPosition(
  nftPoolAddress: string,
  amount: string,
  lockDurationSeconds: number,
  signer
): Promise<number> {
  const pool = getNftPool(nftPoolAddress, signer);
  const txReceipt = await doTransaction(pool.createPosition(parseUnits(amount), lockDurationSeconds));
  const event = txReceipt?.events?.find(e => e.event === 'CreatePosition');
  const tokenId = event?.args?.tokenId.toNumber();

  return tokenId.toNumber();
}
