import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Pairs defines a repeated slice of Pair objects.
 *
 * @generated from message cosmos.base.kv.v1beta1.Pairs
 */
export declare class Pairs extends Message<Pairs> {
    /**
     * @generated from field: repeated cosmos.base.kv.v1beta1.Pair pairs = 1;
     */
    pairs: Pair[];
    constructor(data?: PartialMessage<Pairs>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.kv.v1beta1.Pairs";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pairs;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pairs;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pairs;
    static equals(a: Pairs | PlainMessage<Pairs> | undefined, b: Pairs | PlainMessage<Pairs> | undefined): boolean;
}
/**
 * Pair defines a key/value bytes tuple.
 *
 * @generated from message cosmos.base.kv.v1beta1.Pair
 */
export declare class Pair extends Message<Pair> {
    /**
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes value = 2;
     */
    value: Uint8Array;
    constructor(data?: PartialMessage<Pair>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.kv.v1beta1.Pair";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pair;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pair;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pair;
    static equals(a: Pair | PlainMessage<Pair> | undefined, b: Pair | PlainMessage<Pair> | undefined): boolean;
}
//# sourceMappingURL=kv_pb.d.ts.map