import { ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, ActiveGaugesRequest, ActiveGaugesResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, RewardsEstRequest, RewardsEstResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse } from "./query_pb.js";
/**
 * ModuleToDistributeCoins returns coins that are going to be distributed
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.ModuleToDistributeCoins
 */
export declare const QueryModuleToDistributeCoinsService: {
    readonly typeName: "dymensionxyz.dymension.incentives.Query";
    readonly method: "ModuleToDistributeCoins";
    readonly Request: typeof ModuleToDistributeCoinsRequest;
    readonly Response: typeof ModuleToDistributeCoinsResponse;
};
/**
 * GaugeByID returns gauges by their respective ID
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.GaugeByID
 */
export declare const QueryGaugeByIDService: {
    readonly typeName: "dymensionxyz.dymension.incentives.Query";
    readonly method: "GaugeByID";
    readonly Request: typeof GaugeByIDRequest;
    readonly Response: typeof GaugeByIDResponse;
};
/**
 * Gauges returns both upcoming and active gauges
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.Gauges
 */
export declare const QueryGaugesService: {
    readonly typeName: "dymensionxyz.dymension.incentives.Query";
    readonly method: "Gauges";
    readonly Request: typeof GaugesRequest;
    readonly Response: typeof GaugesResponse;
};
/**
 * ActiveGauges returns active gauges
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.ActiveGauges
 */
export declare const QueryActiveGaugesService: {
    readonly typeName: "dymensionxyz.dymension.incentives.Query";
    readonly method: "ActiveGauges";
    readonly Request: typeof ActiveGaugesRequest;
    readonly Response: typeof ActiveGaugesResponse;
};
/**
 * ActiveGaugesPerDenom returns active gauges by denom
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.ActiveGaugesPerDenom
 */
export declare const QueryActiveGaugesPerDenomService: {
    readonly typeName: "dymensionxyz.dymension.incentives.Query";
    readonly method: "ActiveGaugesPerDenom";
    readonly Request: typeof ActiveGaugesPerDenomRequest;
    readonly Response: typeof ActiveGaugesPerDenomResponse;
};
/**
 * Returns scheduled gauges that have not yet occured
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.UpcomingGauges
 */
export declare const QueryUpcomingGaugesService: {
    readonly typeName: "dymensionxyz.dymension.incentives.Query";
    readonly method: "UpcomingGauges";
    readonly Request: typeof UpcomingGaugesRequest;
    readonly Response: typeof UpcomingGaugesResponse;
};
/**
 * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
 * by denom
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.UpcomingGaugesPerDenom
 */
export declare const QueryUpcomingGaugesPerDenomService: {
    readonly typeName: "dymensionxyz.dymension.incentives.Query";
    readonly method: "UpcomingGaugesPerDenom";
    readonly Request: typeof UpcomingGaugesPerDenomRequest;
    readonly Response: typeof UpcomingGaugesPerDenomResponse;
};
/**
 * RewardsEst returns an estimate of the rewards from now until a specified
 * time in the future The querier either provides an address or a set of locks
 * for which they want to find the associated rewards
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.RewardsEst
 */
export declare const QueryRewardsEstService: {
    readonly typeName: "dymensionxyz.dymension.incentives.Query";
    readonly method: "RewardsEst";
    readonly Request: typeof RewardsEstRequest;
    readonly Response: typeof RewardsEstResponse;
};
/**
 * LockableDurations returns lockable durations that are valid to distribute
 * incentives for
 *
 * @generated from rpc dymensionxyz.dymension.incentives.Query.LockableDurations
 */
export declare const QueryLockableDurationsService: {
    readonly typeName: "dymensionxyz.dymension.incentives.Query";
    readonly method: "LockableDurations";
    readonly Request: typeof QueryLockableDurationsRequest;
    readonly Response: typeof QueryLockableDurationsResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map