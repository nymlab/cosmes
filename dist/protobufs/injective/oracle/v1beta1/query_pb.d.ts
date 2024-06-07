import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BandPriceState, CoinbasePriceState, MetadataStatistics, OracleInfo, OracleType, Params, PriceFeedState, PriceRecord, PriceRecords, PriceState, ProviderInfo, ProviderState, PythPriceState } from "./oracle_pb.js";
import { GenesisState } from "./genesis_pb.js";
/**
 * @generated from message injective.oracle.v1beta1.QueryPythPriceRequest
 */
export declare class QueryPythPriceRequest extends Message<QueryPythPriceRequest> {
    /**
     * @generated from field: string price_id = 1;
     */
    priceId: string;
    constructor(data?: PartialMessage<QueryPythPriceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryPythPriceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPythPriceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPythPriceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPythPriceRequest;
    static equals(a: QueryPythPriceRequest | PlainMessage<QueryPythPriceRequest> | undefined, b: QueryPythPriceRequest | PlainMessage<QueryPythPriceRequest> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.QueryPythPriceResponse
 */
export declare class QueryPythPriceResponse extends Message<QueryPythPriceResponse> {
    /**
     * @generated from field: injective.oracle.v1beta1.PythPriceState price_state = 1;
     */
    priceState?: PythPriceState;
    constructor(data?: PartialMessage<QueryPythPriceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryPythPriceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPythPriceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPythPriceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPythPriceResponse;
    static equals(a: QueryPythPriceResponse | PlainMessage<QueryPythPriceResponse> | undefined, b: QueryPythPriceResponse | PlainMessage<QueryPythPriceResponse> | undefined): boolean;
}
/**
 * QueryOracleParamsRequest is the request type for the Query/OracleParams RPC
 * method.
 *
 * @generated from message injective.oracle.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryOracleParamsResponse is the response type for the Query/OracleParams RPC
 * method.
 *
 * @generated from message injective.oracle.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * @generated from field: injective.oracle.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC
 * method.
 *
 * @generated from message injective.oracle.v1beta1.QueryBandRelayersRequest
 */
export declare class QueryBandRelayersRequest extends Message<QueryBandRelayersRequest> {
    constructor(data?: PartialMessage<QueryBandRelayersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryBandRelayersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBandRelayersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBandRelayersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBandRelayersRequest;
    static equals(a: QueryBandRelayersRequest | PlainMessage<QueryBandRelayersRequest> | undefined, b: QueryBandRelayersRequest | PlainMessage<QueryBandRelayersRequest> | undefined): boolean;
}
/**
 * QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC
 * method.
 *
 * @generated from message injective.oracle.v1beta1.QueryBandRelayersResponse
 */
export declare class QueryBandRelayersResponse extends Message<QueryBandRelayersResponse> {
    /**
     * @generated from field: repeated string relayers = 1;
     */
    relayers: string[];
    constructor(data?: PartialMessage<QueryBandRelayersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryBandRelayersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBandRelayersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBandRelayersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBandRelayersResponse;
    static equals(a: QueryBandRelayersResponse | PlainMessage<QueryBandRelayersResponse> | undefined, b: QueryBandRelayersResponse | PlainMessage<QueryBandRelayersResponse> | undefined): boolean;
}
/**
 * QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates
 * RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryBandPriceStatesRequest
 */
export declare class QueryBandPriceStatesRequest extends Message<QueryBandPriceStatesRequest> {
    constructor(data?: PartialMessage<QueryBandPriceStatesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryBandPriceStatesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBandPriceStatesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBandPriceStatesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBandPriceStatesRequest;
    static equals(a: QueryBandPriceStatesRequest | PlainMessage<QueryBandPriceStatesRequest> | undefined, b: QueryBandPriceStatesRequest | PlainMessage<QueryBandPriceStatesRequest> | undefined): boolean;
}
/**
 * QueryBandPriceStatesResponse is the response type for the
 * Query/BandPriceStates RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryBandPriceStatesResponse
 */
export declare class QueryBandPriceStatesResponse extends Message<QueryBandPriceStatesResponse> {
    /**
     * @generated from field: repeated injective.oracle.v1beta1.BandPriceState price_states = 1;
     */
    priceStates: BandPriceState[];
    constructor(data?: PartialMessage<QueryBandPriceStatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryBandPriceStatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBandPriceStatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBandPriceStatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBandPriceStatesResponse;
    static equals(a: QueryBandPriceStatesResponse | PlainMessage<QueryBandPriceStatesResponse> | undefined, b: QueryBandPriceStatesResponse | PlainMessage<QueryBandPriceStatesResponse> | undefined): boolean;
}
/**
 * QueryBandIBCPriceStatesRequest is the request type for the
 * Query/BandIBCPriceStates RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest
 */
export declare class QueryBandIBCPriceStatesRequest extends Message<QueryBandIBCPriceStatesRequest> {
    constructor(data?: PartialMessage<QueryBandIBCPriceStatesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBandIBCPriceStatesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBandIBCPriceStatesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBandIBCPriceStatesRequest;
    static equals(a: QueryBandIBCPriceStatesRequest | PlainMessage<QueryBandIBCPriceStatesRequest> | undefined, b: QueryBandIBCPriceStatesRequest | PlainMessage<QueryBandIBCPriceStatesRequest> | undefined): boolean;
}
/**
 * QueryBandIBCPriceStatesResponse is the response type for the
 * Query/BandIBCPriceStates RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse
 */
export declare class QueryBandIBCPriceStatesResponse extends Message<QueryBandIBCPriceStatesResponse> {
    /**
     * @generated from field: repeated injective.oracle.v1beta1.BandPriceState price_states = 1;
     */
    priceStates: BandPriceState[];
    constructor(data?: PartialMessage<QueryBandIBCPriceStatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBandIBCPriceStatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBandIBCPriceStatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBandIBCPriceStatesResponse;
    static equals(a: QueryBandIBCPriceStatesResponse | PlainMessage<QueryBandIBCPriceStatesResponse> | undefined, b: QueryBandIBCPriceStatesResponse | PlainMessage<QueryBandIBCPriceStatesResponse> | undefined): boolean;
}
/**
 * QueryPriceFeedPriceStatesRequest is the request type for the
 * Query/PriceFeedPriceStates RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest
 */
export declare class QueryPriceFeedPriceStatesRequest extends Message<QueryPriceFeedPriceStatesRequest> {
    constructor(data?: PartialMessage<QueryPriceFeedPriceStatesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPriceFeedPriceStatesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPriceFeedPriceStatesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPriceFeedPriceStatesRequest;
    static equals(a: QueryPriceFeedPriceStatesRequest | PlainMessage<QueryPriceFeedPriceStatesRequest> | undefined, b: QueryPriceFeedPriceStatesRequest | PlainMessage<QueryPriceFeedPriceStatesRequest> | undefined): boolean;
}
/**
 * QueryPriceFeedPriceStatesResponse is the response type for the
 * Query/PriceFeedPriceStates RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse
 */
export declare class QueryPriceFeedPriceStatesResponse extends Message<QueryPriceFeedPriceStatesResponse> {
    /**
     * @generated from field: repeated injective.oracle.v1beta1.PriceFeedState price_states = 1;
     */
    priceStates: PriceFeedState[];
    constructor(data?: PartialMessage<QueryPriceFeedPriceStatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPriceFeedPriceStatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPriceFeedPriceStatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPriceFeedPriceStatesResponse;
    static equals(a: QueryPriceFeedPriceStatesResponse | PlainMessage<QueryPriceFeedPriceStatesResponse> | undefined, b: QueryPriceFeedPriceStatesResponse | PlainMessage<QueryPriceFeedPriceStatesResponse> | undefined): boolean;
}
/**
 * QueryCoinbasePriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest
 */
export declare class QueryCoinbasePriceStatesRequest extends Message<QueryCoinbasePriceStatesRequest> {
    constructor(data?: PartialMessage<QueryCoinbasePriceStatesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCoinbasePriceStatesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCoinbasePriceStatesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCoinbasePriceStatesRequest;
    static equals(a: QueryCoinbasePriceStatesRequest | PlainMessage<QueryCoinbasePriceStatesRequest> | undefined, b: QueryCoinbasePriceStatesRequest | PlainMessage<QueryCoinbasePriceStatesRequest> | undefined): boolean;
}
/**
 * QueryCoinbasePriceStatesResponse is the response type for the
 * Query/CoinbasePriceStates RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse
 */
export declare class QueryCoinbasePriceStatesResponse extends Message<QueryCoinbasePriceStatesResponse> {
    /**
     * @generated from field: repeated injective.oracle.v1beta1.CoinbasePriceState price_states = 1;
     */
    priceStates: CoinbasePriceState[];
    constructor(data?: PartialMessage<QueryCoinbasePriceStatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCoinbasePriceStatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCoinbasePriceStatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCoinbasePriceStatesResponse;
    static equals(a: QueryCoinbasePriceStatesResponse | PlainMessage<QueryCoinbasePriceStatesResponse> | undefined, b: QueryCoinbasePriceStatesResponse | PlainMessage<QueryCoinbasePriceStatesResponse> | undefined): boolean;
}
/**
 * QueryPythPriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryPythPriceStatesRequest
 */
export declare class QueryPythPriceStatesRequest extends Message<QueryPythPriceStatesRequest> {
    constructor(data?: PartialMessage<QueryPythPriceStatesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryPythPriceStatesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPythPriceStatesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPythPriceStatesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPythPriceStatesRequest;
    static equals(a: QueryPythPriceStatesRequest | PlainMessage<QueryPythPriceStatesRequest> | undefined, b: QueryPythPriceStatesRequest | PlainMessage<QueryPythPriceStatesRequest> | undefined): boolean;
}
/**
 * QueryPythPriceStatesResponse is the response type for the
 * Query/CoinbasePriceStates RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryPythPriceStatesResponse
 */
export declare class QueryPythPriceStatesResponse extends Message<QueryPythPriceStatesResponse> {
    /**
     * @generated from field: repeated injective.oracle.v1beta1.PythPriceState price_states = 1;
     */
    priceStates: PythPriceState[];
    constructor(data?: PartialMessage<QueryPythPriceStatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryPythPriceStatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPythPriceStatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPythPriceStatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPythPriceStatesResponse;
    static equals(a: QueryPythPriceStatesResponse | PlainMessage<QueryPythPriceStatesResponse> | undefined, b: QueryPythPriceStatesResponse | PlainMessage<QueryPythPriceStatesResponse> | undefined): boolean;
}
/**
 * QueryProviderPriceStateRequest is the request type for the
 * Query/ProviderPriceState RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryProviderPriceStateRequest
 */
export declare class QueryProviderPriceStateRequest extends Message<QueryProviderPriceStateRequest> {
    /**
     * @generated from field: string provider = 1;
     */
    provider: string;
    /**
     * @generated from field: string symbol = 2;
     */
    symbol: string;
    constructor(data?: PartialMessage<QueryProviderPriceStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryProviderPriceStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProviderPriceStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProviderPriceStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProviderPriceStateRequest;
    static equals(a: QueryProviderPriceStateRequest | PlainMessage<QueryProviderPriceStateRequest> | undefined, b: QueryProviderPriceStateRequest | PlainMessage<QueryProviderPriceStateRequest> | undefined): boolean;
}
/**
 * QueryProviderPriceStatesResponse is the response type for the
 * Query/ProviderPriceStates RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryProviderPriceStateResponse
 */
export declare class QueryProviderPriceStateResponse extends Message<QueryProviderPriceStateResponse> {
    /**
     * @generated from field: injective.oracle.v1beta1.PriceState price_state = 1;
     */
    priceState?: PriceState;
    constructor(data?: PartialMessage<QueryProviderPriceStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryProviderPriceStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProviderPriceStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProviderPriceStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProviderPriceStateResponse;
    static equals(a: QueryProviderPriceStateResponse | PlainMessage<QueryProviderPriceStateResponse> | undefined, b: QueryProviderPriceStateResponse | PlainMessage<QueryProviderPriceStateResponse> | undefined): boolean;
}
/**
 * QueryModuleStateRequest is the request type for the Query/OracleModuleState
 * RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryModuleStateRequest
 */
export declare class QueryModuleStateRequest extends Message<QueryModuleStateRequest> {
    constructor(data?: PartialMessage<QueryModuleStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryModuleStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static equals(a: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined, b: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined): boolean;
}
/**
 * QueryModuleStateResponse is the response type for the Query/OracleModuleState
 * RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryModuleStateResponse
 */
export declare class QueryModuleStateResponse extends Message<QueryModuleStateResponse> {
    /**
     * @generated from field: injective.oracle.v1beta1.GenesisState state = 1;
     */
    state?: GenesisState;
    constructor(data?: PartialMessage<QueryModuleStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryModuleStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static equals(a: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined, b: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest
 */
export declare class QueryHistoricalPriceRecordsRequest extends Message<QueryHistoricalPriceRecordsRequest> {
    /**
     * @generated from field: injective.oracle.v1beta1.OracleType oracle = 1;
     */
    oracle: OracleType;
    /**
     * @generated from field: string symbol_id = 2;
     */
    symbolId: string;
    constructor(data?: PartialMessage<QueryHistoricalPriceRecordsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryHistoricalPriceRecordsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryHistoricalPriceRecordsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryHistoricalPriceRecordsRequest;
    static equals(a: QueryHistoricalPriceRecordsRequest | PlainMessage<QueryHistoricalPriceRecordsRequest> | undefined, b: QueryHistoricalPriceRecordsRequest | PlainMessage<QueryHistoricalPriceRecordsRequest> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse
 */
export declare class QueryHistoricalPriceRecordsResponse extends Message<QueryHistoricalPriceRecordsResponse> {
    /**
     * @generated from field: repeated injective.oracle.v1beta1.PriceRecords price_records = 1;
     */
    priceRecords: PriceRecords[];
    constructor(data?: PartialMessage<QueryHistoricalPriceRecordsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryHistoricalPriceRecordsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryHistoricalPriceRecordsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryHistoricalPriceRecordsResponse;
    static equals(a: QueryHistoricalPriceRecordsResponse | PlainMessage<QueryHistoricalPriceRecordsResponse> | undefined, b: QueryHistoricalPriceRecordsResponse | PlainMessage<QueryHistoricalPriceRecordsResponse> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.OracleHistoryOptions
 */
export declare class OracleHistoryOptions extends Message<OracleHistoryOptions> {
    /**
     * MaxAge restricts the oracle price records oldest age in seconds from the
     * current block time to consider. A value of 0 means use all the records
     * present on the chain.
     *
     * @generated from field: uint64 max_age = 1;
     */
    maxAge: bigint;
    /**
     * If IncludeRawHistory is true, the raw underlying data used for the
     * computation is included in the response
     *
     * @generated from field: bool include_raw_history = 2;
     */
    includeRawHistory: boolean;
    /**
     * If IncludeMetadata is true, metadata on the computation is included in the
     * response
     *
     * @generated from field: bool include_metadata = 3;
     */
    includeMetadata: boolean;
    constructor(data?: PartialMessage<OracleHistoryOptions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.OracleHistoryOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OracleHistoryOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OracleHistoryOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OracleHistoryOptions;
    static equals(a: OracleHistoryOptions | PlainMessage<OracleHistoryOptions> | undefined, b: OracleHistoryOptions | PlainMessage<OracleHistoryOptions> | undefined): boolean;
}
/**
 * QueryOracleVolatilityRequest is the request type for Query/OracleVolatility
 * RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryOracleVolatilityRequest
 */
export declare class QueryOracleVolatilityRequest extends Message<QueryOracleVolatilityRequest> {
    /**
     * @generated from field: injective.oracle.v1beta1.OracleInfo base_info = 1;
     */
    baseInfo?: OracleInfo;
    /**
     * @generated from field: injective.oracle.v1beta1.OracleInfo quote_info = 2;
     */
    quoteInfo?: OracleInfo;
    /**
     * @generated from field: injective.oracle.v1beta1.OracleHistoryOptions oracle_history_options = 3;
     */
    oracleHistoryOptions?: OracleHistoryOptions;
    constructor(data?: PartialMessage<QueryOracleVolatilityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryOracleVolatilityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOracleVolatilityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOracleVolatilityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOracleVolatilityRequest;
    static equals(a: QueryOracleVolatilityRequest | PlainMessage<QueryOracleVolatilityRequest> | undefined, b: QueryOracleVolatilityRequest | PlainMessage<QueryOracleVolatilityRequest> | undefined): boolean;
}
/**
 * QueryOracleVolatilityResponse is the response type for Query/OracleVolatility
 * RPC method.
 *
 * @generated from message injective.oracle.v1beta1.QueryOracleVolatilityResponse
 */
export declare class QueryOracleVolatilityResponse extends Message<QueryOracleVolatilityResponse> {
    /**
     * @generated from field: string volatility = 1;
     */
    volatility: string;
    /**
     * @generated from field: injective.oracle.v1beta1.MetadataStatistics history_metadata = 2;
     */
    historyMetadata?: MetadataStatistics;
    /**
     * @generated from field: repeated injective.oracle.v1beta1.PriceRecord raw_history = 3;
     */
    rawHistory: PriceRecord[];
    constructor(data?: PartialMessage<QueryOracleVolatilityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryOracleVolatilityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOracleVolatilityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOracleVolatilityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOracleVolatilityResponse;
    static equals(a: QueryOracleVolatilityResponse | PlainMessage<QueryOracleVolatilityResponse> | undefined, b: QueryOracleVolatilityResponse | PlainMessage<QueryOracleVolatilityResponse> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.QueryOracleProvidersInfoRequest
 */
export declare class QueryOracleProvidersInfoRequest extends Message<QueryOracleProvidersInfoRequest> {
    constructor(data?: PartialMessage<QueryOracleProvidersInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryOracleProvidersInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOracleProvidersInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOracleProvidersInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOracleProvidersInfoRequest;
    static equals(a: QueryOracleProvidersInfoRequest | PlainMessage<QueryOracleProvidersInfoRequest> | undefined, b: QueryOracleProvidersInfoRequest | PlainMessage<QueryOracleProvidersInfoRequest> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.QueryOracleProvidersInfoResponse
 */
export declare class QueryOracleProvidersInfoResponse extends Message<QueryOracleProvidersInfoResponse> {
    /**
     * @generated from field: repeated injective.oracle.v1beta1.ProviderInfo providers = 1;
     */
    providers: ProviderInfo[];
    constructor(data?: PartialMessage<QueryOracleProvidersInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryOracleProvidersInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOracleProvidersInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOracleProvidersInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOracleProvidersInfoResponse;
    static equals(a: QueryOracleProvidersInfoResponse | PlainMessage<QueryOracleProvidersInfoResponse> | undefined, b: QueryOracleProvidersInfoResponse | PlainMessage<QueryOracleProvidersInfoResponse> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.QueryOracleProviderPricesRequest
 */
export declare class QueryOracleProviderPricesRequest extends Message<QueryOracleProviderPricesRequest> {
    /**
     * @generated from field: string provider = 1;
     */
    provider: string;
    constructor(data?: PartialMessage<QueryOracleProviderPricesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryOracleProviderPricesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOracleProviderPricesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOracleProviderPricesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOracleProviderPricesRequest;
    static equals(a: QueryOracleProviderPricesRequest | PlainMessage<QueryOracleProviderPricesRequest> | undefined, b: QueryOracleProviderPricesRequest | PlainMessage<QueryOracleProviderPricesRequest> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.QueryOracleProviderPricesResponse
 */
export declare class QueryOracleProviderPricesResponse extends Message<QueryOracleProviderPricesResponse> {
    /**
     * @generated from field: repeated injective.oracle.v1beta1.ProviderState providerState = 1;
     */
    providerState: ProviderState[];
    constructor(data?: PartialMessage<QueryOracleProviderPricesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryOracleProviderPricesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOracleProviderPricesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOracleProviderPricesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOracleProviderPricesResponse;
    static equals(a: QueryOracleProviderPricesResponse | PlainMessage<QueryOracleProviderPricesResponse> | undefined, b: QueryOracleProviderPricesResponse | PlainMessage<QueryOracleProviderPricesResponse> | undefined): boolean;
}
/**
 * QueryOraclePriceRequest is the request type for the Query/OraclePrice RPC
 * method.
 *
 * @generated from message injective.oracle.v1beta1.QueryOraclePriceRequest
 */
export declare class QueryOraclePriceRequest extends Message<QueryOraclePriceRequest> {
    /**
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 1;
     */
    oracleType: OracleType;
    /**
     * @generated from field: string base = 2;
     */
    base: string;
    /**
     * @generated from field: string quote = 3;
     */
    quote: string;
    constructor(data?: PartialMessage<QueryOraclePriceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryOraclePriceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOraclePriceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOraclePriceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOraclePriceRequest;
    static equals(a: QueryOraclePriceRequest | PlainMessage<QueryOraclePriceRequest> | undefined, b: QueryOraclePriceRequest | PlainMessage<QueryOraclePriceRequest> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.PricePairState
 */
export declare class PricePairState extends Message<PricePairState> {
    /**
     * @generated from field: string pair_price = 1;
     */
    pairPrice: string;
    /**
     * @generated from field: string base_price = 2;
     */
    basePrice: string;
    /**
     * @generated from field: string quote_price = 3;
     */
    quotePrice: string;
    /**
     * @generated from field: string base_cumulative_price = 4;
     */
    baseCumulativePrice: string;
    /**
     * @generated from field: string quote_cumulative_price = 5;
     */
    quoteCumulativePrice: string;
    /**
     * @generated from field: int64 base_timestamp = 6;
     */
    baseTimestamp: bigint;
    /**
     * @generated from field: int64 quote_timestamp = 7;
     */
    quoteTimestamp: bigint;
    constructor(data?: PartialMessage<PricePairState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.PricePairState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PricePairState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PricePairState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PricePairState;
    static equals(a: PricePairState | PlainMessage<PricePairState> | undefined, b: PricePairState | PlainMessage<PricePairState> | undefined): boolean;
}
/**
 * QueryOraclePriceResponse is the response type for the Query/OraclePrice RPC
 * method.
 *
 * @generated from message injective.oracle.v1beta1.QueryOraclePriceResponse
 */
export declare class QueryOraclePriceResponse extends Message<QueryOraclePriceResponse> {
    /**
     * @generated from field: injective.oracle.v1beta1.PricePairState price_pair_state = 1;
     */
    pricePairState?: PricePairState;
    constructor(data?: PartialMessage<QueryOraclePriceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.QueryOraclePriceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOraclePriceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOraclePriceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOraclePriceResponse;
    static equals(a: QueryOraclePriceResponse | PlainMessage<QueryOraclePriceResponse> | undefined, b: QueryOraclePriceResponse | PlainMessage<QueryOraclePriceResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map