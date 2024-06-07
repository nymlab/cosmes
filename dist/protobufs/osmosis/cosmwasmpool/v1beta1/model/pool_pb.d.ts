import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * CosmWasmPool represents the data serialized into state for each CW pool.
 *
 * Note: CW Pool has 2 pool models:
 * - CosmWasmPool which is a proto-generated store model used for serialization
 * into state.
 * - Pool struct that encapsulates the CosmWasmPool and wasmKeeper for calling
 * the contract.
 *
 * CosmWasmPool implements the poolmanager.PoolI interface but it panics on all
 * methods. The reason is that access to wasmKeeper is required to call the
 * contract.
 *
 * Instead, all interactions and poolmanager.PoolI methods are to be performed
 * on the Pool struct. The reason why we cannot have a Pool struct only is
 * because it cannot be serialized into state due to having a non-serializable
 * wasmKeeper field.
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.CosmWasmPool
 */
export declare class CosmWasmPool extends Message<CosmWasmPool> {
    /**
     * @generated from field: string contract_address = 1;
     */
    contractAddress: string;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    /**
     * @generated from field: uint64 code_id = 3;
     */
    codeId: bigint;
    /**
     * @generated from field: bytes instantiate_msg = 4;
     */
    instantiateMsg: Uint8Array;
    constructor(data?: PartialMessage<CosmWasmPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.CosmWasmPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CosmWasmPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CosmWasmPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CosmWasmPool;
    static equals(a: CosmWasmPool | PlainMessage<CosmWasmPool> | undefined, b: CosmWasmPool | PlainMessage<CosmWasmPool> | undefined): boolean;
}
//# sourceMappingURL=pool_pb.d.ts.map