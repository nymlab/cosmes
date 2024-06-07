import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Order, Timeout } from "./channel_pb.js";
/**
 * Upgrade is a verifiable type which contains the relevant information
 * for an attempted upgrade. It provides the proposed changes to the channel
 * end, the timeout for this upgrade attempt and the next packet sequence
 * which allows the counterparty to efficiently know the highest sequence it has received.
 * The next sequence send is used for pruning and upgrading from unordered to ordered channels.
 *
 * @generated from message ibc.core.channel.v1.Upgrade
 */
export declare class Upgrade extends Message<Upgrade> {
    /**
     * @generated from field: ibc.core.channel.v1.UpgradeFields fields = 1;
     */
    fields?: UpgradeFields;
    /**
     * @generated from field: ibc.core.channel.v1.Timeout timeout = 2;
     */
    timeout?: Timeout;
    /**
     * @generated from field: uint64 next_sequence_send = 3;
     */
    nextSequenceSend: bigint;
    constructor(data?: PartialMessage<Upgrade>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.Upgrade";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Upgrade;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Upgrade;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Upgrade;
    static equals(a: Upgrade | PlainMessage<Upgrade> | undefined, b: Upgrade | PlainMessage<Upgrade> | undefined): boolean;
}
/**
 * UpgradeFields are the fields in a channel end which may be changed
 * during a channel upgrade.
 *
 * @generated from message ibc.core.channel.v1.UpgradeFields
 */
export declare class UpgradeFields extends Message<UpgradeFields> {
    /**
     * @generated from field: ibc.core.channel.v1.Order ordering = 1;
     */
    ordering: Order;
    /**
     * @generated from field: repeated string connection_hops = 2;
     */
    connectionHops: string[];
    /**
     * @generated from field: string version = 3;
     */
    version: string;
    constructor(data?: PartialMessage<UpgradeFields>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.UpgradeFields";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpgradeFields;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpgradeFields;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpgradeFields;
    static equals(a: UpgradeFields | PlainMessage<UpgradeFields> | undefined, b: UpgradeFields | PlainMessage<UpgradeFields> | undefined): boolean;
}
/**
 * ErrorReceipt defines a type which encapsulates the upgrade sequence and error associated with the
 * upgrade handshake failure. When a channel upgrade handshake is aborted both chains are expected to increment to the
 * next sequence.
 *
 * @generated from message ibc.core.channel.v1.ErrorReceipt
 */
export declare class ErrorReceipt extends Message<ErrorReceipt> {
    /**
     * the channel upgrade sequence
     *
     * @generated from field: uint64 sequence = 1;
     */
    sequence: bigint;
    /**
     * the error message detailing the cause of failure
     *
     * @generated from field: string message = 2;
     */
    message: string;
    constructor(data?: PartialMessage<ErrorReceipt>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.ErrorReceipt";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ErrorReceipt;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ErrorReceipt;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ErrorReceipt;
    static equals(a: ErrorReceipt | PlainMessage<ErrorReceipt> | undefined, b: ErrorReceipt | PlainMessage<ErrorReceipt> | undefined): boolean;
}
//# sourceMappingURL=upgrade_pb.d.ts.map