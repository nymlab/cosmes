import { MsgAddToConcentratedLiquiditySuperfluidPosition, MsgAddToConcentratedLiquiditySuperfluidPositionResponse, MsgCreateFullRangePositionAndSuperfluidDelegate, MsgCreateFullRangePositionAndSuperfluidDelegateResponse, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgSuperfluidDelegate, MsgSuperfluidDelegateResponse, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockResponse, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateAndUnbondLock, MsgSuperfluidUndelegateAndUnbondLockResponse, MsgSuperfluidUndelegateResponse, MsgUnbondConvertAndStake, MsgUnbondConvertAndStakeResponse, MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition, MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolResponse } from "./tx_pb.js";
/**
 * Execute superfluid delegation for a lockup
 *
 * @generated from rpc osmosis.superfluid.Msg.SuperfluidDelegate
 */
export declare const MsgSuperfluidDelegateService: {
    readonly typeName: "osmosis.superfluid.Msg";
    readonly method: "SuperfluidDelegate";
    readonly Request: typeof MsgSuperfluidDelegate;
    readonly Response: typeof MsgSuperfluidDelegateResponse;
};
/**
 * Execute superfluid undelegation for a lockup
 *
 * @generated from rpc osmosis.superfluid.Msg.SuperfluidUndelegate
 */
export declare const MsgSuperfluidUndelegateService: {
    readonly typeName: "osmosis.superfluid.Msg";
    readonly method: "SuperfluidUndelegate";
    readonly Request: typeof MsgSuperfluidUndelegate;
    readonly Response: typeof MsgSuperfluidUndelegateResponse;
};
/**
 * For a given lock that is being superfluidly undelegated,
 * also unbond the underlying lock.
 *
 * @generated from rpc osmosis.superfluid.Msg.SuperfluidUnbondLock
 */
export declare const MsgSuperfluidUnbondLockService: {
    readonly typeName: "osmosis.superfluid.Msg";
    readonly method: "SuperfluidUnbondLock";
    readonly Request: typeof MsgSuperfluidUnbondLock;
    readonly Response: typeof MsgSuperfluidUnbondLockResponse;
};
/**
 * Superfluid undelegate and unbond partial amount of the underlying lock.
 *
 * @generated from rpc osmosis.superfluid.Msg.SuperfluidUndelegateAndUnbondLock
 */
export declare const MsgSuperfluidUndelegateAndUnbondLockService: {
    readonly typeName: "osmosis.superfluid.Msg";
    readonly method: "SuperfluidUndelegateAndUnbondLock";
    readonly Request: typeof MsgSuperfluidUndelegateAndUnbondLock;
    readonly Response: typeof MsgSuperfluidUndelegateAndUnbondLockResponse;
};
/**
 * Execute lockup lock and superfluid delegation in a single msg
 *
 * @generated from rpc osmosis.superfluid.Msg.LockAndSuperfluidDelegate
 */
export declare const MsgLockAndSuperfluidDelegateService: {
    readonly typeName: "osmosis.superfluid.Msg";
    readonly method: "LockAndSuperfluidDelegate";
    readonly Request: typeof MsgLockAndSuperfluidDelegate;
    readonly Response: typeof MsgLockAndSuperfluidDelegateResponse;
};
/**
 * @generated from rpc osmosis.superfluid.Msg.CreateFullRangePositionAndSuperfluidDelegate
 */
export declare const MsgCreateFullRangePositionAndSuperfluidDelegateService: {
    readonly typeName: "osmosis.superfluid.Msg";
    readonly method: "CreateFullRangePositionAndSuperfluidDelegate";
    readonly Request: typeof MsgCreateFullRangePositionAndSuperfluidDelegate;
    readonly Response: typeof MsgCreateFullRangePositionAndSuperfluidDelegateResponse;
};
/**
 * @generated from rpc osmosis.superfluid.Msg.UnPoolWhitelistedPool
 */
export declare const MsgUnPoolWhitelistedPoolService: {
    readonly typeName: "osmosis.superfluid.Msg";
    readonly method: "UnPoolWhitelistedPool";
    readonly Request: typeof MsgUnPoolWhitelistedPool;
    readonly Response: typeof MsgUnPoolWhitelistedPoolResponse;
};
/**
 * @generated from rpc osmosis.superfluid.Msg.UnlockAndMigrateSharesToFullRangeConcentratedPosition
 */
export declare const MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionService: {
    readonly typeName: "osmosis.superfluid.Msg";
    readonly method: "UnlockAndMigrateSharesToFullRangeConcentratedPosition";
    readonly Request: typeof MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition;
    readonly Response: typeof MsgUnlockAndMigrateSharesToFullRangeConcentratedPositionResponse;
};
/**
 * @generated from rpc osmosis.superfluid.Msg.AddToConcentratedLiquiditySuperfluidPosition
 */
export declare const MsgAddToConcentratedLiquiditySuperfluidPositionService: {
    readonly typeName: "osmosis.superfluid.Msg";
    readonly method: "AddToConcentratedLiquiditySuperfluidPosition";
    readonly Request: typeof MsgAddToConcentratedLiquiditySuperfluidPosition;
    readonly Response: typeof MsgAddToConcentratedLiquiditySuperfluidPositionResponse;
};
/**
 * UnbondConvertAndStake breaks all locks / superfluid staked assets,
 * converts them to osmo then stakes the osmo to the designated validator.
 *
 * @generated from rpc osmosis.superfluid.Msg.UnbondConvertAndStake
 */
export declare const MsgUnbondConvertAndStakeService: {
    readonly typeName: "osmosis.superfluid.Msg";
    readonly method: "UnbondConvertAndStake";
    readonly Request: typeof MsgUnbondConvertAndStake;
    readonly Response: typeof MsgUnbondConvertAndStakeResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map