import { MsgDelegateBondedTokens, MsgDelegateBondedTokensResponse, MsgDelegateToValidatorSet, MsgDelegateToValidatorSetResponse, MsgRedelegateValidatorSet, MsgRedelegateValidatorSetResponse, MsgSetValidatorSetPreference, MsgSetValidatorSetPreferenceResponse, MsgUndelegateFromRebalancedValidatorSet, MsgUndelegateFromRebalancedValidatorSetResponse, MsgUndelegateFromValidatorSet, MsgUndelegateFromValidatorSetResponse, MsgWithdrawDelegationRewards, MsgWithdrawDelegationRewardsResponse } from "./tx_pb.js";
/**
 * SetValidatorSetPreference creates a set of validator preference.
 * This message will process both create + update request.
 *
 * @generated from rpc osmosis.valsetpref.v1beta1.Msg.SetValidatorSetPreference
 */
export declare const MsgSetValidatorSetPreferenceService: {
    readonly typeName: "osmosis.valsetpref.v1beta1.Msg";
    readonly method: "SetValidatorSetPreference";
    readonly Request: typeof MsgSetValidatorSetPreference;
    readonly Response: typeof MsgSetValidatorSetPreferenceResponse;
};
/**
 * DelegateToValidatorSet gets the owner, coins and delegates to a
 * validator-set.
 *
 * @generated from rpc osmosis.valsetpref.v1beta1.Msg.DelegateToValidatorSet
 */
export declare const MsgDelegateToValidatorSetService: {
    readonly typeName: "osmosis.valsetpref.v1beta1.Msg";
    readonly method: "DelegateToValidatorSet";
    readonly Request: typeof MsgDelegateToValidatorSet;
    readonly Response: typeof MsgDelegateToValidatorSetResponse;
};
/**
 * UndelegateFromValidatorSet gets the owner and coins and undelegates from
 * validator-set. The unbonding logic will follow the `Undelegate` logic from
 * the sdk.
 *
 * @generated from rpc osmosis.valsetpref.v1beta1.Msg.UndelegateFromValidatorSet
 */
export declare const MsgUndelegateFromValidatorSetService: {
    readonly typeName: "osmosis.valsetpref.v1beta1.Msg";
    readonly method: "UndelegateFromValidatorSet";
    readonly Request: typeof MsgUndelegateFromValidatorSet;
    readonly Response: typeof MsgUndelegateFromValidatorSetResponse;
};
/**
 * UndelegateFromRebalancedValidatorSet undelegates the proivded amount from
 * the validator set, but takes into consideration the current delegations
 * to the user's validator set to determine the weights assigned to each.
 *
 * @generated from rpc osmosis.valsetpref.v1beta1.Msg.UndelegateFromRebalancedValidatorSet
 */
export declare const MsgUndelegateFromRebalancedValidatorSetService: {
    readonly typeName: "osmosis.valsetpref.v1beta1.Msg";
    readonly method: "UndelegateFromRebalancedValidatorSet";
    readonly Request: typeof MsgUndelegateFromRebalancedValidatorSet;
    readonly Response: typeof MsgUndelegateFromRebalancedValidatorSetResponse;
};
/**
 * RedelegateValidatorSet takes the existing validator set and redelegates to
 * a new set.
 *
 * @generated from rpc osmosis.valsetpref.v1beta1.Msg.RedelegateValidatorSet
 */
export declare const MsgRedelegateValidatorSetService: {
    readonly typeName: "osmosis.valsetpref.v1beta1.Msg";
    readonly method: "RedelegateValidatorSet";
    readonly Request: typeof MsgRedelegateValidatorSet;
    readonly Response: typeof MsgRedelegateValidatorSetResponse;
};
/**
 * WithdrawDelegationRewards allows users to claim rewards from the
 * validator-set.
 *
 * @generated from rpc osmosis.valsetpref.v1beta1.Msg.WithdrawDelegationRewards
 */
export declare const MsgWithdrawDelegationRewardsService: {
    readonly typeName: "osmosis.valsetpref.v1beta1.Msg";
    readonly method: "WithdrawDelegationRewards";
    readonly Request: typeof MsgWithdrawDelegationRewards;
    readonly Response: typeof MsgWithdrawDelegationRewardsResponse;
};
/**
 * DelegateBondedTokens allows users to break the lockup bond and delegate
 * osmo tokens to a predefined validator-set.
 *
 * @generated from rpc osmosis.valsetpref.v1beta1.Msg.DelegateBondedTokens
 */
export declare const MsgDelegateBondedTokensService: {
    readonly typeName: "osmosis.valsetpref.v1beta1.Msg";
    readonly method: "DelegateBondedTokens";
    readonly Request: typeof MsgDelegateBondedTokens;
    readonly Response: typeof MsgDelegateBondedTokensResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map