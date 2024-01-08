import { ContractTransaction } from 'ethers';

export async function doTransaction(txResponse: Promise<ContractTransaction>, msg = '') {
  try {
    console.log(msg);
    return awaitTransactionComplete(await txResponse);
  } catch (error) {
    throw error;
  }
}

export async function awaitTransactionComplete(txResponse: ContractTransaction, confirmations = 1) {
  try {
    txResponse = await txResponse;
    console.log(`- Starting transaction: ${txResponse.hash}`);
    console.log(
      `- Awaiting transaction receipt with (${confirmations}) confirmations... - ` + new Date().toLocaleString()
    );

    const txReceipt = await txResponse.wait(confirmations);
    console.log('- TransactionReceipt received - ' + new Date().toLocaleString());
    // success
    if (txReceipt.status === 1) {
      console.log(`Transaction successful`);
    }

    return txReceipt;
  } catch (error) {
    throw error; // Throw and try to let this be handled back in the call stack as needed
  }
}
