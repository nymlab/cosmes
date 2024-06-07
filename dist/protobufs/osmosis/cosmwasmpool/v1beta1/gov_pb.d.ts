import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * UploadCosmWasmPoolCodeAndWhiteListProposal is a gov Content type for
 * uploading coswasm pool code and adding it to internal whitelist. Only the
 * code ids created by this message are eligible for being x/cosmwasmpool pools.
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.UploadCosmWasmPoolCodeAndWhiteListProposal
 */
export declare class UploadCosmWasmPoolCodeAndWhiteListProposal extends Message<UploadCosmWasmPoolCodeAndWhiteListProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * WASMByteCode can be raw or gzip compressed
     *
     * @generated from field: bytes wasm_byte_code = 3;
     */
    wasmByteCode: Uint8Array;
    constructor(data?: PartialMessage<UploadCosmWasmPoolCodeAndWhiteListProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.UploadCosmWasmPoolCodeAndWhiteListProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadCosmWasmPoolCodeAndWhiteListProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadCosmWasmPoolCodeAndWhiteListProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadCosmWasmPoolCodeAndWhiteListProposal;
    static equals(a: UploadCosmWasmPoolCodeAndWhiteListProposal | PlainMessage<UploadCosmWasmPoolCodeAndWhiteListProposal> | undefined, b: UploadCosmWasmPoolCodeAndWhiteListProposal | PlainMessage<UploadCosmWasmPoolCodeAndWhiteListProposal> | undefined): boolean;
}
/**
 * MigratePoolContractsProposal is a gov Content type for
 * migrating  given pools to the new contract code and adding to internal
 * whitelist if needed. It has two options to perform the migration:
 *
 * 1. If the codeID is non-zero, it will migrate the pool contracts to a given
 * codeID assuming that it has already been uploaded. uploadByteCode must be
 * empty in such a case. Fails if codeID does not exist. Fails if uploadByteCode
 * is not empty.
 *
 * 2. If the codeID is zero, it will upload the given uploadByteCode and use the
 * new resulting code id to migrate the pool to. Errors if uploadByteCode is
 * empty or invalid.
 *
 * In both cases, if one of the pools specified by the given poolID does not
 * exist, the proposal fails.
 *
 * The reason for having poolIDs be a slice of ids is to account for the
 * potential need for emergency migration of all old code ids associated with
 * particular pools to new code ids, or simply having the flexibility of
 * migrating multiple older pool contracts to a new one at once when there is a
 * release.
 *
 * poolD count to be submitted at once is gated by a governance paramets (20 at
 * launch). The proposal fails if more. Note that 20 was chosen arbitrarily to
 * have a constant bound on the number of pools migrated at once. This size will
 * be configured by a module parameter so it can be changed by a constant.
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.MigratePoolContractsProposal
 */
export declare class MigratePoolContractsProposal extends Message<MigratePoolContractsProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * pool_ids are the pool ids of the contracts to be migrated
     * either to the new_code_id that is already uploaded to chain or to
     * the given wasm_byte_code.
     *
     * @generated from field: repeated uint64 pool_ids = 3;
     */
    poolIds: bigint[];
    /**
     * new_code_id is the code id of the contract code to migrate to.
     * Assumes that the code is already uploaded to chain. Only one of
     * new_code_id and wasm_byte_code should be set.
     *
     * @generated from field: uint64 new_code_id = 4;
     */
    newCodeId: bigint;
    /**
     * WASMByteCode can be raw or gzip compressed. Assumes that the code id
     * has not been uploaded yet so uploads the given code and migrates to it.
     * Only one of new_code_id and wasm_byte_code should be set.
     *
     * @generated from field: bytes wasm_byte_code = 5;
     */
    wasmByteCode: Uint8Array;
    /**
     * MigrateMsg migrate message to be used for migrating the pool contracts.
     *
     * @generated from field: bytes migrate_msg = 6;
     */
    migrateMsg: Uint8Array;
    constructor(data?: PartialMessage<MigratePoolContractsProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.MigratePoolContractsProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigratePoolContractsProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigratePoolContractsProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigratePoolContractsProposal;
    static equals(a: MigratePoolContractsProposal | PlainMessage<MigratePoolContractsProposal> | undefined, b: MigratePoolContractsProposal | PlainMessage<MigratePoolContractsProposal> | undefined): boolean;
}
//# sourceMappingURL=gov_pb.d.ts.map