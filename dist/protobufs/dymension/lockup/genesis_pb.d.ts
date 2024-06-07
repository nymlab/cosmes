import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PeriodLock } from "./lock_pb.js";
/**
 * GenesisState defines the lockup module's genesis state.
 *
 * @generated from message dymensionxyz.dymension.lockup.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: uint64 last_lock_id = 1;
     */
    lastLockId: bigint;
    /**
     * @generated from field: repeated dymensionxyz.dymension.lockup.PeriodLock locks = 2;
     */
    locks: PeriodLock[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.lockup.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map