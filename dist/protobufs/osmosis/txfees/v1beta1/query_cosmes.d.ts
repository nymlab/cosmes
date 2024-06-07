import { QueryBaseDenomRequest, QueryBaseDenomResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryEipBaseFeeRequest, QueryEipBaseFeeResponse, QueryFeeTokensRequest, QueryFeeTokensResponse } from "./query_pb.js";
/**
 * FeeTokens returns a list of all the whitelisted fee tokens and their
 * corresponding pools. It does not include the BaseDenom, which has its own
 * query endpoint
 *
 * @generated from rpc osmosis.txfees.v1beta1.Query.FeeTokens
 */
export declare const QueryFeeTokensService: {
    readonly typeName: "osmosis.txfees.v1beta1.Query";
    readonly method: "FeeTokens";
    readonly Request: typeof QueryFeeTokensRequest;
    readonly Response: typeof QueryFeeTokensResponse;
};
/**
 * DenomSpotPrice returns all spot prices by each registered token denom.
 *
 * @generated from rpc osmosis.txfees.v1beta1.Query.DenomSpotPrice
 */
export declare const QueryDenomSpotPriceService: {
    readonly typeName: "osmosis.txfees.v1beta1.Query";
    readonly method: "DenomSpotPrice";
    readonly Request: typeof QueryDenomSpotPriceRequest;
    readonly Response: typeof QueryDenomSpotPriceResponse;
};
/**
 * Returns the poolID for a specified denom input.
 *
 * @generated from rpc osmosis.txfees.v1beta1.Query.DenomPoolId
 */
export declare const QueryDenomPoolIdService: {
    readonly typeName: "osmosis.txfees.v1beta1.Query";
    readonly method: "DenomPoolId";
    readonly Request: typeof QueryDenomPoolIdRequest;
    readonly Response: typeof QueryDenomPoolIdResponse;
};
/**
 * Returns a list of all base denom tokens and their corresponding pools.
 *
 * @generated from rpc osmosis.txfees.v1beta1.Query.BaseDenom
 */
export declare const QueryBaseDenomService: {
    readonly typeName: "osmosis.txfees.v1beta1.Query";
    readonly method: "BaseDenom";
    readonly Request: typeof QueryBaseDenomRequest;
    readonly Response: typeof QueryBaseDenomResponse;
};
/**
 * Returns a list of all base denom tokens and their corresponding pools.
 *
 * @generated from rpc osmosis.txfees.v1beta1.Query.GetEipBaseFee
 */
export declare const QueryGetEipBaseFeeService: {
    readonly typeName: "osmosis.txfees.v1beta1.Query";
    readonly method: "GetEipBaseFee";
    readonly Request: typeof QueryEipBaseFeeRequest;
    readonly Response: typeof QueryEipBaseFeeResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map