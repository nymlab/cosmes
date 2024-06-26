import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * TxResult is the value stored in eth tx indexer
 *
 * @generated from message ethermint.types.v1.TxResult
 */
export declare class TxResult extends Message<TxResult> {
    /**
     * height of the blockchain
     *
     * @generated from field: int64 height = 1;
     */
    height: bigint;
    /**
     * tx_index of the cosmos transaction
     *
     * @generated from field: uint32 tx_index = 2;
     */
    txIndex: number;
    /**
     * msg_index in a batch transaction
     *
     * @generated from field: uint32 msg_index = 3;
     */
    msgIndex: number;
    /**
     * eth_tx_index is the index in the list of valid eth tx in the block,
     * aka. the transaction list returned by eth_getBlock api.
     *
     * @generated from field: int32 eth_tx_index = 4;
     */
    ethTxIndex: number;
    /**
     * failed is true if the eth transaction did not go succeed
     *
     * @generated from field: bool failed = 5;
     */
    failed: boolean;
    /**
     * gas_used by the transaction. If it exceeds the block gas limit,
     * it's set to gas limit, which is what's actually deducted by ante handler.
     *
     * @generated from field: uint64 gas_used = 6;
     */
    gasUsed: bigint;
    /**
     * cumulative_gas_used specifies the cumulated amount of gas used for all
     * processed messages within the current batch transaction.
     *
     * @generated from field: uint64 cumulative_gas_used = 7;
     */
    cumulativeGasUsed: bigint;
    constructor(data?: PartialMessage<TxResult>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.types.v1.TxResult";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxResult;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxResult;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxResult;
    static equals(a: TxResult | PlainMessage<TxResult> | undefined, b: TxResult | PlainMessage<TxResult> | undefined): boolean;
}
//# sourceMappingURL=indexer_pb.d.ts.map