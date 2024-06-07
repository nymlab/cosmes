import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 *
 * @generated from message osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams
 */
export declare class PoolParams extends Message<PoolParams> {
    /**
     * @generated from field: string swap_fee = 1;
     */
    swapFee: string;
    /**
     * N.B.: exit fee is disabled during pool creation in x/poolmanager. While old
     * pools can maintain a non-zero fee. No new pool can be created with non-zero
     * fee anymore
     *
     * @generated from field: string exit_fee = 2;
     */
    exitFee: string;
    constructor(data?: PartialMessage<PoolParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolParams;
    static equals(a: PoolParams | PlainMessage<PoolParams> | undefined, b: PoolParams | PlainMessage<PoolParams> | undefined): boolean;
}
/**
 * Pool is the stableswap Pool struct
 *
 * @generated from message osmosis.gamm.poolmodels.stableswap.v1beta1.Pool
 */
export declare class Pool extends Message<Pool> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * @generated from field: osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams pool_params = 3;
     */
    poolParams?: PoolParams;
    /**
     * This string specifies who will govern the pool in the future.
     * Valid forms of this are:
     * {token name},{duration}
     * {duration}
     * where {token name} if specified is the token which determines the
     * governor, and if not specified is the LP token for this pool.duration is
     * a time specified as 0w,1w,2w, etc. which specifies how long the token
     * would need to be locked up to count in governance. 0w means no lockup.
     *
     * @generated from field: string future_pool_governor = 4;
     */
    futurePoolGovernor: string;
    /**
     * sum of all LP shares
     *
     * @generated from field: cosmos.base.v1beta1.Coin total_shares = 5;
     */
    totalShares?: Coin;
    /**
     * assets in the pool
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin pool_liquidity = 6;
     */
    poolLiquidity: Coin[];
    /**
     * for calculation amognst assets with different precisions
     *
     * @generated from field: repeated uint64 scaling_factors = 7;
     */
    scalingFactors: bigint[];
    /**
     * scaling_factor_controller is the address can adjust pool scaling factors
     *
     * @generated from field: string scaling_factor_controller = 8;
     */
    scalingFactorController: string;
    constructor(data?: PartialMessage<Pool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pool;
    static equals(a: Pool | PlainMessage<Pool> | undefined, b: Pool | PlainMessage<Pool> | undefined): boolean;
}
//# sourceMappingURL=stableswap_pool_pb.d.ts.map