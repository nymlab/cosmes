import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * TableDescriptor describes an ORM table.
 *
 * @generated from message cosmos.orm.v1.TableDescriptor
 */
export declare class TableDescriptor extends Message<TableDescriptor> {
    /**
     * primary_key defines the primary key for the table.
     *
     * @generated from field: cosmos.orm.v1.PrimaryKeyDescriptor primary_key = 1;
     */
    primaryKey?: PrimaryKeyDescriptor;
    /**
     * index defines one or more secondary indexes.
     *
     * @generated from field: repeated cosmos.orm.v1.SecondaryIndexDescriptor index = 2;
     */
    index: SecondaryIndexDescriptor[];
    /**
     * id is a non-zero integer ID that must be unique within the
     * tables and singletons in this file. It may be deprecated in the future when this
     * can be auto-generated.
     *
     * @generated from field: uint32 id = 3;
     */
    id: number;
    constructor(data?: PartialMessage<TableDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.v1.TableDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TableDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TableDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TableDescriptor;
    static equals(a: TableDescriptor | PlainMessage<TableDescriptor> | undefined, b: TableDescriptor | PlainMessage<TableDescriptor> | undefined): boolean;
}
/**
 * PrimaryKeyDescriptor describes a table primary key.
 *
 * @generated from message cosmos.orm.v1.PrimaryKeyDescriptor
 */
export declare class PrimaryKeyDescriptor extends Message<PrimaryKeyDescriptor> {
    /**
     * fields is a comma-separated list of fields in the primary key. Spaces are
     * not allowed. Supported field types, their encodings, and any applicable constraints
     * are described below.
     *   - uint32 are encoded as 2,3,4 or 5 bytes using a compact encoding that
     *     is suitable for sorted iteration (not varint encoding). This type is
     *     well-suited for small integers.
     *   - uint64 are encoded as 2,4,6 or 9 bytes using a compact encoding that
     *     is suitable for sorted iteration (not varint encoding). This type is
     *     well-suited for small integers such as auto-incrementing sequences.
     *   - fixed32, fixed64 are encoded as big-endian fixed width bytes and support
     *   sorted iteration. These types are well-suited for encoding fixed with
     *   decimals as integers.
     *   - string's are encoded as raw bytes in terminal key segments and null-terminated
     *   in non-terminal segments. Null characters are thus forbidden in strings.
     *   string fields support sorted iteration.
     *   - bytes are encoded as raw bytes in terminal segments and length-prefixed
     *   with a 32-bit unsigned varint in non-terminal segments.
     *   - int32, sint32, int64, sint64, sfixed32, sfixed64 are encoded as fixed width bytes with
     *   an encoding that enables sorted iteration.
     *   - google.protobuf.Timestamp and google.protobuf.Duration are encoded
     *   as 12 bytes using an encoding that enables sorted iteration.
     *   - enum fields are encoded using varint encoding and do not support sorted
     *   iteration.
     *   - bool fields are encoded as a single byte 0 or 1.
     *
     * All other fields types are unsupported in keys including repeated and
     * oneof fields.
     *
     * Primary keys are prefixed by the varint encoded table id and the byte 0x0
     * plus any additional prefix specified by the schema.
     *
     * @generated from field: string fields = 1;
     */
    fields: string;
    /**
     * auto_increment specifies that the primary key is generated by an
     * auto-incrementing integer. If this is set to true fields must only
     * contain one field of that is of type uint64.
     *
     * @generated from field: bool auto_increment = 2;
     */
    autoIncrement: boolean;
    constructor(data?: PartialMessage<PrimaryKeyDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.v1.PrimaryKeyDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrimaryKeyDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrimaryKeyDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrimaryKeyDescriptor;
    static equals(a: PrimaryKeyDescriptor | PlainMessage<PrimaryKeyDescriptor> | undefined, b: PrimaryKeyDescriptor | PlainMessage<PrimaryKeyDescriptor> | undefined): boolean;
}
/**
 * PrimaryKeyDescriptor describes a table secondary index.
 *
 * @generated from message cosmos.orm.v1.SecondaryIndexDescriptor
 */
export declare class SecondaryIndexDescriptor extends Message<SecondaryIndexDescriptor> {
    /**
     * fields is a comma-separated list of fields in the index. The supported
     * field types are the same as those for PrimaryKeyDescriptor.fields.
     * Index keys are prefixed by the varint encoded table id and the varint
     * encoded index id plus any additional prefix specified by the schema.
     *
     * In addition the field segments, non-unique index keys are suffixed with
     * any additional primary key fields not present in the index fields so that the
     * primary key can be reconstructed. Unique indexes instead of being suffixed
     * store the remaining primary key fields in the value..
     *
     * @generated from field: string fields = 1;
     */
    fields: string;
    /**
     * id is a non-zero integer ID that must be unique within the indexes for this
     * table and less than 32768. It may be deprecated in the future when this can
     * be auto-generated.
     *
     * @generated from field: uint32 id = 2;
     */
    id: number;
    /**
     * unique specifies that this an unique index.
     *
     * @generated from field: bool unique = 3;
     */
    unique: boolean;
    constructor(data?: PartialMessage<SecondaryIndexDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.v1.SecondaryIndexDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SecondaryIndexDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SecondaryIndexDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SecondaryIndexDescriptor;
    static equals(a: SecondaryIndexDescriptor | PlainMessage<SecondaryIndexDescriptor> | undefined, b: SecondaryIndexDescriptor | PlainMessage<SecondaryIndexDescriptor> | undefined): boolean;
}
/**
 * TableDescriptor describes an ORM singleton table which has at most one instance.
 *
 * @generated from message cosmos.orm.v1.SingletonDescriptor
 */
export declare class SingletonDescriptor extends Message<SingletonDescriptor> {
    /**
     * id is a non-zero integer ID that must be unique within the
     * tables and singletons in this file. It may be deprecated in the future when this
     * can be auto-generated.
     *
     * @generated from field: uint32 id = 1;
     */
    id: number;
    constructor(data?: PartialMessage<SingletonDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.v1.SingletonDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SingletonDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SingletonDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SingletonDescriptor;
    static equals(a: SingletonDescriptor | PlainMessage<SingletonDescriptor> | undefined, b: SingletonDescriptor | PlainMessage<SingletonDescriptor> | undefined): boolean;
}
//# sourceMappingURL=orm_pb.d.ts.map