import { QueryEpochProvisionsRequest, QueryEpochProvisionsResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * Params returns the total set of minting parameters.
 *
 * @generated from rpc osmosis.mint.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "osmosis.mint.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * EpochProvisions returns the current minting epoch provisions value.
 *
 * @generated from rpc osmosis.mint.v1beta1.Query.EpochProvisions
 */
export declare const QueryEpochProvisionsService: {
    readonly typeName: "osmosis.mint.v1beta1.Query";
    readonly method: "EpochProvisions";
    readonly Request: typeof QueryEpochProvisionsRequest;
    readonly Response: typeof QueryEpochProvisionsResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map