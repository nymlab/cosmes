import { QueryBaseDenomRequest, QueryBaseDenomResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryFeeTokensRequest, QueryFeeTokensResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * Params returns params.
 *
 * @generated from rpc dymensionxyz.dymension.txfees.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "dymensionxyz.dymension.txfees.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * FeeTokens returns a list of all the accepted fee tokens and their
 * corresponding pools. It does not include the BaseDenom, which has its own
 * query endpoint
 *
 * @generated from rpc dymensionxyz.dymension.txfees.v1beta1.Query.FeeTokens
 */
export declare const QueryFeeTokensService: {
    readonly typeName: "dymensionxyz.dymension.txfees.v1beta1.Query";
    readonly method: "FeeTokens";
    readonly Request: typeof QueryFeeTokensRequest;
    readonly Response: typeof QueryFeeTokensResponse;
};
/**
 * DenomSpotPrice returns all spot prices by each registered token denom.
 *
 * @generated from rpc dymensionxyz.dymension.txfees.v1beta1.Query.DenomSpotPrice
 */
export declare const QueryDenomSpotPriceService: {
    readonly typeName: "dymensionxyz.dymension.txfees.v1beta1.Query";
    readonly method: "DenomSpotPrice";
    readonly Request: typeof QueryDenomSpotPriceRequest;
    readonly Response: typeof QueryDenomSpotPriceResponse;
};
/**
 * Returns the poolID for a specified denom input.
 *
 * @generated from rpc dymensionxyz.dymension.txfees.v1beta1.Query.DenomPoolId
 */
export declare const QueryDenomPoolIdService: {
    readonly typeName: "dymensionxyz.dymension.txfees.v1beta1.Query";
    readonly method: "DenomPoolId";
    readonly Request: typeof QueryDenomPoolIdRequest;
    readonly Response: typeof QueryDenomPoolIdResponse;
};
/**
 * Returns a list of all base denom tokens and their corresponding pools.
 *
 * @generated from rpc dymensionxyz.dymension.txfees.v1beta1.Query.BaseDenom
 */
export declare const QueryBaseDenomService: {
    readonly typeName: "dymensionxyz.dymension.txfees.v1beta1.Query";
    readonly method: "BaseDenom";
    readonly Request: typeof QueryBaseDenomRequest;
    readonly Response: typeof QueryBaseDenomResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map