import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { CampaignRewardPool, DenomDecimals, FeeDiscountSchedule, MarketFeeMultiplier, MarketStatus, TradingRewardCampaignInfo } from "./exchange_pb.js";
import { OracleType } from "../../oracle/v1beta1/oracle_pb.js";
import { CommunityPoolSpendProposal } from "../../../cosmos/distribution/v1beta1/distribution_pb.js";
/**
 * @generated from enum injective.exchange.v1beta1.ExchangeType
 */
export declare enum ExchangeType {
    /**
     * @generated from enum value: EXCHANGE_UNSPECIFIED = 0;
     */
    EXCHANGE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: SPOT = 1;
     */
    SPOT = 1,
    /**
     * @generated from enum value: DERIVATIVES = 2;
     */
    DERIVATIVES = 2
}
/**
 * @generated from message injective.exchange.v1beta1.SpotMarketParamUpdateProposal
 */
export declare class SpotMarketParamUpdateProposal extends Message<SpotMarketParamUpdateProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string market_id = 3;
     */
    marketId: string;
    /**
     * maker_fee_rate defines the trade fee rate for makers on the spot market
     *
     * @generated from field: string maker_fee_rate = 4;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the trade fee rate for takers on the spot market
     *
     * @generated from field: string taker_fee_rate = 5;
     */
    takerFeeRate: string;
    /**
     * relayer_fee_share_rate defines the relayer fee share rate for the spot
     * market
     *
     * @generated from field: string relayer_fee_share_rate = 6;
     */
    relayerFeeShareRate: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     *
     * @generated from field: string min_price_tick_size = 7;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     *
     * @generated from field: string min_quantity_tick_size = 8;
     */
    minQuantityTickSize: string;
    /**
     * @generated from field: injective.exchange.v1beta1.MarketStatus status = 9;
     */
    status: MarketStatus;
    constructor(data?: PartialMessage<SpotMarketParamUpdateProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SpotMarketParamUpdateProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotMarketParamUpdateProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotMarketParamUpdateProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotMarketParamUpdateProposal;
    static equals(a: SpotMarketParamUpdateProposal | PlainMessage<SpotMarketParamUpdateProposal> | undefined, b: SpotMarketParamUpdateProposal | PlainMessage<SpotMarketParamUpdateProposal> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.ExchangeEnableProposal
 */
export declare class ExchangeEnableProposal extends Message<ExchangeEnableProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: injective.exchange.v1beta1.ExchangeType exchangeType = 3;
     */
    exchangeType: ExchangeType;
    constructor(data?: PartialMessage<ExchangeEnableProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.ExchangeEnableProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExchangeEnableProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExchangeEnableProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExchangeEnableProposal;
    static equals(a: ExchangeEnableProposal | PlainMessage<ExchangeEnableProposal> | undefined, b: ExchangeEnableProposal | PlainMessage<ExchangeEnableProposal> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.BatchExchangeModificationProposal
 */
export declare class BatchExchangeModificationProposal extends Message<BatchExchangeModificationProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SpotMarketParamUpdateProposal spot_market_param_update_proposals = 3;
     */
    spotMarketParamUpdateProposals: SpotMarketParamUpdateProposal[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal derivative_market_param_update_proposals = 4;
     */
    derivativeMarketParamUpdateProposals: DerivativeMarketParamUpdateProposal[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SpotMarketLaunchProposal spot_market_launch_proposals = 5;
     */
    spotMarketLaunchProposals: SpotMarketLaunchProposal[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.PerpetualMarketLaunchProposal perpetual_market_launch_proposals = 6;
     */
    perpetualMarketLaunchProposals: PerpetualMarketLaunchProposal[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal expiry_futures_market_launch_proposals = 7;
     */
    expiryFuturesMarketLaunchProposals: ExpiryFuturesMarketLaunchProposal[];
    /**
     * @generated from field: injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal trading_reward_campaign_update_proposal = 8;
     */
    tradingRewardCampaignUpdateProposal?: TradingRewardCampaignUpdateProposal;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal binary_options_market_launch_proposals = 9;
     */
    binaryOptionsMarketLaunchProposals: BinaryOptionsMarketLaunchProposal[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal binary_options_param_update_proposals = 10;
     */
    binaryOptionsParamUpdateProposals: BinaryOptionsMarketParamUpdateProposal[];
    /**
     * @generated from field: injective.exchange.v1beta1.UpdateDenomDecimalsProposal denom_decimals_update_proposal = 11;
     */
    denomDecimalsUpdateProposal?: UpdateDenomDecimalsProposal;
    /**
     * @generated from field: injective.exchange.v1beta1.FeeDiscountProposal fee_discount_proposal = 12;
     */
    feeDiscountProposal?: FeeDiscountProposal;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.MarketForcedSettlementProposal market_forced_settlement_proposals = 13;
     */
    marketForcedSettlementProposals: MarketForcedSettlementProposal[];
    constructor(data?: PartialMessage<BatchExchangeModificationProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.BatchExchangeModificationProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchExchangeModificationProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchExchangeModificationProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchExchangeModificationProposal;
    static equals(a: BatchExchangeModificationProposal | PlainMessage<BatchExchangeModificationProposal> | undefined, b: BatchExchangeModificationProposal | PlainMessage<BatchExchangeModificationProposal> | undefined): boolean;
}
/**
 * SpotMarketLaunchProposal defines a SDK message for proposing a new spot
 * market through governance
 *
 * @generated from message injective.exchange.v1beta1.SpotMarketLaunchProposal
 */
export declare class SpotMarketLaunchProposal extends Message<SpotMarketLaunchProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * Ticker for the spot market.
     *
     * @generated from field: string ticker = 3;
     */
    ticker: string;
    /**
     * type of coin to use as the base currency
     *
     * @generated from field: string base_denom = 4;
     */
    baseDenom: string;
    /**
     * type of coin to use as the quote currency
     *
     * @generated from field: string quote_denom = 5;
     */
    quoteDenom: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price
     *
     * @generated from field: string min_price_tick_size = 6;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     *
     * @generated from field: string min_quantity_tick_size = 7;
     */
    minQuantityTickSize: string;
    /**
     * maker_fee_rate defines the fee percentage makers pay when trading
     *
     * @generated from field: string maker_fee_rate = 8;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the fee percentage takers pay when trading
     *
     * @generated from field: string taker_fee_rate = 9;
     */
    takerFeeRate: string;
    constructor(data?: PartialMessage<SpotMarketLaunchProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SpotMarketLaunchProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotMarketLaunchProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotMarketLaunchProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotMarketLaunchProposal;
    static equals(a: SpotMarketLaunchProposal | PlainMessage<SpotMarketLaunchProposal> | undefined, b: SpotMarketLaunchProposal | PlainMessage<SpotMarketLaunchProposal> | undefined): boolean;
}
/**
 * PerpetualMarketLaunchProposal defines a SDK message for proposing a new
 * perpetual futures market through governance
 *
 * @generated from message injective.exchange.v1beta1.PerpetualMarketLaunchProposal
 */
export declare class PerpetualMarketLaunchProposal extends Message<PerpetualMarketLaunchProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * Ticker for the derivative market.
     *
     * @generated from field: string ticker = 3;
     */
    ticker: string;
    /**
     * type of coin to use as the base currency
     *
     * @generated from field: string quote_denom = 4;
     */
    quoteDenom: string;
    /**
     * Oracle base currency
     *
     * @generated from field: string oracle_base = 5;
     */
    oracleBase: string;
    /**
     * Oracle quote currency
     *
     * @generated from field: string oracle_quote = 6;
     */
    oracleQuote: string;
    /**
     * Scale factor for oracle prices.
     *
     * @generated from field: uint32 oracle_scale_factor = 7;
     */
    oracleScaleFactor: number;
    /**
     * Oracle type
     *
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 8;
     */
    oracleType: OracleType;
    /**
     * initial_margin_ratio defines the initial margin ratio for the derivative
     * market
     *
     * @generated from field: string initial_margin_ratio = 9;
     */
    initialMarginRatio: string;
    /**
     * maintenance_margin_ratio defines the maintenance margin ratio for the
     * derivative market
     *
     * @generated from field: string maintenance_margin_ratio = 10;
     */
    maintenanceMarginRatio: string;
    /**
     * maker_fee_rate defines the exchange trade fee for makers for the derivative
     * market
     *
     * @generated from field: string maker_fee_rate = 11;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the exchange trade fee for takers for the derivative
     * market
     *
     * @generated from field: string taker_fee_rate = 12;
     */
    takerFeeRate: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     *
     * @generated from field: string min_price_tick_size = 13;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     *
     * @generated from field: string min_quantity_tick_size = 14;
     */
    minQuantityTickSize: string;
    constructor(data?: PartialMessage<PerpetualMarketLaunchProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.PerpetualMarketLaunchProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PerpetualMarketLaunchProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PerpetualMarketLaunchProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PerpetualMarketLaunchProposal;
    static equals(a: PerpetualMarketLaunchProposal | PlainMessage<PerpetualMarketLaunchProposal> | undefined, b: PerpetualMarketLaunchProposal | PlainMessage<PerpetualMarketLaunchProposal> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal
 */
export declare class BinaryOptionsMarketLaunchProposal extends Message<BinaryOptionsMarketLaunchProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * Ticker for the derivative contract.
     *
     * @generated from field: string ticker = 3;
     */
    ticker: string;
    /**
     * Oracle symbol
     *
     * @generated from field: string oracle_symbol = 4;
     */
    oracleSymbol: string;
    /**
     * Oracle Provider
     *
     * @generated from field: string oracle_provider = 5;
     */
    oracleProvider: string;
    /**
     * Oracle type
     *
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 6;
     */
    oracleType: OracleType;
    /**
     * Scale factor for oracle prices.
     *
     * @generated from field: uint32 oracle_scale_factor = 7;
     */
    oracleScaleFactor: number;
    /**
     * expiration timestamp
     *
     * @generated from field: int64 expiration_timestamp = 8;
     */
    expirationTimestamp: bigint;
    /**
     * expiration timestamp
     *
     * @generated from field: int64 settlement_timestamp = 9;
     */
    settlementTimestamp: bigint;
    /**
     * admin of the market
     *
     * @generated from field: string admin = 10;
     */
    admin: string;
    /**
     * Address of the quote currency denomination for the binary options contract
     *
     * @generated from field: string quote_denom = 11;
     */
    quoteDenom: string;
    /**
     * maker_fee_rate defines the maker fee rate of a binary options market
     *
     * @generated from field: string maker_fee_rate = 12;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the taker fee rate of a derivative market
     *
     * @generated from field: string taker_fee_rate = 13;
     */
    takerFeeRate: string;
    /**
     * min_price_tick_size defines the minimum tick size that the price and margin
     * required for orders in the market
     *
     * @generated from field: string min_price_tick_size = 14;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the quantity
     * required for orders in the market
     *
     * @generated from field: string min_quantity_tick_size = 15;
     */
    minQuantityTickSize: string;
    constructor(data?: PartialMessage<BinaryOptionsMarketLaunchProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.BinaryOptionsMarketLaunchProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BinaryOptionsMarketLaunchProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BinaryOptionsMarketLaunchProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BinaryOptionsMarketLaunchProposal;
    static equals(a: BinaryOptionsMarketLaunchProposal | PlainMessage<BinaryOptionsMarketLaunchProposal> | undefined, b: BinaryOptionsMarketLaunchProposal | PlainMessage<BinaryOptionsMarketLaunchProposal> | undefined): boolean;
}
/**
 * ExpiryFuturesMarketLaunchProposal defines a SDK message for proposing a new
 * expiry futures market through governance
 *
 * @generated from message injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal
 */
export declare class ExpiryFuturesMarketLaunchProposal extends Message<ExpiryFuturesMarketLaunchProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * Ticker for the derivative market.
     *
     * @generated from field: string ticker = 3;
     */
    ticker: string;
    /**
     * type of coin to use as the quote currency
     *
     * @generated from field: string quote_denom = 4;
     */
    quoteDenom: string;
    /**
     * Oracle base currency
     *
     * @generated from field: string oracle_base = 5;
     */
    oracleBase: string;
    /**
     * Oracle quote currency
     *
     * @generated from field: string oracle_quote = 6;
     */
    oracleQuote: string;
    /**
     * Scale factor for oracle prices.
     *
     * @generated from field: uint32 oracle_scale_factor = 7;
     */
    oracleScaleFactor: number;
    /**
     * Oracle type
     *
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 8;
     */
    oracleType: OracleType;
    /**
     * Expiration time of the market
     *
     * @generated from field: int64 expiry = 9;
     */
    expiry: bigint;
    /**
     * initial_margin_ratio defines the initial margin ratio for the derivative
     * market
     *
     * @generated from field: string initial_margin_ratio = 10;
     */
    initialMarginRatio: string;
    /**
     * maintenance_margin_ratio defines the maintenance margin ratio for the
     * derivative market
     *
     * @generated from field: string maintenance_margin_ratio = 11;
     */
    maintenanceMarginRatio: string;
    /**
     * maker_fee_rate defines the exchange trade fee for makers for the derivative
     * market
     *
     * @generated from field: string maker_fee_rate = 12;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the exchange trade fee for takers for the derivative
     * market
     *
     * @generated from field: string taker_fee_rate = 13;
     */
    takerFeeRate: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     *
     * @generated from field: string min_price_tick_size = 14;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     *
     * @generated from field: string min_quantity_tick_size = 15;
     */
    minQuantityTickSize: string;
    constructor(data?: PartialMessage<ExpiryFuturesMarketLaunchProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpiryFuturesMarketLaunchProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpiryFuturesMarketLaunchProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpiryFuturesMarketLaunchProposal;
    static equals(a: ExpiryFuturesMarketLaunchProposal | PlainMessage<ExpiryFuturesMarketLaunchProposal> | undefined, b: ExpiryFuturesMarketLaunchProposal | PlainMessage<ExpiryFuturesMarketLaunchProposal> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal
 */
export declare class DerivativeMarketParamUpdateProposal extends Message<DerivativeMarketParamUpdateProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string market_id = 3;
     */
    marketId: string;
    /**
     * initial_margin_ratio defines the initial margin ratio for the derivative
     * market
     *
     * @generated from field: string initial_margin_ratio = 4;
     */
    initialMarginRatio: string;
    /**
     * maintenance_margin_ratio defines the maintenance margin ratio for the
     * derivative market
     *
     * @generated from field: string maintenance_margin_ratio = 5;
     */
    maintenanceMarginRatio: string;
    /**
     * maker_fee_rate defines the exchange trade fee for makers for the derivative
     * market
     *
     * @generated from field: string maker_fee_rate = 6;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the exchange trade fee for takers for the derivative
     * market
     *
     * @generated from field: string taker_fee_rate = 7;
     */
    takerFeeRate: string;
    /**
     * relayer_fee_share_rate defines the relayer fee share rate for the
     * derivative market
     *
     * @generated from field: string relayer_fee_share_rate = 8;
     */
    relayerFeeShareRate: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     *
     * @generated from field: string min_price_tick_size = 9;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     *
     * @generated from field: string min_quantity_tick_size = 10;
     */
    minQuantityTickSize: string;
    /**
     * hourly_interest_rate defines the hourly interest rate
     *
     * @generated from field: string HourlyInterestRate = 11;
     */
    HourlyInterestRate: string;
    /**
     * hourly_funding_rate_cap defines the maximum absolute value of the hourly
     * funding rate
     *
     * @generated from field: string HourlyFundingRateCap = 12;
     */
    HourlyFundingRateCap: string;
    /**
     * @generated from field: injective.exchange.v1beta1.MarketStatus status = 13;
     */
    status: MarketStatus;
    /**
     * @generated from field: injective.exchange.v1beta1.OracleParams oracle_params = 14;
     */
    oracleParams?: OracleParams;
    constructor(data?: PartialMessage<DerivativeMarketParamUpdateProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeMarketParamUpdateProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeMarketParamUpdateProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeMarketParamUpdateProposal;
    static equals(a: DerivativeMarketParamUpdateProposal | PlainMessage<DerivativeMarketParamUpdateProposal> | undefined, b: DerivativeMarketParamUpdateProposal | PlainMessage<DerivativeMarketParamUpdateProposal> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.MarketForcedSettlementProposal
 */
export declare class MarketForcedSettlementProposal extends Message<MarketForcedSettlementProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string market_id = 3;
     */
    marketId: string;
    /**
     * @generated from field: string settlement_price = 4;
     */
    settlementPrice: string;
    constructor(data?: PartialMessage<MarketForcedSettlementProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MarketForcedSettlementProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MarketForcedSettlementProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MarketForcedSettlementProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MarketForcedSettlementProposal;
    static equals(a: MarketForcedSettlementProposal | PlainMessage<MarketForcedSettlementProposal> | undefined, b: MarketForcedSettlementProposal | PlainMessage<MarketForcedSettlementProposal> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.UpdateDenomDecimalsProposal
 */
export declare class UpdateDenomDecimalsProposal extends Message<UpdateDenomDecimalsProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DenomDecimals denom_decimals = 3;
     */
    denomDecimals: DenomDecimals[];
    constructor(data?: PartialMessage<UpdateDenomDecimalsProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.UpdateDenomDecimalsProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDenomDecimalsProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDenomDecimalsProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDenomDecimalsProposal;
    static equals(a: UpdateDenomDecimalsProposal | PlainMessage<UpdateDenomDecimalsProposal> | undefined, b: UpdateDenomDecimalsProposal | PlainMessage<UpdateDenomDecimalsProposal> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal
 */
export declare class BinaryOptionsMarketParamUpdateProposal extends Message<BinaryOptionsMarketParamUpdateProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string market_id = 3;
     */
    marketId: string;
    /**
     * maker_fee_rate defines the exchange trade fee for makers for the derivative
     * market
     *
     * @generated from field: string maker_fee_rate = 4;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the exchange trade fee for takers for the derivative
     * market
     *
     * @generated from field: string taker_fee_rate = 5;
     */
    takerFeeRate: string;
    /**
     * relayer_fee_share_rate defines the relayer fee share rate for the
     * derivative market
     *
     * @generated from field: string relayer_fee_share_rate = 6;
     */
    relayerFeeShareRate: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     *
     * @generated from field: string min_price_tick_size = 7;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     *
     * @generated from field: string min_quantity_tick_size = 8;
     */
    minQuantityTickSize: string;
    /**
     * expiration timestamp
     *
     * @generated from field: int64 expiration_timestamp = 9;
     */
    expirationTimestamp: bigint;
    /**
     * expiration timestamp
     *
     * @generated from field: int64 settlement_timestamp = 10;
     */
    settlementTimestamp: bigint;
    /**
     * new price at which market will be settled
     *
     * @generated from field: string settlement_price = 11;
     */
    settlementPrice: string;
    /**
     * admin of the market
     *
     * @generated from field: string admin = 12;
     */
    admin: string;
    /**
     * @generated from field: injective.exchange.v1beta1.MarketStatus status = 13;
     */
    status: MarketStatus;
    /**
     * @generated from field: injective.exchange.v1beta1.ProviderOracleParams oracle_params = 14;
     */
    oracleParams?: ProviderOracleParams;
    constructor(data?: PartialMessage<BinaryOptionsMarketParamUpdateProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.BinaryOptionsMarketParamUpdateProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BinaryOptionsMarketParamUpdateProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BinaryOptionsMarketParamUpdateProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BinaryOptionsMarketParamUpdateProposal;
    static equals(a: BinaryOptionsMarketParamUpdateProposal | PlainMessage<BinaryOptionsMarketParamUpdateProposal> | undefined, b: BinaryOptionsMarketParamUpdateProposal | PlainMessage<BinaryOptionsMarketParamUpdateProposal> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.ProviderOracleParams
 */
export declare class ProviderOracleParams extends Message<ProviderOracleParams> {
    /**
     * Oracle base currency
     *
     * @generated from field: string symbol = 1;
     */
    symbol: string;
    /**
     * Oracle quote currency
     *
     * @generated from field: string provider = 2;
     */
    provider: string;
    /**
     * Scale factor for oracle prices.
     *
     * @generated from field: uint32 oracle_scale_factor = 3;
     */
    oracleScaleFactor: number;
    /**
     * Oracle type
     *
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 4;
     */
    oracleType: OracleType;
    constructor(data?: PartialMessage<ProviderOracleParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.ProviderOracleParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProviderOracleParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProviderOracleParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProviderOracleParams;
    static equals(a: ProviderOracleParams | PlainMessage<ProviderOracleParams> | undefined, b: ProviderOracleParams | PlainMessage<ProviderOracleParams> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.OracleParams
 */
export declare class OracleParams extends Message<OracleParams> {
    /**
     * Oracle base currency
     *
     * @generated from field: string oracle_base = 1;
     */
    oracleBase: string;
    /**
     * Oracle quote currency
     *
     * @generated from field: string oracle_quote = 2;
     */
    oracleQuote: string;
    /**
     * Scale factor for oracle prices.
     *
     * @generated from field: uint32 oracle_scale_factor = 3;
     */
    oracleScaleFactor: number;
    /**
     * Oracle type
     *
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 4;
     */
    oracleType: OracleType;
    constructor(data?: PartialMessage<OracleParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.OracleParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OracleParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OracleParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OracleParams;
    static equals(a: OracleParams | PlainMessage<OracleParams> | undefined, b: OracleParams | PlainMessage<OracleParams> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal
 */
export declare class TradingRewardCampaignLaunchProposal extends Message<TradingRewardCampaignLaunchProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: injective.exchange.v1beta1.TradingRewardCampaignInfo campaign_info = 3;
     */
    campaignInfo?: TradingRewardCampaignInfo;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.CampaignRewardPool campaign_reward_pools = 4;
     */
    campaignRewardPools: CampaignRewardPool[];
    constructor(data?: PartialMessage<TradingRewardCampaignLaunchProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TradingRewardCampaignLaunchProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradingRewardCampaignLaunchProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradingRewardCampaignLaunchProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradingRewardCampaignLaunchProposal;
    static equals(a: TradingRewardCampaignLaunchProposal | PlainMessage<TradingRewardCampaignLaunchProposal> | undefined, b: TradingRewardCampaignLaunchProposal | PlainMessage<TradingRewardCampaignLaunchProposal> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal
 */
export declare class TradingRewardCampaignUpdateProposal extends Message<TradingRewardCampaignUpdateProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: injective.exchange.v1beta1.TradingRewardCampaignInfo campaign_info = 3;
     */
    campaignInfo?: TradingRewardCampaignInfo;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.CampaignRewardPool campaign_reward_pools_additions = 4;
     */
    campaignRewardPoolsAdditions: CampaignRewardPool[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.CampaignRewardPool campaign_reward_pools_updates = 5;
     */
    campaignRewardPoolsUpdates: CampaignRewardPool[];
    constructor(data?: PartialMessage<TradingRewardCampaignUpdateProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TradingRewardCampaignUpdateProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradingRewardCampaignUpdateProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradingRewardCampaignUpdateProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradingRewardCampaignUpdateProposal;
    static equals(a: TradingRewardCampaignUpdateProposal | PlainMessage<TradingRewardCampaignUpdateProposal> | undefined, b: TradingRewardCampaignUpdateProposal | PlainMessage<TradingRewardCampaignUpdateProposal> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.RewardPointUpdate
 */
export declare class RewardPointUpdate extends Message<RewardPointUpdate> {
    /**
     * @generated from field: string account_address = 1;
     */
    accountAddress: string;
    /**
     * new_points overwrites the current trading reward points for the account
     *
     * @generated from field: string new_points = 12;
     */
    newPoints: string;
    constructor(data?: PartialMessage<RewardPointUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.RewardPointUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RewardPointUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RewardPointUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RewardPointUpdate;
    static equals(a: RewardPointUpdate | PlainMessage<RewardPointUpdate> | undefined, b: RewardPointUpdate | PlainMessage<RewardPointUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal
 */
export declare class TradingRewardPendingPointsUpdateProposal extends Message<TradingRewardPendingPointsUpdateProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: int64 pending_pool_timestamp = 3;
     */
    pendingPoolTimestamp: bigint;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.RewardPointUpdate reward_point_updates = 4;
     */
    rewardPointUpdates: RewardPointUpdate[];
    constructor(data?: PartialMessage<TradingRewardPendingPointsUpdateProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TradingRewardPendingPointsUpdateProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradingRewardPendingPointsUpdateProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradingRewardPendingPointsUpdateProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradingRewardPendingPointsUpdateProposal;
    static equals(a: TradingRewardPendingPointsUpdateProposal | PlainMessage<TradingRewardPendingPointsUpdateProposal> | undefined, b: TradingRewardPendingPointsUpdateProposal | PlainMessage<TradingRewardPendingPointsUpdateProposal> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.FeeDiscountProposal
 */
export declare class FeeDiscountProposal extends Message<FeeDiscountProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: injective.exchange.v1beta1.FeeDiscountSchedule schedule = 3;
     */
    schedule?: FeeDiscountSchedule;
    constructor(data?: PartialMessage<FeeDiscountProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.FeeDiscountProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeDiscountProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeDiscountProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeDiscountProposal;
    static equals(a: FeeDiscountProposal | PlainMessage<FeeDiscountProposal> | undefined, b: FeeDiscountProposal | PlainMessage<FeeDiscountProposal> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.BatchCommunityPoolSpendProposal
 */
export declare class BatchCommunityPoolSpendProposal extends Message<BatchCommunityPoolSpendProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated cosmos.distribution.v1beta1.CommunityPoolSpendProposal proposals = 3;
     */
    proposals: CommunityPoolSpendProposal[];
    constructor(data?: PartialMessage<BatchCommunityPoolSpendProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.BatchCommunityPoolSpendProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchCommunityPoolSpendProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchCommunityPoolSpendProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchCommunityPoolSpendProposal;
    static equals(a: BatchCommunityPoolSpendProposal | PlainMessage<BatchCommunityPoolSpendProposal> | undefined, b: BatchCommunityPoolSpendProposal | PlainMessage<BatchCommunityPoolSpendProposal> | undefined): boolean;
}
/**
 * AtomicMarketOrderFeeMultiplierScheduleProposal defines a SDK message for
 * proposing new atomic take fee multipliers for specified markets
 *
 * @generated from message injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal
 */
export declare class AtomicMarketOrderFeeMultiplierScheduleProposal extends Message<AtomicMarketOrderFeeMultiplierScheduleProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.MarketFeeMultiplier market_fee_multipliers = 3;
     */
    marketFeeMultipliers: MarketFeeMultiplier[];
    constructor(data?: PartialMessage<AtomicMarketOrderFeeMultiplierScheduleProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.AtomicMarketOrderFeeMultiplierScheduleProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AtomicMarketOrderFeeMultiplierScheduleProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AtomicMarketOrderFeeMultiplierScheduleProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AtomicMarketOrderFeeMultiplierScheduleProposal;
    static equals(a: AtomicMarketOrderFeeMultiplierScheduleProposal | PlainMessage<AtomicMarketOrderFeeMultiplierScheduleProposal> | undefined, b: AtomicMarketOrderFeeMultiplierScheduleProposal | PlainMessage<AtomicMarketOrderFeeMultiplierScheduleProposal> | undefined): boolean;
}
//# sourceMappingURL=proposal_pb.d.ts.map