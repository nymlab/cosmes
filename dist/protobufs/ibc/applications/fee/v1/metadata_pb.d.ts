import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Metadata defines the ICS29 channel specific metadata encoded into the channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 *
 * @generated from message ibc.applications.fee.v1.Metadata
 */
export declare class Metadata extends Message<Metadata> {
    /**
     * fee_version defines the ICS29 fee version
     *
     * @generated from field: string fee_version = 1;
     */
    feeVersion: string;
    /**
     * app_version defines the underlying application version, which may or may not be a JSON encoded bytestring
     *
     * @generated from field: string app_version = 2;
     */
    appVersion: string;
    constructor(data?: PartialMessage<Metadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.Metadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata;
    static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean;
}
//# sourceMappingURL=metadata_pb.d.ts.map