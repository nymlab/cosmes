import { MitoVaultInfosRequest, MitoVaultInfosResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryExchangeParamsRequest, QueryExchangeParamsResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse } from "./query_pb.js";
/**
 * Retrieves exchange params
 *
 * @generated from rpc injective.exchange.v1beta1.Query.QueryExchangeParams
 */
export declare const QueryQueryExchangeParamsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "QueryExchangeParams";
    readonly Request: typeof QueryExchangeParamsRequest;
    readonly Response: typeof QueryExchangeParamsResponse;
};
/**
 * Retrieves a Subaccount's Deposits
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SubaccountDeposits
 */
export declare const QuerySubaccountDepositsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SubaccountDeposits";
    readonly Request: typeof QuerySubaccountDepositsRequest;
    readonly Response: typeof QuerySubaccountDepositsResponse;
};
/**
 * Retrieves a Subaccount's Deposits
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SubaccountDeposit
 */
export declare const QuerySubaccountDepositService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SubaccountDeposit";
    readonly Request: typeof QuerySubaccountDepositRequest;
    readonly Response: typeof QuerySubaccountDepositResponse;
};
/**
 * Retrieves all of the balances of all users on the exchange.
 *
 * @generated from rpc injective.exchange.v1beta1.Query.ExchangeBalances
 */
export declare const QueryExchangeBalancesService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "ExchangeBalances";
    readonly Request: typeof QueryExchangeBalancesRequest;
    readonly Response: typeof QueryExchangeBalancesResponse;
};
/**
 * Retrieves the aggregate volumes for the specified account or subaccount
 *
 * @generated from rpc injective.exchange.v1beta1.Query.AggregateVolume
 */
export declare const QueryAggregateVolumeService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "AggregateVolume";
    readonly Request: typeof QueryAggregateVolumeRequest;
    readonly Response: typeof QueryAggregateVolumeResponse;
};
/**
 * Retrieves the aggregate volumes for specified accounts
 *
 * @generated from rpc injective.exchange.v1beta1.Query.AggregateVolumes
 */
export declare const QueryAggregateVolumesService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "AggregateVolumes";
    readonly Request: typeof QueryAggregateVolumesRequest;
    readonly Response: typeof QueryAggregateVolumesResponse;
};
/**
 * Retrieves the aggregate volume for the specified market
 *
 * @generated from rpc injective.exchange.v1beta1.Query.AggregateMarketVolume
 */
export declare const QueryAggregateMarketVolumeService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "AggregateMarketVolume";
    readonly Request: typeof QueryAggregateMarketVolumeRequest;
    readonly Response: typeof QueryAggregateMarketVolumeResponse;
};
/**
 * Retrieves the aggregate market volumes for specified markets
 *
 * @generated from rpc injective.exchange.v1beta1.Query.AggregateMarketVolumes
 */
export declare const QueryAggregateMarketVolumesService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "AggregateMarketVolumes";
    readonly Request: typeof QueryAggregateMarketVolumesRequest;
    readonly Response: typeof QueryAggregateMarketVolumesResponse;
};
/**
 * Retrieves the denom decimals for a denom.
 *
 * @generated from rpc injective.exchange.v1beta1.Query.DenomDecimal
 */
export declare const QueryDenomDecimalService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "DenomDecimal";
    readonly Request: typeof QueryDenomDecimalRequest;
    readonly Response: typeof QueryDenomDecimalResponse;
};
/**
 * Retrieves the denom decimals for multiple denoms. Returns all denom
 * decimals if unspecified.
 *
 * @generated from rpc injective.exchange.v1beta1.Query.DenomDecimals
 */
export declare const QueryDenomDecimalsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "DenomDecimals";
    readonly Request: typeof QueryDenomDecimalsRequest;
    readonly Response: typeof QueryDenomDecimalsResponse;
};
/**
 * Retrieves a list of spot markets.
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SpotMarkets
 */
export declare const QuerySpotMarketsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SpotMarkets";
    readonly Request: typeof QuerySpotMarketsRequest;
    readonly Response: typeof QuerySpotMarketsResponse;
};
/**
 * Retrieves a spot market by ticker
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SpotMarket
 */
export declare const QuerySpotMarketService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SpotMarket";
    readonly Request: typeof QuerySpotMarketRequest;
    readonly Response: typeof QuerySpotMarketResponse;
};
/**
 * Retrieves a list of spot markets with extra information.
 *
 * @generated from rpc injective.exchange.v1beta1.Query.FullSpotMarkets
 */
export declare const QueryFullSpotMarketsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "FullSpotMarkets";
    readonly Request: typeof QueryFullSpotMarketsRequest;
    readonly Response: typeof QueryFullSpotMarketsResponse;
};
/**
 * Retrieves a spot market with extra information.
 *
 * @generated from rpc injective.exchange.v1beta1.Query.FullSpotMarket
 */
export declare const QueryFullSpotMarketService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "FullSpotMarket";
    readonly Request: typeof QueryFullSpotMarketRequest;
    readonly Response: typeof QueryFullSpotMarketResponse;
};
/**
 * Retrieves a spot market's orderbook by marketID
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SpotOrderbook
 */
export declare const QuerySpotOrderbookService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SpotOrderbook";
    readonly Request: typeof QuerySpotOrderbookRequest;
    readonly Response: typeof QuerySpotOrderbookResponse;
};
/**
 * Retrieves a trader's spot orders
 *
 * @generated from rpc injective.exchange.v1beta1.Query.TraderSpotOrders
 */
export declare const QueryTraderSpotOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "TraderSpotOrders";
    readonly Request: typeof QueryTraderSpotOrdersRequest;
    readonly Response: typeof QueryTraderSpotOrdersResponse;
};
/**
 * Retrieves all account address spot orders
 *
 * @generated from rpc injective.exchange.v1beta1.Query.AccountAddressSpotOrders
 */
export declare const QueryAccountAddressSpotOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "AccountAddressSpotOrders";
    readonly Request: typeof QueryAccountAddressSpotOrdersRequest;
    readonly Response: typeof QueryAccountAddressSpotOrdersResponse;
};
/**
 * Retrieves spot orders corresponding to specified order hashes for a given
 * subaccountID and marketID
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SpotOrdersByHashes
 */
export declare const QuerySpotOrdersByHashesService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SpotOrdersByHashes";
    readonly Request: typeof QuerySpotOrdersByHashesRequest;
    readonly Response: typeof QuerySpotOrdersByHashesResponse;
};
/**
 * Retrieves subaccount's orders
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SubaccountOrders
 */
export declare const QuerySubaccountOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SubaccountOrders";
    readonly Request: typeof QuerySubaccountOrdersRequest;
    readonly Response: typeof QuerySubaccountOrdersResponse;
};
/**
 * Retrieves a trader's transient spot orders
 *
 * @generated from rpc injective.exchange.v1beta1.Query.TraderSpotTransientOrders
 */
export declare const QueryTraderSpotTransientOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "TraderSpotTransientOrders";
    readonly Request: typeof QueryTraderSpotOrdersRequest;
    readonly Response: typeof QueryTraderSpotOrdersResponse;
};
/**
 * Retrieves a spot market's mid-price
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SpotMidPriceAndTOB
 */
export declare const QuerySpotMidPriceAndTOBService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SpotMidPriceAndTOB";
    readonly Request: typeof QuerySpotMidPriceAndTOBRequest;
    readonly Response: typeof QuerySpotMidPriceAndTOBResponse;
};
/**
 * Retrieves a derivative market's mid-price
 *
 * @generated from rpc injective.exchange.v1beta1.Query.DerivativeMidPriceAndTOB
 */
export declare const QueryDerivativeMidPriceAndTOBService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "DerivativeMidPriceAndTOB";
    readonly Request: typeof QueryDerivativeMidPriceAndTOBRequest;
    readonly Response: typeof QueryDerivativeMidPriceAndTOBResponse;
};
/**
 * Retrieves a derivative market's orderbook by marketID
 *
 * @generated from rpc injective.exchange.v1beta1.Query.DerivativeOrderbook
 */
export declare const QueryDerivativeOrderbookService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "DerivativeOrderbook";
    readonly Request: typeof QueryDerivativeOrderbookRequest;
    readonly Response: typeof QueryDerivativeOrderbookResponse;
};
/**
 * Retrieves a trader's derivative orders
 *
 * @generated from rpc injective.exchange.v1beta1.Query.TraderDerivativeOrders
 */
export declare const QueryTraderDerivativeOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "TraderDerivativeOrders";
    readonly Request: typeof QueryTraderDerivativeOrdersRequest;
    readonly Response: typeof QueryTraderDerivativeOrdersResponse;
};
/**
 * Retrieves all account address derivative orders
 *
 * @generated from rpc injective.exchange.v1beta1.Query.AccountAddressDerivativeOrders
 */
export declare const QueryAccountAddressDerivativeOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "AccountAddressDerivativeOrders";
    readonly Request: typeof QueryAccountAddressDerivativeOrdersRequest;
    readonly Response: typeof QueryAccountAddressDerivativeOrdersResponse;
};
/**
 * Retrieves a trader's derivative orders
 *
 * @generated from rpc injective.exchange.v1beta1.Query.DerivativeOrdersByHashes
 */
export declare const QueryDerivativeOrdersByHashesService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "DerivativeOrdersByHashes";
    readonly Request: typeof QueryDerivativeOrdersByHashesRequest;
    readonly Response: typeof QueryDerivativeOrdersByHashesResponse;
};
/**
 * Retrieves a trader's transient derivative orders
 *
 * @generated from rpc injective.exchange.v1beta1.Query.TraderDerivativeTransientOrders
 */
export declare const QueryTraderDerivativeTransientOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "TraderDerivativeTransientOrders";
    readonly Request: typeof QueryTraderDerivativeOrdersRequest;
    readonly Response: typeof QueryTraderDerivativeOrdersResponse;
};
/**
 * Retrieves a list of derivative markets.
 *
 * @generated from rpc injective.exchange.v1beta1.Query.DerivativeMarkets
 */
export declare const QueryDerivativeMarketsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "DerivativeMarkets";
    readonly Request: typeof QueryDerivativeMarketsRequest;
    readonly Response: typeof QueryDerivativeMarketsResponse;
};
/**
 * Retrieves a derivative market by ticker
 *
 * @generated from rpc injective.exchange.v1beta1.Query.DerivativeMarket
 */
export declare const QueryDerivativeMarketService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "DerivativeMarket";
    readonly Request: typeof QueryDerivativeMarketRequest;
    readonly Response: typeof QueryDerivativeMarketResponse;
};
/**
 * Retrieves a derivative market's corresponding address for fees that
 * contribute to the market's insurance fund
 *
 * @generated from rpc injective.exchange.v1beta1.Query.DerivativeMarketAddress
 */
export declare const QueryDerivativeMarketAddressService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "DerivativeMarketAddress";
    readonly Request: typeof QueryDerivativeMarketAddressRequest;
    readonly Response: typeof QueryDerivativeMarketAddressResponse;
};
/**
 * Retrieves a subaccount's trade nonce
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SubaccountTradeNonce
 */
export declare const QuerySubaccountTradeNonceService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SubaccountTradeNonce";
    readonly Request: typeof QuerySubaccountTradeNonceRequest;
    readonly Response: typeof QuerySubaccountTradeNonceResponse;
};
/**
 * Retrieves the entire exchange module's state
 *
 * @generated from rpc injective.exchange.v1beta1.Query.ExchangeModuleState
 */
export declare const QueryExchangeModuleStateService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "ExchangeModuleState";
    readonly Request: typeof QueryModuleStateRequest;
    readonly Response: typeof QueryModuleStateResponse;
};
/**
 * Retrieves the entire exchange module's positions
 *
 * @generated from rpc injective.exchange.v1beta1.Query.Positions
 */
export declare const QueryPositionsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "Positions";
    readonly Request: typeof QueryPositionsRequest;
    readonly Response: typeof QueryPositionsResponse;
};
/**
 * Retrieves subaccount's positions
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SubaccountPositions
 */
export declare const QuerySubaccountPositionsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SubaccountPositions";
    readonly Request: typeof QuerySubaccountPositionsRequest;
    readonly Response: typeof QuerySubaccountPositionsResponse;
};
/**
 * Retrieves subaccount's position in market
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SubaccountPositionInMarket
 */
export declare const QuerySubaccountPositionInMarketService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SubaccountPositionInMarket";
    readonly Request: typeof QuerySubaccountPositionInMarketRequest;
    readonly Response: typeof QuerySubaccountPositionInMarketResponse;
};
/**
 * Retrieves subaccount's position in market
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SubaccountEffectivePositionInMarket
 */
export declare const QuerySubaccountEffectivePositionInMarketService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SubaccountEffectivePositionInMarket";
    readonly Request: typeof QuerySubaccountEffectivePositionInMarketRequest;
    readonly Response: typeof QuerySubaccountEffectivePositionInMarketResponse;
};
/**
 * Retrieves perpetual market info
 *
 * @generated from rpc injective.exchange.v1beta1.Query.PerpetualMarketInfo
 */
export declare const QueryPerpetualMarketInfoService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "PerpetualMarketInfo";
    readonly Request: typeof QueryPerpetualMarketInfoRequest;
    readonly Response: typeof QueryPerpetualMarketInfoResponse;
};
/**
 * Retrieves expiry market info
 *
 * @generated from rpc injective.exchange.v1beta1.Query.ExpiryFuturesMarketInfo
 */
export declare const QueryExpiryFuturesMarketInfoService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "ExpiryFuturesMarketInfo";
    readonly Request: typeof QueryExpiryFuturesMarketInfoRequest;
    readonly Response: typeof QueryExpiryFuturesMarketInfoResponse;
};
/**
 * Retrieves perpetual market funding
 *
 * @generated from rpc injective.exchange.v1beta1.Query.PerpetualMarketFunding
 */
export declare const QueryPerpetualMarketFundingService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "PerpetualMarketFunding";
    readonly Request: typeof QueryPerpetualMarketFundingRequest;
    readonly Response: typeof QueryPerpetualMarketFundingResponse;
};
/**
 * Retrieves subaccount's order metadata
 *
 * @generated from rpc injective.exchange.v1beta1.Query.SubaccountOrderMetadata
 */
export declare const QuerySubaccountOrderMetadataService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "SubaccountOrderMetadata";
    readonly Request: typeof QuerySubaccountOrderMetadataRequest;
    readonly Response: typeof QuerySubaccountOrderMetadataResponse;
};
/**
 * Retrieves the account and total trade rewards points
 *
 * @generated from rpc injective.exchange.v1beta1.Query.TradeRewardPoints
 */
export declare const QueryTradeRewardPointsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "TradeRewardPoints";
    readonly Request: typeof QueryTradeRewardPointsRequest;
    readonly Response: typeof QueryTradeRewardPointsResponse;
};
/**
 * Retrieves the pending account and total trade rewards points
 *
 * @generated from rpc injective.exchange.v1beta1.Query.PendingTradeRewardPoints
 */
export declare const QueryPendingTradeRewardPointsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "PendingTradeRewardPoints";
    readonly Request: typeof QueryTradeRewardPointsRequest;
    readonly Response: typeof QueryTradeRewardPointsResponse;
};
/**
 * Retrieves the trade reward campaign
 *
 * @generated from rpc injective.exchange.v1beta1.Query.TradeRewardCampaign
 */
export declare const QueryTradeRewardCampaignService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "TradeRewardCampaign";
    readonly Request: typeof QueryTradeRewardCampaignRequest;
    readonly Response: typeof QueryTradeRewardCampaignResponse;
};
/**
 * Retrieves the account's fee discount info
 *
 * @generated from rpc injective.exchange.v1beta1.Query.FeeDiscountAccountInfo
 */
export declare const QueryFeeDiscountAccountInfoService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "FeeDiscountAccountInfo";
    readonly Request: typeof QueryFeeDiscountAccountInfoRequest;
    readonly Response: typeof QueryFeeDiscountAccountInfoResponse;
};
/**
 * Retrieves the fee discount schedule
 *
 * @generated from rpc injective.exchange.v1beta1.Query.FeeDiscountSchedule
 */
export declare const QueryFeeDiscountScheduleService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "FeeDiscountSchedule";
    readonly Request: typeof QueryFeeDiscountScheduleRequest;
    readonly Response: typeof QueryFeeDiscountScheduleResponse;
};
/**
 * Retrieves mismatches between available vs. total balance
 *
 * @generated from rpc injective.exchange.v1beta1.Query.BalanceMismatches
 */
export declare const QueryBalanceMismatchesService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "BalanceMismatches";
    readonly Request: typeof QueryBalanceMismatchesRequest;
    readonly Response: typeof QueryBalanceMismatchesResponse;
};
/**
 * Retrieves available and total balances with balance holds
 *
 * @generated from rpc injective.exchange.v1beta1.Query.BalanceWithBalanceHolds
 */
export declare const QueryBalanceWithBalanceHoldsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "BalanceWithBalanceHolds";
    readonly Request: typeof QueryBalanceWithBalanceHoldsRequest;
    readonly Response: typeof QueryBalanceWithBalanceHoldsResponse;
};
/**
 * Retrieves fee discount tier stats
 *
 * @generated from rpc injective.exchange.v1beta1.Query.FeeDiscountTierStatistics
 */
export declare const QueryFeeDiscountTierStatisticsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "FeeDiscountTierStatistics";
    readonly Request: typeof QueryFeeDiscountTierStatisticsRequest;
    readonly Response: typeof QueryFeeDiscountTierStatisticsResponse;
};
/**
 * Retrieves market making pool info
 *
 * @generated from rpc injective.exchange.v1beta1.Query.MitoVaultInfos
 */
export declare const QueryMitoVaultInfosService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "MitoVaultInfos";
    readonly Request: typeof MitoVaultInfosRequest;
    readonly Response: typeof MitoVaultInfosResponse;
};
/**
 * QueryMarketIDFromVault returns the market ID for a given vault subaccount
 * ID
 *
 * @generated from rpc injective.exchange.v1beta1.Query.QueryMarketIDFromVault
 */
export declare const QueryQueryMarketIDFromVaultService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "QueryMarketIDFromVault";
    readonly Request: typeof QueryMarketIDFromVaultRequest;
    readonly Response: typeof QueryMarketIDFromVaultResponse;
};
/**
 * Retrieves historical trade records for a given market ID
 *
 * @generated from rpc injective.exchange.v1beta1.Query.HistoricalTradeRecords
 */
export declare const QueryHistoricalTradeRecordsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "HistoricalTradeRecords";
    readonly Request: typeof QueryHistoricalTradeRecordsRequest;
    readonly Response: typeof QueryHistoricalTradeRecordsResponse;
};
/**
 * Retrieves if the account is opted out of rewards
 *
 * @generated from rpc injective.exchange.v1beta1.Query.IsOptedOutOfRewards
 */
export declare const QueryIsOptedOutOfRewardsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "IsOptedOutOfRewards";
    readonly Request: typeof QueryIsOptedOutOfRewardsRequest;
    readonly Response: typeof QueryIsOptedOutOfRewardsResponse;
};
/**
 * Retrieves all accounts opted out of rewards
 *
 * @generated from rpc injective.exchange.v1beta1.Query.OptedOutOfRewardsAccounts
 */
export declare const QueryOptedOutOfRewardsAccountsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "OptedOutOfRewardsAccounts";
    readonly Request: typeof QueryOptedOutOfRewardsAccountsRequest;
    readonly Response: typeof QueryOptedOutOfRewardsAccountsResponse;
};
/**
 * MarketVolatility computes the volatility for spot and derivative markets
 * trading history.
 *
 * @generated from rpc injective.exchange.v1beta1.Query.MarketVolatility
 */
export declare const QueryMarketVolatilityService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "MarketVolatility";
    readonly Request: typeof QueryMarketVolatilityRequest;
    readonly Response: typeof QueryMarketVolatilityResponse;
};
/**
 * Retrieves a spot market's orderbook by marketID
 *
 * @generated from rpc injective.exchange.v1beta1.Query.BinaryOptionsMarkets
 */
export declare const QueryBinaryOptionsMarketsService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "BinaryOptionsMarkets";
    readonly Request: typeof QueryBinaryMarketsRequest;
    readonly Response: typeof QueryBinaryMarketsResponse;
};
/**
 * Retrieves a trader's derivative conditional orders
 *
 * @generated from rpc injective.exchange.v1beta1.Query.TraderDerivativeConditionalOrders
 */
export declare const QueryTraderDerivativeConditionalOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "TraderDerivativeConditionalOrders";
    readonly Request: typeof QueryTraderDerivativeConditionalOrdersRequest;
    readonly Response: typeof QueryTraderDerivativeConditionalOrdersResponse;
};
/**
 * @generated from rpc injective.exchange.v1beta1.Query.MarketAtomicExecutionFeeMultiplier
 */
export declare const QueryMarketAtomicExecutionFeeMultiplierService: {
    readonly typeName: "injective.exchange.v1beta1.Query";
    readonly method: "MarketAtomicExecutionFeeMultiplier";
    readonly Request: typeof QueryMarketAtomicExecutionFeeMultiplierRequest;
    readonly Response: typeof QueryMarketAtomicExecutionFeeMultiplierResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map