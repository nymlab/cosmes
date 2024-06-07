import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PoolAsset, PoolParams } from "../../../v1beta1/balancerPool_pb.js";
/**
 * ===================== MsgCreatePool
 *
 * @generated from message osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool
 */
export declare class MsgCreateBalancerPool extends Message<MsgCreateBalancerPool> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: osmosis.gamm.v1beta1.PoolParams pool_params = 2;
     */
    poolParams?: PoolParams;
    /**
     * @generated from field: repeated osmosis.gamm.v1beta1.PoolAsset pool_assets = 3;
     */
    poolAssets: PoolAsset[];
    /**
     * @generated from field: string future_pool_governor = 4;
     */
    futurePoolGovernor: string;
    constructor(data?: PartialMessage<MsgCreateBalancerPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateBalancerPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateBalancerPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateBalancerPool;
    static equals(a: MsgCreateBalancerPool | PlainMessage<MsgCreateBalancerPool> | undefined, b: MsgCreateBalancerPool | PlainMessage<MsgCreateBalancerPool> | undefined): boolean;
}
/**
 * Returns the poolID
 *
 * @generated from message osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse
 */
export declare class MsgCreateBalancerPoolResponse extends Message<MsgCreateBalancerPoolResponse> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<MsgCreateBalancerPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateBalancerPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateBalancerPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateBalancerPoolResponse;
    static equals(a: MsgCreateBalancerPoolResponse | PlainMessage<MsgCreateBalancerPoolResponse> | undefined, b: MsgCreateBalancerPoolResponse | PlainMessage<MsgCreateBalancerPoolResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map