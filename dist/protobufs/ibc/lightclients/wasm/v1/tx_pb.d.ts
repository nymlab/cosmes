import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * MsgStoreCode defines the request type for the StoreCode rpc.
 *
 * @generated from message ibc.lightclients.wasm.v1.MsgStoreCode
 */
export declare class MsgStoreCode extends Message<MsgStoreCode> {
    /**
     * signer address
     *
     * @generated from field: string signer = 1;
     */
    signer: string;
    /**
     * wasm byte code of light client contract. It can be raw or gzip compressed
     *
     * @generated from field: bytes wasm_byte_code = 2;
     */
    wasmByteCode: Uint8Array;
    constructor(data?: PartialMessage<MsgStoreCode>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.MsgStoreCode";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStoreCode;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStoreCode;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStoreCode;
    static equals(a: MsgStoreCode | PlainMessage<MsgStoreCode> | undefined, b: MsgStoreCode | PlainMessage<MsgStoreCode> | undefined): boolean;
}
/**
 * MsgStoreCodeResponse defines the response type for the StoreCode rpc
 *
 * @generated from message ibc.lightclients.wasm.v1.MsgStoreCodeResponse
 */
export declare class MsgStoreCodeResponse extends Message<MsgStoreCodeResponse> {
    /**
     * checksum is the sha256 hash of the stored code
     *
     * @generated from field: bytes checksum = 1;
     */
    checksum: Uint8Array;
    constructor(data?: PartialMessage<MsgStoreCodeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.MsgStoreCodeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStoreCodeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStoreCodeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStoreCodeResponse;
    static equals(a: MsgStoreCodeResponse | PlainMessage<MsgStoreCodeResponse> | undefined, b: MsgStoreCodeResponse | PlainMessage<MsgStoreCodeResponse> | undefined): boolean;
}
/**
 * MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc.
 *
 * @generated from message ibc.lightclients.wasm.v1.MsgRemoveChecksum
 */
export declare class MsgRemoveChecksum extends Message<MsgRemoveChecksum> {
    /**
     * signer address
     *
     * @generated from field: string signer = 1;
     */
    signer: string;
    /**
     * checksum is the sha256 hash to be removed from the store
     *
     * @generated from field: bytes checksum = 2;
     */
    checksum: Uint8Array;
    constructor(data?: PartialMessage<MsgRemoveChecksum>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.MsgRemoveChecksum";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRemoveChecksum;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRemoveChecksum;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRemoveChecksum;
    static equals(a: MsgRemoveChecksum | PlainMessage<MsgRemoveChecksum> | undefined, b: MsgRemoveChecksum | PlainMessage<MsgRemoveChecksum> | undefined): boolean;
}
/**
 * MsgStoreChecksumResponse defines the response type for the StoreCode rpc
 *
 * @generated from message ibc.lightclients.wasm.v1.MsgRemoveChecksumResponse
 */
export declare class MsgRemoveChecksumResponse extends Message<MsgRemoveChecksumResponse> {
    constructor(data?: PartialMessage<MsgRemoveChecksumResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.MsgRemoveChecksumResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRemoveChecksumResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRemoveChecksumResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRemoveChecksumResponse;
    static equals(a: MsgRemoveChecksumResponse | PlainMessage<MsgRemoveChecksumResponse> | undefined, b: MsgRemoveChecksumResponse | PlainMessage<MsgRemoveChecksumResponse> | undefined): boolean;
}
/**
 * MsgMigrateContract defines the request type for the MigrateContract rpc.
 *
 * @generated from message ibc.lightclients.wasm.v1.MsgMigrateContract
 */
export declare class MsgMigrateContract extends Message<MsgMigrateContract> {
    /**
     * signer address
     *
     * @generated from field: string signer = 1;
     */
    signer: string;
    /**
     * the client id of the contract
     *
     * @generated from field: string client_id = 2;
     */
    clientId: string;
    /**
     * checksum is the sha256 hash of the new wasm byte code for the contract
     *
     * @generated from field: bytes checksum = 3;
     */
    checksum: Uint8Array;
    /**
     * the json encoded message to be passed to the contract on migration
     *
     * @generated from field: bytes msg = 4;
     */
    msg: Uint8Array;
    constructor(data?: PartialMessage<MsgMigrateContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.MsgMigrateContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMigrateContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMigrateContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMigrateContract;
    static equals(a: MsgMigrateContract | PlainMessage<MsgMigrateContract> | undefined, b: MsgMigrateContract | PlainMessage<MsgMigrateContract> | undefined): boolean;
}
/**
 * MsgMigrateContractResponse defines the response type for the MigrateContract rpc
 *
 * @generated from message ibc.lightclients.wasm.v1.MsgMigrateContractResponse
 */
export declare class MsgMigrateContractResponse extends Message<MsgMigrateContractResponse> {
    constructor(data?: PartialMessage<MsgMigrateContractResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.wasm.v1.MsgMigrateContractResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMigrateContractResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMigrateContractResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMigrateContractResponse;
    static equals(a: MsgMigrateContractResponse | PlainMessage<MsgMigrateContractResponse> | undefined, b: MsgMigrateContractResponse | PlainMessage<MsgMigrateContractResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map