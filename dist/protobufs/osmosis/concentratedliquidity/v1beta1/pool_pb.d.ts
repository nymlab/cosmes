import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.Pool
 */
export declare class Pool extends Message<Pool> {
    /**
     * pool's address holding all liquidity tokens.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * address holding the incentives liquidity.
     *
     * @generated from field: string incentives_address = 2;
     */
    incentivesAddress: string;
    /**
     * address holding spread rewards from swaps.
     *
     * @generated from field: string spread_rewards_address = 3;
     */
    spreadRewardsAddress: string;
    /**
     * @generated from field: uint64 id = 4;
     */
    id: bigint;
    /**
     * Amount of total liquidity
     *
     * @generated from field: string current_tick_liquidity = 5;
     */
    currentTickLiquidity: string;
    /**
     * @generated from field: string token0 = 6;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 7;
     */
    token1: string;
    /**
     * @generated from field: string current_sqrt_price = 8;
     */
    currentSqrtPrice: string;
    /**
     * @generated from field: int64 current_tick = 9;
     */
    currentTick: bigint;
    /**
     * tick_spacing must be one of the authorized_tick_spacing values set in the
     * concentrated-liquidity parameters
     *
     * @generated from field: uint64 tick_spacing = 10;
     */
    tickSpacing: bigint;
    /**
     * @generated from field: int64 exponent_at_price_one = 11;
     */
    exponentAtPriceOne: bigint;
    /**
     * spread_factor is the ratio that is charged on the amount of token in.
     *
     * @generated from field: string spread_factor = 12;
     */
    spreadFactor: string;
    /**
     * last_liquidity_update is the last time either the pool liquidity or the
     * active tick changed
     *
     * @generated from field: google.protobuf.Timestamp last_liquidity_update = 13;
     */
    lastLiquidityUpdate?: Timestamp;
    constructor(data?: PartialMessage<Pool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.Pool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pool;
    static equals(a: Pool | PlainMessage<Pool> | undefined, b: Pool | PlainMessage<Pool> | undefined): boolean;
}
//# sourceMappingURL=pool_pb.d.ts.map