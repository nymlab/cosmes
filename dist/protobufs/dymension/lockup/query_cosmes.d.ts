import { AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, NextLockIDRequest, NextLockIDResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * Return full balance of the module
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.ModuleBalance
 */
export declare const QueryModuleBalanceService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "ModuleBalance";
    readonly Request: typeof ModuleBalanceRequest;
    readonly Response: typeof ModuleBalanceResponse;
};
/**
 * Return locked balance of the module
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.ModuleLockedAmount
 */
export declare const QueryModuleLockedAmountService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "ModuleLockedAmount";
    readonly Request: typeof ModuleLockedAmountRequest;
    readonly Response: typeof ModuleLockedAmountResponse;
};
/**
 * Returns unlockable coins which are not withdrawn yet
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.AccountUnlockableCoins
 */
export declare const QueryAccountUnlockableCoinsService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "AccountUnlockableCoins";
    readonly Request: typeof AccountUnlockableCoinsRequest;
    readonly Response: typeof AccountUnlockableCoinsResponse;
};
/**
 * Returns unlocking coins
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.AccountUnlockingCoins
 */
export declare const QueryAccountUnlockingCoinsService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "AccountUnlockingCoins";
    readonly Request: typeof AccountUnlockingCoinsRequest;
    readonly Response: typeof AccountUnlockingCoinsResponse;
};
/**
 * Return a locked coins that can't be withdrawn
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.AccountLockedCoins
 */
export declare const QueryAccountLockedCoinsService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "AccountLockedCoins";
    readonly Request: typeof AccountLockedCoinsRequest;
    readonly Response: typeof AccountLockedCoinsResponse;
};
/**
 * Returns locked records of an account with unlock time beyond timestamp
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.AccountLockedPastTime
 */
export declare const QueryAccountLockedPastTimeService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "AccountLockedPastTime";
    readonly Request: typeof AccountLockedPastTimeRequest;
    readonly Response: typeof AccountLockedPastTimeResponse;
};
/**
 * Returns locked records of an account with unlock time beyond timestamp
 * excluding tokens started unlocking
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.AccountLockedPastTimeNotUnlockingOnly
 */
export declare const QueryAccountLockedPastTimeNotUnlockingOnlyService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "AccountLockedPastTimeNotUnlockingOnly";
    readonly Request: typeof AccountLockedPastTimeNotUnlockingOnlyRequest;
    readonly Response: typeof AccountLockedPastTimeNotUnlockingOnlyResponse;
};
/**
 * Returns unlocked records with unlock time before timestamp
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.AccountUnlockedBeforeTime
 */
export declare const QueryAccountUnlockedBeforeTimeService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "AccountUnlockedBeforeTime";
    readonly Request: typeof AccountUnlockedBeforeTimeRequest;
    readonly Response: typeof AccountUnlockedBeforeTimeResponse;
};
/**
 * Returns lock records by address, timestamp, denom
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.AccountLockedPastTimeDenom
 */
export declare const QueryAccountLockedPastTimeDenomService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "AccountLockedPastTimeDenom";
    readonly Request: typeof AccountLockedPastTimeDenomRequest;
    readonly Response: typeof AccountLockedPastTimeDenomResponse;
};
/**
 * Returns total locked per denom with longer past given time
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.LockedDenom
 */
export declare const QueryLockedDenomService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "LockedDenom";
    readonly Request: typeof LockedDenomRequest;
    readonly Response: typeof LockedDenomResponse;
};
/**
 * Returns lock record by id
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.LockedByID
 */
export declare const QueryLockedByIDService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "LockedByID";
    readonly Request: typeof LockedRequest;
    readonly Response: typeof LockedResponse;
};
/**
 * Returns next lock ID
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.NextLockID
 */
export declare const QueryNextLockIDService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "NextLockID";
    readonly Request: typeof NextLockIDRequest;
    readonly Response: typeof NextLockIDResponse;
};
/**
 * Returns account locked records with longer duration
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.AccountLockedLongerDuration
 */
export declare const QueryAccountLockedLongerDurationService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "AccountLockedLongerDuration";
    readonly Request: typeof AccountLockedLongerDurationRequest;
    readonly Response: typeof AccountLockedLongerDurationResponse;
};
/**
 * Returns account locked records with a specific duration
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.AccountLockedDuration
 */
export declare const QueryAccountLockedDurationService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "AccountLockedDuration";
    readonly Request: typeof AccountLockedDurationRequest;
    readonly Response: typeof AccountLockedDurationResponse;
};
/**
 * Returns account locked records with longer duration excluding tokens
 * started unlocking
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.AccountLockedLongerDurationNotUnlockingOnly
 */
export declare const QueryAccountLockedLongerDurationNotUnlockingOnlyService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "AccountLockedLongerDurationNotUnlockingOnly";
    readonly Request: typeof AccountLockedLongerDurationNotUnlockingOnlyRequest;
    readonly Response: typeof AccountLockedLongerDurationNotUnlockingOnlyResponse;
};
/**
 * Returns account's locked records for a denom with longer duration
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.AccountLockedLongerDurationDenom
 */
export declare const QueryAccountLockedLongerDurationDenomService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "AccountLockedLongerDurationDenom";
    readonly Request: typeof AccountLockedLongerDurationDenomRequest;
    readonly Response: typeof AccountLockedLongerDurationDenomResponse;
};
/**
 * Params returns lockup params.
 *
 * @generated from rpc dymensionxyz.dymension.lockup.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "dymensionxyz.dymension.lockup.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map