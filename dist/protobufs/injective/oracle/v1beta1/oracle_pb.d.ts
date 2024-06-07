import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from enum injective.oracle.v1beta1.OracleType
 */
export declare enum OracleType {
    /**
     * @generated from enum value: Unspecified = 0;
     */
    Unspecified = 0,
    /**
     * @generated from enum value: Band = 1;
     */
    Band = 1,
    /**
     * @generated from enum value: PriceFeed = 2;
     */
    PriceFeed = 2,
    /**
     * @generated from enum value: Coinbase = 3;
     */
    Coinbase = 3,
    /**
     * @generated from enum value: Chainlink = 4;
     */
    Chainlink = 4,
    /**
     * @generated from enum value: Razor = 5;
     */
    Razor = 5,
    /**
     * @generated from enum value: Dia = 6;
     */
    Dia = 6,
    /**
     * @generated from enum value: API3 = 7;
     */
    API3 = 7,
    /**
     * @generated from enum value: Uma = 8;
     */
    Uma = 8,
    /**
     * @generated from enum value: Pyth = 9;
     */
    Pyth = 9,
    /**
     * @generated from enum value: BandIBC = 10;
     */
    BandIBC = 10,
    /**
     * @generated from enum value: Provider = 11;
     */
    Provider = 11
}
/**
 * @generated from message injective.oracle.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * @generated from field: string pyth_contract = 1;
     */
    pythContract: string;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.OracleInfo
 */
export declare class OracleInfo extends Message<OracleInfo> {
    /**
     * @generated from field: string symbol = 1;
     */
    symbol: string;
    /**
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 2;
     */
    oracleType: OracleType;
    constructor(data?: PartialMessage<OracleInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.OracleInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OracleInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OracleInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OracleInfo;
    static equals(a: OracleInfo | PlainMessage<OracleInfo> | undefined, b: OracleInfo | PlainMessage<OracleInfo> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.ChainlinkPriceState
 */
export declare class ChainlinkPriceState extends Message<ChainlinkPriceState> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    /**
     * @generated from field: string answer = 2;
     */
    answer: string;
    /**
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * @generated from field: injective.oracle.v1beta1.PriceState price_state = 4;
     */
    priceState?: PriceState;
    constructor(data?: PartialMessage<ChainlinkPriceState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.ChainlinkPriceState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainlinkPriceState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainlinkPriceState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainlinkPriceState;
    static equals(a: ChainlinkPriceState | PlainMessage<ChainlinkPriceState> | undefined, b: ChainlinkPriceState | PlainMessage<ChainlinkPriceState> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.BandPriceState
 */
export declare class BandPriceState extends Message<BandPriceState> {
    /**
     * @generated from field: string symbol = 1;
     */
    symbol: string;
    /**
     * @generated from field: string rate = 2;
     */
    rate: string;
    /**
     * @generated from field: uint64 resolve_time = 3;
     */
    resolveTime: bigint;
    /**
     * @generated from field: uint64 request_ID = 4;
     */
    requestID: bigint;
    /**
     * @generated from field: injective.oracle.v1beta1.PriceState price_state = 5;
     */
    priceState?: PriceState;
    constructor(data?: PartialMessage<BandPriceState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.BandPriceState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BandPriceState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BandPriceState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BandPriceState;
    static equals(a: BandPriceState | PlainMessage<BandPriceState> | undefined, b: BandPriceState | PlainMessage<BandPriceState> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.PriceFeedState
 */
export declare class PriceFeedState extends Message<PriceFeedState> {
    /**
     * @generated from field: string base = 1;
     */
    base: string;
    /**
     * @generated from field: string quote = 2;
     */
    quote: string;
    /**
     * @generated from field: injective.oracle.v1beta1.PriceState price_state = 3;
     */
    priceState?: PriceState;
    /**
     * @generated from field: repeated string relayers = 4;
     */
    relayers: string[];
    constructor(data?: PartialMessage<PriceFeedState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.PriceFeedState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriceFeedState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriceFeedState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriceFeedState;
    static equals(a: PriceFeedState | PlainMessage<PriceFeedState> | undefined, b: PriceFeedState | PlainMessage<PriceFeedState> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.ProviderInfo
 */
export declare class ProviderInfo extends Message<ProviderInfo> {
    /**
     * @generated from field: string provider = 1;
     */
    provider: string;
    /**
     * @generated from field: repeated string relayers = 2;
     */
    relayers: string[];
    constructor(data?: PartialMessage<ProviderInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.ProviderInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProviderInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProviderInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProviderInfo;
    static equals(a: ProviderInfo | PlainMessage<ProviderInfo> | undefined, b: ProviderInfo | PlainMessage<ProviderInfo> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.ProviderState
 */
export declare class ProviderState extends Message<ProviderState> {
    /**
     * @generated from field: injective.oracle.v1beta1.ProviderInfo provider_info = 1;
     */
    providerInfo?: ProviderInfo;
    /**
     * @generated from field: repeated injective.oracle.v1beta1.ProviderPriceState provider_price_states = 2;
     */
    providerPriceStates: ProviderPriceState[];
    constructor(data?: PartialMessage<ProviderState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.ProviderState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProviderState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProviderState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProviderState;
    static equals(a: ProviderState | PlainMessage<ProviderState> | undefined, b: ProviderState | PlainMessage<ProviderState> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.ProviderPriceState
 */
export declare class ProviderPriceState extends Message<ProviderPriceState> {
    /**
     * @generated from field: string symbol = 1;
     */
    symbol: string;
    /**
     * @generated from field: injective.oracle.v1beta1.PriceState state = 2;
     */
    state?: PriceState;
    constructor(data?: PartialMessage<ProviderPriceState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.ProviderPriceState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProviderPriceState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProviderPriceState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProviderPriceState;
    static equals(a: ProviderPriceState | PlainMessage<ProviderPriceState> | undefined, b: ProviderPriceState | PlainMessage<ProviderPriceState> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.PriceFeedInfo
 */
export declare class PriceFeedInfo extends Message<PriceFeedInfo> {
    /**
     * @generated from field: string base = 1;
     */
    base: string;
    /**
     * @generated from field: string quote = 2;
     */
    quote: string;
    constructor(data?: PartialMessage<PriceFeedInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.PriceFeedInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriceFeedInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriceFeedInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriceFeedInfo;
    static equals(a: PriceFeedInfo | PlainMessage<PriceFeedInfo> | undefined, b: PriceFeedInfo | PlainMessage<PriceFeedInfo> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.PriceFeedPrice
 */
export declare class PriceFeedPrice extends Message<PriceFeedPrice> {
    /**
     * @generated from field: string price = 1;
     */
    price: string;
    constructor(data?: PartialMessage<PriceFeedPrice>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.PriceFeedPrice";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriceFeedPrice;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriceFeedPrice;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriceFeedPrice;
    static equals(a: PriceFeedPrice | PlainMessage<PriceFeedPrice> | undefined, b: PriceFeedPrice | PlainMessage<PriceFeedPrice> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.CoinbasePriceState
 */
export declare class CoinbasePriceState extends Message<CoinbasePriceState> {
    /**
     * kind should always be "prices"
     *
     * @generated from field: string kind = 1;
     */
    kind: string;
    /**
     * timestamp of the when the price was signed by coinbase
     *
     * @generated from field: uint64 timestamp = 2;
     */
    timestamp: bigint;
    /**
     * the symbol of the price, e.g. BTC
     *
     * @generated from field: string key = 3;
     */
    key: string;
    /**
     * the value of the price scaled by 1e6
     *
     * @generated from field: uint64 value = 4;
     */
    value: bigint;
    /**
     * the price state
     *
     * @generated from field: injective.oracle.v1beta1.PriceState price_state = 5;
     */
    priceState?: PriceState;
    constructor(data?: PartialMessage<CoinbasePriceState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.CoinbasePriceState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CoinbasePriceState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CoinbasePriceState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CoinbasePriceState;
    static equals(a: CoinbasePriceState | PlainMessage<CoinbasePriceState> | undefined, b: CoinbasePriceState | PlainMessage<CoinbasePriceState> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.PriceState
 */
export declare class PriceState extends Message<PriceState> {
    /**
     * @generated from field: string price = 1;
     */
    price: string;
    /**
     * @generated from field: string cumulative_price = 2;
     */
    cumulativePrice: string;
    /**
     * @generated from field: int64 timestamp = 3;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<PriceState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.PriceState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriceState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriceState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriceState;
    static equals(a: PriceState | PlainMessage<PriceState> | undefined, b: PriceState | PlainMessage<PriceState> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.PythPriceState
 */
export declare class PythPriceState extends Message<PythPriceState> {
    /**
     * @generated from field: string price_id = 1;
     */
    priceId: string;
    /**
     * @generated from field: string ema_price = 2;
     */
    emaPrice: string;
    /**
     * @generated from field: string ema_conf = 3;
     */
    emaConf: string;
    /**
     * @generated from field: string conf = 4;
     */
    conf: string;
    /**
     * @generated from field: uint64 publish_time = 5;
     */
    publishTime: bigint;
    /**
     * @generated from field: injective.oracle.v1beta1.PriceState price_state = 6;
     */
    priceState?: PriceState;
    constructor(data?: PartialMessage<PythPriceState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.PythPriceState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PythPriceState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PythPriceState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PythPriceState;
    static equals(a: PythPriceState | PlainMessage<PythPriceState> | undefined, b: PythPriceState | PlainMessage<PythPriceState> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.BandOracleRequest
 */
export declare class BandOracleRequest extends Message<BandOracleRequest> {
    /**
     * Unique Identifier for band ibc oracle request
     *
     * @generated from field: uint64 request_id = 1;
     */
    requestId: bigint;
    /**
     * OracleScriptID is the unique identifier of the oracle script to be
     * executed.
     *
     * @generated from field: int64 oracle_script_id = 2;
     */
    oracleScriptId: bigint;
    /**
     * Symbols is the list of symbols to prepare in the calldata
     *
     * @generated from field: repeated string symbols = 3;
     */
    symbols: string[];
    /**
     * AskCount is the number of validators that are requested to respond to this
     * oracle request. Higher value means more security, at a higher gas cost.
     *
     * @generated from field: uint64 ask_count = 4;
     */
    askCount: bigint;
    /**
     * MinCount is the minimum number of validators necessary for the request to
     * proceed to the execution phase. Higher value means more security, at the
     * cost of liveness.
     *
     * @generated from field: uint64 min_count = 5;
     */
    minCount: bigint;
    /**
     * FeeLimit is the maximum tokens that will be paid to all data source
     * providers.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin fee_limit = 6;
     */
    feeLimit: Coin[];
    /**
     * PrepareGas is amount of gas to pay to prepare raw requests
     *
     * @generated from field: uint64 prepare_gas = 7;
     */
    prepareGas: bigint;
    /**
     * ExecuteGas is amount of gas to reserve for executing
     *
     * @generated from field: uint64 execute_gas = 8;
     */
    executeGas: bigint;
    /**
     * MinSourceCount is the minimum number of data sources that must be used by
     * each validator
     *
     * @generated from field: uint64 min_source_count = 9;
     */
    minSourceCount: bigint;
    constructor(data?: PartialMessage<BandOracleRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.BandOracleRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BandOracleRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BandOracleRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BandOracleRequest;
    static equals(a: BandOracleRequest | PlainMessage<BandOracleRequest> | undefined, b: BandOracleRequest | PlainMessage<BandOracleRequest> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.BandIBCParams
 */
export declare class BandIBCParams extends Message<BandIBCParams> {
    /**
     * true if Band IBC should be enabled
     *
     * @generated from field: bool band_ibc_enabled = 1;
     */
    bandIbcEnabled: boolean;
    /**
     * block request interval to send Band IBC prices
     *
     * @generated from field: int64 ibc_request_interval = 2;
     */
    ibcRequestInterval: bigint;
    /**
     * band IBC source channel
     *
     * @generated from field: string ibc_source_channel = 3;
     */
    ibcSourceChannel: string;
    /**
     * band IBC version
     *
     * @generated from field: string ibc_version = 4;
     */
    ibcVersion: string;
    /**
     * band IBC portID
     *
     * @generated from field: string ibc_port_id = 5;
     */
    ibcPortId: string;
    /**
     *  legacy oracle scheme ids
     *
     * @generated from field: repeated int64 legacy_oracle_ids = 6;
     */
    legacyOracleIds: bigint[];
    constructor(data?: PartialMessage<BandIBCParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.BandIBCParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BandIBCParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BandIBCParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BandIBCParams;
    static equals(a: BandIBCParams | PlainMessage<BandIBCParams> | undefined, b: BandIBCParams | PlainMessage<BandIBCParams> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.SymbolPriceTimestamp
 */
export declare class SymbolPriceTimestamp extends Message<SymbolPriceTimestamp> {
    /**
     * @generated from field: injective.oracle.v1beta1.OracleType oracle = 1;
     */
    oracle: OracleType;
    /**
     * @generated from field: string symbol_id = 2;
     */
    symbolId: string;
    /**
     * @generated from field: int64 timestamp = 3;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<SymbolPriceTimestamp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.SymbolPriceTimestamp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SymbolPriceTimestamp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SymbolPriceTimestamp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SymbolPriceTimestamp;
    static equals(a: SymbolPriceTimestamp | PlainMessage<SymbolPriceTimestamp> | undefined, b: SymbolPriceTimestamp | PlainMessage<SymbolPriceTimestamp> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.LastPriceTimestamps
 */
export declare class LastPriceTimestamps extends Message<LastPriceTimestamps> {
    /**
     * @generated from field: repeated injective.oracle.v1beta1.SymbolPriceTimestamp last_price_timestamps = 1;
     */
    lastPriceTimestamps: SymbolPriceTimestamp[];
    constructor(data?: PartialMessage<LastPriceTimestamps>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.LastPriceTimestamps";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LastPriceTimestamps;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LastPriceTimestamps;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LastPriceTimestamps;
    static equals(a: LastPriceTimestamps | PlainMessage<LastPriceTimestamps> | undefined, b: LastPriceTimestamps | PlainMessage<LastPriceTimestamps> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.PriceRecords
 */
export declare class PriceRecords extends Message<PriceRecords> {
    /**
     * @generated from field: injective.oracle.v1beta1.OracleType oracle = 1;
     */
    oracle: OracleType;
    /**
     * @generated from field: string symbol_id = 2;
     */
    symbolId: string;
    /**
     * @generated from field: repeated injective.oracle.v1beta1.PriceRecord latest_price_records = 3;
     */
    latestPriceRecords: PriceRecord[];
    constructor(data?: PartialMessage<PriceRecords>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.PriceRecords";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriceRecords;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriceRecords;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriceRecords;
    static equals(a: PriceRecords | PlainMessage<PriceRecords> | undefined, b: PriceRecords | PlainMessage<PriceRecords> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.PriceRecord
 */
export declare class PriceRecord extends Message<PriceRecord> {
    /**
     * @generated from field: int64 timestamp = 1;
     */
    timestamp: bigint;
    /**
     * @generated from field: string price = 2;
     */
    price: string;
    constructor(data?: PartialMessage<PriceRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.PriceRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriceRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriceRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriceRecord;
    static equals(a: PriceRecord | PlainMessage<PriceRecord> | undefined, b: PriceRecord | PlainMessage<PriceRecord> | undefined): boolean;
}
/**
 * MetadataStatistics refers to the metadata summary statistics of the
 * historical sample considered
 *
 * @generated from message injective.oracle.v1beta1.MetadataStatistics
 */
export declare class MetadataStatistics extends Message<MetadataStatistics> {
    /**
     * GroupCount refers to the number of groups used. Equals RecordsSampleSize if
     * no grouping is used
     *
     * @generated from field: uint32 group_count = 1;
     */
    groupCount: number;
    /**
     * RecordsSampleSize refers to the total number of records used.
     *
     * @generated from field: uint32 records_sample_size = 2;
     */
    recordsSampleSize: number;
    /**
     * Mean refers to the arithmetic mean
     * For trades, the mean is the VWAP computed over the grouped trade records ∑
     * (price * quantity) / ∑ quantity For oracle prices, the mean is computed
     * over the price records ∑ (price) / prices_count
     *
     * @generated from field: string mean = 3;
     */
    mean: string;
    /**
     * TWAP refers to the time-weighted average price which equals ∑ (price_i *
     * ∆t_i) / ∑ ∆t_i where ∆t_i = t_i - t_{i-1}
     *
     * @generated from field: string twap = 4;
     */
    twap: string;
    /**
     * FirstTimestamp is the timestamp of the oldest record considered
     *
     * @generated from field: int64 first_timestamp = 5;
     */
    firstTimestamp: bigint;
    /**
     * LastTimestamp is the timestamp of the youngest record considered
     *
     * @generated from field: int64 last_timestamp = 6;
     */
    lastTimestamp: bigint;
    /**
     * MinPrice refers to the smallest individual raw price considered
     *
     * @generated from field: string min_price = 7;
     */
    minPrice: string;
    /**
     * MaxPrice refers to the largest individual raw price considered
     *
     * @generated from field: string max_price = 8;
     */
    maxPrice: string;
    /**
     * MedianPrice refers to the median individual raw price considered
     *
     * @generated from field: string median_price = 9;
     */
    medianPrice: string;
    constructor(data?: PartialMessage<MetadataStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MetadataStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetadataStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetadataStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetadataStatistics;
    static equals(a: MetadataStatistics | PlainMessage<MetadataStatistics> | undefined, b: MetadataStatistics | PlainMessage<MetadataStatistics> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.PriceAttestation
 */
export declare class PriceAttestation extends Message<PriceAttestation> {
    /**
     * @generated from field: string price_id = 1;
     */
    priceId: string;
    /**
     * MaxPrice refers to the largest individual raw price considered
     *
     * @generated from field: int64 price = 2;
     */
    price: bigint;
    /**
     * @generated from field: uint64 conf = 3;
     */
    conf: bigint;
    /**
     * @generated from field: int32 expo = 4;
     */
    expo: number;
    /**
     * @generated from field: int64 ema_price = 5;
     */
    emaPrice: bigint;
    /**
     * @generated from field: uint64 ema_conf = 6;
     */
    emaConf: bigint;
    /**
     * @generated from field: int32 ema_expo = 7;
     */
    emaExpo: number;
    /**
     * @generated from field: int64 publish_time = 8;
     */
    publishTime: bigint;
    constructor(data?: PartialMessage<PriceAttestation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.PriceAttestation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriceAttestation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriceAttestation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriceAttestation;
    static equals(a: PriceAttestation | PlainMessage<PriceAttestation> | undefined, b: PriceAttestation | PlainMessage<PriceAttestation> | undefined): boolean;
}
//# sourceMappingURL=oracle_pb.d.ts.map