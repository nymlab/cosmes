import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { AggregateAccountVolumeRecord, BinaryOptionsMarket, CampaignRewardPool, DenomDecimals, Deposit, DerivativeMarket, ExpiryFuturesMarketInfo, FeeDiscountSchedule, FeeDiscountTierInfo, FeeDiscountTierTTL, Level, MarketVolume, MidPriceAndTOB, Params, PerpetualMarketFunding, PerpetualMarketInfo, Position, SpotMarket, SubaccountOrderbookMetadata, SubaccountOrderData, TradeRecord, TradeRecords, TradingRewardCampaignInfo, VolumeRecord } from "./exchange_pb.js";
import { Balance, DerivativePosition, GenesisState } from "./genesis_pb.js";
import { MetadataStatistics } from "../../oracle/v1beta1/oracle_pb.js";
/**
 * @generated from enum injective.exchange.v1beta1.OrderSide
 */
export declare enum OrderSide {
    /**
     * will return both
     *
     * @generated from enum value: Side_Unspecified = 0;
     */
    Side_Unspecified = 0,
    /**
     * @generated from enum value: Buy = 1;
     */
    Buy = 1,
    /**
     * @generated from enum value: Sell = 2;
     */
    Sell = 2
}
/**
 * CancellationStrategy is the list of cancellation strategies.
 *
 * @generated from enum injective.exchange.v1beta1.CancellationStrategy
 */
export declare enum CancellationStrategy {
    /**
     * just cancelling in random order in most efficient way
     *
     * @generated from enum value: UnspecifiedOrder = 0;
     */
    UnspecifiedOrder = 0,
    /**
     * e.g. for buy orders from lowest to highest price
     *
     * @generated from enum value: FromWorstToBest = 1;
     */
    FromWorstToBest = 1,
    /**
     * e.g. for buy orders from higest to lowest price
     *
     * @generated from enum value: FromBestToWorst = 2;
     */
    FromBestToWorst = 2
}
/**
 * @generated from message injective.exchange.v1beta1.Subaccount
 */
export declare class Subaccount extends Message<Subaccount> {
    /**
     * @generated from field: string trader = 1;
     */
    trader: string;
    /**
     * @generated from field: uint32 subaccount_nonce = 2;
     */
    subaccountNonce: number;
    constructor(data?: PartialMessage<Subaccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.Subaccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Subaccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Subaccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Subaccount;
    static equals(a: Subaccount | PlainMessage<Subaccount> | undefined, b: Subaccount | PlainMessage<Subaccount> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.QuerySubaccountOrdersRequest
 */
export declare class QuerySubaccountOrdersRequest extends Message<QuerySubaccountOrdersRequest> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    constructor(data?: PartialMessage<QuerySubaccountOrdersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountOrdersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountOrdersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountOrdersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountOrdersRequest;
    static equals(a: QuerySubaccountOrdersRequest | PlainMessage<QuerySubaccountOrdersRequest> | undefined, b: QuerySubaccountOrdersRequest | PlainMessage<QuerySubaccountOrdersRequest> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.QuerySubaccountOrdersResponse
 */
export declare class QuerySubaccountOrdersResponse extends Message<QuerySubaccountOrdersResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SubaccountOrderData buy_orders = 1;
     */
    buyOrders: SubaccountOrderData[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SubaccountOrderData sell_orders = 2;
     */
    sellOrders: SubaccountOrderData[];
    constructor(data?: PartialMessage<QuerySubaccountOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountOrdersResponse;
    static equals(a: QuerySubaccountOrdersResponse | PlainMessage<QuerySubaccountOrdersResponse> | undefined, b: QuerySubaccountOrdersResponse | PlainMessage<QuerySubaccountOrdersResponse> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket
 */
export declare class SubaccountOrderbookMetadataWithMarket extends Message<SubaccountOrderbookMetadataWithMarket> {
    /**
     * @generated from field: injective.exchange.v1beta1.SubaccountOrderbookMetadata metadata = 1;
     */
    metadata?: SubaccountOrderbookMetadata;
    /**
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    /**
     * @generated from field: bool isBuy = 3;
     */
    isBuy: boolean;
    constructor(data?: PartialMessage<SubaccountOrderbookMetadataWithMarket>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubaccountOrderbookMetadataWithMarket;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubaccountOrderbookMetadataWithMarket;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubaccountOrderbookMetadataWithMarket;
    static equals(a: SubaccountOrderbookMetadataWithMarket | PlainMessage<SubaccountOrderbookMetadataWithMarket> | undefined, b: SubaccountOrderbookMetadataWithMarket | PlainMessage<SubaccountOrderbookMetadataWithMarket> | undefined): boolean;
}
/**
 * QueryExchangeParamsRequest is the request type for the Query/ExchangeParams
 * RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryExchangeParamsRequest
 */
export declare class QueryExchangeParamsRequest extends Message<QueryExchangeParamsRequest> {
    constructor(data?: PartialMessage<QueryExchangeParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryExchangeParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryExchangeParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryExchangeParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryExchangeParamsRequest;
    static equals(a: QueryExchangeParamsRequest | PlainMessage<QueryExchangeParamsRequest> | undefined, b: QueryExchangeParamsRequest | PlainMessage<QueryExchangeParamsRequest> | undefined): boolean;
}
/**
 * QueryExchangeParamsRequest is the response type for the Query/ExchangeParams
 * RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryExchangeParamsResponse
 */
export declare class QueryExchangeParamsResponse extends Message<QueryExchangeParamsResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryExchangeParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryExchangeParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryExchangeParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryExchangeParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryExchangeParamsResponse;
    static equals(a: QueryExchangeParamsResponse | PlainMessage<QueryExchangeParamsResponse> | undefined, b: QueryExchangeParamsResponse | PlainMessage<QueryExchangeParamsResponse> | undefined): boolean;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountDepositsRequest
 */
export declare class QuerySubaccountDepositsRequest extends Message<QuerySubaccountDepositsRequest> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.Subaccount subaccount = 2;
     */
    subaccount?: Subaccount;
    constructor(data?: PartialMessage<QuerySubaccountDepositsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountDepositsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountDepositsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountDepositsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountDepositsRequest;
    static equals(a: QuerySubaccountDepositsRequest | PlainMessage<QuerySubaccountDepositsRequest> | undefined, b: QuerySubaccountDepositsRequest | PlainMessage<QuerySubaccountDepositsRequest> | undefined): boolean;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountDepositsResponse
 */
export declare class QuerySubaccountDepositsResponse extends Message<QuerySubaccountDepositsResponse> {
    /**
     * @generated from field: map<string, injective.exchange.v1beta1.Deposit> deposits = 1;
     */
    deposits: {
        [key: string]: Deposit;
    };
    constructor(data?: PartialMessage<QuerySubaccountDepositsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountDepositsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountDepositsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountDepositsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountDepositsResponse;
    static equals(a: QuerySubaccountDepositsResponse | PlainMessage<QuerySubaccountDepositsResponse> | undefined, b: QuerySubaccountDepositsResponse | PlainMessage<QuerySubaccountDepositsResponse> | undefined): boolean;
}
/**
 * QueryExchangeBalancesRequest is the request type for the
 * Query/ExchangeBalances RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryExchangeBalancesRequest
 */
export declare class QueryExchangeBalancesRequest extends Message<QueryExchangeBalancesRequest> {
    constructor(data?: PartialMessage<QueryExchangeBalancesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryExchangeBalancesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryExchangeBalancesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryExchangeBalancesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryExchangeBalancesRequest;
    static equals(a: QueryExchangeBalancesRequest | PlainMessage<QueryExchangeBalancesRequest> | undefined, b: QueryExchangeBalancesRequest | PlainMessage<QueryExchangeBalancesRequest> | undefined): boolean;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryExchangeBalancesResponse
 */
export declare class QueryExchangeBalancesResponse extends Message<QueryExchangeBalancesResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.Balance balances = 1;
     */
    balances: Balance[];
    constructor(data?: PartialMessage<QueryExchangeBalancesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryExchangeBalancesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryExchangeBalancesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryExchangeBalancesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryExchangeBalancesResponse;
    static equals(a: QueryExchangeBalancesResponse | PlainMessage<QueryExchangeBalancesResponse> | undefined, b: QueryExchangeBalancesResponse | PlainMessage<QueryExchangeBalancesResponse> | undefined): boolean;
}
/**
 * QueryAggregateVolumeRequest is the request type for the Query/AggregateVolume
 * RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryAggregateVolumeRequest
 */
export declare class QueryAggregateVolumeRequest extends Message<QueryAggregateVolumeRequest> {
    /**
     * can either be an address or a subaccount
     *
     * @generated from field: string account = 1;
     */
    account: string;
    constructor(data?: PartialMessage<QueryAggregateVolumeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryAggregateVolumeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregateVolumeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregateVolumeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregateVolumeRequest;
    static equals(a: QueryAggregateVolumeRequest | PlainMessage<QueryAggregateVolumeRequest> | undefined, b: QueryAggregateVolumeRequest | PlainMessage<QueryAggregateVolumeRequest> | undefined): boolean;
}
/**
 * QueryAggregateVolumeResponse is the response type for the
 * Query/AggregateVolume RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryAggregateVolumeResponse
 */
export declare class QueryAggregateVolumeResponse extends Message<QueryAggregateVolumeResponse> {
    /**
     * if an address is specified, then the aggregate_volumes will aggregate the
     * volumes across all subaccounts for the address
     *
     * @generated from field: repeated injective.exchange.v1beta1.MarketVolume aggregate_volumes = 1;
     */
    aggregateVolumes: MarketVolume[];
    constructor(data?: PartialMessage<QueryAggregateVolumeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryAggregateVolumeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregateVolumeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregateVolumeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregateVolumeResponse;
    static equals(a: QueryAggregateVolumeResponse | PlainMessage<QueryAggregateVolumeResponse> | undefined, b: QueryAggregateVolumeResponse | PlainMessage<QueryAggregateVolumeResponse> | undefined): boolean;
}
/**
 * QueryAggregateVolumesRequest is the request type for the
 * Query/AggregateVolumes RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryAggregateVolumesRequest
 */
export declare class QueryAggregateVolumesRequest extends Message<QueryAggregateVolumesRequest> {
    /**
     * @generated from field: repeated string accounts = 1;
     */
    accounts: string[];
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<QueryAggregateVolumesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryAggregateVolumesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregateVolumesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregateVolumesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregateVolumesRequest;
    static equals(a: QueryAggregateVolumesRequest | PlainMessage<QueryAggregateVolumesRequest> | undefined, b: QueryAggregateVolumesRequest | PlainMessage<QueryAggregateVolumesRequest> | undefined): boolean;
}
/**
 * QueryAggregateVolumesResponse is the response type for the
 * Query/AggregateVolumes RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryAggregateVolumesResponse
 */
export declare class QueryAggregateVolumesResponse extends Message<QueryAggregateVolumesResponse> {
    /**
     * the aggregate volume records for the accounts specified
     *
     * @generated from field: repeated injective.exchange.v1beta1.AggregateAccountVolumeRecord aggregate_account_volumes = 1;
     */
    aggregateAccountVolumes: AggregateAccountVolumeRecord[];
    /**
     * the aggregate volumes for the markets specified
     *
     * @generated from field: repeated injective.exchange.v1beta1.MarketVolume aggregate_market_volumes = 2;
     */
    aggregateMarketVolumes: MarketVolume[];
    constructor(data?: PartialMessage<QueryAggregateVolumesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryAggregateVolumesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregateVolumesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregateVolumesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregateVolumesResponse;
    static equals(a: QueryAggregateVolumesResponse | PlainMessage<QueryAggregateVolumesResponse> | undefined, b: QueryAggregateVolumesResponse | PlainMessage<QueryAggregateVolumesResponse> | undefined): boolean;
}
/**
 * QueryAggregateMarketVolumeRequest is the request type for the
 * Query/AggregateMarketVolume RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryAggregateMarketVolumeRequest
 */
export declare class QueryAggregateMarketVolumeRequest extends Message<QueryAggregateMarketVolumeRequest> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QueryAggregateMarketVolumeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryAggregateMarketVolumeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregateMarketVolumeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregateMarketVolumeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregateMarketVolumeRequest;
    static equals(a: QueryAggregateMarketVolumeRequest | PlainMessage<QueryAggregateMarketVolumeRequest> | undefined, b: QueryAggregateMarketVolumeRequest | PlainMessage<QueryAggregateMarketVolumeRequest> | undefined): boolean;
}
/**
 * QueryAggregateMarketVolumeResponse is the response type for the
 * Query/AggregateMarketVolume RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryAggregateMarketVolumeResponse
 */
export declare class QueryAggregateMarketVolumeResponse extends Message<QueryAggregateMarketVolumeResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.VolumeRecord volume = 1;
     */
    volume?: VolumeRecord;
    constructor(data?: PartialMessage<QueryAggregateMarketVolumeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryAggregateMarketVolumeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregateMarketVolumeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregateMarketVolumeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregateMarketVolumeResponse;
    static equals(a: QueryAggregateMarketVolumeResponse | PlainMessage<QueryAggregateMarketVolumeResponse> | undefined, b: QueryAggregateMarketVolumeResponse | PlainMessage<QueryAggregateMarketVolumeResponse> | undefined): boolean;
}
/**
 * QueryDenomDecimalRequest is the request type for the Query/DenomDecimal RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDenomDecimalRequest
 */
export declare class QueryDenomDecimalRequest extends Message<QueryDenomDecimalRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryDenomDecimalRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDenomDecimalRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomDecimalRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomDecimalRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomDecimalRequest;
    static equals(a: QueryDenomDecimalRequest | PlainMessage<QueryDenomDecimalRequest> | undefined, b: QueryDenomDecimalRequest | PlainMessage<QueryDenomDecimalRequest> | undefined): boolean;
}
/**
 * QueryDenomDecimalResponse is the response type for the Query/DenomDecimal RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDenomDecimalResponse
 */
export declare class QueryDenomDecimalResponse extends Message<QueryDenomDecimalResponse> {
    /**
     * @generated from field: uint64 decimal = 1;
     */
    decimal: bigint;
    constructor(data?: PartialMessage<QueryDenomDecimalResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDenomDecimalResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomDecimalResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomDecimalResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomDecimalResponse;
    static equals(a: QueryDenomDecimalResponse | PlainMessage<QueryDenomDecimalResponse> | undefined, b: QueryDenomDecimalResponse | PlainMessage<QueryDenomDecimalResponse> | undefined): boolean;
}
/**
 * QueryDenomDecimalsRequest is the request type for the Query/DenomDecimals RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDenomDecimalsRequest
 */
export declare class QueryDenomDecimalsRequest extends Message<QueryDenomDecimalsRequest> {
    /**
     * denoms can be empty to query all denom decimals
     *
     * @generated from field: repeated string denoms = 1;
     */
    denoms: string[];
    constructor(data?: PartialMessage<QueryDenomDecimalsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDenomDecimalsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomDecimalsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomDecimalsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomDecimalsRequest;
    static equals(a: QueryDenomDecimalsRequest | PlainMessage<QueryDenomDecimalsRequest> | undefined, b: QueryDenomDecimalsRequest | PlainMessage<QueryDenomDecimalsRequest> | undefined): boolean;
}
/**
 * QueryDenomDecimalsRequest is the response type for the Query/DenomDecimals
 * RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDenomDecimalsResponse
 */
export declare class QueryDenomDecimalsResponse extends Message<QueryDenomDecimalsResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DenomDecimals denom_decimals = 1;
     */
    denomDecimals: DenomDecimals[];
    constructor(data?: PartialMessage<QueryDenomDecimalsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDenomDecimalsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomDecimalsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomDecimalsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomDecimalsResponse;
    static equals(a: QueryDenomDecimalsResponse | PlainMessage<QueryDenomDecimalsResponse> | undefined, b: QueryDenomDecimalsResponse | PlainMessage<QueryDenomDecimalsResponse> | undefined): boolean;
}
/**
 * QueryAggregateMarketVolumesRequest is the request type for the
 * Query/AggregateMarketVolumes RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryAggregateMarketVolumesRequest
 */
export declare class QueryAggregateMarketVolumesRequest extends Message<QueryAggregateMarketVolumesRequest> {
    /**
     * @generated from field: repeated string market_ids = 1;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<QueryAggregateMarketVolumesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryAggregateMarketVolumesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregateMarketVolumesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregateMarketVolumesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregateMarketVolumesRequest;
    static equals(a: QueryAggregateMarketVolumesRequest | PlainMessage<QueryAggregateMarketVolumesRequest> | undefined, b: QueryAggregateMarketVolumesRequest | PlainMessage<QueryAggregateMarketVolumesRequest> | undefined): boolean;
}
/**
 * QueryAggregateMarketVolumesResponse is the response type for the
 * Query/AggregateMarketVolumes RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryAggregateMarketVolumesResponse
 */
export declare class QueryAggregateMarketVolumesResponse extends Message<QueryAggregateMarketVolumesResponse> {
    /**
     * the aggregate volumes for the entire market
     *
     * @generated from field: repeated injective.exchange.v1beta1.MarketVolume volumes = 1;
     */
    volumes: MarketVolume[];
    constructor(data?: PartialMessage<QueryAggregateMarketVolumesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryAggregateMarketVolumesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregateMarketVolumesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregateMarketVolumesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregateMarketVolumesResponse;
    static equals(a: QueryAggregateMarketVolumesResponse | PlainMessage<QueryAggregateMarketVolumesResponse> | undefined, b: QueryAggregateMarketVolumesResponse | PlainMessage<QueryAggregateMarketVolumesResponse> | undefined): boolean;
}
/**
 * QuerySubaccountDepositsRequest is the request type for the
 * Query/SubaccountDeposits RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountDepositRequest
 */
export declare class QuerySubaccountDepositRequest extends Message<QuerySubaccountDepositRequest> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    constructor(data?: PartialMessage<QuerySubaccountDepositRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountDepositRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountDepositRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountDepositRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountDepositRequest;
    static equals(a: QuerySubaccountDepositRequest | PlainMessage<QuerySubaccountDepositRequest> | undefined, b: QuerySubaccountDepositRequest | PlainMessage<QuerySubaccountDepositRequest> | undefined): boolean;
}
/**
 * QuerySubaccountDepositsResponse is the response type for the
 * Query/SubaccountDeposits RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountDepositResponse
 */
export declare class QuerySubaccountDepositResponse extends Message<QuerySubaccountDepositResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.Deposit deposits = 1;
     */
    deposits?: Deposit;
    constructor(data?: PartialMessage<QuerySubaccountDepositResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountDepositResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountDepositResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountDepositResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountDepositResponse;
    static equals(a: QuerySubaccountDepositResponse | PlainMessage<QuerySubaccountDepositResponse> | undefined, b: QuerySubaccountDepositResponse | PlainMessage<QuerySubaccountDepositResponse> | undefined): boolean;
}
/**
 * QuerySpotMarketsRequest is the request type for the Query/SpotMarkets RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySpotMarketsRequest
 */
export declare class QuerySpotMarketsRequest extends Message<QuerySpotMarketsRequest> {
    /**
     * Status of the market, for convenience it is set to string - not enum
     *
     * @generated from field: string status = 1;
     */
    status: string;
    /**
     * Filter by market IDs
     *
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<QuerySpotMarketsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySpotMarketsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotMarketsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotMarketsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotMarketsRequest;
    static equals(a: QuerySpotMarketsRequest | PlainMessage<QuerySpotMarketsRequest> | undefined, b: QuerySpotMarketsRequest | PlainMessage<QuerySpotMarketsRequest> | undefined): boolean;
}
/**
 * QuerySpotMarketsResponse is the response type for the Query/SpotMarkets RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySpotMarketsResponse
 */
export declare class QuerySpotMarketsResponse extends Message<QuerySpotMarketsResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SpotMarket markets = 1;
     */
    markets: SpotMarket[];
    constructor(data?: PartialMessage<QuerySpotMarketsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySpotMarketsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotMarketsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotMarketsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotMarketsResponse;
    static equals(a: QuerySpotMarketsResponse | PlainMessage<QuerySpotMarketsResponse> | undefined, b: QuerySpotMarketsResponse | PlainMessage<QuerySpotMarketsResponse> | undefined): boolean;
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySpotMarketRequest
 */
export declare class QuerySpotMarketRequest extends Message<QuerySpotMarketRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QuerySpotMarketRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySpotMarketRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotMarketRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotMarketRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotMarketRequest;
    static equals(a: QuerySpotMarketRequest | PlainMessage<QuerySpotMarketRequest> | undefined, b: QuerySpotMarketRequest | PlainMessage<QuerySpotMarketRequest> | undefined): boolean;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySpotMarketResponse
 */
export declare class QuerySpotMarketResponse extends Message<QuerySpotMarketResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.SpotMarket market = 1;
     */
    market?: SpotMarket;
    constructor(data?: PartialMessage<QuerySpotMarketResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySpotMarketResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotMarketResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotMarketResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotMarketResponse;
    static equals(a: QuerySpotMarketResponse | PlainMessage<QuerySpotMarketResponse> | undefined, b: QuerySpotMarketResponse | PlainMessage<QuerySpotMarketResponse> | undefined): boolean;
}
/**
 * QuerySpotOrderbookRequest is the request type for the Query/SpotOrderbook RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySpotOrderbookRequest
 */
export declare class QuerySpotOrderbookRequest extends Message<QuerySpotOrderbookRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: uint64 limit = 2;
     */
    limit: bigint;
    /**
     * @generated from field: injective.exchange.v1beta1.OrderSide order_side = 3;
     */
    orderSide: OrderSide;
    /**
     * @generated from field: string limit_cumulative_notional = 4;
     */
    limitCumulativeNotional: string;
    /**
     * @generated from field: string limit_cumulative_quantity = 5;
     */
    limitCumulativeQuantity: string;
    constructor(data?: PartialMessage<QuerySpotOrderbookRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySpotOrderbookRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotOrderbookRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotOrderbookRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotOrderbookRequest;
    static equals(a: QuerySpotOrderbookRequest | PlainMessage<QuerySpotOrderbookRequest> | undefined, b: QuerySpotOrderbookRequest | PlainMessage<QuerySpotOrderbookRequest> | undefined): boolean;
}
/**
 * QuerySpotOrderbookResponse is the response type for the Query/SpotOrderbook
 * RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySpotOrderbookResponse
 */
export declare class QuerySpotOrderbookResponse extends Message<QuerySpotOrderbookResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.Level buys_price_level = 1;
     */
    buysPriceLevel: Level[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.Level sells_price_level = 2;
     */
    sellsPriceLevel: Level[];
    constructor(data?: PartialMessage<QuerySpotOrderbookResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySpotOrderbookResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotOrderbookResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotOrderbookResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotOrderbookResponse;
    static equals(a: QuerySpotOrderbookResponse | PlainMessage<QuerySpotOrderbookResponse> | undefined, b: QuerySpotOrderbookResponse | PlainMessage<QuerySpotOrderbookResponse> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.FullSpotMarket
 */
export declare class FullSpotMarket extends Message<FullSpotMarket> {
    /**
     * @generated from field: injective.exchange.v1beta1.SpotMarket market = 1;
     */
    market?: SpotMarket;
    /**
     * mid_price_and_tob defines the mid price for this market and the best ask
     * and bid orders
     *
     * @generated from field: injective.exchange.v1beta1.MidPriceAndTOB mid_price_and_tob = 2;
     */
    midPriceAndTob?: MidPriceAndTOB;
    constructor(data?: PartialMessage<FullSpotMarket>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.FullSpotMarket";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FullSpotMarket;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FullSpotMarket;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FullSpotMarket;
    static equals(a: FullSpotMarket | PlainMessage<FullSpotMarket> | undefined, b: FullSpotMarket | PlainMessage<FullSpotMarket> | undefined): boolean;
}
/**
 * QueryFullSpotMarketsRequest is the request type for the Query/FullSpotMarkets
 * RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryFullSpotMarketsRequest
 */
export declare class QueryFullSpotMarketsRequest extends Message<QueryFullSpotMarketsRequest> {
    /**
     * Status of the market, for convenience it is set to string - not enum
     *
     * @generated from field: string status = 1;
     */
    status: string;
    /**
     * Filter by market IDs
     *
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    /**
     * Flag to return the markets mid price and top of the book buy and sell
     * orders.
     *
     * @generated from field: bool with_mid_price_and_tob = 3;
     */
    withMidPriceAndTob: boolean;
    constructor(data?: PartialMessage<QueryFullSpotMarketsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryFullSpotMarketsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFullSpotMarketsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFullSpotMarketsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFullSpotMarketsRequest;
    static equals(a: QueryFullSpotMarketsRequest | PlainMessage<QueryFullSpotMarketsRequest> | undefined, b: QueryFullSpotMarketsRequest | PlainMessage<QueryFullSpotMarketsRequest> | undefined): boolean;
}
/**
 * QueryFullSpotMarketsResponse is the response type for the
 * Query/FullSpotMarkets RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryFullSpotMarketsResponse
 */
export declare class QueryFullSpotMarketsResponse extends Message<QueryFullSpotMarketsResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.FullSpotMarket markets = 1;
     */
    markets: FullSpotMarket[];
    constructor(data?: PartialMessage<QueryFullSpotMarketsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryFullSpotMarketsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFullSpotMarketsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFullSpotMarketsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFullSpotMarketsResponse;
    static equals(a: QueryFullSpotMarketsResponse | PlainMessage<QueryFullSpotMarketsResponse> | undefined, b: QueryFullSpotMarketsResponse | PlainMessage<QueryFullSpotMarketsResponse> | undefined): boolean;
}
/**
 * QuerySpotMarketRequest is the request type for the Query/SpotMarket RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.QueryFullSpotMarketRequest
 */
export declare class QueryFullSpotMarketRequest extends Message<QueryFullSpotMarketRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * Flag to return the markets mid price and top of the book buy and sell
     * orders.
     *
     * @generated from field: bool with_mid_price_and_tob = 2;
     */
    withMidPriceAndTob: boolean;
    constructor(data?: PartialMessage<QueryFullSpotMarketRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryFullSpotMarketRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFullSpotMarketRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFullSpotMarketRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFullSpotMarketRequest;
    static equals(a: QueryFullSpotMarketRequest | PlainMessage<QueryFullSpotMarketRequest> | undefined, b: QueryFullSpotMarketRequest | PlainMessage<QueryFullSpotMarketRequest> | undefined): boolean;
}
/**
 * QuerySpotMarketResponse is the response type for the Query/SpotMarket RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.QueryFullSpotMarketResponse
 */
export declare class QueryFullSpotMarketResponse extends Message<QueryFullSpotMarketResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.FullSpotMarket market = 1;
     */
    market?: FullSpotMarket;
    constructor(data?: PartialMessage<QueryFullSpotMarketResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryFullSpotMarketResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFullSpotMarketResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFullSpotMarketResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFullSpotMarketResponse;
    static equals(a: QueryFullSpotMarketResponse | PlainMessage<QueryFullSpotMarketResponse> | undefined, b: QueryFullSpotMarketResponse | PlainMessage<QueryFullSpotMarketResponse> | undefined): boolean;
}
/**
 * QuerySpotOrdersByHashesRequest is the request type for the
 * Query/SpotOrdersByHashes RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest
 */
export declare class QuerySpotOrdersByHashesRequest extends Message<QuerySpotOrdersByHashesRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * SubaccountID of the trader
     *
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    /**
     * the order hashes
     *
     * @generated from field: repeated string order_hashes = 3;
     */
    orderHashes: string[];
    constructor(data?: PartialMessage<QuerySpotOrdersByHashesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySpotOrdersByHashesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotOrdersByHashesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotOrdersByHashesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotOrdersByHashesRequest;
    static equals(a: QuerySpotOrdersByHashesRequest | PlainMessage<QuerySpotOrdersByHashesRequest> | undefined, b: QuerySpotOrdersByHashesRequest | PlainMessage<QuerySpotOrdersByHashesRequest> | undefined): boolean;
}
/**
 * QuerySpotOrdersByHashesResponse is the response type for the
 * Query/SpotOrdersByHashes RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse
 */
export declare class QuerySpotOrdersByHashesResponse extends Message<QuerySpotOrdersByHashesResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TrimmedSpotLimitOrder orders = 1;
     */
    orders: TrimmedSpotLimitOrder[];
    constructor(data?: PartialMessage<QuerySpotOrdersByHashesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySpotOrdersByHashesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotOrdersByHashesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotOrdersByHashesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotOrdersByHashesResponse;
    static equals(a: QuerySpotOrdersByHashesResponse | PlainMessage<QuerySpotOrdersByHashesResponse> | undefined, b: QuerySpotOrdersByHashesResponse | PlainMessage<QuerySpotOrdersByHashesResponse> | undefined): boolean;
}
/**
 * QueryTraderSpotOrdersRequest is the request type for the
 * Query/TraderSpotOrders RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryTraderSpotOrdersRequest
 */
export declare class QueryTraderSpotOrdersRequest extends Message<QueryTraderSpotOrdersRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * SubaccountID of the trader
     *
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    constructor(data?: PartialMessage<QueryTraderSpotOrdersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryTraderSpotOrdersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTraderSpotOrdersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTraderSpotOrdersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTraderSpotOrdersRequest;
    static equals(a: QueryTraderSpotOrdersRequest | PlainMessage<QueryTraderSpotOrdersRequest> | undefined, b: QueryTraderSpotOrdersRequest | PlainMessage<QueryTraderSpotOrdersRequest> | undefined): boolean;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressSpotOrders RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryAccountAddressSpotOrdersRequest
 */
export declare class QueryAccountAddressSpotOrdersRequest extends Message<QueryAccountAddressSpotOrdersRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * Account address of the trader
     *
     * @generated from field: string account_address = 2;
     */
    accountAddress: string;
    constructor(data?: PartialMessage<QueryAccountAddressSpotOrdersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryAccountAddressSpotOrdersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountAddressSpotOrdersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountAddressSpotOrdersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountAddressSpotOrdersRequest;
    static equals(a: QueryAccountAddressSpotOrdersRequest | PlainMessage<QueryAccountAddressSpotOrdersRequest> | undefined, b: QueryAccountAddressSpotOrdersRequest | PlainMessage<QueryAccountAddressSpotOrdersRequest> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TrimmedSpotLimitOrder
 */
export declare class TrimmedSpotLimitOrder extends Message<TrimmedSpotLimitOrder> {
    /**
     * price of the order
     *
     * @generated from field: string price = 1;
     */
    price: string;
    /**
     * quantity of the order
     *
     * @generated from field: string quantity = 2;
     */
    quantity: string;
    /**
     * the amount of the quantity remaining fillable
     *
     * @generated from field: string fillable = 3;
     */
    fillable: string;
    /**
     * true if the order is a buy
     *
     * @generated from field: bool isBuy = 4;
     */
    isBuy: boolean;
    /**
     * @generated from field: string order_hash = 5;
     */
    orderHash: string;
    constructor(data?: PartialMessage<TrimmedSpotLimitOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TrimmedSpotLimitOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrimmedSpotLimitOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrimmedSpotLimitOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrimmedSpotLimitOrder;
    static equals(a: TrimmedSpotLimitOrder | PlainMessage<TrimmedSpotLimitOrder> | undefined, b: TrimmedSpotLimitOrder | PlainMessage<TrimmedSpotLimitOrder> | undefined): boolean;
}
/**
 * QueryTraderSpotOrdersResponse is the response type for the
 * Query/TraderSpotOrders RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryTraderSpotOrdersResponse
 */
export declare class QueryTraderSpotOrdersResponse extends Message<QueryTraderSpotOrdersResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TrimmedSpotLimitOrder orders = 1;
     */
    orders: TrimmedSpotLimitOrder[];
    constructor(data?: PartialMessage<QueryTraderSpotOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryTraderSpotOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTraderSpotOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTraderSpotOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTraderSpotOrdersResponse;
    static equals(a: QueryTraderSpotOrdersResponse | PlainMessage<QueryTraderSpotOrdersResponse> | undefined, b: QueryTraderSpotOrdersResponse | PlainMessage<QueryTraderSpotOrdersResponse> | undefined): boolean;
}
/**
 * QueryAccountAddressSpotOrdersResponse is the response type for the
 * Query/AccountAddressSpotOrders RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryAccountAddressSpotOrdersResponse
 */
export declare class QueryAccountAddressSpotOrdersResponse extends Message<QueryAccountAddressSpotOrdersResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TrimmedSpotLimitOrder orders = 1;
     */
    orders: TrimmedSpotLimitOrder[];
    constructor(data?: PartialMessage<QueryAccountAddressSpotOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryAccountAddressSpotOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountAddressSpotOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountAddressSpotOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountAddressSpotOrdersResponse;
    static equals(a: QueryAccountAddressSpotOrdersResponse | PlainMessage<QueryAccountAddressSpotOrdersResponse> | undefined, b: QueryAccountAddressSpotOrdersResponse | PlainMessage<QueryAccountAddressSpotOrdersResponse> | undefined): boolean;
}
/**
 * QuerySpotMidPriceAndTOBRequest is the request type for the
 * Query/SpotMidPriceAndTOB RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest
 */
export declare class QuerySpotMidPriceAndTOBRequest extends Message<QuerySpotMidPriceAndTOBRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QuerySpotMidPriceAndTOBRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySpotMidPriceAndTOBRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotMidPriceAndTOBRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotMidPriceAndTOBRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotMidPriceAndTOBRequest;
    static equals(a: QuerySpotMidPriceAndTOBRequest | PlainMessage<QuerySpotMidPriceAndTOBRequest> | undefined, b: QuerySpotMidPriceAndTOBRequest | PlainMessage<QuerySpotMidPriceAndTOBRequest> | undefined): boolean;
}
/**
 * QuerySpotMidPriceAndTOBResponse is the response type for the
 * Query/SpotMidPriceAndTOB RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse
 */
export declare class QuerySpotMidPriceAndTOBResponse extends Message<QuerySpotMidPriceAndTOBResponse> {
    /**
     * mid price of the market
     *
     * @generated from field: string mid_price = 1;
     */
    midPrice: string;
    /**
     * best buy price of the market
     *
     * @generated from field: string best_buy_price = 2;
     */
    bestBuyPrice: string;
    /**
     * best sell price of the market
     *
     * @generated from field: string best_sell_price = 3;
     */
    bestSellPrice: string;
    constructor(data?: PartialMessage<QuerySpotMidPriceAndTOBResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySpotMidPriceAndTOBResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySpotMidPriceAndTOBResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySpotMidPriceAndTOBResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySpotMidPriceAndTOBResponse;
    static equals(a: QuerySpotMidPriceAndTOBResponse | PlainMessage<QuerySpotMidPriceAndTOBResponse> | undefined, b: QuerySpotMidPriceAndTOBResponse | PlainMessage<QuerySpotMidPriceAndTOBResponse> | undefined): boolean;
}
/**
 * QueryDerivativeMidPriceAndTOBRequest is the request type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest
 */
export declare class QueryDerivativeMidPriceAndTOBRequest extends Message<QueryDerivativeMidPriceAndTOBRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QueryDerivativeMidPriceAndTOBRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDerivativeMidPriceAndTOBRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDerivativeMidPriceAndTOBRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDerivativeMidPriceAndTOBRequest;
    static equals(a: QueryDerivativeMidPriceAndTOBRequest | PlainMessage<QueryDerivativeMidPriceAndTOBRequest> | undefined, b: QueryDerivativeMidPriceAndTOBRequest | PlainMessage<QueryDerivativeMidPriceAndTOBRequest> | undefined): boolean;
}
/**
 * QueryDerivativeMidPriceAndTOBResponse is the response type for the
 * Query/GetDerivativeMidPriceAndTOB RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse
 */
export declare class QueryDerivativeMidPriceAndTOBResponse extends Message<QueryDerivativeMidPriceAndTOBResponse> {
    /**
     * mid price of the market
     *
     * @generated from field: string mid_price = 1;
     */
    midPrice: string;
    /**
     * best buy price of the market
     *
     * @generated from field: string best_buy_price = 2;
     */
    bestBuyPrice: string;
    /**
     * best sell price of the market
     *
     * @generated from field: string best_sell_price = 3;
     */
    bestSellPrice: string;
    constructor(data?: PartialMessage<QueryDerivativeMidPriceAndTOBResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDerivativeMidPriceAndTOBResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDerivativeMidPriceAndTOBResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDerivativeMidPriceAndTOBResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDerivativeMidPriceAndTOBResponse;
    static equals(a: QueryDerivativeMidPriceAndTOBResponse | PlainMessage<QueryDerivativeMidPriceAndTOBResponse> | undefined, b: QueryDerivativeMidPriceAndTOBResponse | PlainMessage<QueryDerivativeMidPriceAndTOBResponse> | undefined): boolean;
}
/**
 * QueryDerivativeOrderbookRequest is the request type for the
 * Query/DerivativeOrderbook RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDerivativeOrderbookRequest
 */
export declare class QueryDerivativeOrderbookRequest extends Message<QueryDerivativeOrderbookRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: uint64 limit = 2;
     */
    limit: bigint;
    /**
     * @generated from field: string limit_cumulative_notional = 3;
     */
    limitCumulativeNotional: string;
    constructor(data?: PartialMessage<QueryDerivativeOrderbookRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDerivativeOrderbookRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDerivativeOrderbookRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDerivativeOrderbookRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDerivativeOrderbookRequest;
    static equals(a: QueryDerivativeOrderbookRequest | PlainMessage<QueryDerivativeOrderbookRequest> | undefined, b: QueryDerivativeOrderbookRequest | PlainMessage<QueryDerivativeOrderbookRequest> | undefined): boolean;
}
/**
 * QueryDerivativeOrderbookResponse is the response type for the
 * Query/DerivativeOrderbook RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDerivativeOrderbookResponse
 */
export declare class QueryDerivativeOrderbookResponse extends Message<QueryDerivativeOrderbookResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.Level buys_price_level = 1;
     */
    buysPriceLevel: Level[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.Level sells_price_level = 2;
     */
    sellsPriceLevel: Level[];
    constructor(data?: PartialMessage<QueryDerivativeOrderbookResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDerivativeOrderbookResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDerivativeOrderbookResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDerivativeOrderbookResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDerivativeOrderbookResponse;
    static equals(a: QueryDerivativeOrderbookResponse | PlainMessage<QueryDerivativeOrderbookResponse> | undefined, b: QueryDerivativeOrderbookResponse | PlainMessage<QueryDerivativeOrderbookResponse> | undefined): boolean;
}
/**
 * QueryTraderSpotOrdersToCancelUpToAmountRequest is the request type for the
 * Query/TraderSpotOrdersToCancelUpToAmountRequest RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest
 */
export declare class QueryTraderSpotOrdersToCancelUpToAmountRequest extends Message<QueryTraderSpotOrdersToCancelUpToAmountRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * SubaccountID of the trader
     *
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    /**
     * the base amount to cancel (free up)
     *
     * @generated from field: string base_amount = 3;
     */
    baseAmount: string;
    /**
     * the quote amount to cancel (free up)
     *
     * @generated from field: string quote_amount = 4;
     */
    quoteAmount: string;
    /**
     * The cancellation strategy
     *
     * @generated from field: injective.exchange.v1beta1.CancellationStrategy strategy = 5;
     */
    strategy: CancellationStrategy;
    /**
     * The reference price for the cancellation strategy, e.g. mid price or mark
     * price
     *
     * @generated from field: string reference_price = 6;
     */
    referencePrice: string;
    constructor(data?: PartialMessage<QueryTraderSpotOrdersToCancelUpToAmountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryTraderSpotOrdersToCancelUpToAmountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTraderSpotOrdersToCancelUpToAmountRequest;
    static equals(a: QueryTraderSpotOrdersToCancelUpToAmountRequest | PlainMessage<QueryTraderSpotOrdersToCancelUpToAmountRequest> | undefined, b: QueryTraderSpotOrdersToCancelUpToAmountRequest | PlainMessage<QueryTraderSpotOrdersToCancelUpToAmountRequest> | undefined): boolean;
}
/**
 * QueryTraderDerivativeOrdersToCancelUpToAmountRequest is the request type for
 * the Query/TraderDerivativeOrdersToCancelUpToAmountRequest RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest
 */
export declare class QueryTraderDerivativeOrdersToCancelUpToAmountRequest extends Message<QueryTraderDerivativeOrdersToCancelUpToAmountRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * SubaccountID of the trader
     *
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    /**
     * the quote amount to cancel (free up)
     *
     * @generated from field: string quote_amount = 3;
     */
    quoteAmount: string;
    /**
     * The cancellation strategy
     *
     * @generated from field: injective.exchange.v1beta1.CancellationStrategy strategy = 4;
     */
    strategy: CancellationStrategy;
    /**
     * The reference price for the cancellation strategy, e.g. mid price or mark
     * price
     *
     * @generated from field: string reference_price = 5;
     */
    referencePrice: string;
    constructor(data?: PartialMessage<QueryTraderDerivativeOrdersToCancelUpToAmountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryTraderDerivativeOrdersToCancelUpToAmountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTraderDerivativeOrdersToCancelUpToAmountRequest;
    static equals(a: QueryTraderDerivativeOrdersToCancelUpToAmountRequest | PlainMessage<QueryTraderDerivativeOrdersToCancelUpToAmountRequest> | undefined, b: QueryTraderDerivativeOrdersToCancelUpToAmountRequest | PlainMessage<QueryTraderDerivativeOrdersToCancelUpToAmountRequest> | undefined): boolean;
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest
 */
export declare class QueryTraderDerivativeOrdersRequest extends Message<QueryTraderDerivativeOrdersRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * SubaccountID of the trader
     *
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    constructor(data?: PartialMessage<QueryTraderDerivativeOrdersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryTraderDerivativeOrdersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTraderDerivativeOrdersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTraderDerivativeOrdersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTraderDerivativeOrdersRequest;
    static equals(a: QueryTraderDerivativeOrdersRequest | PlainMessage<QueryTraderDerivativeOrdersRequest> | undefined, b: QueryTraderDerivativeOrdersRequest | PlainMessage<QueryTraderDerivativeOrdersRequest> | undefined): boolean;
}
/**
 * QueryAccountAddressSpotOrdersRequest is the request type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersRequest
 */
export declare class QueryAccountAddressDerivativeOrdersRequest extends Message<QueryAccountAddressDerivativeOrdersRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * Account address of the trader
     *
     * @generated from field: string account_address = 2;
     */
    accountAddress: string;
    constructor(data?: PartialMessage<QueryAccountAddressDerivativeOrdersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountAddressDerivativeOrdersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountAddressDerivativeOrdersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountAddressDerivativeOrdersRequest;
    static equals(a: QueryAccountAddressDerivativeOrdersRequest | PlainMessage<QueryAccountAddressDerivativeOrdersRequest> | undefined, b: QueryAccountAddressDerivativeOrdersRequest | PlainMessage<QueryAccountAddressDerivativeOrdersRequest> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TrimmedDerivativeLimitOrder
 */
export declare class TrimmedDerivativeLimitOrder extends Message<TrimmedDerivativeLimitOrder> {
    /**
     * price of the order
     *
     * @generated from field: string price = 1;
     */
    price: string;
    /**
     * quantity of the order
     *
     * @generated from field: string quantity = 2;
     */
    quantity: string;
    /**
     * margin of the order
     *
     * @generated from field: string margin = 3;
     */
    margin: string;
    /**
     * the amount of the quantity remaining fillable
     *
     * @generated from field: string fillable = 4;
     */
    fillable: string;
    /**
     * true if the order is a buy
     *
     * ensure omitempty is not in jsontag
     *
     * @generated from field: bool isBuy = 5;
     */
    isBuy: boolean;
    /**
     * @generated from field: string order_hash = 6;
     */
    orderHash: string;
    constructor(data?: PartialMessage<TrimmedDerivativeLimitOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TrimmedDerivativeLimitOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrimmedDerivativeLimitOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrimmedDerivativeLimitOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrimmedDerivativeLimitOrder;
    static equals(a: TrimmedDerivativeLimitOrder | PlainMessage<TrimmedDerivativeLimitOrder> | undefined, b: TrimmedDerivativeLimitOrder | PlainMessage<TrimmedDerivativeLimitOrder> | undefined): boolean;
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse
 */
export declare class QueryTraderDerivativeOrdersResponse extends Message<QueryTraderDerivativeOrdersResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TrimmedDerivativeLimitOrder orders = 1;
     */
    orders: TrimmedDerivativeLimitOrder[];
    constructor(data?: PartialMessage<QueryTraderDerivativeOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryTraderDerivativeOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTraderDerivativeOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTraderDerivativeOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTraderDerivativeOrdersResponse;
    static equals(a: QueryTraderDerivativeOrdersResponse | PlainMessage<QueryTraderDerivativeOrdersResponse> | undefined, b: QueryTraderDerivativeOrdersResponse | PlainMessage<QueryTraderDerivativeOrdersResponse> | undefined): boolean;
}
/**
 * QueryAccountAddressDerivativeOrdersResponse is the response type for the
 * Query/AccountAddressDerivativeOrders RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersResponse
 */
export declare class QueryAccountAddressDerivativeOrdersResponse extends Message<QueryAccountAddressDerivativeOrdersResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TrimmedDerivativeLimitOrder orders = 1;
     */
    orders: TrimmedDerivativeLimitOrder[];
    constructor(data?: PartialMessage<QueryAccountAddressDerivativeOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryAccountAddressDerivativeOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountAddressDerivativeOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountAddressDerivativeOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountAddressDerivativeOrdersResponse;
    static equals(a: QueryAccountAddressDerivativeOrdersResponse | PlainMessage<QueryAccountAddressDerivativeOrdersResponse> | undefined, b: QueryAccountAddressDerivativeOrdersResponse | PlainMessage<QueryAccountAddressDerivativeOrdersResponse> | undefined): boolean;
}
/**
 * QueryTraderDerivativeOrdersRequest is the request type for the
 * Query/TraderDerivativeOrders RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest
 */
export declare class QueryDerivativeOrdersByHashesRequest extends Message<QueryDerivativeOrdersByHashesRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * SubaccountID of the trader
     *
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    /**
     * the order hashes
     *
     * @generated from field: repeated string order_hashes = 3;
     */
    orderHashes: string[];
    constructor(data?: PartialMessage<QueryDerivativeOrdersByHashesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDerivativeOrdersByHashesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDerivativeOrdersByHashesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDerivativeOrdersByHashesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDerivativeOrdersByHashesRequest;
    static equals(a: QueryDerivativeOrdersByHashesRequest | PlainMessage<QueryDerivativeOrdersByHashesRequest> | undefined, b: QueryDerivativeOrdersByHashesRequest | PlainMessage<QueryDerivativeOrdersByHashesRequest> | undefined): boolean;
}
/**
 * QueryDerivativeOrdersByHashesResponse is the response type for the
 * Query/DerivativeOrdersByHashes RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse
 */
export declare class QueryDerivativeOrdersByHashesResponse extends Message<QueryDerivativeOrdersByHashesResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TrimmedDerivativeLimitOrder orders = 1;
     */
    orders: TrimmedDerivativeLimitOrder[];
    constructor(data?: PartialMessage<QueryDerivativeOrdersByHashesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDerivativeOrdersByHashesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDerivativeOrdersByHashesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDerivativeOrdersByHashesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDerivativeOrdersByHashesResponse;
    static equals(a: QueryDerivativeOrdersByHashesResponse | PlainMessage<QueryDerivativeOrdersByHashesResponse> | undefined, b: QueryDerivativeOrdersByHashesResponse | PlainMessage<QueryDerivativeOrdersByHashesResponse> | undefined): boolean;
}
/**
 * QueryDerivativeMarketsRequest is the request type for the
 * Query/DerivativeMarkets RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDerivativeMarketsRequest
 */
export declare class QueryDerivativeMarketsRequest extends Message<QueryDerivativeMarketsRequest> {
    /**
     * Status of the market, for convenience it is set to string - not enum
     *
     * @generated from field: string status = 1;
     */
    status: string;
    /**
     * Filter by market IDs
     *
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    /**
     * Flag to return the markets mid price and top of the book buy and sell
     * orders.
     *
     * @generated from field: bool with_mid_price_and_tob = 3;
     */
    withMidPriceAndTob: boolean;
    constructor(data?: PartialMessage<QueryDerivativeMarketsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDerivativeMarketsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDerivativeMarketsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDerivativeMarketsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDerivativeMarketsRequest;
    static equals(a: QueryDerivativeMarketsRequest | PlainMessage<QueryDerivativeMarketsRequest> | undefined, b: QueryDerivativeMarketsRequest | PlainMessage<QueryDerivativeMarketsRequest> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.PriceLevel
 */
export declare class PriceLevel extends Message<PriceLevel> {
    /**
     * @generated from field: string price = 1;
     */
    price: string;
    /**
     * quantity
     *
     * @generated from field: string quantity = 2;
     */
    quantity: string;
    constructor(data?: PartialMessage<PriceLevel>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.PriceLevel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriceLevel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriceLevel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriceLevel;
    static equals(a: PriceLevel | PlainMessage<PriceLevel> | undefined, b: PriceLevel | PlainMessage<PriceLevel> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.PerpetualMarketState
 */
export declare class PerpetualMarketState extends Message<PerpetualMarketState> {
    /**
     * @generated from field: injective.exchange.v1beta1.PerpetualMarketInfo market_info = 1;
     */
    marketInfo?: PerpetualMarketInfo;
    /**
     * @generated from field: injective.exchange.v1beta1.PerpetualMarketFunding funding_info = 2;
     */
    fundingInfo?: PerpetualMarketFunding;
    constructor(data?: PartialMessage<PerpetualMarketState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.PerpetualMarketState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PerpetualMarketState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PerpetualMarketState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PerpetualMarketState;
    static equals(a: PerpetualMarketState | PlainMessage<PerpetualMarketState> | undefined, b: PerpetualMarketState | PlainMessage<PerpetualMarketState> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.FullDerivativeMarket
 */
export declare class FullDerivativeMarket extends Message<FullDerivativeMarket> {
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeMarket market = 1;
     */
    market?: DerivativeMarket;
    /**
     * @generated from oneof injective.exchange.v1beta1.FullDerivativeMarket.info
     */
    info: {
        /**
         * @generated from field: injective.exchange.v1beta1.PerpetualMarketState perpetual_info = 2;
         */
        value: PerpetualMarketState;
        case: "perpetualInfo";
    } | {
        /**
         * @generated from field: injective.exchange.v1beta1.ExpiryFuturesMarketInfo futures_info = 3;
         */
        value: ExpiryFuturesMarketInfo;
        case: "futuresInfo";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: string mark_price = 4;
     */
    markPrice: string;
    /**
     * mid_price_and_tob defines the mid price for this market and the best ask
     * and bid orders
     *
     * @generated from field: injective.exchange.v1beta1.MidPriceAndTOB mid_price_and_tob = 5;
     */
    midPriceAndTob?: MidPriceAndTOB;
    constructor(data?: PartialMessage<FullDerivativeMarket>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.FullDerivativeMarket";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FullDerivativeMarket;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FullDerivativeMarket;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FullDerivativeMarket;
    static equals(a: FullDerivativeMarket | PlainMessage<FullDerivativeMarket> | undefined, b: FullDerivativeMarket | PlainMessage<FullDerivativeMarket> | undefined): boolean;
}
/**
 * QueryDerivativeMarketsResponse is the response type for the
 * Query/DerivativeMarkets RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDerivativeMarketsResponse
 */
export declare class QueryDerivativeMarketsResponse extends Message<QueryDerivativeMarketsResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.FullDerivativeMarket markets = 1;
     */
    markets: FullDerivativeMarket[];
    constructor(data?: PartialMessage<QueryDerivativeMarketsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDerivativeMarketsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDerivativeMarketsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDerivativeMarketsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDerivativeMarketsResponse;
    static equals(a: QueryDerivativeMarketsResponse | PlainMessage<QueryDerivativeMarketsResponse> | undefined, b: QueryDerivativeMarketsResponse | PlainMessage<QueryDerivativeMarketsResponse> | undefined): boolean;
}
/**
 * QueryDerivativeMarketRequest is the request type for the
 * Query/DerivativeMarket RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDerivativeMarketRequest
 */
export declare class QueryDerivativeMarketRequest extends Message<QueryDerivativeMarketRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QueryDerivativeMarketRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDerivativeMarketRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDerivativeMarketRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDerivativeMarketRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDerivativeMarketRequest;
    static equals(a: QueryDerivativeMarketRequest | PlainMessage<QueryDerivativeMarketRequest> | undefined, b: QueryDerivativeMarketRequest | PlainMessage<QueryDerivativeMarketRequest> | undefined): boolean;
}
/**
 * QueryDerivativeMarketResponse is the response type for the
 * Query/DerivativeMarket RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDerivativeMarketResponse
 */
export declare class QueryDerivativeMarketResponse extends Message<QueryDerivativeMarketResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.FullDerivativeMarket market = 1;
     */
    market?: FullDerivativeMarket;
    constructor(data?: PartialMessage<QueryDerivativeMarketResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDerivativeMarketResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDerivativeMarketResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDerivativeMarketResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDerivativeMarketResponse;
    static equals(a: QueryDerivativeMarketResponse | PlainMessage<QueryDerivativeMarketResponse> | undefined, b: QueryDerivativeMarketResponse | PlainMessage<QueryDerivativeMarketResponse> | undefined): boolean;
}
/**
 * QueryDerivativeMarketAddressRequest is the request type for the
 * Query/DerivativeMarketAddress RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest
 */
export declare class QueryDerivativeMarketAddressRequest extends Message<QueryDerivativeMarketAddressRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QueryDerivativeMarketAddressRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDerivativeMarketAddressRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDerivativeMarketAddressRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDerivativeMarketAddressRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDerivativeMarketAddressRequest;
    static equals(a: QueryDerivativeMarketAddressRequest | PlainMessage<QueryDerivativeMarketAddressRequest> | undefined, b: QueryDerivativeMarketAddressRequest | PlainMessage<QueryDerivativeMarketAddressRequest> | undefined): boolean;
}
/**
 * QueryDerivativeMarketAddressResponse is the response type for the
 * Query/DerivativeMarketAddress RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse
 */
export declare class QueryDerivativeMarketAddressResponse extends Message<QueryDerivativeMarketAddressResponse> {
    /**
     * address for the market
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * subaccountID for the market
     *
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    constructor(data?: PartialMessage<QueryDerivativeMarketAddressResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryDerivativeMarketAddressResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDerivativeMarketAddressResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDerivativeMarketAddressResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDerivativeMarketAddressResponse;
    static equals(a: QueryDerivativeMarketAddressResponse | PlainMessage<QueryDerivativeMarketAddressResponse> | undefined, b: QueryDerivativeMarketAddressResponse | PlainMessage<QueryDerivativeMarketAddressResponse> | undefined): boolean;
}
/**
 * QuerySubaccountTradeNonceRequest is the request type for the
 * Query/SubaccountTradeNonce RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest
 */
export declare class QuerySubaccountTradeNonceRequest extends Message<QuerySubaccountTradeNonceRequest> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    constructor(data?: PartialMessage<QuerySubaccountTradeNonceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountTradeNonceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountTradeNonceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountTradeNonceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountTradeNonceRequest;
    static equals(a: QuerySubaccountTradeNonceRequest | PlainMessage<QuerySubaccountTradeNonceRequest> | undefined, b: QuerySubaccountTradeNonceRequest | PlainMessage<QuerySubaccountTradeNonceRequest> | undefined): boolean;
}
/**
 * QuerySubaccountPositionsRequest is the request type for the
 * Query/SubaccountPositions RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountPositionsRequest
 */
export declare class QuerySubaccountPositionsRequest extends Message<QuerySubaccountPositionsRequest> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    constructor(data?: PartialMessage<QuerySubaccountPositionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountPositionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountPositionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountPositionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountPositionsRequest;
    static equals(a: QuerySubaccountPositionsRequest | PlainMessage<QuerySubaccountPositionsRequest> | undefined, b: QuerySubaccountPositionsRequest | PlainMessage<QuerySubaccountPositionsRequest> | undefined): boolean;
}
/**
 * QuerySubaccountPositionInMarketRequest is the request type for the
 * Query/SubaccountPositionInMarket RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest
 */
export declare class QuerySubaccountPositionInMarketRequest extends Message<QuerySubaccountPositionInMarketRequest> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    constructor(data?: PartialMessage<QuerySubaccountPositionInMarketRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountPositionInMarketRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountPositionInMarketRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountPositionInMarketRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountPositionInMarketRequest;
    static equals(a: QuerySubaccountPositionInMarketRequest | PlainMessage<QuerySubaccountPositionInMarketRequest> | undefined, b: QuerySubaccountPositionInMarketRequest | PlainMessage<QuerySubaccountPositionInMarketRequest> | undefined): boolean;
}
/**
 * QuerySubaccountEffectivePositionInMarketRequest is the request type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest
 */
export declare class QuerySubaccountEffectivePositionInMarketRequest extends Message<QuerySubaccountEffectivePositionInMarketRequest> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    constructor(data?: PartialMessage<QuerySubaccountEffectivePositionInMarketRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountEffectivePositionInMarketRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountEffectivePositionInMarketRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountEffectivePositionInMarketRequest;
    static equals(a: QuerySubaccountEffectivePositionInMarketRequest | PlainMessage<QuerySubaccountEffectivePositionInMarketRequest> | undefined, b: QuerySubaccountEffectivePositionInMarketRequest | PlainMessage<QuerySubaccountEffectivePositionInMarketRequest> | undefined): boolean;
}
/**
 * QuerySubaccountOrderMetadataRequest is the request type for the
 * Query/SubaccountOrderMetadata RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest
 */
export declare class QuerySubaccountOrderMetadataRequest extends Message<QuerySubaccountOrderMetadataRequest> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    constructor(data?: PartialMessage<QuerySubaccountOrderMetadataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountOrderMetadataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountOrderMetadataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountOrderMetadataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountOrderMetadataRequest;
    static equals(a: QuerySubaccountOrderMetadataRequest | PlainMessage<QuerySubaccountOrderMetadataRequest> | undefined, b: QuerySubaccountOrderMetadataRequest | PlainMessage<QuerySubaccountOrderMetadataRequest> | undefined): boolean;
}
/**
 * QuerySubaccountPositionsResponse is the response type for the
 * Query/SubaccountPositions RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountPositionsResponse
 */
export declare class QuerySubaccountPositionsResponse extends Message<QuerySubaccountPositionsResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativePosition state = 1;
     */
    state: DerivativePosition[];
    constructor(data?: PartialMessage<QuerySubaccountPositionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountPositionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountPositionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountPositionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountPositionsResponse;
    static equals(a: QuerySubaccountPositionsResponse | PlainMessage<QuerySubaccountPositionsResponse> | undefined, b: QuerySubaccountPositionsResponse | PlainMessage<QuerySubaccountPositionsResponse> | undefined): boolean;
}
/**
 * QuerySubaccountPositionInMarketResponse is the response type for the
 * Query/SubaccountPositionInMarket RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse
 */
export declare class QuerySubaccountPositionInMarketResponse extends Message<QuerySubaccountPositionInMarketResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.Position state = 1;
     */
    state?: Position;
    constructor(data?: PartialMessage<QuerySubaccountPositionInMarketResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountPositionInMarketResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountPositionInMarketResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountPositionInMarketResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountPositionInMarketResponse;
    static equals(a: QuerySubaccountPositionInMarketResponse | PlainMessage<QuerySubaccountPositionInMarketResponse> | undefined, b: QuerySubaccountPositionInMarketResponse | PlainMessage<QuerySubaccountPositionInMarketResponse> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EffectivePosition
 */
export declare class EffectivePosition extends Message<EffectivePosition> {
    /**
     * @generated from field: bool is_long = 1;
     */
    isLong: boolean;
    /**
     * @generated from field: string quantity = 2;
     */
    quantity: string;
    /**
     * @generated from field: string entry_price = 3;
     */
    entryPrice: string;
    /**
     * @generated from field: string effective_margin = 4;
     */
    effectiveMargin: string;
    constructor(data?: PartialMessage<EffectivePosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EffectivePosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EffectivePosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EffectivePosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EffectivePosition;
    static equals(a: EffectivePosition | PlainMessage<EffectivePosition> | undefined, b: EffectivePosition | PlainMessage<EffectivePosition> | undefined): boolean;
}
/**
 * QuerySubaccountEffectivePositionInMarketResponse is the response type for the
 * Query/SubaccountEffectivePositionInMarket RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse
 */
export declare class QuerySubaccountEffectivePositionInMarketResponse extends Message<QuerySubaccountEffectivePositionInMarketResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.EffectivePosition state = 1;
     */
    state?: EffectivePosition;
    constructor(data?: PartialMessage<QuerySubaccountEffectivePositionInMarketResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountEffectivePositionInMarketResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountEffectivePositionInMarketResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountEffectivePositionInMarketResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountEffectivePositionInMarketResponse;
    static equals(a: QuerySubaccountEffectivePositionInMarketResponse | PlainMessage<QuerySubaccountEffectivePositionInMarketResponse> | undefined, b: QuerySubaccountEffectivePositionInMarketResponse | PlainMessage<QuerySubaccountEffectivePositionInMarketResponse> | undefined): boolean;
}
/**
 * QueryPerpetualMarketInfoRequest is the request type for the
 * Query/PerpetualMarketInfo RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest
 */
export declare class QueryPerpetualMarketInfoRequest extends Message<QueryPerpetualMarketInfoRequest> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QueryPerpetualMarketInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryPerpetualMarketInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPerpetualMarketInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPerpetualMarketInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPerpetualMarketInfoRequest;
    static equals(a: QueryPerpetualMarketInfoRequest | PlainMessage<QueryPerpetualMarketInfoRequest> | undefined, b: QueryPerpetualMarketInfoRequest | PlainMessage<QueryPerpetualMarketInfoRequest> | undefined): boolean;
}
/**
 * QueryPerpetualMarketInfoResponse is the response type for the
 * Query/PerpetualMarketInfo RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse
 */
export declare class QueryPerpetualMarketInfoResponse extends Message<QueryPerpetualMarketInfoResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.PerpetualMarketInfo info = 1;
     */
    info?: PerpetualMarketInfo;
    constructor(data?: PartialMessage<QueryPerpetualMarketInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryPerpetualMarketInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPerpetualMarketInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPerpetualMarketInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPerpetualMarketInfoResponse;
    static equals(a: QueryPerpetualMarketInfoResponse | PlainMessage<QueryPerpetualMarketInfoResponse> | undefined, b: QueryPerpetualMarketInfoResponse | PlainMessage<QueryPerpetualMarketInfoResponse> | undefined): boolean;
}
/**
 * QueryExpiryFuturesMarketInfoRequest is the request type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest
 */
export declare class QueryExpiryFuturesMarketInfoRequest extends Message<QueryExpiryFuturesMarketInfoRequest> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QueryExpiryFuturesMarketInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryExpiryFuturesMarketInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryExpiryFuturesMarketInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryExpiryFuturesMarketInfoRequest;
    static equals(a: QueryExpiryFuturesMarketInfoRequest | PlainMessage<QueryExpiryFuturesMarketInfoRequest> | undefined, b: QueryExpiryFuturesMarketInfoRequest | PlainMessage<QueryExpiryFuturesMarketInfoRequest> | undefined): boolean;
}
/**
 * QueryExpiryFuturesMarketInfoResponse is the response type for the Query/
 * ExpiryFuturesMarketInfo RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse
 */
export declare class QueryExpiryFuturesMarketInfoResponse extends Message<QueryExpiryFuturesMarketInfoResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.ExpiryFuturesMarketInfo info = 1;
     */
    info?: ExpiryFuturesMarketInfo;
    constructor(data?: PartialMessage<QueryExpiryFuturesMarketInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryExpiryFuturesMarketInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryExpiryFuturesMarketInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryExpiryFuturesMarketInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryExpiryFuturesMarketInfoResponse;
    static equals(a: QueryExpiryFuturesMarketInfoResponse | PlainMessage<QueryExpiryFuturesMarketInfoResponse> | undefined, b: QueryExpiryFuturesMarketInfoResponse | PlainMessage<QueryExpiryFuturesMarketInfoResponse> | undefined): boolean;
}
/**
 * QueryPerpetualMarketFundingRequest is the request type for the
 * Query/PerpetualMarketFunding RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest
 */
export declare class QueryPerpetualMarketFundingRequest extends Message<QueryPerpetualMarketFundingRequest> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QueryPerpetualMarketFundingRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryPerpetualMarketFundingRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPerpetualMarketFundingRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPerpetualMarketFundingRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPerpetualMarketFundingRequest;
    static equals(a: QueryPerpetualMarketFundingRequest | PlainMessage<QueryPerpetualMarketFundingRequest> | undefined, b: QueryPerpetualMarketFundingRequest | PlainMessage<QueryPerpetualMarketFundingRequest> | undefined): boolean;
}
/**
 * QueryPerpetualMarketFundingResponse is the response type for the
 * Query/PerpetualMarketFunding RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse
 */
export declare class QueryPerpetualMarketFundingResponse extends Message<QueryPerpetualMarketFundingResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.PerpetualMarketFunding state = 1;
     */
    state?: PerpetualMarketFunding;
    constructor(data?: PartialMessage<QueryPerpetualMarketFundingResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryPerpetualMarketFundingResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPerpetualMarketFundingResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPerpetualMarketFundingResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPerpetualMarketFundingResponse;
    static equals(a: QueryPerpetualMarketFundingResponse | PlainMessage<QueryPerpetualMarketFundingResponse> | undefined, b: QueryPerpetualMarketFundingResponse | PlainMessage<QueryPerpetualMarketFundingResponse> | undefined): boolean;
}
/**
 * QuerySubaccountOrderMetadataResponse is the response type for the
 * Query/SubaccountOrderMetadata RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse
 */
export declare class QuerySubaccountOrderMetadataResponse extends Message<QuerySubaccountOrderMetadataResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SubaccountOrderbookMetadataWithMarket metadata = 1;
     */
    metadata: SubaccountOrderbookMetadataWithMarket[];
    constructor(data?: PartialMessage<QuerySubaccountOrderMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountOrderMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountOrderMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountOrderMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountOrderMetadataResponse;
    static equals(a: QuerySubaccountOrderMetadataResponse | PlainMessage<QuerySubaccountOrderMetadataResponse> | undefined, b: QuerySubaccountOrderMetadataResponse | PlainMessage<QuerySubaccountOrderMetadataResponse> | undefined): boolean;
}
/**
 * QuerySubaccountTradeNonceResponse is the response type for the
 * Query/SubaccountTradeNonce RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse
 */
export declare class QuerySubaccountTradeNonceResponse extends Message<QuerySubaccountTradeNonceResponse> {
    /**
     * @generated from field: uint32 nonce = 1;
     */
    nonce: number;
    constructor(data?: PartialMessage<QuerySubaccountTradeNonceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QuerySubaccountTradeNonceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySubaccountTradeNonceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySubaccountTradeNonceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySubaccountTradeNonceResponse;
    static equals(a: QuerySubaccountTradeNonceResponse | PlainMessage<QuerySubaccountTradeNonceResponse> | undefined, b: QuerySubaccountTradeNonceResponse | PlainMessage<QuerySubaccountTradeNonceResponse> | undefined): boolean;
}
/**
 * QueryModuleStateRequest is the request type for the Query/ExchangeModuleState
 * RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryModuleStateRequest
 */
export declare class QueryModuleStateRequest extends Message<QueryModuleStateRequest> {
    constructor(data?: PartialMessage<QueryModuleStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryModuleStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static equals(a: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined, b: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined): boolean;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/ExchangeModuleState RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryModuleStateResponse
 */
export declare class QueryModuleStateResponse extends Message<QueryModuleStateResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.GenesisState state = 1;
     */
    state?: GenesisState;
    constructor(data?: PartialMessage<QueryModuleStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryModuleStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static equals(a: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined, b: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined): boolean;
}
/**
 * QueryPositionsRequest is the request type for the Query/Positions RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryPositionsRequest
 */
export declare class QueryPositionsRequest extends Message<QueryPositionsRequest> {
    constructor(data?: PartialMessage<QueryPositionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryPositionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPositionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPositionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPositionsRequest;
    static equals(a: QueryPositionsRequest | PlainMessage<QueryPositionsRequest> | undefined, b: QueryPositionsRequest | PlainMessage<QueryPositionsRequest> | undefined): boolean;
}
/**
 * QueryPositionsResponse is the response type for the Query/Positions RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.QueryPositionsResponse
 */
export declare class QueryPositionsResponse extends Message<QueryPositionsResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativePosition state = 1;
     */
    state: DerivativePosition[];
    constructor(data?: PartialMessage<QueryPositionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryPositionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPositionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPositionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPositionsResponse;
    static equals(a: QueryPositionsResponse | PlainMessage<QueryPositionsResponse> | undefined, b: QueryPositionsResponse | PlainMessage<QueryPositionsResponse> | undefined): boolean;
}
/**
 * QueryTradeRewardPointsRequest is the request type for the
 * Query/TradeRewardPoints RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryTradeRewardPointsRequest
 */
export declare class QueryTradeRewardPointsRequest extends Message<QueryTradeRewardPointsRequest> {
    /**
     * @generated from field: repeated string accounts = 1;
     */
    accounts: string[];
    /**
     * @generated from field: int64 pending_pool_timestamp = 2;
     */
    pendingPoolTimestamp: bigint;
    constructor(data?: PartialMessage<QueryTradeRewardPointsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryTradeRewardPointsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTradeRewardPointsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTradeRewardPointsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTradeRewardPointsRequest;
    static equals(a: QueryTradeRewardPointsRequest | PlainMessage<QueryTradeRewardPointsRequest> | undefined, b: QueryTradeRewardPointsRequest | PlainMessage<QueryTradeRewardPointsRequest> | undefined): boolean;
}
/**
 * QueryTradeRewardPointsResponse is the response type for the
 * Query/TradeRewardPoints RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryTradeRewardPointsResponse
 */
export declare class QueryTradeRewardPointsResponse extends Message<QueryTradeRewardPointsResponse> {
    /**
     * @generated from field: repeated string account_trade_reward_points = 1;
     */
    accountTradeRewardPoints: string[];
    constructor(data?: PartialMessage<QueryTradeRewardPointsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryTradeRewardPointsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTradeRewardPointsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTradeRewardPointsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTradeRewardPointsResponse;
    static equals(a: QueryTradeRewardPointsResponse | PlainMessage<QueryTradeRewardPointsResponse> | undefined, b: QueryTradeRewardPointsResponse | PlainMessage<QueryTradeRewardPointsResponse> | undefined): boolean;
}
/**
 * QueryTradeRewardCampaignRequest is the request type for the
 * Query/TradeRewardCampaign RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryTradeRewardCampaignRequest
 */
export declare class QueryTradeRewardCampaignRequest extends Message<QueryTradeRewardCampaignRequest> {
    constructor(data?: PartialMessage<QueryTradeRewardCampaignRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryTradeRewardCampaignRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTradeRewardCampaignRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTradeRewardCampaignRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTradeRewardCampaignRequest;
    static equals(a: QueryTradeRewardCampaignRequest | PlainMessage<QueryTradeRewardCampaignRequest> | undefined, b: QueryTradeRewardCampaignRequest | PlainMessage<QueryTradeRewardCampaignRequest> | undefined): boolean;
}
/**
 * QueryTradeRewardCampaignResponse is the response type for the
 * Query/TradeRewardCampaign RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryTradeRewardCampaignResponse
 */
export declare class QueryTradeRewardCampaignResponse extends Message<QueryTradeRewardCampaignResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.TradingRewardCampaignInfo trading_reward_campaign_info = 1;
     */
    tradingRewardCampaignInfo?: TradingRewardCampaignInfo;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.CampaignRewardPool trading_reward_pool_campaign_schedule = 2;
     */
    tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    /**
     * @generated from field: string total_trade_reward_points = 3;
     */
    totalTradeRewardPoints: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.CampaignRewardPool pending_trading_reward_pool_campaign_schedule = 4;
     */
    pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    /**
     * @generated from field: repeated string pending_total_trade_reward_points = 5;
     */
    pendingTotalTradeRewardPoints: string[];
    constructor(data?: PartialMessage<QueryTradeRewardCampaignResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryTradeRewardCampaignResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTradeRewardCampaignResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTradeRewardCampaignResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTradeRewardCampaignResponse;
    static equals(a: QueryTradeRewardCampaignResponse | PlainMessage<QueryTradeRewardCampaignResponse> | undefined, b: QueryTradeRewardCampaignResponse | PlainMessage<QueryTradeRewardCampaignResponse> | undefined): boolean;
}
/**
 * QueryIsRegisteredDMMRequest is the request type for the Query/IsRegisteredDMM
 * RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest
 */
export declare class QueryIsOptedOutOfRewardsRequest extends Message<QueryIsOptedOutOfRewardsRequest> {
    /**
     * @generated from field: string account = 1;
     */
    account: string;
    constructor(data?: PartialMessage<QueryIsOptedOutOfRewardsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryIsOptedOutOfRewardsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIsOptedOutOfRewardsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIsOptedOutOfRewardsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIsOptedOutOfRewardsRequest;
    static equals(a: QueryIsOptedOutOfRewardsRequest | PlainMessage<QueryIsOptedOutOfRewardsRequest> | undefined, b: QueryIsOptedOutOfRewardsRequest | PlainMessage<QueryIsOptedOutOfRewardsRequest> | undefined): boolean;
}
/**
 * QueryIsRegisteredDMMResponse is the response type for the
 * Query/IsRegisteredDMM RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse
 */
export declare class QueryIsOptedOutOfRewardsResponse extends Message<QueryIsOptedOutOfRewardsResponse> {
    /**
     * @generated from field: bool is_opted_out = 1;
     */
    isOptedOut: boolean;
    constructor(data?: PartialMessage<QueryIsOptedOutOfRewardsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryIsOptedOutOfRewardsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIsOptedOutOfRewardsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIsOptedOutOfRewardsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIsOptedOutOfRewardsResponse;
    static equals(a: QueryIsOptedOutOfRewardsResponse | PlainMessage<QueryIsOptedOutOfRewardsResponse> | undefined, b: QueryIsOptedOutOfRewardsResponse | PlainMessage<QueryIsOptedOutOfRewardsResponse> | undefined): boolean;
}
/**
 * QueryRegisteredDMMsRequest is the request type for the Query/RegisteredDMMs
 * RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest
 */
export declare class QueryOptedOutOfRewardsAccountsRequest extends Message<QueryOptedOutOfRewardsAccountsRequest> {
    constructor(data?: PartialMessage<QueryOptedOutOfRewardsAccountsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOptedOutOfRewardsAccountsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOptedOutOfRewardsAccountsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOptedOutOfRewardsAccountsRequest;
    static equals(a: QueryOptedOutOfRewardsAccountsRequest | PlainMessage<QueryOptedOutOfRewardsAccountsRequest> | undefined, b: QueryOptedOutOfRewardsAccountsRequest | PlainMessage<QueryOptedOutOfRewardsAccountsRequest> | undefined): boolean;
}
/**
 * QueryRegisteredDMMsResponse is the response type for the Query/RegisteredDMMs
 * RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse
 */
export declare class QueryOptedOutOfRewardsAccountsResponse extends Message<QueryOptedOutOfRewardsAccountsResponse> {
    /**
     * @generated from field: repeated string accounts = 1;
     */
    accounts: string[];
    constructor(data?: PartialMessage<QueryOptedOutOfRewardsAccountsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryOptedOutOfRewardsAccountsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryOptedOutOfRewardsAccountsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryOptedOutOfRewardsAccountsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryOptedOutOfRewardsAccountsResponse;
    static equals(a: QueryOptedOutOfRewardsAccountsResponse | PlainMessage<QueryOptedOutOfRewardsAccountsResponse> | undefined, b: QueryOptedOutOfRewardsAccountsResponse | PlainMessage<QueryOptedOutOfRewardsAccountsResponse> | undefined): boolean;
}
/**
 * QueryFeeDiscountAccountInfoRequest is the request type for the
 * Query/FeeDiscountAccountInfo RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest
 */
export declare class QueryFeeDiscountAccountInfoRequest extends Message<QueryFeeDiscountAccountInfoRequest> {
    /**
     * @generated from field: string account = 1;
     */
    account: string;
    constructor(data?: PartialMessage<QueryFeeDiscountAccountInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryFeeDiscountAccountInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeDiscountAccountInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeDiscountAccountInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeDiscountAccountInfoRequest;
    static equals(a: QueryFeeDiscountAccountInfoRequest | PlainMessage<QueryFeeDiscountAccountInfoRequest> | undefined, b: QueryFeeDiscountAccountInfoRequest | PlainMessage<QueryFeeDiscountAccountInfoRequest> | undefined): boolean;
}
/**
 * QueryFeeDiscountAccountInfoResponse is the response type for the
 * Query/FeeDiscountAccountInfo RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse
 */
export declare class QueryFeeDiscountAccountInfoResponse extends Message<QueryFeeDiscountAccountInfoResponse> {
    /**
     * @generated from field: uint64 tier_level = 1;
     */
    tierLevel: bigint;
    /**
     * @generated from field: injective.exchange.v1beta1.FeeDiscountTierInfo account_info = 2;
     */
    accountInfo?: FeeDiscountTierInfo;
    /**
     * @generated from field: injective.exchange.v1beta1.FeeDiscountTierTTL account_ttl = 3;
     */
    accountTtl?: FeeDiscountTierTTL;
    constructor(data?: PartialMessage<QueryFeeDiscountAccountInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryFeeDiscountAccountInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeDiscountAccountInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeDiscountAccountInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeDiscountAccountInfoResponse;
    static equals(a: QueryFeeDiscountAccountInfoResponse | PlainMessage<QueryFeeDiscountAccountInfoResponse> | undefined, b: QueryFeeDiscountAccountInfoResponse | PlainMessage<QueryFeeDiscountAccountInfoResponse> | undefined): boolean;
}
/**
 * QueryFeeDiscountScheduleRequest is the request type for the
 * Query/FeeDiscountSchedule RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest
 */
export declare class QueryFeeDiscountScheduleRequest extends Message<QueryFeeDiscountScheduleRequest> {
    constructor(data?: PartialMessage<QueryFeeDiscountScheduleRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryFeeDiscountScheduleRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeDiscountScheduleRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeDiscountScheduleRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeDiscountScheduleRequest;
    static equals(a: QueryFeeDiscountScheduleRequest | PlainMessage<QueryFeeDiscountScheduleRequest> | undefined, b: QueryFeeDiscountScheduleRequest | PlainMessage<QueryFeeDiscountScheduleRequest> | undefined): boolean;
}
/**
 * QueryFeeDiscountScheduleResponse is the response type for the
 * Query/FeeDiscountSchedule RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse
 */
export declare class QueryFeeDiscountScheduleResponse extends Message<QueryFeeDiscountScheduleResponse> {
    /**
     * @generated from field: injective.exchange.v1beta1.FeeDiscountSchedule fee_discount_schedule = 1;
     */
    feeDiscountSchedule?: FeeDiscountSchedule;
    constructor(data?: PartialMessage<QueryFeeDiscountScheduleResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryFeeDiscountScheduleResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeDiscountScheduleResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeDiscountScheduleResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeDiscountScheduleResponse;
    static equals(a: QueryFeeDiscountScheduleResponse | PlainMessage<QueryFeeDiscountScheduleResponse> | undefined, b: QueryFeeDiscountScheduleResponse | PlainMessage<QueryFeeDiscountScheduleResponse> | undefined): boolean;
}
/**
 * QueryBalanceMismatchesRequest is the request type for the
 * Query/QueryBalanceMismatches RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryBalanceMismatchesRequest
 */
export declare class QueryBalanceMismatchesRequest extends Message<QueryBalanceMismatchesRequest> {
    /**
     * @generated from field: int64 dust_factor = 1;
     */
    dustFactor: bigint;
    constructor(data?: PartialMessage<QueryBalanceMismatchesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryBalanceMismatchesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBalanceMismatchesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBalanceMismatchesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBalanceMismatchesRequest;
    static equals(a: QueryBalanceMismatchesRequest | PlainMessage<QueryBalanceMismatchesRequest> | undefined, b: QueryBalanceMismatchesRequest | PlainMessage<QueryBalanceMismatchesRequest> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.BalanceMismatch
 */
export declare class BalanceMismatch extends Message<BalanceMismatch> {
    /**
     * @generated from field: string subaccountId = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    /**
     * @generated from field: string available = 3;
     */
    available: string;
    /**
     * @generated from field: string total = 4;
     */
    total: string;
    /**
     * @generated from field: string balance_hold = 5;
     */
    balanceHold: string;
    /**
     * @generated from field: string expected_total = 6;
     */
    expectedTotal: string;
    /**
     * @generated from field: string difference = 7;
     */
    difference: string;
    constructor(data?: PartialMessage<BalanceMismatch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.BalanceMismatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BalanceMismatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BalanceMismatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BalanceMismatch;
    static equals(a: BalanceMismatch | PlainMessage<BalanceMismatch> | undefined, b: BalanceMismatch | PlainMessage<BalanceMismatch> | undefined): boolean;
}
/**
 * QueryBalanceMismatchesResponse is the response type for the
 * Query/QueryBalanceMismatches RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryBalanceMismatchesResponse
 */
export declare class QueryBalanceMismatchesResponse extends Message<QueryBalanceMismatchesResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.BalanceMismatch balance_mismatches = 1;
     */
    balanceMismatches: BalanceMismatch[];
    constructor(data?: PartialMessage<QueryBalanceMismatchesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryBalanceMismatchesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBalanceMismatchesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBalanceMismatchesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBalanceMismatchesResponse;
    static equals(a: QueryBalanceMismatchesResponse | PlainMessage<QueryBalanceMismatchesResponse> | undefined, b: QueryBalanceMismatchesResponse | PlainMessage<QueryBalanceMismatchesResponse> | undefined): boolean;
}
/**
 * QueryBalanceWithBalanceHoldsRequest is the request type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest
 */
export declare class QueryBalanceWithBalanceHoldsRequest extends Message<QueryBalanceWithBalanceHoldsRequest> {
    constructor(data?: PartialMessage<QueryBalanceWithBalanceHoldsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBalanceWithBalanceHoldsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBalanceWithBalanceHoldsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBalanceWithBalanceHoldsRequest;
    static equals(a: QueryBalanceWithBalanceHoldsRequest | PlainMessage<QueryBalanceWithBalanceHoldsRequest> | undefined, b: QueryBalanceWithBalanceHoldsRequest | PlainMessage<QueryBalanceWithBalanceHoldsRequest> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.BalanceWithMarginHold
 */
export declare class BalanceWithMarginHold extends Message<BalanceWithMarginHold> {
    /**
     * @generated from field: string subaccountId = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    /**
     * @generated from field: string available = 3;
     */
    available: string;
    /**
     * @generated from field: string total = 4;
     */
    total: string;
    /**
     * @generated from field: string balance_hold = 5;
     */
    balanceHold: string;
    constructor(data?: PartialMessage<BalanceWithMarginHold>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.BalanceWithMarginHold";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BalanceWithMarginHold;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BalanceWithMarginHold;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BalanceWithMarginHold;
    static equals(a: BalanceWithMarginHold | PlainMessage<BalanceWithMarginHold> | undefined, b: BalanceWithMarginHold | PlainMessage<BalanceWithMarginHold> | undefined): boolean;
}
/**
 * QueryBalanceWithBalanceHoldsResponse is the response type for the
 * Query/QueryBalanceWithBalanceHolds RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse
 */
export declare class QueryBalanceWithBalanceHoldsResponse extends Message<QueryBalanceWithBalanceHoldsResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.BalanceWithMarginHold balance_with_balance_holds = 1;
     */
    balanceWithBalanceHolds: BalanceWithMarginHold[];
    constructor(data?: PartialMessage<QueryBalanceWithBalanceHoldsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryBalanceWithBalanceHoldsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBalanceWithBalanceHoldsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBalanceWithBalanceHoldsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBalanceWithBalanceHoldsResponse;
    static equals(a: QueryBalanceWithBalanceHoldsResponse | PlainMessage<QueryBalanceWithBalanceHoldsResponse> | undefined, b: QueryBalanceWithBalanceHoldsResponse | PlainMessage<QueryBalanceWithBalanceHoldsResponse> | undefined): boolean;
}
/**
 * QueryFeeDiscountTierStatisticsRequest is the request type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest
 */
export declare class QueryFeeDiscountTierStatisticsRequest extends Message<QueryFeeDiscountTierStatisticsRequest> {
    constructor(data?: PartialMessage<QueryFeeDiscountTierStatisticsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeDiscountTierStatisticsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeDiscountTierStatisticsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeDiscountTierStatisticsRequest;
    static equals(a: QueryFeeDiscountTierStatisticsRequest | PlainMessage<QueryFeeDiscountTierStatisticsRequest> | undefined, b: QueryFeeDiscountTierStatisticsRequest | PlainMessage<QueryFeeDiscountTierStatisticsRequest> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TierStatistic
 */
export declare class TierStatistic extends Message<TierStatistic> {
    /**
     * @generated from field: uint64 tier = 1;
     */
    tier: bigint;
    /**
     * @generated from field: uint64 count = 2;
     */
    count: bigint;
    constructor(data?: PartialMessage<TierStatistic>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TierStatistic";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TierStatistic;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TierStatistic;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TierStatistic;
    static equals(a: TierStatistic | PlainMessage<TierStatistic> | undefined, b: TierStatistic | PlainMessage<TierStatistic> | undefined): boolean;
}
/**
 * QueryFeeDiscountTierStatisticsResponse is the response type for the
 * Query/QueryFeeDiscountTierStatistics RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse
 */
export declare class QueryFeeDiscountTierStatisticsResponse extends Message<QueryFeeDiscountTierStatisticsResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TierStatistic statistics = 1;
     */
    statistics: TierStatistic[];
    constructor(data?: PartialMessage<QueryFeeDiscountTierStatisticsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryFeeDiscountTierStatisticsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeDiscountTierStatisticsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeDiscountTierStatisticsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeDiscountTierStatisticsResponse;
    static equals(a: QueryFeeDiscountTierStatisticsResponse | PlainMessage<QueryFeeDiscountTierStatisticsResponse> | undefined, b: QueryFeeDiscountTierStatisticsResponse | PlainMessage<QueryFeeDiscountTierStatisticsResponse> | undefined): boolean;
}
/**
 * MitoVaultInfosRequest is the request type for the Query/MitoVaultInfos RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.MitoVaultInfosRequest
 */
export declare class MitoVaultInfosRequest extends Message<MitoVaultInfosRequest> {
    constructor(data?: PartialMessage<MitoVaultInfosRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MitoVaultInfosRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MitoVaultInfosRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MitoVaultInfosRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MitoVaultInfosRequest;
    static equals(a: MitoVaultInfosRequest | PlainMessage<MitoVaultInfosRequest> | undefined, b: MitoVaultInfosRequest | PlainMessage<MitoVaultInfosRequest> | undefined): boolean;
}
/**
 * MitoVaultInfosResponse is the response type for the Query/MitoVaultInfos RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.MitoVaultInfosResponse
 */
export declare class MitoVaultInfosResponse extends Message<MitoVaultInfosResponse> {
    /**
     * @generated from field: repeated string master_addresses = 1;
     */
    masterAddresses: string[];
    /**
     * @generated from field: repeated string derivative_addresses = 2;
     */
    derivativeAddresses: string[];
    /**
     * @generated from field: repeated string spot_addresses = 3;
     */
    spotAddresses: string[];
    /**
     * @generated from field: repeated string cw20_addresses = 4;
     */
    cw20Addresses: string[];
    constructor(data?: PartialMessage<MitoVaultInfosResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MitoVaultInfosResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MitoVaultInfosResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MitoVaultInfosResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MitoVaultInfosResponse;
    static equals(a: MitoVaultInfosResponse | PlainMessage<MitoVaultInfosResponse> | undefined, b: MitoVaultInfosResponse | PlainMessage<MitoVaultInfosResponse> | undefined): boolean;
}
/**
 * QueryMarketIDFromVaultRequest is the request type for the
 * Query/QueryMarketIDFromVault RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryMarketIDFromVaultRequest
 */
export declare class QueryMarketIDFromVaultRequest extends Message<QueryMarketIDFromVaultRequest> {
    /**
     * @generated from field: string vault_address = 1;
     */
    vaultAddress: string;
    constructor(data?: PartialMessage<QueryMarketIDFromVaultRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryMarketIDFromVaultRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMarketIDFromVaultRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMarketIDFromVaultRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMarketIDFromVaultRequest;
    static equals(a: QueryMarketIDFromVaultRequest | PlainMessage<QueryMarketIDFromVaultRequest> | undefined, b: QueryMarketIDFromVaultRequest | PlainMessage<QueryMarketIDFromVaultRequest> | undefined): boolean;
}
/**
 * QueryMarketIDFromVaultResponse is the response type for the
 * Query/QueryMarketIDFromVault RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryMarketIDFromVaultResponse
 */
export declare class QueryMarketIDFromVaultResponse extends Message<QueryMarketIDFromVaultResponse> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QueryMarketIDFromVaultResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryMarketIDFromVaultResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMarketIDFromVaultResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMarketIDFromVaultResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMarketIDFromVaultResponse;
    static equals(a: QueryMarketIDFromVaultResponse | PlainMessage<QueryMarketIDFromVaultResponse> | undefined, b: QueryMarketIDFromVaultResponse | PlainMessage<QueryMarketIDFromVaultResponse> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest
 */
export declare class QueryHistoricalTradeRecordsRequest extends Message<QueryHistoricalTradeRecordsRequest> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QueryHistoricalTradeRecordsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryHistoricalTradeRecordsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryHistoricalTradeRecordsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryHistoricalTradeRecordsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryHistoricalTradeRecordsRequest;
    static equals(a: QueryHistoricalTradeRecordsRequest | PlainMessage<QueryHistoricalTradeRecordsRequest> | undefined, b: QueryHistoricalTradeRecordsRequest | PlainMessage<QueryHistoricalTradeRecordsRequest> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse
 */
export declare class QueryHistoricalTradeRecordsResponse extends Message<QueryHistoricalTradeRecordsResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TradeRecords trade_records = 1;
     */
    tradeRecords: TradeRecords[];
    constructor(data?: PartialMessage<QueryHistoricalTradeRecordsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryHistoricalTradeRecordsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryHistoricalTradeRecordsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryHistoricalTradeRecordsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryHistoricalTradeRecordsResponse;
    static equals(a: QueryHistoricalTradeRecordsResponse | PlainMessage<QueryHistoricalTradeRecordsResponse> | undefined, b: QueryHistoricalTradeRecordsResponse | PlainMessage<QueryHistoricalTradeRecordsResponse> | undefined): boolean;
}
/**
 * TradeHistoryOptions are the optional params for Query/MarketVolatility RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.TradeHistoryOptions
 */
export declare class TradeHistoryOptions extends Message<TradeHistoryOptions> {
    /**
     * TradeGroupingSec of 0 means use the chain's default grouping
     *
     * @generated from field: uint64 trade_grouping_sec = 1;
     */
    tradeGroupingSec: bigint;
    /**
     * MaxAge restricts the trade records oldest age in seconds from the current
     * block time to consider. A value of 0 means use all the records present on
     * the chain.
     *
     * @generated from field: uint64 max_age = 2;
     */
    maxAge: bigint;
    /**
     * If IncludeRawHistory is true, the raw underlying data used for the
     * computation is included in the response
     *
     * @generated from field: bool include_raw_history = 4;
     */
    includeRawHistory: boolean;
    /**
     * If IncludeMetadata is true, metadata on the computation is included in the
     * response
     *
     * @generated from field: bool include_metadata = 5;
     */
    includeMetadata: boolean;
    constructor(data?: PartialMessage<TradeHistoryOptions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TradeHistoryOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradeHistoryOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradeHistoryOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradeHistoryOptions;
    static equals(a: TradeHistoryOptions | PlainMessage<TradeHistoryOptions> | undefined, b: TradeHistoryOptions | PlainMessage<TradeHistoryOptions> | undefined): boolean;
}
/**
 * QueryMarketVolatilityRequest are the request params for the
 * Query/MarketVolatility RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryMarketVolatilityRequest
 */
export declare class QueryMarketVolatilityRequest extends Message<QueryMarketVolatilityRequest> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.TradeHistoryOptions trade_history_options = 2;
     */
    tradeHistoryOptions?: TradeHistoryOptions;
    constructor(data?: PartialMessage<QueryMarketVolatilityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryMarketVolatilityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMarketVolatilityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMarketVolatilityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMarketVolatilityRequest;
    static equals(a: QueryMarketVolatilityRequest | PlainMessage<QueryMarketVolatilityRequest> | undefined, b: QueryMarketVolatilityRequest | PlainMessage<QueryMarketVolatilityRequest> | undefined): boolean;
}
/**
 * QueryMarketVolatilityResponse is the response type for the
 * Query/MarketVolatility RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryMarketVolatilityResponse
 */
export declare class QueryMarketVolatilityResponse extends Message<QueryMarketVolatilityResponse> {
    /**
     * @generated from field: string volatility = 1;
     */
    volatility: string;
    /**
     * @generated from field: injective.oracle.v1beta1.MetadataStatistics history_metadata = 2;
     */
    historyMetadata?: MetadataStatistics;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TradeRecord raw_history = 3;
     */
    rawHistory: TradeRecord[];
    constructor(data?: PartialMessage<QueryMarketVolatilityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryMarketVolatilityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMarketVolatilityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMarketVolatilityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMarketVolatilityResponse;
    static equals(a: QueryMarketVolatilityResponse | PlainMessage<QueryMarketVolatilityResponse> | undefined, b: QueryMarketVolatilityResponse | PlainMessage<QueryMarketVolatilityResponse> | undefined): boolean;
}
/**
 * QuerBinaryMarketsRequest is the request type for the Query/BinaryMarkets RPC
 * method.
 *
 * @generated from message injective.exchange.v1beta1.QueryBinaryMarketsRequest
 */
export declare class QueryBinaryMarketsRequest extends Message<QueryBinaryMarketsRequest> {
    /**
     * Status of the market, for convenience it is set to string - not enum
     *
     * @generated from field: string status = 1;
     */
    status: string;
    constructor(data?: PartialMessage<QueryBinaryMarketsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryBinaryMarketsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBinaryMarketsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBinaryMarketsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBinaryMarketsRequest;
    static equals(a: QueryBinaryMarketsRequest | PlainMessage<QueryBinaryMarketsRequest> | undefined, b: QueryBinaryMarketsRequest | PlainMessage<QueryBinaryMarketsRequest> | undefined): boolean;
}
/**
 * QueryBinaryMarketsResponse is the response type for the Query/BinaryMarkets
 * RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryBinaryMarketsResponse
 */
export declare class QueryBinaryMarketsResponse extends Message<QueryBinaryMarketsResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.BinaryOptionsMarket markets = 1;
     */
    markets: BinaryOptionsMarket[];
    constructor(data?: PartialMessage<QueryBinaryMarketsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryBinaryMarketsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBinaryMarketsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBinaryMarketsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBinaryMarketsResponse;
    static equals(a: QueryBinaryMarketsResponse | PlainMessage<QueryBinaryMarketsResponse> | undefined, b: QueryBinaryMarketsResponse | PlainMessage<QueryBinaryMarketsResponse> | undefined): boolean;
}
/**
 * QueryConditionalOrdersRequest is the request type for the
 * Query/ConditionalOrders RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest
 */
export declare class QueryTraderDerivativeConditionalOrdersRequest extends Message<QueryTraderDerivativeConditionalOrdersRequest> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    constructor(data?: PartialMessage<QueryTraderDerivativeConditionalOrdersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTraderDerivativeConditionalOrdersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTraderDerivativeConditionalOrdersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTraderDerivativeConditionalOrdersRequest;
    static equals(a: QueryTraderDerivativeConditionalOrdersRequest | PlainMessage<QueryTraderDerivativeConditionalOrdersRequest> | undefined, b: QueryTraderDerivativeConditionalOrdersRequest | PlainMessage<QueryTraderDerivativeConditionalOrdersRequest> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder
 */
export declare class TrimmedDerivativeConditionalOrder extends Message<TrimmedDerivativeConditionalOrder> {
    /**
     * price of the order
     *
     * @generated from field: string price = 1;
     */
    price: string;
    /**
     * quantity of the order
     *
     * @generated from field: string quantity = 2;
     */
    quantity: string;
    /**
     * margin of the order
     *
     * @generated from field: string margin = 3;
     */
    margin: string;
    /**
     * price to trigger the order
     *
     * @generated from field: string triggerPrice = 4;
     */
    triggerPrice: string;
    /**
     * true if the order is a buy
     *
     * ensure omitempty is not in jsontag
     *
     * @generated from field: bool isBuy = 5;
     */
    isBuy: boolean;
    /**
     * @generated from field: bool isLimit = 6;
     */
    isLimit: boolean;
    /**
     * @generated from field: string order_hash = 7;
     */
    orderHash: string;
    constructor(data?: PartialMessage<TrimmedDerivativeConditionalOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrimmedDerivativeConditionalOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrimmedDerivativeConditionalOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrimmedDerivativeConditionalOrder;
    static equals(a: TrimmedDerivativeConditionalOrder | PlainMessage<TrimmedDerivativeConditionalOrder> | undefined, b: TrimmedDerivativeConditionalOrder | PlainMessage<TrimmedDerivativeConditionalOrder> | undefined): boolean;
}
/**
 * QueryTraderDerivativeOrdersResponse is the response type for the
 * Query/TraderDerivativeOrders RPC method.
 *
 * @generated from message injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse
 */
export declare class QueryTraderDerivativeConditionalOrdersResponse extends Message<QueryTraderDerivativeConditionalOrdersResponse> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TrimmedDerivativeConditionalOrder orders = 1;
     */
    orders: TrimmedDerivativeConditionalOrder[];
    constructor(data?: PartialMessage<QueryTraderDerivativeConditionalOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryTraderDerivativeConditionalOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTraderDerivativeConditionalOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTraderDerivativeConditionalOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTraderDerivativeConditionalOrdersResponse;
    static equals(a: QueryTraderDerivativeConditionalOrdersResponse | PlainMessage<QueryTraderDerivativeConditionalOrdersResponse> | undefined, b: QueryTraderDerivativeConditionalOrdersResponse | PlainMessage<QueryTraderDerivativeConditionalOrdersResponse> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierRequest
 */
export declare class QueryMarketAtomicExecutionFeeMultiplierRequest extends Message<QueryMarketAtomicExecutionFeeMultiplierRequest> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QueryMarketAtomicExecutionFeeMultiplierRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMarketAtomicExecutionFeeMultiplierRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMarketAtomicExecutionFeeMultiplierRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMarketAtomicExecutionFeeMultiplierRequest;
    static equals(a: QueryMarketAtomicExecutionFeeMultiplierRequest | PlainMessage<QueryMarketAtomicExecutionFeeMultiplierRequest> | undefined, b: QueryMarketAtomicExecutionFeeMultiplierRequest | PlainMessage<QueryMarketAtomicExecutionFeeMultiplierRequest> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierResponse
 */
export declare class QueryMarketAtomicExecutionFeeMultiplierResponse extends Message<QueryMarketAtomicExecutionFeeMultiplierResponse> {
    /**
     * @generated from field: string multiplier = 1;
     */
    multiplier: string;
    constructor(data?: PartialMessage<QueryMarketAtomicExecutionFeeMultiplierResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.QueryMarketAtomicExecutionFeeMultiplierResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMarketAtomicExecutionFeeMultiplierResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMarketAtomicExecutionFeeMultiplierResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMarketAtomicExecutionFeeMultiplierResponse;
    static equals(a: QueryMarketAtomicExecutionFeeMultiplierResponse | PlainMessage<QueryMarketAtomicExecutionFeeMultiplierResponse> | undefined, b: QueryMarketAtomicExecutionFeeMultiplierResponse | PlainMessage<QueryMarketAtomicExecutionFeeMultiplierResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map