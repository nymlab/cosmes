import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { Downtime } from "./downtime_duration_pb.js";
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 *
 * @generated from message osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest
 */
export declare class RecoveredSinceDowntimeOfLengthRequest extends Message<RecoveredSinceDowntimeOfLengthRequest> {
    /**
     * @generated from field: osmosis.downtimedetector.v1beta1.Downtime downtime = 1;
     */
    downtime: Downtime;
    /**
     * @generated from field: google.protobuf.Duration recovery = 2;
     */
    recovery?: Duration;
    constructor(data?: PartialMessage<RecoveredSinceDowntimeOfLengthRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecoveredSinceDowntimeOfLengthRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecoveredSinceDowntimeOfLengthRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecoveredSinceDowntimeOfLengthRequest;
    static equals(a: RecoveredSinceDowntimeOfLengthRequest | PlainMessage<RecoveredSinceDowntimeOfLengthRequest> | undefined, b: RecoveredSinceDowntimeOfLengthRequest | PlainMessage<RecoveredSinceDowntimeOfLengthRequest> | undefined): boolean;
}
/**
 * @generated from message osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse
 */
export declare class RecoveredSinceDowntimeOfLengthResponse extends Message<RecoveredSinceDowntimeOfLengthResponse> {
    /**
     * @generated from field: bool succesfully_recovered = 1;
     */
    succesfullyRecovered: boolean;
    constructor(data?: PartialMessage<RecoveredSinceDowntimeOfLengthResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecoveredSinceDowntimeOfLengthResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecoveredSinceDowntimeOfLengthResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecoveredSinceDowntimeOfLengthResponse;
    static equals(a: RecoveredSinceDowntimeOfLengthResponse | PlainMessage<RecoveredSinceDowntimeOfLengthResponse> | undefined, b: RecoveredSinceDowntimeOfLengthResponse | PlainMessage<RecoveredSinceDowntimeOfLengthResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map