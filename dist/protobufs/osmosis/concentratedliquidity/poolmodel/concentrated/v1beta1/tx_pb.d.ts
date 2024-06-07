import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ===================== MsgCreateConcentratedPool
 *
 * @generated from message osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool
 */
export declare class MsgCreateConcentratedPool extends Message<MsgCreateConcentratedPool> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string denom0 = 2;
     */
    denom0: string;
    /**
     * @generated from field: string denom1 = 3;
     */
    denom1: string;
    /**
     * @generated from field: uint64 tick_spacing = 4;
     */
    tickSpacing: bigint;
    /**
     * @generated from field: string spread_factor = 5;
     */
    spreadFactor: string;
    constructor(data?: PartialMessage<MsgCreateConcentratedPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateConcentratedPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateConcentratedPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateConcentratedPool;
    static equals(a: MsgCreateConcentratedPool | PlainMessage<MsgCreateConcentratedPool> | undefined, b: MsgCreateConcentratedPool | PlainMessage<MsgCreateConcentratedPool> | undefined): boolean;
}
/**
 * Returns a unique poolID to identify the pool with.
 *
 * @generated from message osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse
 */
export declare class MsgCreateConcentratedPoolResponse extends Message<MsgCreateConcentratedPoolResponse> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<MsgCreateConcentratedPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateConcentratedPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateConcentratedPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateConcentratedPoolResponse;
    static equals(a: MsgCreateConcentratedPoolResponse | PlainMessage<MsgCreateConcentratedPoolResponse> | undefined, b: MsgCreateConcentratedPoolResponse | PlainMessage<MsgCreateConcentratedPoolResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map