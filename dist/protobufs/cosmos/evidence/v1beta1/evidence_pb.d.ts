import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 *
 * @generated from message cosmos.evidence.v1beta1.Equivocation
 */
export declare class Equivocation extends Message<Equivocation> {
    /**
     * height is the equivocation height.
     *
     * @generated from field: int64 height = 1;
     */
    height: bigint;
    /**
     * time is the equivocation time.
     *
     * @generated from field: google.protobuf.Timestamp time = 2;
     */
    time?: Timestamp;
    /**
     * power is the equivocation validator power.
     *
     * @generated from field: int64 power = 3;
     */
    power: bigint;
    /**
     * consensus_address is the equivocation validator consensus address.
     *
     * @generated from field: string consensus_address = 4;
     */
    consensusAddress: string;
    constructor(data?: PartialMessage<Equivocation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.evidence.v1beta1.Equivocation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Equivocation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Equivocation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Equivocation;
    static equals(a: Equivocation | PlainMessage<Equivocation> | undefined, b: Equivocation | PlainMessage<Equivocation> | undefined): boolean;
}
//# sourceMappingURL=evidence_pb.d.ts.map