import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DelegationDelegatorReward, Params, ValidatorAccumulatedCommission, ValidatorOutstandingRewards, ValidatorSlashEvent } from "./distribution_pb.js";
import { DecCoin } from "../../base/v1beta1/coin_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: cosmos.distribution.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryValidatorDistributionInfoRequest is the request type for the Query/ValidatorDistributionInfo RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest
 */
export declare class QueryValidatorDistributionInfoRequest extends Message<QueryValidatorDistributionInfoRequest> {
    /**
     * validator_address defines the validator address to query for.
     *
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    constructor(data?: PartialMessage<QueryValidatorDistributionInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorDistributionInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorDistributionInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorDistributionInfoRequest;
    static equals(a: QueryValidatorDistributionInfoRequest | PlainMessage<QueryValidatorDistributionInfoRequest> | undefined, b: QueryValidatorDistributionInfoRequest | PlainMessage<QueryValidatorDistributionInfoRequest> | undefined): boolean;
}
/**
 * QueryValidatorDistributionInfoResponse is the response type for the Query/ValidatorDistributionInfo RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse
 */
export declare class QueryValidatorDistributionInfoResponse extends Message<QueryValidatorDistributionInfoResponse> {
    /**
     * operator_address defines the validator operator address.
     *
     * @generated from field: string operator_address = 1;
     */
    operatorAddress: string;
    /**
     * self_bond_rewards defines the self delegations rewards.
     *
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin self_bond_rewards = 2;
     */
    selfBondRewards: DecCoin[];
    /**
     * commission defines the commission the validator received.
     *
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin commission = 3;
     */
    commission: DecCoin[];
    constructor(data?: PartialMessage<QueryValidatorDistributionInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorDistributionInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorDistributionInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorDistributionInfoResponse;
    static equals(a: QueryValidatorDistributionInfoResponse | PlainMessage<QueryValidatorDistributionInfoResponse> | undefined, b: QueryValidatorDistributionInfoResponse | PlainMessage<QueryValidatorDistributionInfoResponse> | undefined): boolean;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest
 */
export declare class QueryValidatorOutstandingRewardsRequest extends Message<QueryValidatorOutstandingRewardsRequest> {
    /**
     * validator_address defines the validator address to query for.
     *
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    constructor(data?: PartialMessage<QueryValidatorOutstandingRewardsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorOutstandingRewardsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorOutstandingRewardsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorOutstandingRewardsRequest;
    static equals(a: QueryValidatorOutstandingRewardsRequest | PlainMessage<QueryValidatorOutstandingRewardsRequest> | undefined, b: QueryValidatorOutstandingRewardsRequest | PlainMessage<QueryValidatorOutstandingRewardsRequest> | undefined): boolean;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse
 */
export declare class QueryValidatorOutstandingRewardsResponse extends Message<QueryValidatorOutstandingRewardsResponse> {
    /**
     * @generated from field: cosmos.distribution.v1beta1.ValidatorOutstandingRewards rewards = 1;
     */
    rewards?: ValidatorOutstandingRewards;
    constructor(data?: PartialMessage<QueryValidatorOutstandingRewardsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorOutstandingRewardsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorOutstandingRewardsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorOutstandingRewardsResponse;
    static equals(a: QueryValidatorOutstandingRewardsResponse | PlainMessage<QueryValidatorOutstandingRewardsResponse> | undefined, b: QueryValidatorOutstandingRewardsResponse | PlainMessage<QueryValidatorOutstandingRewardsResponse> | undefined): boolean;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorCommissionRequest
 */
export declare class QueryValidatorCommissionRequest extends Message<QueryValidatorCommissionRequest> {
    /**
     * validator_address defines the validator address to query for.
     *
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    constructor(data?: PartialMessage<QueryValidatorCommissionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorCommissionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorCommissionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorCommissionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorCommissionRequest;
    static equals(a: QueryValidatorCommissionRequest | PlainMessage<QueryValidatorCommissionRequest> | undefined, b: QueryValidatorCommissionRequest | PlainMessage<QueryValidatorCommissionRequest> | undefined): boolean;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorCommissionResponse
 */
export declare class QueryValidatorCommissionResponse extends Message<QueryValidatorCommissionResponse> {
    /**
     * commission defines the commission the validator received.
     *
     * @generated from field: cosmos.distribution.v1beta1.ValidatorAccumulatedCommission commission = 1;
     */
    commission?: ValidatorAccumulatedCommission;
    constructor(data?: PartialMessage<QueryValidatorCommissionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorCommissionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorCommissionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorCommissionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorCommissionResponse;
    static equals(a: QueryValidatorCommissionResponse | PlainMessage<QueryValidatorCommissionResponse> | undefined, b: QueryValidatorCommissionResponse | PlainMessage<QueryValidatorCommissionResponse> | undefined): boolean;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorSlashesRequest
 */
export declare class QueryValidatorSlashesRequest extends Message<QueryValidatorSlashesRequest> {
    /**
     * validator_address defines the validator address to query for.
     *
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * starting_height defines the optional starting height to query the slashes.
     *
     * @generated from field: uint64 starting_height = 2;
     */
    startingHeight: bigint;
    /**
     * starting_height defines the optional ending height to query the slashes.
     *
     * @generated from field: uint64 ending_height = 3;
     */
    endingHeight: bigint;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 4;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryValidatorSlashesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorSlashesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorSlashesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorSlashesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorSlashesRequest;
    static equals(a: QueryValidatorSlashesRequest | PlainMessage<QueryValidatorSlashesRequest> | undefined, b: QueryValidatorSlashesRequest | PlainMessage<QueryValidatorSlashesRequest> | undefined): boolean;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorSlashesResponse
 */
export declare class QueryValidatorSlashesResponse extends Message<QueryValidatorSlashesResponse> {
    /**
     * slashes defines the slashes the validator received.
     *
     * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorSlashEvent slashes = 1;
     */
    slashes: ValidatorSlashEvent[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryValidatorSlashesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorSlashesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorSlashesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorSlashesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorSlashesResponse;
    static equals(a: QueryValidatorSlashesResponse | PlainMessage<QueryValidatorSlashesResponse> | undefined, b: QueryValidatorSlashesResponse | PlainMessage<QueryValidatorSlashesResponse> | undefined): boolean;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegationRewardsRequest
 */
export declare class QueryDelegationRewardsRequest extends Message<QueryDelegationRewardsRequest> {
    /**
     * delegator_address defines the delegator address to query for.
     *
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * validator_address defines the validator address to query for.
     *
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    constructor(data?: PartialMessage<QueryDelegationRewardsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegationRewardsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegationRewardsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegationRewardsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegationRewardsRequest;
    static equals(a: QueryDelegationRewardsRequest | PlainMessage<QueryDelegationRewardsRequest> | undefined, b: QueryDelegationRewardsRequest | PlainMessage<QueryDelegationRewardsRequest> | undefined): boolean;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegationRewardsResponse
 */
export declare class QueryDelegationRewardsResponse extends Message<QueryDelegationRewardsResponse> {
    /**
     * rewards defines the rewards accrued by a delegation.
     *
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin rewards = 1;
     */
    rewards: DecCoin[];
    constructor(data?: PartialMessage<QueryDelegationRewardsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegationRewardsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegationRewardsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegationRewardsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegationRewardsResponse;
    static equals(a: QueryDelegationRewardsResponse | PlainMessage<QueryDelegationRewardsResponse> | undefined, b: QueryDelegationRewardsResponse | PlainMessage<QueryDelegationRewardsResponse> | undefined): boolean;
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest
 */
export declare class QueryDelegationTotalRewardsRequest extends Message<QueryDelegationTotalRewardsRequest> {
    /**
     * delegator_address defines the delegator address to query for.
     *
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    constructor(data?: PartialMessage<QueryDelegationTotalRewardsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegationTotalRewardsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegationTotalRewardsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegationTotalRewardsRequest;
    static equals(a: QueryDelegationTotalRewardsRequest | PlainMessage<QueryDelegationTotalRewardsRequest> | undefined, b: QueryDelegationTotalRewardsRequest | PlainMessage<QueryDelegationTotalRewardsRequest> | undefined): boolean;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse
 */
export declare class QueryDelegationTotalRewardsResponse extends Message<QueryDelegationTotalRewardsResponse> {
    /**
     * rewards defines all the rewards accrued by a delegator.
     *
     * @generated from field: repeated cosmos.distribution.v1beta1.DelegationDelegatorReward rewards = 1;
     */
    rewards: DelegationDelegatorReward[];
    /**
     * total defines the sum of all the rewards.
     *
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin total = 2;
     */
    total: DecCoin[];
    constructor(data?: PartialMessage<QueryDelegationTotalRewardsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegationTotalRewardsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegationTotalRewardsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegationTotalRewardsResponse;
    static equals(a: QueryDelegationTotalRewardsResponse | PlainMessage<QueryDelegationTotalRewardsResponse> | undefined, b: QueryDelegationTotalRewardsResponse | PlainMessage<QueryDelegationTotalRewardsResponse> | undefined): boolean;
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest
 */
export declare class QueryDelegatorValidatorsRequest extends Message<QueryDelegatorValidatorsRequest> {
    /**
     * delegator_address defines the delegator address to query for.
     *
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    constructor(data?: PartialMessage<QueryDelegatorValidatorsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorValidatorsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorsRequest;
    static equals(a: QueryDelegatorValidatorsRequest | PlainMessage<QueryDelegatorValidatorsRequest> | undefined, b: QueryDelegatorValidatorsRequest | PlainMessage<QueryDelegatorValidatorsRequest> | undefined): boolean;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse
 */
export declare class QueryDelegatorValidatorsResponse extends Message<QueryDelegatorValidatorsResponse> {
    /**
     * validators defines the validators a delegator is delegating for.
     *
     * @generated from field: repeated string validators = 1;
     */
    validators: string[];
    constructor(data?: PartialMessage<QueryDelegatorValidatorsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorValidatorsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorsResponse;
    static equals(a: QueryDelegatorValidatorsResponse | PlainMessage<QueryDelegatorValidatorsResponse> | undefined, b: QueryDelegatorValidatorsResponse | PlainMessage<QueryDelegatorValidatorsResponse> | undefined): boolean;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest
 */
export declare class QueryDelegatorWithdrawAddressRequest extends Message<QueryDelegatorWithdrawAddressRequest> {
    /**
     * delegator_address defines the delegator address to query for.
     *
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    constructor(data?: PartialMessage<QueryDelegatorWithdrawAddressRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorWithdrawAddressRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorWithdrawAddressRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorWithdrawAddressRequest;
    static equals(a: QueryDelegatorWithdrawAddressRequest | PlainMessage<QueryDelegatorWithdrawAddressRequest> | undefined, b: QueryDelegatorWithdrawAddressRequest | PlainMessage<QueryDelegatorWithdrawAddressRequest> | undefined): boolean;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse
 */
export declare class QueryDelegatorWithdrawAddressResponse extends Message<QueryDelegatorWithdrawAddressResponse> {
    /**
     * withdraw_address defines the delegator address to query for.
     *
     * @generated from field: string withdraw_address = 1;
     */
    withdrawAddress: string;
    constructor(data?: PartialMessage<QueryDelegatorWithdrawAddressResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorWithdrawAddressResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorWithdrawAddressResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorWithdrawAddressResponse;
    static equals(a: QueryDelegatorWithdrawAddressResponse | PlainMessage<QueryDelegatorWithdrawAddressResponse> | undefined, b: QueryDelegatorWithdrawAddressResponse | PlainMessage<QueryDelegatorWithdrawAddressResponse> | undefined): boolean;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryCommunityPoolRequest
 */
export declare class QueryCommunityPoolRequest extends Message<QueryCommunityPoolRequest> {
    constructor(data?: PartialMessage<QueryCommunityPoolRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryCommunityPoolRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCommunityPoolRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCommunityPoolRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCommunityPoolRequest;
    static equals(a: QueryCommunityPoolRequest | PlainMessage<QueryCommunityPoolRequest> | undefined, b: QueryCommunityPoolRequest | PlainMessage<QueryCommunityPoolRequest> | undefined): boolean;
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryCommunityPoolResponse
 */
export declare class QueryCommunityPoolResponse extends Message<QueryCommunityPoolResponse> {
    /**
     * pool defines community pool's coins.
     *
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin pool = 1;
     */
    pool: DecCoin[];
    constructor(data?: PartialMessage<QueryCommunityPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.QueryCommunityPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCommunityPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCommunityPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCommunityPoolResponse;
    static equals(a: QueryCommunityPoolResponse | PlainMessage<QueryCommunityPoolResponse> | undefined, b: QueryCommunityPoolResponse | PlainMessage<QueryCommunityPoolResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map