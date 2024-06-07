import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PeriodLock, SyntheticLock } from "./lock_pb.js";
import { Params } from "./params_pb.js";
/**
 * GenesisState defines the lockup module's genesis state.
 *
 * @generated from message osmosis.lockup.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: uint64 last_lock_id = 1;
     */
    lastLockId: bigint;
    /**
     * @generated from field: repeated osmosis.lockup.PeriodLock locks = 2;
     */
    locks: PeriodLock[];
    /**
     * @generated from field: repeated osmosis.lockup.SyntheticLock synthetic_locks = 3;
     */
    syntheticLocks: SyntheticLock[];
    /**
     * @generated from field: osmosis.lockup.Params params = 4;
     */
    params?: Params;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.lockup.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map