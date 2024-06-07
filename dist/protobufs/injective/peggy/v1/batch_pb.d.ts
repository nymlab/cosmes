import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ERC20Token } from "./attestation_pb.js";
/**
 * OutgoingTxBatch represents a batch of transactions going from Peggy to ETH
 *
 * @generated from message injective.peggy.v1.OutgoingTxBatch
 */
export declare class OutgoingTxBatch extends Message<OutgoingTxBatch> {
    /**
     * @generated from field: uint64 batch_nonce = 1;
     */
    batchNonce: bigint;
    /**
     * @generated from field: uint64 batch_timeout = 2;
     */
    batchTimeout: bigint;
    /**
     * @generated from field: repeated injective.peggy.v1.OutgoingTransferTx transactions = 3;
     */
    transactions: OutgoingTransferTx[];
    /**
     * @generated from field: string token_contract = 4;
     */
    tokenContract: string;
    /**
     * @generated from field: uint64 block = 5;
     */
    block: bigint;
    constructor(data?: PartialMessage<OutgoingTxBatch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.OutgoingTxBatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutgoingTxBatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutgoingTxBatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutgoingTxBatch;
    static equals(a: OutgoingTxBatch | PlainMessage<OutgoingTxBatch> | undefined, b: OutgoingTxBatch | PlainMessage<OutgoingTxBatch> | undefined): boolean;
}
/**
 * OutgoingTransferTx represents an individual send from Peggy to ETH
 *
 * @generated from message injective.peggy.v1.OutgoingTransferTx
 */
export declare class OutgoingTransferTx extends Message<OutgoingTransferTx> {
    /**
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * @generated from field: string sender = 2;
     */
    sender: string;
    /**
     * @generated from field: string dest_address = 3;
     */
    destAddress: string;
    /**
     * @generated from field: injective.peggy.v1.ERC20Token erc20_token = 4;
     */
    erc20Token?: ERC20Token;
    /**
     * @generated from field: injective.peggy.v1.ERC20Token erc20_fee = 5;
     */
    erc20Fee?: ERC20Token;
    constructor(data?: PartialMessage<OutgoingTransferTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.OutgoingTransferTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutgoingTransferTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutgoingTransferTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutgoingTransferTx;
    static equals(a: OutgoingTransferTx | PlainMessage<OutgoingTransferTx> | undefined, b: OutgoingTransferTx | PlainMessage<OutgoingTransferTx> | undefined): boolean;
}
//# sourceMappingURL=batch_pb.d.ts.map