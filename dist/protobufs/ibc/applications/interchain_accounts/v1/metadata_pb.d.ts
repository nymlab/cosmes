import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 *
 * @generated from message ibc.applications.interchain_accounts.v1.Metadata
 */
export declare class Metadata extends Message<Metadata> {
    /**
     * version defines the ICS27 protocol version
     *
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * controller_connection_id is the connection identifier associated with the controller chain
     *
     * @generated from field: string controller_connection_id = 2;
     */
    controllerConnectionId: string;
    /**
     * host_connection_id is the connection identifier associated with the host chain
     *
     * @generated from field: string host_connection_id = 3;
     */
    hostConnectionId: string;
    /**
     * address defines the interchain account address to be fulfilled upon the OnChanOpenTry handshake step
     * NOTE: the address field is empty on the OnChanOpenInit handshake step
     *
     * @generated from field: string address = 4;
     */
    address: string;
    /**
     * encoding defines the supported codec format
     *
     * @generated from field: string encoding = 5;
     */
    encoding: string;
    /**
     * tx_type defines the type of transactions the interchain account can execute
     *
     * @generated from field: string tx_type = 6;
     */
    txType: string;
    constructor(data?: PartialMessage<Metadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.v1.Metadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata;
    static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean;
}
//# sourceMappingURL=metadata_pb.d.ts.map