import { QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * Params defines a gRPC query method that returns the tokenfactory module's
 * parameters.
 *
 * @generated from rpc injective.tokenfactory.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "injective.tokenfactory.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * DenomAuthorityMetadata defines a gRPC query method for fetching
 * DenomAuthorityMetadata for a particular denom.
 *
 * @generated from rpc injective.tokenfactory.v1beta1.Query.DenomAuthorityMetadata
 */
export declare const QueryDenomAuthorityMetadataService: {
    readonly typeName: "injective.tokenfactory.v1beta1.Query";
    readonly method: "DenomAuthorityMetadata";
    readonly Request: typeof QueryDenomAuthorityMetadataRequest;
    readonly Response: typeof QueryDenomAuthorityMetadataResponse;
};
/**
 * DenomsFromCreator defines a gRPC query method for fetching all
 * denominations created by a specific admin/creator.
 *
 * @generated from rpc injective.tokenfactory.v1beta1.Query.DenomsFromCreator
 */
export declare const QueryDenomsFromCreatorService: {
    readonly typeName: "injective.tokenfactory.v1beta1.Query";
    readonly method: "DenomsFromCreator";
    readonly Request: typeof QueryDenomsFromCreatorRequest;
    readonly Response: typeof QueryDenomsFromCreatorResponse;
};
/**
 * Retrieves the entire auction module's state
 *
 * @generated from rpc injective.tokenfactory.v1beta1.Query.TokenfactoryModuleState
 */
export declare const QueryTokenfactoryModuleStateService: {
    readonly typeName: "injective.tokenfactory.v1beta1.Query";
    readonly method: "TokenfactoryModuleState";
    readonly Request: typeof QueryModuleStateRequest;
    readonly Response: typeof QueryModuleStateResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map