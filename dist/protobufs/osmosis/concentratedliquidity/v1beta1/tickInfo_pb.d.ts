import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.TickInfo
 */
export declare class TickInfo extends Message<TickInfo> {
    /**
     * @generated from field: string liquidity_gross = 1;
     */
    liquidityGross: string;
    /**
     * @generated from field: string liquidity_net = 2;
     */
    liquidityNet: string;
    /**
     * Total spread rewards accumulated in the opposite direction that the tick
     * was last crossed. i.e. if the current tick is to the right of this tick
     * (meaning its currently a greater price), then this is the total spread
     * rewards accumulated below the tick. If the current tick is to the left of
     * this tick (meaning its currently at a lower price), then this is the total
     * spread rewards accumulated above the tick.
     *
     * Note: the way this value is used depends on the direction of spread rewards
     * we are calculating for. If we are calculating spread rewards below the
     * lower tick and the lower tick is the active tick, then this is the
     * spreadRewardGrowthGlobal - the lower tick's
     * spreadRewardGrowthOppositeDirectionOfLastTraversal. If we are calculating
     * spread rewards above the upper tick and the upper tick is the active tick,
     * then this is just the tick's
     * spreadRewardGrowthOppositeDirectionOfLastTraversal value.
     *
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin spread_reward_growth_opposite_direction_of_last_traversal = 3;
     */
    spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[];
    /**
     * uptime_trackers is a container encapsulating the uptime trackers.
     * We use a container instead of a "repeated UptimeTracker" directly
     * because we need the ability to serialize and deserialize the
     * container easily for events when crossing a tick.
     *
     * @generated from field: osmosis.concentratedliquidity.v1beta1.UptimeTrackers uptime_trackers = 4;
     */
    uptimeTrackers?: UptimeTrackers;
    constructor(data?: PartialMessage<TickInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.TickInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TickInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TickInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TickInfo;
    static equals(a: TickInfo | PlainMessage<TickInfo> | undefined, b: TickInfo | PlainMessage<TickInfo> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.UptimeTrackers
 */
export declare class UptimeTrackers extends Message<UptimeTrackers> {
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.UptimeTracker list = 1;
     */
    list: UptimeTracker[];
    constructor(data?: PartialMessage<UptimeTrackers>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.UptimeTrackers";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UptimeTrackers;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UptimeTrackers;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UptimeTrackers;
    static equals(a: UptimeTrackers | PlainMessage<UptimeTrackers> | undefined, b: UptimeTrackers | PlainMessage<UptimeTrackers> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.UptimeTracker
 */
export declare class UptimeTracker extends Message<UptimeTracker> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin uptime_growth_outside = 1;
     */
    uptimeGrowthOutside: DecCoin[];
    constructor(data?: PartialMessage<UptimeTracker>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.UptimeTracker";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UptimeTracker;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UptimeTracker;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UptimeTracker;
    static equals(a: UptimeTracker | PlainMessage<UptimeTracker> | undefined, b: UptimeTracker | PlainMessage<UptimeTracker> | undefined): boolean;
}
//# sourceMappingURL=tickInfo_pb.d.ts.map