import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Deposit, DerivativeLimitOrder, Level, PositionDelta, SpotLimitOrder } from "../../exchange/v1beta1/exchange_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from enum injective.stream.v1beta1.OrderUpdateStatus
 */
export declare enum OrderUpdateStatus {
    /**
     * @generated from enum value: Unspecified = 0;
     */
    Unspecified = 0,
    /**
     * @generated from enum value: Booked = 1;
     */
    Booked = 1,
    /**
     * @generated from enum value: Matched = 2;
     */
    Matched = 2,
    /**
     * @generated from enum value: Cancelled = 3;
     */
    Cancelled = 3
}
/**
 * @generated from message injective.stream.v1beta1.StreamRequest
 */
export declare class StreamRequest extends Message<StreamRequest> {
    /**
     * @generated from field: injective.stream.v1beta1.BankBalancesFilter bank_balances_filter = 1;
     */
    bankBalancesFilter?: BankBalancesFilter;
    /**
     * @generated from field: injective.stream.v1beta1.SubaccountDepositsFilter subaccount_deposits_filter = 2;
     */
    subaccountDepositsFilter?: SubaccountDepositsFilter;
    /**
     * @generated from field: injective.stream.v1beta1.TradesFilter spot_trades_filter = 3;
     */
    spotTradesFilter?: TradesFilter;
    /**
     * @generated from field: injective.stream.v1beta1.TradesFilter derivative_trades_filter = 4;
     */
    derivativeTradesFilter?: TradesFilter;
    /**
     * @generated from field: injective.stream.v1beta1.OrdersFilter spot_orders_filter = 5;
     */
    spotOrdersFilter?: OrdersFilter;
    /**
     * @generated from field: injective.stream.v1beta1.OrdersFilter derivative_orders_filter = 6;
     */
    derivativeOrdersFilter?: OrdersFilter;
    /**
     * @generated from field: injective.stream.v1beta1.OrderbookFilter spot_orderbooks_filter = 7;
     */
    spotOrderbooksFilter?: OrderbookFilter;
    /**
     * @generated from field: injective.stream.v1beta1.OrderbookFilter derivative_orderbooks_filter = 8;
     */
    derivativeOrderbooksFilter?: OrderbookFilter;
    /**
     * @generated from field: injective.stream.v1beta1.PositionsFilter positions_filter = 9;
     */
    positionsFilter?: PositionsFilter;
    /**
     * @generated from field: injective.stream.v1beta1.OraclePriceFilter oracle_price_filter = 10;
     */
    oraclePriceFilter?: OraclePriceFilter;
    constructor(data?: PartialMessage<StreamRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.StreamRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamRequest;
    static equals(a: StreamRequest | PlainMessage<StreamRequest> | undefined, b: StreamRequest | PlainMessage<StreamRequest> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.StreamResponse
 */
export declare class StreamResponse extends Message<StreamResponse> {
    /**
     * @generated from field: uint64 block_height = 1;
     */
    blockHeight: bigint;
    /**
     * @generated from field: int64 block_time = 2;
     */
    blockTime: bigint;
    /**
     * @generated from field: repeated injective.stream.v1beta1.BankBalance bank_balances = 3;
     */
    bankBalances: BankBalance[];
    /**
     * @generated from field: repeated injective.stream.v1beta1.SubaccountDeposits subaccount_deposits = 4;
     */
    subaccountDeposits: SubaccountDeposits[];
    /**
     * @generated from field: repeated injective.stream.v1beta1.SpotTrade spot_trades = 5;
     */
    spotTrades: SpotTrade[];
    /**
     * @generated from field: repeated injective.stream.v1beta1.DerivativeTrade derivative_trades = 6;
     */
    derivativeTrades: DerivativeTrade[];
    /**
     * @generated from field: repeated injective.stream.v1beta1.SpotOrderUpdate spot_orders = 7;
     */
    spotOrders: SpotOrderUpdate[];
    /**
     * @generated from field: repeated injective.stream.v1beta1.DerivativeOrderUpdate derivative_orders = 8;
     */
    derivativeOrders: DerivativeOrderUpdate[];
    /**
     * @generated from field: repeated injective.stream.v1beta1.OrderbookUpdate spot_orderbook_updates = 9;
     */
    spotOrderbookUpdates: OrderbookUpdate[];
    /**
     * @generated from field: repeated injective.stream.v1beta1.OrderbookUpdate derivative_orderbook_updates = 10;
     */
    derivativeOrderbookUpdates: OrderbookUpdate[];
    /**
     * @generated from field: repeated injective.stream.v1beta1.Position positions = 11;
     */
    positions: Position[];
    /**
     * @generated from field: repeated injective.stream.v1beta1.OraclePrice oracle_prices = 12;
     */
    oraclePrices: OraclePrice[];
    constructor(data?: PartialMessage<StreamResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.StreamResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamResponse;
    static equals(a: StreamResponse | PlainMessage<StreamResponse> | undefined, b: StreamResponse | PlainMessage<StreamResponse> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.OrderbookUpdate
 */
export declare class OrderbookUpdate extends Message<OrderbookUpdate> {
    /**
     * @generated from field: uint64 seq = 1;
     */
    seq: bigint;
    /**
     * @generated from field: injective.stream.v1beta1.Orderbook orderbook = 2;
     */
    orderbook?: Orderbook;
    constructor(data?: PartialMessage<OrderbookUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.OrderbookUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderbookUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderbookUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderbookUpdate;
    static equals(a: OrderbookUpdate | PlainMessage<OrderbookUpdate> | undefined, b: OrderbookUpdate | PlainMessage<OrderbookUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.Orderbook
 */
export declare class Orderbook extends Message<Orderbook> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
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
    static readonly typeName = "injective.stream.v1beta1.Orderbook";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Orderbook;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Orderbook;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Orderbook;
    static equals(a: Orderbook | PlainMessage<Orderbook> | undefined, b: Orderbook | PlainMessage<Orderbook> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.BankBalance
 */
export declare class BankBalance extends Message<BankBalance> {
    /**
     * @generated from field: string account = 1;
     */
    account: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin balances = 2;
     */
    balances: Coin[];
    constructor(data?: PartialMessage<BankBalance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.BankBalance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BankBalance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BankBalance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BankBalance;
    static equals(a: BankBalance | PlainMessage<BankBalance> | undefined, b: BankBalance | PlainMessage<BankBalance> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.SubaccountDeposits
 */
export declare class SubaccountDeposits extends Message<SubaccountDeposits> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated injective.stream.v1beta1.SubaccountDeposit deposits = 2;
     */
    deposits: SubaccountDeposit[];
    constructor(data?: PartialMessage<SubaccountDeposits>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.SubaccountDeposits";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubaccountDeposits;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubaccountDeposits;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubaccountDeposits;
    static equals(a: SubaccountDeposits | PlainMessage<SubaccountDeposits> | undefined, b: SubaccountDeposits | PlainMessage<SubaccountDeposits> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.SubaccountDeposit
 */
export declare class SubaccountDeposit extends Message<SubaccountDeposit> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: injective.exchange.v1beta1.Deposit deposit = 2;
     */
    deposit?: Deposit;
    constructor(data?: PartialMessage<SubaccountDeposit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.SubaccountDeposit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubaccountDeposit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubaccountDeposit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubaccountDeposit;
    static equals(a: SubaccountDeposit | PlainMessage<SubaccountDeposit> | undefined, b: SubaccountDeposit | PlainMessage<SubaccountDeposit> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.SpotOrderUpdate
 */
export declare class SpotOrderUpdate extends Message<SpotOrderUpdate> {
    /**
     * @generated from field: injective.stream.v1beta1.OrderUpdateStatus status = 1;
     */
    status: OrderUpdateStatus;
    /**
     * @generated from field: bytes order_hash = 2;
     */
    orderHash: Uint8Array;
    /**
     * @generated from field: string cid = 3;
     */
    cid: string;
    /**
     * @generated from field: injective.stream.v1beta1.SpotOrder order = 4;
     */
    order?: SpotOrder;
    constructor(data?: PartialMessage<SpotOrderUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.SpotOrderUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotOrderUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotOrderUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotOrderUpdate;
    static equals(a: SpotOrderUpdate | PlainMessage<SpotOrderUpdate> | undefined, b: SpotOrderUpdate | PlainMessage<SpotOrderUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.SpotOrder
 */
export declare class SpotOrder extends Message<SpotOrder> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.SpotLimitOrder order = 2;
     */
    order?: SpotLimitOrder;
    constructor(data?: PartialMessage<SpotOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.SpotOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotOrder;
    static equals(a: SpotOrder | PlainMessage<SpotOrder> | undefined, b: SpotOrder | PlainMessage<SpotOrder> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.DerivativeOrderUpdate
 */
export declare class DerivativeOrderUpdate extends Message<DerivativeOrderUpdate> {
    /**
     * @generated from field: injective.stream.v1beta1.OrderUpdateStatus status = 1;
     */
    status: OrderUpdateStatus;
    /**
     * @generated from field: bytes order_hash = 2;
     */
    orderHash: Uint8Array;
    /**
     * @generated from field: string cid = 3;
     */
    cid: string;
    /**
     * @generated from field: injective.stream.v1beta1.DerivativeOrder order = 4;
     */
    order?: DerivativeOrder;
    constructor(data?: PartialMessage<DerivativeOrderUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.DerivativeOrderUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeOrderUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeOrderUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeOrderUpdate;
    static equals(a: DerivativeOrderUpdate | PlainMessage<DerivativeOrderUpdate> | undefined, b: DerivativeOrderUpdate | PlainMessage<DerivativeOrderUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.DerivativeOrder
 */
export declare class DerivativeOrder extends Message<DerivativeOrder> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeLimitOrder order = 2;
     */
    order?: DerivativeLimitOrder;
    /**
     * @generated from field: bool is_market = 3;
     */
    isMarket: boolean;
    constructor(data?: PartialMessage<DerivativeOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.DerivativeOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeOrder;
    static equals(a: DerivativeOrder | PlainMessage<DerivativeOrder> | undefined, b: DerivativeOrder | PlainMessage<DerivativeOrder> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.Position
 */
export declare class Position extends Message<Position> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    /**
     * @generated from field: bool isLong = 3;
     */
    isLong: boolean;
    /**
     * @generated from field: string quantity = 4;
     */
    quantity: string;
    /**
     * @generated from field: string entry_price = 5;
     */
    entryPrice: string;
    /**
     * @generated from field: string margin = 6;
     */
    margin: string;
    /**
     * @generated from field: string cumulative_funding_entry = 7;
     */
    cumulativeFundingEntry: string;
    constructor(data?: PartialMessage<Position>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.Position";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Position;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Position;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Position;
    static equals(a: Position | PlainMessage<Position> | undefined, b: Position | PlainMessage<Position> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.OraclePrice
 */
export declare class OraclePrice extends Message<OraclePrice> {
    /**
     * @generated from field: string symbol = 1;
     */
    symbol: string;
    /**
     * @generated from field: string price = 2;
     */
    price: string;
    /**
     * @generated from field: string type = 3;
     */
    type: string;
    constructor(data?: PartialMessage<OraclePrice>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.OraclePrice";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OraclePrice;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OraclePrice;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OraclePrice;
    static equals(a: OraclePrice | PlainMessage<OraclePrice> | undefined, b: OraclePrice | PlainMessage<OraclePrice> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.SpotTrade
 */
export declare class SpotTrade extends Message<SpotTrade> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: bool is_buy = 2;
     */
    isBuy: boolean;
    /**
     * @generated from field: string executionType = 3;
     */
    executionType: string;
    /**
     * @generated from field: string quantity = 4;
     */
    quantity: string;
    /**
     * @generated from field: string price = 5;
     */
    price: string;
    /**
     * bytes32 subaccount ID that executed the trade
     *
     * @generated from field: string subaccount_id = 6;
     */
    subaccountId: string;
    /**
     * @generated from field: string fee = 7;
     */
    fee: string;
    /**
     * @generated from field: bytes order_hash = 8;
     */
    orderHash: Uint8Array;
    /**
     * @generated from field: string fee_recipient_address = 9;
     */
    feeRecipientAddress: string;
    /**
     * @generated from field: string cid = 10;
     */
    cid: string;
    /**
     * @generated from field: string trade_id = 11;
     */
    tradeId: string;
    constructor(data?: PartialMessage<SpotTrade>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.SpotTrade";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotTrade;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotTrade;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotTrade;
    static equals(a: SpotTrade | PlainMessage<SpotTrade> | undefined, b: SpotTrade | PlainMessage<SpotTrade> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.DerivativeTrade
 */
export declare class DerivativeTrade extends Message<DerivativeTrade> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: bool is_buy = 2;
     */
    isBuy: boolean;
    /**
     * @generated from field: string executionType = 3;
     */
    executionType: string;
    /**
     * @generated from field: string subaccount_id = 4;
     */
    subaccountId: string;
    /**
     * @generated from field: injective.exchange.v1beta1.PositionDelta position_delta = 5;
     */
    positionDelta?: PositionDelta;
    /**
     * @generated from field: string payout = 6;
     */
    payout: string;
    /**
     * @generated from field: string fee = 7;
     */
    fee: string;
    /**
     * @generated from field: string order_hash = 8;
     */
    orderHash: string;
    /**
     * @generated from field: string fee_recipient_address = 9;
     */
    feeRecipientAddress: string;
    /**
     * @generated from field: string cid = 10;
     */
    cid: string;
    /**
     * @generated from field: string trade_id = 11;
     */
    tradeId: string;
    constructor(data?: PartialMessage<DerivativeTrade>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.DerivativeTrade";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeTrade;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeTrade;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeTrade;
    static equals(a: DerivativeTrade | PlainMessage<DerivativeTrade> | undefined, b: DerivativeTrade | PlainMessage<DerivativeTrade> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.TradesFilter
 */
export declare class TradesFilter extends Message<TradesFilter> {
    /**
     * @generated from field: repeated string subaccount_ids = 1;
     */
    subaccountIds: string[];
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<TradesFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.TradesFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TradesFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TradesFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TradesFilter;
    static equals(a: TradesFilter | PlainMessage<TradesFilter> | undefined, b: TradesFilter | PlainMessage<TradesFilter> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.PositionsFilter
 */
export declare class PositionsFilter extends Message<PositionsFilter> {
    /**
     * @generated from field: repeated string subaccount_ids = 1;
     */
    subaccountIds: string[];
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<PositionsFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.PositionsFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PositionsFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PositionsFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PositionsFilter;
    static equals(a: PositionsFilter | PlainMessage<PositionsFilter> | undefined, b: PositionsFilter | PlainMessage<PositionsFilter> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.OrdersFilter
 */
export declare class OrdersFilter extends Message<OrdersFilter> {
    /**
     * @generated from field: repeated string subaccount_ids = 1;
     */
    subaccountIds: string[];
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<OrdersFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.OrdersFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrdersFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrdersFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrdersFilter;
    static equals(a: OrdersFilter | PlainMessage<OrdersFilter> | undefined, b: OrdersFilter | PlainMessage<OrdersFilter> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.OrderbookFilter
 */
export declare class OrderbookFilter extends Message<OrderbookFilter> {
    /**
     * @generated from field: repeated string market_ids = 1;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<OrderbookFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.OrderbookFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderbookFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderbookFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderbookFilter;
    static equals(a: OrderbookFilter | PlainMessage<OrderbookFilter> | undefined, b: OrderbookFilter | PlainMessage<OrderbookFilter> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.BankBalancesFilter
 */
export declare class BankBalancesFilter extends Message<BankBalancesFilter> {
    /**
     * @generated from field: repeated string accounts = 1;
     */
    accounts: string[];
    constructor(data?: PartialMessage<BankBalancesFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.BankBalancesFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BankBalancesFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BankBalancesFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BankBalancesFilter;
    static equals(a: BankBalancesFilter | PlainMessage<BankBalancesFilter> | undefined, b: BankBalancesFilter | PlainMessage<BankBalancesFilter> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.SubaccountDepositsFilter
 */
export declare class SubaccountDepositsFilter extends Message<SubaccountDepositsFilter> {
    /**
     * @generated from field: repeated string subaccount_ids = 1;
     */
    subaccountIds: string[];
    constructor(data?: PartialMessage<SubaccountDepositsFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.SubaccountDepositsFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubaccountDepositsFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubaccountDepositsFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubaccountDepositsFilter;
    static equals(a: SubaccountDepositsFilter | PlainMessage<SubaccountDepositsFilter> | undefined, b: SubaccountDepositsFilter | PlainMessage<SubaccountDepositsFilter> | undefined): boolean;
}
/**
 * @generated from message injective.stream.v1beta1.OraclePriceFilter
 */
export declare class OraclePriceFilter extends Message<OraclePriceFilter> {
    /**
     * @generated from field: repeated string symbol = 1;
     */
    symbol: string[];
    constructor(data?: PartialMessage<OraclePriceFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.stream.v1beta1.OraclePriceFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OraclePriceFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OraclePriceFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OraclePriceFilter;
    static equals(a: OraclePriceFilter | PlainMessage<OraclePriceFilter> | undefined, b: OraclePriceFilter | PlainMessage<OraclePriceFilter> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map