import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DerivativeOrder, MarketStatus, Params, PositionDelta, SpotOrder } from "./exchange_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { OracleType } from "../../oracle/v1beta1/oracle_pb.js";
/**
 * @generated from message injective.exchange.v1beta1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the exchange parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: injective.exchange.v1beta1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
/**
 * MsgDeposit defines a SDK message for transferring coins from the sender's
 * bank balance into the subaccount's exchange deposits
 *
 * @generated from message injective.exchange.v1beta1.MsgDeposit
 */
export declare class MsgDeposit extends Message<MsgDeposit> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * (Optional) bytes32 subaccount ID to deposit funds into. If empty, the coin
     * will be deposited to the sender's default subaccount address.
     *
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<MsgDeposit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgDeposit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDeposit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDeposit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDeposit;
    static equals(a: MsgDeposit | PlainMessage<MsgDeposit> | undefined, b: MsgDeposit | PlainMessage<MsgDeposit> | undefined): boolean;
}
/**
 * MsgDepositResponse defines the Msg/Deposit response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgDepositResponse
 */
export declare class MsgDepositResponse extends Message<MsgDepositResponse> {
    constructor(data?: PartialMessage<MsgDepositResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgDepositResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDepositResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDepositResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDepositResponse;
    static equals(a: MsgDepositResponse | PlainMessage<MsgDepositResponse> | undefined, b: MsgDepositResponse | PlainMessage<MsgDepositResponse> | undefined): boolean;
}
/**
 * MsgWithdraw defines a SDK message for withdrawing coins from a subaccount's
 * deposits to the user's bank balance
 *
 * @generated from message injective.exchange.v1beta1.MsgWithdraw
 */
export declare class MsgWithdraw extends Message<MsgWithdraw> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * bytes32 subaccount ID to withdraw funds from
     *
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<MsgWithdraw>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgWithdraw";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdraw;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdraw;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdraw;
    static equals(a: MsgWithdraw | PlainMessage<MsgWithdraw> | undefined, b: MsgWithdraw | PlainMessage<MsgWithdraw> | undefined): boolean;
}
/**
 * MsgWithdraw defines the Msg/Withdraw response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgWithdrawResponse
 */
export declare class MsgWithdrawResponse extends Message<MsgWithdrawResponse> {
    constructor(data?: PartialMessage<MsgWithdrawResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgWithdrawResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawResponse;
    static equals(a: MsgWithdrawResponse | PlainMessage<MsgWithdrawResponse> | undefined, b: MsgWithdrawResponse | PlainMessage<MsgWithdrawResponse> | undefined): boolean;
}
/**
 * MsgCreateSpotLimitOrder defines a SDK message for creating a new spot limit
 * order.
 *
 * @generated from message injective.exchange.v1beta1.MsgCreateSpotLimitOrder
 */
export declare class MsgCreateSpotLimitOrder extends Message<MsgCreateSpotLimitOrder> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: injective.exchange.v1beta1.SpotOrder order = 2;
     */
    order?: SpotOrder;
    constructor(data?: PartialMessage<MsgCreateSpotLimitOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCreateSpotLimitOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateSpotLimitOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateSpotLimitOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateSpotLimitOrder;
    static equals(a: MsgCreateSpotLimitOrder | PlainMessage<MsgCreateSpotLimitOrder> | undefined, b: MsgCreateSpotLimitOrder | PlainMessage<MsgCreateSpotLimitOrder> | undefined): boolean;
}
/**
 * MsgCreateSpotLimitOrderResponse defines the Msg/CreateSpotOrder response
 * type.
 *
 * @generated from message injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse
 */
export declare class MsgCreateSpotLimitOrderResponse extends Message<MsgCreateSpotLimitOrderResponse> {
    /**
     * @generated from field: string order_hash = 1;
     */
    orderHash: string;
    constructor(data?: PartialMessage<MsgCreateSpotLimitOrderResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateSpotLimitOrderResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateSpotLimitOrderResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateSpotLimitOrderResponse;
    static equals(a: MsgCreateSpotLimitOrderResponse | PlainMessage<MsgCreateSpotLimitOrderResponse> | undefined, b: MsgCreateSpotLimitOrderResponse | PlainMessage<MsgCreateSpotLimitOrderResponse> | undefined): boolean;
}
/**
 * MsgBatchCreateSpotLimitOrders defines a SDK message for creating a new batch
 * of spot limit orders.
 *
 * @generated from message injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders
 */
export declare class MsgBatchCreateSpotLimitOrders extends Message<MsgBatchCreateSpotLimitOrders> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SpotOrder orders = 2;
     */
    orders: SpotOrder[];
    constructor(data?: PartialMessage<MsgBatchCreateSpotLimitOrders>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchCreateSpotLimitOrders;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchCreateSpotLimitOrders;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchCreateSpotLimitOrders;
    static equals(a: MsgBatchCreateSpotLimitOrders | PlainMessage<MsgBatchCreateSpotLimitOrders> | undefined, b: MsgBatchCreateSpotLimitOrders | PlainMessage<MsgBatchCreateSpotLimitOrders> | undefined): boolean;
}
/**
 * MsgBatchCreateSpotLimitOrdersResponse defines the
 * Msg/BatchCreateSpotLimitOrders response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse
 */
export declare class MsgBatchCreateSpotLimitOrdersResponse extends Message<MsgBatchCreateSpotLimitOrdersResponse> {
    /**
     * @generated from field: repeated string order_hashes = 1;
     */
    orderHashes: string[];
    constructor(data?: PartialMessage<MsgBatchCreateSpotLimitOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchCreateSpotLimitOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchCreateSpotLimitOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchCreateSpotLimitOrdersResponse;
    static equals(a: MsgBatchCreateSpotLimitOrdersResponse | PlainMessage<MsgBatchCreateSpotLimitOrdersResponse> | undefined, b: MsgBatchCreateSpotLimitOrdersResponse | PlainMessage<MsgBatchCreateSpotLimitOrdersResponse> | undefined): boolean;
}
/**
 * MsgInstantSpotMarketLaunch defines a SDK message for creating a new spot
 * market by paying listing fee without governance
 *
 * @generated from message injective.exchange.v1beta1.MsgInstantSpotMarketLaunch
 */
export declare class MsgInstantSpotMarketLaunch extends Message<MsgInstantSpotMarketLaunch> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Ticker for the spot market.
     *
     * @generated from field: string ticker = 2;
     */
    ticker: string;
    /**
     * type of coin to use as the base currency
     *
     * @generated from field: string base_denom = 3;
     */
    baseDenom: string;
    /**
     * type of coin to use as the quote currency
     *
     * @generated from field: string quote_denom = 4;
     */
    quoteDenom: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price
     *
     * @generated from field: string min_price_tick_size = 5;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     *
     * @generated from field: string min_quantity_tick_size = 6;
     */
    minQuantityTickSize: string;
    constructor(data?: PartialMessage<MsgInstantSpotMarketLaunch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgInstantSpotMarketLaunch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInstantSpotMarketLaunch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInstantSpotMarketLaunch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInstantSpotMarketLaunch;
    static equals(a: MsgInstantSpotMarketLaunch | PlainMessage<MsgInstantSpotMarketLaunch> | undefined, b: MsgInstantSpotMarketLaunch | PlainMessage<MsgInstantSpotMarketLaunch> | undefined): boolean;
}
/**
 * MsgInstantSpotMarketLaunchResponse defines the Msg/InstantSpotMarketLaunch
 * response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse
 */
export declare class MsgInstantSpotMarketLaunchResponse extends Message<MsgInstantSpotMarketLaunchResponse> {
    constructor(data?: PartialMessage<MsgInstantSpotMarketLaunchResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInstantSpotMarketLaunchResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInstantSpotMarketLaunchResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInstantSpotMarketLaunchResponse;
    static equals(a: MsgInstantSpotMarketLaunchResponse | PlainMessage<MsgInstantSpotMarketLaunchResponse> | undefined, b: MsgInstantSpotMarketLaunchResponse | PlainMessage<MsgInstantSpotMarketLaunchResponse> | undefined): boolean;
}
/**
 * MsgInstantPerpetualMarketLaunch defines a SDK message for creating a new
 * perpetual futures market by paying listing fee without governance
 *
 * @generated from message injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch
 */
export declare class MsgInstantPerpetualMarketLaunch extends Message<MsgInstantPerpetualMarketLaunch> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Ticker for the derivative market.
     *
     * @generated from field: string ticker = 2;
     */
    ticker: string;
    /**
     * type of coin to use as the base currency
     *
     * @generated from field: string quote_denom = 3;
     */
    quoteDenom: string;
    /**
     * Oracle base currency
     *
     * @generated from field: string oracle_base = 4;
     */
    oracleBase: string;
    /**
     * Oracle quote currency
     *
     * @generated from field: string oracle_quote = 5;
     */
    oracleQuote: string;
    /**
     * Scale factor for oracle prices.
     *
     * @generated from field: uint32 oracle_scale_factor = 6;
     */
    oracleScaleFactor: number;
    /**
     * Oracle type
     *
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 7;
     */
    oracleType: OracleType;
    /**
     * maker_fee_rate defines the trade fee rate for makers on the perpetual
     * market
     *
     * @generated from field: string maker_fee_rate = 8;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the trade fee rate for takers on the perpetual
     * market
     *
     * @generated from field: string taker_fee_rate = 9;
     */
    takerFeeRate: string;
    /**
     * initial_margin_ratio defines the initial margin ratio for the perpetual
     * market
     *
     * @generated from field: string initial_margin_ratio = 10;
     */
    initialMarginRatio: string;
    /**
     * maintenance_margin_ratio defines the maintenance margin ratio for the
     * perpetual market
     *
     * @generated from field: string maintenance_margin_ratio = 11;
     */
    maintenanceMarginRatio: string;
    /**
     * min_price_tick_size defines the minimum tick size of the order's price and
     * margin
     *
     * @generated from field: string min_price_tick_size = 12;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the order's
     * quantity
     *
     * @generated from field: string min_quantity_tick_size = 13;
     */
    minQuantityTickSize: string;
    constructor(data?: PartialMessage<MsgInstantPerpetualMarketLaunch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInstantPerpetualMarketLaunch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInstantPerpetualMarketLaunch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInstantPerpetualMarketLaunch;
    static equals(a: MsgInstantPerpetualMarketLaunch | PlainMessage<MsgInstantPerpetualMarketLaunch> | undefined, b: MsgInstantPerpetualMarketLaunch | PlainMessage<MsgInstantPerpetualMarketLaunch> | undefined): boolean;
}
/**
 * MsgInstantPerpetualMarketLaunchResponse defines the
 * Msg/InstantPerpetualMarketLaunchResponse response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse
 */
export declare class MsgInstantPerpetualMarketLaunchResponse extends Message<MsgInstantPerpetualMarketLaunchResponse> {
    constructor(data?: PartialMessage<MsgInstantPerpetualMarketLaunchResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInstantPerpetualMarketLaunchResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInstantPerpetualMarketLaunchResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInstantPerpetualMarketLaunchResponse;
    static equals(a: MsgInstantPerpetualMarketLaunchResponse | PlainMessage<MsgInstantPerpetualMarketLaunchResponse> | undefined, b: MsgInstantPerpetualMarketLaunchResponse | PlainMessage<MsgInstantPerpetualMarketLaunchResponse> | undefined): boolean;
}
/**
 * MsgInstantBinaryOptionsMarketLaunch defines a SDK message for creating a new
 * perpetual futures market by paying listing fee without governance
 *
 * @generated from message injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch
 */
export declare class MsgInstantBinaryOptionsMarketLaunch extends Message<MsgInstantBinaryOptionsMarketLaunch> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Ticker for the derivative contract.
     *
     * @generated from field: string ticker = 2;
     */
    ticker: string;
    /**
     * Oracle symbol
     *
     * @generated from field: string oracle_symbol = 3;
     */
    oracleSymbol: string;
    /**
     * Oracle Provider
     *
     * @generated from field: string oracle_provider = 4;
     */
    oracleProvider: string;
    /**
     * Oracle type
     *
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 5;
     */
    oracleType: OracleType;
    /**
     * Scale factor for oracle prices.
     *
     * @generated from field: uint32 oracle_scale_factor = 6;
     */
    oracleScaleFactor: number;
    /**
     * maker_fee_rate defines the trade fee rate for makers on the perpetual
     * market
     *
     * @generated from field: string maker_fee_rate = 7;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the trade fee rate for takers on the perpetual
     * market
     *
     * @generated from field: string taker_fee_rate = 8;
     */
    takerFeeRate: string;
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
     * admin of the market
     *
     * @generated from field: string admin = 11;
     */
    admin: string;
    /**
     * Address of the quote currency denomination for the binary options contract
     *
     * @generated from field: string quote_denom = 12;
     */
    quoteDenom: string;
    /**
     * min_price_tick_size defines the minimum tick size that the price and margin
     * required for orders in the market
     *
     * @generated from field: string min_price_tick_size = 13;
     */
    minPriceTickSize: string;
    /**
     * min_quantity_tick_size defines the minimum tick size of the quantity
     * required for orders in the market
     *
     * @generated from field: string min_quantity_tick_size = 14;
     */
    minQuantityTickSize: string;
    constructor(data?: PartialMessage<MsgInstantBinaryOptionsMarketLaunch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInstantBinaryOptionsMarketLaunch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInstantBinaryOptionsMarketLaunch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInstantBinaryOptionsMarketLaunch;
    static equals(a: MsgInstantBinaryOptionsMarketLaunch | PlainMessage<MsgInstantBinaryOptionsMarketLaunch> | undefined, b: MsgInstantBinaryOptionsMarketLaunch | PlainMessage<MsgInstantBinaryOptionsMarketLaunch> | undefined): boolean;
}
/**
 * MsgInstantBinaryOptionsMarketLaunchResponse defines the
 * Msg/InstantBinaryOptionsMarketLaunchResponse response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunchResponse
 */
export declare class MsgInstantBinaryOptionsMarketLaunchResponse extends Message<MsgInstantBinaryOptionsMarketLaunchResponse> {
    constructor(data?: PartialMessage<MsgInstantBinaryOptionsMarketLaunchResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunchResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInstantBinaryOptionsMarketLaunchResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInstantBinaryOptionsMarketLaunchResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInstantBinaryOptionsMarketLaunchResponse;
    static equals(a: MsgInstantBinaryOptionsMarketLaunchResponse | PlainMessage<MsgInstantBinaryOptionsMarketLaunchResponse> | undefined, b: MsgInstantBinaryOptionsMarketLaunchResponse | PlainMessage<MsgInstantBinaryOptionsMarketLaunchResponse> | undefined): boolean;
}
/**
 * MsgInstantExpiryFuturesMarketLaunch defines a SDK message for creating a new
 * expiry futures market by paying listing fee without governance
 *
 * @generated from message injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch
 */
export declare class MsgInstantExpiryFuturesMarketLaunch extends Message<MsgInstantExpiryFuturesMarketLaunch> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Ticker for the derivative market.
     *
     * @generated from field: string ticker = 2;
     */
    ticker: string;
    /**
     * type of coin to use as the quote currency
     *
     * @generated from field: string quote_denom = 3;
     */
    quoteDenom: string;
    /**
     * Oracle base currency
     *
     * @generated from field: string oracle_base = 4;
     */
    oracleBase: string;
    /**
     * Oracle quote currency
     *
     * @generated from field: string oracle_quote = 5;
     */
    oracleQuote: string;
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
     * Expiration time of the market
     *
     * @generated from field: int64 expiry = 8;
     */
    expiry: bigint;
    /**
     * maker_fee_rate defines the trade fee rate for makers on the expiry futures
     * market
     *
     * @generated from field: string maker_fee_rate = 9;
     */
    makerFeeRate: string;
    /**
     * taker_fee_rate defines the trade fee rate for takers on the expiry futures
     * market
     *
     * @generated from field: string taker_fee_rate = 10;
     */
    takerFeeRate: string;
    /**
     * initial_margin_ratio defines the initial margin ratio for the derivative
     * market
     *
     * @generated from field: string initial_margin_ratio = 11;
     */
    initialMarginRatio: string;
    /**
     * maintenance_margin_ratio defines the maintenance margin ratio for the
     * derivative market
     *
     * @generated from field: string maintenance_margin_ratio = 12;
     */
    maintenanceMarginRatio: string;
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
    constructor(data?: PartialMessage<MsgInstantExpiryFuturesMarketLaunch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInstantExpiryFuturesMarketLaunch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInstantExpiryFuturesMarketLaunch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInstantExpiryFuturesMarketLaunch;
    static equals(a: MsgInstantExpiryFuturesMarketLaunch | PlainMessage<MsgInstantExpiryFuturesMarketLaunch> | undefined, b: MsgInstantExpiryFuturesMarketLaunch | PlainMessage<MsgInstantExpiryFuturesMarketLaunch> | undefined): boolean;
}
/**
 * MsgInstantExpiryFuturesMarketLaunchResponse defines the
 * Msg/InstantExpiryFuturesMarketLaunch response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse
 */
export declare class MsgInstantExpiryFuturesMarketLaunchResponse extends Message<MsgInstantExpiryFuturesMarketLaunchResponse> {
    constructor(data?: PartialMessage<MsgInstantExpiryFuturesMarketLaunchResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInstantExpiryFuturesMarketLaunchResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInstantExpiryFuturesMarketLaunchResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInstantExpiryFuturesMarketLaunchResponse;
    static equals(a: MsgInstantExpiryFuturesMarketLaunchResponse | PlainMessage<MsgInstantExpiryFuturesMarketLaunchResponse> | undefined, b: MsgInstantExpiryFuturesMarketLaunchResponse | PlainMessage<MsgInstantExpiryFuturesMarketLaunchResponse> | undefined): boolean;
}
/**
 * MsgCreateSpotMarketOrder defines a SDK message for creating a new spot market
 * order.
 *
 * @generated from message injective.exchange.v1beta1.MsgCreateSpotMarketOrder
 */
export declare class MsgCreateSpotMarketOrder extends Message<MsgCreateSpotMarketOrder> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: injective.exchange.v1beta1.SpotOrder order = 2;
     */
    order?: SpotOrder;
    constructor(data?: PartialMessage<MsgCreateSpotMarketOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCreateSpotMarketOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateSpotMarketOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateSpotMarketOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateSpotMarketOrder;
    static equals(a: MsgCreateSpotMarketOrder | PlainMessage<MsgCreateSpotMarketOrder> | undefined, b: MsgCreateSpotMarketOrder | PlainMessage<MsgCreateSpotMarketOrder> | undefined): boolean;
}
/**
 * MsgCreateSpotMarketOrderResponse defines the Msg/CreateSpotMarketLimitOrder
 * response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse
 */
export declare class MsgCreateSpotMarketOrderResponse extends Message<MsgCreateSpotMarketOrderResponse> {
    /**
     * @generated from field: string order_hash = 1;
     */
    orderHash: string;
    /**
     * @generated from field: injective.exchange.v1beta1.SpotMarketOrderResults results = 2;
     */
    results?: SpotMarketOrderResults;
    constructor(data?: PartialMessage<MsgCreateSpotMarketOrderResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateSpotMarketOrderResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateSpotMarketOrderResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateSpotMarketOrderResponse;
    static equals(a: MsgCreateSpotMarketOrderResponse | PlainMessage<MsgCreateSpotMarketOrderResponse> | undefined, b: MsgCreateSpotMarketOrderResponse | PlainMessage<MsgCreateSpotMarketOrderResponse> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.SpotMarketOrderResults
 */
export declare class SpotMarketOrderResults extends Message<SpotMarketOrderResults> {
    /**
     * @generated from field: string quantity = 1;
     */
    quantity: string;
    /**
     * @generated from field: string price = 2;
     */
    price: string;
    /**
     * @generated from field: string fee = 3;
     */
    fee: string;
    constructor(data?: PartialMessage<SpotMarketOrderResults>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.SpotMarketOrderResults";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpotMarketOrderResults;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpotMarketOrderResults;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpotMarketOrderResults;
    static equals(a: SpotMarketOrderResults | PlainMessage<SpotMarketOrderResults> | undefined, b: SpotMarketOrderResults | PlainMessage<SpotMarketOrderResults> | undefined): boolean;
}
/**
 * A Cosmos-SDK MsgCreateDerivativeLimitOrder
 *
 * @generated from message injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder
 */
export declare class MsgCreateDerivativeLimitOrder extends Message<MsgCreateDerivativeLimitOrder> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeOrder order = 2;
     */
    order?: DerivativeOrder;
    constructor(data?: PartialMessage<MsgCreateDerivativeLimitOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateDerivativeLimitOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateDerivativeLimitOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateDerivativeLimitOrder;
    static equals(a: MsgCreateDerivativeLimitOrder | PlainMessage<MsgCreateDerivativeLimitOrder> | undefined, b: MsgCreateDerivativeLimitOrder | PlainMessage<MsgCreateDerivativeLimitOrder> | undefined): boolean;
}
/**
 * MsgCreateDerivativeLimitOrderResponse defines the
 * Msg/CreateDerivativeMarketOrder response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse
 */
export declare class MsgCreateDerivativeLimitOrderResponse extends Message<MsgCreateDerivativeLimitOrderResponse> {
    /**
     * @generated from field: string order_hash = 1;
     */
    orderHash: string;
    constructor(data?: PartialMessage<MsgCreateDerivativeLimitOrderResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateDerivativeLimitOrderResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateDerivativeLimitOrderResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateDerivativeLimitOrderResponse;
    static equals(a: MsgCreateDerivativeLimitOrderResponse | PlainMessage<MsgCreateDerivativeLimitOrderResponse> | undefined, b: MsgCreateDerivativeLimitOrderResponse | PlainMessage<MsgCreateDerivativeLimitOrderResponse> | undefined): boolean;
}
/**
 * A Cosmos-SDK MsgCreateBinaryOptionsLimitOrder
 *
 * @generated from message injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder
 */
export declare class MsgCreateBinaryOptionsLimitOrder extends Message<MsgCreateBinaryOptionsLimitOrder> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeOrder order = 2;
     */
    order?: DerivativeOrder;
    constructor(data?: PartialMessage<MsgCreateBinaryOptionsLimitOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateBinaryOptionsLimitOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateBinaryOptionsLimitOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateBinaryOptionsLimitOrder;
    static equals(a: MsgCreateBinaryOptionsLimitOrder | PlainMessage<MsgCreateBinaryOptionsLimitOrder> | undefined, b: MsgCreateBinaryOptionsLimitOrder | PlainMessage<MsgCreateBinaryOptionsLimitOrder> | undefined): boolean;
}
/**
 * MsgCreateBinaryOptionsLimitOrderResponse defines the
 * Msg/CreateBinaryOptionsLimitOrder response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrderResponse
 */
export declare class MsgCreateBinaryOptionsLimitOrderResponse extends Message<MsgCreateBinaryOptionsLimitOrderResponse> {
    /**
     * @generated from field: string order_hash = 1;
     */
    orderHash: string;
    constructor(data?: PartialMessage<MsgCreateBinaryOptionsLimitOrderResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrderResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateBinaryOptionsLimitOrderResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateBinaryOptionsLimitOrderResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateBinaryOptionsLimitOrderResponse;
    static equals(a: MsgCreateBinaryOptionsLimitOrderResponse | PlainMessage<MsgCreateBinaryOptionsLimitOrderResponse> | undefined, b: MsgCreateBinaryOptionsLimitOrderResponse | PlainMessage<MsgCreateBinaryOptionsLimitOrderResponse> | undefined): boolean;
}
/**
 * A Cosmos-SDK MsgBatchCreateDerivativeLimitOrders
 *
 * @generated from message injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders
 */
export declare class MsgBatchCreateDerivativeLimitOrders extends Message<MsgBatchCreateDerivativeLimitOrders> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeOrder orders = 2;
     */
    orders: DerivativeOrder[];
    constructor(data?: PartialMessage<MsgBatchCreateDerivativeLimitOrders>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchCreateDerivativeLimitOrders;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchCreateDerivativeLimitOrders;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchCreateDerivativeLimitOrders;
    static equals(a: MsgBatchCreateDerivativeLimitOrders | PlainMessage<MsgBatchCreateDerivativeLimitOrders> | undefined, b: MsgBatchCreateDerivativeLimitOrders | PlainMessage<MsgBatchCreateDerivativeLimitOrders> | undefined): boolean;
}
/**
 * MsgBatchCreateDerivativeLimitOrdersResponse defines the
 * Msg/BatchCreateDerivativeLimitOrders response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse
 */
export declare class MsgBatchCreateDerivativeLimitOrdersResponse extends Message<MsgBatchCreateDerivativeLimitOrdersResponse> {
    /**
     * @generated from field: repeated string order_hashes = 1;
     */
    orderHashes: string[];
    constructor(data?: PartialMessage<MsgBatchCreateDerivativeLimitOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchCreateDerivativeLimitOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchCreateDerivativeLimitOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchCreateDerivativeLimitOrdersResponse;
    static equals(a: MsgBatchCreateDerivativeLimitOrdersResponse | PlainMessage<MsgBatchCreateDerivativeLimitOrdersResponse> | undefined, b: MsgBatchCreateDerivativeLimitOrdersResponse | PlainMessage<MsgBatchCreateDerivativeLimitOrdersResponse> | undefined): boolean;
}
/**
 * MsgCancelSpotOrder defines the Msg/CancelSpotOrder response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgCancelSpotOrder
 */
export declare class MsgCancelSpotOrder extends Message<MsgCancelSpotOrder> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    /**
     * @generated from field: string subaccount_id = 3;
     */
    subaccountId: string;
    /**
     * @generated from field: string order_hash = 4;
     */
    orderHash: string;
    /**
     * @generated from field: string cid = 5;
     */
    cid: string;
    constructor(data?: PartialMessage<MsgCancelSpotOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCancelSpotOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelSpotOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelSpotOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelSpotOrder;
    static equals(a: MsgCancelSpotOrder | PlainMessage<MsgCancelSpotOrder> | undefined, b: MsgCancelSpotOrder | PlainMessage<MsgCancelSpotOrder> | undefined): boolean;
}
/**
 * MsgCancelSpotOrderResponse defines the Msg/CancelSpotOrder response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgCancelSpotOrderResponse
 */
export declare class MsgCancelSpotOrderResponse extends Message<MsgCancelSpotOrderResponse> {
    constructor(data?: PartialMessage<MsgCancelSpotOrderResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCancelSpotOrderResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelSpotOrderResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelSpotOrderResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelSpotOrderResponse;
    static equals(a: MsgCancelSpotOrderResponse | PlainMessage<MsgCancelSpotOrderResponse> | undefined, b: MsgCancelSpotOrderResponse | PlainMessage<MsgCancelSpotOrderResponse> | undefined): boolean;
}
/**
 * MsgBatchCancelSpotOrders defines the Msg/BatchCancelSpotOrders response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgBatchCancelSpotOrders
 */
export declare class MsgBatchCancelSpotOrders extends Message<MsgBatchCancelSpotOrders> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.OrderData data = 2;
     */
    data: OrderData[];
    constructor(data?: PartialMessage<MsgBatchCancelSpotOrders>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgBatchCancelSpotOrders";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchCancelSpotOrders;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchCancelSpotOrders;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchCancelSpotOrders;
    static equals(a: MsgBatchCancelSpotOrders | PlainMessage<MsgBatchCancelSpotOrders> | undefined, b: MsgBatchCancelSpotOrders | PlainMessage<MsgBatchCancelSpotOrders> | undefined): boolean;
}
/**
 * MsgBatchCancelSpotOrdersResponse defines the Msg/BatchCancelSpotOrders
 * response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse
 */
export declare class MsgBatchCancelSpotOrdersResponse extends Message<MsgBatchCancelSpotOrdersResponse> {
    /**
     * @generated from field: repeated bool success = 1;
     */
    success: boolean[];
    constructor(data?: PartialMessage<MsgBatchCancelSpotOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchCancelSpotOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchCancelSpotOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchCancelSpotOrdersResponse;
    static equals(a: MsgBatchCancelSpotOrdersResponse | PlainMessage<MsgBatchCancelSpotOrdersResponse> | undefined, b: MsgBatchCancelSpotOrdersResponse | PlainMessage<MsgBatchCancelSpotOrdersResponse> | undefined): boolean;
}
/**
 * MsgBatchCancelBinaryOptionsOrders defines the
 * Msg/BatchCancelBinaryOptionsOrders response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders
 */
export declare class MsgBatchCancelBinaryOptionsOrders extends Message<MsgBatchCancelBinaryOptionsOrders> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.OrderData data = 2;
     */
    data: OrderData[];
    constructor(data?: PartialMessage<MsgBatchCancelBinaryOptionsOrders>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchCancelBinaryOptionsOrders;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchCancelBinaryOptionsOrders;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchCancelBinaryOptionsOrders;
    static equals(a: MsgBatchCancelBinaryOptionsOrders | PlainMessage<MsgBatchCancelBinaryOptionsOrders> | undefined, b: MsgBatchCancelBinaryOptionsOrders | PlainMessage<MsgBatchCancelBinaryOptionsOrders> | undefined): boolean;
}
/**
 * BatchCancelBinaryOptionsOrdersResponse defines the
 * Msg/BatchCancelBinaryOptionsOrders response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrdersResponse
 */
export declare class MsgBatchCancelBinaryOptionsOrdersResponse extends Message<MsgBatchCancelBinaryOptionsOrdersResponse> {
    /**
     * @generated from field: repeated bool success = 1;
     */
    success: boolean[];
    constructor(data?: PartialMessage<MsgBatchCancelBinaryOptionsOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchCancelBinaryOptionsOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchCancelBinaryOptionsOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchCancelBinaryOptionsOrdersResponse;
    static equals(a: MsgBatchCancelBinaryOptionsOrdersResponse | PlainMessage<MsgBatchCancelBinaryOptionsOrdersResponse> | undefined, b: MsgBatchCancelBinaryOptionsOrdersResponse | PlainMessage<MsgBatchCancelBinaryOptionsOrdersResponse> | undefined): boolean;
}
/**
 * MsgBatchUpdateOrders defines the Msg/BatchUpdateOrders response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgBatchUpdateOrders
 */
export declare class MsgBatchUpdateOrders extends Message<MsgBatchUpdateOrders> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * subaccount_id only used for the spot_market_ids_to_cancel_all and
     * derivative_market_ids_to_cancel_all.
     *
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated string spot_market_ids_to_cancel_all = 3;
     */
    spotMarketIdsToCancelAll: string[];
    /**
     * @generated from field: repeated string derivative_market_ids_to_cancel_all = 4;
     */
    derivativeMarketIdsToCancelAll: string[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.OrderData spot_orders_to_cancel = 5;
     */
    spotOrdersToCancel: OrderData[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.OrderData derivative_orders_to_cancel = 6;
     */
    derivativeOrdersToCancel: OrderData[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.SpotOrder spot_orders_to_create = 7;
     */
    spotOrdersToCreate: SpotOrder[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeOrder derivative_orders_to_create = 8;
     */
    derivativeOrdersToCreate: DerivativeOrder[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.OrderData binary_options_orders_to_cancel = 9;
     */
    binaryOptionsOrdersToCancel: OrderData[];
    /**
     * @generated from field: repeated string binary_options_market_ids_to_cancel_all = 10;
     */
    binaryOptionsMarketIdsToCancelAll: string[];
    /**
     * @generated from field: repeated injective.exchange.v1beta1.DerivativeOrder binary_options_orders_to_create = 11;
     */
    binaryOptionsOrdersToCreate: DerivativeOrder[];
    constructor(data?: PartialMessage<MsgBatchUpdateOrders>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgBatchUpdateOrders";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchUpdateOrders;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchUpdateOrders;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchUpdateOrders;
    static equals(a: MsgBatchUpdateOrders | PlainMessage<MsgBatchUpdateOrders> | undefined, b: MsgBatchUpdateOrders | PlainMessage<MsgBatchUpdateOrders> | undefined): boolean;
}
/**
 * MsgBatchUpdateOrdersResponse defines the Msg/BatchUpdateOrders response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgBatchUpdateOrdersResponse
 */
export declare class MsgBatchUpdateOrdersResponse extends Message<MsgBatchUpdateOrdersResponse> {
    /**
     * @generated from field: repeated bool spot_cancel_success = 1;
     */
    spotCancelSuccess: boolean[];
    /**
     * @generated from field: repeated bool derivative_cancel_success = 2;
     */
    derivativeCancelSuccess: boolean[];
    /**
     * @generated from field: repeated string spot_order_hashes = 3;
     */
    spotOrderHashes: string[];
    /**
     * @generated from field: repeated string derivative_order_hashes = 4;
     */
    derivativeOrderHashes: string[];
    /**
     * @generated from field: repeated bool binary_options_cancel_success = 5;
     */
    binaryOptionsCancelSuccess: boolean[];
    /**
     * @generated from field: repeated string binary_options_order_hashes = 6;
     */
    binaryOptionsOrderHashes: string[];
    constructor(data?: PartialMessage<MsgBatchUpdateOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgBatchUpdateOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchUpdateOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchUpdateOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchUpdateOrdersResponse;
    static equals(a: MsgBatchUpdateOrdersResponse | PlainMessage<MsgBatchUpdateOrdersResponse> | undefined, b: MsgBatchUpdateOrdersResponse | PlainMessage<MsgBatchUpdateOrdersResponse> | undefined): boolean;
}
/**
 * A Cosmos-SDK MsgCreateDerivativeMarketOrder
 *
 * @generated from message injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder
 */
export declare class MsgCreateDerivativeMarketOrder extends Message<MsgCreateDerivativeMarketOrder> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeOrder order = 2;
     */
    order?: DerivativeOrder;
    constructor(data?: PartialMessage<MsgCreateDerivativeMarketOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateDerivativeMarketOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateDerivativeMarketOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateDerivativeMarketOrder;
    static equals(a: MsgCreateDerivativeMarketOrder | PlainMessage<MsgCreateDerivativeMarketOrder> | undefined, b: MsgCreateDerivativeMarketOrder | PlainMessage<MsgCreateDerivativeMarketOrder> | undefined): boolean;
}
/**
 * MsgCreateDerivativeMarketOrderResponse defines the
 * Msg/CreateDerivativeMarketOrder response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse
 */
export declare class MsgCreateDerivativeMarketOrderResponse extends Message<MsgCreateDerivativeMarketOrderResponse> {
    /**
     * @generated from field: string order_hash = 1;
     */
    orderHash: string;
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeMarketOrderResults results = 2;
     */
    results?: DerivativeMarketOrderResults;
    constructor(data?: PartialMessage<MsgCreateDerivativeMarketOrderResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateDerivativeMarketOrderResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateDerivativeMarketOrderResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateDerivativeMarketOrderResponse;
    static equals(a: MsgCreateDerivativeMarketOrderResponse | PlainMessage<MsgCreateDerivativeMarketOrderResponse> | undefined, b: MsgCreateDerivativeMarketOrderResponse | PlainMessage<MsgCreateDerivativeMarketOrderResponse> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.DerivativeMarketOrderResults
 */
export declare class DerivativeMarketOrderResults extends Message<DerivativeMarketOrderResults> {
    /**
     * @generated from field: string quantity = 1;
     */
    quantity: string;
    /**
     * @generated from field: string price = 2;
     */
    price: string;
    /**
     * @generated from field: string fee = 3;
     */
    fee: string;
    /**
     * @generated from field: injective.exchange.v1beta1.PositionDelta position_delta = 4;
     */
    positionDelta?: PositionDelta;
    /**
     * @generated from field: string payout = 5;
     */
    payout: string;
    constructor(data?: PartialMessage<DerivativeMarketOrderResults>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.DerivativeMarketOrderResults";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DerivativeMarketOrderResults;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DerivativeMarketOrderResults;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DerivativeMarketOrderResults;
    static equals(a: DerivativeMarketOrderResults | PlainMessage<DerivativeMarketOrderResults> | undefined, b: DerivativeMarketOrderResults | PlainMessage<DerivativeMarketOrderResults> | undefined): boolean;
}
/**
 * A Cosmos-SDK MsgCreateBinaryOptionsMarketOrder
 *
 * @generated from message injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder
 */
export declare class MsgCreateBinaryOptionsMarketOrder extends Message<MsgCreateBinaryOptionsMarketOrder> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeOrder order = 2;
     */
    order?: DerivativeOrder;
    constructor(data?: PartialMessage<MsgCreateBinaryOptionsMarketOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateBinaryOptionsMarketOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateBinaryOptionsMarketOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateBinaryOptionsMarketOrder;
    static equals(a: MsgCreateBinaryOptionsMarketOrder | PlainMessage<MsgCreateBinaryOptionsMarketOrder> | undefined, b: MsgCreateBinaryOptionsMarketOrder | PlainMessage<MsgCreateBinaryOptionsMarketOrder> | undefined): boolean;
}
/**
 * MsgCreateBinaryOptionsMarketOrderResponse defines the
 * Msg/CreateBinaryOptionsMarketOrder response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrderResponse
 */
export declare class MsgCreateBinaryOptionsMarketOrderResponse extends Message<MsgCreateBinaryOptionsMarketOrderResponse> {
    /**
     * @generated from field: string order_hash = 1;
     */
    orderHash: string;
    /**
     * @generated from field: injective.exchange.v1beta1.DerivativeMarketOrderResults results = 2;
     */
    results?: DerivativeMarketOrderResults;
    constructor(data?: PartialMessage<MsgCreateBinaryOptionsMarketOrderResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrderResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateBinaryOptionsMarketOrderResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateBinaryOptionsMarketOrderResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateBinaryOptionsMarketOrderResponse;
    static equals(a: MsgCreateBinaryOptionsMarketOrderResponse | PlainMessage<MsgCreateBinaryOptionsMarketOrderResponse> | undefined, b: MsgCreateBinaryOptionsMarketOrderResponse | PlainMessage<MsgCreateBinaryOptionsMarketOrderResponse> | undefined): boolean;
}
/**
 * MsgCancelDerivativeOrder defines the Msg/CancelDerivativeOrder response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgCancelDerivativeOrder
 */
export declare class MsgCancelDerivativeOrder extends Message<MsgCancelDerivativeOrder> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    /**
     * @generated from field: string subaccount_id = 3;
     */
    subaccountId: string;
    /**
     * @generated from field: string order_hash = 4;
     */
    orderHash: string;
    /**
     * bitwise combination of OrderMask enum values
     *
     * @generated from field: int32 order_mask = 5;
     */
    orderMask: number;
    /**
     * @generated from field: string cid = 6;
     */
    cid: string;
    constructor(data?: PartialMessage<MsgCancelDerivativeOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCancelDerivativeOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelDerivativeOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelDerivativeOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelDerivativeOrder;
    static equals(a: MsgCancelDerivativeOrder | PlainMessage<MsgCancelDerivativeOrder> | undefined, b: MsgCancelDerivativeOrder | PlainMessage<MsgCancelDerivativeOrder> | undefined): boolean;
}
/**
 * MsgCancelDerivativeOrderResponse defines the
 * Msg/CancelDerivativeOrderResponse response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse
 */
export declare class MsgCancelDerivativeOrderResponse extends Message<MsgCancelDerivativeOrderResponse> {
    constructor(data?: PartialMessage<MsgCancelDerivativeOrderResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelDerivativeOrderResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelDerivativeOrderResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelDerivativeOrderResponse;
    static equals(a: MsgCancelDerivativeOrderResponse | PlainMessage<MsgCancelDerivativeOrderResponse> | undefined, b: MsgCancelDerivativeOrderResponse | PlainMessage<MsgCancelDerivativeOrderResponse> | undefined): boolean;
}
/**
 * MsgCancelBinaryOptionsOrder defines the Msg/CancelBinaryOptionsOrder response
 * type.
 *
 * @generated from message injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder
 */
export declare class MsgCancelBinaryOptionsOrder extends Message<MsgCancelBinaryOptionsOrder> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    /**
     * @generated from field: string subaccount_id = 3;
     */
    subaccountId: string;
    /**
     * @generated from field: string order_hash = 4;
     */
    orderHash: string;
    /**
     * bitwise combination of OrderMask enum values
     *
     * @generated from field: int32 order_mask = 5;
     */
    orderMask: number;
    /**
     * @generated from field: string cid = 6;
     */
    cid: string;
    constructor(data?: PartialMessage<MsgCancelBinaryOptionsOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelBinaryOptionsOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelBinaryOptionsOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelBinaryOptionsOrder;
    static equals(a: MsgCancelBinaryOptionsOrder | PlainMessage<MsgCancelBinaryOptionsOrder> | undefined, b: MsgCancelBinaryOptionsOrder | PlainMessage<MsgCancelBinaryOptionsOrder> | undefined): boolean;
}
/**
 * MsgCancelBinaryOptionsOrderResponse defines the
 * Msg/CancelBinaryOptionsOrderResponse response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgCancelBinaryOptionsOrderResponse
 */
export declare class MsgCancelBinaryOptionsOrderResponse extends Message<MsgCancelBinaryOptionsOrderResponse> {
    constructor(data?: PartialMessage<MsgCancelBinaryOptionsOrderResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgCancelBinaryOptionsOrderResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelBinaryOptionsOrderResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelBinaryOptionsOrderResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelBinaryOptionsOrderResponse;
    static equals(a: MsgCancelBinaryOptionsOrderResponse | PlainMessage<MsgCancelBinaryOptionsOrderResponse> | undefined, b: MsgCancelBinaryOptionsOrderResponse | PlainMessage<MsgCancelBinaryOptionsOrderResponse> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.OrderData
 */
export declare class OrderData extends Message<OrderData> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    /**
     * @generated from field: string order_hash = 3;
     */
    orderHash: string;
    /**
     * bitwise combination of OrderMask enum values
     *
     * @generated from field: int32 order_mask = 4;
     */
    orderMask: number;
    /**
     * @generated from field: string cid = 5;
     */
    cid: string;
    constructor(data?: PartialMessage<OrderData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.OrderData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderData;
    static equals(a: OrderData | PlainMessage<OrderData> | undefined, b: OrderData | PlainMessage<OrderData> | undefined): boolean;
}
/**
 * MsgBatchCancelDerivativeOrders defines the Msg/CancelDerivativeOrders
 * response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders
 */
export declare class MsgBatchCancelDerivativeOrders extends Message<MsgBatchCancelDerivativeOrders> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated injective.exchange.v1beta1.OrderData data = 2;
     */
    data: OrderData[];
    constructor(data?: PartialMessage<MsgBatchCancelDerivativeOrders>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchCancelDerivativeOrders;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchCancelDerivativeOrders;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchCancelDerivativeOrders;
    static equals(a: MsgBatchCancelDerivativeOrders | PlainMessage<MsgBatchCancelDerivativeOrders> | undefined, b: MsgBatchCancelDerivativeOrders | PlainMessage<MsgBatchCancelDerivativeOrders> | undefined): boolean;
}
/**
 * MsgBatchCancelDerivativeOrdersResponse defines the
 * Msg/CancelDerivativeOrderResponse response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse
 */
export declare class MsgBatchCancelDerivativeOrdersResponse extends Message<MsgBatchCancelDerivativeOrdersResponse> {
    /**
     * @generated from field: repeated bool success = 1;
     */
    success: boolean[];
    constructor(data?: PartialMessage<MsgBatchCancelDerivativeOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchCancelDerivativeOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchCancelDerivativeOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchCancelDerivativeOrdersResponse;
    static equals(a: MsgBatchCancelDerivativeOrdersResponse | PlainMessage<MsgBatchCancelDerivativeOrdersResponse> | undefined, b: MsgBatchCancelDerivativeOrdersResponse | PlainMessage<MsgBatchCancelDerivativeOrdersResponse> | undefined): boolean;
}
/**
 * A Cosmos-SDK MsgSubaccountTransfer
 *
 * @generated from message injective.exchange.v1beta1.MsgSubaccountTransfer
 */
export declare class MsgSubaccountTransfer extends Message<MsgSubaccountTransfer> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string source_subaccount_id = 2;
     */
    sourceSubaccountId: string;
    /**
     * @generated from field: string destination_subaccount_id = 3;
     */
    destinationSubaccountId: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 4;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<MsgSubaccountTransfer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgSubaccountTransfer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubaccountTransfer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubaccountTransfer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubaccountTransfer;
    static equals(a: MsgSubaccountTransfer | PlainMessage<MsgSubaccountTransfer> | undefined, b: MsgSubaccountTransfer | PlainMessage<MsgSubaccountTransfer> | undefined): boolean;
}
/**
 * MsgSubaccountTransferResponse defines the Msg/SubaccountTransfer response
 * type.
 *
 * @generated from message injective.exchange.v1beta1.MsgSubaccountTransferResponse
 */
export declare class MsgSubaccountTransferResponse extends Message<MsgSubaccountTransferResponse> {
    constructor(data?: PartialMessage<MsgSubaccountTransferResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgSubaccountTransferResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubaccountTransferResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubaccountTransferResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubaccountTransferResponse;
    static equals(a: MsgSubaccountTransferResponse | PlainMessage<MsgSubaccountTransferResponse> | undefined, b: MsgSubaccountTransferResponse | PlainMessage<MsgSubaccountTransferResponse> | undefined): boolean;
}
/**
 * A Cosmos-SDK MsgExternalTransfer
 *
 * @generated from message injective.exchange.v1beta1.MsgExternalTransfer
 */
export declare class MsgExternalTransfer extends Message<MsgExternalTransfer> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string source_subaccount_id = 2;
     */
    sourceSubaccountId: string;
    /**
     * @generated from field: string destination_subaccount_id = 3;
     */
    destinationSubaccountId: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 4;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<MsgExternalTransfer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgExternalTransfer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExternalTransfer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExternalTransfer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExternalTransfer;
    static equals(a: MsgExternalTransfer | PlainMessage<MsgExternalTransfer> | undefined, b: MsgExternalTransfer | PlainMessage<MsgExternalTransfer> | undefined): boolean;
}
/**
 * MsgExternalTransferResponse defines the Msg/ExternalTransfer response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgExternalTransferResponse
 */
export declare class MsgExternalTransferResponse extends Message<MsgExternalTransferResponse> {
    constructor(data?: PartialMessage<MsgExternalTransferResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgExternalTransferResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExternalTransferResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExternalTransferResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExternalTransferResponse;
    static equals(a: MsgExternalTransferResponse | PlainMessage<MsgExternalTransferResponse> | undefined, b: MsgExternalTransferResponse | PlainMessage<MsgExternalTransferResponse> | undefined): boolean;
}
/**
 * A Cosmos-SDK MsgLiquidatePosition
 *
 * @generated from message injective.exchange.v1beta1.MsgLiquidatePosition
 */
export declare class MsgLiquidatePosition extends Message<MsgLiquidatePosition> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    /**
     * @generated from field: string market_id = 3;
     */
    marketId: string;
    /**
     * optional order to provide for liquidation
     *
     * @generated from field: injective.exchange.v1beta1.DerivativeOrder order = 4;
     */
    order?: DerivativeOrder;
    constructor(data?: PartialMessage<MsgLiquidatePosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgLiquidatePosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgLiquidatePosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgLiquidatePosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgLiquidatePosition;
    static equals(a: MsgLiquidatePosition | PlainMessage<MsgLiquidatePosition> | undefined, b: MsgLiquidatePosition | PlainMessage<MsgLiquidatePosition> | undefined): boolean;
}
/**
 * MsgLiquidatePositionResponse defines the Msg/LiquidatePosition response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgLiquidatePositionResponse
 */
export declare class MsgLiquidatePositionResponse extends Message<MsgLiquidatePositionResponse> {
    constructor(data?: PartialMessage<MsgLiquidatePositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgLiquidatePositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgLiquidatePositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgLiquidatePositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgLiquidatePositionResponse;
    static equals(a: MsgLiquidatePositionResponse | PlainMessage<MsgLiquidatePositionResponse> | undefined, b: MsgLiquidatePositionResponse | PlainMessage<MsgLiquidatePositionResponse> | undefined): boolean;
}
/**
 * A Cosmos-SDK MsgEmergencySettleMarket
 *
 * @generated from message injective.exchange.v1beta1.MsgEmergencySettleMarket
 */
export declare class MsgEmergencySettleMarket extends Message<MsgEmergencySettleMarket> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string subaccount_id = 2;
     */
    subaccountId: string;
    /**
     * @generated from field: string market_id = 3;
     */
    marketId: string;
    constructor(data?: PartialMessage<MsgEmergencySettleMarket>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgEmergencySettleMarket";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgEmergencySettleMarket;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgEmergencySettleMarket;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgEmergencySettleMarket;
    static equals(a: MsgEmergencySettleMarket | PlainMessage<MsgEmergencySettleMarket> | undefined, b: MsgEmergencySettleMarket | PlainMessage<MsgEmergencySettleMarket> | undefined): boolean;
}
/**
 * MsgEmergencySettleMarketResponse defines the Msg/EmergencySettleMarket
 * response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgEmergencySettleMarketResponse
 */
export declare class MsgEmergencySettleMarketResponse extends Message<MsgEmergencySettleMarketResponse> {
    constructor(data?: PartialMessage<MsgEmergencySettleMarketResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgEmergencySettleMarketResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgEmergencySettleMarketResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgEmergencySettleMarketResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgEmergencySettleMarketResponse;
    static equals(a: MsgEmergencySettleMarketResponse | PlainMessage<MsgEmergencySettleMarketResponse> | undefined, b: MsgEmergencySettleMarketResponse | PlainMessage<MsgEmergencySettleMarketResponse> | undefined): boolean;
}
/**
 * A Cosmos-SDK MsgIncreasePositionMargin
 *
 * @generated from message injective.exchange.v1beta1.MsgIncreasePositionMargin
 */
export declare class MsgIncreasePositionMargin extends Message<MsgIncreasePositionMargin> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string source_subaccount_id = 2;
     */
    sourceSubaccountId: string;
    /**
     * @generated from field: string destination_subaccount_id = 3;
     */
    destinationSubaccountId: string;
    /**
     * @generated from field: string market_id = 4;
     */
    marketId: string;
    /**
     * amount defines the amount of margin to add to the position
     *
     * @generated from field: string amount = 5;
     */
    amount: string;
    constructor(data?: PartialMessage<MsgIncreasePositionMargin>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgIncreasePositionMargin";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIncreasePositionMargin;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIncreasePositionMargin;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIncreasePositionMargin;
    static equals(a: MsgIncreasePositionMargin | PlainMessage<MsgIncreasePositionMargin> | undefined, b: MsgIncreasePositionMargin | PlainMessage<MsgIncreasePositionMargin> | undefined): boolean;
}
/**
 * MsgIncreasePositionMarginResponse defines the Msg/IncreasePositionMargin
 * response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgIncreasePositionMarginResponse
 */
export declare class MsgIncreasePositionMarginResponse extends Message<MsgIncreasePositionMarginResponse> {
    constructor(data?: PartialMessage<MsgIncreasePositionMarginResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgIncreasePositionMarginResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIncreasePositionMarginResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIncreasePositionMarginResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIncreasePositionMarginResponse;
    static equals(a: MsgIncreasePositionMarginResponse | PlainMessage<MsgIncreasePositionMarginResponse> | undefined, b: MsgIncreasePositionMarginResponse | PlainMessage<MsgIncreasePositionMarginResponse> | undefined): boolean;
}
/**
 * MsgPrivilegedExecuteContract defines the Msg/Exec message type
 *
 * @generated from message injective.exchange.v1beta1.MsgPrivilegedExecuteContract
 */
export declare class MsgPrivilegedExecuteContract extends Message<MsgPrivilegedExecuteContract> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * funds defines the user's bank coins used to fund the execution (e.g.
     * 100inj).
     *
     * @generated from field: string funds = 2;
     */
    funds: string;
    /**
     * contract_address defines the contract address to execute
     *
     * @generated from field: string contract_address = 3;
     */
    contractAddress: string;
    /**
     * data defines the call data used when executing the contract
     *
     * @generated from field: string data = 4;
     */
    data: string;
    constructor(data?: PartialMessage<MsgPrivilegedExecuteContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgPrivilegedExecuteContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPrivilegedExecuteContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPrivilegedExecuteContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPrivilegedExecuteContract;
    static equals(a: MsgPrivilegedExecuteContract | PlainMessage<MsgPrivilegedExecuteContract> | undefined, b: MsgPrivilegedExecuteContract | PlainMessage<MsgPrivilegedExecuteContract> | undefined): boolean;
}
/**
 * MsgPrivilegedExecuteContractResponse defines the Msg/Exec response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgPrivilegedExecuteContractResponse
 */
export declare class MsgPrivilegedExecuteContractResponse extends Message<MsgPrivilegedExecuteContractResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin funds_diff = 1;
     */
    fundsDiff: Coin[];
    constructor(data?: PartialMessage<MsgPrivilegedExecuteContractResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgPrivilegedExecuteContractResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPrivilegedExecuteContractResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPrivilegedExecuteContractResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPrivilegedExecuteContractResponse;
    static equals(a: MsgPrivilegedExecuteContractResponse | PlainMessage<MsgPrivilegedExecuteContractResponse> | undefined, b: MsgPrivilegedExecuteContractResponse | PlainMessage<MsgPrivilegedExecuteContractResponse> | undefined): boolean;
}
/**
 * A Cosmos-SDK MsgRewardsOptOut
 *
 * @generated from message injective.exchange.v1beta1.MsgRewardsOptOut
 */
export declare class MsgRewardsOptOut extends Message<MsgRewardsOptOut> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    constructor(data?: PartialMessage<MsgRewardsOptOut>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgRewardsOptOut";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRewardsOptOut;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRewardsOptOut;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRewardsOptOut;
    static equals(a: MsgRewardsOptOut | PlainMessage<MsgRewardsOptOut> | undefined, b: MsgRewardsOptOut | PlainMessage<MsgRewardsOptOut> | undefined): boolean;
}
/**
 * MsgRewardsOptOutResponse defines the Msg/RewardsOptOut response type.
 *
 * @generated from message injective.exchange.v1beta1.MsgRewardsOptOutResponse
 */
export declare class MsgRewardsOptOutResponse extends Message<MsgRewardsOptOutResponse> {
    constructor(data?: PartialMessage<MsgRewardsOptOutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgRewardsOptOutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRewardsOptOutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRewardsOptOutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRewardsOptOutResponse;
    static equals(a: MsgRewardsOptOutResponse | PlainMessage<MsgRewardsOptOutResponse> | undefined, b: MsgRewardsOptOutResponse | PlainMessage<MsgRewardsOptOutResponse> | undefined): boolean;
}
/**
 * A Cosmos-SDK MsgReclaimLockedFunds
 *
 * @generated from message injective.exchange.v1beta1.MsgReclaimLockedFunds
 */
export declare class MsgReclaimLockedFunds extends Message<MsgReclaimLockedFunds> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: bytes lockedAccountPubKey = 2;
     */
    lockedAccountPubKey: Uint8Array;
    /**
     * @generated from field: bytes signature = 3;
     */
    signature: Uint8Array;
    constructor(data?: PartialMessage<MsgReclaimLockedFunds>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgReclaimLockedFunds";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgReclaimLockedFunds;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgReclaimLockedFunds;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgReclaimLockedFunds;
    static equals(a: MsgReclaimLockedFunds | PlainMessage<MsgReclaimLockedFunds> | undefined, b: MsgReclaimLockedFunds | PlainMessage<MsgReclaimLockedFunds> | undefined): boolean;
}
/**
 * MsgReclaimLockedFundsResponse defines the Msg/ReclaimLockedFunds response
 * type.
 *
 * @generated from message injective.exchange.v1beta1.MsgReclaimLockedFundsResponse
 */
export declare class MsgReclaimLockedFundsResponse extends Message<MsgReclaimLockedFundsResponse> {
    constructor(data?: PartialMessage<MsgReclaimLockedFundsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgReclaimLockedFundsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgReclaimLockedFundsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgReclaimLockedFundsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgReclaimLockedFundsResponse;
    static equals(a: MsgReclaimLockedFundsResponse | PlainMessage<MsgReclaimLockedFundsResponse> | undefined, b: MsgReclaimLockedFundsResponse | PlainMessage<MsgReclaimLockedFundsResponse> | undefined): boolean;
}
/**
 * MsgSignData defines an arbitrary, general-purpose, off-chain message
 *
 * @generated from message injective.exchange.v1beta1.MsgSignData
 */
export declare class MsgSignData extends Message<MsgSignData> {
    /**
     * Signer is the sdk.AccAddress of the message signer
     *
     * @generated from field: bytes Signer = 1;
     */
    Signer: Uint8Array;
    /**
     * Data represents the raw bytes of the content that is signed (text, json,
     * etc)
     *
     * @generated from field: bytes Data = 2;
     */
    Data: Uint8Array;
    constructor(data?: PartialMessage<MsgSignData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgSignData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSignData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSignData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSignData;
    static equals(a: MsgSignData | PlainMessage<MsgSignData> | undefined, b: MsgSignData | PlainMessage<MsgSignData> | undefined): boolean;
}
/**
 * MsgSignDoc defines an arbitrary, general-purpose, off-chain message
 *
 * @generated from message injective.exchange.v1beta1.MsgSignDoc
 */
export declare class MsgSignDoc extends Message<MsgSignDoc> {
    /**
     * @generated from field: string sign_type = 1;
     */
    signType: string;
    /**
     * @generated from field: injective.exchange.v1beta1.MsgSignData value = 2;
     */
    value?: MsgSignData;
    constructor(data?: PartialMessage<MsgSignDoc>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgSignDoc";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSignDoc;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSignDoc;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSignDoc;
    static equals(a: MsgSignDoc | PlainMessage<MsgSignDoc> | undefined, b: MsgSignDoc | PlainMessage<MsgSignDoc> | undefined): boolean;
}
/**
 * MsgAdminUpdateBinaryOptionsMarket is used by the market Admin to operate the
 * market
 *
 * @generated from message injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket
 */
export declare class MsgAdminUpdateBinaryOptionsMarket extends Message<MsgAdminUpdateBinaryOptionsMarket> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    /**
     * new price at which market will be settled
     *
     * @generated from field: string settlement_price = 3;
     */
    settlementPrice: string;
    /**
     * expiration timestamp
     *
     * @generated from field: int64 expiration_timestamp = 4;
     */
    expirationTimestamp: bigint;
    /**
     * expiration timestamp
     *
     * @generated from field: int64 settlement_timestamp = 5;
     */
    settlementTimestamp: bigint;
    /**
     * Status of the market
     *
     * @generated from field: injective.exchange.v1beta1.MarketStatus status = 6;
     */
    status: MarketStatus;
    constructor(data?: PartialMessage<MsgAdminUpdateBinaryOptionsMarket>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAdminUpdateBinaryOptionsMarket;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAdminUpdateBinaryOptionsMarket;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAdminUpdateBinaryOptionsMarket;
    static equals(a: MsgAdminUpdateBinaryOptionsMarket | PlainMessage<MsgAdminUpdateBinaryOptionsMarket> | undefined, b: MsgAdminUpdateBinaryOptionsMarket | PlainMessage<MsgAdminUpdateBinaryOptionsMarket> | undefined): boolean;
}
/**
 * MsgAdminUpdateBinaryOptionsMarketResponse is the response for
 * AdminUpdateBinaryOptionsMarket rpc method
 *
 * @generated from message injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarketResponse
 */
export declare class MsgAdminUpdateBinaryOptionsMarketResponse extends Message<MsgAdminUpdateBinaryOptionsMarketResponse> {
    constructor(data?: PartialMessage<MsgAdminUpdateBinaryOptionsMarketResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarketResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAdminUpdateBinaryOptionsMarketResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAdminUpdateBinaryOptionsMarketResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAdminUpdateBinaryOptionsMarketResponse;
    static equals(a: MsgAdminUpdateBinaryOptionsMarketResponse | PlainMessage<MsgAdminUpdateBinaryOptionsMarketResponse> | undefined, b: MsgAdminUpdateBinaryOptionsMarketResponse | PlainMessage<MsgAdminUpdateBinaryOptionsMarketResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map