import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * StorageType
 *
 * @generated from enum cosmos.orm.v1alpha1.StorageType
 */
export declare enum StorageType {
    /**
     * STORAGE_TYPE_DEFAULT_UNSPECIFIED indicates the persistent
     * KV-storage where primary key entries are stored in merkle-tree
     * backed commitment storage and indexes and seqs are stored in
     * fast index storage. Note that the Cosmos SDK before store/v2alpha1
     * does not support this.
     *
     * @generated from enum value: STORAGE_TYPE_DEFAULT_UNSPECIFIED = 0;
     */
    DEFAULT_UNSPECIFIED = 0,
    /**
     * STORAGE_TYPE_MEMORY indicates in-memory storage that will be
     * reloaded every time an app restarts. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     *
     * @generated from enum value: STORAGE_TYPE_MEMORY = 1;
     */
    MEMORY = 1,
    /**
     * STORAGE_TYPE_TRANSIENT indicates transient storage that is reset
     * at the end of every block. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     *
     * @generated from enum value: STORAGE_TYPE_TRANSIENT = 2;
     */
    TRANSIENT = 2,
    /**
     * STORAGE_TYPE_INDEX indicates persistent storage which is not backed
     * by a merkle-tree and won't affect the app hash. Note that the Cosmos SDK
     * before store/v2alpha1 does not support this.
     *
     * @generated from enum value: STORAGE_TYPE_INDEX = 3;
     */
    INDEX = 3,
    /**
     * STORAGE_TYPE_INDEX indicates persistent storage which is backed by
     * a merkle-tree. With this type of storage, both primary and index keys
     * will affect the app hash and this is generally less efficient
     * than using STORAGE_TYPE_DEFAULT_UNSPECIFIED which separates index
     * keys into index storage. Note that modules built with the
     * Cosmos SDK before store/v2alpha1 must specify STORAGE_TYPE_COMMITMENT
     * instead of STORAGE_TYPE_DEFAULT_UNSPECIFIED or STORAGE_TYPE_INDEX
     * because this is the only type of persistent storage available.
     *
     * @generated from enum value: STORAGE_TYPE_COMMITMENT = 4;
     */
    COMMITMENT = 4
}
/**
 * ModuleSchemaDescriptor describe's a module's ORM schema.
 *
 * @generated from message cosmos.orm.v1alpha1.ModuleSchemaDescriptor
 */
export declare class ModuleSchemaDescriptor extends Message<ModuleSchemaDescriptor> {
    /**
     * @generated from field: repeated cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry schema_file = 1;
     */
    schemaFile: ModuleSchemaDescriptor_FileEntry[];
    /**
     * prefix is an optional prefix that precedes all keys in this module's
     * store.
     *
     * @generated from field: bytes prefix = 2;
     */
    prefix: Uint8Array;
    constructor(data?: PartialMessage<ModuleSchemaDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.v1alpha1.ModuleSchemaDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleSchemaDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleSchemaDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleSchemaDescriptor;
    static equals(a: ModuleSchemaDescriptor | PlainMessage<ModuleSchemaDescriptor> | undefined, b: ModuleSchemaDescriptor | PlainMessage<ModuleSchemaDescriptor> | undefined): boolean;
}
/**
 * FileEntry describes an ORM file used in a module.
 *
 * @generated from message cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry
 */
export declare class ModuleSchemaDescriptor_FileEntry extends Message<ModuleSchemaDescriptor_FileEntry> {
    /**
     * id is a prefix that will be varint encoded and prepended to all the
     * table keys specified in the file's tables.
     *
     * @generated from field: uint32 id = 1;
     */
    id: number;
    /**
     * proto_file_name is the name of a file .proto in that contains
     * table definitions. The .proto file must be in a package that the
     * module has referenced using cosmos.app.v1.ModuleDescriptor.use_package.
     *
     * @generated from field: string proto_file_name = 2;
     */
    protoFileName: string;
    /**
     * storage_type optionally indicates the type of storage this file's
     * tables should used. If it is left unspecified, the default KV-storage
     * of the app will be used.
     *
     * @generated from field: cosmos.orm.v1alpha1.StorageType storage_type = 3;
     */
    storageType: StorageType;
    constructor(data?: PartialMessage<ModuleSchemaDescriptor_FileEntry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.orm.v1alpha1.ModuleSchemaDescriptor.FileEntry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleSchemaDescriptor_FileEntry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleSchemaDescriptor_FileEntry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleSchemaDescriptor_FileEntry;
    static equals(a: ModuleSchemaDescriptor_FileEntry | PlainMessage<ModuleSchemaDescriptor_FileEntry> | undefined, b: ModuleSchemaDescriptor_FileEntry | PlainMessage<ModuleSchemaDescriptor_FileEntry> | undefined): boolean;
}
//# sourceMappingURL=schema_pb.d.ts.map