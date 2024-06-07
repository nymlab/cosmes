import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * code_ide_whitelist contains the list of code ids that are allowed to be
     * instantiated.
     *
     * @generated from field: repeated uint64 code_id_whitelist = 1;
     */
    codeIdWhitelist: bigint[];
    /**
     * pool_migration_limit is the maximum number of pools that can be migrated
     * at once via governance proposal. This is to have a constant bound on the
     * number of pools that can be migrated at once and remove the possibility
     * of an unlikely scenario of causing a chain halt due to a large migration.
     *
     * @generated from field: uint64 pool_migration_limit = 2;
     */
    poolMigrationLimit: bigint;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.cosmwasmpool.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=params_pb.d.ts.map