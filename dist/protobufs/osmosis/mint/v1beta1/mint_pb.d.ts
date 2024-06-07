import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Minter represents the minting state.
 *
 * @generated from message osmosis.mint.v1beta1.Minter
 */
export declare class Minter extends Message<Minter> {
    /**
     * epoch_provisions represent rewards for the current epoch.
     *
     * @generated from field: string epoch_provisions = 1;
     */
    epochProvisions: string;
    constructor(data?: PartialMessage<Minter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.mint.v1beta1.Minter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Minter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Minter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Minter;
    static equals(a: Minter | PlainMessage<Minter> | undefined, b: Minter | PlainMessage<Minter> | undefined): boolean;
}
/**
 * WeightedAddress represents an address with a weight assigned to it.
 * The weight is used to determine the proportion of the total minted
 * tokens to be minted to the address.
 *
 * @generated from message osmosis.mint.v1beta1.WeightedAddress
 */
export declare class WeightedAddress extends Message<WeightedAddress> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: string weight = 2;
     */
    weight: string;
    constructor(data?: PartialMessage<WeightedAddress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.mint.v1beta1.WeightedAddress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WeightedAddress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WeightedAddress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WeightedAddress;
    static equals(a: WeightedAddress | PlainMessage<WeightedAddress> | undefined, b: WeightedAddress | PlainMessage<WeightedAddress> | undefined): boolean;
}
/**
 * DistributionProportions defines the distribution proportions of the minted
 * denom. In other words, defines which stakeholders will receive the minted
 * denoms and how much.
 *
 * @generated from message osmosis.mint.v1beta1.DistributionProportions
 */
export declare class DistributionProportions extends Message<DistributionProportions> {
    /**
     * staking defines the proportion of the minted mint_denom that is to be
     * allocated as staking rewards.
     *
     * @generated from field: string staking = 1;
     */
    staking: string;
    /**
     * pool_incentives defines the proportion of the minted mint_denom that is
     * to be allocated as pool incentives.
     *
     * @generated from field: string pool_incentives = 2;
     */
    poolIncentives: string;
    /**
     * developer_rewards defines the proportion of the minted mint_denom that is
     * to be allocated to developer rewards address.
     *
     * @generated from field: string developer_rewards = 3;
     */
    developerRewards: string;
    /**
     * community_pool defines the proportion of the minted mint_denom that is
     * to be allocated to the community pool.
     *
     * @generated from field: string community_pool = 4;
     */
    communityPool: string;
    constructor(data?: PartialMessage<DistributionProportions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.mint.v1beta1.DistributionProportions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DistributionProportions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DistributionProportions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DistributionProportions;
    static equals(a: DistributionProportions | PlainMessage<DistributionProportions> | undefined, b: DistributionProportions | PlainMessage<DistributionProportions> | undefined): boolean;
}
/**
 * Params holds parameters for the x/mint module.
 *
 * @generated from message osmosis.mint.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * mint_denom is the denom of the coin to mint.
     *
     * @generated from field: string mint_denom = 1;
     */
    mintDenom: string;
    /**
     * genesis_epoch_provisions epoch provisions from the first epoch.
     *
     * @generated from field: string genesis_epoch_provisions = 2;
     */
    genesisEpochProvisions: string;
    /**
     * epoch_identifier mint epoch identifier e.g. (day, week).
     *
     * @generated from field: string epoch_identifier = 3;
     */
    epochIdentifier: string;
    /**
     * reduction_period_in_epochs the number of epochs it takes
     * to reduce the rewards.
     *
     * @generated from field: int64 reduction_period_in_epochs = 4;
     */
    reductionPeriodInEpochs: bigint;
    /**
     * reduction_factor is the reduction multiplier to execute
     * at the end of each period set by reduction_period_in_epochs.
     *
     * @generated from field: string reduction_factor = 5;
     */
    reductionFactor: string;
    /**
     * distribution_proportions defines the distribution proportions of the minted
     * denom. In other words, defines which stakeholders will receive the minted
     * denoms and how much.
     *
     * @generated from field: osmosis.mint.v1beta1.DistributionProportions distribution_proportions = 6;
     */
    distributionProportions?: DistributionProportions;
    /**
     * weighted_developer_rewards_receivers is the address to receive developer
     * rewards with weights assignedt to each address. The final amount that each
     * address receives is: epoch_provisions *
     * distribution_proportions.developer_rewards * Address's Weight.
     *
     * @generated from field: repeated osmosis.mint.v1beta1.WeightedAddress weighted_developer_rewards_receivers = 7;
     */
    weightedDeveloperRewardsReceivers: WeightedAddress[];
    /**
     * minting_rewards_distribution_start_epoch start epoch to distribute minting
     * rewards
     *
     * @generated from field: int64 minting_rewards_distribution_start_epoch = 8;
     */
    mintingRewardsDistributionStartEpoch: bigint;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.mint.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=mint_pb.d.ts.map