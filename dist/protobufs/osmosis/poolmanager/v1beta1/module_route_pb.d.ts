import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * PoolType is an enumeration of all supported pool types.
 *
 * @generated from enum osmosis.poolmanager.v1beta1.PoolType
 */
export declare enum PoolType {
    /**
     * Balancer is the standard xy=k curve. Its pool model is defined in x/gamm.
     *
     * @generated from enum value: Balancer = 0;
     */
    Balancer = 0,
    /**
     * Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
     * in x/gamm.
     *
     * @generated from enum value: Stableswap = 1;
     */
    Stableswap = 1,
    /**
     * Concentrated is the pool model specific to concentrated liquidity. It is
     * defined in x/concentrated-liquidity.
     *
     * @generated from enum value: Concentrated = 2;
     */
    Concentrated = 2,
    /**
     * CosmWasm is the pool model specific to CosmWasm. It is defined in
     * x/cosmwasmpool.
     *
     * @generated from enum value: CosmWasm = 3;
     */
    CosmWasm = 3
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the pool manager to know which module to route swaps to given the
 * pool id.
 *
 * @generated from message osmosis.poolmanager.v1beta1.ModuleRoute
 */
export declare class ModuleRoute extends Message<ModuleRoute> {
    /**
     * pool_type specifies the type of the pool
     *
     * @generated from field: osmosis.poolmanager.v1beta1.PoolType pool_type = 1;
     */
    poolType: PoolType;
    /**
     * @generated from field: uint64 pool_id = 2;
     */
    poolId: bigint;
    constructor(data?: PartialMessage<ModuleRoute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.ModuleRoute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleRoute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleRoute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleRoute;
    static equals(a: ModuleRoute | PlainMessage<ModuleRoute> | undefined, b: ModuleRoute | PlainMessage<ModuleRoute> | undefined): boolean;
}
//# sourceMappingURL=module_route_pb.d.ts.map