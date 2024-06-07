import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message osmosis.concentratedliquidity.Params
 */
export declare class Params extends Message<Params> {
    /**
     * authorized_tick_spacing is an array of uint64s that represents the tick
     * spacing values concentrated-liquidity pools can be created with. For
     * example, an authorized_tick_spacing of [1, 10, 30] allows for pools
     * to be created with tick spacing of 1, 10, or 30.
     *
     * @generated from field: repeated uint64 authorized_tick_spacing = 1;
     */
    authorizedTickSpacing: bigint[];
    /**
     * @generated from field: repeated string authorized_spread_factors = 2;
     */
    authorizedSpreadFactors: string[];
    /**
     * balancer_shares_reward_discount is the rate by which incentives flowing
     * from CL to Balancer pools will be discounted to encourage LPs to migrate.
     * e.g. a rate of 0.05 means Balancer LPs get 5% less incentives than full
     * range CL LPs.
     * This field can range from (0,1]. If set to 1, it indicates that all
     * incentives stay at cl pool.
     *
     * @generated from field: string balancer_shares_reward_discount = 3;
     */
    balancerSharesRewardDiscount: string;
    /**
     * authorized_quote_denoms is a list of quote denoms that can be used as
     * token1 when creating a pool. We limit the quote assets to a small set for
     * the purposes of having convenient price increments stemming from tick to
     * price conversion. These increments are in a human readable magnitude only
     * for token1 as a quote. For limit orders in the future, this will be a
     * desirable property in terms of UX as to allow users to set limit orders at
     * prices in terms of token1 (quote asset) that are easy to reason about.
     *
     * @generated from field: repeated string authorized_quote_denoms = 4;
     */
    authorizedQuoteDenoms: string[];
    /**
     * @generated from field: repeated google.protobuf.Duration authorized_uptimes = 5;
     */
    authorizedUptimes: Duration[];
    /**
     * is_permissionless_pool_creation_enabled is a boolean that determines if
     * concentrated liquidity pools can be created via message. At launch,
     * we consider allowing only governance to create pools, and then later
     * allowing permissionless pool creation by switching this flag to true
     * with a governance proposal.
     *
     * @generated from field: bool is_permissionless_pool_creation_enabled = 6;
     */
    isPermissionlessPoolCreationEnabled: boolean;
    /**
     * unrestricted_pool_creator_whitelist is a list of addresses that are
     * allowed to bypass restrictions on permissionless supercharged pool
     * creation, like pool_creation_enabled, restricted quote assets, no
     * double creation of pools, etc.
     *
     * @generated from field: repeated string unrestricted_pool_creator_whitelist = 7;
     */
    unrestrictedPoolCreatorWhitelist: string[];
    /**
     * @generated from field: uint64 hook_gas_limit = 8;
     */
    hookGasLimit: bigint;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.concentratedliquidity.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=params_pb.d.ts.map