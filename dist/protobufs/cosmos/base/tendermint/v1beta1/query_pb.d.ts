import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../query/v1beta1/pagination_pb.js";
import { BlockID } from "../../../../tendermint/types/types_pb.js";
import { Block } from "../../../../tendermint/types/block_pb.js";
import { Block as Block$1 } from "./types_pb.js";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types_pb.js";
/**
 * GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest
 */
export declare class GetValidatorSetByHeightRequest extends Message<GetValidatorSetByHeightRequest> {
    /**
     * @generated from field: int64 height = 1;
     */
    height: bigint;
    /**
     * pagination defines an pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<GetValidatorSetByHeightRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetValidatorSetByHeightRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetValidatorSetByHeightRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetValidatorSetByHeightRequest;
    static equals(a: GetValidatorSetByHeightRequest | PlainMessage<GetValidatorSetByHeightRequest> | undefined, b: GetValidatorSetByHeightRequest | PlainMessage<GetValidatorSetByHeightRequest> | undefined): boolean;
}
/**
 * GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse
 */
export declare class GetValidatorSetByHeightResponse extends Message<GetValidatorSetByHeightResponse> {
    /**
     * @generated from field: int64 block_height = 1;
     */
    blockHeight: bigint;
    /**
     * @generated from field: repeated cosmos.base.tendermint.v1beta1.Validator validators = 2;
     */
    validators: Validator[];
    /**
     * pagination defines an pagination for the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 3;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<GetValidatorSetByHeightResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetValidatorSetByHeightResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetValidatorSetByHeightResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetValidatorSetByHeightResponse;
    static equals(a: GetValidatorSetByHeightResponse | PlainMessage<GetValidatorSetByHeightResponse> | undefined, b: GetValidatorSetByHeightResponse | PlainMessage<GetValidatorSetByHeightResponse> | undefined): boolean;
}
/**
 * GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest
 */
export declare class GetLatestValidatorSetRequest extends Message<GetLatestValidatorSetRequest> {
    /**
     * pagination defines an pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<GetLatestValidatorSetRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestValidatorSetRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestValidatorSetRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestValidatorSetRequest;
    static equals(a: GetLatestValidatorSetRequest | PlainMessage<GetLatestValidatorSetRequest> | undefined, b: GetLatestValidatorSetRequest | PlainMessage<GetLatestValidatorSetRequest> | undefined): boolean;
}
/**
 * GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse
 */
export declare class GetLatestValidatorSetResponse extends Message<GetLatestValidatorSetResponse> {
    /**
     * @generated from field: int64 block_height = 1;
     */
    blockHeight: bigint;
    /**
     * @generated from field: repeated cosmos.base.tendermint.v1beta1.Validator validators = 2;
     */
    validators: Validator[];
    /**
     * pagination defines an pagination for the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 3;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<GetLatestValidatorSetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestValidatorSetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestValidatorSetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestValidatorSetResponse;
    static equals(a: GetLatestValidatorSetResponse | PlainMessage<GetLatestValidatorSetResponse> | undefined, b: GetLatestValidatorSetResponse | PlainMessage<GetLatestValidatorSetResponse> | undefined): boolean;
}
/**
 * Validator is the type for the validator-set.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.Validator
 */
export declare class Validator extends Message<Validator> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: google.protobuf.Any pub_key = 2;
     */
    pubKey?: Any;
    /**
     * @generated from field: int64 voting_power = 3;
     */
    votingPower: bigint;
    /**
     * @generated from field: int64 proposer_priority = 4;
     */
    proposerPriority: bigint;
    constructor(data?: PartialMessage<Validator>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.Validator";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Validator;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Validator;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Validator;
    static equals(a: Validator | PlainMessage<Validator> | undefined, b: Validator | PlainMessage<Validator> | undefined): boolean;
}
/**
 * GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest
 */
export declare class GetBlockByHeightRequest extends Message<GetBlockByHeightRequest> {
    /**
     * @generated from field: int64 height = 1;
     */
    height: bigint;
    constructor(data?: PartialMessage<GetBlockByHeightRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBlockByHeightRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBlockByHeightRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBlockByHeightRequest;
    static equals(a: GetBlockByHeightRequest | PlainMessage<GetBlockByHeightRequest> | undefined, b: GetBlockByHeightRequest | PlainMessage<GetBlockByHeightRequest> | undefined): boolean;
}
/**
 * GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse
 */
export declare class GetBlockByHeightResponse extends Message<GetBlockByHeightResponse> {
    /**
     * @generated from field: tendermint.types.BlockID block_id = 1;
     */
    blockId?: BlockID;
    /**
     * Deprecated: please use `sdk_block` instead
     *
     * @generated from field: tendermint.types.Block block = 2;
     */
    block?: Block;
    /**
     * Since: cosmos-sdk 0.47
     *
     * @generated from field: cosmos.base.tendermint.v1beta1.Block sdk_block = 3;
     */
    sdkBlock?: Block$1;
    constructor(data?: PartialMessage<GetBlockByHeightResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBlockByHeightResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBlockByHeightResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBlockByHeightResponse;
    static equals(a: GetBlockByHeightResponse | PlainMessage<GetBlockByHeightResponse> | undefined, b: GetBlockByHeightResponse | PlainMessage<GetBlockByHeightResponse> | undefined): boolean;
}
/**
 * GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetLatestBlockRequest
 */
export declare class GetLatestBlockRequest extends Message<GetLatestBlockRequest> {
    constructor(data?: PartialMessage<GetLatestBlockRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.GetLatestBlockRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestBlockRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestBlockRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestBlockRequest;
    static equals(a: GetLatestBlockRequest | PlainMessage<GetLatestBlockRequest> | undefined, b: GetLatestBlockRequest | PlainMessage<GetLatestBlockRequest> | undefined): boolean;
}
/**
 * GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetLatestBlockResponse
 */
export declare class GetLatestBlockResponse extends Message<GetLatestBlockResponse> {
    /**
     * @generated from field: tendermint.types.BlockID block_id = 1;
     */
    blockId?: BlockID;
    /**
     * Deprecated: please use `sdk_block` instead
     *
     * @generated from field: tendermint.types.Block block = 2;
     */
    block?: Block;
    /**
     * Since: cosmos-sdk 0.47
     *
     * @generated from field: cosmos.base.tendermint.v1beta1.Block sdk_block = 3;
     */
    sdkBlock?: Block$1;
    constructor(data?: PartialMessage<GetLatestBlockResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.GetLatestBlockResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestBlockResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestBlockResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestBlockResponse;
    static equals(a: GetLatestBlockResponse | PlainMessage<GetLatestBlockResponse> | undefined, b: GetLatestBlockResponse | PlainMessage<GetLatestBlockResponse> | undefined): boolean;
}
/**
 * GetSyncingRequest is the request type for the Query/GetSyncing RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetSyncingRequest
 */
export declare class GetSyncingRequest extends Message<GetSyncingRequest> {
    constructor(data?: PartialMessage<GetSyncingRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.GetSyncingRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSyncingRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSyncingRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSyncingRequest;
    static equals(a: GetSyncingRequest | PlainMessage<GetSyncingRequest> | undefined, b: GetSyncingRequest | PlainMessage<GetSyncingRequest> | undefined): boolean;
}
/**
 * GetSyncingResponse is the response type for the Query/GetSyncing RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetSyncingResponse
 */
export declare class GetSyncingResponse extends Message<GetSyncingResponse> {
    /**
     * @generated from field: bool syncing = 1;
     */
    syncing: boolean;
    constructor(data?: PartialMessage<GetSyncingResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.GetSyncingResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSyncingResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSyncingResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSyncingResponse;
    static equals(a: GetSyncingResponse | PlainMessage<GetSyncingResponse> | undefined, b: GetSyncingResponse | PlainMessage<GetSyncingResponse> | undefined): boolean;
}
/**
 * GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetNodeInfoRequest
 */
export declare class GetNodeInfoRequest extends Message<GetNodeInfoRequest> {
    constructor(data?: PartialMessage<GetNodeInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.GetNodeInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNodeInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNodeInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNodeInfoRequest;
    static equals(a: GetNodeInfoRequest | PlainMessage<GetNodeInfoRequest> | undefined, b: GetNodeInfoRequest | PlainMessage<GetNodeInfoRequest> | undefined): boolean;
}
/**
 * GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetNodeInfoResponse
 */
export declare class GetNodeInfoResponse extends Message<GetNodeInfoResponse> {
    /**
     * @generated from field: tendermint.p2p.DefaultNodeInfo default_node_info = 1;
     */
    defaultNodeInfo?: DefaultNodeInfo;
    /**
     * @generated from field: cosmos.base.tendermint.v1beta1.VersionInfo application_version = 2;
     */
    applicationVersion?: VersionInfo;
    constructor(data?: PartialMessage<GetNodeInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.GetNodeInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNodeInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNodeInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNodeInfoResponse;
    static equals(a: GetNodeInfoResponse | PlainMessage<GetNodeInfoResponse> | undefined, b: GetNodeInfoResponse | PlainMessage<GetNodeInfoResponse> | undefined): boolean;
}
/**
 * VersionInfo is the type for the GetNodeInfoResponse message.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.VersionInfo
 */
export declare class VersionInfo extends Message<VersionInfo> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string app_name = 2;
     */
    appName: string;
    /**
     * @generated from field: string version = 3;
     */
    version: string;
    /**
     * @generated from field: string git_commit = 4;
     */
    gitCommit: string;
    /**
     * @generated from field: string build_tags = 5;
     */
    buildTags: string;
    /**
     * @generated from field: string go_version = 6;
     */
    goVersion: string;
    /**
     * @generated from field: repeated cosmos.base.tendermint.v1beta1.Module build_deps = 7;
     */
    buildDeps: Module[];
    /**
     * Since: cosmos-sdk 0.43
     *
     * @generated from field: string cosmos_sdk_version = 8;
     */
    cosmosSdkVersion: string;
    constructor(data?: PartialMessage<VersionInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.VersionInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VersionInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VersionInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VersionInfo;
    static equals(a: VersionInfo | PlainMessage<VersionInfo> | undefined, b: VersionInfo | PlainMessage<VersionInfo> | undefined): boolean;
}
/**
 * Module is the type for VersionInfo
 *
 * @generated from message cosmos.base.tendermint.v1beta1.Module
 */
export declare class Module extends Message<Module> {
    /**
     * module path
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * module version
     *
     * @generated from field: string version = 2;
     */
    version: string;
    /**
     * checksum
     *
     * @generated from field: string sum = 3;
     */
    sum: string;
    constructor(data?: PartialMessage<Module>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.Module";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module;
    static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean;
}
/**
 * ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.ABCIQueryRequest
 */
export declare class ABCIQueryRequest extends Message<ABCIQueryRequest> {
    /**
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from field: string path = 2;
     */
    path: string;
    /**
     * @generated from field: int64 height = 3;
     */
    height: bigint;
    /**
     * @generated from field: bool prove = 4;
     */
    prove: boolean;
    constructor(data?: PartialMessage<ABCIQueryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.ABCIQueryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ABCIQueryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ABCIQueryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ABCIQueryRequest;
    static equals(a: ABCIQueryRequest | PlainMessage<ABCIQueryRequest> | undefined, b: ABCIQueryRequest | PlainMessage<ABCIQueryRequest> | undefined): boolean;
}
/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 *
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.ABCIQueryResponse
 */
export declare class ABCIQueryResponse extends Message<ABCIQueryResponse> {
    /**
     * @generated from field: uint32 code = 1;
     */
    code: number;
    /**
     * nondeterministic
     *
     * @generated from field: string log = 3;
     */
    log: string;
    /**
     * nondeterministic
     *
     * @generated from field: string info = 4;
     */
    info: string;
    /**
     * @generated from field: int64 index = 5;
     */
    index: bigint;
    /**
     * @generated from field: bytes key = 6;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes value = 7;
     */
    value: Uint8Array;
    /**
     * @generated from field: cosmos.base.tendermint.v1beta1.ProofOps proof_ops = 8;
     */
    proofOps?: ProofOps;
    /**
     * @generated from field: int64 height = 9;
     */
    height: bigint;
    /**
     * @generated from field: string codespace = 10;
     */
    codespace: string;
    constructor(data?: PartialMessage<ABCIQueryResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.ABCIQueryResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ABCIQueryResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ABCIQueryResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ABCIQueryResponse;
    static equals(a: ABCIQueryResponse | PlainMessage<ABCIQueryResponse> | undefined, b: ABCIQueryResponse | PlainMessage<ABCIQueryResponse> | undefined): boolean;
}
/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 *
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.ProofOp
 */
export declare class ProofOp extends Message<ProofOp> {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: bytes key = 2;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes data = 3;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<ProofOp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.ProofOp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProofOp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProofOp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProofOp;
    static equals(a: ProofOp | PlainMessage<ProofOp> | undefined, b: ProofOp | PlainMessage<ProofOp> | undefined): boolean;
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 *
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.ProofOps
 */
export declare class ProofOps extends Message<ProofOps> {
    /**
     * @generated from field: repeated cosmos.base.tendermint.v1beta1.ProofOp ops = 1;
     */
    ops: ProofOp[];
    constructor(data?: PartialMessage<ProofOps>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.tendermint.v1beta1.ProofOps";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProofOps;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProofOps;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProofOps;
    static equals(a: ProofOps | PlainMessage<ProofOps> | undefined, b: ProofOps | PlainMessage<ProofOps> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map