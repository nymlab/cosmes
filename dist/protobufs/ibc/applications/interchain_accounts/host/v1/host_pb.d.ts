import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 *
 * @generated from message ibc.applications.interchain_accounts.host.v1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * host_enabled enables or disables the host submodule.
     *
     * @generated from field: bool host_enabled = 1;
     */
    hostEnabled: boolean;
    /**
     * allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain.
     *
     * @generated from field: repeated string allow_messages = 2;
     */
    allowMessages: string[];
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.host.v1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=host_pb.d.ts.map