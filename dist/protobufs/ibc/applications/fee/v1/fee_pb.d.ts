import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
import { PacketId } from "../../../core/channel/v1/channel_pb.js";
/**
 * Fee defines the ICS29 receive, acknowledgement and timeout fees
 *
 * @generated from message ibc.applications.fee.v1.Fee
 */
export declare class Fee extends Message<Fee> {
    /**
     * the packet receive fee
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin recv_fee = 1;
     */
    recvFee: Coin[];
    /**
     * the packet acknowledgement fee
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin ack_fee = 2;
     */
    ackFee: Coin[];
    /**
     * the packet timeout fee
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin timeout_fee = 3;
     */
    timeoutFee: Coin[];
    constructor(data?: PartialMessage<Fee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.Fee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Fee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Fee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Fee;
    static equals(a: Fee | PlainMessage<Fee> | undefined, b: Fee | PlainMessage<Fee> | undefined): boolean;
}
/**
 * PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers
 *
 * @generated from message ibc.applications.fee.v1.PacketFee
 */
export declare class PacketFee extends Message<PacketFee> {
    /**
     * fee encapsulates the recv, ack and timeout fees associated with an IBC packet
     *
     * @generated from field: ibc.applications.fee.v1.Fee fee = 1;
     */
    fee?: Fee;
    /**
     * the refund address for unspent fees
     *
     * @generated from field: string refund_address = 2;
     */
    refundAddress: string;
    /**
     * optional list of relayers permitted to receive fees
     *
     * @generated from field: repeated string relayers = 3;
     */
    relayers: string[];
    constructor(data?: PartialMessage<PacketFee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.PacketFee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketFee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketFee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketFee;
    static equals(a: PacketFee | PlainMessage<PacketFee> | undefined, b: PacketFee | PlainMessage<PacketFee> | undefined): boolean;
}
/**
 * PacketFees contains a list of type PacketFee
 *
 * @generated from message ibc.applications.fee.v1.PacketFees
 */
export declare class PacketFees extends Message<PacketFees> {
    /**
     * list of packet fees
     *
     * @generated from field: repeated ibc.applications.fee.v1.PacketFee packet_fees = 1;
     */
    packetFees: PacketFee[];
    constructor(data?: PartialMessage<PacketFees>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.PacketFees";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketFees;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketFees;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketFees;
    static equals(a: PacketFees | PlainMessage<PacketFees> | undefined, b: PacketFees | PlainMessage<PacketFees> | undefined): boolean;
}
/**
 * IdentifiedPacketFees contains a list of type PacketFee and associated PacketId
 *
 * @generated from message ibc.applications.fee.v1.IdentifiedPacketFees
 */
export declare class IdentifiedPacketFees extends Message<IdentifiedPacketFees> {
    /**
     * unique packet identifier comprised of the channel ID, port ID and sequence
     *
     * @generated from field: ibc.core.channel.v1.PacketId packet_id = 1;
     */
    packetId?: PacketId;
    /**
     * list of packet fees
     *
     * @generated from field: repeated ibc.applications.fee.v1.PacketFee packet_fees = 2;
     */
    packetFees: PacketFee[];
    constructor(data?: PartialMessage<IdentifiedPacketFees>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.IdentifiedPacketFees";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifiedPacketFees;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifiedPacketFees;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifiedPacketFees;
    static equals(a: IdentifiedPacketFees | PlainMessage<IdentifiedPacketFees> | undefined, b: IdentifiedPacketFees | PlainMessage<IdentifiedPacketFees> | undefined): boolean;
}
//# sourceMappingURL=fee_pb.d.ts.map