import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 *
 * @generated from message cosmos.base.store.v1beta1.CommitInfo
 */
export declare class CommitInfo extends Message<CommitInfo> {
    /**
     * @generated from field: int64 version = 1;
     */
    version: bigint;
    /**
     * @generated from field: repeated cosmos.base.store.v1beta1.StoreInfo store_infos = 2;
     */
    storeInfos: StoreInfo[];
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 3;
     */
    timestamp?: Timestamp;
    constructor(data?: PartialMessage<CommitInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.store.v1beta1.CommitInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitInfo;
    static equals(a: CommitInfo | PlainMessage<CommitInfo> | undefined, b: CommitInfo | PlainMessage<CommitInfo> | undefined): boolean;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 *
 * @generated from message cosmos.base.store.v1beta1.StoreInfo
 */
export declare class StoreInfo extends Message<StoreInfo> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: cosmos.base.store.v1beta1.CommitID commit_id = 2;
     */
    commitId?: CommitID;
    constructor(data?: PartialMessage<StoreInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.store.v1beta1.StoreInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreInfo;
    static equals(a: StoreInfo | PlainMessage<StoreInfo> | undefined, b: StoreInfo | PlainMessage<StoreInfo> | undefined): boolean;
}
/**
 * CommitID defines the commitment information when a specific store is
 * committed.
 *
 * @generated from message cosmos.base.store.v1beta1.CommitID
 */
export declare class CommitID extends Message<CommitID> {
    /**
     * @generated from field: int64 version = 1;
     */
    version: bigint;
    /**
     * @generated from field: bytes hash = 2;
     */
    hash: Uint8Array;
    constructor(data?: PartialMessage<CommitID>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.store.v1beta1.CommitID";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitID;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitID;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitID;
    static equals(a: CommitID | PlainMessage<CommitID> | undefined, b: CommitID | PlainMessage<CommitID> | undefined): boolean;
}
//# sourceMappingURL=commit_info_pb.d.ts.map