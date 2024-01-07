
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { NFTPool, NFTPoolInterface } from "../../contracts/NFTPool";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AddToPosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockDuration",
        type: "uint256",
      },
    ],
    name: "CreatePosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pending",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pendingWETH",
        type: "uint256",
      },
    ],
    name: "HarvestPosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockDuration",
        type: "uint256",
      },
    ],
    name: "LockPosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accRewardsPerShare",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accRewardsPerShareWETH",
        type: "uint256",
      },
    ],
    name: "PoolUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boostPoints",
        type: "uint256",
      },
    ],
    name: "SetBoost",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxGlobalMultiplier",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxBoostMultiplier",
        type: "uint256",
      },
    ],
    name: "SetBoostMultiplierSettings",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "emergencyUnlock",
        type: "bool",
      },
    ],
    name: "SetEmergencyUnlock",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxLockDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxLockMultiplier",
        type: "uint256",
      },
    ],
    name: "SetLockMultiplierSettings",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "SetOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    name: "SetRewardManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAdded",
        type: "bool",
      },
    ],
    name: "SetUnlockOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "xTokenRewardsShare",
        type: "uint256",
      },
    ],
    name: "SetXTokenRewardsShare",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawFromPosition",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_BOOST_MULTIPLIER_LIMIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_GLOBAL_MULTIPLIER_LIMIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_LOCK_MULTIPLIER_LIMIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountToAdd",
        type: "uint256",
      },
    ],
    name: "addToPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "boost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockDuration",
        type: "uint256",
      },
    ],
    name: "createPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyUnlock",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "boostPoints",
        type: "uint256",
      },
    ],
    name: "getMultiplierByBoostPoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lockDuration",
        type: "uint256",
      },
    ],
    name: "getMultiplierByLockDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMultiplierSettings",
    outputs: [
      {
        internalType: "uint256",
        name: "maxGlobalMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxLockDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxLockMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxBoostMultiplier",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolInfo",
    outputs: [
      {
        internalType: "address",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "arxToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "xToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accRewardsPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accRewardsPerShareWETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lpSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lpSupplyWithMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allocPointsARX",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allocPointsWETH",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getStakingPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountWithMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startLockTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebtWETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "boostPoints",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalMultiplier",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "harvestPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "harvestPositionTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "harvestPositionsTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hasDeposits",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMasterChef",
        name: "master_",
        type: "address",
      },
      {
        internalType: "contract IERC20Metadata",
        name: "arxToken",
        type: "address",
      },
      {
        internalType: "contract IxARXToken",
        name: "xToken",
        type: "address",
      },
      {
        internalType: "contract IERC20Metadata",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "contract INFTPoolRewardManager",
        name: "manager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isUnlocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockDuration",
        type: "uint256",
      },
    ],
    name: "lockPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "master",
    outputs: [
      {
        internalType: "contract IMasterChef",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "pendingAdditionalRewards",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "rewardAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "pendingRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "mainAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "wethAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "renewLockPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardManager",
    outputs: [
      {
        internalType: "contract INFTPoolRewardManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxGlobalMultiplier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxBoostMultiplier",
        type: "uint256",
      },
    ],
    name: "setBoostMultiplierSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "emergencyUnlock_",
        type: "bool",
      },
    ],
    name: "setEmergencyUnlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxLockDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxLockMultiplier",
        type: "uint256",
      },
    ],
    name: "setLockMultiplierSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator_",
        type: "address",
      },
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    name: "setRewardManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "xTokenRewardsShare_",
        type: "uint256",
      },
    ],
    name: "setXTokenRewardsShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unboost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountToWithdraw",
        type: "uint256",
      },
    ],
    name: "withdrawFromPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xTokenRewardsShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBooster",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0604052614e2060165562f14280601755612710601855612710601955611f40601a553480156200003057600080fd5b50604080518082018252601c81527f41726269646578207374616b696e6720706f736974696f6e204e465400000000602080830191909152825180840190935260058352641cdc13919560da1b90830152600160005590620000996301ffc9a760e01b6200010a565b8151620000ae90600790602085019062000192565b508051620000c490600890602084019062000192565b50620000d76380ac58cd60e01b6200010a565b620000e9635b5e139f60e01b6200010a565b620000fb63780e9d6360e01b6200010a565b50503360601b6080526200023e565b6001600160e01b031980821614156200016a576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152600160208190526040909120805460ff19169091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620001ca576000855562000215565b82601f10620001e557805160ff191683800117855562000215565b8280016001018555821562000215579182015b8281111562000215578251825591602001919060010190620001f8565b506200022392915062000227565b5090565b5b8082111562000223576000815560010162000228565b60805160601c615d386200026160003980610f515280612aa65250615d386000f3fe608060405234801561001057600080fd5b50600436106103995760003560e01c80636352211e116101e9578063b3ab15fb1161010f578063e3161ddd116100ad578063f2c399921161007c578063f2c3999214610c84578063f2e16b3c14610c8c578063f84ddf0b14610caf578063fdc5f93014610cb757610399565b8063e3161ddd14610c3e578063e61f927d14610c46578063e985e9c514610c4e578063ee97f7f314610c7c57610399565b8063c87b56dd116100e9578063c87b56dd14610bdb578063d1aaef0514610bf8578063d4e32de6146103f1578063d5232dee14610c1b57610399565b8063b3ab15fb14610ae7578063b88d4fde14610b0d578063c45a015514610bd357610399565b8063832c51f6116101875780639016f822116101565780639016f82214610a6b57806395d89b4114610a8e578063a22cb46514610a96578063a6b0b2a814610ac457610399565b8063832c51f614610a105780638380edb714610a3e578063842072af14610a465780638da5cb5b14610a6357610399565b80636c0360eb116101c35780636c0360eb146109895780636e00e2da1461099157806370a08231146109b45780637dcb2abf146109da57610399565b80636352211e1461094757806365dfee331461096457806368e5dab51461098157610399565b806323b872dd116102ce5780634a2567861161026c5780634f6ccce71161023b5780634f6ccce71461089e5780635312ea8e146108bb578063570ca735146108d857806360246c88146108e057610399565b80634a256786146107dd5780634b1fff10146108005780634cd5520b146108085780634f558e791461088157610399565b80632f745c59116102a85780632f745c591461072c5780633e9b453e1461075857806340be7bec1461078457806342842e0e146107a757610399565b806323b872dd146106b45780632c542ede146106ea5780632f38e0421461070d57610399565b806313e46e841161033b57806315799cc51161031557806315799cc5146105d1578063158ef93e1461068757806318160ddd1461068f57806320f8e94e1461069757610399565b806313e46e841461055b5780631459457a14610563578063153ee554146105ab57610399565b8063081812fc11610377578063081812fc1461048857806308521f79146104c1578063095ea7b3146105255780630f4ef8a61461055357610399565b806301ffc9a71461039e5780630332f114146103f157806306fdde031461040b575b600080fd5b6103dd600480360360208110156103b457600080fd5b50357fffffffff0000000000000000000000000000000000000000000000000000000016610cd4565b604080519115158252519081900360200190f35b6103f9610d0f565b60408051918252519081900360200190f35b610413610d15565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561044d578181015183820152602001610435565b50505050905090810190601f16801561047a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104a56004803603602081101561049e57600080fd5b5035610dab565b604080516001600160a01b039092168252519081900360200190f35b6104de600480360360208110156104d757600080fd5b5035610e0d565b60408051998a5260208a0198909852888801969096526060880194909452608087019290925260a086015260c085015260e084015261010083015251908190036101200190f35b6105516004803603604081101561053b57600080fd5b506001600160a01b038135169060200135610e56565b005b6104a5610f31565b6103f9610f40565b610551600480360360a081101561057957600080fd5b506001600160a01b03813581169160208101358216916040820135811691606081013582169160809091013516610f46565b610551600480360360208110156105c157600080fd5b50356001600160a01b0316611119565b6105ee600480360360208110156105e757600080fd5b503561118d565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561063257818101518382015260200161061a565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610671578181015183820152602001610659565b5050505090500194505050505060405180910390f35b6103dd61141a565b6103f961143b565b610551600480360360208110156106ad57600080fd5b503561144c565b610551600480360360608110156106ca57600080fd5b506001600160a01b038135811691602081013590911690604001356114ec565b6105516004803603604081101561070057600080fd5b508035906020013561155e565b6105516004803603602081101561072357600080fd5b50351515611703565b6103f96004803603604081101561074257600080fd5b506001600160a01b038135169060200135611775565b6105516004803603604081101561076e57600080fd5b50803590602001356001600160a01b03166117a0565b6105516004803603604081101561079a57600080fd5b5080359060200135611890565b610551600480360360608110156107bd57600080fd5b506001600160a01b038135811691602081013590911690604001356119d6565b610551600480360360408110156107f357600080fd5b50803590602001356119f1565b6103f9611b10565b6105516004803603604081101561081e57600080fd5b81019060208101813564010000000081111561083957600080fd5b82018360208201111561084b57600080fd5b8035906020019184602083028401116401000000008311171561086d57600080fd5b9193509150356001600160a01b0316611b16565b6103dd6004803603602081101561089757600080fd5b5035611c61565b6103f9600480360360208110156108b457600080fd5b5035611c6c565b610551600480360360208110156108d157600080fd5b5035611c82565b6104a5611e85565b6108e8611e94565b604080516001600160a01b039b8c168152998b1660208b015297909916888801526060880195909552608087019390935260a086019190915260c085015260e08401526101008301526101208201929092529051908190036101400190f35b6104a56004803603602081101561095d57600080fd5b5035612011565b6105516004803603602081101561097a57600080fd5b5035612039565b6104a56120d3565b610413612162565b6103f9600480360360408110156109a757600080fd5b50803590602001356121c3565b6103f9600480360360208110156109ca57600080fd5b50356001600160a01b03166122b5565b6109f7600480360360208110156109f057600080fd5b503561231d565b6040805192835260208301919091528051918290030190f35b610a1861254c565b604080519485526020850193909352838301919091526060830152519081900360800190f35b6103dd61255e565b6103f960048036036020811015610a5c57600080fd5b50356125bb565b6104a5612619565b61055160048036036040811015610a8157600080fd5b5080359060200135612677565b61041361270f565b61055160048036036040811015610aac57600080fd5b506001600160a01b0381351690602001351515612770565b61055160048036036040811015610ada57600080fd5b5080359060200135612893565b61055160048036036020811015610afd57600080fd5b50356001600160a01b03166129bc565b61055160048036036080811015610b2357600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135640100000000811115610b5e57600080fd5b820183602082011115610b7057600080fd5b80359060200191846001830284011164010000000083111715610b9257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550612a30945050505050565b6104a5612aa4565b61041360048036036020811015610bf157600080fd5b5035612ac8565b61055160048036036040811015610c0e57600080fd5b5080359060200135612d49565b61055160048036036040811015610c3157600080fd5b50803590602001356130c0565b610551613138565b6103dd6131a4565b6103dd60048036036040811015610c6457600080fd5b506001600160a01b03813581169160200135166131ac565b6104a56131da565b6103dd6131e9565b61055160048036036040811015610ca257600080fd5b50803590602001356131f2565b6103f9613283565b61055160048036036020811015610ccd57600080fd5b503561328f565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081526001602052604090205460ff165b919050565b613a9881565b60078054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610da15780601f10610d7657610100808354040283529160200191610da1565b820191906000526020600020905b815481529060010190602001808311610d8457829003601f168201915b5050505050905090565b6000610db68261331a565b610df15760405162461bcd60e51b815260040180806020018281038252602c815260200180615c03602c913960400191505060405180910390fd5b506000908152600560205260409020546001600160a01b031690565b6000908152601c60205260409020805460018201546002830154600384015460048501546005860154600687015460078801546008909801549698959794969395929491939092565b6000610e6182612011565b9050806001600160a01b0316836001600160a01b03161415610eb45760405162461bcd60e51b8152600401808060200182810382526021815260200180615c876021913960400191505060405180910390fd5b806001600160a01b0316610ec6613327565b6001600160a01b03161480610ee75750610ee781610ee2613327565b6131ac565b610f225760405162461bcd60e51b8152600401808060200182810382526038815260200180615b356038913960400191505060405180910390fd5b610f2c838361332b565b505050565b6011546001600160a01b031681565b6161a881565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610f995750600d5474010000000000000000000000000000000000000000900460ff16155b610fd6576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b600e80547fffffffffffffffffffffffff00000000000000000000000000000000000000009081166001600160a01b0385811691909117909255600d8054600f805484168986161790819055601080548516898716179081905560118054861688881617905574010000000000000000000000000000000000000000929094168a8616177fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1691909117909155604080517f095ea7b3000000000000000000000000000000000000000000000000000000008152928416600484015260001960248401525192169163095ea7b3916044808201926020929091908290030181600087803b1580156110e657600080fd5b505af11580156110fa573d6000803e3d6000fd5b505050506040513d602081101561111057600080fd5b50505050505050565b6111216133b1565b601180546001600160a01b0383167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517fc05fa79926cd5600b1cc95c8d9d908b7685d3f058c34ea011f8ae3490968ad309181900360200190a150565b6000818152601c6020526040808220600d5482517f06bfa9380000000000000000000000000000000000000000000000000000000081523060048201529251606094859490926001600160a01b0316916306bfa9389160248082019261010092909190829003018186803b15801561120457600080fd5b505afa158015611218573d6000803e3d6000fd5b505050506040513d61010081101561122f57600080fd5b50606001516011546001840154601354604080517fcd5d7b14000000000000000000000000000000000000000000000000000000008152600481018b90526024810193909352604483019190915260648201849052519293506001600160a01b039091169163cd5d7b1491608480820192600092909190829003018186803b1580156112ba57600080fd5b505afa1580156112ce573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160409081528110156112f757600080fd5b810190808051604051939291908464010000000082111561131757600080fd5b90830190602082018581111561132c57600080fd5b825186602082028301116401000000008211171561134957600080fd5b82525081516020918201928201910280838360005b8381101561137657818101518382015260200161135e565b505050509050016040526020018051604051939291908464010000000082111561139f57600080fd5b9083019060208201858111156113b457600080fd5b82518660208202830111640100000000821117156113d157600080fd5b82525081516020918201928201910280838360005b838110156113fe5781810151838201526020016113e6565b5050505090500160405250505080945081955050505050915091565b600d5474010000000000000000000000000000000000000000900460ff1681565b6000611447600361340c565b905090565b600260005414156114a4576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000556114b281613417565b6114ba6134c0565b6114cc816114c783612011565b613714565b6000818152601c602052604090206114e49082613a38565b506001600055565b60026000541415611544576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600055611554838383613b85565b5050600160005550565b600260005414156115b6576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000556115c482613bdc565b60008111611619576040805162461bcd60e51b815260206004820152600860248201527f3020616d6f756e74000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6116216134c0565b600061162c83612011565b90506116388382613714565b6000838152601c6020526040902060038101541561167157611658613be6565b6002820155600381015461166b906125bb565b60048201555b600e54611688906001600160a01b03163385613bea565b81549093506116979084613d0b565b81556012546116a69084613d0b565b6012556116b38185613a38565b6116be828585613d65565b6040805133815260208101859052815186927f2bc3f231118d71058e11ae6ae9f199b789d86a7012a9d45f4c2ed7d7016478c2928290030190a2505060016000555050565b61170b6133b1565b601b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001682151517908190556040805160ff90921615158252517f1545be19b3ba6f2e76454d1b8b59529cbbbdf7af9046fd49bd86c17314a5509d916020908290030190a150565b6001600160a01b03821660009081526002602052604081206117979083613e93565b90505b92915050565b600260005414156117f8576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260005561180682613417565b61182061181283612011565b6001600160a01b0316613e9f565b61185d576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b6118656134c0565b61186f8282613714565b6000828152601c602052604090206118879083613a38565b50506001600055565b600260005414156118e8576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000556118f5613ea5565b6118fe8261331a565b61194f576040805162461bcd60e51b815260206004820152600f60248201527f696e76616c696420746f6b656e49640000000000000000000000000000000000604482015290519081900360640190fd5b6119576134c0565b611962826000613714565b6000828152601c6020526040812060078101549091906119829084613d0b565b6007830181905590506119958285613a38565b60408051828152905185917fe96d35ce795c2d6a754b1bf60d2ea30785c5a460b6d4bf0e5b48190e5084860d919081900360200190a2505060016000555050565b610f2c83838360405180602001604052806000815250612a30565b6119f96133b1565b6161a8821115611a50576040805162461bcd60e51b815260206004820152600860248201527f746f6f2068696768000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b613a988111158015611a76575081611a7360185483613d0b90919063ffffffff16565b11155b611ac7576040805162461bcd60e51b815260206004820152600860248201527f746f6f2068696768000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60168290556019819055604080518381526020810183905281517fde0bddf440a694ffa55b73c57fcb0c32fc9794b258c4e71ca2c867f6d7137f05929181900390910190a15050565b601a5481565b60026000541415611b6e576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600055611b7b6134c0565b8160005b81811015611c55576000858583818110611b9557fe5b905060200201359050611ba781613417565b6000611bb282612011565b9050336001600160a01b038216148015611bd45750336001600160a01b038616145b80611bec5750611bec816001600160a01b0316613e9f565b611c29576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b611c338286613714565b6000828152601c60205260409020611c4b9083613a38565b5050600101611b7f565b50506001600055505050565b600061179a8261331a565b600080611c7a600384613ead565b509392505050565b60026000541415611cda576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600055611ce881613ec9565b6000818152601c6020908152604091829020600d5483517f6f8297af000000000000000000000000000000000000000000000000000000008152336004820152935191936001600160a01b0390911692636f8297af92602480840193829003018186803b158015611d5857600080fd5b505afa158015611d6c573d6000803e3d6000fd5b505050506040513d6020811015611d8257600080fd5b505180611da85750611d92613be6565b60038201546002830154611da591613d0b565b11155b80611db65750611db661255e565b611e07576040805162461bcd60e51b815260206004820152600660248201527f6c6f636b65640000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b8054601254611e169082613f68565b6012556001820154601354611e2a91613f68565b601355611e38836000613fc5565b60408051828152905184917fb073e6fbd06d7557d2c82f414fee57de28e7fb517ecc0afdd6b1fc57034a9cb8919081900360200190a2600e54611554906001600160a01b031633836140aa565b600c546001600160a01b031681565b600080600080600080600080600080600d60009054906101000a90046001600160a01b03166001600160a01b03166306bfa938306040518263ffffffff1660e01b815260040180826001600160a01b031681526020019150506101006040518083038186803b158015611f0657600080fd5b505afa158015611f1a573d6000803e3d6000fd5b505050506040513d610100811015611f3157600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050909192939495965090919250909150905050809950819350829450505050600e60009054906101000a90046001600160a01b0316600f60009054906101000a90046001600160a01b0316601060009054906101000a90046001600160a01b0316896014546015546012546013549950995099509950995099509950995090919293949596979899565b600061179a82604051806060016040528060298152602001615b97602991396003919061412a565b6120416133b1565b612710811115612098576040805162461bcd60e51b815260206004820152600860248201527f746f6f2068696768000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b601a8190556040805182815290517ff31b3ecd846e2f87c144a144c5d3b86e605c7d26e102dbe4d5dbf2b220475bbb9181900360200190a150565b600d54604080517f68e5dab500000000000000000000000000000000000000000000000000000000815290516000926001600160a01b0316916368e5dab5916004808301926020929190829003018186803b15801561213157600080fd5b505afa158015612145573d6000803e3d6000fd5b505050506040513d602081101561215b57600080fd5b5051905090565b600a8054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610da15780601f10610d7657610100808354040283529160200191610da1565b60008115806121d0575082155b156121dd5750600061179a565b60006121e76120d3565b90506001600160a01b0381166121fe5760006122ad565b601954601254604080517fd2eec6ff000000000000000000000000000000000000000000000000000000008152306004820152602481019390935260448301879052606483019190915260848201859052516001600160a01b0383169163d2eec6ff9160a4808301926020929190829003018186803b15801561228057600080fd5b505afa158015612294573d6000803e3d6000fd5b505050506040513d60208110156122aa57600080fd5b50515b949350505050565b60006001600160a01b0382166122fc5760405162461bcd60e51b815260040180806020018281038252602a815260200180615b6d602a913960400191505060405180910390fd5b6001600160a01b038216600090815260026020526040902061179a9061340c565b600d54604080517f06bfa93800000000000000000000000000000000000000000000000000000000815230600482015290516000928392839283928392839283926001600160a01b0316916306bfa93891602480830192610100929190829003018186803b15801561238e57600080fd5b505afa1580156123a2573d6000803e3d6000fd5b505050506040513d6101008110156123b957600080fd5b506060810151608082015160a083015160c084015160e09094015160008d8152601c602052604081206001810154601454601554979d50959b5093995095975090955090929089612408613be6565b6013549110915015158915158061241f5750600089115b806124275750815b80156124305750805b156124d25760006124498c612443613be6565b90613f68565b905060006124618c61245b848d614137565b90613d0b565b905061249461248d601354612487670de0b6b3a76400008561413790919063ffffffff16565b90614190565b8790613d0b565b955060006124a68c61245b858d614137565b90506124cc61248d601354612487670de0b6b3a76400008561413790919063ffffffff16565b95505050505b61250986600a015461245b886009015461245b8a60050154612443670de0b6b3a76400006124878c8e61413790919063ffffffff16565b9c5061253a86600b015461245b8860060154612443670de0b6b3a7640000612487898c61413790919063ffffffff16565b9b505050505050505050505050915091565b60165460175460185460195490919293565b601b5460009060ff16806114475750600d60009054906101000a90046001600160a01b03166001600160a01b031663f2c399926040518163ffffffff1660e01b815260040160206040518083038186803b15801561213157600080fd5b60006125c561255e565b156125d257506000610d0a565b60175415806125df575081155b156125ec57506000610d0a565b60175482106125fe5750601854610d0a565b61179a6017546124878460185461413790919063ffffffff16565b600d54604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290516000926001600160a01b031691638da5cb5b916004808301926020929190829003018186803b15801561213157600080fd5b600260005414156126cf576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000556126dc613ea5565b6126e46134c0565b6126ef826000613714565b6000828152601c6020526040812060078101549091906119829084613f68565b60088054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610da15780601f10610d7657610100808354040283529160200191610da1565b612778613327565b6001600160a01b0316826001600160a01b031614156127de576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b80600660006127eb613327565b6001600160a01b0390811682526020808301939093526040918201600090812091871680825291909352912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169215159290921790915561284d613327565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b61289b612619565b6001600160a01b0316336001600160a01b031614806128c45750600c546001600160a01b031633145b612901576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b613a988111158015612922575060165460195461291f908390613d0b565b11155b612973576040805162461bcd60e51b815260206004820152600860248201527f746f6f2068696768000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60178290556018819055604080518381526020810183905281517f46cf6b9b4ec75e8786b2e93d4beb426d70d56d9b0eb9bfd40e975f9dc59d7703929181900390910190a15050565b6129c46133b1565b600c80546001600160a01b0383167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517fdbebfba65bd6398fb722063efc10c99f624f9cd8ba657201056af918a676d5ee9181900360200190a150565b60026000541415612a88576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600055612a99848484846141f7565b505060016000555050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6060612ad38261331a565b612b0e5760405162461bcd60e51b815260040180806020018281038252602f815260200180615c58602f913960400191505060405180910390fd5b60008281526009602090815260408083208054825160026001831615610100026000190190921691909104601f810185900485028201850190935282815292909190830182828015612ba15780601f10612b7657610100808354040283529160200191612ba1565b820191906000526020600020905b815481529060010190602001808311612b8457829003601f168201915b505050505090506000612bb2612162565b9050805160001415612bc657509050610d0a565b815115612c875780826040516020018083805190602001908083835b60208310612c015780518252601f199092019160209182019101612be2565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310612c495780518252601f199092019160209182019101612c2a565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050610d0a565b80612c918561424f565b6040516020018083805190602001908083835b60208310612cc35780518252601f199092019160209182019101612ca4565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310612d0b5780518252601f199092019160209182019101612cec565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050919050565b60026000541415612da1576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600055612dae61255e565b15612e06578015612e06576040805162461bcd60e51b815260206004820152600e60248201527f6c6f636b732064697361626c6564000000000000000000000000000000000000604482015290519081900360640190fd5b612e0e6134c0565b600e54612e25906001600160a01b03163384613bea565b915081612e79576040805162461bcd60e51b815260206004820152600b60248201527f7a65726f20616d6f756e74000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000612e843361435e565b90506000612e91836125bb565b90506000612eaf612710612487612ea88583613d0b565b8890614137565b9050604051806101800160405280868152602001828152602001612ed1613be6565b8152602001858152602001838152602001612f03670de0b6b3a76400006124876014548661413790919063ffffffff16565b8152602001612f29670de0b6b3a76400006124876015548661413790919063ffffffff16565b81526000602080830182905260408084018790526060808501849052608080860185905260a0958601859052898552601c84529382902086518155928601516001840155908501516002830155840151600382015590830151600482015590820151600582015560c0820151600682015560e0820151600782015561010082015160088201556101208201516009820155610140820151600a82015561016090910151600b90910155601254612fdf9086613d0b565b601255601354612fef9082613d0b565b601355601154604080517fc994e4d5000000000000000000000000000000000000000000000000000000008152600481018490526024810186905290516001600160a01b039092169163c994e4d59160448082019260009290919082900301818387803b15801561305f57600080fd5b505af1158015613073573d6000803e3d6000fd5b5050604080518881526020810188905281518794507fc75220a9dbab7c65d9cc87d8534accb348d3f151ee2afccfb42e6ccf75556f2393509081900390910190a250506001600055505050565b60026000541415613118576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260005561312682613417565b61312e6134c0565b6118878282614380565b60026000541415613190576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260005561319d6134c0565b6001600055565b601354151590565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b600d546001600160a01b031681565b601b5460ff1681565b6002600054141561324a576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260005561325882613417565b6132606134c0565b600061326b83612011565b90506132788184846144eb565b611554818484614767565b6000611447600b614839565b600260005414156132e7576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000556132f581613417565b6132fd6134c0565b6000818152601c60205260409020600301546114e4908290614380565b600061179a60038361483d565b3390565b600081815260056020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416908117909155819061337882612011565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6133b9612619565b6001600160a01b0316336001600160a01b03161461340a576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b565b600061179a82614839565b6134208161331a565b61345b5760405162461bcd60e51b815260040180806020018281038252602c815260200180615b09602c913960400191505060405180910390fd5b6134653382614849565b8061348057503361347582610dab565b6001600160a01b0316145b6134bd576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b50565b601354600d54604080517f06bfa93800000000000000000000000000000000000000000000000000000000815230600482015290516000926001600160a01b0316916306bfa93891602480830192610100929190829003018186803b15801561352857600080fd5b505afa15801561353c573d6000803e3d6000fd5b505050506040513d61010081101561355357600080fd5b5060600151601154604080517fb0a3eb93000000000000000000000000000000000000000000000000000000008152600481018690526024810184905290519293506001600160a01b039091169163b0a3eb939160448082019260009290919082900301818387803b1580156135c857600080fd5b505af11580156135dc573d6000803e3d6000fd5b50505050600080600d60009054906101000a90046001600160a01b03166001600160a01b031663372500ab6040518163ffffffff1660e01b81526004016040805180830381600087803b15801561363257600080fd5b505af1158015613646573d6000803e3d6000fd5b505050506040513d604081101561365c57600080fd5b50805160209091015190925090508115613696576136926136898561248785670de0b6b3a7640000614137565b60145490613d0b565b6014555b80156136c2576136be6136b58561248784670de0b6b3a7640000614137565b60155490613d0b565b6015555b7f17b8644f386d1c7c7138ef98b3c8035622bbe94d7be9b26f71d2654a547c29436136eb613be6565b60145460155460408051938452602084019290925282820152519081900360600190a150505050565b6000828152601c602052604081206001810154600582015460145492939192613751919061244390670de0b6b3a764000090612487908790614137565b9050600061377e8460060154612443670de0b6b3a76400006124876015548861413790919063ffffffff16565b905061378861255e565b806137ac5750613796613be6565b600385015460028601546137a991613d0b565b11155b156137c05760006003850181905560048501555b60008211806137cf5750600081115b806137de575060008460090154115b806137ed5750600084600a0154115b806137fc5750600084600b0154115b156139e457600061381e612710612487601a548661413790919063ffffffff16565b9050600061383d8261244388600a015487613d0b90919063ffffffff16565b9050613856866009015483613d0b90919063ffffffff16565b91506001600160a01b0387166138805760098601829055600a8601819055600b86018390556139e1565b600060098701819055600a8701819055600b87015581156138a8576138a58783614870565b91505b600f546138bf906001600160a01b031688836149a8565b9050613945600d60009054906101000a90046001600160a01b03166001600160a01b0316634b57b0be6040518163ffffffff1660e01b815260040160206040518083038186803b15801561391257600080fd5b505afa158015613926573d6000803e3d6000fd5b505050506040513d602081101561393c57600080fd5b505188856149a8565b925061395387898385614a5b565b601154604080517ff4d1df87000000000000000000000000000000000000000000000000000000008152600481018890526001600160a01b038a81166024830152604482018c90529151919092169163f4d1df8791606480830192600092919082900301818387803b1580156139c857600080fd5b505af11580156139dc573d6000803e3d6000fd5b505050505b50505b604080516001600160a01b038716815260208101849052808201839052905187917f346d3f6bb678628c35d9b7cda69efe48648b87c82045a3a95c23dc19a902ad9b919081900360600190a2505050505050565b6000613a54836004015461245b856000015486600701546121c3565b9050601654811115613a6557506016545b600883018190556000613a89612710612487613a818583613d0b565b875490614137565b905060006013549050613aad8261245b876001015484613f6890919063ffffffff16565b60135560018501829055601454613ad390670de0b6b3a764000090612487908590614137565b6005860155601554613af490670de0b6b3a764000090612487908590614137565b6006860155601154604080517fc994e4d5000000000000000000000000000000000000000000000000000000008152600481018590526024810187905290516001600160a01b039092169163c994e4d59160448082019260009290919082900301818387803b158015613b6657600080fd5b505af1158015613b7a573d6000803e3d6000fd5b505050505050505050565b613b96613b90613327565b82614baa565b613bd15760405162461bcd60e51b8152600401808060200182810382526031815260200180615ca86031913960400191505060405180910390fd5b610f2c838383614c46565b6134803382614baa565b4290565b600080846001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015613c3a57600080fd5b505afa158015613c4e573d6000803e3d6000fd5b505050506040513d6020811015613c6457600080fd5b50519050613c7d6001600160a01b038616853086614d92565b613d0081866001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015613cce57600080fd5b505afa158015613ce2573d6000803e3d6000fd5b505050506040513d6020811015613cf857600080fd5b505190613f68565b9150505b9392505050565b600082820183811015611797576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b613d77836001600160a01b0316613e9f565b15610f2c57604080513360248201526044810184905260648082018490528251808303909101815260849091018252602081810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fe2b36dc3000000000000000000000000000000000000000000000000000000001790528251808401909352600f83527f6e6f6e20696d706c656d656e746564000000000000000000000000000000000090830152600091613e37916001600160a01b03871691614e1a565b9050808060200190516020811015613e4e57600080fd5b5051613e8d576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b50505050565b60006117978383614e29565b3b151590565b6133b96120d3565b6000808080613ebc8686614e8d565b9097909650945050505050565b613ed28161331a565b613f0d5760405162461bcd60e51b815260040180806020018281038252602c815260200180615b09602c913960400191505060405180910390fd5b613f173382614849565b6134bd576040805162461bcd60e51b815260206004820152600960248201527f6e6f74206f776e65720000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600082821115613fbf576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b801561404257613fd36120d3565b6001600160a01b0316635485435433846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561402957600080fd5b505af115801561403d573d6000803e3d6000fd5b505050505b6000828152601c60205260408120818155600181018290556002810182905560038101829055600481018290556005810182905560068101829055600781018290556008810182905560098101829055600a8101829055600b01556140a682614f08565b5050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610f2c908490614fd5565b60006122ad848484615086565b6000826141465750600061179a565b8282028284828161415357fe5b04146117975760405162461bcd60e51b8152600401808060200182810382526021815260200180615be26021913960400191505060405180910390fd5b60008082116141e6576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816141ef57fe5b049392505050565b614208614202613327565b83614baa565b6142435760405162461bcd60e51b8152600401808060200182810382526031815260200180615ca86031913960400191505060405180910390fd5b613e8d84848484615150565b606081614290575060408051808201909152600181527f30000000000000000000000000000000000000000000000000000000000000006020820152610d0a565b8160005b81156142a857600101600a82049150614294565b60008167ffffffffffffffff811180156142c157600080fd5b506040519080825280601f01601f1916602001820160405280156142ec576020820181803683370190505b50859350905060001982015b831561435557600a840660300160f81b8282806001900393508151811061431b57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a840493506142f8565b50949350505050565b600061436a600b6151a2565b614374600b614839565b9050610d0a82826151ab565b61438861255e565b156143da576040805162461bcd60e51b815260206004820152600e60248201527f6c6f636b732064697361626c6564000000000000000000000000000000000000604482015290519081900360640190fd5b6000828152601c60205260408120600381015460028201549192916143fe91613d0b565b9050600061440a613be6565b90508082111561447e5761441e8282613f68565b841015801561442d5750600084115b61447e576040805162461bcd60e51b815260206004820152600760248201527f696e76616c696400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6144888533613714565b60038301849055614498846125bb565b6004840155600283018190556144ae8386613a38565b60408051858152905186917f817ea9dab606b88f1d3b71d35f23e301a95c27058f35c39acf502f471feb03b8919081900360200190a25050505050565b60008111614542576040805162461bcd60e51b8152602060048083019190915260248201527f6e756c6c00000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000828152601c6020908152604091829020600d5483517f6f8297af0000000000000000000000000000000000000000000000000000000081526001600160a01b0388811660048301529451929490911692636f8297af92602480840193829003018186803b1580156145b457600080fd5b505afa1580156145c8573d6000803e3d6000fd5b505050506040513d60208110156145de57600080fd5b50518061460457506145ee613be6565b6003820154600283015461460191613d0b565b11155b80614612575061461261255e565b614663576040805162461bcd60e51b815260206004820152600660248201527f6c6f636b65640000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b80548211156146b9576040805162461bcd60e51b815260206004820152600760248201527f696e76616c696400000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6146c38385613714565b80546146cf9083613f68565b81556012546146de9083613f68565b60125580546147105760018101546013546146f891613f68565b601355600781015461470b908490613fc5565b61471a565b61471a8184613a38565b60408051838152905184917f10b3873e32aa5edce774b02db517f3bde3429d0e97b57b74cb569ba85ce69a58919081900360200190a2600e54613e8d906001600160a01b031685846140aa565b614779836001600160a01b0316613e9f565b15610f2c57604080513360248201526044810184905260648082018490528251808303909101815260849091018252602081810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f34677c7a000000000000000000000000000000000000000000000000000000001790528251808401909352600f83527f6e6f6e20696d706c656d656e746564000000000000000000000000000000000090830152600091613e37916001600160a01b03871691614e1a565b5490565b600061179783836151c5565b600061485482612011565b6001600160a01b0316836001600160a01b031614905092915050565b600f54604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905160009283926001600160a01b03909116916370a0823191602480820192602092909190829003018186803b1580156148d957600080fd5b505afa1580156148ed573d6000803e3d6000fd5b505050506040513d602081101561490357600080fd5b5051905080831115614913578092505b82156149a057601054604080517f5a1d34dc000000000000000000000000000000000000000000000000000000008152600481018690526001600160a01b03878116602483015291519190921691635a1d34dc91604480830192600092919082900301818387803b15801561498757600080fd5b505af115801561499b573d6000803e3d6000fd5b505050505b509092915050565b6000808490506000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156149fd57600080fd5b505afa158015614a11573d6000803e3d6000fd5b505050506040513d6020811015614a2757600080fd5b5051905080841115614a37578093505b8315614a5157614a516001600160a01b03831686866140aa565b5091949350505050565b6000614a6684612011565b9050614a7a816001600160a01b0316613e9f565b15614ba357604080513360248201526001600160a01b038088166044830152606482018790526084820186905260a48083018690528351808403909101815260c49092018352602082810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ffe4ee967000000000000000000000000000000000000000000000000000000001790528351808501909452600f84527f6e6f6e20696d706c656d656e746564000000000000000000000000000000000090840152600092614b4b929185169190614e1a565b9050808060200190516020811015614b6257600080fd5b5051614ba1576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b505b5050505050565b6000614bb58261331a565b614bf05760405162461bcd60e51b815260040180806020018281038252602c815260200180615b09602c913960400191505060405180910390fd5b6000614bfb83612011565b9050806001600160a01b0316846001600160a01b03161480614c365750836001600160a01b0316614c2b84610dab565b6001600160a01b0316145b806122ad57506122ad81856131ac565b826001600160a01b0316614c5982612011565b6001600160a01b031614614c9e5760405162461bcd60e51b8152600401808060200182810382526029815260200180615c2f6029913960400191505060405180910390fd5b6001600160a01b038216614ce35760405162461bcd60e51b8152600401808060200182810382526024815260200180615abf6024913960400191505060405180910390fd5b614cee8383836151dd565b614cf960008261332b565b6001600160a01b0383166000908152600260205260409020614d1b9082615240565b506001600160a01b0382166000908152600260205260409020614d3e908261524c565b50614d4b60038284615258565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052613e8d908590614fd5565b60606122ad848460008561526e565b81546000908210614e6b5760405162461bcd60e51b8152600401808060200182810382526022815260200180615a6b6022913960400191505060405180910390fd5b826000018281548110614e7a57fe5b9060005260206000200154905092915050565b815460009081908310614ed15760405162461bcd60e51b8152600401808060200182810382526022815260200180615bc06022913960400191505060405180910390fd5b6000846000018481548110614ee257fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b6000614f1382612011565b9050614f21816000846151dd565b614f2c60008361332b565b6000828152600960205260409020546002600019610100600184161502019091160415614f6a576000828152600960205260408120614f6a91615a12565b6001600160a01b0381166000908152600260205260409020614f8c9083615240565b50614f986003836153c9565b5060405182906000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600061502a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316614e1a9092919063ffffffff16565b805190915015610f2c5780806020019051602081101561504957600080fd5b5051610f2c5760405162461bcd60e51b815260040180806020018281038252602a815260200180615cd9602a913960400191505060405180910390fd5b600082815260018401602052604081205482816151215760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156150e65781810151838201526020016150ce565b50505050905090810190601f1680156151135780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061513457fe5b9060005260206000209060020201600101549150509392505050565b61515b848484614c46565b615167848484846153d5565b613e8d5760405162461bcd60e51b8152600401808060200182810382526032815260200180615a8d6032913960400191505060405180910390fd5b80546001019055565b6140a68282604051806020016040528060008152506155b1565b60009081526001919091016020526040902054151590565b6151ef836001600160a01b0316613e9f565b15806152035750336001600160a01b038416145b610f2c576040805162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b604482015290519081900360640190fd5b60006117978383615603565b600061179783836156c9565b60006122ad84846001600160a01b038516615713565b6060824710156152af5760405162461bcd60e51b8152600401808060200182810382526026815260200180615ae36026913960400191505060405180910390fd5b6152b885613e9f565b615309576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b602083106153475780518252601f199092019160209182019101615328565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146153a9576040519150601f19603f3d011682016040523d82523d6000602084013e6153ae565b606091505b50915091506153be8282866157aa565b979650505050505050565b60006117978383615810565b60006153e9846001600160a01b0316613e9f565b6153f5575060016122ad565b60006155467f150b7a0200000000000000000000000000000000000000000000000000000000615423613327565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561548a578181015183820152602001615472565b50505050905090810190601f1680156154b75780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001615a8d603291396001600160a01b0388169190614e1a565b9050600081806020019051602081101561555f57600080fd5b50517fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001492505050949350505050565b6155bb83836158e4565b6155c860008484846153d5565b610f2c5760405162461bcd60e51b8152600401808060200182810382526032815260200180615a8d6032913960400191505060405180910390fd5b600081815260018301602052604081205480156156bf578354600019808301919081019060009087908390811061563657fe5b906000526020600020015490508087600001848154811061565357fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061568357fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061179a565b600091505061179a565b60006156d583836151c5565b61570b5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561179a565b50600061179a565b600082815260018401602052604081205480615778575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055613d04565b8285600001600183038154811061578b57fe5b9060005260206000209060020201600101819055506000915050613d04565b606083156157b9575081613d04565b8251156157c95782518084602001fd5b60405162461bcd60e51b81526020600482018181528451602484015284518593919283926044019190850190808383600083156150e65781810151838201526020016150ce565b600081815260018301602052604081205480156156bf578354600019808301919081019060009087908390811061584357fe5b906000526020600020906002020190508087600001848154811061586357fe5b6000918252602080832084546002909302019182556001938401549184019190915583548252898301905260409020908401905586548790806158a257fe5b600082815260208082206002600019909401938402018281556001908101839055929093558881528982019092526040822091909155945061179a9350505050565b6001600160a01b03821661593f576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6159488161331a565b1561599a576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b6159a6600083836151dd565b6001600160a01b03821660009081526002602052604090206159c8908261524c565b506159d560038284615258565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b50805460018160011615610100020316600290046000825580601f10615a3857506134bd565b601f0160209004906000526020600020908101906134bd91905b80821115615a665760008155600101615a52565b509056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e6473536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665645361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220c76272975b9b7c02c92f8821c74774f761a9a101a1d9647a56424f321604ac6164736f6c63430007060033";

type NFTPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTPool__factory extends ContractFactory {
  constructor(...args: NFTPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTPool> {
    return super.deploy(overrides || {}) as Promise<NFTPool>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTPool {
    return super.attach(address) as NFTPool;
  }
  override connect(signer: Signer): NFTPool__factory {
    return super.connect(signer) as NFTPool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTPoolInterface {
    return new utils.Interface(_abi) as NFTPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTPool {
    return new Contract(address, _abi, signerOrProvider) as NFTPool;
  }
}
