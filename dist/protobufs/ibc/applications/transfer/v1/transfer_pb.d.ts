import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 *
 * @generated from message ibc.applications.transfer.v1.DenomTrace
 */
export declare class DenomTrace extends Message<DenomTrace> {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the fungible token.
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * base denomination of the relayed fungible token.
     *
     * @generated from field: string base_denom = 2;
     */
    baseDenom: string;
    constructor(data?: PartialMessage<DenomTrace>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.DenomTrace";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DenomTrace;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DenomTrace;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DenomTrace;
    static equals(a: DenomTrace | PlainMessage<DenomTrace> | undefined, b: DenomTrace | PlainMessage<DenomTrace> | undefined): boolean;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 *
 * @generated from message ibc.applications.transfer.v1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * send_enabled enables or disables all cross-chain token transfers from this
     * chain.
     *
     * @generated from field: bool send_enabled = 1;
     */
    sendEnabled: boolean;
    /**
     * receive_enabled enables or disables all cross-chain token transfers to this
     * chain.
     *
     * @generated from field: bool receive_enabled = 2;
     */
    receiveEnabled: boolean;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=transfer_pb.d.ts.map