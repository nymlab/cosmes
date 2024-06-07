import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { AccountRewards, BinaryOptionsMarket, CampaignRewardPool, DepositUpdate, DerivativeLimitOrder, DerivativeMarket, DerivativeMarketOrder, DerivativeOrder, DerivativeTradeLog, ExecutionType, ExpiryFuturesMarketInfo, FeeDiscountSchedule, Level, MarketFeeMultiplier, PerpetualMarketFunding, PerpetualMarketInfo, SpotLimitOrder, SpotMarket, SubaccountPosition, TradeLog, TradingRewardCampaignInfo } from "./exchange_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message injective.exchange.v1beta1.EventBatchSpotExecution
 */
export declare class EventBatchSpotExecution extends Message<EventBatchSpotExecution> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: bool is_buy = 2;
     */
    isBuy: boolean;
    /**
     * @generated from field: injective.exchange.v1beta1.ExecutionType executionType = 3;
     */
    executionType: ExecutionType;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.TradeLog trades = 4;
     */
    trades: TradeLog[];
    constructor(data?: PartialMessage<EventBatchSpotExecution>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventBatchSpotExecution";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBatchSpotExecution;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBatchSpotExecution;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBatchSpotExecution;
    static equals(a: EventBatchSpotExecution | PlainMessage<EventBatchSpotExecution> | undefined, b: EventBatchSpotExecution | PlainMessage<EventBatchSpotExecution> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventBatchDerivativeExecution
 */
export declare class EventBatchDerivativeExecution extends Message<EventBatchDerivativeExecution> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: bool is_buy = 2;
     */
    isBuy: boolean;
    /**
     * @generated from field: bool is_liquidation = 3;
     */
    isLiquidation: boolean;
    /**
     * nil for time expiry futures
     *
     * @generated from field: string cumulative_funding = 4;
     */
    cumulativeFunding: string;
    /**
     * @generated from field: injective.exchange.v1beta1.ExecutionType executionType = 5;
     */
    executionType: ExecutionType;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeTradeLog trades = 6;
     */
    trades: DerivativeTradeLog[];
    constructor(data?: PartialMessage<EventBatchDerivativeExecution>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventBatchDerivativeExecution";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBatchDerivativeExecution;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBatchDerivativeExecution;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBatchDerivativeExecution;
    static equals(a: EventBatchDerivativeExecution | PlainMessage<EventBatchDerivativeExecution> | undefined, b: EventBatchDerivativeExecution | PlainMessage<EventBatchDerivativeExecution> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventLostFundsFromLiquidation
 */
export declare class EventLostFundsFromLiquidation extends Message<EventLostFundsFromLiquidation> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: bytes subaccount_id = 2;
     */
    subaccountId: Uint8Array;
    /**
     * @generated from field: string lost_funds_from_available_during_payout = 3;
     */
    lostFundsFromAvailableDuringPayout: string;
    /**
     * @generated from field: string lost_funds_from_order_cancels = 4;
     */
    lostFundsFromOrderCancels: string;
    constructor(data?: PartialMessage<EventLostFundsFromLiquidation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventLostFundsFromLiquidation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventLostFundsFromLiquidation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventLostFundsFromLiquidation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventLostFundsFromLiquidation;
    static equals(a: EventLostFundsFromLiquidation | PlainMessage<EventLostFundsFromLiquidation> | undefined, b: EventLostFundsFromLiquidation | PlainMessage<EventLostFundsFromLiquidation> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventBatchDerivativePosition
 */
export declare class EventBatchDerivativePosition extends Message<EventBatchDerivativePosition> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SubaccountPosition positions = 2;
     */
    positions: SubaccountPosition[];
    constructor(data?: PartialMessage<EventBatchDerivativePosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventBatchDerivativePosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBatchDerivativePosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBatchDerivativePosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBatchDerivativePosition;
    static equals(a: EventBatchDerivativePosition | PlainMessage<EventBatchDerivativePosition> | undefined, b: EventBatchDerivativePosition | PlainMessage<EventBatchDerivativePosition> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventDerivativeMarketPaused
 */
export declare class EventDerivativeMarketPaused extends Message<EventDerivativeMarketPaused> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: string settle_price = 2;
     */
    settlePrice: string;
    /**
     * @generated from field: string total_missing_funds = 3;
     */
    totalMissingFunds: string;
    /**
     * @generated from field: string missing_funds_rate = 4;
     */
    missingFundsRate: string;
    constructor(data?: PartialMessage<EventDerivativeMarketPaused>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventDerivativeMarketPaused";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventDerivativeMarketPaused;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventDerivativeMarketPaused;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventDerivativeMarketPaused;
    static equals(a: EventDerivativeMarketPaused | PlainMessage<EventDerivativeMarketPaused> | undefined, b: EventDerivativeMarketPaused | PlainMessage<EventDerivativeMarketPaused> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventMarketBeyondBankruptcy
 */
export declare class EventMarketBeyondBankruptcy extends Message<EventMarketBeyondBankruptcy> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: string settle_price = 2;
     */
    settlePrice: string;
    /**
     * @generated from field: string missing_market_funds = 3;
     */
    missingMarketFunds: string;
    constructor(data?: PartialMessage<EventMarketBeyondBankruptcy>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventMarketBeyondBankruptcy";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventMarketBeyondBankruptcy;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventMarketBeyondBankruptcy;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventMarketBeyondBankruptcy;
    static equals(a: EventMarketBeyondBankruptcy | PlainMessage<EventMarketBeyondBankruptcy> | undefined, b: EventMarketBeyondBankruptcy | PlainMessage<EventMarketBeyondBankruptcy> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventAllPositionsHaircut
 */
export declare class EventAllPositionsHaircut extends Message<EventAllPositionsHaircut> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: string settle_price = 2;
     */
    settlePrice: string;
    /**
     * @generated from field: string missing_funds_rate = 3;
     */
    missingFundsRate: string;
    constructor(data?: PartialMessage<EventAllPositionsHaircut>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventAllPositionsHaircut";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventAllPositionsHaircut;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventAllPositionsHaircut;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventAllPositionsHaircut;
    static equals(a: EventAllPositionsHaircut | PlainMessage<EventAllPositionsHaircut> | undefined, b: EventAllPositionsHaircut | PlainMessage<EventAllPositionsHaircut> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate
 */
export declare class EventBinaryOptionsMarketUpdate extends Message<EventBinaryOptionsMarketUpdate> {
    /**
     * @generated from field: injective.exchange.v1beta1.BinaryOptionsMarket market = 1;
     */
    market?: BinaryOptionsMarket;
    constructor(data?: PartialMessage<EventBinaryOptionsMarketUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventBinaryOptionsMarketUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBinaryOptionsMarketUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBinaryOptionsMarketUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBinaryOptionsMarketUpdate;
    static equals(a: EventBinaryOptionsMarketUpdate | PlainMessage<EventBinaryOptionsMarketUpdate> | undefined, b: EventBinaryOptionsMarketUpdate | PlainMessage<EventBinaryOptionsMarketUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventNewSpotOrders
 */
export declare class EventNewSpotOrders extends Message<EventNewSpotOrders> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SpotLimitOrder buy_orders = 2;
     */
    buyOrders: SpotLimitOrder[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SpotLimitOrder sell_orders = 3;
     */
    sellOrders: SpotLimitOrder[];
    constructor(data?: PartialMessage<EventNewSpotOrders>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventNewSpotOrders";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventNewSpotOrders;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventNewSpotOrders;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventNewSpotOrders;
    static equals(a: EventNewSpotOrders | PlainMessage<EventNewSpotOrders> | undefined, b: EventNewSpotOrders | PlainMessage<EventNewSpotOrders> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventNewDerivativeOrders
 */
export declare class EventNewDerivativeOrders extends Message<EventNewDerivativeOrders> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeLimitOrder buy_orders = 2;
     */
    buyOrders: DerivativeLimitOrder[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeLimitOrder sell_orders = 3;
     */
    sellOrders: DerivativeLimitOrder[];
    constructor(data?: PartialMessage<EventNewDerivativeOrders>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventNewDerivativeOrders";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventNewDerivativeOrders;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventNewDerivativeOrders;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventNewDerivativeOrders;
    static equals(a: EventNewDerivativeOrders | PlainMessage<EventNewDerivativeOrders> | undefined, b: EventNewDerivativeOrders | PlainMessage<EventNewDerivativeOrders> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventCancelSpotOrder
 */
export declare class EventCancelSpotOrder extends Message<EventCancelSpotOrder> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.SpotLimitOrder order = 2;
     */
    order?: SpotLimitOrder;
    constructor(data?: PartialMessage<EventCancelSpotOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventCancelSpotOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCancelSpotOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCancelSpotOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCancelSpotOrder;
    static equals(a: EventCancelSpotOrder | PlainMessage<EventCancelSpotOrder> | undefined, b: EventCancelSpotOrder | PlainMessage<EventCancelSpotOrder> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventSpotMarketUpdate
 */
export declare class EventSpotMarketUpdate extends Message<EventSpotMarketUpdate> {
    /**
     * @generated from field: injective.exchange.v1beta1.SpotMarket market = 1;
     */
    market?: SpotMarket;
    constructor(data?: PartialMessage<EventSpotMarketUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventSpotMarketUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSpotMarketUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSpotMarketUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSpotMarketUpdate;
    static equals(a: EventSpotMarketUpdate | PlainMessage<EventSpotMarketUpdate> | undefined, b: EventSpotMarketUpdate | PlainMessage<EventSpotMarketUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventPerpetualMarketUpdate
 */
export declare class EventPerpetualMarketUpdate extends Message<EventPerpetualMarketUpdate> {
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeMarket market = 1;
     */
    market?: DerivativeMarket;
    /**
     * @generated from field: injective.exchange.v1beta1.PerpetualMarketInfo perpetual_market_info = 2;
     */
    perpetualMarketInfo?: PerpetualMarketInfo;
    /**
     * @generated from field: injective.exchange.v1beta1.PerpetualMarketFunding funding = 3;
     */
    funding?: PerpetualMarketFunding;
    constructor(data?: PartialMessage<EventPerpetualMarketUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventPerpetualMarketUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventPerpetualMarketUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventPerpetualMarketUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventPerpetualMarketUpdate;
    static equals(a: EventPerpetualMarketUpdate | PlainMessage<EventPerpetualMarketUpdate> | undefined, b: EventPerpetualMarketUpdate | PlainMessage<EventPerpetualMarketUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate
 */
export declare class EventExpiryFuturesMarketUpdate extends Message<EventExpiryFuturesMarketUpdate> {
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeMarket market = 1;
     */
    market?: DerivativeMarket;
    /**
     * @generated from field: injective.exchange.v1beta1.ExpiryFuturesMarketInfo expiry_futures_market_info = 3;
     */
    expiryFuturesMarketInfo?: ExpiryFuturesMarketInfo;
    constructor(data?: PartialMessage<EventExpiryFuturesMarketUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventExpiryFuturesMarketUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventExpiryFuturesMarketUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventExpiryFuturesMarketUpdate;
    static equals(a: EventExpiryFuturesMarketUpdate | PlainMessage<EventExpiryFuturesMarketUpdate> | undefined, b: EventExpiryFuturesMarketUpdate | PlainMessage<EventExpiryFuturesMarketUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate
 */
export declare class EventPerpetualMarketFundingUpdate extends Message<EventPerpetualMarketFundingUpdate> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.PerpetualMarketFunding funding = 2;
     */
    funding?: PerpetualMarketFunding;
    /**
     * @generated from field: bool is_hourly_funding = 3;
     */
    isHourlyFunding: boolean;
    /**
     * @generated from field: string funding_rate = 4;
     */
    fundingRate: string;
    /**
     * @generated from field: string mark_price = 5;
     */
    markPrice: string;
    constructor(data?: PartialMessage<EventPerpetualMarketFundingUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventPerpetualMarketFundingUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventPerpetualMarketFundingUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventPerpetualMarketFundingUpdate;
    static equals(a: EventPerpetualMarketFundingUpdate | PlainMessage<EventPerpetualMarketFundingUpdate> | undefined, b: EventPerpetualMarketFundingUpdate | PlainMessage<EventPerpetualMarketFundingUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventSubaccountDeposit
 */
export declare class EventSubaccountDeposit extends Message<EventSubaccountDeposit> {
    /**
     * @generated from field: string src_address = 1;
     */
    srcAddress: string;
    /**
     * @generated from field: bytes subaccount_id = 2;
     */
    subaccountId: Uint8Array;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<EventSubaccountDeposit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventSubaccountDeposit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSubaccountDeposit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSubaccountDeposit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSubaccountDeposit;
    static equals(a: EventSubaccountDeposit | PlainMessage<EventSubaccountDeposit> | undefined, b: EventSubaccountDeposit | PlainMessage<EventSubaccountDeposit> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventSubaccountWithdraw
 */
export declare class EventSubaccountWithdraw extends Message<EventSubaccountWithdraw> {
    /**
     * @generated from field: bytes subaccount_id = 1;
     */
    subaccountId: Uint8Array;
    /**
     * @generated from field: string dst_address = 2;
     */
    dstAddress: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<EventSubaccountWithdraw>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventSubaccountWithdraw";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSubaccountWithdraw;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSubaccountWithdraw;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSubaccountWithdraw;
    static equals(a: EventSubaccountWithdraw | PlainMessage<EventSubaccountWithdraw> | undefined, b: EventSubaccountWithdraw | PlainMessage<EventSubaccountWithdraw> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventSubaccountBalanceTransfer
 */
export declare class EventSubaccountBalanceTransfer extends Message<EventSubaccountBalanceTransfer> {
    /**
     * @generated from field: string src_subaccount_id = 1;
     */
    srcSubaccountId: string;
    /**
     * @generated from field: string dst_subaccount_id = 2;
     */
    dstSubaccountId: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<EventSubaccountBalanceTransfer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventSubaccountBalanceTransfer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSubaccountBalanceTransfer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSubaccountBalanceTransfer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSubaccountBalanceTransfer;
    static equals(a: EventSubaccountBalanceTransfer | PlainMessage<EventSubaccountBalanceTransfer> | undefined, b: EventSubaccountBalanceTransfer | PlainMessage<EventSubaccountBalanceTransfer> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventBatchDepositUpdate
 */
export declare class EventBatchDepositUpdate extends Message<EventBatchDepositUpdate> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DepositUpdate deposit_updates = 1;
     */
    depositUpdates: DepositUpdate[];
    constructor(data?: PartialMessage<EventBatchDepositUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventBatchDepositUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBatchDepositUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBatchDepositUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBatchDepositUpdate;
    static equals(a: EventBatchDepositUpdate | PlainMessage<EventBatchDepositUpdate> | undefined, b: EventBatchDepositUpdate | PlainMessage<EventBatchDepositUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.DerivativeMarketOrderCancel
 */
export declare class DerivativeMarketOrderCancel extends Message<DerivativeMarketOrderCancel> {
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeMarketOrder market_order = 1;
     */
    marketOrder?: DerivativeMarketOrder;
    /**
     * @generated from field: string cancel_quantity = 2;
     */
    cancelQuantity: string;
    constructor(data?: PartialMessage<DerivativeMarketOrderCancel>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DerivativeMarketOrderCancel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeMarketOrderCancel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeMarketOrderCancel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeMarketOrderCancel;
    static equals(a: DerivativeMarketOrderCancel | PlainMessage<DerivativeMarketOrderCancel> | undefined, b: DerivativeMarketOrderCancel | PlainMessage<DerivativeMarketOrderCancel> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventCancelDerivativeOrder
 */
export declare class EventCancelDerivativeOrder extends Message<EventCancelDerivativeOrder> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: bool isLimitCancel = 2;
     */
    isLimitCancel: boolean;
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeLimitOrder limit_order = 3;
     */
    limitOrder?: DerivativeLimitOrder;
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeMarketOrderCancel market_order_cancel = 4;
     */
    marketOrderCancel?: DerivativeMarketOrderCancel;
    constructor(data?: PartialMessage<EventCancelDerivativeOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventCancelDerivativeOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCancelDerivativeOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCancelDerivativeOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCancelDerivativeOrder;
    static equals(a: EventCancelDerivativeOrder | PlainMessage<EventCancelDerivativeOrder> | undefined, b: EventCancelDerivativeOrder | PlainMessage<EventCancelDerivativeOrder> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventFeeDiscountSchedule
 */
export declare class EventFeeDiscountSchedule extends Message<EventFeeDiscountSchedule> {
    /**
     * @generated from field: injective.exchange.v1beta1.FeeDiscountSchedule schedule = 1;
     */
    schedule?: FeeDiscountSchedule;
    constructor(data?: PartialMessage<EventFeeDiscountSchedule>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventFeeDiscountSchedule";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventFeeDiscountSchedule;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventFeeDiscountSchedule;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventFeeDiscountSchedule;
    static equals(a: EventFeeDiscountSchedule | PlainMessage<EventFeeDiscountSchedule> | undefined, b: EventFeeDiscountSchedule | PlainMessage<EventFeeDiscountSchedule> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventTradingRewardCampaignUpdate
 */
export declare class EventTradingRewardCampaignUpdate extends Message<EventTradingRewardCampaignUpdate> {
    /**
     * @generated from field: injective.exchange.v1beta1.TradingRewardCampaignInfo campaign_info = 1;
     */
    campaignInfo?: TradingRewardCampaignInfo;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.CampaignRewardPool campaign_reward_pools = 2;
     */
    campaignRewardPools: CampaignRewardPool[];
    constructor(data?: PartialMessage<EventTradingRewardCampaignUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventTradingRewardCampaignUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventTradingRewardCampaignUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventTradingRewardCampaignUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventTradingRewardCampaignUpdate;
    static equals(a: EventTradingRewardCampaignUpdate | PlainMessage<EventTradingRewardCampaignUpdate> | undefined, b: EventTradingRewardCampaignUpdate | PlainMessage<EventTradingRewardCampaignUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventTradingRewardDistribution
 */
export declare class EventTradingRewardDistribution extends Message<EventTradingRewardDistribution> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.AccountRewards account_rewards = 1;
     */
    accountRewards: AccountRewards[];
    constructor(data?: PartialMessage<EventTradingRewardDistribution>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventTradingRewardDistribution";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventTradingRewardDistribution;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventTradingRewardDistribution;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventTradingRewardDistribution;
    static equals(a: EventTradingRewardDistribution | PlainMessage<EventTradingRewardDistribution> | undefined, b: EventTradingRewardDistribution | PlainMessage<EventTradingRewardDistribution> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventNewConditionalDerivativeOrder
 */
export declare class EventNewConditionalDerivativeOrder extends Message<EventNewConditionalDerivativeOrder> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeOrder order = 2;
     */
    order?: DerivativeOrder;
    /**
     * @generated from field: bytes hash = 3;
     */
    hash: Uint8Array;
    /**
     * @generated from field: bool is_market = 4;
     */
    isMarket: boolean;
    constructor(data?: PartialMessage<EventNewConditionalDerivativeOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventNewConditionalDerivativeOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventNewConditionalDerivativeOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventNewConditionalDerivativeOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventNewConditionalDerivativeOrder;
    static equals(a: EventNewConditionalDerivativeOrder | PlainMessage<EventNewConditionalDerivativeOrder> | undefined, b: EventNewConditionalDerivativeOrder | PlainMessage<EventNewConditionalDerivativeOrder> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder
 */
export declare class EventCancelConditionalDerivativeOrder extends Message<EventCancelConditionalDerivativeOrder> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: bool isLimitCancel = 2;
     */
    isLimitCancel: boolean;
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeLimitOrder limit_order = 3;
     */
    limitOrder?: DerivativeLimitOrder;
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeMarketOrder market_order = 4;
     */
    marketOrder?: DerivativeMarketOrder;
    constructor(data?: PartialMessage<EventCancelConditionalDerivativeOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventCancelConditionalDerivativeOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCancelConditionalDerivativeOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCancelConditionalDerivativeOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCancelConditionalDerivativeOrder;
    static equals(a: EventCancelConditionalDerivativeOrder | PlainMessage<EventCancelConditionalDerivativeOrder> | undefined, b: EventCancelConditionalDerivativeOrder | PlainMessage<EventCancelConditionalDerivativeOrder> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger
 */
export declare class EventConditionalDerivativeOrderTrigger extends Message<EventConditionalDerivativeOrderTrigger> {
    /**
     * @generated from field: bytes market_id = 1;
     */
    marketId: Uint8Array;
    /**
     * @generated from field: bool isLimitTrigger = 2;
     */
    isLimitTrigger: boolean;
    /**
     * @generated from field: bytes triggered_order_hash = 3;
     */
    triggeredOrderHash: Uint8Array;
    /**
     * @generated from field: bytes placed_order_hash = 4;
     */
    placedOrderHash: Uint8Array;
    constructor(data?: PartialMessage<EventConditionalDerivativeOrderTrigger>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventConditionalDerivativeOrderTrigger";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventConditionalDerivativeOrderTrigger;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventConditionalDerivativeOrderTrigger;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventConditionalDerivativeOrderTrigger;
    static equals(a: EventConditionalDerivativeOrderTrigger | PlainMessage<EventConditionalDerivativeOrderTrigger> | undefined, b: EventConditionalDerivativeOrderTrigger | PlainMessage<EventConditionalDerivativeOrderTrigger> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventOrderFail
 */
export declare class EventOrderFail extends Message<EventOrderFail> {
    /**
     * @generated from field: bytes account = 1;
     */
    account: Uint8Array;
    /**
     * @generated from field: repeated bytes hashes = 2;
     */
    hashes: Uint8Array[];
    /**
     * @generated from field: repeated uint32 flags = 3;
     */
    flags: number[];
    constructor(data?: PartialMessage<EventOrderFail>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventOrderFail";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventOrderFail;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventOrderFail;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventOrderFail;
    static equals(a: EventOrderFail | PlainMessage<EventOrderFail> | undefined, b: EventOrderFail | PlainMessage<EventOrderFail> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventAtomicMarketOrderFeeMultipliersUpdated
 */
export declare class EventAtomicMarketOrderFeeMultipliersUpdated extends Message<EventAtomicMarketOrderFeeMultipliersUpdated> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.MarketFeeMultiplier market_fee_multipliers = 1;
     */
    marketFeeMultipliers: MarketFeeMultiplier[];
    constructor(data?: PartialMessage<EventAtomicMarketOrderFeeMultipliersUpdated>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventAtomicMarketOrderFeeMultipliersUpdated";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventAtomicMarketOrderFeeMultipliersUpdated;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventAtomicMarketOrderFeeMultipliersUpdated;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventAtomicMarketOrderFeeMultipliersUpdated;
    static equals(a: EventAtomicMarketOrderFeeMultipliersUpdated | PlainMessage<EventAtomicMarketOrderFeeMultipliersUpdated> | undefined, b: EventAtomicMarketOrderFeeMultipliersUpdated | PlainMessage<EventAtomicMarketOrderFeeMultipliersUpdated> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.EventOrderbookUpdate
 */
export declare class EventOrderbookUpdate extends Message<EventOrderbookUpdate> {
    /**
     * @generated from field: repeated injective.exchange.v1beta1.OrderbookUpdate spot_updates = 1;
     */
    spotUpdates: OrderbookUpdate[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.OrderbookUpdate derivative_updates = 2;
     */
    derivativeUpdates: OrderbookUpdate[];
    constructor(data?: PartialMessage<EventOrderbookUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.EventOrderbookUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventOrderbookUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventOrderbookUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventOrderbookUpdate;
    static equals(a: EventOrderbookUpdate | PlainMessage<EventOrderbookUpdate> | undefined, b: EventOrderbookUpdate | PlainMessage<EventOrderbookUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.OrderbookUpdate
 */
export declare class OrderbookUpdate extends Message<OrderbookUpdate> {
    /**
     * @generated from field: uint64 seq = 1;
     */
    seq: bigint;
    /**
     * @generated from field: injective.exchange.v1beta1.Orderbook orderbook = 2;
     */
    orderbook?: Orderbook;
    constructor(data?: PartialMessage<OrderbookUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.OrderbookUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderbookUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderbookUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderbookUpdate;
    static equals(a: OrderbookUpdate | PlainMessage<OrderbookUpdate> | undefined, b: OrderbookUpdate | PlainMessage<OrderbookUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.Orderbook
 */
export declare class Orderbook extends Message<Orderbook> {
    /**
     * @generated from field: bytes market_id = 1;
     */
    marketId: Uint8Array;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.Level buy_levels = 2;
     */
    buyLevels: Level[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.Level sell_levels = 3;
     */
    sellLevels: Level[];
    constructor(data?: PartialMessage<Orderbook>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.Orderbook";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Orderbook;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Orderbook;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Orderbook;
    static equals(a: Orderbook | PlainMessage<Orderbook> | undefined, b: Orderbook | PlainMessage<Orderbook> | undefined): boolean;
}
//# sourceMappingURL=events_pb.d.ts.map