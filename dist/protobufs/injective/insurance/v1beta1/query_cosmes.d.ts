import { QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse } from "./query_pb.js";
/**
 * Retrieves insurance params
 *
 * @generated from rpc injective.insurance.v1beta1.Query.InsuranceParams
 */
export declare const QueryInsuranceParamsService: {
    readonly typeName: "injective.insurance.v1beta1.Query";
    readonly method: "InsuranceParams";
    readonly Request: typeof QueryInsuranceParamsRequest;
    readonly Response: typeof QueryInsuranceParamsResponse;
};
/**
 * Retrieves individual insurance fund information from market id
 *
 * @generated from rpc injective.insurance.v1beta1.Query.InsuranceFund
 */
export declare const QueryInsuranceFundService: {
    readonly typeName: "injective.insurance.v1beta1.Query";
    readonly method: "InsuranceFund";
    readonly Request: typeof QueryInsuranceFundRequest;
    readonly Response: typeof QueryInsuranceFundResponse;
};
/**
 * Retrieves all insurance funds
 *
 * @generated from rpc injective.insurance.v1beta1.Query.InsuranceFunds
 */
export declare const QueryInsuranceFundsService: {
    readonly typeName: "injective.insurance.v1beta1.Query";
    readonly method: "InsuranceFunds";
    readonly Request: typeof QueryInsuranceFundsRequest;
    readonly Response: typeof QueryInsuranceFundsResponse;
};
/**
 * Retrives the value of insurance fund share token at current price (not
 * pending redemption)
 *
 * @generated from rpc injective.insurance.v1beta1.Query.EstimatedRedemptions
 */
export declare const QueryEstimatedRedemptionsService: {
    readonly typeName: "injective.insurance.v1beta1.Query";
    readonly method: "EstimatedRedemptions";
    readonly Request: typeof QueryEstimatedRedemptionsRequest;
    readonly Response: typeof QueryEstimatedRedemptionsResponse;
};
/**
 * Retrieves pending redemptions' share token at current price
 *
 * @generated from rpc injective.insurance.v1beta1.Query.PendingRedemptions
 */
export declare const QueryPendingRedemptionsService: {
    readonly typeName: "injective.insurance.v1beta1.Query";
    readonly method: "PendingRedemptions";
    readonly Request: typeof QueryPendingRedemptionsRequest;
    readonly Response: typeof QueryPendingRedemptionsResponse;
};
/**
 * Retrieves the entire insurance module's state
 *
 * @generated from rpc injective.insurance.v1beta1.Query.InsuranceModuleState
 */
export declare const QueryInsuranceModuleStateService: {
    readonly typeName: "injective.insurance.v1beta1.Query";
    readonly method: "InsuranceModuleState";
    readonly Request: typeof QueryModuleStateRequest;
    readonly Response: typeof QueryModuleStateResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map