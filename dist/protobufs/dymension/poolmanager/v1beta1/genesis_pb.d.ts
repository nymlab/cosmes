import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ModuleRoute } from "./module_route_pb.js";
/**
 * GenesisState defines the poolmanager module's genesis state.
 *
 * @generated from message dymensionxyz.dymension.poolmanager.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * the next_pool_id
     *
     * @generated from field: uint64 next_pool_id = 1;
     */
    nextPoolId: bigint;
    /**
     * pool_routes is the container of the mappings from pool id to pool type.
     *
     * @generated from field: repeated dymensionxyz.dymension.poolmanager.v1beta1.ModuleRoute pool_routes = 2;
     */
    poolRoutes: ModuleRoute[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "dymensionxyz.dymension.poolmanager.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map