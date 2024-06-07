import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { PeriodLock } from "../../lockup/lock_pb.js";
/**
 * Position contains position's id, address, pool id, lower tick, upper tick
 * join time, and liquidity.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.Position
 */
export declare class Position extends Message<Position> {
    /**
     * @generated from field: uint64 position_id = 1;
     */
    positionId: bigint;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: uint64 pool_id = 3;
     */
    poolId: bigint;
    /**
     * @generated from field: int64 lower_tick = 4;
     */
    lowerTick: bigint;
    /**
     * @generated from field: int64 upper_tick = 5;
     */
    upperTick: bigint;
    /**
     * @generated from field: google.protobuf.Timestamp join_time = 6;
     */
    joinTime?: Timestamp;
    /**
     * @generated from field: string liquidity = 7;
     */
    liquidity: string;
    constructor(data?: PartialMessage<Position>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.Position";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Position;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Position;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Position;
    static equals(a: Position | PlainMessage<Position> | undefined, b: Position | PlainMessage<Position> | undefined): boolean;
}
/**
 * FullPositionBreakdown returns:
 * - the position itself
 * - the amount the position translates in terms of asset0 and asset1
 * - the amount of claimable fees
 * - the amount of claimable incentives
 * - the amount of incentives that would be forfeited if the position was closed
 * now
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown
 */
export declare class FullPositionBreakdown extends Message<FullPositionBreakdown> {
    /**
     * @generated from field: osmosis.concentratedliquidity.v1beta1.Position position = 1;
     */
    position?: Position;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin asset0 = 2;
     */
    asset0?: Coin;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin asset1 = 3;
     */
    asset1?: Coin;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin claimable_spread_rewards = 4;
     */
    claimableSpreadRewards: Coin[];
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin claimable_incentives = 5;
     */
    claimableIncentives: Coin[];
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin forfeited_incentives = 6;
     */
    forfeitedIncentives: Coin[];
    constructor(data?: PartialMessage<FullPositionBreakdown>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.FullPositionBreakdown";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FullPositionBreakdown;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FullPositionBreakdown;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FullPositionBreakdown;
    static equals(a: FullPositionBreakdown | PlainMessage<FullPositionBreakdown> | undefined, b: FullPositionBreakdown | PlainMessage<FullPositionBreakdown> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock
 */
export declare class PositionWithPeriodLock extends Message<PositionWithPeriodLock> {
    /**
     * @generated from field: osmosis.concentratedliquidity.v1beta1.Position position = 1;
     */
    position?: Position;
    /**
     * @generated from field: osmosis.lockup.PeriodLock locks = 2;
     */
    locks?: PeriodLock;
    constructor(data?: PartialMessage<PositionWithPeriodLock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PositionWithPeriodLock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PositionWithPeriodLock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PositionWithPeriodLock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PositionWithPeriodLock;
    static equals(a: PositionWithPeriodLock | PlainMessage<PositionWithPeriodLock> | undefined, b: PositionWithPeriodLock | PlainMessage<PositionWithPeriodLock> | undefined): boolean;
}
//# sourceMappingURL=position_pb.d.ts.map