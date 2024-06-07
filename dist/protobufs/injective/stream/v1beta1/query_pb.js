// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/stream/v1beta1/query.proto (package injective.stream.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Deposit, DerivativeLimitOrder, Level, PositionDelta, SpotLimitOrder } from "../../exchange/v1beta1/exchange_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from enum injective.stream.v1beta1.OrderUpdateStatus
 */
export var OrderUpdateStatus;
(function (OrderUpdateStatus) {
    /**
     * @generated from enum value: Unspecified = 0;
     */
    OrderUpdateStatus[OrderUpdateStatus["Unspecified"] = 0] = "Unspecified";
    /**
     * @generated from enum value: Booked = 1;
     */
    OrderUpdateStatus[OrderUpdateStatus["Booked"] = 1] = "Booked";
    /**
     * @generated from enum value: Matched = 2;
     */
    OrderUpdateStatus[OrderUpdateStatus["Matched"] = 2] = "Matched";
    /**
     * @generated from enum value: Cancelled = 3;
     */
    OrderUpdateStatus[OrderUpdateStatus["Cancelled"] = 3] = "Cancelled";
})(OrderUpdateStatus || (OrderUpdateStatus = {}));
// Retrieve enum metadata with: proto3.getEnumType(OrderUpdateStatus)
proto3.util.setEnumType(OrderUpdateStatus, "injective.stream.v1beta1.OrderUpdateStatus", [
    { no: 0, name: "Unspecified" },
    { no: 1, name: "Booked" },
    { no: 2, name: "Matched" },
    { no: 3, name: "Cancelled" },
]);
/**
 * @generated from message injective.stream.v1beta1.StreamRequest
 */
export class StreamRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StreamRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StreamRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StreamRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(StreamRequest, a, b);
    }
}
StreamRequest.runtime = proto3;
StreamRequest.typeName = "injective.stream.v1beta1.StreamRequest";
StreamRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "bank_balances_filter", kind: "message", T: BankBalancesFilter },
    { no: 2, name: "subaccount_deposits_filter", kind: "message", T: SubaccountDepositsFilter },
    { no: 3, name: "spot_trades_filter", kind: "message", T: TradesFilter },
    { no: 4, name: "derivative_trades_filter", kind: "message", T: TradesFilter },
    { no: 5, name: "spot_orders_filter", kind: "message", T: OrdersFilter },
    { no: 6, name: "derivative_orders_filter", kind: "message", T: OrdersFilter },
    { no: 7, name: "spot_orderbooks_filter", kind: "message", T: OrderbookFilter },
    { no: 8, name: "derivative_orderbooks_filter", kind: "message", T: OrderbookFilter },
    { no: 9, name: "positions_filter", kind: "message", T: PositionsFilter },
    { no: 10, name: "oracle_price_filter", kind: "message", T: OraclePriceFilter },
]);
/**
 * @generated from message injective.stream.v1beta1.StreamResponse
 */
export class StreamResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 block_height = 1;
         */
        this.blockHeight = protoInt64.zero;
        /**
         * @generated from field: int64 block_time = 2;
         */
        this.blockTime = protoInt64.zero;
        /**
         * @generated from field: repeated injective.stream.v1beta1.BankBalance bank_balances = 3;
         */
        this.bankBalances = [];
        /**
         * @generated from field: repeated injective.stream.v1beta1.SubaccountDeposits subaccount_deposits = 4;
         */
        this.subaccountDeposits = [];
        /**
         * @generated from field: repeated injective.stream.v1beta1.SpotTrade spot_trades = 5;
         */
        this.spotTrades = [];
        /**
         * @generated from field: repeated injective.stream.v1beta1.DerivativeTrade derivative_trades = 6;
         */
        this.derivativeTrades = [];
        /**
         * @generated from field: repeated injective.stream.v1beta1.SpotOrderUpdate spot_orders = 7;
         */
        this.spotOrders = [];
        /**
         * @generated from field: repeated injective.stream.v1beta1.DerivativeOrderUpdate derivative_orders = 8;
         */
        this.derivativeOrders = [];
        /**
         * @generated from field: repeated injective.stream.v1beta1.OrderbookUpdate spot_orderbook_updates = 9;
         */
        this.spotOrderbookUpdates = [];
        /**
         * @generated from field: repeated injective.stream.v1beta1.OrderbookUpdate derivative_orderbook_updates = 10;
         */
        this.derivativeOrderbookUpdates = [];
        /**
         * @generated from field: repeated injective.stream.v1beta1.Position positions = 11;
         */
        this.positions = [];
        /**
         * @generated from field: repeated injective.stream.v1beta1.OraclePrice oracle_prices = 12;
         */
        this.oraclePrices = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StreamResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StreamResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StreamResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(StreamResponse, a, b);
    }
}
StreamResponse.runtime = proto3;
StreamResponse.typeName = "injective.stream.v1beta1.StreamResponse";
StreamResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "block_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "block_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "bank_balances", kind: "message", T: BankBalance, repeated: true },
    { no: 4, name: "subaccount_deposits", kind: "message", T: SubaccountDeposits, repeated: true },
    { no: 5, name: "spot_trades", kind: "message", T: SpotTrade, repeated: true },
    { no: 6, name: "derivative_trades", kind: "message", T: DerivativeTrade, repeated: true },
    { no: 7, name: "spot_orders", kind: "message", T: SpotOrderUpdate, repeated: true },
    { no: 8, name: "derivative_orders", kind: "message", T: DerivativeOrderUpdate, repeated: true },
    { no: 9, name: "spot_orderbook_updates", kind: "message", T: OrderbookUpdate, repeated: true },
    { no: 10, name: "derivative_orderbook_updates", kind: "message", T: OrderbookUpdate, repeated: true },
    { no: 11, name: "positions", kind: "message", T: Position, repeated: true },
    { no: 12, name: "oracle_prices", kind: "message", T: OraclePrice, repeated: true },
]);
/**
 * @generated from message injective.stream.v1beta1.OrderbookUpdate
 */
export class OrderbookUpdate extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 seq = 1;
         */
        this.seq = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new OrderbookUpdate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new OrderbookUpdate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new OrderbookUpdate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(OrderbookUpdate, a, b);
    }
}
OrderbookUpdate.runtime = proto3;
OrderbookUpdate.typeName = "injective.stream.v1beta1.OrderbookUpdate";
OrderbookUpdate.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "seq", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "orderbook", kind: "message", T: Orderbook },
]);
/**
 * @generated from message injective.stream.v1beta1.Orderbook
 */
export class Orderbook extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string market_id = 1;
         */
        this.marketId = "";
        /**
         * @generated from field: repeated injective.exchange.v1beta1.Level buy_levels = 2;
         */
        this.buyLevels = [];
        /**
         * @generated from field: repeated injective.exchange.v1beta1.Level sell_levels = 3;
         */
        this.sellLevels = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Orderbook().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Orderbook().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Orderbook().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Orderbook, a, b);
    }
}
Orderbook.runtime = proto3;
Orderbook.typeName = "injective.stream.v1beta1.Orderbook";
Orderbook.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "buy_levels", kind: "message", T: Level, repeated: true },
    { no: 3, name: "sell_levels", kind: "message", T: Level, repeated: true },
]);
/**
 * @generated from message injective.stream.v1beta1.BankBalance
 */
export class BankBalance extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string account = 1;
         */
        this.account = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin balances = 2;
         */
        this.balances = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BankBalance().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BankBalance().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BankBalance().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BankBalance, a, b);
    }
}
BankBalance.runtime = proto3;
BankBalance.typeName = "injective.stream.v1beta1.BankBalance";
BankBalance.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "balances", kind: "message", T: Coin, repeated: true },
]);
/**
 * @generated from message injective.stream.v1beta1.SubaccountDeposits
 */
export class SubaccountDeposits extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subaccount_id = 1;
         */
        this.subaccountId = "";
        /**
         * @generated from field: repeated injective.stream.v1beta1.SubaccountDeposit deposits = 2;
         */
        this.deposits = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SubaccountDeposits().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SubaccountDeposits().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SubaccountDeposits().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SubaccountDeposits, a, b);
    }
}
SubaccountDeposits.runtime = proto3;
SubaccountDeposits.typeName = "injective.stream.v1beta1.SubaccountDeposits";
SubaccountDeposits.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "deposits", kind: "message", T: SubaccountDeposit, repeated: true },
]);
/**
 * @generated from message injective.stream.v1beta1.SubaccountDeposit
 */
export class SubaccountDeposit extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SubaccountDeposit().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SubaccountDeposit().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SubaccountDeposit().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SubaccountDeposit, a, b);
    }
}
SubaccountDeposit.runtime = proto3;
SubaccountDeposit.typeName = "injective.stream.v1beta1.SubaccountDeposit";
SubaccountDeposit.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "deposit", kind: "message", T: Deposit },
]);
/**
 * @generated from message injective.stream.v1beta1.SpotOrderUpdate
 */
export class SpotOrderUpdate extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: injective.stream.v1beta1.OrderUpdateStatus status = 1;
         */
        this.status = OrderUpdateStatus.Unspecified;
        /**
         * @generated from field: bytes order_hash = 2;
         */
        this.orderHash = new Uint8Array(0);
        /**
         * @generated from field: string cid = 3;
         */
        this.cid = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SpotOrderUpdate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SpotOrderUpdate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SpotOrderUpdate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SpotOrderUpdate, a, b);
    }
}
SpotOrderUpdate.runtime = proto3;
SpotOrderUpdate.typeName = "injective.stream.v1beta1.SpotOrderUpdate";
SpotOrderUpdate.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(OrderUpdateStatus) },
    { no: 2, name: "order_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "cid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "order", kind: "message", T: SpotOrder },
]);
/**
 * @generated from message injective.stream.v1beta1.SpotOrder
 */
export class SpotOrder extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string market_id = 1;
         */
        this.marketId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SpotOrder().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SpotOrder().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SpotOrder().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SpotOrder, a, b);
    }
}
SpotOrder.runtime = proto3;
SpotOrder.typeName = "injective.stream.v1beta1.SpotOrder";
SpotOrder.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "order", kind: "message", T: SpotLimitOrder },
]);
/**
 * @generated from message injective.stream.v1beta1.DerivativeOrderUpdate
 */
export class DerivativeOrderUpdate extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: injective.stream.v1beta1.OrderUpdateStatus status = 1;
         */
        this.status = OrderUpdateStatus.Unspecified;
        /**
         * @generated from field: bytes order_hash = 2;
         */
        this.orderHash = new Uint8Array(0);
        /**
         * @generated from field: string cid = 3;
         */
        this.cid = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DerivativeOrderUpdate().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DerivativeOrderUpdate().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DerivativeOrderUpdate().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DerivativeOrderUpdate, a, b);
    }
}
DerivativeOrderUpdate.runtime = proto3;
DerivativeOrderUpdate.typeName = "injective.stream.v1beta1.DerivativeOrderUpdate";
DerivativeOrderUpdate.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(OrderUpdateStatus) },
    { no: 2, name: "order_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "cid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "order", kind: "message", T: DerivativeOrder },
]);
/**
 * @generated from message injective.stream.v1beta1.DerivativeOrder
 */
export class DerivativeOrder extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string market_id = 1;
         */
        this.marketId = "";
        /**
         * @generated from field: bool is_market = 3;
         */
        this.isMarket = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DerivativeOrder().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DerivativeOrder().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DerivativeOrder().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DerivativeOrder, a, b);
    }
}
DerivativeOrder.runtime = proto3;
DerivativeOrder.typeName = "injective.stream.v1beta1.DerivativeOrder";
DerivativeOrder.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "order", kind: "message", T: DerivativeLimitOrder },
    { no: 3, name: "is_market", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * @generated from message injective.stream.v1beta1.Position
 */
export class Position extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string market_id = 1;
         */
        this.marketId = "";
        /**
         * @generated from field: string subaccount_id = 2;
         */
        this.subaccountId = "";
        /**
         * @generated from field: bool isLong = 3;
         */
        this.isLong = false;
        /**
         * @generated from field: string quantity = 4;
         */
        this.quantity = "";
        /**
         * @generated from field: string entry_price = 5;
         */
        this.entryPrice = "";
        /**
         * @generated from field: string margin = 6;
         */
        this.margin = "";
        /**
         * @generated from field: string cumulative_funding_entry = 7;
         */
        this.cumulativeFundingEntry = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Position().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Position().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Position().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Position, a, b);
    }
}
Position.runtime = proto3;
Position.typeName = "injective.stream.v1beta1.Position";
Position.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "isLong", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "quantity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "entry_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "margin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "cumulative_funding_entry", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.stream.v1beta1.OraclePrice
 */
export class OraclePrice extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string symbol = 1;
         */
        this.symbol = "";
        /**
         * @generated from field: string price = 2;
         */
        this.price = "";
        /**
         * @generated from field: string type = 3;
         */
        this.type = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new OraclePrice().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new OraclePrice().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new OraclePrice().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(OraclePrice, a, b);
    }
}
OraclePrice.runtime = proto3;
OraclePrice.typeName = "injective.stream.v1beta1.OraclePrice";
OraclePrice.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.stream.v1beta1.SpotTrade
 */
export class SpotTrade extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string market_id = 1;
         */
        this.marketId = "";
        /**
         * @generated from field: bool is_buy = 2;
         */
        this.isBuy = false;
        /**
         * @generated from field: string executionType = 3;
         */
        this.executionType = "";
        /**
         * @generated from field: string quantity = 4;
         */
        this.quantity = "";
        /**
         * @generated from field: string price = 5;
         */
        this.price = "";
        /**
         * bytes32 subaccount ID that executed the trade
         *
         * @generated from field: string subaccount_id = 6;
         */
        this.subaccountId = "";
        /**
         * @generated from field: string fee = 7;
         */
        this.fee = "";
        /**
         * @generated from field: bytes order_hash = 8;
         */
        this.orderHash = new Uint8Array(0);
        /**
         * @generated from field: string fee_recipient_address = 9;
         */
        this.feeRecipientAddress = "";
        /**
         * @generated from field: string cid = 10;
         */
        this.cid = "";
        /**
         * @generated from field: string trade_id = 11;
         */
        this.tradeId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SpotTrade().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SpotTrade().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SpotTrade().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SpotTrade, a, b);
    }
}
SpotTrade.runtime = proto3;
SpotTrade.typeName = "injective.stream.v1beta1.SpotTrade";
SpotTrade.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_buy", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "executionType", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "quantity", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "order_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 9, name: "fee_recipient_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "cid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "trade_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.stream.v1beta1.DerivativeTrade
 */
export class DerivativeTrade extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string market_id = 1;
         */
        this.marketId = "";
        /**
         * @generated from field: bool is_buy = 2;
         */
        this.isBuy = false;
        /**
         * @generated from field: string executionType = 3;
         */
        this.executionType = "";
        /**
         * @generated from field: string subaccount_id = 4;
         */
        this.subaccountId = "";
        /**
         * @generated from field: string payout = 6;
         */
        this.payout = "";
        /**
         * @generated from field: string fee = 7;
         */
        this.fee = "";
        /**
         * @generated from field: string order_hash = 8;
         */
        this.orderHash = "";
        /**
         * @generated from field: string fee_recipient_address = 9;
         */
        this.feeRecipientAddress = "";
        /**
         * @generated from field: string cid = 10;
         */
        this.cid = "";
        /**
         * @generated from field: string trade_id = 11;
         */
        this.tradeId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DerivativeTrade().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DerivativeTrade().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DerivativeTrade().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DerivativeTrade, a, b);
    }
}
DerivativeTrade.runtime = proto3;
DerivativeTrade.typeName = "injective.stream.v1beta1.DerivativeTrade";
DerivativeTrade.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_buy", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "executionType", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "position_delta", kind: "message", T: PositionDelta },
    { no: 6, name: "payout", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "order_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "fee_recipient_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "cid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "trade_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.stream.v1beta1.TradesFilter
 */
export class TradesFilter extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string subaccount_ids = 1;
         */
        this.subaccountIds = [];
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TradesFilter().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TradesFilter().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TradesFilter().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TradesFilter, a, b);
    }
}
TradesFilter.runtime = proto3;
TradesFilter.typeName = "injective.stream.v1beta1.TradesFilter";
TradesFilter.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message injective.stream.v1beta1.PositionsFilter
 */
export class PositionsFilter extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string subaccount_ids = 1;
         */
        this.subaccountIds = [];
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PositionsFilter().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PositionsFilter().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PositionsFilter().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PositionsFilter, a, b);
    }
}
PositionsFilter.runtime = proto3;
PositionsFilter.typeName = "injective.stream.v1beta1.PositionsFilter";
PositionsFilter.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message injective.stream.v1beta1.OrdersFilter
 */
export class OrdersFilter extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string subaccount_ids = 1;
         */
        this.subaccountIds = [];
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new OrdersFilter().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new OrdersFilter().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new OrdersFilter().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(OrdersFilter, a, b);
    }
}
OrdersFilter.runtime = proto3;
OrdersFilter.typeName = "injective.stream.v1beta1.OrdersFilter";
OrdersFilter.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message injective.stream.v1beta1.OrderbookFilter
 */
export class OrderbookFilter extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string market_ids = 1;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new OrderbookFilter().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new OrderbookFilter().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new OrderbookFilter().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(OrderbookFilter, a, b);
    }
}
OrderbookFilter.runtime = proto3;
OrderbookFilter.typeName = "injective.stream.v1beta1.OrderbookFilter";
OrderbookFilter.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message injective.stream.v1beta1.BankBalancesFilter
 */
export class BankBalancesFilter extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string accounts = 1;
         */
        this.accounts = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BankBalancesFilter().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BankBalancesFilter().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BankBalancesFilter().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BankBalancesFilter, a, b);
    }
}
BankBalancesFilter.runtime = proto3;
BankBalancesFilter.typeName = "injective.stream.v1beta1.BankBalancesFilter";
BankBalancesFilter.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "accounts", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message injective.stream.v1beta1.SubaccountDepositsFilter
 */
export class SubaccountDepositsFilter extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string subaccount_ids = 1;
         */
        this.subaccountIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SubaccountDepositsFilter().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SubaccountDepositsFilter().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SubaccountDepositsFilter().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SubaccountDepositsFilter, a, b);
    }
}
SubaccountDepositsFilter.runtime = proto3;
SubaccountDepositsFilter.typeName = "injective.stream.v1beta1.SubaccountDepositsFilter";
SubaccountDepositsFilter.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message injective.stream.v1beta1.OraclePriceFilter
 */
export class OraclePriceFilter extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string symbol = 1;
         */
        this.symbol = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new OraclePriceFilter().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new OraclePriceFilter().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new OraclePriceFilter().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(OraclePriceFilter, a, b);
    }
}
OraclePriceFilter.runtime = proto3;
OraclePriceFilter.typeName = "injective.stream.v1beta1.OraclePriceFilter";
OraclePriceFilter.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
//# sourceMappingURL=query_pb.js.map