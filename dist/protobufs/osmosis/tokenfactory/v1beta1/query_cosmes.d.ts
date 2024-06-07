import { QueryBeforeSendHookAddressRequest, QueryBeforeSendHookAddressResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * Params defines a gRPC query method that returns the tokenfactory module's
 * parameters.
 *
 * @generated from rpc osmosis.tokenfactory.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "osmosis.tokenfactory.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * DenomAuthorityMetadata defines a gRPC query method for fetching
 * DenomAuthorityMetadata for a particular denom.
 *
 * @generated from rpc osmosis.tokenfactory.v1beta1.Query.DenomAuthorityMetadata
 */
export declare const QueryDenomAuthorityMetadataService: {
    readonly typeName: "osmosis.tokenfactory.v1beta1.Query";
    readonly method: "DenomAuthorityMetadata";
    readonly Request: typeof QueryDenomAuthorityMetadataRequest;
    readonly Response: typeof QueryDenomAuthorityMetadataResponse;
};
/**
 * DenomsFromCreator defines a gRPC query method for fetching all
 * denominations created by a specific admin/creator.
 *
 * @generated from rpc osmosis.tokenfactory.v1beta1.Query.DenomsFromCreator
 */
export declare const QueryDenomsFromCreatorService: {
    readonly typeName: "osmosis.tokenfactory.v1beta1.Query";
    readonly method: "DenomsFromCreator";
    readonly Request: typeof QueryDenomsFromCreatorRequest;
    readonly Response: typeof QueryDenomsFromCreatorResponse;
};
/**
 * BeforeSendHookAddress defines a gRPC query method for
 * getting the address registered for the before send hook.
 *
 * @generated from rpc osmosis.tokenfactory.v1beta1.Query.BeforeSendHookAddress
 */
export declare const QueryBeforeSendHookAddressService: {
    readonly typeName: "osmosis.tokenfactory.v1beta1.Query";
    readonly method: "BeforeSendHookAddress";
    readonly Request: typeof QueryBeforeSendHookAddressRequest;
    readonly Response: typeof QueryBeforeSendHookAddressResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map