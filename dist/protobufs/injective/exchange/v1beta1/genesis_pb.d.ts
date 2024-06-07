import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { AggregateSubaccountVolumeRecord, BinaryOptionsMarket, CampaignRewardPool, DenomDecimals, Deposit, DerivativeLimitOrder, DerivativeMarket, DerivativeMarketOrder, DerivativeMarketSettlementInfo, ExpiryFuturesMarketInfo, FeeDiscountSchedule, FeeDiscountTierTTL, MarketFeeMultiplier, MarketVolume, Params, PerpetualMarketFunding, PerpetualMarketInfo, Position, SpotLimitOrder, SpotMarket, SubaccountTradeNonce, TradeRecords, TradingRewardCampaignInfo } from "./exchange_pb.js";
/**
 * GenesisState defines the exchange module's genesis state.
 *
 * @generated from message injective.exchange.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines all the parameters of related to exchange.
     *
     * @generated from field: injective.exchange.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * spot_markets is an array containing the genesis trade pairs
     *
     * @generated from field: repeated injective.exchange.v1beta1.SpotMarket spot_markets = 2;
     */
    spotMarkets: SpotMarket[];
    /**
     * derivative_markets is an array containing the genesis derivative markets
     *
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeMarket derivative_markets = 3;
     */
    derivativeMarkets: DerivativeMarket[];
    /**
     * spot_orderbook defines the spot exchange limit orderbook active at genesis.
     *
     * @generated from field: repeated injective.exchange.v1beta1.SpotOrderBook spot_orderbook = 4;
     */
    spotOrderbook: SpotOrderBook[];
    /**
     * derivative_orderbook defines the derivative exchange limit orderbook active
     * at genesis.
     *
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeOrderBook derivative_orderbook = 5;
     */
    derivativeOrderbook: DerivativeOrderBook[];
    /**
     * balances defines the exchange users balances active at genesis.
     *
     * @generated from field: repeated injective.exchange.v1beta1.Balance balances = 6;
     */
    balances: Balance[];
    /**
     * positions defines the exchange derivative positions at genesis
     *
     * @generated from field: repeated injective.exchange.v1beta1.DerivativePosition positions = 7;
     */
    positions: DerivativePosition[];
    /**
     * subaccount_trade_nonces defines the subaccount trade nonces for the
     * subaccounts at genesis
     *
     * @generated from field: repeated injective.exchange.v1beta1.SubaccountNonce subaccount_trade_nonces = 8;
     */
    subaccountTradeNonces: SubaccountNonce[];
    /**
     * expiry_futures_market_info defines the market info for the expiry futures
     * markets at genesis
     *
     * @generated from field: repeated injective.exchange.v1beta1.ExpiryFuturesMarketInfoState expiry_futures_market_info_state = 9;
     */
    expiryFuturesMarketInfoState: ExpiryFuturesMarketInfoState[];
    /**
     * perpetual_market_info defines the market info for the perpetual derivative
     * markets at genesis
     *
     * @generated from field: repeated injective.exchange.v1beta1.PerpetualMarketInfo perpetual_market_info = 10;
     */
    perpetualMarketInfo: PerpetualMarketInfo[];
    /**
     * perpetual_market_funding_state defines the funding state for the perpetual
     * derivative markets at genesis
     *
     * @generated from field: repeated injective.exchange.v1beta1.PerpetualMarketFundingState perpetual_market_funding_state = 11;
     */
    perpetualMarketFundingState: PerpetualMarketFundingState[];
    /**
     * derivative_market_settlement_scheduled defines the scheduled markets for
     * settlement at genesis
     *
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeMarketSettlementInfo derivative_market_settlement_scheduled = 12;
     */
    derivativeMarketSettlementScheduled: DerivativeMarketSettlementInfo[];
    /**
     * sets spot markets as enabled
     *
     * @generated from field: bool is_spot_exchange_enabled = 13;
     */
    isSpotExchangeEnabled: boolean;
    /**
     * sets derivative markets as enabled
     *
     * @generated from field: bool is_derivatives_exchange_enabled = 14;
     */
    isDerivativesExchangeEnabled: boolean;
    /**
     * the current trading reward campaign info
     *
     * @generated from field: injective.exchange.v1beta1.TradingRewardCampaignInfo trading_reward_campaign_info = 15;
     */
    tradingRewardCampaignInfo?: TradingRewardCampaignInfo;
    /**
     * the current and upcoming trading reward campaign pools
     *
     * @generated from field: repeated injective.exchange.v1beta1.CampaignRewardPool trading_reward_pool_campaign_schedule = 16;
     */
    tradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    /**
     * the current trading reward account points
     *
     * @generated from field: repeated injective.exchange.v1beta1.TradingRewardCampaignAccountPoints trading_reward_campaign_account_points = 17;
     */
    tradingRewardCampaignAccountPoints: TradingRewardCampaignAccountPoints[];
    /**
     * the fee discount schedule
     *
     * @generated from field: injective.exchange.v1beta1.FeeDiscountSchedule fee_discount_schedule = 18;
     */
    feeDiscountSchedule?: FeeDiscountSchedule;
    /**
     * the cached fee discount account tiers with TTL
     *
     * @generated from field: repeated injective.exchange.v1beta1.FeeDiscountAccountTierTTL fee_discount_account_tier_ttl = 19;
     */
    feeDiscountAccountTierTtl: FeeDiscountAccountTierTTL[];
    /**
     * the fee discount paid by accounts in all buckets
     *
     * @generated from field: repeated injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts fee_discount_bucket_volume_accounts = 20;
     */
    feeDiscountBucketVolumeAccounts: FeeDiscountBucketVolumeAccounts[];
    /**
     * sets the first fee cycle as finished
     *
     * @generated from field: bool is_first_fee_cycle_finished = 21;
     */
    isFirstFeeCycleFinished: boolean;
    /**
     * the current and upcoming trading reward campaign pending pools
     *
     * @generated from field: repeated injective.exchange.v1beta1.CampaignRewardPool pending_trading_reward_pool_campaign_schedule = 22;
     */
    pendingTradingRewardPoolCampaignSchedule: CampaignRewardPool[];
    /**
     * the pending trading reward account points
     *
     * @generated from field: repeated injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints pending_trading_reward_campaign_account_points = 23;
     */
    pendingTradingRewardCampaignAccountPoints: TradingRewardCampaignAccountPendingPoints[];
    /**
     * the addresses opting out of trading rewards
     *
     * @generated from field: repeated string rewards_opt_out_addresses = 24;
     */
    rewardsOptOutAddresses: string[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TradeRecords historical_trade_records = 25;
     */
    historicalTradeRecords: TradeRecords[];
    /**
     * binary_options_markets is an array containing the genesis binary options
     * markets
     *
     * @generated from field: repeated injective.exchange.v1beta1.BinaryOptionsMarket binary_options_markets = 26;
     */
    binaryOptionsMarkets: BinaryOptionsMarket[];
    /**
     * binary_options_markets_scheduled_for_settlement contains the marketIDs of
     * binary options markets scheduled for next-block settlement
     *
     * @generated from field: repeated string binary_options_market_ids_scheduled_for_settlement = 27;
     */
    binaryOptionsMarketIdsScheduledForSettlement: string[];
    /**
     * spot_market_ids_scheduled_to_force_close defines the scheduled markets for
     * forced closings at genesis
     *
     * @generated from field: repeated string spot_market_ids_scheduled_to_force_close = 28;
     */
    spotMarketIdsScheduledToForceClose: string[];
    /**
     * denom_decimals defines the denom decimals for the exchange.
     *
     * @generated from field: repeated injective.exchange.v1beta1.DenomDecimals denom_decimals = 29;
     */
    denomDecimals: DenomDecimals[];
    /**
     * conditional_derivative_orderbook contains conditional orderbooks for all
     * markets (both lmit and market conditional orders)
     *
     * @generated from field: repeated injective.exchange.v1beta1.ConditionalDerivativeOrderBook conditional_derivative_orderbooks = 30;
     */
    conditionalDerivativeOrderbooks: ConditionalDerivativeOrderBook[];
    /**
     * market_fee_multipliers contains any non-default atomic order fee
     * multipliers
     *
     * @generated from field: repeated injective.exchange.v1beta1.MarketFeeMultiplier market_fee_multipliers = 31;
     */
    marketFeeMultipliers: MarketFeeMultiplier[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.OrderbookSequence orderbook_sequences = 32;
     */
    orderbookSequences: OrderbookSequence[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.AggregateSubaccountVolumeRecord subaccount_volumes = 33;
     */
    subaccountVolumes: AggregateSubaccountVolumeRecord[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.MarketVolume market_volumes = 34;
     */
    marketVolumes: MarketVolume[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.OrderbookSequence
 */
export declare class OrderbookSequence extends Message<OrderbookSequence> {
    /**
     * @generated from field: uint64 sequence = 1;
     */
    sequence: bigint;
    /**
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    constructor(data?: PartialMessage<OrderbookSequence>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.OrderbookSequence";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderbookSequence;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderbookSequence;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderbookSequence;
    static equals(a: OrderbookSequence | PlainMessage<OrderbookSequence> | undefined, b: OrderbookSequence | PlainMessage<OrderbookSequence> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.FeeDiscountAccountTierTTL
 */
export declare class FeeDiscountAccountTierTTL extends Message<FeeDiscountAccountTierTTL> {
    /**
     * @generated from field: string account = 1;
     */
    account: string;
    /**
     * @generated from field: injective.exchange.v1beta1.FeeDiscountTierTTL tier_ttl = 2;
     */
    tierTtl?: FeeDiscountTierTTL;
    constructor(data?: PartialMessage<FeeDiscountAccountTierTTL>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.FeeDiscountAccountTierTTL";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeDiscountAccountTierTTL;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeDiscountAccountTierTTL;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeDiscountAccountTierTTL;
    static equals(a: FeeDiscountAccountTierTTL | PlainMessage<FeeDiscountAccountTierTTL> | undefined, b: FeeDiscountAccountTierTTL | PlainMessage<FeeDiscountAccountTierTTL> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts
 */
export declare class FeeDiscountBucketVolumeAccounts extends Message<FeeDiscountBucketVolumeAccounts> {
    /**
     * @generated from field: int64 bucket_start_timestamp = 1;
     */
    bucketStartTimestamp: bigint;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.AccountVolume account_volume = 2;
     */
    accountVolume: AccountVolume[];
    constructor(data?: PartialMessage<FeeDiscountBucketVolumeAccounts>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.FeeDiscountBucketVolumeAccounts";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeDiscountBucketVolumeAccounts;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeDiscountBucketVolumeAccounts;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeDiscountBucketVolumeAccounts;
    static equals(a: FeeDiscountBucketVolumeAccounts | PlainMessage<FeeDiscountBucketVolumeAccounts> | undefined, b: FeeDiscountBucketVolumeAccounts | PlainMessage<FeeDiscountBucketVolumeAccounts> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.AccountVolume
 */
export declare class AccountVolume extends Message<AccountVolume> {
    /**
     * @generated from field: string account = 1;
     */
    account: string;
    /**
     * @generated from field: string volume = 2;
     */
    volume: string;
    constructor(data?: PartialMessage<AccountVolume>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.AccountVolume";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccountVolume;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccountVolume;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccountVolume;
    static equals(a: AccountVolume | PlainMessage<AccountVolume> | undefined, b: AccountVolume | PlainMessage<AccountVolume> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TradingRewardCampaignAccountPoints
 */
export declare class TradingRewardCampaignAccountPoints extends Message<TradingRewardCampaignAccountPoints> {
    /**
     * @generated from field: string account = 1;
     */
    account: string;
    /**
     * @generated from field: string points = 2;
     */
    points: string;
    constructor(data?: PartialMessage<TradingRewardCampaignAccountPoints>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TradingRewardCampaignAccountPoints";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradingRewardCampaignAccountPoints;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradingRewardCampaignAccountPoints;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradingRewardCampaignAccountPoints;
    static equals(a: TradingRewardCampaignAccountPoints | PlainMessage<TradingRewardCampaignAccountPoints> | undefined, b: TradingRewardCampaignAccountPoints | PlainMessage<TradingRewardCampaignAccountPoints> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints
 */
export declare class TradingRewardCampaignAccountPendingPoints extends Message<TradingRewardCampaignAccountPendingPoints> {
    /**
     * @generated from field: int64 reward_pool_start_timestamp = 1;
     */
    rewardPoolStartTimestamp: bigint;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TradingRewardCampaignAccountPoints account_points = 2;
     */
    accountPoints: TradingRewardCampaignAccountPoints[];
    constructor(data?: PartialMessage<TradingRewardCampaignAccountPendingPoints>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.TradingRewardCampaignAccountPendingPoints";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradingRewardCampaignAccountPendingPoints;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradingRewardCampaignAccountPendingPoints;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradingRewardCampaignAccountPendingPoints;
    static equals(a: TradingRewardCampaignAccountPendingPoints | PlainMessage<TradingRewardCampaignAccountPendingPoints> | undefined, b: TradingRewardCampaignAccountPendingPoints | PlainMessage<TradingRewardCampaignAccountPendingPoints> | undefined): boolean;
}
/**
 * Spot Exchange Limit Orderbook
 *
 * @generated from message injective.exchange.v1beta1.SpotOrderBook
 */
export declare class SpotOrderBook extends Message<SpotOrderBook> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: bool isBuySide = 2;
     */
    isBuySide: boolean;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SpotLimitOrder orders = 3;
     */
    orders: SpotLimitOrder[];
    constructor(data?: PartialMessage<SpotOrderBook>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SpotOrderBook";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotOrderBook;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotOrderBook;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotOrderBook;
    static equals(a: SpotOrderBook | PlainMessage<SpotOrderBook> | undefined, b: SpotOrderBook | PlainMessage<SpotOrderBook> | undefined): boolean;
}
/**
 * Derivative Exchange Limit Orderbook
 *
 * @generated from message injective.exchange.v1beta1.DerivativeOrderBook
 */
export declare class DerivativeOrderBook extends Message<DerivativeOrderBook> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: bool isBuySide = 2;
     */
    isBuySide: boolean;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeLimitOrder orders = 3;
     */
    orders: DerivativeLimitOrder[];
    constructor(data?: PartialMessage<DerivativeOrderBook>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DerivativeOrderBook";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeOrderBook;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeOrderBook;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeOrderBook;
    static equals(a: DerivativeOrderBook | PlainMessage<DerivativeOrderBook> | undefined, b: DerivativeOrderBook | PlainMessage<DerivativeOrderBook> | undefined): boolean;
}
/**
 * Orderbook containing limit & market conditional orders
 *
 * @generated from message injective.exchange.v1beta1.ConditionalDerivativeOrderBook
 */
export declare class ConditionalDerivativeOrderBook extends Message<ConditionalDerivativeOrderBook> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeLimitOrder limit_buy_orders = 2;
     */
    limitBuyOrders: DerivativeLimitOrder[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeMarketOrder market_buy_orders = 3;
     */
    marketBuyOrders: DerivativeMarketOrder[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeLimitOrder limit_sell_orders = 4;
     */
    limitSellOrders: DerivativeLimitOrder[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeMarketOrder market_sell_orders = 5;
     */
    marketSellOrders: DerivativeMarketOrder[];
    constructor(data?: PartialMessage<ConditionalDerivativeOrderBook>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.ConditionalDerivativeOrderBook";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConditionalDerivativeOrderBook;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConditionalDerivativeOrderBook;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConditionalDerivativeOrderBook;
    static equals(a: ConditionalDerivativeOrderBook | PlainMessage<ConditionalDerivativeOrderBook> | undefined, b: ConditionalDerivativeOrderBook | PlainMessage<ConditionalDerivativeOrderBook> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.Balance
 */
export declare class Balance extends Message<Balance> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    /**
     * @generated from field: injective.exchange.v1beta1.Deposit deposits = 3;
     */
    deposits?: Deposit;
    constructor(data?: PartialMessage<Balance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.Balance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Balance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Balance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Balance;
    static equals(a: Balance | PlainMessage<Balance> | undefined, b: Balance | PlainMessage<Balance> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.DerivativePosition
 */
export declare class DerivativePosition extends Message<DerivativePosition> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.Position position = 3;
     */
    position?: Position;
    constructor(data?: PartialMessage<DerivativePosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DerivativePosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativePosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativePosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativePosition;
    static equals(a: DerivativePosition | PlainMessage<DerivativePosition> | undefined, b: DerivativePosition | PlainMessage<DerivativePosition> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.SubaccountNonce
 */
export declare class SubaccountNonce extends Message<SubaccountNonce> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.SubaccountTradeNonce subaccount_trade_nonce = 2;
     */
    subaccountTradeNonce?: SubaccountTradeNonce;
    constructor(data?: PartialMessage<SubaccountNonce>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SubaccountNonce";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubaccountNonce;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubaccountNonce;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubaccountNonce;
    static equals(a: SubaccountNonce | PlainMessage<SubaccountNonce> | undefined, b: SubaccountNonce | PlainMessage<SubaccountNonce> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.ExpiryFuturesMarketInfoState
 */
export declare class ExpiryFuturesMarketInfoState extends Message<ExpiryFuturesMarketInfoState> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.ExpiryFuturesMarketInfo market_info = 2;
     */
    marketInfo?: ExpiryFuturesMarketInfo;
    constructor(data?: PartialMessage<ExpiryFuturesMarketInfoState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.ExpiryFuturesMarketInfoState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExpiryFuturesMarketInfoState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExpiryFuturesMarketInfoState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExpiryFuturesMarketInfoState;
    static equals(a: ExpiryFuturesMarketInfoState | PlainMessage<ExpiryFuturesMarketInfoState> | undefined, b: ExpiryFuturesMarketInfoState | PlainMessage<ExpiryFuturesMarketInfoState> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.PerpetualMarketFundingState
 */
export declare class PerpetualMarketFundingState extends Message<PerpetualMarketFundingState> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.PerpetualMarketFunding funding = 2;
     */
    funding?: PerpetualMarketFunding;
    constructor(data?: PartialMessage<PerpetualMarketFundingState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.PerpetualMarketFundingState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PerpetualMarketFundingState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PerpetualMarketFundingState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PerpetualMarketFundingState;
    static equals(a: PerpetualMarketFundingState | PlainMessage<PerpetualMarketFundingState> | undefined, b: PerpetualMarketFundingState | PlainMessage<PerpetualMarketFundingState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map