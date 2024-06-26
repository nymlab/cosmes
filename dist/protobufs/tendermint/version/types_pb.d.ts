import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 *
 * @generated from message tendermint.version.App
 */
export declare class App extends Message<App> {
    /**
     * @generated from field: uint64 protocol = 1;
     */
    protocol: bigint;
    /**
     * @generated from field: string software = 2;
     */
    software: string;
    constructor(data?: PartialMessage<App>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.version.App";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): App;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): App;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): App;
    static equals(a: App | PlainMessage<App> | undefined, b: App | PlainMessage<App> | undefined): boolean;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 *
 * @generated from message tendermint.version.Consensus
 */
export declare class Consensus extends Message<Consensus> {
    /**
     * @generated from field: uint64 block = 1;
     */
    block: bigint;
    /**
     * @generated from field: uint64 app = 2;
     */
    app: bigint;
    constructor(data?: PartialMessage<Consensus>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.version.Consensus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Consensus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Consensus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Consensus;
    static equals(a: Consensus | PlainMessage<Consensus> | undefined, b: Consensus | PlainMessage<Consensus> | undefined): boolean;
}
//# sourceMappingURL=types_pb.d.ts.map