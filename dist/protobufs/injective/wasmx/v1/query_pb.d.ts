import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params, RegisteredContract } from "./wasmx_pb.js";
import { GenesisState } from "./genesis_pb.js";
/**
 * QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC
 * method.
 *
 * @generated from message injective.wasmx.v1.QueryWasmxParamsRequest
 */
export declare class QueryWasmxParamsRequest extends Message<QueryWasmxParamsRequest> {
    constructor(data?: PartialMessage<QueryWasmxParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.QueryWasmxParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryWasmxParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryWasmxParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryWasmxParamsRequest;
    static equals(a: QueryWasmxParamsRequest | PlainMessage<QueryWasmxParamsRequest> | undefined, b: QueryWasmxParamsRequest | PlainMessage<QueryWasmxParamsRequest> | undefined): boolean;
}
/**
 * QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC
 * method.
 *
 * @generated from message injective.wasmx.v1.QueryWasmxParamsResponse
 */
export declare class QueryWasmxParamsResponse extends Message<QueryWasmxParamsResponse> {
    /**
     * @generated from field: injective.wasmx.v1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryWasmxParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.QueryWasmxParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryWasmxParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryWasmxParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryWasmxParamsResponse;
    static equals(a: QueryWasmxParamsResponse | PlainMessage<QueryWasmxParamsResponse> | undefined, b: QueryWasmxParamsResponse | PlainMessage<QueryWasmxParamsResponse> | undefined): boolean;
}
/**
 * QueryModuleStateRequest is the request type for the Query/WasmxModuleState
 * RPC method.
 *
 * @generated from message injective.wasmx.v1.QueryModuleStateRequest
 */
export declare class QueryModuleStateRequest extends Message<QueryModuleStateRequest> {
    constructor(data?: PartialMessage<QueryModuleStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.QueryModuleStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static equals(a: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined, b: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined): boolean;
}
/**
 * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
 * RPC method.
 *
 * @generated from message injective.wasmx.v1.QueryModuleStateResponse
 */
export declare class QueryModuleStateResponse extends Message<QueryModuleStateResponse> {
    /**
     * @generated from field: injective.wasmx.v1.GenesisState state = 1;
     */
    state?: GenesisState;
    constructor(data?: PartialMessage<QueryModuleStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.QueryModuleStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static equals(a: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined, b: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined): boolean;
}
/**
 * Contract registration info
 *
 * @generated from message injective.wasmx.v1.QueryContractRegistrationInfoRequest
 */
export declare class QueryContractRegistrationInfoRequest extends Message<QueryContractRegistrationInfoRequest> {
    /**
     * @generated from field: string contract_address = 1;
     */
    contractAddress: string;
    constructor(data?: PartialMessage<QueryContractRegistrationInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.QueryContractRegistrationInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryContractRegistrationInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryContractRegistrationInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryContractRegistrationInfoRequest;
    static equals(a: QueryContractRegistrationInfoRequest | PlainMessage<QueryContractRegistrationInfoRequest> | undefined, b: QueryContractRegistrationInfoRequest | PlainMessage<QueryContractRegistrationInfoRequest> | undefined): boolean;
}
/**
 * @generated from message injective.wasmx.v1.QueryContractRegistrationInfoResponse
 */
export declare class QueryContractRegistrationInfoResponse extends Message<QueryContractRegistrationInfoResponse> {
    /**
     * @generated from field: injective.wasmx.v1.RegisteredContract contract = 1;
     */
    contract?: RegisteredContract;
    constructor(data?: PartialMessage<QueryContractRegistrationInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.wasmx.v1.QueryContractRegistrationInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryContractRegistrationInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryContractRegistrationInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryContractRegistrationInfoResponse;
    static equals(a: QueryContractRegistrationInfoResponse | PlainMessage<QueryContractRegistrationInfoResponse> | undefined, b: QueryContractRegistrationInfoResponse | PlainMessage<QueryContractRegistrationInfoResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map