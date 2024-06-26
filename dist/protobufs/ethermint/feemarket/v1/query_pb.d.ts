import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./feemarket_pb.js";
/**
 * QueryParamsRequest defines the request type for querying x/evm parameters.
 *
 * @generated from message ethermint.feemarket.v1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.feemarket.v1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse defines the response type for querying x/evm parameters.
 *
 * @generated from message ethermint.feemarket.v1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params define the evm module parameters.
     *
     * @generated from field: ethermint.feemarket.v1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.feemarket.v1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 *
 * @generated from message ethermint.feemarket.v1.QueryBaseFeeRequest
 */
export declare class QueryBaseFeeRequest extends Message<QueryBaseFeeRequest> {
    constructor(data?: PartialMessage<QueryBaseFeeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.feemarket.v1.QueryBaseFeeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBaseFeeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBaseFeeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBaseFeeRequest;
    static equals(a: QueryBaseFeeRequest | PlainMessage<QueryBaseFeeRequest> | undefined, b: QueryBaseFeeRequest | PlainMessage<QueryBaseFeeRequest> | undefined): boolean;
}
/**
 * QueryBaseFeeResponse returns the EIP1559 base fee.
 *
 * @generated from message ethermint.feemarket.v1.QueryBaseFeeResponse
 */
export declare class QueryBaseFeeResponse extends Message<QueryBaseFeeResponse> {
    /**
     * base_fee is the EIP1559 base fee
     *
     * @generated from field: string base_fee = 1;
     */
    baseFee: string;
    constructor(data?: PartialMessage<QueryBaseFeeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.feemarket.v1.QueryBaseFeeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBaseFeeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBaseFeeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBaseFeeResponse;
    static equals(a: QueryBaseFeeResponse | PlainMessage<QueryBaseFeeResponse> | undefined, b: QueryBaseFeeResponse | PlainMessage<QueryBaseFeeResponse> | undefined): boolean;
}
/**
 * QueryBlockGasRequest defines the request type for querying the EIP1559 base
 * fee.
 *
 * @generated from message ethermint.feemarket.v1.QueryBlockGasRequest
 */
export declare class QueryBlockGasRequest extends Message<QueryBlockGasRequest> {
    constructor(data?: PartialMessage<QueryBlockGasRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.feemarket.v1.QueryBlockGasRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBlockGasRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBlockGasRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBlockGasRequest;
    static equals(a: QueryBlockGasRequest | PlainMessage<QueryBlockGasRequest> | undefined, b: QueryBlockGasRequest | PlainMessage<QueryBlockGasRequest> | undefined): boolean;
}
/**
 * QueryBlockGasResponse returns block gas used for a given height.
 *
 * @generated from message ethermint.feemarket.v1.QueryBlockGasResponse
 */
export declare class QueryBlockGasResponse extends Message<QueryBlockGasResponse> {
    /**
     * gas is the returned block gas
     *
     * @generated from field: int64 gas = 1;
     */
    gas: bigint;
    constructor(data?: PartialMessage<QueryBlockGasResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.feemarket.v1.QueryBlockGasResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBlockGasResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBlockGasResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBlockGasResponse;
    static equals(a: QueryBlockGasResponse | PlainMessage<QueryBlockGasResponse> | undefined, b: QueryBlockGasResponse | PlainMessage<QueryBlockGasResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map