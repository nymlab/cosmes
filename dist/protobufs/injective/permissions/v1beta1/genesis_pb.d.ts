import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Namespace } from "./permissions_pb.js";
/**
 * GenesisState defines the permissions module's genesis state.
 *
 * @generated from message injective.permissions.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: injective.permissions.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from field: repeated injective.permissions.v1beta1.Namespace namespaces = 2;
     */
    namespaces: Namespace[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map