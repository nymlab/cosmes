import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
/**
 * Module is the config object of the group module.
 *
 * @generated from message cosmos.group.module.v1.Module
 */
export declare class Module extends Message<Module> {
    /**
     * max_execution_period defines the max duration after a proposal's voting period ends that members can send a MsgExec
     * to execute the proposal.
     *
     * @generated from field: google.protobuf.Duration max_execution_period = 1;
     */
    maxExecutionPeriod?: Duration;
    /**
     * max_metadata_len defines the max length of the metadata bytes field for various entities within the group module.
     * Defaults to 255 if not explicitly set.
     *
     * @generated from field: uint64 max_metadata_len = 2;
     */
    maxMetadataLen: bigint;
    constructor(data?: PartialMessage<Module>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.group.module.v1.Module";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module;
    static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean;
}
//# sourceMappingURL=module_pb.d.ts.map