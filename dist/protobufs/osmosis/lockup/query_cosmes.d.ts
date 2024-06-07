import { AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, LockRewardReceiverRequest, LockRewardReceiverResponse, ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, NextLockIDRequest, NextLockIDResponse, QueryParamsRequest, QueryParamsResponse, SyntheticLockupByLockupIDRequest, SyntheticLockupByLockupIDResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse } from "./query_pb.js";
/**
 * Return full balance of the module
 *
 * @generated from rpc osmosis.lockup.Query.ModuleBalance
 */
export declare const QueryModuleBalanceService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "ModuleBalance";
    readonly Request: typeof ModuleBalanceRequest;
    readonly Response: typeof ModuleBalanceResponse;
};
/**
 * Return locked balance of the module
 *
 * @generated from rpc osmosis.lockup.Query.ModuleLockedAmount
 */
export declare const QueryModuleLockedAmountService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "ModuleLockedAmount";
    readonly Request: typeof ModuleLockedAmountRequest;
    readonly Response: typeof ModuleLockedAmountResponse;
};
/**
 * Returns unlockable coins which are not withdrawn yet
 *
 * @generated from rpc osmosis.lockup.Query.AccountUnlockableCoins
 */
export declare const QueryAccountUnlockableCoinsService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "AccountUnlockableCoins";
    readonly Request: typeof AccountUnlockableCoinsRequest;
    readonly Response: typeof AccountUnlockableCoinsResponse;
};
/**
 * Returns unlocking coins
 *
 * @generated from rpc osmosis.lockup.Query.AccountUnlockingCoins
 */
export declare const QueryAccountUnlockingCoinsService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "AccountUnlockingCoins";
    readonly Request: typeof AccountUnlockingCoinsRequest;
    readonly Response: typeof AccountUnlockingCoinsResponse;
};
/**
 * Return a locked coins that can't be withdrawn
 *
 * @generated from rpc osmosis.lockup.Query.AccountLockedCoins
 */
export declare const QueryAccountLockedCoinsService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "AccountLockedCoins";
    readonly Request: typeof AccountLockedCoinsRequest;
    readonly Response: typeof AccountLockedCoinsResponse;
};
/**
 * Returns locked records of an account with unlock time beyond timestamp
 *
 * @generated from rpc osmosis.lockup.Query.AccountLockedPastTime
 */
export declare const QueryAccountLockedPastTimeService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "AccountLockedPastTime";
    readonly Request: typeof AccountLockedPastTimeRequest;
    readonly Response: typeof AccountLockedPastTimeResponse;
};
/**
 * Returns locked records of an account with unlock time beyond timestamp
 * excluding tokens started unlocking
 *
 * @generated from rpc osmosis.lockup.Query.AccountLockedPastTimeNotUnlockingOnly
 */
export declare const QueryAccountLockedPastTimeNotUnlockingOnlyService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "AccountLockedPastTimeNotUnlockingOnly";
    readonly Request: typeof AccountLockedPastTimeNotUnlockingOnlyRequest;
    readonly Response: typeof AccountLockedPastTimeNotUnlockingOnlyResponse;
};
/**
 * Returns unlocked records with unlock time before timestamp
 *
 * @generated from rpc osmosis.lockup.Query.AccountUnlockedBeforeTime
 */
export declare const QueryAccountUnlockedBeforeTimeService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "AccountUnlockedBeforeTime";
    readonly Request: typeof AccountUnlockedBeforeTimeRequest;
    readonly Response: typeof AccountUnlockedBeforeTimeResponse;
};
/**
 * Returns lock records by address, timestamp, denom
 *
 * @generated from rpc osmosis.lockup.Query.AccountLockedPastTimeDenom
 */
export declare const QueryAccountLockedPastTimeDenomService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "AccountLockedPastTimeDenom";
    readonly Request: typeof AccountLockedPastTimeDenomRequest;
    readonly Response: typeof AccountLockedPastTimeDenomResponse;
};
/**
 * Returns total locked per denom with longer past given time
 *
 * @generated from rpc osmosis.lockup.Query.LockedDenom
 */
export declare const QueryLockedDenomService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "LockedDenom";
    readonly Request: typeof LockedDenomRequest;
    readonly Response: typeof LockedDenomResponse;
};
/**
 * Returns lock record by id
 *
 * @generated from rpc osmosis.lockup.Query.LockedByID
 */
export declare const QueryLockedByIDService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "LockedByID";
    readonly Request: typeof LockedRequest;
    readonly Response: typeof LockedResponse;
};
/**
 * Returns lock record by id
 *
 * @generated from rpc osmosis.lockup.Query.LockRewardReceiver
 */
export declare const QueryLockRewardReceiverService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "LockRewardReceiver";
    readonly Request: typeof LockRewardReceiverRequest;
    readonly Response: typeof LockRewardReceiverResponse;
};
/**
 * Returns next lock ID
 *
 * @generated from rpc osmosis.lockup.Query.NextLockID
 */
export declare const QueryNextLockIDService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "NextLockID";
    readonly Request: typeof NextLockIDRequest;
    readonly Response: typeof NextLockIDResponse;
};
/**
 * Returns synthetic lockup by native lockup id
 * Deprecated: use SyntheticLockupByLockupID instead
 *
 * @generated from rpc osmosis.lockup.Query.SyntheticLockupsByLockupID
 * @deprecated
 */
export declare const QuerySyntheticLockupsByLockupIDService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "SyntheticLockupsByLockupID";
    readonly Request: typeof SyntheticLockupsByLockupIDRequest;
    readonly Response: typeof SyntheticLockupsByLockupIDResponse;
};
/**
 * Returns synthetic lockup by native lockup id
 *
 * @generated from rpc osmosis.lockup.Query.SyntheticLockupByLockupID
 */
export declare const QuerySyntheticLockupByLockupIDService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "SyntheticLockupByLockupID";
    readonly Request: typeof SyntheticLockupByLockupIDRequest;
    readonly Response: typeof SyntheticLockupByLockupIDResponse;
};
/**
 * Returns account locked records with longer duration
 *
 * @generated from rpc osmosis.lockup.Query.AccountLockedLongerDuration
 */
export declare const QueryAccountLockedLongerDurationService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "AccountLockedLongerDuration";
    readonly Request: typeof AccountLockedLongerDurationRequest;
    readonly Response: typeof AccountLockedLongerDurationResponse;
};
/**
 * Returns account locked records with a specific duration
 *
 * @generated from rpc osmosis.lockup.Query.AccountLockedDuration
 */
export declare const QueryAccountLockedDurationService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "AccountLockedDuration";
    readonly Request: typeof AccountLockedDurationRequest;
    readonly Response: typeof AccountLockedDurationResponse;
};
/**
 * Returns account locked records with longer duration excluding tokens
 * started unlocking
 *
 * @generated from rpc osmosis.lockup.Query.AccountLockedLongerDurationNotUnlockingOnly
 */
export declare const QueryAccountLockedLongerDurationNotUnlockingOnlyService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "AccountLockedLongerDurationNotUnlockingOnly";
    readonly Request: typeof AccountLockedLongerDurationNotUnlockingOnlyRequest;
    readonly Response: typeof AccountLockedLongerDurationNotUnlockingOnlyResponse;
};
/**
 * Returns account's locked records for a denom with longer duration
 *
 * @generated from rpc osmosis.lockup.Query.AccountLockedLongerDurationDenom
 */
export declare const QueryAccountLockedLongerDurationDenomService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "AccountLockedLongerDurationDenom";
    readonly Request: typeof AccountLockedLongerDurationDenomRequest;
    readonly Response: typeof AccountLockedLongerDurationDenomResponse;
};
/**
 * Params returns lockup params.
 *
 * @generated from rpc osmosis.lockup.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "osmosis.lockup.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map