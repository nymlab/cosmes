import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Snapshot contains Tendermint state sync snapshot info.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.Snapshot
 */
export declare class Snapshot extends Message<Snapshot> {
    /**
     * @generated from field: uint64 height = 1;
     */
    height: bigint;
    /**
     * @generated from field: uint32 format = 2;
     */
    format: number;
    /**
     * @generated from field: uint32 chunks = 3;
     */
    chunks: number;
    /**
     * @generated from field: bytes hash = 4;
     */
    hash: Uint8Array;
    /**
     * @generated from field: cosmos.base.snapshots.v1beta1.Metadata metadata = 5;
     */
    metadata?: Metadata;
    constructor(data?: PartialMessage<Snapshot>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.snapshots.v1beta1.Snapshot";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Snapshot;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Snapshot;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Snapshot;
    static equals(a: Snapshot | PlainMessage<Snapshot> | undefined, b: Snapshot | PlainMessage<Snapshot> | undefined): boolean;
}
/**
 * Metadata contains SDK-specific snapshot metadata.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.Metadata
 */
export declare class Metadata extends Message<Metadata> {
    /**
     * SHA-256 chunk hashes
     *
     * @generated from field: repeated bytes chunk_hashes = 1;
     */
    chunkHashes: Uint8Array[];
    constructor(data?: PartialMessage<Metadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.snapshots.v1beta1.Metadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata;
    static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean;
}
/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotItem
 */
export declare class SnapshotItem extends Message<SnapshotItem> {
    /**
     * item is the specific type of snapshot item.
     *
     * @generated from oneof cosmos.base.snapshots.v1beta1.SnapshotItem.item
     */
    item: {
        /**
         * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotStoreItem store = 1;
         */
        value: SnapshotStoreItem;
        case: "store";
    } | {
        /**
         * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotIAVLItem iavl = 2;
         */
        value: SnapshotIAVLItem;
        case: "iavl";
    } | {
        /**
         * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta extension = 3;
         */
        value: SnapshotExtensionMeta;
        case: "extension";
    } | {
        /**
         * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload extension_payload = 4;
         */
        value: SnapshotExtensionPayload;
        case: "extensionPayload";
    } | {
        /**
         * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotKVItem kv = 5 [deprecated = true];
         * @deprecated
         */
        value: SnapshotKVItem;
        case: "kv";
    } | {
        /**
         * @generated from field: cosmos.base.snapshots.v1beta1.SnapshotSchema schema = 6 [deprecated = true];
         * @deprecated
         */
        value: SnapshotSchema;
        case: "schema";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<SnapshotItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.snapshots.v1beta1.SnapshotItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotItem;
    static equals(a: SnapshotItem | PlainMessage<SnapshotItem> | undefined, b: SnapshotItem | PlainMessage<SnapshotItem> | undefined): boolean;
}
/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotStoreItem
 */
export declare class SnapshotStoreItem extends Message<SnapshotStoreItem> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    constructor(data?: PartialMessage<SnapshotStoreItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.snapshots.v1beta1.SnapshotStoreItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotStoreItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotStoreItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotStoreItem;
    static equals(a: SnapshotStoreItem | PlainMessage<SnapshotStoreItem> | undefined, b: SnapshotStoreItem | PlainMessage<SnapshotStoreItem> | undefined): boolean;
}
/**
 * SnapshotIAVLItem is an exported IAVL node.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotIAVLItem
 */
export declare class SnapshotIAVLItem extends Message<SnapshotIAVLItem> {
    /**
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes value = 2;
     */
    value: Uint8Array;
    /**
     * version is block height
     *
     * @generated from field: int64 version = 3;
     */
    version: bigint;
    /**
     * height is depth of the tree.
     *
     * @generated from field: int32 height = 4;
     */
    height: number;
    constructor(data?: PartialMessage<SnapshotIAVLItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.snapshots.v1beta1.SnapshotIAVLItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotIAVLItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotIAVLItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotIAVLItem;
    static equals(a: SnapshotIAVLItem | PlainMessage<SnapshotIAVLItem> | undefined, b: SnapshotIAVLItem | PlainMessage<SnapshotIAVLItem> | undefined): boolean;
}
/**
 * SnapshotExtensionMeta contains metadata about an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta
 */
export declare class SnapshotExtensionMeta extends Message<SnapshotExtensionMeta> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: uint32 format = 2;
     */
    format: number;
    constructor(data?: PartialMessage<SnapshotExtensionMeta>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotExtensionMeta;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotExtensionMeta;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotExtensionMeta;
    static equals(a: SnapshotExtensionMeta | PlainMessage<SnapshotExtensionMeta> | undefined, b: SnapshotExtensionMeta | PlainMessage<SnapshotExtensionMeta> | undefined): boolean;
}
/**
 * SnapshotExtensionPayload contains payloads of an external snapshotter.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload
 */
export declare class SnapshotExtensionPayload extends Message<SnapshotExtensionPayload> {
    /**
     * @generated from field: bytes payload = 1;
     */
    payload: Uint8Array;
    constructor(data?: PartialMessage<SnapshotExtensionPayload>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotExtensionPayload;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotExtensionPayload;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotExtensionPayload;
    static equals(a: SnapshotExtensionPayload | PlainMessage<SnapshotExtensionPayload> | undefined, b: SnapshotExtensionPayload | PlainMessage<SnapshotExtensionPayload> | undefined): boolean;
}
/**
 * SnapshotKVItem is an exported Key/Value Pair
 *
 * Since: cosmos-sdk 0.46
 * Deprecated: This message was part of store/v2alpha1 which has been deleted from v0.47.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotKVItem
 * @deprecated
 */
export declare class SnapshotKVItem extends Message<SnapshotKVItem> {
    /**
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes value = 2;
     */
    value: Uint8Array;
    constructor(data?: PartialMessage<SnapshotKVItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.snapshots.v1beta1.SnapshotKVItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotKVItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotKVItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotKVItem;
    static equals(a: SnapshotKVItem | PlainMessage<SnapshotKVItem> | undefined, b: SnapshotKVItem | PlainMessage<SnapshotKVItem> | undefined): boolean;
}
/**
 * SnapshotSchema is an exported schema of smt store
 *
 * Since: cosmos-sdk 0.46
 * Deprecated: This message was part of store/v2alpha1 which has been deleted from v0.47.
 *
 * @generated from message cosmos.base.snapshots.v1beta1.SnapshotSchema
 * @deprecated
 */
export declare class SnapshotSchema extends Message<SnapshotSchema> {
    /**
     * @generated from field: repeated bytes keys = 1;
     */
    keys: Uint8Array[];
    constructor(data?: PartialMessage<SnapshotSchema>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.snapshots.v1beta1.SnapshotSchema";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotSchema;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotSchema;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotSchema;
    static equals(a: SnapshotSchema | PlainMessage<SnapshotSchema> | undefined, b: SnapshotSchema | PlainMessage<SnapshotSchema> | undefined): boolean;
}
//# sourceMappingURL=snapshot_pb.d.ts.map