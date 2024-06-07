import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * MigrationRecords contains all the links between balancer and concentrated
 * pools
 *
 * @generated from message osmosis.gamm.v1beta1.MigrationRecords
 */
export declare class MigrationRecords extends Message<MigrationRecords> {
    /**
     * @generated from field: repeated osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink balancer_to_concentrated_pool_links = 1;
     */
    balancerToConcentratedPoolLinks: BalancerToConcentratedPoolLink[];
    constructor(data?: PartialMessage<MigrationRecords>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.MigrationRecords";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrationRecords;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrationRecords;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrationRecords;
    static equals(a: MigrationRecords | PlainMessage<MigrationRecords> | undefined, b: MigrationRecords | PlainMessage<MigrationRecords> | undefined): boolean;
}
/**
 * BalancerToConcentratedPoolLink defines a single link between a single
 * balancer pool and a single concentrated liquidity pool. This link is used to
 * allow a balancer pool to migrate to a single canonical full range
 * concentrated liquidity pool position
 * A balancer pool can be linked to a maximum of one cl pool, and a cl pool can
 * be linked to a maximum of one balancer pool.
 *
 * @generated from message osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink
 */
export declare class BalancerToConcentratedPoolLink extends Message<BalancerToConcentratedPoolLink> {
    /**
     * @generated from field: uint64 balancer_pool_id = 1;
     */
    balancerPoolId: bigint;
    /**
     * @generated from field: uint64 cl_pool_id = 2;
     */
    clPoolId: bigint;
    constructor(data?: PartialMessage<BalancerToConcentratedPoolLink>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BalancerToConcentratedPoolLink;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BalancerToConcentratedPoolLink;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BalancerToConcentratedPoolLink;
    static equals(a: BalancerToConcentratedPoolLink | PlainMessage<BalancerToConcentratedPoolLink> | undefined, b: BalancerToConcentratedPoolLink | PlainMessage<BalancerToConcentratedPoolLink> | undefined): boolean;
}
//# sourceMappingURL=shared_pb.d.ts.map