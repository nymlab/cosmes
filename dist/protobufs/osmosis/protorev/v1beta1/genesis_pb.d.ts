import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { BaseDenom, CyclicArbTracker, InfoByPoolType, TokenPairArbRoutes } from "./protorev_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * GenesisState defines the protorev module's genesis state.
 *
 * @generated from message osmosis.protorev.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * Parameters for the protorev module.
     *
     * @generated from field: osmosis.protorev.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * Token pair arb routes for the protorev module (hot routes).
     *
     * @generated from field: repeated osmosis.protorev.v1beta1.TokenPairArbRoutes token_pair_arb_routes = 2;
     */
    tokenPairArbRoutes: TokenPairArbRoutes[];
    /**
     * The base denominations being used to create cyclic arbitrage routes via the
     * highest liquidity method.
     *
     * @generated from field: repeated osmosis.protorev.v1beta1.BaseDenom base_denoms = 3;
     */
    baseDenoms: BaseDenom[];
    /**
     * The number of days since module genesis.
     *
     * @generated from field: uint64 days_since_module_genesis = 5;
     */
    daysSinceModuleGenesis: bigint;
    /**
     * The fees the developer account has accumulated over time.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin developer_fees = 6;
     */
    developerFees: Coin[];
    /**
     * The latest block height that the module has processed.
     *
     * @generated from field: uint64 latest_block_height = 7;
     */
    latestBlockHeight: bigint;
    /**
     * The developer account address of the module.
     *
     * @generated from field: string developer_address = 8;
     */
    developerAddress: string;
    /**
     * Max pool points per block i.e. the maximum compute time (in ms)
     * that protorev can use per block.
     *
     * @generated from field: uint64 max_pool_points_per_block = 9;
     */
    maxPoolPointsPerBlock: bigint;
    /**
     * Max pool points per tx i.e. the maximum compute time (in ms) that
     * protorev can use per tx.
     *
     * @generated from field: uint64 max_pool_points_per_tx = 10;
     */
    maxPoolPointsPerTx: bigint;
    /**
     * The number of pool points that have been consumed in the current block.
     *
     * @generated from field: uint64 point_count_for_block = 11;
     */
    pointCountForBlock: bigint;
    /**
     * All of the profits that have been accumulated by the module.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin profits = 12;
     */
    profits: Coin[];
    /**
     * Information that is used to estimate execution time / gas
     * consumption of a swap on a given pool type.
     *
     * @generated from field: osmosis.protorev.v1beta1.InfoByPoolType info_by_pool_type = 13;
     */
    infoByPoolType?: InfoByPoolType;
    /**
     * @generated from field: osmosis.protorev.v1beta1.CyclicArbTracker cyclic_arb_tracker = 14;
     */
    cyclicArbTracker?: CyclicArbTracker;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map