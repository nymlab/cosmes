import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * CreateConcentratedLiquidityPoolsProposal is a gov Content type for creating
 * concentrated liquidity pools. If a CreateConcentratedLiquidityPoolsProposal
 * passes, the pools are created via pool manager module account.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.CreateConcentratedLiquidityPoolsProposal
 */
export declare class CreateConcentratedLiquidityPoolsProposal extends Message<CreateConcentratedLiquidityPoolsProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.PoolRecord pool_records = 3;
     */
    poolRecords: PoolRecord[];
    constructor(data?: PartialMessage<CreateConcentratedLiquidityPoolsProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.CreateConcentratedLiquidityPoolsProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateConcentratedLiquidityPoolsProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateConcentratedLiquidityPoolsProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateConcentratedLiquidityPoolsProposal;
    static equals(a: CreateConcentratedLiquidityPoolsProposal | PlainMessage<CreateConcentratedLiquidityPoolsProposal> | undefined, b: CreateConcentratedLiquidityPoolsProposal | PlainMessage<CreateConcentratedLiquidityPoolsProposal> | undefined): boolean;
}
/**
 * TickSpacingDecreaseProposal is a gov Content type for proposing a tick
 * spacing decrease for a pool. The proposal will fail if one of the pools do
 * not exist, or if the new tick spacing is not less than the current tick
 * spacing.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.TickSpacingDecreaseProposal
 */
export declare class TickSpacingDecreaseProposal extends Message<TickSpacingDecreaseProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.PoolIdToTickSpacingRecord pool_id_to_tick_spacing_records = 3;
     */
    poolIdToTickSpacingRecords: PoolIdToTickSpacingRecord[];
    constructor(data?: PartialMessage<TickSpacingDecreaseProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.TickSpacingDecreaseProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TickSpacingDecreaseProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TickSpacingDecreaseProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TickSpacingDecreaseProposal;
    static equals(a: TickSpacingDecreaseProposal | PlainMessage<TickSpacingDecreaseProposal> | undefined, b: TickSpacingDecreaseProposal | PlainMessage<TickSpacingDecreaseProposal> | undefined): boolean;
}
/**
 * PoolIdToTickSpacingRecord is a struct that contains a pool id to new tick
 * spacing pair.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.PoolIdToTickSpacingRecord
 */
export declare class PoolIdToTickSpacingRecord extends Message<PoolIdToTickSpacingRecord> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * @generated from field: uint64 new_tick_spacing = 2;
     */
    newTickSpacing: bigint;
    constructor(data?: PartialMessage<PoolIdToTickSpacingRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PoolIdToTickSpacingRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolIdToTickSpacingRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolIdToTickSpacingRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolIdToTickSpacingRecord;
    static equals(a: PoolIdToTickSpacingRecord | PlainMessage<PoolIdToTickSpacingRecord> | undefined, b: PoolIdToTickSpacingRecord | PlainMessage<PoolIdToTickSpacingRecord> | undefined): boolean;
}
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.PoolRecord
 */
export declare class PoolRecord extends Message<PoolRecord> {
    /**
     * @generated from field: string denom0 = 1;
     */
    denom0: string;
    /**
     * @generated from field: string denom1 = 2;
     */
    denom1: string;
    /**
     * @generated from field: uint64 tick_spacing = 3;
     */
    tickSpacing: bigint;
    /**
     * @generated from field: string spread_factor = 5;
     */
    spreadFactor: string;
    constructor(data?: PartialMessage<PoolRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.PoolRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolRecord;
    static equals(a: PoolRecord | PlainMessage<PoolRecord> | undefined, b: PoolRecord | PlainMessage<PoolRecord> | undefined): boolean;
}
//# sourceMappingURL=gov_pb.d.ts.map