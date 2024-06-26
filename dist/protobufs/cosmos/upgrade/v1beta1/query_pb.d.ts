import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ModuleVersion, Plan } from "./upgrade_pb.js";
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryCurrentPlanRequest
 */
export declare class QueryCurrentPlanRequest extends Message<QueryCurrentPlanRequest> {
    constructor(data?: PartialMessage<QueryCurrentPlanRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.QueryCurrentPlanRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCurrentPlanRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCurrentPlanRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCurrentPlanRequest;
    static equals(a: QueryCurrentPlanRequest | PlainMessage<QueryCurrentPlanRequest> | undefined, b: QueryCurrentPlanRequest | PlainMessage<QueryCurrentPlanRequest> | undefined): boolean;
}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryCurrentPlanResponse
 */
export declare class QueryCurrentPlanResponse extends Message<QueryCurrentPlanResponse> {
    /**
     * plan is the current upgrade plan.
     *
     * @generated from field: cosmos.upgrade.v1beta1.Plan plan = 1;
     */
    plan?: Plan;
    constructor(data?: PartialMessage<QueryCurrentPlanResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.QueryCurrentPlanResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCurrentPlanResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCurrentPlanResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCurrentPlanResponse;
    static equals(a: QueryCurrentPlanResponse | PlainMessage<QueryCurrentPlanResponse> | undefined, b: QueryCurrentPlanResponse | PlainMessage<QueryCurrentPlanResponse> | undefined): boolean;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryAppliedPlanRequest
 */
export declare class QueryAppliedPlanRequest extends Message<QueryAppliedPlanRequest> {
    /**
     * name is the name of the applied plan to query for.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    constructor(data?: PartialMessage<QueryAppliedPlanRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.QueryAppliedPlanRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAppliedPlanRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAppliedPlanRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAppliedPlanRequest;
    static equals(a: QueryAppliedPlanRequest | PlainMessage<QueryAppliedPlanRequest> | undefined, b: QueryAppliedPlanRequest | PlainMessage<QueryAppliedPlanRequest> | undefined): boolean;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryAppliedPlanResponse
 */
export declare class QueryAppliedPlanResponse extends Message<QueryAppliedPlanResponse> {
    /**
     * height is the block height at which the plan was applied.
     *
     * @generated from field: int64 height = 1;
     */
    height: bigint;
    constructor(data?: PartialMessage<QueryAppliedPlanResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.QueryAppliedPlanResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAppliedPlanResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAppliedPlanResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAppliedPlanResponse;
    static equals(a: QueryAppliedPlanResponse | PlainMessage<QueryAppliedPlanResponse> | undefined, b: QueryAppliedPlanResponse | PlainMessage<QueryAppliedPlanResponse> | undefined): boolean;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest
 * @deprecated
 */
export declare class QueryUpgradedConsensusStateRequest extends Message<QueryUpgradedConsensusStateRequest> {
    /**
     * last height of the current chain must be sent in request
     * as this is the height under which next consensus state is stored
     *
     * @generated from field: int64 last_height = 1;
     */
    lastHeight: bigint;
    constructor(data?: PartialMessage<QueryUpgradedConsensusStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUpgradedConsensusStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUpgradedConsensusStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUpgradedConsensusStateRequest;
    static equals(a: QueryUpgradedConsensusStateRequest | PlainMessage<QueryUpgradedConsensusStateRequest> | undefined, b: QueryUpgradedConsensusStateRequest | PlainMessage<QueryUpgradedConsensusStateRequest> | undefined): boolean;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse
 * @deprecated
 */
export declare class QueryUpgradedConsensusStateResponse extends Message<QueryUpgradedConsensusStateResponse> {
    /**
     * Since: cosmos-sdk 0.43
     *
     * @generated from field: bytes upgraded_consensus_state = 2;
     */
    upgradedConsensusState: Uint8Array;
    constructor(data?: PartialMessage<QueryUpgradedConsensusStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUpgradedConsensusStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUpgradedConsensusStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUpgradedConsensusStateResponse;
    static equals(a: QueryUpgradedConsensusStateResponse | PlainMessage<QueryUpgradedConsensusStateResponse> | undefined, b: QueryUpgradedConsensusStateResponse | PlainMessage<QueryUpgradedConsensusStateResponse> | undefined): boolean;
}
/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryModuleVersionsRequest
 */
export declare class QueryModuleVersionsRequest extends Message<QueryModuleVersionsRequest> {
    /**
     * module_name is a field to query a specific module
     * consensus version from state. Leaving this empty will
     * fetch the full list of module versions from state
     *
     * @generated from field: string module_name = 1;
     */
    moduleName: string;
    constructor(data?: PartialMessage<QueryModuleVersionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.QueryModuleVersionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleVersionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleVersionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleVersionsRequest;
    static equals(a: QueryModuleVersionsRequest | PlainMessage<QueryModuleVersionsRequest> | undefined, b: QueryModuleVersionsRequest | PlainMessage<QueryModuleVersionsRequest> | undefined): boolean;
}
/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryModuleVersionsResponse
 */
export declare class QueryModuleVersionsResponse extends Message<QueryModuleVersionsResponse> {
    /**
     * module_versions is a list of module names with their consensus versions.
     *
     * @generated from field: repeated cosmos.upgrade.v1beta1.ModuleVersion module_versions = 1;
     */
    moduleVersions: ModuleVersion[];
    constructor(data?: PartialMessage<QueryModuleVersionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.QueryModuleVersionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleVersionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleVersionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleVersionsResponse;
    static equals(a: QueryModuleVersionsResponse | PlainMessage<QueryModuleVersionsResponse> | undefined, b: QueryModuleVersionsResponse | PlainMessage<QueryModuleVersionsResponse> | undefined): boolean;
}
/**
 * QueryAuthorityRequest is the request type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryAuthorityRequest
 */
export declare class QueryAuthorityRequest extends Message<QueryAuthorityRequest> {
    constructor(data?: PartialMessage<QueryAuthorityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.QueryAuthorityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAuthorityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAuthorityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAuthorityRequest;
    static equals(a: QueryAuthorityRequest | PlainMessage<QueryAuthorityRequest> | undefined, b: QueryAuthorityRequest | PlainMessage<QueryAuthorityRequest> | undefined): boolean;
}
/**
 * QueryAuthorityResponse is the response type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.QueryAuthorityResponse
 */
export declare class QueryAuthorityResponse extends Message<QueryAuthorityResponse> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryAuthorityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.QueryAuthorityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAuthorityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAuthorityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAuthorityResponse;
    static equals(a: QueryAuthorityResponse | PlainMessage<QueryAuthorityResponse> | undefined, b: QueryAuthorityResponse | PlainMessage<QueryAuthorityResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map