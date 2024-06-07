import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
import { FullPositionBreakdown, PositionWithPeriodLock } from "./position_pb.js";
import { Params } from "../params_pb.js";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { UptimeTracker } from "./tickInfo_pb.js";
import { IncentiveRecord } from "./incentive_record_pb.js";
/**
 * =============================== UserPositions
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.UserPositionsRequest
 */
export declare class UserPositionsRequest extends Message<UserPositionsRequest> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    /**
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 3;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<UserPositionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.UserPositionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserPositionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserPositionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserPositionsRequest;
    static equals(a: UserPositionsRequest | PlainMessage<UserPositionsRequest> | undefined, b: UserPositionsRequest | PlainMessage<UserPositionsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.UserPositionsResponse
 */
export declare class UserPositionsResponse extends Message<UserPositionsResponse> {
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown positions = 1;
     */
    positions: FullPositionBreakdown[];
    /**
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<UserPositionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.UserPositionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserPositionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserPositionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserPositionsResponse;
    static equals(a: UserPositionsResponse | PlainMessage<UserPositionsResponse> | undefined, b: UserPositionsResponse | PlainMessage<UserPositionsResponse> | undefined): boolean;
}
/**
 * =============================== PositionById
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.PositionByIdRequest
 */
export declare class PositionByIdRequest extends Message<PositionByIdRequest> {
    /**
     * @generated from field: uint64 position_id = 1;
     */
    positionId: bigint;
    constructor(data?: PartialMessage<PositionByIdRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PositionByIdRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PositionByIdRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PositionByIdRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PositionByIdRequest;
    static equals(a: PositionByIdRequest | PlainMessage<PositionByIdRequest> | undefined, b: PositionByIdRequest | PlainMessage<PositionByIdRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.PositionByIdResponse
 */
export declare class PositionByIdResponse extends Message<PositionByIdResponse> {
    /**
     * @generated from field: osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown position = 1;
     */
    position?: FullPositionBreakdown;
    constructor(data?: PartialMessage<PositionByIdResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PositionByIdResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PositionByIdResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PositionByIdResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PositionByIdResponse;
    static equals(a: PositionByIdResponse | PlainMessage<PositionByIdResponse> | undefined, b: PositionByIdResponse | PlainMessage<PositionByIdResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.NumPoolPositionsRequest
 */
export declare class NumPoolPositionsRequest extends Message<NumPoolPositionsRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<NumPoolPositionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.NumPoolPositionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NumPoolPositionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NumPoolPositionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NumPoolPositionsRequest;
    static equals(a: NumPoolPositionsRequest | PlainMessage<NumPoolPositionsRequest> | undefined, b: NumPoolPositionsRequest | PlainMessage<NumPoolPositionsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.NumPoolPositionsResponse
 */
export declare class NumPoolPositionsResponse extends Message<NumPoolPositionsResponse> {
    /**
     * @generated from field: uint64 position_count = 1;
     */
    positionCount: bigint;
    constructor(data?: PartialMessage<NumPoolPositionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.NumPoolPositionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NumPoolPositionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NumPoolPositionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NumPoolPositionsResponse;
    static equals(a: NumPoolPositionsResponse | PlainMessage<NumPoolPositionsResponse> | undefined, b: NumPoolPositionsResponse | PlainMessage<NumPoolPositionsResponse> | undefined): boolean;
}
/**
 * =============================== Pools
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.PoolsRequest
 */
export declare class PoolsRequest extends Message<PoolsRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<PoolsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PoolsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolsRequest;
    static equals(a: PoolsRequest | PlainMessage<PoolsRequest> | undefined, b: PoolsRequest | PlainMessage<PoolsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.PoolsResponse
 */
export declare class PoolsResponse extends Message<PoolsResponse> {
    /**
     * @generated from field: repeated google.protobuf.Any pools = 1;
     */
    pools: Any[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<PoolsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PoolsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolsResponse;
    static equals(a: PoolsResponse | PlainMessage<PoolsResponse> | undefined, b: PoolsResponse | PlainMessage<PoolsResponse> | undefined): boolean;
}
/**
 * =============================== ModuleParams
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.ParamsRequest
 */
export declare class ParamsRequest extends Message<ParamsRequest> {
    constructor(data?: PartialMessage<ParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.ParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsRequest;
    static equals(a: ParamsRequest | PlainMessage<ParamsRequest> | undefined, b: ParamsRequest | PlainMessage<ParamsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.ParamsResponse
 */
export declare class ParamsResponse extends Message<ParamsResponse> {
    /**
     * @generated from field: osmosis.concentratedliquidity.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<ParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.ParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsResponse;
    static equals(a: ParamsResponse | PlainMessage<ParamsResponse> | undefined, b: ParamsResponse | PlainMessage<ParamsResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.TickLiquidityNet
 */
export declare class TickLiquidityNet extends Message<TickLiquidityNet> {
    /**
     * @generated from field: string liquidity_net = 1;
     */
    liquidityNet: string;
    /**
     * @generated from field: int64 tick_index = 2;
     */
    tickIndex: bigint;
    constructor(data?: PartialMessage<TickLiquidityNet>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.TickLiquidityNet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TickLiquidityNet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TickLiquidityNet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TickLiquidityNet;
    static equals(a: TickLiquidityNet | PlainMessage<TickLiquidityNet> | undefined, b: TickLiquidityNet | PlainMessage<TickLiquidityNet> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange
 */
export declare class LiquidityDepthWithRange extends Message<LiquidityDepthWithRange> {
    /**
     * @generated from field: string liquidity_amount = 1;
     */
    liquidityAmount: string;
    /**
     * @generated from field: int64 lower_tick = 2;
     */
    lowerTick: bigint;
    /**
     * @generated from field: int64 upper_tick = 3;
     */
    upperTick: bigint;
    constructor(data?: PartialMessage<LiquidityDepthWithRange>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LiquidityDepthWithRange;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LiquidityDepthWithRange;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LiquidityDepthWithRange;
    static equals(a: LiquidityDepthWithRange | PlainMessage<LiquidityDepthWithRange> | undefined, b: LiquidityDepthWithRange | PlainMessage<LiquidityDepthWithRange> | undefined): boolean;
}
/**
 * =============================== LiquidityNetInDirection
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest
 */
export declare class LiquidityNetInDirectionRequest extends Message<LiquidityNetInDirectionRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string token_in = 2;
     */
    tokenIn: string;
    /**
     * @generated from field: int64 start_tick = 3;
     */
    startTick: bigint;
    /**
     * @generated from field: bool use_cur_tick = 4;
     */
    useCurTick: boolean;
    /**
     * @generated from field: int64 bound_tick = 5;
     */
    boundTick: bigint;
    /**
     * @generated from field: bool use_no_bound = 6;
     */
    useNoBound: boolean;
    constructor(data?: PartialMessage<LiquidityNetInDirectionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LiquidityNetInDirectionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LiquidityNetInDirectionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LiquidityNetInDirectionRequest;
    static equals(a: LiquidityNetInDirectionRequest | PlainMessage<LiquidityNetInDirectionRequest> | undefined, b: LiquidityNetInDirectionRequest | PlainMessage<LiquidityNetInDirectionRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse
 */
export declare class LiquidityNetInDirectionResponse extends Message<LiquidityNetInDirectionResponse> {
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.TickLiquidityNet liquidity_depths = 1;
     */
    liquidityDepths: TickLiquidityNet[];
    /**
     * @generated from field: int64 current_tick = 2;
     */
    currentTick: bigint;
    /**
     * @generated from field: string current_liquidity = 3;
     */
    currentLiquidity: string;
    /**
     * @generated from field: string current_sqrt_price = 4;
     */
    currentSqrtPrice: string;
    constructor(data?: PartialMessage<LiquidityNetInDirectionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.LiquidityNetInDirectionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LiquidityNetInDirectionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LiquidityNetInDirectionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LiquidityNetInDirectionResponse;
    static equals(a: LiquidityNetInDirectionResponse | PlainMessage<LiquidityNetInDirectionResponse> | undefined, b: LiquidityNetInDirectionResponse | PlainMessage<LiquidityNetInDirectionResponse> | undefined): boolean;
}
/**
 * =============================== LiquidityPerTickRange
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest
 */
export declare class LiquidityPerTickRangeRequest extends Message<LiquidityPerTickRangeRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<LiquidityPerTickRangeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LiquidityPerTickRangeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LiquidityPerTickRangeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LiquidityPerTickRangeRequest;
    static equals(a: LiquidityPerTickRangeRequest | PlainMessage<LiquidityPerTickRangeRequest> | undefined, b: LiquidityPerTickRangeRequest | PlainMessage<LiquidityPerTickRangeRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse
 */
export declare class LiquidityPerTickRangeResponse extends Message<LiquidityPerTickRangeResponse> {
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.LiquidityDepthWithRange liquidity = 1;
     */
    liquidity: LiquidityDepthWithRange[];
    /**
     * @generated from field: int64 bucket_index = 2;
     */
    bucketIndex: bigint;
    constructor(data?: PartialMessage<LiquidityPerTickRangeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.LiquidityPerTickRangeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LiquidityPerTickRangeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LiquidityPerTickRangeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LiquidityPerTickRangeResponse;
    static equals(a: LiquidityPerTickRangeResponse | PlainMessage<LiquidityPerTickRangeResponse> | undefined, b: LiquidityPerTickRangeResponse | PlainMessage<LiquidityPerTickRangeResponse> | undefined): boolean;
}
/**
 * ===================== QueryClaimableSpreadRewards
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest
 */
export declare class ClaimableSpreadRewardsRequest extends Message<ClaimableSpreadRewardsRequest> {
    /**
     * @generated from field: uint64 position_id = 1;
     */
    positionId: bigint;
    constructor(data?: PartialMessage<ClaimableSpreadRewardsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimableSpreadRewardsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimableSpreadRewardsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimableSpreadRewardsRequest;
    static equals(a: ClaimableSpreadRewardsRequest | PlainMessage<ClaimableSpreadRewardsRequest> | undefined, b: ClaimableSpreadRewardsRequest | PlainMessage<ClaimableSpreadRewardsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse
 */
export declare class ClaimableSpreadRewardsResponse extends Message<ClaimableSpreadRewardsResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin claimable_spread_rewards = 1;
     */
    claimableSpreadRewards: Coin[];
    constructor(data?: PartialMessage<ClaimableSpreadRewardsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.ClaimableSpreadRewardsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimableSpreadRewardsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimableSpreadRewardsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimableSpreadRewardsResponse;
    static equals(a: ClaimableSpreadRewardsResponse | PlainMessage<ClaimableSpreadRewardsResponse> | undefined, b: ClaimableSpreadRewardsResponse | PlainMessage<ClaimableSpreadRewardsResponse> | undefined): boolean;
}
/**
 * ===================== QueryClaimableIncentives
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest
 */
export declare class ClaimableIncentivesRequest extends Message<ClaimableIncentivesRequest> {
    /**
     * @generated from field: uint64 position_id = 1;
     */
    positionId: bigint;
    constructor(data?: PartialMessage<ClaimableIncentivesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimableIncentivesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimableIncentivesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimableIncentivesRequest;
    static equals(a: ClaimableIncentivesRequest | PlainMessage<ClaimableIncentivesRequest> | undefined, b: ClaimableIncentivesRequest | PlainMessage<ClaimableIncentivesRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse
 */
export declare class ClaimableIncentivesResponse extends Message<ClaimableIncentivesResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin claimable_incentives = 1;
     */
    claimableIncentives: Coin[];
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin forfeited_incentives = 2;
     */
    forfeitedIncentives: Coin[];
    constructor(data?: PartialMessage<ClaimableIncentivesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.ClaimableIncentivesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimableIncentivesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimableIncentivesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimableIncentivesResponse;
    static equals(a: ClaimableIncentivesResponse | PlainMessage<ClaimableIncentivesResponse> | undefined, b: ClaimableIncentivesResponse | PlainMessage<ClaimableIncentivesResponse> | undefined): boolean;
}
/**
 * ===================== QueryPoolAccumulatorRewards
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest
 */
export declare class PoolAccumulatorRewardsRequest extends Message<PoolAccumulatorRewardsRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<PoolAccumulatorRewardsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolAccumulatorRewardsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolAccumulatorRewardsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolAccumulatorRewardsRequest;
    static equals(a: PoolAccumulatorRewardsRequest | PlainMessage<PoolAccumulatorRewardsRequest> | undefined, b: PoolAccumulatorRewardsRequest | PlainMessage<PoolAccumulatorRewardsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse
 */
export declare class PoolAccumulatorRewardsResponse extends Message<PoolAccumulatorRewardsResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin spread_reward_growth_global = 1;
     */
    spreadRewardGrowthGlobal: DecCoin[];
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.UptimeTracker uptime_growth_global = 2;
     */
    uptimeGrowthGlobal: UptimeTracker[];
    constructor(data?: PartialMessage<PoolAccumulatorRewardsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PoolAccumulatorRewardsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolAccumulatorRewardsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolAccumulatorRewardsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolAccumulatorRewardsResponse;
    static equals(a: PoolAccumulatorRewardsResponse | PlainMessage<PoolAccumulatorRewardsResponse> | undefined, b: PoolAccumulatorRewardsResponse | PlainMessage<PoolAccumulatorRewardsResponse> | undefined): boolean;
}
/**
 * ===================== QueryTickAccumulatorTrackers
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest
 */
export declare class TickAccumulatorTrackersRequest extends Message<TickAccumulatorTrackersRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: int64 tick_index = 2;
     */
    tickIndex: bigint;
    constructor(data?: PartialMessage<TickAccumulatorTrackersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TickAccumulatorTrackersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TickAccumulatorTrackersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TickAccumulatorTrackersRequest;
    static equals(a: TickAccumulatorTrackersRequest | PlainMessage<TickAccumulatorTrackersRequest> | undefined, b: TickAccumulatorTrackersRequest | PlainMessage<TickAccumulatorTrackersRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse
 */
export declare class TickAccumulatorTrackersResponse extends Message<TickAccumulatorTrackersResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin spread_reward_growth_opposite_direction_of_last_traversal = 1;
     */
    spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[];
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.UptimeTracker uptime_trackers = 2;
     */
    uptimeTrackers: UptimeTracker[];
    constructor(data?: PartialMessage<TickAccumulatorTrackersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.TickAccumulatorTrackersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TickAccumulatorTrackersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TickAccumulatorTrackersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TickAccumulatorTrackersResponse;
    static equals(a: TickAccumulatorTrackersResponse | PlainMessage<TickAccumulatorTrackersResponse> | undefined, b: TickAccumulatorTrackersResponse | PlainMessage<TickAccumulatorTrackersResponse> | undefined): boolean;
}
/**
 * ===================== QueryIncentiveRecords
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest
 */
export declare class IncentiveRecordsRequest extends Message<IncentiveRecordsRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<IncentiveRecordsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.IncentiveRecordsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncentiveRecordsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncentiveRecordsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncentiveRecordsRequest;
    static equals(a: IncentiveRecordsRequest | PlainMessage<IncentiveRecordsRequest> | undefined, b: IncentiveRecordsRequest | PlainMessage<IncentiveRecordsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse
 */
export declare class IncentiveRecordsResponse extends Message<IncentiveRecordsResponse> {
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.IncentiveRecord incentive_records = 1;
     */
    incentiveRecords: IncentiveRecord[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<IncentiveRecordsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.IncentiveRecordsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncentiveRecordsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncentiveRecordsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncentiveRecordsResponse;
    static equals(a: IncentiveRecordsResponse | PlainMessage<IncentiveRecordsResponse> | undefined, b: IncentiveRecordsResponse | PlainMessage<IncentiveRecordsResponse> | undefined): boolean;
}
/**
 * =============================== CFMMPoolIdLinkFromConcentratedPoolId
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest
 */
export declare class CFMMPoolIdLinkFromConcentratedPoolIdRequest extends Message<CFMMPoolIdLinkFromConcentratedPoolIdRequest> {
    /**
     * @generated from field: uint64 concentrated_pool_id = 1;
     */
    concentratedPoolId: bigint;
    constructor(data?: PartialMessage<CFMMPoolIdLinkFromConcentratedPoolIdRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CFMMPoolIdLinkFromConcentratedPoolIdRequest;
    static equals(a: CFMMPoolIdLinkFromConcentratedPoolIdRequest | PlainMessage<CFMMPoolIdLinkFromConcentratedPoolIdRequest> | undefined, b: CFMMPoolIdLinkFromConcentratedPoolIdRequest | PlainMessage<CFMMPoolIdLinkFromConcentratedPoolIdRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse
 */
export declare class CFMMPoolIdLinkFromConcentratedPoolIdResponse extends Message<CFMMPoolIdLinkFromConcentratedPoolIdResponse> {
    /**
     * @generated from field: uint64 cfmm_pool_id = 1;
     */
    cfmmPoolId: bigint;
    constructor(data?: PartialMessage<CFMMPoolIdLinkFromConcentratedPoolIdResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.CFMMPoolIdLinkFromConcentratedPoolIdResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CFMMPoolIdLinkFromConcentratedPoolIdResponse;
    static equals(a: CFMMPoolIdLinkFromConcentratedPoolIdResponse | PlainMessage<CFMMPoolIdLinkFromConcentratedPoolIdResponse> | undefined, b: CFMMPoolIdLinkFromConcentratedPoolIdResponse | PlainMessage<CFMMPoolIdLinkFromConcentratedPoolIdResponse> | undefined): boolean;
}
/**
 * =============================== UserUnbondingPositions
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest
 */
export declare class UserUnbondingPositionsRequest extends Message<UserUnbondingPositionsRequest> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<UserUnbondingPositionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserUnbondingPositionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserUnbondingPositionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserUnbondingPositionsRequest;
    static equals(a: UserUnbondingPositionsRequest | PlainMessage<UserUnbondingPositionsRequest> | undefined, b: UserUnbondingPositionsRequest | PlainMessage<UserUnbondingPositionsRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse
 */
export declare class UserUnbondingPositionsResponse extends Message<UserUnbondingPositionsResponse> {
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock positions_with_period_lock = 1;
     */
    positionsWithPeriodLock: PositionWithPeriodLock[];
    constructor(data?: PartialMessage<UserUnbondingPositionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.UserUnbondingPositionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserUnbondingPositionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserUnbondingPositionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserUnbondingPositionsResponse;
    static equals(a: UserUnbondingPositionsResponse | PlainMessage<UserUnbondingPositionsResponse> | undefined, b: UserUnbondingPositionsResponse | PlainMessage<UserUnbondingPositionsResponse> | undefined): boolean;
}
/**
 * =============================== GetTotalLiquidity
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityRequest
 */
export declare class GetTotalLiquidityRequest extends Message<GetTotalLiquidityRequest> {
    constructor(data?: PartialMessage<GetTotalLiquidityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTotalLiquidityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTotalLiquidityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTotalLiquidityRequest;
    static equals(a: GetTotalLiquidityRequest | PlainMessage<GetTotalLiquidityRequest> | undefined, b: GetTotalLiquidityRequest | PlainMessage<GetTotalLiquidityRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityResponse
 */
export declare class GetTotalLiquidityResponse extends Message<GetTotalLiquidityResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin total_liquidity = 1;
     */
    totalLiquidity: Coin[];
    constructor(data?: PartialMessage<GetTotalLiquidityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.GetTotalLiquidityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTotalLiquidityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTotalLiquidityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTotalLiquidityResponse;
    static equals(a: GetTotalLiquidityResponse | PlainMessage<GetTotalLiquidityResponse> | undefined, b: GetTotalLiquidityResponse | PlainMessage<GetTotalLiquidityResponse> | undefined): boolean;
}
/**
 * =============================== NumNextInitializedTicks
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest
 */
export declare class NumNextInitializedTicksRequest extends Message<NumNextInitializedTicksRequest> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: string token_in_denom = 2;
     */
    tokenInDenom: string;
    /**
     * @generated from field: uint64 num_next_initialized_ticks = 3;
     */
    numNextInitializedTicks: bigint;
    constructor(data?: PartialMessage<NumNextInitializedTicksRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NumNextInitializedTicksRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NumNextInitializedTicksRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NumNextInitializedTicksRequest;
    static equals(a: NumNextInitializedTicksRequest | PlainMessage<NumNextInitializedTicksRequest> | undefined, b: NumNextInitializedTicksRequest | PlainMessage<NumNextInitializedTicksRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse
 */
export declare class NumNextInitializedTicksResponse extends Message<NumNextInitializedTicksResponse> {
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.TickLiquidityNet liquidity_depths = 1;
     */
    liquidityDepths: TickLiquidityNet[];
    /**
     * @generated from field: int64 current_tick = 2;
     */
    currentTick: bigint;
    /**
     * @generated from field: string current_liquidity = 3;
     */
    currentLiquidity: string;
    constructor(data?: PartialMessage<NumNextInitializedTicksResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.NumNextInitializedTicksResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NumNextInitializedTicksResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NumNextInitializedTicksResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NumNextInitializedTicksResponse;
    static equals(a: NumNextInitializedTicksResponse | PlainMessage<NumNextInitializedTicksResponse> | undefined, b: NumNextInitializedTicksResponse | PlainMessage<NumNextInitializedTicksResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map