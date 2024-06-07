import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Module is the config object of the capability module.
 *
 * @generated from message cosmos.capability.module.v1.Module
 */
export declare class Module extends Message<Module> {
    /**
     * seal_keeper defines if keeper.Seal() will run on BeginBlock() to prevent further modules from creating a scoped
     * keeper. For more details check x/capability/keeper.go.
     *
     * @generated from field: bool seal_keeper = 1;
     */
    sealKeeper: boolean;
    constructor(data?: PartialMessage<Module>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.capability.module.v1.Module";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module;
    static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean;
}
//# sourceMappingURL=module_pb.d.ts.map