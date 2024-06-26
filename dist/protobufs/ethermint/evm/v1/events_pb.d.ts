import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * EventEthereumTx defines the event for an Ethereum transaction
 *
 * @generated from message ethermint.evm.v1.EventEthereumTx
 */
export declare class EventEthereumTx extends Message<EventEthereumTx> {
    /**
     * amount
     *
     * @generated from field: string amount = 1;
     */
    amount: string;
    /**
     * eth_hash is the Ethereum hash of the transaction
     *
     * @generated from field: string eth_hash = 2;
     */
    ethHash: string;
    /**
     * index of the transaction in the block
     *
     * @generated from field: string index = 3;
     */
    index: string;
    /**
     * gas_used is the amount of gas used by the transaction
     *
     * @generated from field: string gas_used = 4;
     */
    gasUsed: string;
    /**
     * hash is the Tendermint hash of the transaction
     *
     * @generated from field: string hash = 5;
     */
    hash: string;
    /**
     * recipient of the transaction
     *
     * @generated from field: string recipient = 6;
     */
    recipient: string;
    /**
     * eth_tx_failed contains a VM error should it occur
     *
     * @generated from field: string eth_tx_failed = 7;
     */
    ethTxFailed: string;
    constructor(data?: PartialMessage<EventEthereumTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.EventEthereumTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventEthereumTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventEthereumTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventEthereumTx;
    static equals(a: EventEthereumTx | PlainMessage<EventEthereumTx> | undefined, b: EventEthereumTx | PlainMessage<EventEthereumTx> | undefined): boolean;
}
/**
 * EventTxLog defines the event for an Ethereum transaction log
 *
 * @generated from message ethermint.evm.v1.EventTxLog
 */
export declare class EventTxLog extends Message<EventTxLog> {
    /**
     * tx_logs is an array of transaction logs
     *
     * @generated from field: repeated string tx_logs = 1;
     */
    txLogs: string[];
    constructor(data?: PartialMessage<EventTxLog>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.EventTxLog";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventTxLog;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventTxLog;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventTxLog;
    static equals(a: EventTxLog | PlainMessage<EventTxLog> | undefined, b: EventTxLog | PlainMessage<EventTxLog> | undefined): boolean;
}
/**
 * EventMessage
 *
 * @generated from message ethermint.evm.v1.EventMessage
 */
export declare class EventMessage extends Message<EventMessage> {
    /**
     * module which emits the event
     *
     * @generated from field: string module = 1;
     */
    module: string;
    /**
     * sender of the message
     *
     * @generated from field: string sender = 2;
     */
    sender: string;
    /**
     * tx_type is the type of the message
     *
     * @generated from field: string tx_type = 3;
     */
    txType: string;
    constructor(data?: PartialMessage<EventMessage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.EventMessage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventMessage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventMessage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventMessage;
    static equals(a: EventMessage | PlainMessage<EventMessage> | undefined, b: EventMessage | PlainMessage<EventMessage> | undefined): boolean;
}
/**
 * EventBlockBloom defines an Ethereum block bloom filter event
 *
 * @generated from message ethermint.evm.v1.EventBlockBloom
 */
export declare class EventBlockBloom extends Message<EventBlockBloom> {
    /**
     * bloom is the bloom filter of the block
     *
     * @generated from field: string bloom = 1;
     */
    bloom: string;
    constructor(data?: PartialMessage<EventBlockBloom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.EventBlockBloom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBlockBloom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBlockBloom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBlockBloom;
    static equals(a: EventBlockBloom | PlainMessage<EventBlockBloom> | undefined, b: EventBlockBloom | PlainMessage<EventBlockBloom> | undefined): boolean;
}
//# sourceMappingURL=events_pb.d.ts.map