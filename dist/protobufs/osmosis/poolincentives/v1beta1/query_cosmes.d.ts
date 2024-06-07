import { QueryDistrInfoRequest, QueryDistrInfoResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse, QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * GaugeIds takes the pool id and returns the matching gauge ids and durations
 *
 * @generated from rpc osmosis.poolincentives.v1beta1.Query.GaugeIds
 */
export declare const QueryGaugeIdsService: {
    readonly typeName: "osmosis.poolincentives.v1beta1.Query";
    readonly method: "GaugeIds";
    readonly Request: typeof QueryGaugeIdsRequest;
    readonly Response: typeof QueryGaugeIdsResponse;
};
/**
 * DistrInfo returns the pool's matching gauge ids and weights.
 *
 * @generated from rpc osmosis.poolincentives.v1beta1.Query.DistrInfo
 */
export declare const QueryDistrInfoService: {
    readonly typeName: "osmosis.poolincentives.v1beta1.Query";
    readonly method: "DistrInfo";
    readonly Request: typeof QueryDistrInfoRequest;
    readonly Response: typeof QueryDistrInfoResponse;
};
/**
 * Params returns pool incentives params.
 *
 * @generated from rpc osmosis.poolincentives.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "osmosis.poolincentives.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * LockableDurations returns lock durations for pools.
 *
 * @generated from rpc osmosis.poolincentives.v1beta1.Query.LockableDurations
 */
export declare const QueryLockableDurationsService: {
    readonly typeName: "osmosis.poolincentives.v1beta1.Query";
    readonly method: "LockableDurations";
    readonly Request: typeof QueryLockableDurationsRequest;
    readonly Response: typeof QueryLockableDurationsResponse;
};
/**
 * IncentivizedPools returns currently incentivized pools
 *
 * @generated from rpc osmosis.poolincentives.v1beta1.Query.IncentivizedPools
 */
export declare const QueryIncentivizedPoolsService: {
    readonly typeName: "osmosis.poolincentives.v1beta1.Query";
    readonly method: "IncentivizedPools";
    readonly Request: typeof QueryIncentivizedPoolsRequest;
    readonly Response: typeof QueryIncentivizedPoolsResponse;
};
/**
 * ExternalIncentiveGauges returns external incentive gauges.
 *
 * @generated from rpc osmosis.poolincentives.v1beta1.Query.ExternalIncentiveGauges
 */
export declare const QueryExternalIncentiveGaugesService: {
    readonly typeName: "osmosis.poolincentives.v1beta1.Query";
    readonly method: "ExternalIncentiveGauges";
    readonly Request: typeof QueryExternalIncentiveGaugesRequest;
    readonly Response: typeof QueryExternalIncentiveGaugesResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map