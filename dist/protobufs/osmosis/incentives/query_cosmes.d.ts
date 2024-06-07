import { ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, ActiveGaugesRequest, ActiveGaugesResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, QueryAllGroupsGaugesRequest, QueryAllGroupsGaugesResponse, QueryAllGroupsRequest, QueryAllGroupsResponse, QueryAllGroupsWithGaugeRequest, QueryAllGroupsWithGaugeResponse, QueryCurrentWeightByGroupGaugeIDRequest, QueryCurrentWeightByGroupGaugeIDResponse, QueryGroupByGroupGaugeIDRequest, QueryGroupByGroupGaugeIDResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, RewardsEstRequest, RewardsEstResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse } from "./query_pb.js";
/**
 * ModuleToDistributeCoins returns coins that are going to be distributed
 *
 * @generated from rpc osmosis.incentives.Query.ModuleToDistributeCoins
 */
export declare const QueryModuleToDistributeCoinsService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "ModuleToDistributeCoins";
    readonly Request: typeof ModuleToDistributeCoinsRequest;
    readonly Response: typeof ModuleToDistributeCoinsResponse;
};
/**
 * GaugeByID returns gauges by their respective ID
 *
 * @generated from rpc osmosis.incentives.Query.GaugeByID
 */
export declare const QueryGaugeByIDService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "GaugeByID";
    readonly Request: typeof GaugeByIDRequest;
    readonly Response: typeof GaugeByIDResponse;
};
/**
 * Gauges returns both upcoming and active gauges
 *
 * @generated from rpc osmosis.incentives.Query.Gauges
 */
export declare const QueryGaugesService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "Gauges";
    readonly Request: typeof GaugesRequest;
    readonly Response: typeof GaugesResponse;
};
/**
 * ActiveGauges returns active gauges
 *
 * @generated from rpc osmosis.incentives.Query.ActiveGauges
 */
export declare const QueryActiveGaugesService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "ActiveGauges";
    readonly Request: typeof ActiveGaugesRequest;
    readonly Response: typeof ActiveGaugesResponse;
};
/**
 * ActiveGaugesPerDenom returns active gauges by denom
 *
 * @generated from rpc osmosis.incentives.Query.ActiveGaugesPerDenom
 */
export declare const QueryActiveGaugesPerDenomService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "ActiveGaugesPerDenom";
    readonly Request: typeof ActiveGaugesPerDenomRequest;
    readonly Response: typeof ActiveGaugesPerDenomResponse;
};
/**
 * Returns scheduled gauges that have not yet occurred
 *
 * @generated from rpc osmosis.incentives.Query.UpcomingGauges
 */
export declare const QueryUpcomingGaugesService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "UpcomingGauges";
    readonly Request: typeof UpcomingGaugesRequest;
    readonly Response: typeof UpcomingGaugesResponse;
};
/**
 * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occurred
 * by denom
 *
 * @generated from rpc osmosis.incentives.Query.UpcomingGaugesPerDenom
 */
export declare const QueryUpcomingGaugesPerDenomService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "UpcomingGaugesPerDenom";
    readonly Request: typeof UpcomingGaugesPerDenomRequest;
    readonly Response: typeof UpcomingGaugesPerDenomResponse;
};
/**
 * RewardsEst returns an estimate of the rewards from now until a specified
 * time in the future The querier either provides an address or a set of locks
 * for which they want to find the associated rewards
 *
 * @generated from rpc osmosis.incentives.Query.RewardsEst
 */
export declare const QueryRewardsEstService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "RewardsEst";
    readonly Request: typeof RewardsEstRequest;
    readonly Response: typeof RewardsEstResponse;
};
/**
 * LockableDurations returns lockable durations that are valid to distribute
 * incentives for
 *
 * @generated from rpc osmosis.incentives.Query.LockableDurations
 */
export declare const QueryLockableDurationsService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "LockableDurations";
    readonly Request: typeof QueryLockableDurationsRequest;
    readonly Response: typeof QueryLockableDurationsResponse;
};
/**
 * AllGroups returns all groups
 *
 * @generated from rpc osmosis.incentives.Query.AllGroups
 */
export declare const QueryAllGroupsService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "AllGroups";
    readonly Request: typeof QueryAllGroupsRequest;
    readonly Response: typeof QueryAllGroupsResponse;
};
/**
 * AllGroupsGauges returns all group gauges
 *
 * @generated from rpc osmosis.incentives.Query.AllGroupsGauges
 */
export declare const QueryAllGroupsGaugesService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "AllGroupsGauges";
    readonly Request: typeof QueryAllGroupsGaugesRequest;
    readonly Response: typeof QueryAllGroupsGaugesResponse;
};
/**
 * AllGroupsWithGauge returns all groups with their group gauge
 *
 * @generated from rpc osmosis.incentives.Query.AllGroupsWithGauge
 */
export declare const QueryAllGroupsWithGaugeService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "AllGroupsWithGauge";
    readonly Request: typeof QueryAllGroupsWithGaugeRequest;
    readonly Response: typeof QueryAllGroupsWithGaugeResponse;
};
/**
 * GroupByGroupGaugeID returns a group given its group gauge ID
 *
 * @generated from rpc osmosis.incentives.Query.GroupByGroupGaugeID
 */
export declare const QueryGroupByGroupGaugeIDService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "GroupByGroupGaugeID";
    readonly Request: typeof QueryGroupByGroupGaugeIDRequest;
    readonly Response: typeof QueryGroupByGroupGaugeIDResponse;
};
/**
 * CurrentWeightByGroupGaugeID returns the current weight since the
 * the last epoch given a group gauge ID
 *
 * @generated from rpc osmosis.incentives.Query.CurrentWeightByGroupGaugeID
 */
export declare const QueryCurrentWeightByGroupGaugeIDService: {
    readonly typeName: "osmosis.incentives.Query";
    readonly method: "CurrentWeightByGroupGaugeID";
    readonly Request: typeof QueryCurrentWeightByGroupGaugeIDRequest;
    readonly Response: typeof QueryCurrentWeightByGroupGaugeIDResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map