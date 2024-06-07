import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { TakerFeesTracker } from "../../poolmanager/v1beta1/genesis_pb.js";
/**
 * TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens
 *
 * @generated from message osmosis.protorev.v1beta1.TokenPairArbRoutes
 */
export declare class TokenPairArbRoutes extends Message<TokenPairArbRoutes> {
    /**
     * Stores all of the possible hot paths for a given pair of tokens
     *
     * @generated from field: repeated osmosis.protorev.v1beta1.Route arb_routes = 1;
     */
    arbRoutes: Route[];
    /**
     * Token denomination of the first asset
     *
     * @generated from field: string token_in = 2;
     */
    tokenIn: string;
    /**
     * Token denomination of the second asset
     *
     * @generated from field: string token_out = 3;
     */
    tokenOut: string;
    constructor(data?: PartialMessage<TokenPairArbRoutes>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.TokenPairArbRoutes";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenPairArbRoutes;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenPairArbRoutes;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenPairArbRoutes;
    static equals(a: TokenPairArbRoutes | PlainMessage<TokenPairArbRoutes> | undefined, b: TokenPairArbRoutes | PlainMessage<TokenPairArbRoutes> | undefined): boolean;
}
/**
 * Route is a hot route for a given pair of tokens
 *
 * @generated from message osmosis.protorev.v1beta1.Route
 */
export declare class Route extends Message<Route> {
    /**
     * The pool IDs that are traversed in the directed cyclic graph (traversed
     * left
     * -> right)
     *
     * @generated from field: repeated osmosis.protorev.v1beta1.Trade trades = 1;
     */
    trades: Trade[];
    /**
     * The step size that will be used to find the optimal swap amount in the
     * binary search
     *
     * @generated from field: string step_size = 2;
     */
    stepSize: string;
    constructor(data?: PartialMessage<Route>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.Route";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Route;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Route;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Route;
    static equals(a: Route | PlainMessage<Route> | undefined, b: Route | PlainMessage<Route> | undefined): boolean;
}
/**
 * Trade is a single trade in a route
 *
 * @generated from message osmosis.protorev.v1beta1.Trade
 */
export declare class Trade extends Message<Trade> {
    /**
     * The pool id of the pool that is traded on
     *
     * @generated from field: uint64 pool = 1;
     */
    pool: bigint;
    /**
     * The denom of the token that is traded
     *
     * @generated from field: string token_in = 2;
     */
    tokenIn: string;
    /**
     * The denom of the token that is received
     *
     * @generated from field: string token_out = 3;
     */
    tokenOut: string;
    constructor(data?: PartialMessage<Trade>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.Trade";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Trade;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Trade;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Trade;
    static equals(a: Trade | PlainMessage<Trade> | undefined, b: Trade | PlainMessage<Trade> | undefined): boolean;
}
/**
 * RouteStatistics contains the number of trades the module has executed after a
 * swap on a given route and the profits from the trades
 *
 * @generated from message osmosis.protorev.v1beta1.RouteStatistics
 */
export declare class RouteStatistics extends Message<RouteStatistics> {
    /**
     * profits is the total profit from all trades on this route
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin profits = 1;
     */
    profits: Coin[];
    /**
     * number_of_trades is the number of trades the module has executed using this
     * route
     *
     * @generated from field: string number_of_trades = 2;
     */
    numberOfTrades: string;
    /**
     * route is the route that was used (pool ids along the arbitrage route)
     *
     * @generated from field: repeated uint64 route = 3;
     */
    route: bigint[];
    constructor(data?: PartialMessage<RouteStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.RouteStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RouteStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RouteStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RouteStatistics;
    static equals(a: RouteStatistics | PlainMessage<RouteStatistics> | undefined, b: RouteStatistics | PlainMessage<RouteStatistics> | undefined): boolean;
}
/**
 * PoolWeights contains the weights of all of the different pool types. This
 * distinction is made and necessary because the execution time ranges
 * significantly between the different pool types. Each weight roughly
 * corresponds to the amount of time (in ms) it takes to execute a swap on that
 * pool type.
 *
 * DEPRECATED: This field is deprecated and will be removed in the next
 * release. It is replaced by the `info_by_pool_type` field.
 *
 * @generated from message osmosis.protorev.v1beta1.PoolWeights
 */
export declare class PoolWeights extends Message<PoolWeights> {
    /**
     * The weight of a stableswap pool
     *
     * @generated from field: uint64 stable_weight = 1;
     */
    stableWeight: bigint;
    /**
     * The weight of a balancer pool
     *
     * @generated from field: uint64 balancer_weight = 2;
     */
    balancerWeight: bigint;
    /**
     * The weight of a concentrated pool
     *
     * @generated from field: uint64 concentrated_weight = 3;
     */
    concentratedWeight: bigint;
    /**
     * The weight of a cosmwasm pool
     *
     * @generated from field: uint64 cosmwasm_weight = 4;
     */
    cosmwasmWeight: bigint;
    constructor(data?: PartialMessage<PoolWeights>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.PoolWeights";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolWeights;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolWeights;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolWeights;
    static equals(a: PoolWeights | PlainMessage<PoolWeights> | undefined, b: PoolWeights | PlainMessage<PoolWeights> | undefined): boolean;
}
/**
 * InfoByPoolType contains information pertaining to how expensive (in terms of
 * gas and time) it is to execute a swap on a given pool type. This distinction
 * is made and necessary because the execution time ranges significantly between
 * the different pool types.
 *
 * @generated from message osmosis.protorev.v1beta1.InfoByPoolType
 */
export declare class InfoByPoolType extends Message<InfoByPoolType> {
    /**
     * The stable pool info
     *
     * @generated from field: osmosis.protorev.v1beta1.StablePoolInfo stable = 1;
     */
    stable?: StablePoolInfo;
    /**
     * The balancer pool info
     *
     * @generated from field: osmosis.protorev.v1beta1.BalancerPoolInfo balancer = 2;
     */
    balancer?: BalancerPoolInfo;
    /**
     * The concentrated pool info
     *
     * @generated from field: osmosis.protorev.v1beta1.ConcentratedPoolInfo concentrated = 3;
     */
    concentrated?: ConcentratedPoolInfo;
    /**
     * The cosmwasm pool info
     *
     * @generated from field: osmosis.protorev.v1beta1.CosmwasmPoolInfo cosmwasm = 4;
     */
    cosmwasm?: CosmwasmPoolInfo;
    constructor(data?: PartialMessage<InfoByPoolType>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.InfoByPoolType";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InfoByPoolType;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InfoByPoolType;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InfoByPoolType;
    static equals(a: InfoByPoolType | PlainMessage<InfoByPoolType> | undefined, b: InfoByPoolType | PlainMessage<InfoByPoolType> | undefined): boolean;
}
/**
 * StablePoolInfo contains meta data pertaining to a stableswap pool type.
 *
 * @generated from message osmosis.protorev.v1beta1.StablePoolInfo
 */
export declare class StablePoolInfo extends Message<StablePoolInfo> {
    /**
     * The weight of a stableswap pool
     *
     * @generated from field: uint64 weight = 1;
     */
    weight: bigint;
    constructor(data?: PartialMessage<StablePoolInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.StablePoolInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StablePoolInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StablePoolInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StablePoolInfo;
    static equals(a: StablePoolInfo | PlainMessage<StablePoolInfo> | undefined, b: StablePoolInfo | PlainMessage<StablePoolInfo> | undefined): boolean;
}
/**
 * BalancerPoolInfo contains meta data pertaining to a balancer pool type.
 *
 * @generated from message osmosis.protorev.v1beta1.BalancerPoolInfo
 */
export declare class BalancerPoolInfo extends Message<BalancerPoolInfo> {
    /**
     * The weight of a balancer pool
     *
     * @generated from field: uint64 weight = 1;
     */
    weight: bigint;
    constructor(data?: PartialMessage<BalancerPoolInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.BalancerPoolInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BalancerPoolInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BalancerPoolInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BalancerPoolInfo;
    static equals(a: BalancerPoolInfo | PlainMessage<BalancerPoolInfo> | undefined, b: BalancerPoolInfo | PlainMessage<BalancerPoolInfo> | undefined): boolean;
}
/**
 * ConcentratedPoolInfo contains meta data pertaining to a concentrated pool
 * type.
 *
 * @generated from message osmosis.protorev.v1beta1.ConcentratedPoolInfo
 */
export declare class ConcentratedPoolInfo extends Message<ConcentratedPoolInfo> {
    /**
     * The weight of a concentrated pool
     *
     * @generated from field: uint64 weight = 1;
     */
    weight: bigint;
    /**
     * The maximum number of ticks we can move when rebalancing
     *
     * @generated from field: uint64 max_ticks_crossed = 2;
     */
    maxTicksCrossed: bigint;
    constructor(data?: PartialMessage<ConcentratedPoolInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.ConcentratedPoolInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConcentratedPoolInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConcentratedPoolInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConcentratedPoolInfo;
    static equals(a: ConcentratedPoolInfo | PlainMessage<ConcentratedPoolInfo> | undefined, b: ConcentratedPoolInfo | PlainMessage<ConcentratedPoolInfo> | undefined): boolean;
}
/**
 * CosmwasmPoolInfo contains meta data pertaining to a cosmwasm pool type.
 *
 * @generated from message osmosis.protorev.v1beta1.CosmwasmPoolInfo
 */
export declare class CosmwasmPoolInfo extends Message<CosmwasmPoolInfo> {
    /**
     * The weight of a cosmwasm pool (by contract address)
     *
     * @generated from field: repeated osmosis.protorev.v1beta1.WeightMap weight_maps = 1;
     */
    weightMaps: WeightMap[];
    constructor(data?: PartialMessage<CosmwasmPoolInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.CosmwasmPoolInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CosmwasmPoolInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CosmwasmPoolInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CosmwasmPoolInfo;
    static equals(a: CosmwasmPoolInfo | PlainMessage<CosmwasmPoolInfo> | undefined, b: CosmwasmPoolInfo | PlainMessage<CosmwasmPoolInfo> | undefined): boolean;
}
/**
 * WeightMap maps a contract address to a weight. The weight of an address
 * corresponds to the amount of ms required to execute a swap on that contract.
 *
 * @generated from message osmosis.protorev.v1beta1.WeightMap
 */
export declare class WeightMap extends Message<WeightMap> {
    /**
     * The weight of a cosmwasm pool (by contract address)
     *
     * @generated from field: uint64 weight = 1;
     */
    weight: bigint;
    /**
     * The contract address
     *
     * @generated from field: string contract_address = 2;
     */
    contractAddress: string;
    constructor(data?: PartialMessage<WeightMap>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.WeightMap";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WeightMap;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WeightMap;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WeightMap;
    static equals(a: WeightMap | PlainMessage<WeightMap> | undefined, b: WeightMap | PlainMessage<WeightMap> | undefined): boolean;
}
/**
 * BaseDenom represents a single base denom that the module uses for its
 * arbitrage trades. It contains the denom name alongside the step size of the
 * binary search that is used to find the optimal swap amount
 *
 * @generated from message osmosis.protorev.v1beta1.BaseDenom
 */
export declare class BaseDenom extends Message<BaseDenom> {
    /**
     * The denom i.e. name of the base denom (ex. uosmo)
     *
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * The step size of the binary search that is used to find the optimal swap
     * amount
     *
     * @generated from field: string step_size = 2;
     */
    stepSize: string;
    constructor(data?: PartialMessage<BaseDenom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.BaseDenom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BaseDenom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BaseDenom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BaseDenom;
    static equals(a: BaseDenom | PlainMessage<BaseDenom> | undefined, b: BaseDenom | PlainMessage<BaseDenom> | undefined): boolean;
}
/**
 * BaseDenoms represents all of the base denoms that the module uses for its
 * arbitrage trades.
 *
 * @generated from message osmosis.protorev.v1beta1.BaseDenoms
 */
export declare class BaseDenoms extends Message<BaseDenoms> {
    /**
     * @generated from field: repeated osmosis.protorev.v1beta1.BaseDenom base_denoms = 1;
     */
    baseDenoms: BaseDenom[];
    constructor(data?: PartialMessage<BaseDenoms>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.BaseDenoms";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BaseDenoms;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BaseDenoms;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BaseDenoms;
    static equals(a: BaseDenoms | PlainMessage<BaseDenoms> | undefined, b: BaseDenoms | PlainMessage<BaseDenoms> | undefined): boolean;
}
/**
 * @generated from message osmosis.protorev.v1beta1.AllProtocolRevenue
 */
export declare class AllProtocolRevenue extends Message<AllProtocolRevenue> {
    /**
     * @generated from field: osmosis.poolmanager.v1beta1.TakerFeesTracker taker_fees_tracker = 1;
     */
    takerFeesTracker?: TakerFeesTracker;
    /**
     * @generated from field: osmosis.protorev.v1beta1.CyclicArbTracker cyclic_arb_tracker = 3;
     */
    cyclicArbTracker?: CyclicArbTracker;
    constructor(data?: PartialMessage<AllProtocolRevenue>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.AllProtocolRevenue";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllProtocolRevenue;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllProtocolRevenue;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllProtocolRevenue;
    static equals(a: AllProtocolRevenue | PlainMessage<AllProtocolRevenue> | undefined, b: AllProtocolRevenue | PlainMessage<AllProtocolRevenue> | undefined): boolean;
}
/**
 * @generated from message osmosis.protorev.v1beta1.CyclicArbTracker
 */
export declare class CyclicArbTracker extends Message<CyclicArbTracker> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin cyclic_arb = 1;
     */
    cyclicArb: Coin[];
    /**
     * @generated from field: int64 height_accounting_starts_from = 2;
     */
    heightAccountingStartsFrom: bigint;
    constructor(data?: PartialMessage<CyclicArbTracker>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.CyclicArbTracker";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CyclicArbTracker;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CyclicArbTracker;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CyclicArbTracker;
    static equals(a: CyclicArbTracker | PlainMessage<CyclicArbTracker> | undefined, b: CyclicArbTracker | PlainMessage<CyclicArbTracker> | undefined): boolean;
}
//# sourceMappingURL=protorev_pb.d.ts.map