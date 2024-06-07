import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Minter, Params } from "./mint_pb.js";
/**
 * GenesisState defines the mint module's genesis state.
 *
 * @generated from message cosmos.mint.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * minter is a space for holding current inflation information.
     *
     * @generated from field: cosmos.mint.v1beta1.Minter minter = 1;
     */
    minter?: Minter;
    /**
     * params defines all the parameters of the module.
     *
     * @generated from field: cosmos.mint.v1beta1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.mint.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map