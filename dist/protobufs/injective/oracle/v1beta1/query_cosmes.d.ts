import { QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryParamsRequest, QueryParamsResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryPythPriceRequest, QueryPythPriceResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse } from "./query_pb.js";
/**
 * Retrieves oracle params
 *
 * @generated from rpc injective.oracle.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * Retrieves the band relayers
 *
 * @generated from rpc injective.oracle.v1beta1.Query.BandRelayers
 */
export declare const QueryBandRelayersService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "BandRelayers";
    readonly Request: typeof QueryBandRelayersRequest;
    readonly Response: typeof QueryBandRelayersResponse;
};
/**
 * Retrieves the state for all band price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.BandPriceStates
 */
export declare const QueryBandPriceStatesService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "BandPriceStates";
    readonly Request: typeof QueryBandPriceStatesRequest;
    readonly Response: typeof QueryBandPriceStatesResponse;
};
/**
 * Retrieves the state for all band ibc price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.BandIBCPriceStates
 */
export declare const QueryBandIBCPriceStatesService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "BandIBCPriceStates";
    readonly Request: typeof QueryBandIBCPriceStatesRequest;
    readonly Response: typeof QueryBandIBCPriceStatesResponse;
};
/**
 * Retrieves the state for all price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.PriceFeedPriceStates
 */
export declare const QueryPriceFeedPriceStatesService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "PriceFeedPriceStates";
    readonly Request: typeof QueryPriceFeedPriceStatesRequest;
    readonly Response: typeof QueryPriceFeedPriceStatesResponse;
};
/**
 * Retrieves the state for all coinbase price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.CoinbasePriceStates
 */
export declare const QueryCoinbasePriceStatesService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "CoinbasePriceStates";
    readonly Request: typeof QueryCoinbasePriceStatesRequest;
    readonly Response: typeof QueryCoinbasePriceStatesResponse;
};
/**
 * Retrieves the state for all pyth price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.PythPriceStates
 */
export declare const QueryPythPriceStatesService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "PythPriceStates";
    readonly Request: typeof QueryPythPriceStatesRequest;
    readonly Response: typeof QueryPythPriceStatesResponse;
};
/**
 * Retrieves the state for all provider price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.ProviderPriceState
 */
export declare const QueryProviderPriceStateService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "ProviderPriceState";
    readonly Request: typeof QueryProviderPriceStateRequest;
    readonly Response: typeof QueryProviderPriceStateResponse;
};
/**
 * Retrieves the entire oracle module's state
 *
 * @generated from rpc injective.oracle.v1beta1.Query.OracleModuleState
 */
export declare const QueryOracleModuleStateService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "OracleModuleState";
    readonly Request: typeof QueryModuleStateRequest;
    readonly Response: typeof QueryModuleStateResponse;
};
/**
 * Retrieves historical price records for a given OracleType and Symbol
 *
 * @generated from rpc injective.oracle.v1beta1.Query.HistoricalPriceRecords
 */
export declare const QueryHistoricalPriceRecordsService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "HistoricalPriceRecords";
    readonly Request: typeof QueryHistoricalPriceRecordsRequest;
    readonly Response: typeof QueryHistoricalPriceRecordsResponse;
};
/**
 * Retrieves mixed volatility value for the specified pair of base/quote
 *
 * @generated from rpc injective.oracle.v1beta1.Query.OracleVolatility
 */
export declare const QueryOracleVolatilityService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "OracleVolatility";
    readonly Request: typeof QueryOracleVolatilityRequest;
    readonly Response: typeof QueryOracleVolatilityResponse;
};
/**
 * @generated from rpc injective.oracle.v1beta1.Query.OracleProvidersInfo
 */
export declare const QueryOracleProvidersInfoService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "OracleProvidersInfo";
    readonly Request: typeof QueryOracleProvidersInfoRequest;
    readonly Response: typeof QueryOracleProvidersInfoResponse;
};
/**
 * @generated from rpc injective.oracle.v1beta1.Query.OracleProviderPrices
 */
export declare const QueryOracleProviderPricesService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "OracleProviderPrices";
    readonly Request: typeof QueryOracleProviderPricesRequest;
    readonly Response: typeof QueryOracleProviderPricesResponse;
};
/**
 * @generated from rpc injective.oracle.v1beta1.Query.OraclePrice
 */
export declare const QueryOraclePriceService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "OraclePrice";
    readonly Request: typeof QueryOraclePriceRequest;
    readonly Response: typeof QueryOraclePriceResponse;
};
/**
 * @generated from rpc injective.oracle.v1beta1.Query.PythPrice
 */
export declare const QueryPythPriceService: {
    readonly typeName: "injective.oracle.v1beta1.Query";
    readonly method: "PythPrice";
    readonly Request: typeof QueryPythPriceRequest;
    readonly Response: typeof QueryPythPriceResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map