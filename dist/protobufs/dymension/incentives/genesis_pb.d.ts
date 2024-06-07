import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Gauge } from "./gauge_pb.js";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 *
 * @generated from message dymensionxyz.dymension.incentives.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params are all the parameters of the module
     *
     * @generated from field: dymensionxyz.dymension.incentives.Params params = 1;
     */
    params?: Params;
    /**
     * gauges are all gauges that should exist at genesis
     *
     * @generated from field: repeated dymensionxyz.dymension.incentives.Gauge gauges = 2;
     */
    gauges: Gauge[];
    /**
     * lockable_durations are all lockup durations that gauges can be locked for
     * in order to recieve incentives
     *
     * @generated from field: repeated google.protobuf.Duration lockable_durations = 3;
     */
    lockableDurations: Duration[];
    /**
     * last_gauge_id is what the gauge number will increment from when creating
     * the next gauge after genesis
     *
     * @generated from field: uint64 last_gauge_id = 4;
     */
    lastGaugeId: bigint;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.incentives.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map