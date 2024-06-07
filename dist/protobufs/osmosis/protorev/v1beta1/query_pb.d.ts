import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { AllProtocolRevenue, BaseDenom, InfoByPoolType, RouteStatistics, TokenPairArbRoutes } from "./protorev_pb.js";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params holds all the parameters of this module.
     *
     * @generated from field: osmosis.protorev.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest
 */
export declare class QueryGetProtoRevNumberOfTradesRequest extends Message<QueryGetProtoRevNumberOfTradesRequest> {
    constructor(data?: PartialMessage<QueryGetProtoRevNumberOfTradesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevNumberOfTradesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevNumberOfTradesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevNumberOfTradesRequest;
    static equals(a: QueryGetProtoRevNumberOfTradesRequest | PlainMessage<QueryGetProtoRevNumberOfTradesRequest> | undefined, b: QueryGetProtoRevNumberOfTradesRequest | PlainMessage<QueryGetProtoRevNumberOfTradesRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse
 */
export declare class QueryGetProtoRevNumberOfTradesResponse extends Message<QueryGetProtoRevNumberOfTradesResponse> {
    /**
     * number_of_trades is the number of trades the module has executed
     *
     * @generated from field: string number_of_trades = 1;
     */
    numberOfTrades: string;
    constructor(data?: PartialMessage<QueryGetProtoRevNumberOfTradesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevNumberOfTradesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevNumberOfTradesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevNumberOfTradesResponse;
    static equals(a: QueryGetProtoRevNumberOfTradesResponse | PlainMessage<QueryGetProtoRevNumberOfTradesResponse> | undefined, b: QueryGetProtoRevNumberOfTradesResponse | PlainMessage<QueryGetProtoRevNumberOfTradesResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest
 */
export declare class QueryGetProtoRevProfitsByDenomRequest extends Message<QueryGetProtoRevProfitsByDenomRequest> {
    /**
     * denom is the denom to query profits by
     *
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryGetProtoRevProfitsByDenomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevProfitsByDenomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevProfitsByDenomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevProfitsByDenomRequest;
    static equals(a: QueryGetProtoRevProfitsByDenomRequest | PlainMessage<QueryGetProtoRevProfitsByDenomRequest> | undefined, b: QueryGetProtoRevProfitsByDenomRequest | PlainMessage<QueryGetProtoRevProfitsByDenomRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse
 */
export declare class QueryGetProtoRevProfitsByDenomResponse extends Message<QueryGetProtoRevProfitsByDenomResponse> {
    /**
     * profit is the profits of the module by the selected denom
     *
     * @generated from field: cosmos.base.v1beta1.Coin profit = 1;
     */
    profit?: Coin;
    constructor(data?: PartialMessage<QueryGetProtoRevProfitsByDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevProfitsByDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevProfitsByDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevProfitsByDenomResponse;
    static equals(a: QueryGetProtoRevProfitsByDenomResponse | PlainMessage<QueryGetProtoRevProfitsByDenomResponse> | undefined, b: QueryGetProtoRevProfitsByDenomResponse | PlainMessage<QueryGetProtoRevProfitsByDenomResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest
 */
export declare class QueryGetProtoRevAllProfitsRequest extends Message<QueryGetProtoRevAllProfitsRequest> {
    constructor(data?: PartialMessage<QueryGetProtoRevAllProfitsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevAllProfitsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevAllProfitsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevAllProfitsRequest;
    static equals(a: QueryGetProtoRevAllProfitsRequest | PlainMessage<QueryGetProtoRevAllProfitsRequest> | undefined, b: QueryGetProtoRevAllProfitsRequest | PlainMessage<QueryGetProtoRevAllProfitsRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse
 */
export declare class QueryGetProtoRevAllProfitsResponse extends Message<QueryGetProtoRevAllProfitsResponse> {
    /**
     * profits is a list of all of the profits from the module
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin profits = 1;
     */
    profits: Coin[];
    constructor(data?: PartialMessage<QueryGetProtoRevAllProfitsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevAllProfitsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevAllProfitsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevAllProfitsResponse;
    static equals(a: QueryGetProtoRevAllProfitsResponse | PlainMessage<QueryGetProtoRevAllProfitsResponse> | undefined, b: QueryGetProtoRevAllProfitsResponse | PlainMessage<QueryGetProtoRevAllProfitsResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest
 */
export declare class QueryGetProtoRevStatisticsByRouteRequest extends Message<QueryGetProtoRevStatisticsByRouteRequest> {
    /**
     * route is the set of pool ids to query statistics by i.e. 1,2,3
     *
     * @generated from field: repeated uint64 route = 1;
     */
    route: bigint[];
    constructor(data?: PartialMessage<QueryGetProtoRevStatisticsByRouteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevStatisticsByRouteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevStatisticsByRouteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevStatisticsByRouteRequest;
    static equals(a: QueryGetProtoRevStatisticsByRouteRequest | PlainMessage<QueryGetProtoRevStatisticsByRouteRequest> | undefined, b: QueryGetProtoRevStatisticsByRouteRequest | PlainMessage<QueryGetProtoRevStatisticsByRouteRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevStatisticsByRouteResponse is response type for the
 * Query/GetProtoRevStatisticsByRoute RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse
 */
export declare class QueryGetProtoRevStatisticsByRouteResponse extends Message<QueryGetProtoRevStatisticsByRouteResponse> {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades
     *
     * @generated from field: osmosis.protorev.v1beta1.RouteStatistics statistics = 1;
     */
    statistics?: RouteStatistics;
    constructor(data?: PartialMessage<QueryGetProtoRevStatisticsByRouteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByRouteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevStatisticsByRouteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevStatisticsByRouteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevStatisticsByRouteResponse;
    static equals(a: QueryGetProtoRevStatisticsByRouteResponse | PlainMessage<QueryGetProtoRevStatisticsByRouteResponse> | undefined, b: QueryGetProtoRevStatisticsByRouteResponse | PlainMessage<QueryGetProtoRevStatisticsByRouteResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevAllRouteStatisticsRequest is request type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest
 */
export declare class QueryGetProtoRevAllRouteStatisticsRequest extends Message<QueryGetProtoRevAllRouteStatisticsRequest> {
    constructor(data?: PartialMessage<QueryGetProtoRevAllRouteStatisticsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevAllRouteStatisticsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevAllRouteStatisticsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevAllRouteStatisticsRequest;
    static equals(a: QueryGetProtoRevAllRouteStatisticsRequest | PlainMessage<QueryGetProtoRevAllRouteStatisticsRequest> | undefined, b: QueryGetProtoRevAllRouteStatisticsRequest | PlainMessage<QueryGetProtoRevAllRouteStatisticsRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevAllRouteStatisticsResponse is response type for the
 * Query/GetProtoRevAllRouteStatistics RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse
 */
export declare class QueryGetProtoRevAllRouteStatisticsResponse extends Message<QueryGetProtoRevAllRouteStatisticsResponse> {
    /**
     * statistics contains the number of trades/profits the module has executed on
     * all routes it has successfully executed a trade on
     *
     * @generated from field: repeated osmosis.protorev.v1beta1.RouteStatistics statistics = 1;
     */
    statistics: RouteStatistics[];
    constructor(data?: PartialMessage<QueryGetProtoRevAllRouteStatisticsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevAllRouteStatisticsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevAllRouteStatisticsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevAllRouteStatisticsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevAllRouteStatisticsResponse;
    static equals(a: QueryGetProtoRevAllRouteStatisticsResponse | PlainMessage<QueryGetProtoRevAllRouteStatisticsResponse> | undefined, b: QueryGetProtoRevAllRouteStatisticsResponse | PlainMessage<QueryGetProtoRevAllRouteStatisticsResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest
 */
export declare class QueryGetProtoRevTokenPairArbRoutesRequest extends Message<QueryGetProtoRevTokenPairArbRoutesRequest> {
    constructor(data?: PartialMessage<QueryGetProtoRevTokenPairArbRoutesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevTokenPairArbRoutesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevTokenPairArbRoutesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevTokenPairArbRoutesRequest;
    static equals(a: QueryGetProtoRevTokenPairArbRoutesRequest | PlainMessage<QueryGetProtoRevTokenPairArbRoutesRequest> | undefined, b: QueryGetProtoRevTokenPairArbRoutesRequest | PlainMessage<QueryGetProtoRevTokenPairArbRoutesRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse
 */
export declare class QueryGetProtoRevTokenPairArbRoutesResponse extends Message<QueryGetProtoRevTokenPairArbRoutesResponse> {
    /**
     * routes is a list of all of the hot routes that the module is currently
     * arbitraging
     *
     * @generated from field: repeated osmosis.protorev.v1beta1.TokenPairArbRoutes routes = 1;
     */
    routes: TokenPairArbRoutes[];
    constructor(data?: PartialMessage<QueryGetProtoRevTokenPairArbRoutesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevTokenPairArbRoutesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevTokenPairArbRoutesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevTokenPairArbRoutesResponse;
    static equals(a: QueryGetProtoRevTokenPairArbRoutesResponse | PlainMessage<QueryGetProtoRevTokenPairArbRoutesResponse> | undefined, b: QueryGetProtoRevTokenPairArbRoutesResponse | PlainMessage<QueryGetProtoRevTokenPairArbRoutesResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevAdminAccountRequest is request type for the
 * Query/GetProtoRevAdminAccount RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest
 */
export declare class QueryGetProtoRevAdminAccountRequest extends Message<QueryGetProtoRevAdminAccountRequest> {
    constructor(data?: PartialMessage<QueryGetProtoRevAdminAccountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevAdminAccountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevAdminAccountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevAdminAccountRequest;
    static equals(a: QueryGetProtoRevAdminAccountRequest | PlainMessage<QueryGetProtoRevAdminAccountRequest> | undefined, b: QueryGetProtoRevAdminAccountRequest | PlainMessage<QueryGetProtoRevAdminAccountRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevAdminAccountResponse is response type for the
 * Query/GetProtoRevAdminAccount RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse
 */
export declare class QueryGetProtoRevAdminAccountResponse extends Message<QueryGetProtoRevAdminAccountResponse> {
    /**
     * admin_account is the admin account of the module
     *
     * @generated from field: string admin_account = 1;
     */
    adminAccount: string;
    constructor(data?: PartialMessage<QueryGetProtoRevAdminAccountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevAdminAccountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevAdminAccountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevAdminAccountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevAdminAccountResponse;
    static equals(a: QueryGetProtoRevAdminAccountResponse | PlainMessage<QueryGetProtoRevAdminAccountResponse> | undefined, b: QueryGetProtoRevAdminAccountResponse | PlainMessage<QueryGetProtoRevAdminAccountResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevDeveloperAccountRequest is request type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest
 */
export declare class QueryGetProtoRevDeveloperAccountRequest extends Message<QueryGetProtoRevDeveloperAccountRequest> {
    constructor(data?: PartialMessage<QueryGetProtoRevDeveloperAccountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevDeveloperAccountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevDeveloperAccountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevDeveloperAccountRequest;
    static equals(a: QueryGetProtoRevDeveloperAccountRequest | PlainMessage<QueryGetProtoRevDeveloperAccountRequest> | undefined, b: QueryGetProtoRevDeveloperAccountRequest | PlainMessage<QueryGetProtoRevDeveloperAccountRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevDeveloperAccountResponse is response type for the
 * Query/GetProtoRevDeveloperAccount RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse
 */
export declare class QueryGetProtoRevDeveloperAccountResponse extends Message<QueryGetProtoRevDeveloperAccountResponse> {
    /**
     * developer_account is the developer account of the module
     *
     * @generated from field: string developer_account = 1;
     */
    developerAccount: string;
    constructor(data?: PartialMessage<QueryGetProtoRevDeveloperAccountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevDeveloperAccountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevDeveloperAccountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevDeveloperAccountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevDeveloperAccountResponse;
    static equals(a: QueryGetProtoRevDeveloperAccountResponse | PlainMessage<QueryGetProtoRevDeveloperAccountResponse> | undefined, b: QueryGetProtoRevDeveloperAccountResponse | PlainMessage<QueryGetProtoRevDeveloperAccountResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevInfoByPoolTypeRequest is request type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeRequest
 */
export declare class QueryGetProtoRevInfoByPoolTypeRequest extends Message<QueryGetProtoRevInfoByPoolTypeRequest> {
    constructor(data?: PartialMessage<QueryGetProtoRevInfoByPoolTypeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevInfoByPoolTypeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevInfoByPoolTypeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevInfoByPoolTypeRequest;
    static equals(a: QueryGetProtoRevInfoByPoolTypeRequest | PlainMessage<QueryGetProtoRevInfoByPoolTypeRequest> | undefined, b: QueryGetProtoRevInfoByPoolTypeRequest | PlainMessage<QueryGetProtoRevInfoByPoolTypeRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevInfoByPoolTypeResponse is response type for the
 * Query/GetProtoRevInfoByPoolType RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeResponse
 */
export declare class QueryGetProtoRevInfoByPoolTypeResponse extends Message<QueryGetProtoRevInfoByPoolTypeResponse> {
    /**
     * InfoByPoolType contains all information pertaining to how different
     * pool types are handled by the module.
     *
     * @generated from field: osmosis.protorev.v1beta1.InfoByPoolType info_by_pool_type = 1;
     */
    infoByPoolType?: InfoByPoolType;
    constructor(data?: PartialMessage<QueryGetProtoRevInfoByPoolTypeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevInfoByPoolTypeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevInfoByPoolTypeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevInfoByPoolTypeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevInfoByPoolTypeResponse;
    static equals(a: QueryGetProtoRevInfoByPoolTypeResponse | PlainMessage<QueryGetProtoRevInfoByPoolTypeResponse> | undefined, b: QueryGetProtoRevInfoByPoolTypeResponse | PlainMessage<QueryGetProtoRevInfoByPoolTypeResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest
 */
export declare class QueryGetProtoRevMaxPoolPointsPerBlockRequest extends Message<QueryGetProtoRevMaxPoolPointsPerBlockRequest> {
    constructor(data?: PartialMessage<QueryGetProtoRevMaxPoolPointsPerBlockRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevMaxPoolPointsPerBlockRequest;
    static equals(a: QueryGetProtoRevMaxPoolPointsPerBlockRequest | PlainMessage<QueryGetProtoRevMaxPoolPointsPerBlockRequest> | undefined, b: QueryGetProtoRevMaxPoolPointsPerBlockRequest | PlainMessage<QueryGetProtoRevMaxPoolPointsPerBlockRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerBlockResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerBlock RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse
 */
export declare class QueryGetProtoRevMaxPoolPointsPerBlockResponse extends Message<QueryGetProtoRevMaxPoolPointsPerBlockResponse> {
    /**
     * max_pool_points_per_block is the maximum number of pool points that can be
     * consumed per block
     *
     * @generated from field: uint64 max_pool_points_per_block = 1;
     */
    maxPoolPointsPerBlock: bigint;
    constructor(data?: PartialMessage<QueryGetProtoRevMaxPoolPointsPerBlockResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerBlockResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevMaxPoolPointsPerBlockResponse;
    static equals(a: QueryGetProtoRevMaxPoolPointsPerBlockResponse | PlainMessage<QueryGetProtoRevMaxPoolPointsPerBlockResponse> | undefined, b: QueryGetProtoRevMaxPoolPointsPerBlockResponse | PlainMessage<QueryGetProtoRevMaxPoolPointsPerBlockResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxRequest is request type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest
 */
export declare class QueryGetProtoRevMaxPoolPointsPerTxRequest extends Message<QueryGetProtoRevMaxPoolPointsPerTxRequest> {
    constructor(data?: PartialMessage<QueryGetProtoRevMaxPoolPointsPerTxRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevMaxPoolPointsPerTxRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevMaxPoolPointsPerTxRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevMaxPoolPointsPerTxRequest;
    static equals(a: QueryGetProtoRevMaxPoolPointsPerTxRequest | PlainMessage<QueryGetProtoRevMaxPoolPointsPerTxRequest> | undefined, b: QueryGetProtoRevMaxPoolPointsPerTxRequest | PlainMessage<QueryGetProtoRevMaxPoolPointsPerTxRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevMaxPoolPointsPerTxResponse is response type for the
 * Query/GetProtoRevMaxPoolPointsPerTx RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse
 */
export declare class QueryGetProtoRevMaxPoolPointsPerTxResponse extends Message<QueryGetProtoRevMaxPoolPointsPerTxResponse> {
    /**
     * max_pool_points_per_tx is the maximum number of pool points that can be
     * consumed per transaction
     *
     * @generated from field: uint64 max_pool_points_per_tx = 1;
     */
    maxPoolPointsPerTx: bigint;
    constructor(data?: PartialMessage<QueryGetProtoRevMaxPoolPointsPerTxResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevMaxPoolPointsPerTxResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevMaxPoolPointsPerTxResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevMaxPoolPointsPerTxResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevMaxPoolPointsPerTxResponse;
    static equals(a: QueryGetProtoRevMaxPoolPointsPerTxResponse | PlainMessage<QueryGetProtoRevMaxPoolPointsPerTxResponse> | undefined, b: QueryGetProtoRevMaxPoolPointsPerTxResponse | PlainMessage<QueryGetProtoRevMaxPoolPointsPerTxResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevBaseDenomsRequest is request type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest
 */
export declare class QueryGetProtoRevBaseDenomsRequest extends Message<QueryGetProtoRevBaseDenomsRequest> {
    constructor(data?: PartialMessage<QueryGetProtoRevBaseDenomsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevBaseDenomsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevBaseDenomsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevBaseDenomsRequest;
    static equals(a: QueryGetProtoRevBaseDenomsRequest | PlainMessage<QueryGetProtoRevBaseDenomsRequest> | undefined, b: QueryGetProtoRevBaseDenomsRequest | PlainMessage<QueryGetProtoRevBaseDenomsRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevBaseDenomsResponse is response type for the
 * Query/GetProtoRevBaseDenoms RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse
 */
export declare class QueryGetProtoRevBaseDenomsResponse extends Message<QueryGetProtoRevBaseDenomsResponse> {
    /**
     * base_denoms is a list of all of the base denoms and step sizes
     *
     * @generated from field: repeated osmosis.protorev.v1beta1.BaseDenom base_denoms = 1;
     */
    baseDenoms: BaseDenom[];
    constructor(data?: PartialMessage<QueryGetProtoRevBaseDenomsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevBaseDenomsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevBaseDenomsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevBaseDenomsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevBaseDenomsResponse;
    static equals(a: QueryGetProtoRevBaseDenomsResponse | PlainMessage<QueryGetProtoRevBaseDenomsResponse> | undefined, b: QueryGetProtoRevBaseDenomsResponse | PlainMessage<QueryGetProtoRevBaseDenomsResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevEnabledRequest is request type for the
 * Query/GetProtoRevEnabled RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest
 */
export declare class QueryGetProtoRevEnabledRequest extends Message<QueryGetProtoRevEnabledRequest> {
    constructor(data?: PartialMessage<QueryGetProtoRevEnabledRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevEnabledRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevEnabledRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevEnabledRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevEnabledRequest;
    static equals(a: QueryGetProtoRevEnabledRequest | PlainMessage<QueryGetProtoRevEnabledRequest> | undefined, b: QueryGetProtoRevEnabledRequest | PlainMessage<QueryGetProtoRevEnabledRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevEnabledResponse is response type for the
 * Query/GetProtoRevEnabled RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse
 */
export declare class QueryGetProtoRevEnabledResponse extends Message<QueryGetProtoRevEnabledResponse> {
    /**
     * enabled is whether the module is enabled
     *
     * @generated from field: bool enabled = 1;
     */
    enabled: boolean;
    constructor(data?: PartialMessage<QueryGetProtoRevEnabledResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevEnabledResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevEnabledResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevEnabledResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevEnabledResponse;
    static equals(a: QueryGetProtoRevEnabledResponse | PlainMessage<QueryGetProtoRevEnabledResponse> | undefined, b: QueryGetProtoRevEnabledResponse | PlainMessage<QueryGetProtoRevEnabledResponse> | undefined): boolean;
}
/**
 * QueryGetProtoRevPoolRequest is request type for the
 * Query/GetProtoRevPool RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevPoolRequest
 */
export declare class QueryGetProtoRevPoolRequest extends Message<QueryGetProtoRevPoolRequest> {
    /**
     * base_denom is the base denom set in protorev for the denom pair to pool
     * mapping
     *
     * @generated from field: string base_denom = 1;
     */
    baseDenom: string;
    /**
     * other_denom is the other denom for the denom pair to pool mapping
     *
     * @generated from field: string other_denom = 2;
     */
    otherDenom: string;
    constructor(data?: PartialMessage<QueryGetProtoRevPoolRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevPoolRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevPoolRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevPoolRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevPoolRequest;
    static equals(a: QueryGetProtoRevPoolRequest | PlainMessage<QueryGetProtoRevPoolRequest> | undefined, b: QueryGetProtoRevPoolRequest | PlainMessage<QueryGetProtoRevPoolRequest> | undefined): boolean;
}
/**
 * QueryGetProtoRevPoolResponse is response type for the
 * Query/GetProtoRevPool RPC method.
 *
 * @generated from message osmosis.protorev.v1beta1.QueryGetProtoRevPoolResponse
 */
export declare class QueryGetProtoRevPoolResponse extends Message<QueryGetProtoRevPoolResponse> {
    /**
     * pool_id is the pool_id stored for the denom pair
     *
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<QueryGetProtoRevPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetProtoRevPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetProtoRevPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetProtoRevPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetProtoRevPoolResponse;
    static equals(a: QueryGetProtoRevPoolResponse | PlainMessage<QueryGetProtoRevPoolResponse> | undefined, b: QueryGetProtoRevPoolResponse | PlainMessage<QueryGetProtoRevPoolResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueRequest
 */
export declare class QueryGetAllProtocolRevenueRequest extends Message<QueryGetAllProtocolRevenueRequest> {
    constructor(data?: PartialMessage<QueryGetAllProtocolRevenueRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetAllProtocolRevenueRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetAllProtocolRevenueRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetAllProtocolRevenueRequest;
    static equals(a: QueryGetAllProtocolRevenueRequest | PlainMessage<QueryGetAllProtocolRevenueRequest> | undefined, b: QueryGetAllProtocolRevenueRequest | PlainMessage<QueryGetAllProtocolRevenueRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueResponse
 */
export declare class QueryGetAllProtocolRevenueResponse extends Message<QueryGetAllProtocolRevenueResponse> {
    /**
     * @generated from field: osmosis.protorev.v1beta1.AllProtocolRevenue all_protocol_revenue = 1;
     */
    allProtocolRevenue?: AllProtocolRevenue;
    constructor(data?: PartialMessage<QueryGetAllProtocolRevenueResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.QueryGetAllProtocolRevenueResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetAllProtocolRevenueResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetAllProtocolRevenueResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetAllProtocolRevenueResponse;
    static equals(a: QueryGetAllProtocolRevenueResponse | PlainMessage<QueryGetAllProtocolRevenueResponse> | undefined, b: QueryGetAllProtocolRevenueResponse | PlainMessage<QueryGetAllProtocolRevenueResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map