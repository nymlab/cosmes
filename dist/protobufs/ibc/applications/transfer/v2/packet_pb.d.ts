import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 *
 * @generated from message ibc.applications.transfer.v2.FungibleTokenPacketData
 */
export declare class FungibleTokenPacketData extends Message<FungibleTokenPacketData> {
    /**
     * the token denomination to be transferred
     *
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * the token amount to be transferred
     *
     * @generated from field: string amount = 2;
     */
    amount: string;
    /**
     * the sender address
     *
     * @generated from field: string sender = 3;
     */
    sender: string;
    /**
     * the recipient address on the destination chain
     *
     * @generated from field: string receiver = 4;
     */
    receiver: string;
    /**
     * optional memo
     *
     * @generated from field: string memo = 5;
     */
    memo: string;
    constructor(data?: PartialMessage<FungibleTokenPacketData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v2.FungibleTokenPacketData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FungibleTokenPacketData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FungibleTokenPacketData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FungibleTokenPacketData;
    static equals(a: FungibleTokenPacketData | PlainMessage<FungibleTokenPacketData> | undefined, b: FungibleTokenPacketData | PlainMessage<FungibleTokenPacketData> | undefined): boolean;
}
//# sourceMappingURL=packet_pb.d.ts.map