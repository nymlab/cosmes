import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Downtime } from "./downtime_duration_pb.js";
/**
 * @generated from message osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry
 */
export declare class GenesisDowntimeEntry extends Message<GenesisDowntimeEntry> {
    /**
     * @generated from field: osmosis.downtimedetector.v1beta1.Downtime duration = 1;
     */
    duration: Downtime;
    /**
     * @generated from field: google.protobuf.Timestamp last_downtime = 2;
     */
    lastDowntime?: Timestamp;
    constructor(data?: PartialMessage<GenesisDowntimeEntry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisDowntimeEntry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisDowntimeEntry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisDowntimeEntry;
    static equals(a: GenesisDowntimeEntry | PlainMessage<GenesisDowntimeEntry> | undefined, b: GenesisDowntimeEntry | PlainMessage<GenesisDowntimeEntry> | undefined): boolean;
}
/**
 * GenesisState defines the twap module's genesis state.
 *
 * @generated from message osmosis.downtimedetector.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: repeated osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry downtimes = 1;
     */
    downtimes: GenesisDowntimeEntry[];
    /**
     * @generated from field: google.protobuf.Timestamp last_block_time = 2;
     */
    lastBlockTime?: Timestamp;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.downtimedetector.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map