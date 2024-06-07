import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { CapabilityOwners } from "./capability_pb.js";
/**
 * GenesisOwners defines the capability owners with their corresponding index.
 *
 * @generated from message capability.v1.GenesisOwners
 */
export declare class GenesisOwners extends Message<GenesisOwners> {
    /**
     * index is the index of the capability owner.
     *
     * @generated from field: uint64 index = 1;
     */
    index: bigint;
    /**
     * index_owners are the owners at the given index.
     *
     * @generated from field: capability.v1.CapabilityOwners index_owners = 2;
     */
    indexOwners?: CapabilityOwners;
    constructor(data?: PartialMessage<GenesisOwners>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "capability.v1.GenesisOwners";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisOwners;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisOwners;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisOwners;
    static equals(a: GenesisOwners | PlainMessage<GenesisOwners> | undefined, b: GenesisOwners | PlainMessage<GenesisOwners> | undefined): boolean;
}
/**
 * GenesisState defines the capability module's genesis state.
 *
 * @generated from message capability.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * index is the capability global index.
     *
     * @generated from field: uint64 index = 1;
     */
    index: bigint;
    /**
     * owners represents a map from index to owners of the capability index
     * index key is string to allow amino marshalling.
     *
     * @generated from field: repeated capability.v1.GenesisOwners owners = 2;
     */
    owners: GenesisOwners[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "capability.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map