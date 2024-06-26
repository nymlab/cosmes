import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { DelegationResponse, HistoricalInfo, Params, Pool, RedelegationResponse, UnbondingDelegation, Validator } from "./staking_pb.js";
/**
 * QueryValidatorsRequest is request type for Query/Validators RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorsRequest
 */
export declare class QueryValidatorsRequest extends Message<QueryValidatorsRequest> {
    /**
     * status enables to query for validators matching a given status.
     *
     * @generated from field: string status = 1;
     */
    status: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryValidatorsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryValidatorsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorsRequest;
    static equals(a: QueryValidatorsRequest | PlainMessage<QueryValidatorsRequest> | undefined, b: QueryValidatorsRequest | PlainMessage<QueryValidatorsRequest> | undefined): boolean;
}
/**
 * QueryValidatorsResponse is response type for the Query/Validators RPC method
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorsResponse
 */
export declare class QueryValidatorsResponse extends Message<QueryValidatorsResponse> {
    /**
     * validators contains all the queried validators.
     *
     * @generated from field: repeated cosmos.staking.v1beta1.Validator validators = 1;
     */
    validators: Validator[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryValidatorsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryValidatorsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorsResponse;
    static equals(a: QueryValidatorsResponse | PlainMessage<QueryValidatorsResponse> | undefined, b: QueryValidatorsResponse | PlainMessage<QueryValidatorsResponse> | undefined): boolean;
}
/**
 * QueryValidatorRequest is response type for the Query/Validator RPC method
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorRequest
 */
export declare class QueryValidatorRequest extends Message<QueryValidatorRequest> {
    /**
     * validator_addr defines the validator address to query for.
     *
     * @generated from field: string validator_addr = 1;
     */
    validatorAddr: string;
    constructor(data?: PartialMessage<QueryValidatorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryValidatorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorRequest;
    static equals(a: QueryValidatorRequest | PlainMessage<QueryValidatorRequest> | undefined, b: QueryValidatorRequest | PlainMessage<QueryValidatorRequest> | undefined): boolean;
}
/**
 * QueryValidatorResponse is response type for the Query/Validator RPC method
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorResponse
 */
export declare class QueryValidatorResponse extends Message<QueryValidatorResponse> {
    /**
     * validator defines the validator info.
     *
     * @generated from field: cosmos.staking.v1beta1.Validator validator = 1;
     */
    validator?: Validator;
    constructor(data?: PartialMessage<QueryValidatorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryValidatorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorResponse;
    static equals(a: QueryValidatorResponse | PlainMessage<QueryValidatorResponse> | undefined, b: QueryValidatorResponse | PlainMessage<QueryValidatorResponse> | undefined): boolean;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorDelegationsRequest
 */
export declare class QueryValidatorDelegationsRequest extends Message<QueryValidatorDelegationsRequest> {
    /**
     * validator_addr defines the validator address to query for.
     *
     * @generated from field: string validator_addr = 1;
     */
    validatorAddr: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryValidatorDelegationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryValidatorDelegationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorDelegationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorDelegationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorDelegationsRequest;
    static equals(a: QueryValidatorDelegationsRequest | PlainMessage<QueryValidatorDelegationsRequest> | undefined, b: QueryValidatorDelegationsRequest | PlainMessage<QueryValidatorDelegationsRequest> | undefined): boolean;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorDelegationsResponse
 */
export declare class QueryValidatorDelegationsResponse extends Message<QueryValidatorDelegationsResponse> {
    /**
     * @generated from field: repeated cosmos.staking.v1beta1.DelegationResponse delegation_responses = 1;
     */
    delegationResponses: DelegationResponse[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryValidatorDelegationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryValidatorDelegationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorDelegationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorDelegationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorDelegationsResponse;
    static equals(a: QueryValidatorDelegationsResponse | PlainMessage<QueryValidatorDelegationsResponse> | undefined, b: QueryValidatorDelegationsResponse | PlainMessage<QueryValidatorDelegationsResponse> | undefined): boolean;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest
 */
export declare class QueryValidatorUnbondingDelegationsRequest extends Message<QueryValidatorUnbondingDelegationsRequest> {
    /**
     * validator_addr defines the validator address to query for.
     *
     * @generated from field: string validator_addr = 1;
     */
    validatorAddr: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryValidatorUnbondingDelegationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorUnbondingDelegationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorUnbondingDelegationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorUnbondingDelegationsRequest;
    static equals(a: QueryValidatorUnbondingDelegationsRequest | PlainMessage<QueryValidatorUnbondingDelegationsRequest> | undefined, b: QueryValidatorUnbondingDelegationsRequest | PlainMessage<QueryValidatorUnbondingDelegationsRequest> | undefined): boolean;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse
 */
export declare class QueryValidatorUnbondingDelegationsResponse extends Message<QueryValidatorUnbondingDelegationsResponse> {
    /**
     * @generated from field: repeated cosmos.staking.v1beta1.UnbondingDelegation unbonding_responses = 1;
     */
    unbondingResponses: UnbondingDelegation[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryValidatorUnbondingDelegationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorUnbondingDelegationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorUnbondingDelegationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorUnbondingDelegationsResponse;
    static equals(a: QueryValidatorUnbondingDelegationsResponse | PlainMessage<QueryValidatorUnbondingDelegationsResponse> | undefined, b: QueryValidatorUnbondingDelegationsResponse | PlainMessage<QueryValidatorUnbondingDelegationsResponse> | undefined): boolean;
}
/**
 * QueryDelegationRequest is request type for the Query/Delegation RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegationRequest
 */
export declare class QueryDelegationRequest extends Message<QueryDelegationRequest> {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * validator_addr defines the validator address to query for.
     *
     * @generated from field: string validator_addr = 2;
     */
    validatorAddr: string;
    constructor(data?: PartialMessage<QueryDelegationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryDelegationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegationRequest;
    static equals(a: QueryDelegationRequest | PlainMessage<QueryDelegationRequest> | undefined, b: QueryDelegationRequest | PlainMessage<QueryDelegationRequest> | undefined): boolean;
}
/**
 * QueryDelegationResponse is response type for the Query/Delegation RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegationResponse
 */
export declare class QueryDelegationResponse extends Message<QueryDelegationResponse> {
    /**
     * delegation_responses defines the delegation info of a delegation.
     *
     * @generated from field: cosmos.staking.v1beta1.DelegationResponse delegation_response = 1;
     */
    delegationResponse?: DelegationResponse;
    constructor(data?: PartialMessage<QueryDelegationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryDelegationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegationResponse;
    static equals(a: QueryDelegationResponse | PlainMessage<QueryDelegationResponse> | undefined, b: QueryDelegationResponse | PlainMessage<QueryDelegationResponse> | undefined): boolean;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryUnbondingDelegationRequest
 */
export declare class QueryUnbondingDelegationRequest extends Message<QueryUnbondingDelegationRequest> {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * validator_addr defines the validator address to query for.
     *
     * @generated from field: string validator_addr = 2;
     */
    validatorAddr: string;
    constructor(data?: PartialMessage<QueryUnbondingDelegationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryUnbondingDelegationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUnbondingDelegationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUnbondingDelegationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUnbondingDelegationRequest;
    static equals(a: QueryUnbondingDelegationRequest | PlainMessage<QueryUnbondingDelegationRequest> | undefined, b: QueryUnbondingDelegationRequest | PlainMessage<QueryUnbondingDelegationRequest> | undefined): boolean;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryUnbondingDelegationResponse
 */
export declare class QueryUnbondingDelegationResponse extends Message<QueryUnbondingDelegationResponse> {
    /**
     * unbond defines the unbonding information of a delegation.
     *
     * @generated from field: cosmos.staking.v1beta1.UnbondingDelegation unbond = 1;
     */
    unbond?: UnbondingDelegation;
    constructor(data?: PartialMessage<QueryUnbondingDelegationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryUnbondingDelegationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUnbondingDelegationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUnbondingDelegationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUnbondingDelegationResponse;
    static equals(a: QueryUnbondingDelegationResponse | PlainMessage<QueryUnbondingDelegationResponse> | undefined, b: QueryUnbondingDelegationResponse | PlainMessage<QueryUnbondingDelegationResponse> | undefined): boolean;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest
 */
export declare class QueryDelegatorDelegationsRequest extends Message<QueryDelegatorDelegationsRequest> {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryDelegatorDelegationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorDelegationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorDelegationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorDelegationsRequest;
    static equals(a: QueryDelegatorDelegationsRequest | PlainMessage<QueryDelegatorDelegationsRequest> | undefined, b: QueryDelegatorDelegationsRequest | PlainMessage<QueryDelegatorDelegationsRequest> | undefined): boolean;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse
 */
export declare class QueryDelegatorDelegationsResponse extends Message<QueryDelegatorDelegationsResponse> {
    /**
     * delegation_responses defines all the delegations' info of a delegator.
     *
     * @generated from field: repeated cosmos.staking.v1beta1.DelegationResponse delegation_responses = 1;
     */
    delegationResponses: DelegationResponse[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryDelegatorDelegationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorDelegationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorDelegationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorDelegationsResponse;
    static equals(a: QueryDelegatorDelegationsResponse | PlainMessage<QueryDelegatorDelegationsResponse> | undefined, b: QueryDelegatorDelegationsResponse | PlainMessage<QueryDelegatorDelegationsResponse> | undefined): boolean;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest
 */
export declare class QueryDelegatorUnbondingDelegationsRequest extends Message<QueryDelegatorUnbondingDelegationsRequest> {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryDelegatorUnbondingDelegationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorUnbondingDelegationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorUnbondingDelegationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorUnbondingDelegationsRequest;
    static equals(a: QueryDelegatorUnbondingDelegationsRequest | PlainMessage<QueryDelegatorUnbondingDelegationsRequest> | undefined, b: QueryDelegatorUnbondingDelegationsRequest | PlainMessage<QueryDelegatorUnbondingDelegationsRequest> | undefined): boolean;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse
 */
export declare class QueryDelegatorUnbondingDelegationsResponse extends Message<QueryDelegatorUnbondingDelegationsResponse> {
    /**
     * @generated from field: repeated cosmos.staking.v1beta1.UnbondingDelegation unbonding_responses = 1;
     */
    unbondingResponses: UnbondingDelegation[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryDelegatorUnbondingDelegationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorUnbondingDelegationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorUnbondingDelegationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorUnbondingDelegationsResponse;
    static equals(a: QueryDelegatorUnbondingDelegationsResponse | PlainMessage<QueryDelegatorUnbondingDelegationsResponse> | undefined, b: QueryDelegatorUnbondingDelegationsResponse | PlainMessage<QueryDelegatorUnbondingDelegationsResponse> | undefined): boolean;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryRedelegationsRequest
 */
export declare class QueryRedelegationsRequest extends Message<QueryRedelegationsRequest> {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * src_validator_addr defines the validator address to redelegate from.
     *
     * @generated from field: string src_validator_addr = 2;
     */
    srcValidatorAddr: string;
    /**
     * dst_validator_addr defines the validator address to redelegate to.
     *
     * @generated from field: string dst_validator_addr = 3;
     */
    dstValidatorAddr: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 4;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryRedelegationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryRedelegationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRedelegationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRedelegationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRedelegationsRequest;
    static equals(a: QueryRedelegationsRequest | PlainMessage<QueryRedelegationsRequest> | undefined, b: QueryRedelegationsRequest | PlainMessage<QueryRedelegationsRequest> | undefined): boolean;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryRedelegationsResponse
 */
export declare class QueryRedelegationsResponse extends Message<QueryRedelegationsResponse> {
    /**
     * @generated from field: repeated cosmos.staking.v1beta1.RedelegationResponse redelegation_responses = 1;
     */
    redelegationResponses: RedelegationResponse[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryRedelegationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryRedelegationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRedelegationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRedelegationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRedelegationsResponse;
    static equals(a: QueryRedelegationsResponse | PlainMessage<QueryRedelegationsResponse> | undefined, b: QueryRedelegationsResponse | PlainMessage<QueryRedelegationsResponse> | undefined): boolean;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest
 */
export declare class QueryDelegatorValidatorsRequest extends Message<QueryDelegatorValidatorsRequest> {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryDelegatorValidatorsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorValidatorsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorsRequest;
    static equals(a: QueryDelegatorValidatorsRequest | PlainMessage<QueryDelegatorValidatorsRequest> | undefined, b: QueryDelegatorValidatorsRequest | PlainMessage<QueryDelegatorValidatorsRequest> | undefined): boolean;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse
 */
export declare class QueryDelegatorValidatorsResponse extends Message<QueryDelegatorValidatorsResponse> {
    /**
     * validators defines the validators' info of a delegator.
     *
     * @generated from field: repeated cosmos.staking.v1beta1.Validator validators = 1;
     */
    validators: Validator[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryDelegatorValidatorsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorValidatorsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorsResponse;
    static equals(a: QueryDelegatorValidatorsResponse | PlainMessage<QueryDelegatorValidatorsResponse> | undefined, b: QueryDelegatorValidatorsResponse | PlainMessage<QueryDelegatorValidatorsResponse> | undefined): boolean;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorValidatorRequest
 */
export declare class QueryDelegatorValidatorRequest extends Message<QueryDelegatorValidatorRequest> {
    /**
     * delegator_addr defines the delegator address to query for.
     *
     * @generated from field: string delegator_addr = 1;
     */
    delegatorAddr: string;
    /**
     * validator_addr defines the validator address to query for.
     *
     * @generated from field: string validator_addr = 2;
     */
    validatorAddr: string;
    constructor(data?: PartialMessage<QueryDelegatorValidatorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryDelegatorValidatorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorValidatorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorRequest;
    static equals(a: QueryDelegatorValidatorRequest | PlainMessage<QueryDelegatorValidatorRequest> | undefined, b: QueryDelegatorValidatorRequest | PlainMessage<QueryDelegatorValidatorRequest> | undefined): boolean;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryDelegatorValidatorResponse
 */
export declare class QueryDelegatorValidatorResponse extends Message<QueryDelegatorValidatorResponse> {
    /**
     * validator defines the validator info.
     *
     * @generated from field: cosmos.staking.v1beta1.Validator validator = 1;
     */
    validator?: Validator;
    constructor(data?: PartialMessage<QueryDelegatorValidatorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryDelegatorValidatorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorValidatorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorResponse;
    static equals(a: QueryDelegatorValidatorResponse | PlainMessage<QueryDelegatorValidatorResponse> | undefined, b: QueryDelegatorValidatorResponse | PlainMessage<QueryDelegatorValidatorResponse> | undefined): boolean;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryHistoricalInfoRequest
 */
export declare class QueryHistoricalInfoRequest extends Message<QueryHistoricalInfoRequest> {
    /**
     * height defines at which height to query the historical info.
     *
     * @generated from field: int64 height = 1;
     */
    height: bigint;
    constructor(data?: PartialMessage<QueryHistoricalInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryHistoricalInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryHistoricalInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryHistoricalInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryHistoricalInfoRequest;
    static equals(a: QueryHistoricalInfoRequest | PlainMessage<QueryHistoricalInfoRequest> | undefined, b: QueryHistoricalInfoRequest | PlainMessage<QueryHistoricalInfoRequest> | undefined): boolean;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryHistoricalInfoResponse
 */
export declare class QueryHistoricalInfoResponse extends Message<QueryHistoricalInfoResponse> {
    /**
     * hist defines the historical info at the given height.
     *
     * @generated from field: cosmos.staking.v1beta1.HistoricalInfo hist = 1;
     */
    hist?: HistoricalInfo;
    constructor(data?: PartialMessage<QueryHistoricalInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryHistoricalInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryHistoricalInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryHistoricalInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryHistoricalInfoResponse;
    static equals(a: QueryHistoricalInfoResponse | PlainMessage<QueryHistoricalInfoResponse> | undefined, b: QueryHistoricalInfoResponse | PlainMessage<QueryHistoricalInfoResponse> | undefined): boolean;
}
/**
 * QueryPoolRequest is request type for the Query/Pool RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryPoolRequest
 */
export declare class QueryPoolRequest extends Message<QueryPoolRequest> {
    constructor(data?: PartialMessage<QueryPoolRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryPoolRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPoolRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPoolRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPoolRequest;
    static equals(a: QueryPoolRequest | PlainMessage<QueryPoolRequest> | undefined, b: QueryPoolRequest | PlainMessage<QueryPoolRequest> | undefined): boolean;
}
/**
 * QueryPoolResponse is response type for the Query/Pool RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryPoolResponse
 */
export declare class QueryPoolResponse extends Message<QueryPoolResponse> {
    /**
     * pool defines the pool info.
     *
     * @generated from field: cosmos.staking.v1beta1.Pool pool = 1;
     */
    pool?: Pool;
    constructor(data?: PartialMessage<QueryPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPoolResponse;
    static equals(a: QueryPoolResponse | PlainMessage<QueryPoolResponse> | undefined, b: QueryPoolResponse | PlainMessage<QueryPoolResponse> | undefined): boolean;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.staking.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params holds all the parameters of this module.
     *
     * @generated from field: cosmos.staking.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map