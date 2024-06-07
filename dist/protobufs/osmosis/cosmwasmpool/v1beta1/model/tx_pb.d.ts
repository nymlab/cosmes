import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ===================== MsgCreateCosmwasmPool
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPool
 */
export declare class MsgCreateCosmWasmPool extends Message<MsgCreateCosmWasmPool> {
    /**
     * @generated from field: uint64 code_id = 1;
     */
    codeId: bigint;
    /**
     * @generated from field: bytes instantiate_msg = 2;
     */
    instantiateMsg: Uint8Array;
    /**
     * @generated from field: string sender = 3;
     */
    sender: string;
    constructor(data?: PartialMessage<MsgCreateCosmWasmPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateCosmWasmPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateCosmWasmPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateCosmWasmPool;
    static equals(a: MsgCreateCosmWasmPool | PlainMessage<MsgCreateCosmWasmPool> | undefined, b: MsgCreateCosmWasmPool | PlainMessage<MsgCreateCosmWasmPool> | undefined): boolean;
}
/**
 * Returns a unique poolID to identify the pool with.
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPoolResponse
 */
export declare class MsgCreateCosmWasmPoolResponse extends Message<MsgCreateCosmWasmPoolResponse> {
    /**
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<MsgCreateCosmWasmPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.MsgCreateCosmWasmPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateCosmWasmPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateCosmWasmPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateCosmWasmPoolResponse;
    static equals(a: MsgCreateCosmWasmPoolResponse | PlainMessage<MsgCreateCosmWasmPoolResponse> | undefined, b: MsgCreateCosmWasmPoolResponse | PlainMessage<MsgCreateCosmWasmPoolResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map