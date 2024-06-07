import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { ModuleRoute } from "./module_route_pb.js";
import { DenomPairTakerFee } from "./tx_pb.js";
/**
 * Params holds parameters for the poolmanager module
 *
 * @generated from message osmosis.poolmanager.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin pool_creation_fee = 1;
     */
    poolCreationFee: Coin[];
    /**
     * taker_fee_params is the container of taker fee parameters.
     *
     * @generated from field: osmosis.poolmanager.v1beta1.TakerFeeParams taker_fee_params = 2;
     */
    takerFeeParams?: TakerFeeParams;
    /**
     * authorized_quote_denoms is a list of quote denoms that can be used as
     * token1 when creating a concentrated pool. We limit the quote assets to a
     * small set for the purposes of having convenient price increments stemming
     * from tick to price conversion. These increments are in a human readable
     * magnitude only for token1 as a quote. For limit orders in the future, this
     * will be a desirable property in terms of UX as to allow users to set limit
     * orders at prices in terms of token1 (quote asset) that are easy to reason
     * about.
     *
     * @generated from field: repeated string authorized_quote_denoms = 3;
     */
    authorizedQuoteDenoms: string[];
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * GenesisState defines the poolmanager module's genesis state.
 *
 * @generated from message osmosis.poolmanager.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * the next_pool_id
     *
     * @generated from field: uint64 next_pool_id = 1;
     */
    nextPoolId: bigint;
    /**
     * params is the container of poolmanager parameters.
     *
     * @generated from field: osmosis.poolmanager.v1beta1.Params params = 2;
     */
    params?: Params;
    /**
     * pool_routes is the container of the mappings from pool id to pool type.
     *
     * @generated from field: repeated osmosis.poolmanager.v1beta1.ModuleRoute pool_routes = 3;
     */
    poolRoutes: ModuleRoute[];
    /**
     * KVStore state
     *
     * @generated from field: osmosis.poolmanager.v1beta1.TakerFeesTracker taker_fees_tracker = 4;
     */
    takerFeesTracker?: TakerFeesTracker;
    /**
     * @generated from field: repeated osmosis.poolmanager.v1beta1.PoolVolume pool_volumes = 5;
     */
    poolVolumes: PoolVolume[];
    /**
     * @generated from field: repeated osmosis.poolmanager.v1beta1.DenomPairTakerFee denom_pair_taker_fee_store = 6;
     */
    denomPairTakerFeeStore: DenomPairTakerFee[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * TakerFeeParams consolidates the taker fee parameters for the poolmanager.
 *
 * @generated from message osmosis.poolmanager.v1beta1.TakerFeeParams
 */
export declare class TakerFeeParams extends Message<TakerFeeParams> {
    /**
     * default_taker_fee is the fee used when creating a new pool that doesn't
     * fall under a custom pool taker fee or stableswap taker fee category.
     *
     * @generated from field: string default_taker_fee = 1;
     */
    defaultTakerFee: string;
    /**
     * osmo_taker_fee_distribution defines the distribution of taker fees
     * generated in OSMO. As of this writing, it has two categories:
     * - staking_rewards: the percent of the taker fee that gets distributed to
     *   stakers.
     * - community_pool: the percent of the taker fee that gets sent to the
     *   community pool.
     *
     * @generated from field: osmosis.poolmanager.v1beta1.TakerFeeDistributionPercentage osmo_taker_fee_distribution = 2;
     */
    osmoTakerFeeDistribution?: TakerFeeDistributionPercentage;
    /**
     * non_osmo_taker_fee_distribution defines the distribution of taker fees
     * generated in non-OSMO. As of this writing, it has two categories:
     * - staking_rewards: the percent of the taker fee that gets swapped to OSMO
     *   and then distributed to stakers.
     * - community_pool: the percent of the taker fee that gets sent to the
     *   community pool. Note: If the non-OSMO asset is an authorized_quote_denom,
     *   that denom is sent directly to the community pool. Otherwise, it is
     *   swapped to the community_pool_denom_to_swap_non_whitelisted_assets_to and
     *   then sent to the community pool as that denom.
     *
     * @generated from field: osmosis.poolmanager.v1beta1.TakerFeeDistributionPercentage non_osmo_taker_fee_distribution = 3;
     */
    nonOsmoTakerFeeDistribution?: TakerFeeDistributionPercentage;
    /**
     * admin_addresses is a list of addresses that are allowed to set and remove
     * custom taker fees for denom pairs. Governance also has the ability to set
     * and remove custom taker fees for denom pairs, but with the normal
     * governance delay.
     *
     * @generated from field: repeated string admin_addresses = 4;
     */
    adminAddresses: string[];
    /**
     * community_pool_denom_to_swap_non_whitelisted_assets_to is the denom that
     * non-whitelisted taker fees will be swapped to before being sent to
     * the community pool.
     *
     * @generated from field: string community_pool_denom_to_swap_non_whitelisted_assets_to = 5;
     */
    communityPoolDenomToSwapNonWhitelistedAssetsTo: string;
    /**
     * reduced_fee_whitelist is a list of addresses that are
     * allowed to pay a reduce taker fee when performing a swap
     * (i.e. swap without paying the taker fee).
     * It is intended to be used for integrators who meet qualifying factors
     * that are approved by governance.
     * Initially, the taker fee is allowed to be bypassed completely. However
     * In the future, we will charge a reduced taker fee instead of no fee at all.
     *
     * @generated from field: repeated string reduced_fee_whitelist = 6;
     */
    reducedFeeWhitelist: string[];
    constructor(data?: PartialMessage<TakerFeeParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.TakerFeeParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TakerFeeParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TakerFeeParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TakerFeeParams;
    static equals(a: TakerFeeParams | PlainMessage<TakerFeeParams> | undefined, b: TakerFeeParams | PlainMessage<TakerFeeParams> | undefined): boolean;
}
/**
 * TakerFeeDistributionPercentage defines what percent of the taker fee category
 * gets distributed to the available categories.
 *
 * @generated from message osmosis.poolmanager.v1beta1.TakerFeeDistributionPercentage
 */
export declare class TakerFeeDistributionPercentage extends Message<TakerFeeDistributionPercentage> {
    /**
     * @generated from field: string staking_rewards = 1;
     */
    stakingRewards: string;
    /**
     * @generated from field: string community_pool = 2;
     */
    communityPool: string;
    constructor(data?: PartialMessage<TakerFeeDistributionPercentage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.TakerFeeDistributionPercentage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TakerFeeDistributionPercentage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TakerFeeDistributionPercentage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TakerFeeDistributionPercentage;
    static equals(a: TakerFeeDistributionPercentage | PlainMessage<TakerFeeDistributionPercentage> | undefined, b: TakerFeeDistributionPercentage | PlainMessage<TakerFeeDistributionPercentage> | undefined): boolean;
}
/**
 * @generated from message osmosis.poolmanager.v1beta1.TakerFeesTracker
 */
export declare class TakerFeesTracker extends Message<TakerFeesTracker> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin taker_fees_to_stakers = 1;
     */
    takerFeesToStakers: Coin[];
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin taker_fees_to_community_pool = 2;
     */
    takerFeesToCommunityPool: Coin[];
    /**
     * @generated from field: int64 height_accounting_starts_from = 3;
     */
    heightAccountingStartsFrom: bigint;
    constructor(data?: PartialMessage<TakerFeesTracker>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.TakerFeesTracker";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TakerFeesTracker;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TakerFeesTracker;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TakerFeesTracker;
    static equals(a: TakerFeesTracker | PlainMessage<TakerFeesTracker> | undefined, b: TakerFeesTracker | PlainMessage<TakerFeesTracker> | undefined): boolean;
}
/**
 * PoolVolume stores the KVStore entries for each pool's volume, which
 * is used in export/import genesis.
 *
 * @generated from message osmosis.poolmanager.v1beta1.PoolVolume
 */
export declare class PoolVolume extends Message<PoolVolume> {
    /**
     * pool_id is the id of the pool.
     *
     * @generated from field: uint64 pool_id = 1;
     */
    poolId: bigint;
    /**
     * pool_volume is the cumulative volume of the pool.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin pool_volume = 2;
     */
    poolVolume: Coin[];
    constructor(data?: PartialMessage<PoolVolume>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.poolmanager.v1beta1.PoolVolume";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolVolume;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolVolume;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolVolume;
    static equals(a: PoolVolume | PlainMessage<PoolVolume> | undefined, b: PoolVolume | PlainMessage<PoolVolume> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map