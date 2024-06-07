import { QueryGetAllProtocolRevenueRequest, QueryGetAllProtocolRevenueResponse, QueryGetProtoRevAdminAccountRequest, QueryGetProtoRevAdminAccountResponse, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevAllRouteStatisticsRequest, QueryGetProtoRevAllRouteStatisticsResponse, QueryGetProtoRevBaseDenomsRequest, QueryGetProtoRevBaseDenomsResponse, QueryGetProtoRevDeveloperAccountRequest, QueryGetProtoRevDeveloperAccountResponse, QueryGetProtoRevEnabledRequest, QueryGetProtoRevEnabledResponse, QueryGetProtoRevInfoByPoolTypeRequest, QueryGetProtoRevInfoByPoolTypeResponse, QueryGetProtoRevMaxPoolPointsPerBlockRequest, QueryGetProtoRevMaxPoolPointsPerBlockResponse, QueryGetProtoRevMaxPoolPointsPerTxRequest, QueryGetProtoRevMaxPoolPointsPerTxResponse, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevPoolRequest, QueryGetProtoRevPoolResponse, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevStatisticsByRouteRequest, QueryGetProtoRevStatisticsByRouteResponse, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * Params queries the parameters of the module.
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
 * has executed
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevNumberOfTrades
 */
export declare const QueryGetProtoRevNumberOfTradesService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevNumberOfTrades";
    readonly Request: typeof QueryGetProtoRevNumberOfTradesRequest;
    readonly Response: typeof QueryGetProtoRevNumberOfTradesResponse;
};
/**
 * GetProtoRevProfitsByDenom queries the profits of the module by denom
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevProfitsByDenom
 */
export declare const QueryGetProtoRevProfitsByDenomService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevProfitsByDenom";
    readonly Request: typeof QueryGetProtoRevProfitsByDenomRequest;
    readonly Response: typeof QueryGetProtoRevProfitsByDenomResponse;
};
/**
 * GetProtoRevAllProfits queries all of the profits from the module
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevAllProfits
 */
export declare const QueryGetProtoRevAllProfitsService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevAllProfits";
    readonly Request: typeof QueryGetProtoRevAllProfitsRequest;
    readonly Response: typeof QueryGetProtoRevAllProfitsResponse;
};
/**
 * GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
 * that have been executed for a given route
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevStatisticsByRoute
 */
export declare const QueryGetProtoRevStatisticsByRouteService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevStatisticsByRoute";
    readonly Request: typeof QueryGetProtoRevStatisticsByRouteRequest;
    readonly Response: typeof QueryGetProtoRevStatisticsByRouteResponse;
};
/**
 * GetProtoRevAllRouteStatistics queries all of routes that the module has
 * arbitraged against and the number of trades and profits that have been
 * accumulated for each route
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevAllRouteStatistics
 */
export declare const QueryGetProtoRevAllRouteStatisticsService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevAllRouteStatistics";
    readonly Request: typeof QueryGetProtoRevAllRouteStatisticsRequest;
    readonly Response: typeof QueryGetProtoRevAllRouteStatisticsResponse;
};
/**
 * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
 * is currently arbitraging
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevTokenPairArbRoutes
 */
export declare const QueryGetProtoRevTokenPairArbRoutesService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevTokenPairArbRoutes";
    readonly Request: typeof QueryGetProtoRevTokenPairArbRoutesRequest;
    readonly Response: typeof QueryGetProtoRevTokenPairArbRoutesResponse;
};
/**
 * GetProtoRevAdminAccount queries the admin account of the module
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevAdminAccount
 */
export declare const QueryGetProtoRevAdminAccountService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevAdminAccount";
    readonly Request: typeof QueryGetProtoRevAdminAccountRequest;
    readonly Response: typeof QueryGetProtoRevAdminAccountResponse;
};
/**
 * GetProtoRevDeveloperAccount queries the developer account of the module
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevDeveloperAccount
 */
export declare const QueryGetProtoRevDeveloperAccountService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevDeveloperAccount";
    readonly Request: typeof QueryGetProtoRevDeveloperAccountRequest;
    readonly Response: typeof QueryGetProtoRevDeveloperAccountResponse;
};
/**
 * GetProtoRevInfoByPoolType queries pool type information that is currently
 * being utilized by the module
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevInfoByPoolType
 */
export declare const QueryGetProtoRevInfoByPoolTypeService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevInfoByPoolType";
    readonly Request: typeof QueryGetProtoRevInfoByPoolTypeRequest;
    readonly Response: typeof QueryGetProtoRevInfoByPoolTypeResponse;
};
/**
 * GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
 * that can be consumed per transaction
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevMaxPoolPointsPerTx
 */
export declare const QueryGetProtoRevMaxPoolPointsPerTxService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevMaxPoolPointsPerTx";
    readonly Request: typeof QueryGetProtoRevMaxPoolPointsPerTxRequest;
    readonly Response: typeof QueryGetProtoRevMaxPoolPointsPerTxResponse;
};
/**
 * GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
 * that can consumed per block
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevMaxPoolPointsPerBlock
 */
export declare const QueryGetProtoRevMaxPoolPointsPerBlockService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevMaxPoolPointsPerBlock";
    readonly Request: typeof QueryGetProtoRevMaxPoolPointsPerBlockRequest;
    readonly Response: typeof QueryGetProtoRevMaxPoolPointsPerBlockResponse;
};
/**
 * GetProtoRevBaseDenoms queries the base denoms that the module is currently
 * utilizing for arbitrage
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevBaseDenoms
 */
export declare const QueryGetProtoRevBaseDenomsService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevBaseDenoms";
    readonly Request: typeof QueryGetProtoRevBaseDenomsRequest;
    readonly Response: typeof QueryGetProtoRevBaseDenomsResponse;
};
/**
 * GetProtoRevEnabled queries whether the module is enabled or not
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevEnabled
 */
export declare const QueryGetProtoRevEnabledService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevEnabled";
    readonly Request: typeof QueryGetProtoRevEnabledRequest;
    readonly Response: typeof QueryGetProtoRevEnabledResponse;
};
/**
 * GetProtoRevPool queries the pool id used via the highest liquidity method
 * for arbitrage route building given a pair of denominations
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetProtoRevPool
 */
export declare const QueryGetProtoRevPoolService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetProtoRevPool";
    readonly Request: typeof QueryGetProtoRevPoolRequest;
    readonly Response: typeof QueryGetProtoRevPoolResponse;
};
/**
 * GetAllProtocolRevenue queries all of the protocol revenue that has been
 * accumulated by any module
 *
 * @generated from rpc osmosis.protorev.v1beta1.Query.GetAllProtocolRevenue
 */
export declare const QueryGetAllProtocolRevenueService: {
    readonly typeName: "osmosis.protorev.v1beta1.Query";
    readonly method: "GetAllProtocolRevenue";
    readonly Request: typeof QueryGetAllProtocolRevenueRequest;
    readonly Response: typeof QueryGetAllProtocolRevenueResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map