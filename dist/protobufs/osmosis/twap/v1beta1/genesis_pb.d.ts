import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { TwapRecord } from "./twap_record_pb.js";
/**
 * Params holds parameters for the twap module
 *
 * @generated from message osmosis.twap.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * @generated from field: string prune_epoch_identifier = 1;
     */
    pruneEpochIdentifier: string;
    /**
     * @generated from field: google.protobuf.Duration record_history_keep_period = 2;
     */
    recordHistoryKeepPeriod?: Duration;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * GenesisState defines the twap module's genesis state.
 *
 * @generated from message osmosis.twap.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * twaps is the collection of all twap records.
     *
     * @generated from field: repeated osmosis.twap.v1beta1.TwapRecord twaps = 1;
     */
    twaps: TwapRecord[];
    /**
     * params is the container of twap parameters.
     *
     * @generated from field: osmosis.twap.v1beta1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.twap.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map