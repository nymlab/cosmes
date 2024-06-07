import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { ConcentratedPoolUserPositionRecord, OsmoEquivalentMultiplierRecord, SuperfluidAsset, SuperfluidAssetType, SuperfluidDelegationRecord } from "./superfluid_pb.js";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { SyntheticLock } from "../lockup/lock_pb.js";
import { DelegationResponse } from "../../cosmos/staking/v1beta1/staking_pb.js";
/**
 * @generated from message osmosis.superfluid.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: osmosis.superfluid.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.AssetTypeRequest
 */
export declare class AssetTypeRequest extends Message<AssetTypeRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<AssetTypeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.AssetTypeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetTypeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetTypeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetTypeRequest;
    static equals(a: AssetTypeRequest | PlainMessage<AssetTypeRequest> | undefined, b: AssetTypeRequest | PlainMessage<AssetTypeRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.AssetTypeResponse
 */
export declare class AssetTypeResponse extends Message<AssetTypeResponse> {
    /**
     * @generated from field: osmosis.superfluid.SuperfluidAssetType asset_type = 1;
     */
    assetType: SuperfluidAssetType;
    constructor(data?: PartialMessage<AssetTypeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.AssetTypeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetTypeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetTypeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetTypeResponse;
    static equals(a: AssetTypeResponse | PlainMessage<AssetTypeResponse> | undefined, b: AssetTypeResponse | PlainMessage<AssetTypeResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.AllAssetsRequest
 */
export declare class AllAssetsRequest extends Message<AllAssetsRequest> {
    constructor(data?: PartialMessage<AllAssetsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.AllAssetsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllAssetsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllAssetsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllAssetsRequest;
    static equals(a: AllAssetsRequest | PlainMessage<AllAssetsRequest> | undefined, b: AllAssetsRequest | PlainMessage<AllAssetsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.AllAssetsResponse
 */
export declare class AllAssetsResponse extends Message<AllAssetsResponse> {
    /**
     * @generated from field: repeated osmosis.superfluid.SuperfluidAsset assets = 1;
     */
    assets: SuperfluidAsset[];
    constructor(data?: PartialMessage<AllAssetsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.AllAssetsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllAssetsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllAssetsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllAssetsResponse;
    static equals(a: AllAssetsResponse | PlainMessage<AllAssetsResponse> | undefined, b: AllAssetsResponse | PlainMessage<AllAssetsResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.AssetMultiplierRequest
 */
export declare class AssetMultiplierRequest extends Message<AssetMultiplierRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<AssetMultiplierRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.AssetMultiplierRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetMultiplierRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetMultiplierRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetMultiplierRequest;
    static equals(a: AssetMultiplierRequest | PlainMessage<AssetMultiplierRequest> | undefined, b: AssetMultiplierRequest | PlainMessage<AssetMultiplierRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.AssetMultiplierResponse
 */
export declare class AssetMultiplierResponse extends Message<AssetMultiplierResponse> {
    /**
     * @generated from field: osmosis.superfluid.OsmoEquivalentMultiplierRecord osmo_equivalent_multiplier = 1;
     */
    osmoEquivalentMultiplier?: OsmoEquivalentMultiplierRecord;
    constructor(data?: PartialMessage<AssetMultiplierResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.AssetMultiplierResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetMultiplierResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetMultiplierResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetMultiplierResponse;
    static equals(a: AssetMultiplierResponse | PlainMessage<AssetMultiplierResponse> | undefined, b: AssetMultiplierResponse | PlainMessage<AssetMultiplierResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.SuperfluidIntermediaryAccountInfo
 */
export declare class SuperfluidIntermediaryAccountInfo extends Message<SuperfluidIntermediaryAccountInfo> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: string val_addr = 2;
     */
    valAddr: string;
    /**
     * @generated from field: uint64 gauge_id = 3;
     */
    gaugeId: bigint;
    /**
     * @generated from field: string address = 4;
     */
    address: string;
    constructor(data?: PartialMessage<SuperfluidIntermediaryAccountInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.SuperfluidIntermediaryAccountInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuperfluidIntermediaryAccountInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuperfluidIntermediaryAccountInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuperfluidIntermediaryAccountInfo;
    static equals(a: SuperfluidIntermediaryAccountInfo | PlainMessage<SuperfluidIntermediaryAccountInfo> | undefined, b: SuperfluidIntermediaryAccountInfo | PlainMessage<SuperfluidIntermediaryAccountInfo> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.AllIntermediaryAccountsRequest
 */
export declare class AllIntermediaryAccountsRequest extends Message<AllIntermediaryAccountsRequest> {
    /**
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<AllIntermediaryAccountsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.AllIntermediaryAccountsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllIntermediaryAccountsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllIntermediaryAccountsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllIntermediaryAccountsRequest;
    static equals(a: AllIntermediaryAccountsRequest | PlainMessage<AllIntermediaryAccountsRequest> | undefined, b: AllIntermediaryAccountsRequest | PlainMessage<AllIntermediaryAccountsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.AllIntermediaryAccountsResponse
 */
export declare class AllIntermediaryAccountsResponse extends Message<AllIntermediaryAccountsResponse> {
    /**
     * @generated from field: repeated osmosis.superfluid.SuperfluidIntermediaryAccountInfo accounts = 1;
     */
    accounts: SuperfluidIntermediaryAccountInfo[];
    /**
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<AllIntermediaryAccountsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.AllIntermediaryAccountsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllIntermediaryAccountsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllIntermediaryAccountsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllIntermediaryAccountsResponse;
    static equals(a: AllIntermediaryAccountsResponse | PlainMessage<AllIntermediaryAccountsResponse> | undefined, b: AllIntermediaryAccountsResponse | PlainMessage<AllIntermediaryAccountsResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.ConnectedIntermediaryAccountRequest
 */
export declare class ConnectedIntermediaryAccountRequest extends Message<ConnectedIntermediaryAccountRequest> {
    /**
     * @generated from field: uint64 lock_id = 1;
     */
    lockId: bigint;
    constructor(data?: PartialMessage<ConnectedIntermediaryAccountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.ConnectedIntermediaryAccountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConnectedIntermediaryAccountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConnectedIntermediaryAccountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConnectedIntermediaryAccountRequest;
    static equals(a: ConnectedIntermediaryAccountRequest | PlainMessage<ConnectedIntermediaryAccountRequest> | undefined, b: ConnectedIntermediaryAccountRequest | PlainMessage<ConnectedIntermediaryAccountRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.ConnectedIntermediaryAccountResponse
 */
export declare class ConnectedIntermediaryAccountResponse extends Message<ConnectedIntermediaryAccountResponse> {
    /**
     * @generated from field: osmosis.superfluid.SuperfluidIntermediaryAccountInfo account = 1;
     */
    account?: SuperfluidIntermediaryAccountInfo;
    constructor(data?: PartialMessage<ConnectedIntermediaryAccountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.ConnectedIntermediaryAccountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConnectedIntermediaryAccountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConnectedIntermediaryAccountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConnectedIntermediaryAccountResponse;
    static equals(a: ConnectedIntermediaryAccountResponse | PlainMessage<ConnectedIntermediaryAccountResponse> | undefined, b: ConnectedIntermediaryAccountResponse | PlainMessage<ConnectedIntermediaryAccountResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest
 */
export declare class QueryTotalDelegationByValidatorForDenomRequest extends Message<QueryTotalDelegationByValidatorForDenomRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryTotalDelegationByValidatorForDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalDelegationByValidatorForDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalDelegationByValidatorForDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalDelegationByValidatorForDenomRequest;
    static equals(a: QueryTotalDelegationByValidatorForDenomRequest | PlainMessage<QueryTotalDelegationByValidatorForDenomRequest> | undefined, b: QueryTotalDelegationByValidatorForDenomRequest | PlainMessage<QueryTotalDelegationByValidatorForDenomRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse
 */
export declare class QueryTotalDelegationByValidatorForDenomResponse extends Message<QueryTotalDelegationByValidatorForDenomResponse> {
    /**
     * @generated from field: repeated osmosis.superfluid.Delegations assets = 1;
     */
    assets: Delegations[];
    constructor(data?: PartialMessage<QueryTotalDelegationByValidatorForDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalDelegationByValidatorForDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalDelegationByValidatorForDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalDelegationByValidatorForDenomResponse;
    static equals(a: QueryTotalDelegationByValidatorForDenomResponse | PlainMessage<QueryTotalDelegationByValidatorForDenomResponse> | undefined, b: QueryTotalDelegationByValidatorForDenomResponse | PlainMessage<QueryTotalDelegationByValidatorForDenomResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.Delegations
 */
export declare class Delegations extends Message<Delegations> {
    /**
     * @generated from field: string val_addr = 1;
     */
    valAddr: string;
    /**
     * @generated from field: string amount_sfsd = 2;
     */
    amountSfsd: string;
    /**
     * @generated from field: string osmo_equivalent = 3;
     */
    osmoEquivalent: string;
    constructor(data?: PartialMessage<Delegations>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.Delegations";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Delegations;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Delegations;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Delegations;
    static equals(a: Delegations | PlainMessage<Delegations> | undefined, b: Delegations | PlainMessage<Delegations> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.TotalSuperfluidDelegationsRequest
 */
export declare class TotalSuperfluidDelegationsRequest extends Message<TotalSuperfluidDelegationsRequest> {
    constructor(data?: PartialMessage<TotalSuperfluidDelegationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.TotalSuperfluidDelegationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TotalSuperfluidDelegationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TotalSuperfluidDelegationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TotalSuperfluidDelegationsRequest;
    static equals(a: TotalSuperfluidDelegationsRequest | PlainMessage<TotalSuperfluidDelegationsRequest> | undefined, b: TotalSuperfluidDelegationsRequest | PlainMessage<TotalSuperfluidDelegationsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.TotalSuperfluidDelegationsResponse
 */
export declare class TotalSuperfluidDelegationsResponse extends Message<TotalSuperfluidDelegationsResponse> {
    /**
     * @generated from field: string total_delegations = 1;
     */
    totalDelegations: string;
    constructor(data?: PartialMessage<TotalSuperfluidDelegationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.TotalSuperfluidDelegationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TotalSuperfluidDelegationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TotalSuperfluidDelegationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TotalSuperfluidDelegationsResponse;
    static equals(a: TotalSuperfluidDelegationsResponse | PlainMessage<TotalSuperfluidDelegationsResponse> | undefined, b: TotalSuperfluidDelegationsResponse | PlainMessage<TotalSuperfluidDelegationsResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.SuperfluidDelegationAmountRequest
 */
export declare class SuperfluidDelegationAmountRequest extends Message<SuperfluidDelegationAmountRequest> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    /**
     * @generated from field: string denom = 3;
     */
    denom: string;
    constructor(data?: PartialMessage<SuperfluidDelegationAmountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.SuperfluidDelegationAmountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuperfluidDelegationAmountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuperfluidDelegationAmountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuperfluidDelegationAmountRequest;
    static equals(a: SuperfluidDelegationAmountRequest | PlainMessage<SuperfluidDelegationAmountRequest> | undefined, b: SuperfluidDelegationAmountRequest | PlainMessage<SuperfluidDelegationAmountRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.SuperfluidDelegationAmountResponse
 */
export declare class SuperfluidDelegationAmountResponse extends Message<SuperfluidDelegationAmountResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<SuperfluidDelegationAmountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.SuperfluidDelegationAmountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuperfluidDelegationAmountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuperfluidDelegationAmountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuperfluidDelegationAmountResponse;
    static equals(a: SuperfluidDelegationAmountResponse | PlainMessage<SuperfluidDelegationAmountResponse> | undefined, b: SuperfluidDelegationAmountResponse | PlainMessage<SuperfluidDelegationAmountResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest
 */
export declare class SuperfluidDelegationsByDelegatorRequest extends Message<SuperfluidDelegationsByDelegatorRequest> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    constructor(data?: PartialMessage<SuperfluidDelegationsByDelegatorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuperfluidDelegationsByDelegatorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuperfluidDelegationsByDelegatorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuperfluidDelegationsByDelegatorRequest;
    static equals(a: SuperfluidDelegationsByDelegatorRequest | PlainMessage<SuperfluidDelegationsByDelegatorRequest> | undefined, b: SuperfluidDelegationsByDelegatorRequest | PlainMessage<SuperfluidDelegationsByDelegatorRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse
 */
export declare class SuperfluidDelegationsByDelegatorResponse extends Message<SuperfluidDelegationsByDelegatorResponse> {
    /**
     * @generated from field: repeated osmosis.superfluid.SuperfluidDelegationRecord superfluid_delegation_records = 1;
     */
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin total_delegated_coins = 2;
     */
    totalDelegatedCoins: Coin[];
    /**
     * @generated from field: cosmos.base.v1beta1.Coin total_equivalent_staked_amount = 3;
     */
    totalEquivalentStakedAmount?: Coin;
    constructor(data?: PartialMessage<SuperfluidDelegationsByDelegatorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuperfluidDelegationsByDelegatorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuperfluidDelegationsByDelegatorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuperfluidDelegationsByDelegatorResponse;
    static equals(a: SuperfluidDelegationsByDelegatorResponse | PlainMessage<SuperfluidDelegationsByDelegatorResponse> | undefined, b: SuperfluidDelegationsByDelegatorResponse | PlainMessage<SuperfluidDelegationsByDelegatorResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest
 */
export declare class SuperfluidUndelegationsByDelegatorRequest extends Message<SuperfluidUndelegationsByDelegatorRequest> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    constructor(data?: PartialMessage<SuperfluidUndelegationsByDelegatorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuperfluidUndelegationsByDelegatorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuperfluidUndelegationsByDelegatorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuperfluidUndelegationsByDelegatorRequest;
    static equals(a: SuperfluidUndelegationsByDelegatorRequest | PlainMessage<SuperfluidUndelegationsByDelegatorRequest> | undefined, b: SuperfluidUndelegationsByDelegatorRequest | PlainMessage<SuperfluidUndelegationsByDelegatorRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse
 */
export declare class SuperfluidUndelegationsByDelegatorResponse extends Message<SuperfluidUndelegationsByDelegatorResponse> {
    /**
     * @generated from field: repeated osmosis.superfluid.SuperfluidDelegationRecord superfluid_delegation_records = 1;
     */
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin total_undelegated_coins = 2;
     */
    totalUndelegatedCoins: Coin[];
    /**
     * @generated from field: repeated osmosis.lockup.SyntheticLock synthetic_locks = 3;
     */
    syntheticLocks: SyntheticLock[];
    constructor(data?: PartialMessage<SuperfluidUndelegationsByDelegatorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuperfluidUndelegationsByDelegatorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuperfluidUndelegationsByDelegatorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuperfluidUndelegationsByDelegatorResponse;
    static equals(a: SuperfluidUndelegationsByDelegatorResponse | PlainMessage<SuperfluidUndelegationsByDelegatorResponse> | undefined, b: SuperfluidUndelegationsByDelegatorResponse | PlainMessage<SuperfluidUndelegationsByDelegatorResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest
 */
export declare class SuperfluidDelegationsByValidatorDenomRequest extends Message<SuperfluidDelegationsByValidatorDenomRequest> {
    /**
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    constructor(data?: PartialMessage<SuperfluidDelegationsByValidatorDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuperfluidDelegationsByValidatorDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuperfluidDelegationsByValidatorDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuperfluidDelegationsByValidatorDenomRequest;
    static equals(a: SuperfluidDelegationsByValidatorDenomRequest | PlainMessage<SuperfluidDelegationsByValidatorDenomRequest> | undefined, b: SuperfluidDelegationsByValidatorDenomRequest | PlainMessage<SuperfluidDelegationsByValidatorDenomRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse
 */
export declare class SuperfluidDelegationsByValidatorDenomResponse extends Message<SuperfluidDelegationsByValidatorDenomResponse> {
    /**
     * @generated from field: repeated osmosis.superfluid.SuperfluidDelegationRecord superfluid_delegation_records = 1;
     */
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    constructor(data?: PartialMessage<SuperfluidDelegationsByValidatorDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuperfluidDelegationsByValidatorDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuperfluidDelegationsByValidatorDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuperfluidDelegationsByValidatorDenomResponse;
    static equals(a: SuperfluidDelegationsByValidatorDenomResponse | PlainMessage<SuperfluidDelegationsByValidatorDenomResponse> | undefined, b: SuperfluidDelegationsByValidatorDenomResponse | PlainMessage<SuperfluidDelegationsByValidatorDenomResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest
 */
export declare class EstimateSuperfluidDelegatedAmountByValidatorDenomRequest extends Message<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest> {
    /**
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    constructor(data?: PartialMessage<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    static equals(a: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest | PlainMessage<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest> | undefined, b: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest | PlainMessage<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse
 */
export declare class EstimateSuperfluidDelegatedAmountByValidatorDenomResponse extends Message<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin total_delegated_coins = 1;
     */
    totalDelegatedCoins: Coin[];
    constructor(data?: PartialMessage<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
    static equals(a: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse | PlainMessage<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> | undefined, b: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse | PlainMessage<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.QueryTotalDelegationByDelegatorRequest
 */
export declare class QueryTotalDelegationByDelegatorRequest extends Message<QueryTotalDelegationByDelegatorRequest> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    constructor(data?: PartialMessage<QueryTotalDelegationByDelegatorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.QueryTotalDelegationByDelegatorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalDelegationByDelegatorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalDelegationByDelegatorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalDelegationByDelegatorRequest;
    static equals(a: QueryTotalDelegationByDelegatorRequest | PlainMessage<QueryTotalDelegationByDelegatorRequest> | undefined, b: QueryTotalDelegationByDelegatorRequest | PlainMessage<QueryTotalDelegationByDelegatorRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.QueryTotalDelegationByDelegatorResponse
 */
export declare class QueryTotalDelegationByDelegatorResponse extends Message<QueryTotalDelegationByDelegatorResponse> {
    /**
     * @generated from field: repeated osmosis.superfluid.SuperfluidDelegationRecord superfluid_delegation_records = 1;
     */
    superfluidDelegationRecords: SuperfluidDelegationRecord[];
    /**
     * @generated from field: repeated cosmos.staking.v1beta1.DelegationResponse delegation_response = 2;
     */
    delegationResponse: DelegationResponse[];
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin total_delegated_coins = 3;
     */
    totalDelegatedCoins: Coin[];
    /**
     * @generated from field: cosmos.base.v1beta1.Coin total_equivalent_staked_amount = 4;
     */
    totalEquivalentStakedAmount?: Coin;
    constructor(data?: PartialMessage<QueryTotalDelegationByDelegatorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.QueryTotalDelegationByDelegatorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalDelegationByDelegatorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalDelegationByDelegatorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalDelegationByDelegatorResponse;
    static equals(a: QueryTotalDelegationByDelegatorResponse | PlainMessage<QueryTotalDelegationByDelegatorResponse> | undefined, b: QueryTotalDelegationByDelegatorResponse | PlainMessage<QueryTotalDelegationByDelegatorResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.QueryUnpoolWhitelistRequest
 */
export declare class QueryUnpoolWhitelistRequest extends Message<QueryUnpoolWhitelistRequest> {
    constructor(data?: PartialMessage<QueryUnpoolWhitelistRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.QueryUnpoolWhitelistRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUnpoolWhitelistRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUnpoolWhitelistRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUnpoolWhitelistRequest;
    static equals(a: QueryUnpoolWhitelistRequest | PlainMessage<QueryUnpoolWhitelistRequest> | undefined, b: QueryUnpoolWhitelistRequest | PlainMessage<QueryUnpoolWhitelistRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.QueryUnpoolWhitelistResponse
 */
export declare class QueryUnpoolWhitelistResponse extends Message<QueryUnpoolWhitelistResponse> {
    /**
     * @generated from field: repeated uint64 pool_ids = 1;
     */
    poolIds: bigint[];
    constructor(data?: PartialMessage<QueryUnpoolWhitelistResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.QueryUnpoolWhitelistResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUnpoolWhitelistResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUnpoolWhitelistResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUnpoolWhitelistResponse;
    static equals(a: QueryUnpoolWhitelistResponse | PlainMessage<QueryUnpoolWhitelistResponse> | undefined, b: QueryUnpoolWhitelistResponse | PlainMessage<QueryUnpoolWhitelistResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.UserConcentratedSuperfluidPositionsDelegatedRequest
 */
export declare class UserConcentratedSuperfluidPositionsDelegatedRequest extends Message<UserConcentratedSuperfluidPositionsDelegatedRequest> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    constructor(data?: PartialMessage<UserConcentratedSuperfluidPositionsDelegatedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.UserConcentratedSuperfluidPositionsDelegatedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserConcentratedSuperfluidPositionsDelegatedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserConcentratedSuperfluidPositionsDelegatedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserConcentratedSuperfluidPositionsDelegatedRequest;
    static equals(a: UserConcentratedSuperfluidPositionsDelegatedRequest | PlainMessage<UserConcentratedSuperfluidPositionsDelegatedRequest> | undefined, b: UserConcentratedSuperfluidPositionsDelegatedRequest | PlainMessage<UserConcentratedSuperfluidPositionsDelegatedRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.UserConcentratedSuperfluidPositionsDelegatedResponse
 */
export declare class UserConcentratedSuperfluidPositionsDelegatedResponse extends Message<UserConcentratedSuperfluidPositionsDelegatedResponse> {
    /**
     * @generated from field: repeated osmosis.superfluid.ConcentratedPoolUserPositionRecord cl_pool_user_position_records = 1;
     */
    clPoolUserPositionRecords: ConcentratedPoolUserPositionRecord[];
    constructor(data?: PartialMessage<UserConcentratedSuperfluidPositionsDelegatedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.UserConcentratedSuperfluidPositionsDelegatedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserConcentratedSuperfluidPositionsDelegatedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserConcentratedSuperfluidPositionsDelegatedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserConcentratedSuperfluidPositionsDelegatedResponse;
    static equals(a: UserConcentratedSuperfluidPositionsDelegatedResponse | PlainMessage<UserConcentratedSuperfluidPositionsDelegatedResponse> | undefined, b: UserConcentratedSuperfluidPositionsDelegatedResponse | PlainMessage<UserConcentratedSuperfluidPositionsDelegatedResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.UserConcentratedSuperfluidPositionsUndelegatingRequest
 */
export declare class UserConcentratedSuperfluidPositionsUndelegatingRequest extends Message<UserConcentratedSuperfluidPositionsUndelegatingRequest> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    constructor(data?: PartialMessage<UserConcentratedSuperfluidPositionsUndelegatingRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.UserConcentratedSuperfluidPositionsUndelegatingRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserConcentratedSuperfluidPositionsUndelegatingRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserConcentratedSuperfluidPositionsUndelegatingRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserConcentratedSuperfluidPositionsUndelegatingRequest;
    static equals(a: UserConcentratedSuperfluidPositionsUndelegatingRequest | PlainMessage<UserConcentratedSuperfluidPositionsUndelegatingRequest> | undefined, b: UserConcentratedSuperfluidPositionsUndelegatingRequest | PlainMessage<UserConcentratedSuperfluidPositionsUndelegatingRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.UserConcentratedSuperfluidPositionsUndelegatingResponse
 */
export declare class UserConcentratedSuperfluidPositionsUndelegatingResponse extends Message<UserConcentratedSuperfluidPositionsUndelegatingResponse> {
    /**
     * @generated from field: repeated osmosis.superfluid.ConcentratedPoolUserPositionRecord cl_pool_user_position_records = 1;
     */
    clPoolUserPositionRecords: ConcentratedPoolUserPositionRecord[];
    constructor(data?: PartialMessage<UserConcentratedSuperfluidPositionsUndelegatingResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.UserConcentratedSuperfluidPositionsUndelegatingResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserConcentratedSuperfluidPositionsUndelegatingResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserConcentratedSuperfluidPositionsUndelegatingResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserConcentratedSuperfluidPositionsUndelegatingResponse;
    static equals(a: UserConcentratedSuperfluidPositionsUndelegatingResponse | PlainMessage<UserConcentratedSuperfluidPositionsUndelegatingResponse> | undefined, b: UserConcentratedSuperfluidPositionsUndelegatingResponse | PlainMessage<UserConcentratedSuperfluidPositionsUndelegatingResponse> | undefined): boolean;
}
/**
 * THIS QUERY IS TEMPORARY
 *
 * @generated from message osmosis.superfluid.QueryRestSupplyRequest
 */
export declare class QueryRestSupplyRequest extends Message<QueryRestSupplyRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryRestSupplyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.QueryRestSupplyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRestSupplyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRestSupplyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRestSupplyRequest;
    static equals(a: QueryRestSupplyRequest | PlainMessage<QueryRestSupplyRequest> | undefined, b: QueryRestSupplyRequest | PlainMessage<QueryRestSupplyRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.superfluid.QueryRestSupplyResponse
 */
export declare class QueryRestSupplyResponse extends Message<QueryRestSupplyResponse> {
    /**
     * amount is the supply of the coin.
     *
     * @generated from field: cosmos.base.v1beta1.Coin amount = 1;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<QueryRestSupplyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.QueryRestSupplyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRestSupplyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRestSupplyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRestSupplyResponse;
    static equals(a: QueryRestSupplyResponse | PlainMessage<QueryRestSupplyResponse> | undefined, b: QueryRestSupplyResponse | PlainMessage<QueryRestSupplyResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map