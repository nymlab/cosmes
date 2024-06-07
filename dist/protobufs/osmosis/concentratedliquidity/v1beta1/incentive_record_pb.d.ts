import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.IncentiveRecord
 */
export declare class IncentiveRecord extends Message<IncentiveRecord> {
    /**
     * incentive_id is the id uniquely identifying this incentive record.
     *
     * @generated from field: uint64 incentive_id = 1;
     */
    incentiveId: bigint;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    /**
     * incentive record body holds necessary
     *
     * @generated from field: osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody incentive_record_body = 4;
     */
    incentiveRecordBody?: IncentiveRecordBody;
    /**
     * min_uptime is the minimum uptime required for liquidity to qualify for this
     * incentive. It should be always be one of the supported uptimes in
     * types.SupportedUptimes
     *
     * @generated from field: google.protobuf.Duration min_uptime = 5;
     */
    minUptime?: Duration;
    constructor(data?: PartialMessage<IncentiveRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.IncentiveRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncentiveRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncentiveRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncentiveRecord;
    static equals(a: IncentiveRecord | PlainMessage<IncentiveRecord> | undefined, b: IncentiveRecord | PlainMessage<IncentiveRecord> | undefined): boolean;
}
/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody
 */
export declare class IncentiveRecordBody extends Message<IncentiveRecordBody> {
    /**
     * remaining_coin is the total amount of incentives to be distributed
     *
     * @generated from field: cosmos.base.v1beta1.DecCoin remaining_coin = 1;
     */
    remainingCoin?: DecCoin;
    /**
     * emission_rate is the incentive emission rate per second
     *
     * @generated from field: string emission_rate = 2;
     */
    emissionRate: string;
    /**
     * start_time is the time when the incentive starts distributing
     *
     * @generated from field: google.protobuf.Timestamp start_time = 3;
     */
    startTime?: Timestamp;
    constructor(data?: PartialMessage<IncentiveRecordBody>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncentiveRecordBody;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncentiveRecordBody;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncentiveRecordBody;
    static equals(a: IncentiveRecordBody | PlainMessage<IncentiveRecordBody> | undefined, b: IncentiveRecordBody | PlainMessage<IncentiveRecordBody> | undefined): boolean;
}
//# sourceMappingURL=incentive_record_pb.d.ts.map