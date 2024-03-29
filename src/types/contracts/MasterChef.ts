/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface MasterChefInterface extends utils.Interface {
  functions: {
    "WETH()": FunctionFragment;
    "activePoolsLength()": FunctionFragment;
    "add(address,uint256,uint256,bool)": FunctionFragment;
    "addUnlockOperator(address)": FunctionFragment;
    "claimRewards()": FunctionFragment;
    "emergencyUnlock()": FunctionFragment;
    "emissionRates()": FunctionFragment;
    "getActivePoolAddressByIndex(uint256)": FunctionFragment;
    "getPoolAddressByIndex(uint256)": FunctionFragment;
    "getPoolInfo(address)": FunctionFragment;
    "isUnlockOperator(address)": FunctionFragment;
    "massUpdatePools()": FunctionFragment;
    "owner()": FunctionFragment;
    "poolsLength()": FunctionFragment;
    "protocolToken()": FunctionFragment;
    "removeUnlockOperator(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "set(address,uint256,uint256,bool)": FunctionFragment;
    "setEmergencyUnlock(bool)": FunctionFragment;
    "setWethRewardRate(uint256)": FunctionFragment;
    "setYieldBooster(address)": FunctionFragment;
    "startTime()": FunctionFragment;
    "totalAllocPoints()": FunctionFragment;
    "totalAllocPointsWETH()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasury()": FunctionFragment;
    "updatePool(address)": FunctionFragment;
    "updateTreasury(address)": FunctionFragment;
    "wethPerSecond()": FunctionFragment;
    "wethToken()": FunctionFragment;
    "withdrawToken(address)": FunctionFragment;
    "yieldBooster()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "WETH"
      | "activePoolsLength"
      | "add"
      | "addUnlockOperator"
      | "claimRewards"
      | "emergencyUnlock"
      | "emissionRates"
      | "getActivePoolAddressByIndex"
      | "getPoolAddressByIndex"
      | "getPoolInfo"
      | "isUnlockOperator"
      | "massUpdatePools"
      | "owner"
      | "poolsLength"
      | "protocolToken"
      | "removeUnlockOperator"
      | "renounceOwnership"
      | "set"
      | "setEmergencyUnlock"
      | "setWethRewardRate"
      | "setYieldBooster"
      | "startTime"
      | "totalAllocPoints"
      | "totalAllocPointsWETH"
      | "transferOwnership"
      | "treasury"
      | "updatePool"
      | "updateTreasury"
      | "wethPerSecond"
      | "wethToken"
      | "withdrawToken"
      | "yieldBooster"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "activePoolsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "add",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addUnlockOperator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyUnlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emissionRates",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getActivePoolAddressByIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolAddressByIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isUnlockOperator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "massUpdatePools",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeUnlockOperator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setEmergencyUnlock",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setWethRewardRate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setYieldBooster",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalAllocPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalAllocPointsWETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTreasury",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "wethPerSecond",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wethToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "yieldBooster",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "activePoolsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addUnlockOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyUnlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emissionRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActivePoolAddressByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolAddressByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isUnlockOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "massUpdatePools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeUnlockOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setEmergencyUnlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWethRewardRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setYieldBooster",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocPointsWETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wethPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wethToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "yieldBooster",
    data: BytesLike
  ): Result;

  events: {
    "ClaimRewards(address,uint256,uint256)": EventFragment;
    "Harvest(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PoolAdded(address,uint256)": EventFragment;
    "PoolSet(address,uint256,uint256)": EventFragment;
    "PoolUpdated(address,uint256,uint256,uint256)": EventFragment;
    "SetEmergencyUnlock(bool)": EventFragment;
    "SetYieldBooster(address,address)": EventFragment;
    "TokenWithdraw(address,uint256)": EventFragment;
    "TreasuryUpdated(address)": EventFragment;
    "WethRateUpdated(uint256)": EventFragment;
    "WethUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimRewards"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetEmergencyUnlock"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetYieldBooster"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreasuryUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WethRateUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WethUpdated"): EventFragment;
}

export interface ClaimRewardsEventObject {
  poolAddress: string;
  amount: BigNumber;
  amountWETH: BigNumber;
}
export type ClaimRewardsEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  ClaimRewardsEventObject
>;

export type ClaimRewardsEventFilter = TypedEventFilter<ClaimRewardsEvent>;

export interface HarvestEventObject {
  amount: BigNumber;
}
export type HarvestEvent = TypedEvent<[BigNumber], HarvestEventObject>;

export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PoolAddedEventObject {
  poolAddress: string;
  allocPoint: BigNumber;
}
export type PoolAddedEvent = TypedEvent<
  [string, BigNumber],
  PoolAddedEventObject
>;

export type PoolAddedEventFilter = TypedEventFilter<PoolAddedEvent>;

export interface PoolSetEventObject {
  poolAddress: string;
  allocPoint: BigNumber;
  allocPointsWETH: BigNumber;
}
export type PoolSetEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  PoolSetEventObject
>;

export type PoolSetEventFilter = TypedEventFilter<PoolSetEvent>;

export interface PoolUpdatedEventObject {
  poolAddress: string;
  reserve: BigNumber;
  reserveWETH: BigNumber;
  lastRewardTime: BigNumber;
}
export type PoolUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  PoolUpdatedEventObject
>;

export type PoolUpdatedEventFilter = TypedEventFilter<PoolUpdatedEvent>;

export interface SetEmergencyUnlockEventObject {
  emergencyUnlock: boolean;
}
export type SetEmergencyUnlockEvent = TypedEvent<
  [boolean],
  SetEmergencyUnlockEventObject
>;

export type SetEmergencyUnlockEventFilter =
  TypedEventFilter<SetEmergencyUnlockEvent>;

export interface SetYieldBoosterEventObject {
  previousYieldBooster: string;
  newYieldBooster: string;
}
export type SetYieldBoosterEvent = TypedEvent<
  [string, string],
  SetYieldBoosterEventObject
>;

export type SetYieldBoosterEventFilter = TypedEventFilter<SetYieldBoosterEvent>;

export interface TokenWithdrawEventObject {
  token: string;
  amount: BigNumber;
}
export type TokenWithdrawEvent = TypedEvent<
  [string, BigNumber],
  TokenWithdrawEventObject
>;

export type TokenWithdrawEventFilter = TypedEventFilter<TokenWithdrawEvent>;

export interface TreasuryUpdatedEventObject {
  treasury: string;
}
export type TreasuryUpdatedEvent = TypedEvent<
  [string],
  TreasuryUpdatedEventObject
>;

export type TreasuryUpdatedEventFilter = TypedEventFilter<TreasuryUpdatedEvent>;

export interface WethRateUpdatedEventObject {
  rate: BigNumber;
}
export type WethRateUpdatedEvent = TypedEvent<
  [BigNumber],
  WethRateUpdatedEventObject
>;

export type WethRateUpdatedEventFilter = TypedEventFilter<WethRateUpdatedEvent>;

export interface WethUpdatedEventObject {
  weth: string;
}
export type WethUpdatedEvent = TypedEvent<[string], WethUpdatedEventObject>;

export type WethUpdatedEventFilter = TypedEventFilter<WethUpdatedEvent>;

export interface MasterChef extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MasterChefInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    WETH(overrides?: CallOverrides): Promise<[string]>;

    activePoolsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    add(
      nftPool: PromiseOrValue<string>,
      allocPoints: PromiseOrValue<BigNumberish>,
      allocPointsWETH: PromiseOrValue<BigNumberish>,
      withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addUnlockOperator(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    emergencyUnlock(overrides?: CallOverrides): Promise<[boolean]>;

    emissionRates(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { mainRate: BigNumber; wethRate: BigNumber }
    >;

    getActivePoolAddressByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPoolAddressByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPoolInfo(
      _poolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        poolAddress: string;
        allocPoints: BigNumber;
        allocPointsWETH: BigNumber;
        lastRewardTime: BigNumber;
        reserve: BigNumber;
        reserveWETH: BigNumber;
        poolEmissionRate: BigNumber;
        poolEmissionRateWETH: BigNumber;
      }
    >;

    isUnlockOperator(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    massUpdatePools(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poolsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    protocolToken(overrides?: CallOverrides): Promise<[string]>;

    removeUnlockOperator(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    set(
      poolAddress: PromiseOrValue<string>,
      allocPoints: PromiseOrValue<BigNumberish>,
      allocPointsWETH: PromiseOrValue<BigNumberish>,
      withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setEmergencyUnlock(
      emergencyUnlock_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWethRewardRate(
      wethRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setYieldBooster(
      yieldBooster_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalAllocPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalAllocPointsWETH(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    updatePool(
      nftPool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateTreasury(
      _treasury: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wethPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    wethToken(overrides?: CallOverrides): Promise<[string]>;

    withdrawToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    yieldBooster(overrides?: CallOverrides): Promise<[string]>;
  };

  WETH(overrides?: CallOverrides): Promise<string>;

  activePoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

  add(
    nftPool: PromiseOrValue<string>,
    allocPoints: PromiseOrValue<BigNumberish>,
    allocPointsWETH: PromiseOrValue<BigNumberish>,
    withUpdate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addUnlockOperator(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimRewards(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  emergencyUnlock(overrides?: CallOverrides): Promise<boolean>;

  emissionRates(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { mainRate: BigNumber; wethRate: BigNumber }
  >;

  getActivePoolAddressByIndex(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getPoolAddressByIndex(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getPoolInfo(
    _poolAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      poolAddress: string;
      allocPoints: BigNumber;
      allocPointsWETH: BigNumber;
      lastRewardTime: BigNumber;
      reserve: BigNumber;
      reserveWETH: BigNumber;
      poolEmissionRate: BigNumber;
      poolEmissionRateWETH: BigNumber;
    }
  >;

  isUnlockOperator(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  massUpdatePools(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  poolsLength(overrides?: CallOverrides): Promise<BigNumber>;

  protocolToken(overrides?: CallOverrides): Promise<string>;

  removeUnlockOperator(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  set(
    poolAddress: PromiseOrValue<string>,
    allocPoints: PromiseOrValue<BigNumberish>,
    allocPointsWETH: PromiseOrValue<BigNumberish>,
    withUpdate: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setEmergencyUnlock(
    emergencyUnlock_: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWethRewardRate(
    wethRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setYieldBooster(
    yieldBooster_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startTime(overrides?: CallOverrides): Promise<BigNumber>;

  totalAllocPoints(overrides?: CallOverrides): Promise<BigNumber>;

  totalAllocPointsWETH(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  updatePool(
    nftPool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateTreasury(
    _treasury: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wethPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  wethToken(overrides?: CallOverrides): Promise<string>;

  withdrawToken(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  yieldBooster(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    WETH(overrides?: CallOverrides): Promise<string>;

    activePoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      nftPool: PromiseOrValue<string>,
      allocPoints: PromiseOrValue<BigNumberish>,
      allocPointsWETH: PromiseOrValue<BigNumberish>,
      withUpdate: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    addUnlockOperator(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    claimRewards(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        rewardAmount: BigNumber;
        amountWETH: BigNumber;
      }
    >;

    emergencyUnlock(overrides?: CallOverrides): Promise<boolean>;

    emissionRates(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { mainRate: BigNumber; wethRate: BigNumber }
    >;

    getActivePoolAddressByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getPoolAddressByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getPoolInfo(
      _poolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        poolAddress: string;
        allocPoints: BigNumber;
        allocPointsWETH: BigNumber;
        lastRewardTime: BigNumber;
        reserve: BigNumber;
        reserveWETH: BigNumber;
        poolEmissionRate: BigNumber;
        poolEmissionRateWETH: BigNumber;
      }
    >;

    isUnlockOperator(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    massUpdatePools(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    poolsLength(overrides?: CallOverrides): Promise<BigNumber>;

    protocolToken(overrides?: CallOverrides): Promise<string>;

    removeUnlockOperator(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    set(
      poolAddress: PromiseOrValue<string>,
      allocPoints: PromiseOrValue<BigNumberish>,
      allocPointsWETH: PromiseOrValue<BigNumberish>,
      withUpdate: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setEmergencyUnlock(
      emergencyUnlock_: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setWethRewardRate(
      wethRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setYieldBooster(
      yieldBooster_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPoints(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPointsWETH(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;

    updatePool(
      nftPool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTreasury(
      _treasury: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    wethPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    wethToken(overrides?: CallOverrides): Promise<string>;

    withdrawToken(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    yieldBooster(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ClaimRewards(address,uint256,uint256)"(
      poolAddress?: PromiseOrValue<string> | null,
      amount?: null,
      amountWETH?: null
    ): ClaimRewardsEventFilter;
    ClaimRewards(
      poolAddress?: PromiseOrValue<string> | null,
      amount?: null,
      amountWETH?: null
    ): ClaimRewardsEventFilter;

    "Harvest(uint256)"(amount?: null): HarvestEventFilter;
    Harvest(amount?: null): HarvestEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "PoolAdded(address,uint256)"(
      poolAddress?: PromiseOrValue<string> | null,
      allocPoint?: null
    ): PoolAddedEventFilter;
    PoolAdded(
      poolAddress?: PromiseOrValue<string> | null,
      allocPoint?: null
    ): PoolAddedEventFilter;

    "PoolSet(address,uint256,uint256)"(
      poolAddress?: PromiseOrValue<string> | null,
      allocPoint?: null,
      allocPointsWETH?: null
    ): PoolSetEventFilter;
    PoolSet(
      poolAddress?: PromiseOrValue<string> | null,
      allocPoint?: null,
      allocPointsWETH?: null
    ): PoolSetEventFilter;

    "PoolUpdated(address,uint256,uint256,uint256)"(
      poolAddress?: PromiseOrValue<string> | null,
      reserve?: null,
      reserveWETH?: null,
      lastRewardTime?: null
    ): PoolUpdatedEventFilter;
    PoolUpdated(
      poolAddress?: PromiseOrValue<string> | null,
      reserve?: null,
      reserveWETH?: null,
      lastRewardTime?: null
    ): PoolUpdatedEventFilter;

    "SetEmergencyUnlock(bool)"(
      emergencyUnlock?: null
    ): SetEmergencyUnlockEventFilter;
    SetEmergencyUnlock(emergencyUnlock?: null): SetEmergencyUnlockEventFilter;

    "SetYieldBooster(address,address)"(
      previousYieldBooster?: null,
      newYieldBooster?: null
    ): SetYieldBoosterEventFilter;
    SetYieldBooster(
      previousYieldBooster?: null,
      newYieldBooster?: null
    ): SetYieldBoosterEventFilter;

    "TokenWithdraw(address,uint256)"(
      token?: null,
      amount?: null
    ): TokenWithdrawEventFilter;
    TokenWithdraw(token?: null, amount?: null): TokenWithdrawEventFilter;

    "TreasuryUpdated(address)"(treasury?: null): TreasuryUpdatedEventFilter;
    TreasuryUpdated(treasury?: null): TreasuryUpdatedEventFilter;

    "WethRateUpdated(uint256)"(rate?: null): WethRateUpdatedEventFilter;
    WethRateUpdated(rate?: null): WethRateUpdatedEventFilter;

    "WethUpdated(address)"(weth?: null): WethUpdatedEventFilter;
    WethUpdated(weth?: null): WethUpdatedEventFilter;
  };

  estimateGas: {
    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    activePoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      nftPool: PromiseOrValue<string>,
      allocPoints: PromiseOrValue<BigNumberish>,
      allocPointsWETH: PromiseOrValue<BigNumberish>,
      withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addUnlockOperator(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    emergencyUnlock(overrides?: CallOverrides): Promise<BigNumber>;

    emissionRates(overrides?: CallOverrides): Promise<BigNumber>;

    getActivePoolAddressByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolAddressByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolInfo(
      _poolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isUnlockOperator(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    massUpdatePools(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poolsLength(overrides?: CallOverrides): Promise<BigNumber>;

    protocolToken(overrides?: CallOverrides): Promise<BigNumber>;

    removeUnlockOperator(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    set(
      poolAddress: PromiseOrValue<string>,
      allocPoints: PromiseOrValue<BigNumberish>,
      allocPointsWETH: PromiseOrValue<BigNumberish>,
      withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setEmergencyUnlock(
      emergencyUnlock_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWethRewardRate(
      wethRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setYieldBooster(
      yieldBooster_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPoints(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPointsWETH(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    updatePool(
      nftPool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateTreasury(
      _treasury: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wethPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    wethToken(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    yieldBooster(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activePoolsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    add(
      nftPool: PromiseOrValue<string>,
      allocPoints: PromiseOrValue<BigNumberish>,
      allocPointsWETH: PromiseOrValue<BigNumberish>,
      withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addUnlockOperator(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimRewards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    emergencyUnlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emissionRates(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getActivePoolAddressByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolAddressByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolInfo(
      _poolAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isUnlockOperator(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    massUpdatePools(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeUnlockOperator(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    set(
      poolAddress: PromiseOrValue<string>,
      allocPoints: PromiseOrValue<BigNumberish>,
      allocPointsWETH: PromiseOrValue<BigNumberish>,
      withUpdate: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setEmergencyUnlock(
      emergencyUnlock_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWethRewardRate(
      wethRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setYieldBooster(
      yieldBooster_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAllocPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAllocPointsWETH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updatePool(
      nftPool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateTreasury(
      _treasury: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wethPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawToken(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    yieldBooster(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
