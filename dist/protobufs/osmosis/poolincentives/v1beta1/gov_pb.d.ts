import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DistrRecord } from "./incentives_pb.js";
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 *
 * @generated from message osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal
 */
export declare class ReplacePoolIncentivesProposal extends Message<ReplacePoolIncentivesProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated osmosis.poolincentives.v1beta1.DistrRecord records = 3;
     */
    records: DistrRecord[];
    constructor(data?: PartialMessage<ReplacePoolIncentivesProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplacePoolIncentivesProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplacePoolIncentivesProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplacePoolIncentivesProposal;
    static equals(a: ReplacePoolIncentivesProposal | PlainMessage<ReplacePoolIncentivesProposal> | undefined, b: ReplacePoolIncentivesProposal | PlainMessage<ReplacePoolIncentivesProposal> | undefined): boolean;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 *
 * @generated from message osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal
 */
export declare class UpdatePoolIncentivesProposal extends Message<UpdatePoolIncentivesProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated osmosis.poolincentives.v1beta1.DistrRecord records = 3;
     */
    records: DistrRecord[];
    constructor(data?: PartialMessage<UpdatePoolIncentivesProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePoolIncentivesProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePoolIncentivesProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePoolIncentivesProposal;
    static equals(a: UpdatePoolIncentivesProposal | PlainMessage<UpdatePoolIncentivesProposal> | undefined, b: UpdatePoolIncentivesProposal | PlainMessage<UpdatePoolIncentivesProposal> | undefined): boolean;
}
//# sourceMappingURL=gov_pb.d.ts.map