import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { RequestBeginBlock, RequestDeliverTx, RequestEndBlock, ResponseBeginBlock, ResponseCommit, ResponseDeliverTx, ResponseEndBlock } from "../../../../tendermint/abci/types_pb.js";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.base.store.v1beta1.StoreKVPair
 */
export declare class StoreKVPair extends Message<StoreKVPair> {
    /**
     * the store key for the KVStore this pair originates from
     *
     * @generated from field: string store_key = 1;
     */
    storeKey: string;
    /**
     * true indicates a delete operation, false indicates a set operation
     *
     * @generated from field: bool delete = 2;
     */
    delete: boolean;
    /**
     * @generated from field: bytes key = 3;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes value = 4;
     */
    value: Uint8Array;
    constructor(data?: PartialMessage<StoreKVPair>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.store.v1beta1.StoreKVPair";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreKVPair;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreKVPair;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreKVPair;
    static equals(a: StoreKVPair | PlainMessage<StoreKVPair> | undefined, b: StoreKVPair | PlainMessage<StoreKVPair> | undefined): boolean;
}
/**
 * BlockMetadata contains all the abci event data of a block
 * the file streamer dump them into files together with the state changes.
 *
 * @generated from message cosmos.base.store.v1beta1.BlockMetadata
 */
export declare class BlockMetadata extends Message<BlockMetadata> {
    /**
     * @generated from field: tendermint.abci.RequestBeginBlock request_begin_block = 1;
     */
    requestBeginBlock?: RequestBeginBlock;
    /**
     * @generated from field: tendermint.abci.ResponseBeginBlock response_begin_block = 2;
     */
    responseBeginBlock?: ResponseBeginBlock;
    /**
     * @generated from field: repeated cosmos.base.store.v1beta1.BlockMetadata.DeliverTx deliver_txs = 3;
     */
    deliverTxs: BlockMetadata_DeliverTx[];
    /**
     * @generated from field: tendermint.abci.RequestEndBlock request_end_block = 4;
     */
    requestEndBlock?: RequestEndBlock;
    /**
     * @generated from field: tendermint.abci.ResponseEndBlock response_end_block = 5;
     */
    responseEndBlock?: ResponseEndBlock;
    /**
     * @generated from field: tendermint.abci.ResponseCommit response_commit = 6;
     */
    responseCommit?: ResponseCommit;
    constructor(data?: PartialMessage<BlockMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.store.v1beta1.BlockMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockMetadata;
    static equals(a: BlockMetadata | PlainMessage<BlockMetadata> | undefined, b: BlockMetadata | PlainMessage<BlockMetadata> | undefined): boolean;
}
/**
 * DeliverTx encapulate deliver tx request and response.
 *
 * @generated from message cosmos.base.store.v1beta1.BlockMetadata.DeliverTx
 */
export declare class BlockMetadata_DeliverTx extends Message<BlockMetadata_DeliverTx> {
    /**
     * @generated from field: tendermint.abci.RequestDeliverTx request = 1;
     */
    request?: RequestDeliverTx;
    /**
     * @generated from field: tendermint.abci.ResponseDeliverTx response = 2;
     */
    response?: ResponseDeliverTx;
    constructor(data?: PartialMessage<BlockMetadata_DeliverTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.store.v1beta1.BlockMetadata.DeliverTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockMetadata_DeliverTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockMetadata_DeliverTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockMetadata_DeliverTx;
    static equals(a: BlockMetadata_DeliverTx | PlainMessage<BlockMetadata_DeliverTx> | undefined, b: BlockMetadata_DeliverTx | PlainMessage<BlockMetadata_DeliverTx> | undefined): boolean;
}
//# sourceMappingURL=listening_pb.d.ts.map