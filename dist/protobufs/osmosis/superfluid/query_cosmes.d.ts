import { AllAssetsRequest, AllAssetsResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AssetTypeRequest, AssetTypeResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryParamsRequest, QueryParamsResponse, QueryRestSupplyRequest, QueryRestSupplyResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, UserConcentratedSuperfluidPositionsDelegatedRequest, UserConcentratedSuperfluidPositionsDelegatedResponse, UserConcentratedSuperfluidPositionsUndelegatingRequest, UserConcentratedSuperfluidPositionsUndelegatingResponse } from "./query_pb.js";
/**
 * Params returns the total set of superfluid parameters.
 *
 * @generated from rpc osmosis.superfluid.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * Returns superfluid asset type, whether if it's a native asset or an lp
 * share.
 *
 * @generated from rpc osmosis.superfluid.Query.AssetType
 */
export declare const QueryAssetTypeService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "AssetType";
    readonly Request: typeof AssetTypeRequest;
    readonly Response: typeof AssetTypeResponse;
};
/**
 * Returns all registered superfluid assets.
 *
 * @generated from rpc osmosis.superfluid.Query.AllAssets
 */
export declare const QueryAllAssetsService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "AllAssets";
    readonly Request: typeof AllAssetsRequest;
    readonly Response: typeof AllAssetsResponse;
};
/**
 * Returns the osmo equivalent multiplier used in the most recent epoch.
 *
 * @generated from rpc osmosis.superfluid.Query.AssetMultiplier
 */
export declare const QueryAssetMultiplierService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "AssetMultiplier";
    readonly Request: typeof AssetMultiplierRequest;
    readonly Response: typeof AssetMultiplierResponse;
};
/**
 * Returns all superfluid intermediary accounts.
 *
 * @generated from rpc osmosis.superfluid.Query.AllIntermediaryAccounts
 */
export declare const QueryAllIntermediaryAccountsService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "AllIntermediaryAccounts";
    readonly Request: typeof AllIntermediaryAccountsRequest;
    readonly Response: typeof AllIntermediaryAccountsResponse;
};
/**
 * Returns intermediary account connected to a superfluid staked lock by id
 *
 * @generated from rpc osmosis.superfluid.Query.ConnectedIntermediaryAccount
 */
export declare const QueryConnectedIntermediaryAccountService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "ConnectedIntermediaryAccount";
    readonly Request: typeof ConnectedIntermediaryAccountRequest;
    readonly Response: typeof ConnectedIntermediaryAccountResponse;
};
/**
 * Returns the amount of delegations of specific denom for all validators
 *
 * @generated from rpc osmosis.superfluid.Query.TotalDelegationByValidatorForDenom
 */
export declare const QueryTotalDelegationByValidatorForDenomService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "TotalDelegationByValidatorForDenom";
    readonly Request: typeof QueryTotalDelegationByValidatorForDenomRequest;
    readonly Response: typeof QueryTotalDelegationByValidatorForDenomResponse;
};
/**
 * Returns the total amount of osmo superfluidly staked.
 * Response is denominated in uosmo.
 *
 * @generated from rpc osmosis.superfluid.Query.TotalSuperfluidDelegations
 */
export declare const QueryTotalSuperfluidDelegationsService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "TotalSuperfluidDelegations";
    readonly Request: typeof TotalSuperfluidDelegationsRequest;
    readonly Response: typeof TotalSuperfluidDelegationsResponse;
};
/**
 * Returns the coins superfluid delegated for the delegator, validator, denom
 * triplet
 *
 * @generated from rpc osmosis.superfluid.Query.SuperfluidDelegationAmount
 */
export declare const QuerySuperfluidDelegationAmountService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "SuperfluidDelegationAmount";
    readonly Request: typeof SuperfluidDelegationAmountRequest;
    readonly Response: typeof SuperfluidDelegationAmountResponse;
};
/**
 * Returns all the delegated superfluid positions for a specific delegator.
 *
 * @generated from rpc osmosis.superfluid.Query.SuperfluidDelegationsByDelegator
 */
export declare const QuerySuperfluidDelegationsByDelegatorService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "SuperfluidDelegationsByDelegator";
    readonly Request: typeof SuperfluidDelegationsByDelegatorRequest;
    readonly Response: typeof SuperfluidDelegationsByDelegatorResponse;
};
/**
 * Returns all the undelegating superfluid positions for a specific delegator.
 *
 * @generated from rpc osmosis.superfluid.Query.SuperfluidUndelegationsByDelegator
 */
export declare const QuerySuperfluidUndelegationsByDelegatorService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "SuperfluidUndelegationsByDelegator";
    readonly Request: typeof SuperfluidUndelegationsByDelegatorRequest;
    readonly Response: typeof SuperfluidUndelegationsByDelegatorResponse;
};
/**
 * Returns all the superfluid positions of a specific denom delegated to one
 * validator
 *
 * @generated from rpc osmosis.superfluid.Query.SuperfluidDelegationsByValidatorDenom
 */
export declare const QuerySuperfluidDelegationsByValidatorDenomService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "SuperfluidDelegationsByValidatorDenom";
    readonly Request: typeof SuperfluidDelegationsByValidatorDenomRequest;
    readonly Response: typeof SuperfluidDelegationsByValidatorDenomResponse;
};
/**
 * Returns the amount of a specific denom delegated to a specific validator
 * This is labeled an estimate, because the way it calculates the amount can
 * lead rounding errors from the true delegated amount
 *
 * @generated from rpc osmosis.superfluid.Query.EstimateSuperfluidDelegatedAmountByValidatorDenom
 */
export declare const QueryEstimateSuperfluidDelegatedAmountByValidatorDenomService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "EstimateSuperfluidDelegatedAmountByValidatorDenom";
    readonly Request: typeof EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
    readonly Response: typeof EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
};
/**
 * Returns the specified delegations for a specific delegator
 *
 * @generated from rpc osmosis.superfluid.Query.TotalDelegationByDelegator
 */
export declare const QueryTotalDelegationByDelegatorService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "TotalDelegationByDelegator";
    readonly Request: typeof QueryTotalDelegationByDelegatorRequest;
    readonly Response: typeof QueryTotalDelegationByDelegatorResponse;
};
/**
 * Returns a list of whitelisted pool ids to unpool.
 *
 * @generated from rpc osmosis.superfluid.Query.UnpoolWhitelist
 */
export declare const QueryUnpoolWhitelistService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "UnpoolWhitelist";
    readonly Request: typeof QueryUnpoolWhitelistRequest;
    readonly Response: typeof QueryUnpoolWhitelistResponse;
};
/**
 * Returns all of a user's full range CL positions that are superfluid staked.
 *
 * @generated from rpc osmosis.superfluid.Query.UserConcentratedSuperfluidPositionsDelegated
 */
export declare const QueryUserConcentratedSuperfluidPositionsDelegatedService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "UserConcentratedSuperfluidPositionsDelegated";
    readonly Request: typeof UserConcentratedSuperfluidPositionsDelegatedRequest;
    readonly Response: typeof UserConcentratedSuperfluidPositionsDelegatedResponse;
};
/**
 * @generated from rpc osmosis.superfluid.Query.UserConcentratedSuperfluidPositionsUndelegating
 */
export declare const QueryUserConcentratedSuperfluidPositionsUndelegatingService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "UserConcentratedSuperfluidPositionsUndelegating";
    readonly Request: typeof UserConcentratedSuperfluidPositionsUndelegatingRequest;
    readonly Response: typeof UserConcentratedSuperfluidPositionsUndelegatingResponse;
};
/**
 * @generated from rpc osmosis.superfluid.Query.RestSupply
 */
export declare const QueryRestSupplyService: {
    readonly typeName: "osmosis.superfluid.Query";
    readonly method: "RestSupply";
    readonly Request: typeof QueryRestSupplyRequest;
    readonly Response: typeof QueryRestSupplyResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map