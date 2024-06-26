import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin, DecCoin } from "../../base/v1beta1/coin_pb.js";
/**
 * Params defines the set of params for the distribution module.
 *
 * @generated from message cosmos.distribution.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * @generated from field: string community_tax = 1;
     */
    communityTax: string;
    /**
     * Deprecated: The base_proposer_reward field is deprecated and is no longer used
     * in the x/distribution module's reward mechanism.
     *
     * @generated from field: string base_proposer_reward = 2 [deprecated = true];
     * @deprecated
     */
    baseProposerReward: string;
    /**
     * Deprecated: The bonus_proposer_reward field is deprecated and is no longer used
     * in the x/distribution module's reward mechanism.
     *
     * @generated from field: string bonus_proposer_reward = 3 [deprecated = true];
     * @deprecated
     */
    bonusProposerReward: string;
    /**
     * @generated from field: bool withdraw_addr_enabled = 4;
     */
    withdrawAddrEnabled: boolean;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorHistoricalRewards
 */
export declare class ValidatorHistoricalRewards extends Message<ValidatorHistoricalRewards> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin cumulative_reward_ratio = 1;
     */
    cumulativeRewardRatio: DecCoin[];
    /**
     * @generated from field: uint32 reference_count = 2;
     */
    referenceCount: number;
    constructor(data?: PartialMessage<ValidatorHistoricalRewards>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.ValidatorHistoricalRewards";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorHistoricalRewards;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorHistoricalRewards;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorHistoricalRewards;
    static equals(a: ValidatorHistoricalRewards | PlainMessage<ValidatorHistoricalRewards> | undefined, b: ValidatorHistoricalRewards | PlainMessage<ValidatorHistoricalRewards> | undefined): boolean;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorCurrentRewards
 */
export declare class ValidatorCurrentRewards extends Message<ValidatorCurrentRewards> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin rewards = 1;
     */
    rewards: DecCoin[];
    /**
     * @generated from field: uint64 period = 2;
     */
    period: bigint;
    constructor(data?: PartialMessage<ValidatorCurrentRewards>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.ValidatorCurrentRewards";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorCurrentRewards;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorCurrentRewards;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorCurrentRewards;
    static equals(a: ValidatorCurrentRewards | PlainMessage<ValidatorCurrentRewards> | undefined, b: ValidatorCurrentRewards | PlainMessage<ValidatorCurrentRewards> | undefined): boolean;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorAccumulatedCommission
 */
export declare class ValidatorAccumulatedCommission extends Message<ValidatorAccumulatedCommission> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin commission = 1;
     */
    commission: DecCoin[];
    constructor(data?: PartialMessage<ValidatorAccumulatedCommission>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.ValidatorAccumulatedCommission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorAccumulatedCommission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorAccumulatedCommission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorAccumulatedCommission;
    static equals(a: ValidatorAccumulatedCommission | PlainMessage<ValidatorAccumulatedCommission> | undefined, b: ValidatorAccumulatedCommission | PlainMessage<ValidatorAccumulatedCommission> | undefined): boolean;
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorOutstandingRewards
 */
export declare class ValidatorOutstandingRewards extends Message<ValidatorOutstandingRewards> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin rewards = 1;
     */
    rewards: DecCoin[];
    constructor(data?: PartialMessage<ValidatorOutstandingRewards>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.ValidatorOutstandingRewards";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorOutstandingRewards;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorOutstandingRewards;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorOutstandingRewards;
    static equals(a: ValidatorOutstandingRewards | PlainMessage<ValidatorOutstandingRewards> | undefined, b: ValidatorOutstandingRewards | PlainMessage<ValidatorOutstandingRewards> | undefined): boolean;
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorSlashEvent
 */
export declare class ValidatorSlashEvent extends Message<ValidatorSlashEvent> {
    /**
     * @generated from field: uint64 validator_period = 1;
     */
    validatorPeriod: bigint;
    /**
     * @generated from field: string fraction = 2;
     */
    fraction: string;
    constructor(data?: PartialMessage<ValidatorSlashEvent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.ValidatorSlashEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorSlashEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorSlashEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorSlashEvent;
    static equals(a: ValidatorSlashEvent | PlainMessage<ValidatorSlashEvent> | undefined, b: ValidatorSlashEvent | PlainMessage<ValidatorSlashEvent> | undefined): boolean;
}
/**
 * ValidatorSlashEvents is a collection of ValidatorSlashEvent messages.
 *
 * @generated from message cosmos.distribution.v1beta1.ValidatorSlashEvents
 */
export declare class ValidatorSlashEvents extends Message<ValidatorSlashEvents> {
    /**
     * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorSlashEvent validator_slash_events = 1;
     */
    validatorSlashEvents: ValidatorSlashEvent[];
    constructor(data?: PartialMessage<ValidatorSlashEvents>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.ValidatorSlashEvents";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorSlashEvents;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorSlashEvents;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorSlashEvents;
    static equals(a: ValidatorSlashEvents | PlainMessage<ValidatorSlashEvents> | undefined, b: ValidatorSlashEvents | PlainMessage<ValidatorSlashEvents> | undefined): boolean;
}
/**
 * FeePool is the global fee pool for distribution.
 *
 * @generated from message cosmos.distribution.v1beta1.FeePool
 */
export declare class FeePool extends Message<FeePool> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin community_pool = 1;
     */
    communityPool: DecCoin[];
    constructor(data?: PartialMessage<FeePool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.FeePool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeePool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeePool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeePool;
    static equals(a: FeePool | PlainMessage<FeePool> | undefined, b: FeePool | PlainMessage<FeePool> | undefined): boolean;
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 *
 * Deprecated: Do not use. As of the Cosmos SDK release v0.47.x, there is no
 * longer a need for an explicit CommunityPoolSpendProposal. To spend community
 * pool funds, a simple MsgCommunityPoolSpend can be invoked from the x/gov
 * module via a v1 governance proposal.
 *
 * @generated from message cosmos.distribution.v1beta1.CommunityPoolSpendProposal
 * @deprecated
 */
export declare class CommunityPoolSpendProposal extends Message<CommunityPoolSpendProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string recipient = 3;
     */
    recipient: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 4;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<CommunityPoolSpendProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommunityPoolSpendProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommunityPoolSpendProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommunityPoolSpendProposal;
    static equals(a: CommunityPoolSpendProposal | PlainMessage<CommunityPoolSpendProposal> | undefined, b: CommunityPoolSpendProposal | PlainMessage<CommunityPoolSpendProposal> | undefined): boolean;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 *
 * @generated from message cosmos.distribution.v1beta1.DelegatorStartingInfo
 */
export declare class DelegatorStartingInfo extends Message<DelegatorStartingInfo> {
    /**
     * @generated from field: uint64 previous_period = 1;
     */
    previousPeriod: bigint;
    /**
     * @generated from field: string stake = 2;
     */
    stake: string;
    /**
     * @generated from field: uint64 height = 3;
     */
    height: bigint;
    constructor(data?: PartialMessage<DelegatorStartingInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.DelegatorStartingInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DelegatorStartingInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DelegatorStartingInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DelegatorStartingInfo;
    static equals(a: DelegatorStartingInfo | PlainMessage<DelegatorStartingInfo> | undefined, b: DelegatorStartingInfo | PlainMessage<DelegatorStartingInfo> | undefined): boolean;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 *
 * @generated from message cosmos.distribution.v1beta1.DelegationDelegatorReward
 */
export declare class DelegationDelegatorReward extends Message<DelegationDelegatorReward> {
    /**
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin reward = 2;
     */
    reward: DecCoin[];
    constructor(data?: PartialMessage<DelegationDelegatorReward>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.DelegationDelegatorReward";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DelegationDelegatorReward;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DelegationDelegatorReward;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DelegationDelegatorReward;
    static equals(a: DelegationDelegatorReward | PlainMessage<DelegationDelegatorReward> | undefined, b: DelegationDelegatorReward | PlainMessage<DelegationDelegatorReward> | undefined): boolean;
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 *
 * @generated from message cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit
 */
export declare class CommunityPoolSpendProposalWithDeposit extends Message<CommunityPoolSpendProposalWithDeposit> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: string recipient = 3;
     */
    recipient: string;
    /**
     * @generated from field: string amount = 4;
     */
    amount: string;
    /**
     * @generated from field: string deposit = 5;
     */
    deposit: string;
    constructor(data?: PartialMessage<CommunityPoolSpendProposalWithDeposit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommunityPoolSpendProposalWithDeposit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommunityPoolSpendProposalWithDeposit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommunityPoolSpendProposalWithDeposit;
    static equals(a: CommunityPoolSpendProposalWithDeposit | PlainMessage<CommunityPoolSpendProposalWithDeposit> | undefined, b: CommunityPoolSpendProposalWithDeposit | PlainMessage<CommunityPoolSpendProposalWithDeposit> | undefined): boolean;
}
//# sourceMappingURL=distribution_pb.d.ts.map