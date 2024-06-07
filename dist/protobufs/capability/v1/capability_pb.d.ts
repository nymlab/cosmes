import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 *
 * @generated from message capability.v1.Capability
 */
export declare class Capability extends Message<Capability> {
    /**
     * @generated from field: uint64 index = 1;
     */
    index: bigint;
    constructor(data?: PartialMessage<Capability>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "capability.v1.Capability";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Capability;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Capability;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Capability;
    static equals(a: Capability | PlainMessage<Capability> | undefined, b: Capability | PlainMessage<Capability> | undefined): boolean;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 *
 * @generated from message capability.v1.Owner
 */
export declare class Owner extends Message<Owner> {
    /**
     * @generated from field: string module = 1;
     */
    module: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    constructor(data?: PartialMessage<Owner>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "capability.v1.Owner";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Owner;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Owner;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Owner;
    static equals(a: Owner | PlainMessage<Owner> | undefined, b: Owner | PlainMessage<Owner> | undefined): boolean;
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 *
 * @generated from message capability.v1.CapabilityOwners
 */
export declare class CapabilityOwners extends Message<CapabilityOwners> {
    /**
     * @generated from field: repeated capability.v1.Owner owners = 1;
     */
    owners: Owner[];
    constructor(data?: PartialMessage<CapabilityOwners>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "capability.v1.CapabilityOwners";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CapabilityOwners;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CapabilityOwners;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CapabilityOwners;
    static equals(a: CapabilityOwners | PlainMessage<CapabilityOwners> | undefined, b: CapabilityOwners | PlainMessage<CapabilityOwners> | undefined): boolean;
}
//# sourceMappingURL=capability_pb.d.ts.map