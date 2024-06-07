import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
/**
 * =============================== ContractInfoByPoolId
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.ParamsRequest
 */
export declare class ParamsRequest extends Message<ParamsRequest> {
    constructor(data?: PartialMessage<ParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.ParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsRequest;
    static equals(a: ParamsRequest | PlainMessage<ParamsRequest> | undefined, b: ParamsRequest | PlainMessage<ParamsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.ParamsResponse
 */
export declare class ParamsResponse extends Message<ParamsResponse> {
    /**
     * @generated from field: osmosis.cosmwasmpool.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<ParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.ParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsResponse;
    static equals(a: ParamsResponse | PlainMessage<ParamsResponse> | undefined, b: ParamsResponse | PlainMessage<ParamsResponse> | undefined): boolean;
}
/**
 * =============================== Pools
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.PoolsRequest
 */
export declare class PoolsRequest extends Message<PoolsRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<PoolsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.PoolsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolsRequest;
    static equals(a: PoolsRequest | PlainMessage<PoolsRequest> | undefined, b: PoolsRequest | PlainMessage<PoolsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.PoolsResponse
 */
export declare class PoolsResponse extends Message<PoolsResponse> {
    /**
     * @generated from field: repeated google.protobuf.Any pools = 1;
     */
    pools: Any[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<PoolsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.PoolsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolsResponse;
    static equals(a: PoolsResponse | PlainMessage<PoolsResponse> | undefined, b: PoolsResponse | PlainMessage<PoolsResponse> | undefined): boolean;
}
/**
 * =============================== ContractInfoByPoolId
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdRequest
 */
export declare class ContractInfoByPoolIdRequest extends Message<ContractInfoByPoolIdRequest> {
    /**
     * pool_id is the pool id of the requested pool.
     *
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<ContractInfoByPoolIdRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractInfoByPoolIdRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractInfoByPoolIdRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractInfoByPoolIdRequest;
    static equals(a: ContractInfoByPoolIdRequest | PlainMessage<ContractInfoByPoolIdRequest> | undefined, b: ContractInfoByPoolIdRequest | PlainMessage<ContractInfoByPoolIdRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdResponse
 */
export declare class ContractInfoByPoolIdResponse extends Message<ContractInfoByPoolIdResponse> {
    /**
     * contract_address is the pool address and contract address
     * of the requested pool id.
     *
     * @generated from field: string contract_address = 1;
     */
    contractAddress: string;
    /**
     * code_id is the code id of the requested pool id.
     *
     * @generated from field: uint64 code_id = 2;
     */
    codeId: bigint;
    constructor(data?: PartialMessage<ContractInfoByPoolIdResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractInfoByPoolIdResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractInfoByPoolIdResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractInfoByPoolIdResponse;
    static equals(a: ContractInfoByPoolIdResponse | PlainMessage<ContractInfoByPoolIdResponse> | undefined, b: ContractInfoByPoolIdResponse | PlainMessage<ContractInfoByPoolIdResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map