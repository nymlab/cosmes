import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ValidatorPreference } from "./state_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * MsgCreateValidatorSetPreference is a list that holds validator-set.
 *
 * @generated from message osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference
 */
export declare class MsgSetValidatorSetPreference extends Message<MsgSetValidatorSetPreference> {
    /**
     * delegator is the user who is trying to create a validator-set.
     *
     * @generated from field: string delegator = 1;
     */
    delegator: string;
    /**
     * list of {valAddr, weight} to delegate to
     *
     * @generated from field: repeated osmosis.valsetpref.v1beta1.ValidatorPreference preferences = 2;
     */
    preferences: ValidatorPreference[];
    constructor(data?: PartialMessage<MsgSetValidatorSetPreference>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetValidatorSetPreference;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetValidatorSetPreference;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetValidatorSetPreference;
    static equals(a: MsgSetValidatorSetPreference | PlainMessage<MsgSetValidatorSetPreference> | undefined, b: MsgSetValidatorSetPreference | PlainMessage<MsgSetValidatorSetPreference> | undefined): boolean;
}
/**
 * @generated from message osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse
 */
export declare class MsgSetValidatorSetPreferenceResponse extends Message<MsgSetValidatorSetPreferenceResponse> {
    constructor(data?: PartialMessage<MsgSetValidatorSetPreferenceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetValidatorSetPreferenceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetValidatorSetPreferenceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetValidatorSetPreferenceResponse;
    static equals(a: MsgSetValidatorSetPreferenceResponse | PlainMessage<MsgSetValidatorSetPreferenceResponse> | undefined, b: MsgSetValidatorSetPreferenceResponse | PlainMessage<MsgSetValidatorSetPreferenceResponse> | undefined): boolean;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 *
 * @generated from message osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet
 */
export declare class MsgDelegateToValidatorSet extends Message<MsgDelegateToValidatorSet> {
    /**
     * delegator is the user who is trying to delegate.
     *
     * @generated from field: string delegator = 1;
     */
    delegator: string;
    /**
     * the amount of tokens the user is trying to delegate.
     * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
     * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
     * B, 2osmo to C.
     *
     * @generated from field: cosmos.base.v1beta1.Coin coin = 2;
     */
    coin?: Coin;
    constructor(data?: PartialMessage<MsgDelegateToValidatorSet>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDelegateToValidatorSet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDelegateToValidatorSet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDelegateToValidatorSet;
    static equals(a: MsgDelegateToValidatorSet | PlainMessage<MsgDelegateToValidatorSet> | undefined, b: MsgDelegateToValidatorSet | PlainMessage<MsgDelegateToValidatorSet> | undefined): boolean;
}
/**
 * @generated from message osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse
 */
export declare class MsgDelegateToValidatorSetResponse extends Message<MsgDelegateToValidatorSetResponse> {
    constructor(data?: PartialMessage<MsgDelegateToValidatorSetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDelegateToValidatorSetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDelegateToValidatorSetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDelegateToValidatorSetResponse;
    static equals(a: MsgDelegateToValidatorSetResponse | PlainMessage<MsgDelegateToValidatorSetResponse> | undefined, b: MsgDelegateToValidatorSetResponse | PlainMessage<MsgDelegateToValidatorSetResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet
 */
export declare class MsgUndelegateFromValidatorSet extends Message<MsgUndelegateFromValidatorSet> {
    /**
     * delegator is the user who is trying to undelegate.
     *
     * @generated from field: string delegator = 1;
     */
    delegator: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
     * ValC
     * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
     * 3osmo from B, 2osmo from C
     *
     * @generated from field: cosmos.base.v1beta1.Coin coin = 3;
     */
    coin?: Coin;
    constructor(data?: PartialMessage<MsgUndelegateFromValidatorSet>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUndelegateFromValidatorSet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUndelegateFromValidatorSet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUndelegateFromValidatorSet;
    static equals(a: MsgUndelegateFromValidatorSet | PlainMessage<MsgUndelegateFromValidatorSet> | undefined, b: MsgUndelegateFromValidatorSet | PlainMessage<MsgUndelegateFromValidatorSet> | undefined): boolean;
}
/**
 * @generated from message osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse
 */
export declare class MsgUndelegateFromValidatorSetResponse extends Message<MsgUndelegateFromValidatorSetResponse> {
    constructor(data?: PartialMessage<MsgUndelegateFromValidatorSetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUndelegateFromValidatorSetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUndelegateFromValidatorSetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUndelegateFromValidatorSetResponse;
    static equals(a: MsgUndelegateFromValidatorSetResponse | PlainMessage<MsgUndelegateFromValidatorSetResponse> | undefined, b: MsgUndelegateFromValidatorSetResponse | PlainMessage<MsgUndelegateFromValidatorSetResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet
 */
export declare class MsgUndelegateFromRebalancedValidatorSet extends Message<MsgUndelegateFromRebalancedValidatorSet> {
    /**
     * delegator is the user who is trying to undelegate.
     *
     * @generated from field: string delegator = 1;
     */
    delegator: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 50 osmo with validator-set {ValA -> 0.5, ValB -> 0.5}
     * Our undelegate logic would first check the current delegation balance.
     * If the user has 90 osmo delegated to ValA and 10 osmo delegated to ValB,
     * the rebalanced validator set would be {ValA -> 0.9, ValB -> 0.1}
     * So now the 45 osmo would be undelegated from ValA and 5 osmo would be
     * undelegated from ValB.
     *
     * @generated from field: cosmos.base.v1beta1.Coin coin = 2;
     */
    coin?: Coin;
    constructor(data?: PartialMessage<MsgUndelegateFromRebalancedValidatorSet>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUndelegateFromRebalancedValidatorSet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUndelegateFromRebalancedValidatorSet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUndelegateFromRebalancedValidatorSet;
    static equals(a: MsgUndelegateFromRebalancedValidatorSet | PlainMessage<MsgUndelegateFromRebalancedValidatorSet> | undefined, b: MsgUndelegateFromRebalancedValidatorSet | PlainMessage<MsgUndelegateFromRebalancedValidatorSet> | undefined): boolean;
}
/**
 * @generated from message osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse
 */
export declare class MsgUndelegateFromRebalancedValidatorSetResponse extends Message<MsgUndelegateFromRebalancedValidatorSetResponse> {
    constructor(data?: PartialMessage<MsgUndelegateFromRebalancedValidatorSetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgUndelegateFromRebalancedValidatorSetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUndelegateFromRebalancedValidatorSetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUndelegateFromRebalancedValidatorSetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUndelegateFromRebalancedValidatorSetResponse;
    static equals(a: MsgUndelegateFromRebalancedValidatorSetResponse | PlainMessage<MsgUndelegateFromRebalancedValidatorSetResponse> | undefined, b: MsgUndelegateFromRebalancedValidatorSetResponse | PlainMessage<MsgUndelegateFromRebalancedValidatorSetResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet
 */
export declare class MsgRedelegateValidatorSet extends Message<MsgRedelegateValidatorSet> {
    /**
     * delegator is the user who is trying to create a validator-set.
     *
     * @generated from field: string delegator = 1;
     */
    delegator: string;
    /**
     * list of {valAddr, weight} to delegate to
     *
     * @generated from field: repeated osmosis.valsetpref.v1beta1.ValidatorPreference preferences = 2;
     */
    preferences: ValidatorPreference[];
    constructor(data?: PartialMessage<MsgRedelegateValidatorSet>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRedelegateValidatorSet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRedelegateValidatorSet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRedelegateValidatorSet;
    static equals(a: MsgRedelegateValidatorSet | PlainMessage<MsgRedelegateValidatorSet> | undefined, b: MsgRedelegateValidatorSet | PlainMessage<MsgRedelegateValidatorSet> | undefined): boolean;
}
/**
 * @generated from message osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse
 */
export declare class MsgRedelegateValidatorSetResponse extends Message<MsgRedelegateValidatorSetResponse> {
    constructor(data?: PartialMessage<MsgRedelegateValidatorSetResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRedelegateValidatorSetResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRedelegateValidatorSetResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRedelegateValidatorSetResponse;
    static equals(a: MsgRedelegateValidatorSetResponse | PlainMessage<MsgRedelegateValidatorSetResponse> | undefined, b: MsgRedelegateValidatorSetResponse | PlainMessage<MsgRedelegateValidatorSetResponse> | undefined): boolean;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 *
 * @generated from message osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards
 */
export declare class MsgWithdrawDelegationRewards extends Message<MsgWithdrawDelegationRewards> {
    /**
     * delegator is the user who is trying to claim staking rewards.
     *
     * @generated from field: string delegator = 1;
     */
    delegator: string;
    constructor(data?: PartialMessage<MsgWithdrawDelegationRewards>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawDelegationRewards;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawDelegationRewards;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawDelegationRewards;
    static equals(a: MsgWithdrawDelegationRewards | PlainMessage<MsgWithdrawDelegationRewards> | undefined, b: MsgWithdrawDelegationRewards | PlainMessage<MsgWithdrawDelegationRewards> | undefined): boolean;
}
/**
 * @generated from message osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse
 */
export declare class MsgWithdrawDelegationRewardsResponse extends Message<MsgWithdrawDelegationRewardsResponse> {
    constructor(data?: PartialMessage<MsgWithdrawDelegationRewardsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawDelegationRewardsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawDelegationRewardsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawDelegationRewardsResponse;
    static equals(a: MsgWithdrawDelegationRewardsResponse | PlainMessage<MsgWithdrawDelegationRewardsResponse> | undefined, b: MsgWithdrawDelegationRewardsResponse | PlainMessage<MsgWithdrawDelegationRewardsResponse> | undefined): boolean;
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 *
 * @generated from message osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens
 */
export declare class MsgDelegateBondedTokens extends Message<MsgDelegateBondedTokens> {
    /**
     * delegator is the user who is trying to force unbond osmo and delegate.
     *
     * @generated from field: string delegator = 1;
     */
    delegator: string;
    /**
     * lockup id of osmo in the pool
     *
     * @generated from field: uint64 lockID = 2;
     */
    lockID: bigint;
    constructor(data?: PartialMessage<MsgDelegateBondedTokens>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDelegateBondedTokens;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDelegateBondedTokens;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDelegateBondedTokens;
    static equals(a: MsgDelegateBondedTokens | PlainMessage<MsgDelegateBondedTokens> | undefined, b: MsgDelegateBondedTokens | PlainMessage<MsgDelegateBondedTokens> | undefined): boolean;
}
/**
 * @generated from message osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse
 */
export declare class MsgDelegateBondedTokensResponse extends Message<MsgDelegateBondedTokensResponse> {
    constructor(data?: PartialMessage<MsgDelegateBondedTokensResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDelegateBondedTokensResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDelegateBondedTokensResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDelegateBondedTokensResponse;
    static equals(a: MsgDelegateBondedTokensResponse | PlainMessage<MsgDelegateBondedTokensResponse> | undefined, b: MsgDelegateBondedTokensResponse | PlainMessage<MsgDelegateBondedTokensResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map