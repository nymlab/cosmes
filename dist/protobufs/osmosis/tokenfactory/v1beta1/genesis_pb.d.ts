import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { DenomAuthorityMetadata } from "./authorityMetadata_pb.js";
/**
 * GenesisState defines the tokenfactory module's genesis state.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: osmosis.tokenfactory.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from field: repeated osmosis.tokenfactory.v1beta1.GenesisDenom factory_denoms = 2;
     */
    factoryDenoms: GenesisDenom[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.GenesisDenom
 */
export declare class GenesisDenom extends Message<GenesisDenom> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata authority_metadata = 2;
     */
    authorityMetadata?: DenomAuthorityMetadata;
    constructor(data?: PartialMessage<GenesisDenom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.GenesisDenom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisDenom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisDenom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisDenom;
    static equals(a: GenesisDenom | PlainMessage<GenesisDenom> | undefined, b: GenesisDenom | PlainMessage<GenesisDenom> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map