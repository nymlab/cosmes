import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BalancerToConcentratedPoolLink } from "./shared_pb.js";
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 *
 * @generated from message osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal
 */
export declare class ReplaceMigrationRecordsProposal extends Message<ReplaceMigrationRecordsProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink records = 3;
     */
    records: BalancerToConcentratedPoolLink[];
    constructor(data?: PartialMessage<ReplaceMigrationRecordsProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceMigrationRecordsProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceMigrationRecordsProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceMigrationRecordsProposal;
    static equals(a: ReplaceMigrationRecordsProposal | PlainMessage<ReplaceMigrationRecordsProposal> | undefined, b: ReplaceMigrationRecordsProposal | PlainMessage<ReplaceMigrationRecordsProposal> | undefined): boolean;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 *
 * @generated from message osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal
 */
export declare class UpdateMigrationRecordsProposal extends Message<UpdateMigrationRecordsProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink records = 3;
     */
    records: BalancerToConcentratedPoolLink[];
    constructor(data?: PartialMessage<UpdateMigrationRecordsProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateMigrationRecordsProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateMigrationRecordsProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateMigrationRecordsProposal;
    static equals(a: UpdateMigrationRecordsProposal | PlainMessage<UpdateMigrationRecordsProposal> | undefined, b: UpdateMigrationRecordsProposal | PlainMessage<UpdateMigrationRecordsProposal> | undefined): boolean;
}
/**
 * @generated from message osmosis.gamm.v1beta1.PoolRecordWithCFMMLink
 */
export declare class PoolRecordWithCFMMLink extends Message<PoolRecordWithCFMMLink> {
    /**
     * @generated from field: string denom0 = 1;
     */
    denom0: string;
    /**
     * @generated from field: string denom1 = 2;
     */
    denom1: string;
    /**
     * @generated from field: uint64 tick_spacing = 3;
     */
    tickSpacing: bigint;
    /**
     * @generated from field: string exponent_at_price_one = 4;
     */
    exponentAtPriceOne: string;
    /**
     * @generated from field: string spread_factor = 5;
     */
    spreadFactor: string;
    /**
     * @generated from field: uint64 balancer_pool_id = 6;
     */
    balancerPoolId: bigint;
    constructor(data?: PartialMessage<PoolRecordWithCFMMLink>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.PoolRecordWithCFMMLink";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolRecordWithCFMMLink;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolRecordWithCFMMLink;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolRecordWithCFMMLink;
    static equals(a: PoolRecordWithCFMMLink | PlainMessage<PoolRecordWithCFMMLink> | undefined, b: PoolRecordWithCFMMLink | PlainMessage<PoolRecordWithCFMMLink> | undefined): boolean;
}
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 *
 * @generated from message osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal
 */
export declare class CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal extends Message<CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated osmosis.gamm.v1beta1.PoolRecordWithCFMMLink pool_records_with_cfmm_link = 3;
     */
    poolRecordsWithCfmmLink: PoolRecordWithCFMMLink[];
    constructor(data?: PartialMessage<CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal;
    static equals(a: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal | PlainMessage<CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal> | undefined, b: CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal | PlainMessage<CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal> | undefined): boolean;
}
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 *
 * @generated from message osmosis.gamm.v1beta1.SetScalingFactorControllerProposal
 */
export declare class SetScalingFactorControllerProposal extends Message<SetScalingFactorControllerProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: uint64 pool_id = 3;
     */
    poolId: bigint;
    /**
     * @generated from field: string controller_address = 4;
     */
    controllerAddress: string;
    constructor(data?: PartialMessage<SetScalingFactorControllerProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.SetScalingFactorControllerProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetScalingFactorControllerProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetScalingFactorControllerProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetScalingFactorControllerProposal;
    static equals(a: SetScalingFactorControllerProposal | PlainMessage<SetScalingFactorControllerProposal> | undefined, b: SetScalingFactorControllerProposal | PlainMessage<SetScalingFactorControllerProposal> | undefined): boolean;
}
//# sourceMappingURL=gov_pb.d.ts.map