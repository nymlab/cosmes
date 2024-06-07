import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PoolParams } from "./stableswap_pool_pb.js";
import { Coin } from "../../../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * ===================== MsgCreatePool
 *
 * @generated from message osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool
 */
export declare class MsgCreateStableswapPool extends Message<MsgCreateStableswapPool> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams pool_params = 2;
     */
    poolParams?: PoolParams;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin initial_pool_liquidity = 3;
     */
    initialPoolLiquidity: Coin[];
    /**
     * @generated from field: repeated uint64 scaling_factors = 4;
     */
    scalingFactors: bigint[];
    /**
     * @generated from field: string future_pool_governor = 5;
     */
    futurePoolGovernor: string;
    /**
     * @generated from field: string scaling_factor_controller = 6;
     */
    scalingFactorController: string;
    constructor(data?: PartialMessage<MsgCreateStableswapPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateStableswapPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateStableswapPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateStableswapPool;
    static equals(a: MsgCreateStableswapPool | PlainMessage<MsgCreateStableswapPool> | undefined, b: MsgCreateStableswapPool | PlainMessage<MsgCreateStableswapPool> | undefined): boolean;
}
/**
 * Returns a poolID with custom poolName.
 *
 * @generated from message osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse
 */
export declare class MsgCreateStableswapPoolResponse extends Message<MsgCreateStableswapPoolResponse> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<MsgCreateStableswapPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateStableswapPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateStableswapPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateStableswapPoolResponse;
    static equals(a: MsgCreateStableswapPoolResponse | PlainMessage<MsgCreateStableswapPoolResponse> | undefined, b: MsgCreateStableswapPoolResponse | PlainMessage<MsgCreateStableswapPoolResponse> | undefined): boolean;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 *
 * @generated from message osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors
 */
export declare class MsgStableSwapAdjustScalingFactors extends Message<MsgStableSwapAdjustScalingFactors> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    /**
     * @generated from field: repeated uint64 scaling_factors = 3;
     */
    scalingFactors: bigint[];
    constructor(data?: PartialMessage<MsgStableSwapAdjustScalingFactors>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStableSwapAdjustScalingFactors;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStableSwapAdjustScalingFactors;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStableSwapAdjustScalingFactors;
    static equals(a: MsgStableSwapAdjustScalingFactors | PlainMessage<MsgStableSwapAdjustScalingFactors> | undefined, b: MsgStableSwapAdjustScalingFactors | PlainMessage<MsgStableSwapAdjustScalingFactors> | undefined): boolean;
}
/**
 * @generated from message osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse
 */
export declare class MsgStableSwapAdjustScalingFactorsResponse extends Message<MsgStableSwapAdjustScalingFactorsResponse> {
    constructor(data?: PartialMessage<MsgStableSwapAdjustScalingFactorsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStableSwapAdjustScalingFactorsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStableSwapAdjustScalingFactorsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStableSwapAdjustScalingFactorsResponse;
    static equals(a: MsgStableSwapAdjustScalingFactorsResponse | PlainMessage<MsgStableSwapAdjustScalingFactorsResponse> | undefined, b: MsgStableSwapAdjustScalingFactorsResponse | PlainMessage<MsgStableSwapAdjustScalingFactorsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map