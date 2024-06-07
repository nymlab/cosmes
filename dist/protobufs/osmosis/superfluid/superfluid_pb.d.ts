import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { SyntheticLock } from "../lockup/lock_pb.js";
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token, lp share of a pool, or concentrated share of a pool
 *
 * @generated from enum osmosis.superfluid.SuperfluidAssetType
 */
export declare enum SuperfluidAssetType {
    /**
     * @generated from enum value: SuperfluidAssetTypeNative = 0;
     */
    SuperfluidAssetTypeNative = 0,
    /**
     * @generated from enum value: SuperfluidAssetTypeLPShare = 1;
     */
    SuperfluidAssetTypeLPShare = 1,
    /**
     * SuperfluidAssetTypeLendingShare = 3; // for now not exist
     *
     * @generated from enum value: SuperfluidAssetTypeConcentratedShare = 2;
     */
    SuperfluidAssetTypeConcentratedShare = 2
}
/**
 * SuperfluidAsset stores the pair of superfluid asset type and denom pair
 *
 * @generated from message osmosis.superfluid.SuperfluidAsset
 */
export declare class SuperfluidAsset extends Message<SuperfluidAsset> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * AssetType indicates whether the superfluid asset is a native token or an lp
     * share
     *
     * @generated from field: osmosis.superfluid.SuperfluidAssetType asset_type = 2;
     */
    assetType: SuperfluidAssetType;
    constructor(data?: PartialMessage<SuperfluidAsset>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.SuperfluidAsset";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuperfluidAsset;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuperfluidAsset;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuperfluidAsset;
    static equals(a: SuperfluidAsset | PlainMessage<SuperfluidAsset> | undefined, b: SuperfluidAsset | PlainMessage<SuperfluidAsset> | undefined): boolean;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 *
 * @generated from message osmosis.superfluid.SuperfluidIntermediaryAccount
 */
export declare class SuperfluidIntermediaryAccount extends Message<SuperfluidIntermediaryAccount> {
    /**
     * Denom indicates the denom of the superfluid asset.
     *
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: string val_addr = 2;
     */
    valAddr: string;
    /**
     * perpetual gauge for rewards distribution
     *
     * @generated from field: uint64 gauge_id = 3;
     */
    gaugeId: bigint;
    constructor(data?: PartialMessage<SuperfluidIntermediaryAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.SuperfluidIntermediaryAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuperfluidIntermediaryAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuperfluidIntermediaryAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuperfluidIntermediaryAccount;
    static equals(a: SuperfluidIntermediaryAccount | PlainMessage<SuperfluidIntermediaryAccount> | undefined, b: SuperfluidIntermediaryAccount | PlainMessage<SuperfluidIntermediaryAccount> | undefined): boolean;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking what's in use for epoch N as based on the
 * prior epochs rewards) However for now, this is not the TWAP but instead the
 * spot price at the boundary. For different types of assets in the future, it
 * could change.
 *
 * @generated from message osmosis.superfluid.OsmoEquivalentMultiplierRecord
 */
export declare class OsmoEquivalentMultiplierRecord extends Message<OsmoEquivalentMultiplierRecord> {
    /**
     * @generated from field: int64 epoch_number = 1;
     */
    epochNumber: bigint;
    /**
     * superfluid asset denom, can be LP token or native token
     *
     * @generated from field: string denom = 2;
     */
    denom: string;
    /**
     * @generated from field: string multiplier = 3;
     */
    multiplier: string;
    constructor(data?: PartialMessage<OsmoEquivalentMultiplierRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.OsmoEquivalentMultiplierRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OsmoEquivalentMultiplierRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OsmoEquivalentMultiplierRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OsmoEquivalentMultiplierRecord;
    static equals(a: OsmoEquivalentMultiplierRecord | PlainMessage<OsmoEquivalentMultiplierRecord> | undefined, b: OsmoEquivalentMultiplierRecord | PlainMessage<OsmoEquivalentMultiplierRecord> | undefined): boolean;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 *
 * @generated from message osmosis.superfluid.SuperfluidDelegationRecord
 */
export declare class SuperfluidDelegationRecord extends Message<SuperfluidDelegationRecord> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin delegation_amount = 3;
     */
    delegationAmount?: Coin;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin equivalent_staked_amount = 4;
     */
    equivalentStakedAmount?: Coin;
    constructor(data?: PartialMessage<SuperfluidDelegationRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.SuperfluidDelegationRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuperfluidDelegationRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuperfluidDelegationRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuperfluidDelegationRecord;
    static equals(a: SuperfluidDelegationRecord | PlainMessage<SuperfluidDelegationRecord> | undefined, b: SuperfluidDelegationRecord | PlainMessage<SuperfluidDelegationRecord> | undefined): boolean;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 *
 * @generated from message osmosis.superfluid.LockIdIntermediaryAccountConnection
 */
export declare class LockIdIntermediaryAccountConnection extends Message<LockIdIntermediaryAccountConnection> {
    /**
     * @generated from field: uint64 lock_id = 1;
     */
    lockId: bigint;
    /**
     * @generated from field: string intermediary_account = 2;
     */
    intermediaryAccount: string;
    constructor(data?: PartialMessage<LockIdIntermediaryAccountConnection>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.LockIdIntermediaryAccountConnection";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LockIdIntermediaryAccountConnection;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LockIdIntermediaryAccountConnection;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LockIdIntermediaryAccountConnection;
    static equals(a: LockIdIntermediaryAccountConnection | PlainMessage<LockIdIntermediaryAccountConnection> | undefined, b: LockIdIntermediaryAccountConnection | PlainMessage<LockIdIntermediaryAccountConnection> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.UnpoolWhitelistedPools
 */
export declare class UnpoolWhitelistedPools extends Message<UnpoolWhitelistedPools> {
    /**
     * @generated from field: repeated uint64 ids = 1;
     */
    ids: bigint[];
    constructor(data?: PartialMessage<UnpoolWhitelistedPools>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.UnpoolWhitelistedPools";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnpoolWhitelistedPools;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnpoolWhitelistedPools;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnpoolWhitelistedPools;
    static equals(a: UnpoolWhitelistedPools | PlainMessage<UnpoolWhitelistedPools> | undefined, b: UnpoolWhitelistedPools | PlainMessage<UnpoolWhitelistedPools> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.ConcentratedPoolUserPositionRecord
 */
export declare class ConcentratedPoolUserPositionRecord extends Message<ConcentratedPoolUserPositionRecord> {
    /**
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * @generated from field: uint64 position_id = 2;
     */
    positionId: bigint;
    /**
     * @generated from field: uint64 lock_id = 3;
     */
    lockId: bigint;
    /**
     * @generated from field: osmosis.lockup.SyntheticLock synthetic_lock = 4;
     */
    syntheticLock?: SyntheticLock;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin delegation_amount = 5;
     */
    delegationAmount?: Coin;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin equivalent_staked_amount = 6;
     */
    equivalentStakedAmount?: Coin;
    constructor(data?: PartialMessage<ConcentratedPoolUserPositionRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.ConcentratedPoolUserPositionRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConcentratedPoolUserPositionRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConcentratedPoolUserPositionRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConcentratedPoolUserPositionRecord;
    static equals(a: ConcentratedPoolUserPositionRecord | PlainMessage<ConcentratedPoolUserPositionRecord> | undefined, b: ConcentratedPoolUserPositionRecord | PlainMessage<ConcentratedPoolUserPositionRecord> | undefined): boolean;
}
//# sourceMappingURL=superfluid_pb.d.ts.map