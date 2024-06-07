import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { OracleType } from "../../oracle/v1beta1/oracle_pb.js";
/**
 * @generated from enum injective.exchange.v1beta1.AtomicMarketOrderAccessLevel
 */
export declare enum AtomicMarketOrderAccessLevel {
    /**
     * @generated from enum value: Nobody = 0;
     */
    Nobody = 0,
    /**
     * currently unsupported
     *
     * @generated from enum value: BeginBlockerSmartContractsOnly = 1;
     */
    BeginBlockerSmartContractsOnly = 1,
    /**
     * @generated from enum value: SmartContractsOnly = 2;
     */
    SmartContractsOnly = 2,
    /**
     * @generated from enum value: Everyone = 3;
     */
    Everyone = 3
}
/**
 * @generated from enum injective.exchange.v1beta1.MarketStatus
 */
export declare enum MarketStatus {
    /**
     * @generated from enum value: Unspecified = 0;
     */
    Unspecified = 0,
    /**
     * @generated from enum value: Active = 1;
     */
    Active = 1,
    /**
     * @generated from enum value: Paused = 2;
     */
    Paused = 2,
    /**
     * @generated from enum value: Demolished = 3;
     */
    Demolished = 3,
    /**
     * @generated from enum value: Expired = 4;
     */
    Expired = 4
}
/**
 * @generated from enum injective.exchange.v1beta1.OrderType
 */
export declare enum OrderType {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: BUY = 1;
     */
    BUY = 1,
    /**
     * @generated from enum value: SELL = 2;
     */
    SELL = 2,
    /**
     * @generated from enum value: STOP_BUY = 3;
     */
    STOP_BUY = 3,
    /**
     * @generated from enum value: STOP_SELL = 4;
     */
    STOP_SELL = 4,
    /**
     * @generated from enum value: TAKE_BUY = 5;
     */
    TAKE_BUY = 5,
    /**
     * @generated from enum value: TAKE_SELL = 6;
     */
    TAKE_SELL = 6,
    /**
     * @generated from enum value: BUY_PO = 7;
     */
    BUY_PO = 7,
    /**
     * @generated from enum value: SELL_PO = 8;
     */
    SELL_PO = 8,
    /**
     * @generated from enum value: BUY_ATOMIC = 9;
     */
    BUY_ATOMIC = 9,
    /**
     * @generated from enum value: SELL_ATOMIC = 10;
     */
    SELL_ATOMIC = 10
}
/**
 * @generated from enum injective.exchange.v1beta1.ExecutionType
 */
export declare enum ExecutionType {
    /**
     * @generated from enum value: UnspecifiedExecutionType = 0;
     */
    UnspecifiedExecutionType = 0,
    /**
     * @generated from enum value: Market = 1;
     */
    Market = 1,
    /**
     * @generated from enum value: LimitFill = 2;
     */
    LimitFill = 2,
    /**
     * @generated from enum value: LimitMatchRestingOrder = 3;
     */
    LimitMatchRestingOrder = 3,
    /**
     * @generated from enum value: LimitMatchNewOrder = 4;
     */
    LimitMatchNewOrder = 4,
    /**
     * @generated from enum value: MarketLiquidation = 5;
     */
    MarketLiquidation = 5,
    /**
     * @generated from enum value: ExpiryMarketSettlement = 6;
     */
    ExpiryMarketSettlement = 6
}
/**
 * @generated from enum injective.exchange.v1beta1.OrderMask
 */
export declare enum OrderMask {
    /**
     * @generated from enum value: UNUSED = 0;
     */
    UNUSED = 0,
    /**
     * @generated from enum value: ANY = 1;
     */
    ANY = 1,
    /**
     * @generated from enum value: REGULAR = 2;
     */
    REGULAR = 2,
    /**
     * @generated from enum value: CONDITIONAL = 4;
     */
    CONDITIONAL = 4,
    /**
     * for conditional orders means HIGHER
     *
     * @generated from enum value: DIRECTION_BUY_OR_HIGHER = 8;
     */
    DIRECTION_BUY_OR_HIGHER = 8,
    /**
     * for conditional orders means LOWER
     *
     * @generated from enum value: DIRECTION_SELL_OR_LOWER = 16;
     */
    DIRECTION_SELL_OR_LOWER = 16,
    /**
     * @generated from enum value: TYPE_MARKET = 32;
     */
    TYPE_MARKET = 32,
    /**
     * @generated from enum value: TYPE_LIMIT = 64;
     */
    TYPE_LIMIT = 64
}
/**
 * @generated from message injective.exchange.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * spot_market_instant_listing_fee defines the expedited fee in INJ required
     * to create a spot market by bypassing governance
     *
     * @generated from field: cosmos.base.v1beta1.Coin spot_market_instant_listing_fee = 1;
     */
    spotMarketInstantListingFee?: Coin;
    /**
     * derivative_market_instant_listing_fee defines the expedited fee in INJ
     * required to create a derivative market by bypassing governance
     *
     * @generated from field: cosmos.base.v1beta1.Coin derivative_market_instant_listing_fee = 2;
     */
    derivativeMarketInstantListingFee?: Coin;
    /**
     * default_spot_maker_fee defines the default exchange trade fee for makers on
     * a spot market
     *
     * @generated from field: string default_spot_maker_fee_rate = 3;
     */
    defaultSpotMakerFeeRate: string;
    /**
     * default_spot_taker_fee_rate defines the default exchange trade fee rate for
     * takers on a new spot market
     *
     * @generated from field: string default_spot_taker_fee_rate = 4;
     */
    defaultSpotTakerFeeRate: string;
    /**
     * default_derivative_maker_fee defines the default exchange trade fee for
     * makers on a new derivative market
     *
     * @generated from field: string default_derivative_maker_fee_rate = 5;
     */
    defaultDerivativeMakerFeeRate: string;
    /**
     * default_derivative_taker_fee defines the default exchange trade fee for
     * takers on a new derivative market
     *
     * @generated from field: string default_derivative_taker_fee_rate = 6;
     */
    defaultDerivativeTakerFeeRate: string;
    /**
     * default_initial_margin_ratio defines the default initial margin ratio on a
     * new derivative market
     *
     * @generated from field: string default_initial_margin_ratio = 7;
     */
    defaultInitialMarginRatio: string;
    /**
     * default_maintenance_margin_ratio defines the default maintenance margin
     * ratio on a new derivative market
     *
     * @generated from field: string default_maintenance_margin_ratio = 8;
     */
    defaultMaintenanceMarginRatio: string;
    /**
     * default_funding_interval defines the default funding interval on a
     * derivative market
     *
     * @generated from field: int64 default_funding_interval = 9;
     */
    defaultFundingInterval: bigint;
    /**
     * funding_multiple defines the timestamp multiple that the funding timestamp
     * should be a multiple of
     *
     * @generated from field: int64 funding_multiple = 10;
     */
    fundingMultiple: bigint;
    /**
     * relayer_fee_share_rate defines the trade fee share percentage that goes to
     * relayers
     *
     * @generated from field: string relayer_fee_share_rate = 11;
     */
    relayerFeeShareRate: string;
    /**
     * default_hourly_funding_rate_cap defines the default maximum absolute value
     * of the hourly funding rate
     *
     * @generated from field: string default_hourly_funding_rate_cap = 12;
     */
    defaultHourlyFundingRateCap: string;
    /**
     * hourly_interest_rate defines the hourly interest rate
     *
     * @generated from field: string default_hourly_interest_rate = 13;
     */
    defaultHourlyInterestRate: string;
    /**
     * max_derivative_order_side_count defines the maximum number of derivative
     * active orders a subaccount can have for a given orderbook side
     *
     * @generated from field: uint32 max_derivative_order_side_count = 14;
     */
    maxDerivativeOrderSideCount: number;
    /**
     * inj_reward_staked_requirement_threshold defines the threshold on INJ
     * rewards after which one also needs staked INJ to receive more
     *
     * @generated from field: string inj_reward_staked_requirement_threshold = 15;
     */
    injRewardStakedRequirementThreshold: string;
    /**
     * the trading_rewards_vesting_duration defines the vesting times for trading
     * rewards
     *
     * @generated from field: int64 trading_rewards_vesting_duration = 16;
     */
    tradingRewardsVestingDuration: bigint;
    /**
     * liquidator_reward_share_rate defines the ratio of the split of the surplus
     * collateral that goes to the liquidator
     *
     * @generated from field: string liquidator_reward_share_rate = 17;
     */
    liquidatorRewardShareRate: string;
    /**
     * binary_options_market_instant_listing_fee defines the expedited fee in INJ
     * required to create a derivative market by bypassing governance
     *
     * @generated from field: cosmos.base.v1beta1.Coin binary_options_market_instant_listing_fee = 18;
     */
    binaryOptionsMarketInstantListingFee?: Coin;
    /**
     * atomic_market_order_access_level defines the required access permissions
     * for executing atomic market orders
     *
     * @generated from field: injective.exchange.v1beta1.AtomicMarketOrderAccessLevel atomic_market_order_access_level = 19;
     */
    atomicMarketOrderAccessLevel: AtomicMarketOrderAccessLevel;
    /**
     * spot_atomic_market_order_fee_multiplier defines the default multiplier for
     * executing atomic market orders in spot markets
     *
     * @generated from field: string spot_atomic_market_order_fee_multiplier = 20;
     */
    spotAtomicMarketOrderFeeMultiplier: string;
    /**
     * derivative_atomic_market_order_fee_multiplier defines the default
     * multiplier for executing atomic market orders in derivative markets
     *
     * @generated from field: string derivative_atomic_market_order_fee_multiplier = 21;
     */
    derivativeAtomicMarketOrderFeeMultiplier: string;
    /**
     * binary_options_atomic_market_order_fee_multiplier defines the default
     * multiplier for executing atomic market orders in binary markets
     *
     * @generated from field: string binary_options_atomic_market_order_fee_multiplier = 22;
     */
    binaryOptionsAtomicMarketOrderFeeMultiplier: string;
    /**
     * minimal_protocol_fee_rate defines the minimal protocol fee rate
     *
     * @generated from field: string minimal_protocol_fee_rate = 23;
     */
    minimalProtocolFeeRate: string;
    /**
     * is_instant_derivative_market_launch_enabled defines whether instant
     * derivative market launch is enabled
     *
     * @generated from field: bool is_instant_derivative_market_launch_enabled = 24;
     */
    isInstantDerivativeMarketLaunchEnabled: boolean;
    /**
     * @generated from field: int64 post_only_mode_height_threshold = 25;
     */
    postOnlyModeHeightThreshold: bigint;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.MarketFeeMultiplier
 */
export declare class MarketFeeMultiplier extends Message<MarketFeeMultiplier> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: string fee_multiplier = 2;
     */
    feeMultiplier: string;
    constructor(data?: PartialMessage<MarketFeeMultiplier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MarketFeeMultiplier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MarketFeeMultiplier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MarketFeeMultiplier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MarketFeeMultiplier;
    static equals(a: MarketFeeMultiplier | PlainMessage<MarketFeeMultiplier> | undefined, b: MarketFeeMultiplier | PlainMessage<MarketFeeMultiplier> | undefined): boolean;
}
/**
 * An object describing a derivative market in the Injective Futures Protocol.
 *
 * @generated from message injective.exchange.v1beta1.DerivativeMarket
 */
export declare class DerivativeMarket extends Message<DerivativeMarket> {
    /**
     * Ticker for the derivative contract.
     *
     * @generated from field: string ticker = 1;
     */
    ticker: string;
    /**
     * Oracle base currency
     *
     * @generated from field: string oracle_base = 2;
     */
    oracleBase: string;
    /**
     * Oracle quote currency
     *
     * @generated from field: string oracle_quote = 3;
     */
    oracleQuote: string;
    /**
     * Oracle type
     *
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 4;
     */
    oracleType: OracleType;
    /**
     * Scale factor for oracle prices.
     *
     * @generated from field: uint32 oracle_scale_factor = 5;
     */
    oracleScaleFactor: number;
    /**
     * Address of the quote currency denomination for the derivative contract
     *
     * @generated from field: string quote_denom = 6;
     */
    quoteDenom: string;
    /**
     * Unique market ID.
     *
     * @generated from field: string market_id = 7;
     */
    marketId: string;
    /**
     * initial_margin_ratio defines the initial margin ratio of a derivative
     * market
     *
     * @generated from field: string initial_margin_ratio = 8;
     */
    initialMarginRatio: string;
    /**
     * maintenance_margin_ratio defines the maintenance margin ratio of a
     * derivative market
     *
     * @generated from field: string maintenance_margin_ratio = 9;
     */
    maintenanceMarginRatio: string;
    /**
     * maker_fee_rate defines the maker fee rate of a derivative market
     *
     * @generated from field: string maker_fee_rate = 10;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the taker fee rate of a derivative market
     *
     * @generated from field: string taker_fee_rate = 11;
     */
    takerFeeRate: string;
    /**
     * relayer_fee_share_rate defines the percentage of the transaction fee shared
     * with the relayer in a derivative market
     *
     * @generated from field: string relayer_fee_share_rate = 12;
     */
    relayerFeeShareRate: string;
    /**
     * true if the market is a perpetual market. false if the market is an expiry
     * futures market
     *
     * @generated from field: bool isPerpetual = 13;
     */
    isPerpetual: boolean;
    /**
     * Status of the market
     *
     * @generated from field: injective.exchange.v1beta1.MarketStatus status = 14;
     */
    status: MarketStatus;
    /**
     * min_price_tick_size defines the minimum tick size that the price and margin
     * required for orders in the market
     *
     * @generated from field: string min_price_tick_size = 15;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the quantity
     * required for orders in the market
     *
     * @generated from field: string min_quantity_tick_size = 16;
     */
    minQuantityTickSize: string;
    constructor(data?: PartialMessage<DerivativeMarket>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DerivativeMarket";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeMarket;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeMarket;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeMarket;
    static equals(a: DerivativeMarket | PlainMessage<DerivativeMarket> | undefined, b: DerivativeMarket | PlainMessage<DerivativeMarket> | undefined): boolean;
}
/**
 * An object describing a binary options market in Injective Protocol.
 *
 * @generated from message injective.exchange.v1beta1.BinaryOptionsMarket
 */
export declare class BinaryOptionsMarket extends Message<BinaryOptionsMarket> {
    /**
     * Ticker for the derivative contract.
     *
     * @generated from field: string ticker = 1;
     */
    ticker: string;
    /**
     * Oracle symbol
     *
     * @generated from field: string oracle_symbol = 2;
     */
    oracleSymbol: string;
    /**
     * Oracle Provider
     *
     * @generated from field: string oracle_provider = 3;
     */
    oracleProvider: string;
    /**
     * Oracle type
     *
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 4;
     */
    oracleType: OracleType;
    /**
     * Scale factor for oracle prices.
     *
     * @generated from field: uint32 oracle_scale_factor = 5;
     */
    oracleScaleFactor: number;
    /**
     * expiration timestamp
     *
     * @generated from field: int64 expiration_timestamp = 6;
     */
    expirationTimestamp: bigint;
    /**
     * expiration timestamp
     *
     * @generated from field: int64 settlement_timestamp = 7;
     */
    settlementTimestamp: bigint;
    /**
     * admin of the market
     *
     * @generated from field: string admin = 8;
     */
    admin: string;
    /**
     * Address of the quote currency denomination for the binary options contract
     *
     * @generated from field: string quote_denom = 9;
     */
    quoteDenom: string;
    /**
     * Unique market ID.
     *
     * @generated from field: string market_id = 10;
     */
    marketId: string;
    /**
     * maker_fee_rate defines the maker fee rate of a binary options market
     *
     * @generated from field: string maker_fee_rate = 11;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the taker fee rate of a derivative market
     *
     * @generated from field: string taker_fee_rate = 12;
     */
    takerFeeRate: string;
    /**
     * relayer_fee_share_rate defines the percentage of the transaction fee shared
     * with the relayer in a derivative market
     *
     * @generated from field: string relayer_fee_share_rate = 13;
     */
    relayerFeeShareRate: string;
    /**
     * Status of the market
     *
     * @generated from field: injective.exchange.v1beta1.MarketStatus status = 14;
     */
    status: MarketStatus;
    /**
     * min_price_tick_size defines the minimum tick size that the price and margin
     * required for orders in the market
     *
     * @generated from field: string min_price_tick_size = 15;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the quantity
     * required for orders in the market
     *
     * @generated from field: string min_quantity_tick_size = 16;
     */
    minQuantityTickSize: string;
    /**
     * @generated from field: string settlement_price = 17;
     */
    settlementPrice: string;
    constructor(data?: PartialMessage<BinaryOptionsMarket>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.BinaryOptionsMarket";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BinaryOptionsMarket;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BinaryOptionsMarket;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BinaryOptionsMarket;
    static equals(a: BinaryOptionsMarket | PlainMessage<BinaryOptionsMarket> | undefined, b: BinaryOptionsMarket | PlainMessage<BinaryOptionsMarket> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.ExpiryFuturesMarketInfo
 */
export declare class ExpiryFuturesMarketInfo extends Message<ExpiryFuturesMarketInfo> {
    /**
     * market ID.
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * expiration_timestamp defines the expiration time for a time expiry futures
     * market.
     *
     * @generated from field: int64 expiration_timestamp = 2;
     */
    expirationTimestamp: bigint;
    /**
     * expiration_twap_start_timestamp defines the start time of the TWAP
     * calculation window
     *
     * @generated from field: int64 twap_start_timestamp = 3;
     */
    twapStartTimestamp: bigint;
    /**
     * expiration_twap_start_price_cumulative defines the cumulative price for the
     * start of the TWAP window
     *
     * @generated from field: string expiration_twap_start_price_cumulative = 4;
     */
    expirationTwapStartPriceCumulative: string;
    /**
     * settlement_price defines the settlement price for a time expiry futures
     * market.
     *
     * @generated from field: string settlement_price = 5;
     */
    settlementPrice: string;
    constructor(data?: PartialMessage<ExpiryFuturesMarketInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.ExpiryFuturesMarketInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpiryFuturesMarketInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpiryFuturesMarketInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpiryFuturesMarketInfo;
    static equals(a: ExpiryFuturesMarketInfo | PlainMessage<ExpiryFuturesMarketInfo> | undefined, b: ExpiryFuturesMarketInfo | PlainMessage<ExpiryFuturesMarketInfo> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.PerpetualMarketInfo
 */
export declare class PerpetualMarketInfo extends Message<PerpetualMarketInfo> {
    /**
     * market ID.
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * hourly_funding_rate_cap defines the maximum absolute value of the hourly
     * funding rate
     *
     * @generated from field: string hourly_funding_rate_cap = 2;
     */
    hourlyFundingRateCap: string;
    /**
     * hourly_interest_rate defines the hourly interest rate
     *
     * @generated from field: string hourly_interest_rate = 3;
     */
    hourlyInterestRate: string;
    /**
     * next_funding_timestamp defines the next funding timestamp in seconds of a
     * perpetual market
     *
     * @generated from field: int64 next_funding_timestamp = 4;
     */
    nextFundingTimestamp: bigint;
    /**
     * funding_interval defines the next funding interval in seconds of a
     * perpetual market.
     *
     * @generated from field: int64 funding_interval = 5;
     */
    fundingInterval: bigint;
    constructor(data?: PartialMessage<PerpetualMarketInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.PerpetualMarketInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PerpetualMarketInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PerpetualMarketInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PerpetualMarketInfo;
    static equals(a: PerpetualMarketInfo | PlainMessage<PerpetualMarketInfo> | undefined, b: PerpetualMarketInfo | PlainMessage<PerpetualMarketInfo> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.PerpetualMarketFunding
 */
export declare class PerpetualMarketFunding extends Message<PerpetualMarketFunding> {
    /**
     * cumulative_funding defines the cumulative funding of a perpetual market.
     *
     * @generated from field: string cumulative_funding = 1;
     */
    cumulativeFunding: string;
    /**
     * cumulative_price defines the cumulative price for the current hour up to
     * the last timestamp
     *
     * @generated from field: string cumulative_price = 2;
     */
    cumulativePrice: string;
    /**
     * @generated from field: int64 last_timestamp = 3;
     */
    lastTimestamp: bigint;
    constructor(data?: PartialMessage<PerpetualMarketFunding>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.PerpetualMarketFunding";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PerpetualMarketFunding;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PerpetualMarketFunding;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PerpetualMarketFunding;
    static equals(a: PerpetualMarketFunding | PlainMessage<PerpetualMarketFunding> | undefined, b: PerpetualMarketFunding | PlainMessage<PerpetualMarketFunding> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.DerivativeMarketSettlementInfo
 */
export declare class DerivativeMarketSettlementInfo extends Message<DerivativeMarketSettlementInfo> {
    /**
     * market ID.
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * settlement_price defines the settlement price
     *
     * @generated from field: string settlement_price = 2;
     */
    settlementPrice: string;
    constructor(data?: PartialMessage<DerivativeMarketSettlementInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DerivativeMarketSettlementInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeMarketSettlementInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeMarketSettlementInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeMarketSettlementInfo;
    static equals(a: DerivativeMarketSettlementInfo | PlainMessage<DerivativeMarketSettlementInfo> | undefined, b: DerivativeMarketSettlementInfo | PlainMessage<DerivativeMarketSettlementInfo> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.NextFundingTimestamp
 */
export declare class NextFundingTimestamp extends Message<NextFundingTimestamp> {
    /**
     * @generated from field: int64 next_timestamp = 1;
     */
    nextTimestamp: bigint;
    constructor(data?: PartialMessage<NextFundingTimestamp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.NextFundingTimestamp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NextFundingTimestamp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NextFundingTimestamp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NextFundingTimestamp;
    static equals(a: NextFundingTimestamp | PlainMessage<NextFundingTimestamp> | undefined, b: NextFundingTimestamp | PlainMessage<NextFundingTimestamp> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.MidPriceAndTOB
 */
export declare class MidPriceAndTOB extends Message<MidPriceAndTOB> {
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
    constructor(data?: PartialMessage<MidPriceAndTOB>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MidPriceAndTOB";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MidPriceAndTOB;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MidPriceAndTOB;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MidPriceAndTOB;
    static equals(a: MidPriceAndTOB | PlainMessage<MidPriceAndTOB> | undefined, b: MidPriceAndTOB | PlainMessage<MidPriceAndTOB> | undefined): boolean;
}
/**
 * An object describing trade pair of two assets.
 *
 * @generated from message injective.exchange.v1beta1.SpotMarket
 */
export declare class SpotMarket extends Message<SpotMarket> {
    /**
     * A name of the pair in format AAA/BBB, where AAA is base asset, BBB is quote
     * asset.
     *
     * @generated from field: string ticker = 1;
     */
    ticker: string;
    /**
     * Coin denom used for the base asset
     *
     * @generated from field: string base_denom = 2;
     */
    baseDenom: string;
    /**
     * Coin used for the quote asset
     *
     * @generated from field: string quote_denom = 3;
     */
    quoteDenom: string;
    /**
     * maker_fee_rate defines the fee percentage makers pay when trading
     *
     * @generated from field: string maker_fee_rate = 4;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the fee percentage takers pay when trading
     *
     * @generated from field: string taker_fee_rate = 5;
     */
    takerFeeRate: string;
    /**
     * relayer_fee_share_rate defines the percentage of the transaction fee shared
     * with the relayer in a derivative market
     *
     * @generated from field: string relayer_fee_share_rate = 6;
     */
    relayerFeeShareRate: string;
    /**
     * Unique market ID.
     *
     * @generated from field: string market_id = 7;
     */
    marketId: string;
    /**
     * Status of the market
     *
     * @generated from field: injective.exchange.v1beta1.MarketStatus status = 8;
     */
    status: MarketStatus;
    /**
     * min_price_tick_size defines the minimum tick size that the price required
     * for orders in the market
     *
     * @generated from field: string min_price_tick_size = 9;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the quantity
     * required for orders in the market
     *
     * @generated from field: string min_quantity_tick_size = 10;
     */
    minQuantityTickSize: string;
    constructor(data?: PartialMessage<SpotMarket>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SpotMarket";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotMarket;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotMarket;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotMarket;
    static equals(a: SpotMarket | PlainMessage<SpotMarket> | undefined, b: SpotMarket | PlainMessage<SpotMarket> | undefined): boolean;
}
/**
 * A subaccount's deposit for a given base currency
 *
 * @generated from message injective.exchange.v1beta1.Deposit
 */
export declare class Deposit extends Message<Deposit> {
    /**
     * @generated from field: string available_balance = 1;
     */
    availableBalance: string;
    /**
     * @generated from field: string total_balance = 2;
     */
    totalBalance: string;
    constructor(data?: PartialMessage<Deposit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.Deposit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Deposit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Deposit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Deposit;
    static equals(a: Deposit | PlainMessage<Deposit> | undefined, b: Deposit | PlainMessage<Deposit> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.SubaccountTradeNonce
 */
export declare class SubaccountTradeNonce extends Message<SubaccountTradeNonce> {
    /**
     * @generated from field: uint32 nonce = 1;
     */
    nonce: number;
    constructor(data?: PartialMessage<SubaccountTradeNonce>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SubaccountTradeNonce";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubaccountTradeNonce;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubaccountTradeNonce;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubaccountTradeNonce;
    static equals(a: SubaccountTradeNonce | PlainMessage<SubaccountTradeNonce> | undefined, b: SubaccountTradeNonce | PlainMessage<SubaccountTradeNonce> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.OrderInfo
 */
export declare class OrderInfo extends Message<OrderInfo> {
    /**
     * bytes32 subaccount ID that created the order
     *
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * address fee_recipient address that will receive fees for the order
     *
     * @generated from field: string fee_recipient = 2;
     */
    feeRecipient: string;
    /**
     * price of the order
     *
     * @generated from field: string price = 3;
     */
    price: string;
    /**
     * quantity of the order
     *
     * @generated from field: string quantity = 4;
     */
    quantity: string;
    /**
     * @generated from field: string cid = 5;
     */
    cid: string;
    constructor(data?: PartialMessage<OrderInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.OrderInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderInfo;
    static equals(a: OrderInfo | PlainMessage<OrderInfo> | undefined, b: OrderInfo | PlainMessage<OrderInfo> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.SpotOrder
 */
export declare class SpotOrder extends Message<SpotOrder> {
    /**
     * market_id represents the unique ID of the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * order_info contains the information of the order
     *
     * @generated from field: injective.exchange.v1beta1.OrderInfo order_info = 2;
     */
    orderInfo?: OrderInfo;
    /**
     * order types
     *
     * @generated from field: injective.exchange.v1beta1.OrderType order_type = 3;
     */
    orderType: OrderType;
    /**
     * trigger_price is the trigger price used by stop/take orders
     *
     * @generated from field: string trigger_price = 4;
     */
    triggerPrice: string;
    constructor(data?: PartialMessage<SpotOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SpotOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotOrder;
    static equals(a: SpotOrder | PlainMessage<SpotOrder> | undefined, b: SpotOrder | PlainMessage<SpotOrder> | undefined): boolean;
}
/**
 * A valid Spot limit order with Metadata.
 *
 * @generated from message injective.exchange.v1beta1.SpotLimitOrder
 */
export declare class SpotLimitOrder extends Message<SpotLimitOrder> {
    /**
     * order_info contains the information of the order
     *
     * @generated from field: injective.exchange.v1beta1.OrderInfo order_info = 1;
     */
    orderInfo?: OrderInfo;
    /**
     * order types
     *
     * @generated from field: injective.exchange.v1beta1.OrderType order_type = 2;
     */
    orderType: OrderType;
    /**
     * the amount of the quantity remaining fillable
     *
     * @generated from field: string fillable = 3;
     */
    fillable: string;
    /**
     * trigger_price is the trigger price used by stop/take orders
     *
     * @generated from field: string trigger_price = 4;
     */
    triggerPrice: string;
    /**
     * @generated from field: bytes order_hash = 5;
     */
    orderHash: Uint8Array;
    constructor(data?: PartialMessage<SpotLimitOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SpotLimitOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotLimitOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotLimitOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotLimitOrder;
    static equals(a: SpotLimitOrder | PlainMessage<SpotLimitOrder> | undefined, b: SpotLimitOrder | PlainMessage<SpotLimitOrder> | undefined): boolean;
}
/**
 * A valid Spot market order with Metadata.
 *
 * @generated from message injective.exchange.v1beta1.SpotMarketOrder
 */
export declare class SpotMarketOrder extends Message<SpotMarketOrder> {
    /**
     * order_info contains the information of the order
     *
     * @generated from field: injective.exchange.v1beta1.OrderInfo order_info = 1;
     */
    orderInfo?: OrderInfo;
    /**
     * @generated from field: string balance_hold = 2;
     */
    balanceHold: string;
    /**
     * @generated from field: bytes order_hash = 3;
     */
    orderHash: Uint8Array;
    /**
     * order types
     *
     * @generated from field: injective.exchange.v1beta1.OrderType order_type = 4;
     */
    orderType: OrderType;
    /**
     * trigger_price is the trigger price used by stop/take orders
     *
     * @generated from field: string trigger_price = 5;
     */
    triggerPrice: string;
    constructor(data?: PartialMessage<SpotMarketOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SpotMarketOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotMarketOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotMarketOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotMarketOrder;
    static equals(a: SpotMarketOrder | PlainMessage<SpotMarketOrder> | undefined, b: SpotMarketOrder | PlainMessage<SpotMarketOrder> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.DerivativeOrder
 */
export declare class DerivativeOrder extends Message<DerivativeOrder> {
    /**
     * market_id represents the unique ID of the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * order_info contains the information of the order
     *
     * @generated from field: injective.exchange.v1beta1.OrderInfo order_info = 2;
     */
    orderInfo?: OrderInfo;
    /**
     * order types
     *
     * @generated from field: injective.exchange.v1beta1.OrderType order_type = 3;
     */
    orderType: OrderType;
    /**
     * margin is the margin used by the limit order
     *
     * @generated from field: string margin = 4;
     */
    margin: string;
    /**
     * trigger_price is the trigger price used by stop/take orders
     *
     * @generated from field: string trigger_price = 5;
     */
    triggerPrice: string;
    constructor(data?: PartialMessage<DerivativeOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DerivativeOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeOrder;
    static equals(a: DerivativeOrder | PlainMessage<DerivativeOrder> | undefined, b: DerivativeOrder | PlainMessage<DerivativeOrder> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.SubaccountOrderbookMetadata
 */
export declare class SubaccountOrderbookMetadata extends Message<SubaccountOrderbookMetadata> {
    /**
     * @generated from field: uint32 vanilla_limit_order_count = 1;
     */
    vanillaLimitOrderCount: number;
    /**
     * @generated from field: uint32 reduce_only_limit_order_count = 2;
     */
    reduceOnlyLimitOrderCount: number;
    /**
     * AggregateReduceOnlyQuantity is the aggregate fillable quantity of the
     * subaccount's reduce-only limit orders in the given direction.
     *
     * @generated from field: string aggregate_reduce_only_quantity = 3;
     */
    aggregateReduceOnlyQuantity: string;
    /**
     * AggregateVanillaQuantity is the aggregate fillable quantity of the
     * subaccount's vanilla limit orders in the given direction.
     *
     * @generated from field: string aggregate_vanilla_quantity = 4;
     */
    aggregateVanillaQuantity: string;
    /**
     * @generated from field: uint32 vanilla_conditional_order_count = 5;
     */
    vanillaConditionalOrderCount: number;
    /**
     * @generated from field: uint32 reduce_only_conditional_order_count = 6;
     */
    reduceOnlyConditionalOrderCount: number;
    constructor(data?: PartialMessage<SubaccountOrderbookMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SubaccountOrderbookMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubaccountOrderbookMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubaccountOrderbookMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubaccountOrderbookMetadata;
    static equals(a: SubaccountOrderbookMetadata | PlainMessage<SubaccountOrderbookMetadata> | undefined, b: SubaccountOrderbookMetadata | PlainMessage<SubaccountOrderbookMetadata> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.SubaccountOrder
 */
export declare class SubaccountOrder extends Message<SubaccountOrder> {
    /**
     * price of the order
     *
     * @generated from field: string price = 1;
     */
    price: string;
    /**
     * the amount of the quantity remaining fillable
     *
     * @generated from field: string quantity = 2;
     */
    quantity: string;
    /**
     * @generated from field: bool isReduceOnly = 3;
     */
    isReduceOnly: boolean;
    constructor(data?: PartialMessage<SubaccountOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SubaccountOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubaccountOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubaccountOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubaccountOrder;
    static equals(a: SubaccountOrder | PlainMessage<SubaccountOrder> | undefined, b: SubaccountOrder | PlainMessage<SubaccountOrder> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.SubaccountOrderData
 */
export declare class SubaccountOrderData extends Message<SubaccountOrderData> {
    /**
     * @generated from field: injective.exchange.v1beta1.SubaccountOrder order = 1;
     */
    order?: SubaccountOrder;
    /**
     * @generated from field: bytes order_hash = 2;
     */
    orderHash: Uint8Array;
    constructor(data?: PartialMessage<SubaccountOrderData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SubaccountOrderData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubaccountOrderData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubaccountOrderData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubaccountOrderData;
    static equals(a: SubaccountOrderData | PlainMessage<SubaccountOrderData> | undefined, b: SubaccountOrderData | PlainMessage<SubaccountOrderData> | undefined): boolean;
}
/**
 * A valid Derivative limit order with Metadata.
 *
 * @generated from message injective.exchange.v1beta1.DerivativeLimitOrder
 */
export declare class DerivativeLimitOrder extends Message<DerivativeLimitOrder> {
    /**
     * order_info contains the information of the order
     *
     * @generated from field: injective.exchange.v1beta1.OrderInfo order_info = 1;
     */
    orderInfo?: OrderInfo;
    /**
     * order types
     *
     * @generated from field: injective.exchange.v1beta1.OrderType order_type = 2;
     */
    orderType: OrderType;
    /**
     * margin is the margin used by the limit order
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
     * trigger_price is the trigger price used by stop/take orders
     *
     * @generated from field: string trigger_price = 5;
     */
    triggerPrice: string;
    /**
     * @generated from field: bytes order_hash = 6;
     */
    orderHash: Uint8Array;
    constructor(data?: PartialMessage<DerivativeLimitOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DerivativeLimitOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeLimitOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeLimitOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeLimitOrder;
    static equals(a: DerivativeLimitOrder | PlainMessage<DerivativeLimitOrder> | undefined, b: DerivativeLimitOrder | PlainMessage<DerivativeLimitOrder> | undefined): boolean;
}
/**
 * A valid Derivative market order with Metadata.
 *
 * @generated from message injective.exchange.v1beta1.DerivativeMarketOrder
 */
export declare class DerivativeMarketOrder extends Message<DerivativeMarketOrder> {
    /**
     * order_info contains the information of the order
     *
     * @generated from field: injective.exchange.v1beta1.OrderInfo order_info = 1;
     */
    orderInfo?: OrderInfo;
    /**
     * order types
     *
     * @generated from field: injective.exchange.v1beta1.OrderType order_type = 2;
     */
    orderType: OrderType;
    /**
     * @generated from field: string margin = 3;
     */
    margin: string;
    /**
     * @generated from field: string margin_hold = 4;
     */
    marginHold: string;
    /**
     * trigger_price is the trigger price used by stop/take orders
     *
     * @generated from field: string trigger_price = 5;
     */
    triggerPrice: string;
    /**
     * @generated from field: bytes order_hash = 6;
     */
    orderHash: Uint8Array;
    constructor(data?: PartialMessage<DerivativeMarketOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DerivativeMarketOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeMarketOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeMarketOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeMarketOrder;
    static equals(a: DerivativeMarketOrder | PlainMessage<DerivativeMarketOrder> | undefined, b: DerivativeMarketOrder | PlainMessage<DerivativeMarketOrder> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.Position
 */
export declare class Position extends Message<Position> {
    /**
     * @generated from field: bool isLong = 1;
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
     * @generated from field: string margin = 4;
     */
    margin: string;
    /**
     * @generated from field: string cumulative_funding_entry = 5;
     */
    cumulativeFundingEntry: string;
    constructor(data?: PartialMessage<Position>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.Position";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Position;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Position;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Position;
    static equals(a: Position | PlainMessage<Position> | undefined, b: Position | PlainMessage<Position> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.MarketOrderIndicator
 */
export declare class MarketOrderIndicator extends Message<MarketOrderIndicator> {
    /**
     * market_id represents the unique ID of the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: bool isBuy = 2;
     */
    isBuy: boolean;
    constructor(data?: PartialMessage<MarketOrderIndicator>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MarketOrderIndicator";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MarketOrderIndicator;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MarketOrderIndicator;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MarketOrderIndicator;
    static equals(a: MarketOrderIndicator | PlainMessage<MarketOrderIndicator> | undefined, b: MarketOrderIndicator | PlainMessage<MarketOrderIndicator> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TradeLog
 */
export declare class TradeLog extends Message<TradeLog> {
    /**
     * @generated from field: string quantity = 1;
     */
    quantity: string;
    /**
     * @generated from field: string price = 2;
     */
    price: string;
    /**
     * bytes32 subaccount ID that executed the trade
     *
     * @generated from field: bytes subaccount_id = 3;
     */
    subaccountId: Uint8Array;
    /**
     * @generated from field: string fee = 4;
     */
    fee: string;
    /**
     * @generated from field: bytes order_hash = 5;
     */
    orderHash: Uint8Array;
    /**
     * @generated from field: bytes fee_recipient_address = 6;
     */
    feeRecipientAddress: Uint8Array;
    /**
     * @generated from field: string cid = 7;
     */
    cid: string;
    constructor(data?: PartialMessage<TradeLog>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TradeLog";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradeLog;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradeLog;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradeLog;
    static equals(a: TradeLog | PlainMessage<TradeLog> | undefined, b: TradeLog | PlainMessage<TradeLog> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.PositionDelta
 */
export declare class PositionDelta extends Message<PositionDelta> {
    /**
     * @generated from field: bool is_long = 1;
     */
    isLong: boolean;
    /**
     * @generated from field: string execution_quantity = 2;
     */
    executionQuantity: string;
    /**
     * @generated from field: string execution_margin = 3;
     */
    executionMargin: string;
    /**
     * @generated from field: string execution_price = 4;
     */
    executionPrice: string;
    constructor(data?: PartialMessage<PositionDelta>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.PositionDelta";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PositionDelta;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PositionDelta;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PositionDelta;
    static equals(a: PositionDelta | PlainMessage<PositionDelta> | undefined, b: PositionDelta | PlainMessage<PositionDelta> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.DerivativeTradeLog
 */
export declare class DerivativeTradeLog extends Message<DerivativeTradeLog> {
    /**
     * @generated from field: bytes subaccount_id = 1;
     */
    subaccountId: Uint8Array;
    /**
     * @generated from field: injective.exchange.v1beta1.PositionDelta position_delta = 2;
     */
    positionDelta?: PositionDelta;
    /**
     * @generated from field: string payout = 3;
     */
    payout: string;
    /**
     * @generated from field: string fee = 4;
     */
    fee: string;
    /**
     * @generated from field: bytes order_hash = 5;
     */
    orderHash: Uint8Array;
    /**
     * @generated from field: bytes fee_recipient_address = 6;
     */
    feeRecipientAddress: Uint8Array;
    /**
     * @generated from field: string cid = 7;
     */
    cid: string;
    constructor(data?: PartialMessage<DerivativeTradeLog>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DerivativeTradeLog";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeTradeLog;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeTradeLog;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeTradeLog;
    static equals(a: DerivativeTradeLog | PlainMessage<DerivativeTradeLog> | undefined, b: DerivativeTradeLog | PlainMessage<DerivativeTradeLog> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.SubaccountPosition
 */
export declare class SubaccountPosition extends Message<SubaccountPosition> {
    /**
     * @generated from field: injective.exchange.v1beta1.Position position = 1;
     */
    position?: Position;
    /**
     * @generated from field: bytes subaccount_id = 2;
     */
    subaccountId: Uint8Array;
    constructor(data?: PartialMessage<SubaccountPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SubaccountPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubaccountPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubaccountPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubaccountPosition;
    static equals(a: SubaccountPosition | PlainMessage<SubaccountPosition> | undefined, b: SubaccountPosition | PlainMessage<SubaccountPosition> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.SubaccountDeposit
 */
export declare class SubaccountDeposit extends Message<SubaccountDeposit> {
    /**
     * @generated from field: bytes subaccount_id = 1;
     */
    subaccountId: Uint8Array;
    /**
     * @generated from field: injective.exchange.v1beta1.Deposit deposit = 2;
     */
    deposit?: Deposit;
    constructor(data?: PartialMessage<SubaccountDeposit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SubaccountDeposit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubaccountDeposit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubaccountDeposit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubaccountDeposit;
    static equals(a: SubaccountDeposit | PlainMessage<SubaccountDeposit> | undefined, b: SubaccountDeposit | PlainMessage<SubaccountDeposit> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.DepositUpdate
 */
export declare class DepositUpdate extends Message<DepositUpdate> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SubaccountDeposit deposits = 2;
     */
    deposits: SubaccountDeposit[];
    constructor(data?: PartialMessage<DepositUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DepositUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepositUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepositUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepositUpdate;
    static equals(a: DepositUpdate | PlainMessage<DepositUpdate> | undefined, b: DepositUpdate | PlainMessage<DepositUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.PointsMultiplier
 */
export declare class PointsMultiplier extends Message<PointsMultiplier> {
    /**
     * @generated from field: string maker_points_multiplier = 1;
     */
    makerPointsMultiplier: string;
    /**
     * @generated from field: string taker_points_multiplier = 2;
     */
    takerPointsMultiplier: string;
    constructor(data?: PartialMessage<PointsMultiplier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.PointsMultiplier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PointsMultiplier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PointsMultiplier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PointsMultiplier;
    static equals(a: PointsMultiplier | PlainMessage<PointsMultiplier> | undefined, b: PointsMultiplier | PlainMessage<PointsMultiplier> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TradingRewardCampaignBoostInfo
 */
export declare class TradingRewardCampaignBoostInfo extends Message<TradingRewardCampaignBoostInfo> {
    /**
     * @generated from field: repeated string boosted_spot_market_ids = 1;
     */
    boostedSpotMarketIds: string[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.PointsMultiplier spot_market_multipliers = 2;
     */
    spotMarketMultipliers: PointsMultiplier[];
    /**
     * @generated from field: repeated string boosted_derivative_market_ids = 3;
     */
    boostedDerivativeMarketIds: string[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.PointsMultiplier derivative_market_multipliers = 4;
     */
    derivativeMarketMultipliers: PointsMultiplier[];
    constructor(data?: PartialMessage<TradingRewardCampaignBoostInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TradingRewardCampaignBoostInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradingRewardCampaignBoostInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradingRewardCampaignBoostInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradingRewardCampaignBoostInfo;
    static equals(a: TradingRewardCampaignBoostInfo | PlainMessage<TradingRewardCampaignBoostInfo> | undefined, b: TradingRewardCampaignBoostInfo | PlainMessage<TradingRewardCampaignBoostInfo> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.CampaignRewardPool
 */
export declare class CampaignRewardPool extends Message<CampaignRewardPool> {
    /**
     * @generated from field: int64 start_timestamp = 1;
     */
    startTimestamp: bigint;
    /**
     * max_campaign_rewards are the maximum reward amounts to be disbursed at the
     * end of the campaign
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin max_campaign_rewards = 2;
     */
    maxCampaignRewards: Coin[];
    constructor(data?: PartialMessage<CampaignRewardPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.CampaignRewardPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CampaignRewardPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CampaignRewardPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CampaignRewardPool;
    static equals(a: CampaignRewardPool | PlainMessage<CampaignRewardPool> | undefined, b: CampaignRewardPool | PlainMessage<CampaignRewardPool> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TradingRewardCampaignInfo
 */
export declare class TradingRewardCampaignInfo extends Message<TradingRewardCampaignInfo> {
    /**
     * number of seconds of the duration of each campaign
     *
     * @generated from field: int64 campaign_duration_seconds = 1;
     */
    campaignDurationSeconds: bigint;
    /**
     * the trading fee quote denoms which will be counted for the rewards
     *
     * @generated from field: repeated string quote_denoms = 2;
     */
    quoteDenoms: string[];
    /**
     * the optional boost info for markets
     *
     * @generated from field: injective.exchange.v1beta1.TradingRewardCampaignBoostInfo trading_reward_boost_info = 3;
     */
    tradingRewardBoostInfo?: TradingRewardCampaignBoostInfo;
    /**
     * the marketIDs which are disqualified from being rewarded
     *
     * @generated from field: repeated string disqualified_market_ids = 4;
     */
    disqualifiedMarketIds: string[];
    constructor(data?: PartialMessage<TradingRewardCampaignInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TradingRewardCampaignInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradingRewardCampaignInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradingRewardCampaignInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradingRewardCampaignInfo;
    static equals(a: TradingRewardCampaignInfo | PlainMessage<TradingRewardCampaignInfo> | undefined, b: TradingRewardCampaignInfo | PlainMessage<TradingRewardCampaignInfo> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.FeeDiscountTierInfo
 */
export declare class FeeDiscountTierInfo extends Message<FeeDiscountTierInfo> {
    /**
     * @generated from field: string maker_discount_rate = 1;
     */
    makerDiscountRate: string;
    /**
     * @generated from field: string taker_discount_rate = 2;
     */
    takerDiscountRate: string;
    /**
     * @generated from field: string staked_amount = 3;
     */
    stakedAmount: string;
    /**
     * @generated from field: string volume = 4;
     */
    volume: string;
    constructor(data?: PartialMessage<FeeDiscountTierInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.FeeDiscountTierInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeDiscountTierInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeDiscountTierInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeDiscountTierInfo;
    static equals(a: FeeDiscountTierInfo | PlainMessage<FeeDiscountTierInfo> | undefined, b: FeeDiscountTierInfo | PlainMessage<FeeDiscountTierInfo> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.FeeDiscountSchedule
 */
export declare class FeeDiscountSchedule extends Message<FeeDiscountSchedule> {
    /**
     * @generated from field: uint64 bucket_count = 1;
     */
    bucketCount: bigint;
    /**
     * @generated from field: int64 bucket_duration = 2;
     */
    bucketDuration: bigint;
    /**
     * the trading fee quote denoms which will be counted for the fee paid
     * contribution
     *
     * @generated from field: repeated string quote_denoms = 3;
     */
    quoteDenoms: string[];
    /**
     * the fee discount tiers
     *
     * @generated from field: repeated injective.exchange.v1beta1.FeeDiscountTierInfo tier_infos = 4;
     */
    tierInfos: FeeDiscountTierInfo[];
    /**
     * the marketIDs which are disqualified from contributing to the fee paid
     * amount
     *
     * @generated from field: repeated string disqualified_market_ids = 5;
     */
    disqualifiedMarketIds: string[];
    constructor(data?: PartialMessage<FeeDiscountSchedule>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.FeeDiscountSchedule";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeDiscountSchedule;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeDiscountSchedule;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeDiscountSchedule;
    static equals(a: FeeDiscountSchedule | PlainMessage<FeeDiscountSchedule> | undefined, b: FeeDiscountSchedule | PlainMessage<FeeDiscountSchedule> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.FeeDiscountTierTTL
 */
export declare class FeeDiscountTierTTL extends Message<FeeDiscountTierTTL> {
    /**
     * @generated from field: uint64 tier = 1;
     */
    tier: bigint;
    /**
     * @generated from field: int64 ttl_timestamp = 2;
     */
    ttlTimestamp: bigint;
    constructor(data?: PartialMessage<FeeDiscountTierTTL>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.FeeDiscountTierTTL";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeDiscountTierTTL;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeDiscountTierTTL;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeDiscountTierTTL;
    static equals(a: FeeDiscountTierTTL | PlainMessage<FeeDiscountTierTTL> | undefined, b: FeeDiscountTierTTL | PlainMessage<FeeDiscountTierTTL> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.VolumeRecord
 */
export declare class VolumeRecord extends Message<VolumeRecord> {
    /**
     * @generated from field: string maker_volume = 1;
     */
    makerVolume: string;
    /**
     * @generated from field: string taker_volume = 2;
     */
    takerVolume: string;
    constructor(data?: PartialMessage<VolumeRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.VolumeRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeRecord;
    static equals(a: VolumeRecord | PlainMessage<VolumeRecord> | undefined, b: VolumeRecord | PlainMessage<VolumeRecord> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.AccountRewards
 */
export declare class AccountRewards extends Message<AccountRewards> {
    /**
     * @generated from field: string account = 1;
     */
    account: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin rewards = 2;
     */
    rewards: Coin[];
    constructor(data?: PartialMessage<AccountRewards>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.AccountRewards";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountRewards;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountRewards;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountRewards;
    static equals(a: AccountRewards | PlainMessage<AccountRewards> | undefined, b: AccountRewards | PlainMessage<AccountRewards> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TradeRecords
 */
export declare class TradeRecords extends Message<TradeRecords> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TradeRecord latest_trade_records = 2;
     */
    latestTradeRecords: TradeRecord[];
    constructor(data?: PartialMessage<TradeRecords>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TradeRecords";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradeRecords;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradeRecords;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradeRecords;
    static equals(a: TradeRecords | PlainMessage<TradeRecords> | undefined, b: TradeRecords | PlainMessage<TradeRecords> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.SubaccountIDs
 */
export declare class SubaccountIDs extends Message<SubaccountIDs> {
    /**
     * @generated from field: repeated bytes subaccount_ids = 1;
     */
    subaccountIds: Uint8Array[];
    constructor(data?: PartialMessage<SubaccountIDs>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SubaccountIDs";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubaccountIDs;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubaccountIDs;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubaccountIDs;
    static equals(a: SubaccountIDs | PlainMessage<SubaccountIDs> | undefined, b: SubaccountIDs | PlainMessage<SubaccountIDs> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TradeRecord
 */
export declare class TradeRecord extends Message<TradeRecord> {
    /**
     * @generated from field: int64 timestamp = 1;
     */
    timestamp: bigint;
    /**
     * @generated from field: string price = 2;
     */
    price: string;
    /**
     * @generated from field: string quantity = 3;
     */
    quantity: string;
    constructor(data?: PartialMessage<TradeRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TradeRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradeRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradeRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradeRecord;
    static equals(a: TradeRecord | PlainMessage<TradeRecord> | undefined, b: TradeRecord | PlainMessage<TradeRecord> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.Level
 */
export declare class Level extends Message<Level> {
    /**
     * price
     *
     * @generated from field: string p = 1;
     */
    p: string;
    /**
     * quantity
     *
     * @generated from field: string q = 2;
     */
    q: string;
    constructor(data?: PartialMessage<Level>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.Level";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Level;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Level;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Level;
    static equals(a: Level | PlainMessage<Level> | undefined, b: Level | PlainMessage<Level> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.AggregateSubaccountVolumeRecord
 */
export declare class AggregateSubaccountVolumeRecord extends Message<AggregateSubaccountVolumeRecord> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.MarketVolume market_volumes = 2;
     */
    marketVolumes: MarketVolume[];
    constructor(data?: PartialMessage<AggregateSubaccountVolumeRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.AggregateSubaccountVolumeRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AggregateSubaccountVolumeRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AggregateSubaccountVolumeRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AggregateSubaccountVolumeRecord;
    static equals(a: AggregateSubaccountVolumeRecord | PlainMessage<AggregateSubaccountVolumeRecord> | undefined, b: AggregateSubaccountVolumeRecord | PlainMessage<AggregateSubaccountVolumeRecord> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.AggregateAccountVolumeRecord
 */
export declare class AggregateAccountVolumeRecord extends Message<AggregateAccountVolumeRecord> {
    /**
     * @generated from field: string account = 1;
     */
    account: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.MarketVolume market_volumes = 2;
     */
    marketVolumes: MarketVolume[];
    constructor(data?: PartialMessage<AggregateAccountVolumeRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.AggregateAccountVolumeRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AggregateAccountVolumeRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AggregateAccountVolumeRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AggregateAccountVolumeRecord;
    static equals(a: AggregateAccountVolumeRecord | PlainMessage<AggregateAccountVolumeRecord> | undefined, b: AggregateAccountVolumeRecord | PlainMessage<AggregateAccountVolumeRecord> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.MarketVolume
 */
export declare class MarketVolume extends Message<MarketVolume> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.VolumeRecord volume = 2;
     */
    volume?: VolumeRecord;
    constructor(data?: PartialMessage<MarketVolume>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MarketVolume";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MarketVolume;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MarketVolume;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MarketVolume;
    static equals(a: MarketVolume | PlainMessage<MarketVolume> | undefined, b: MarketVolume | PlainMessage<MarketVolume> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.DenomDecimals
 */
export declare class DenomDecimals extends Message<DenomDecimals> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: uint64 decimals = 2;
     */
    decimals: bigint;
    constructor(data?: PartialMessage<DenomDecimals>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DenomDecimals";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DenomDecimals;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DenomDecimals;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DenomDecimals;
    static equals(a: DenomDecimals | PlainMessage<DenomDecimals> | undefined, b: DenomDecimals | PlainMessage<DenomDecimals> | undefined): boolean;
}
//# sourceMappingURL=exchange_pb.d.ts.map