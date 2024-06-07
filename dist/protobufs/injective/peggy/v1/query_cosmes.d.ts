import { MissingNoncesRequest, MissingNoncesResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryParamsRequest, QueryParamsResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryValsetRequestRequest, QueryValsetRequestResponse } from "./query_pb.js";
/**
 * Deployments queries deployments
 *
 * @generated from rpc injective.peggy.v1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * valset
 *
 * @generated from rpc injective.peggy.v1.Query.CurrentValset
 */
export declare const QueryCurrentValsetService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "CurrentValset";
    readonly Request: typeof QueryCurrentValsetRequest;
    readonly Response: typeof QueryCurrentValsetResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.ValsetRequest
 */
export declare const QueryValsetRequestService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "ValsetRequest";
    readonly Request: typeof QueryValsetRequestRequest;
    readonly Response: typeof QueryValsetRequestResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.ValsetConfirm
 */
export declare const QueryValsetConfirmService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "ValsetConfirm";
    readonly Request: typeof QueryValsetConfirmRequest;
    readonly Response: typeof QueryValsetConfirmResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.ValsetConfirmsByNonce
 */
export declare const QueryValsetConfirmsByNonceService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "ValsetConfirmsByNonce";
    readonly Request: typeof QueryValsetConfirmsByNonceRequest;
    readonly Response: typeof QueryValsetConfirmsByNonceResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.LastValsetRequests
 */
export declare const QueryLastValsetRequestsService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "LastValsetRequests";
    readonly Request: typeof QueryLastValsetRequestsRequest;
    readonly Response: typeof QueryLastValsetRequestsResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.LastPendingValsetRequestByAddr
 */
export declare const QueryLastPendingValsetRequestByAddrService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "LastPendingValsetRequestByAddr";
    readonly Request: typeof QueryLastPendingValsetRequestByAddrRequest;
    readonly Response: typeof QueryLastPendingValsetRequestByAddrResponse;
};
/**
 * claim
 *
 * @generated from rpc injective.peggy.v1.Query.LastEventByAddr
 */
export declare const QueryLastEventByAddrService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "LastEventByAddr";
    readonly Request: typeof QueryLastEventByAddrRequest;
    readonly Response: typeof QueryLastEventByAddrResponse;
};
/**
 * batch
 *
 * @generated from rpc injective.peggy.v1.Query.GetPendingSendToEth
 */
export declare const QueryGetPendingSendToEthService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "GetPendingSendToEth";
    readonly Request: typeof QueryPendingSendToEth;
    readonly Response: typeof QueryPendingSendToEthResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.BatchFees
 */
export declare const QueryBatchFeesService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "BatchFees";
    readonly Request: typeof QueryBatchFeeRequest;
    readonly Response: typeof QueryBatchFeeResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.OutgoingTxBatches
 */
export declare const QueryOutgoingTxBatchesService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "OutgoingTxBatches";
    readonly Request: typeof QueryOutgoingTxBatchesRequest;
    readonly Response: typeof QueryOutgoingTxBatchesResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.LastPendingBatchRequestByAddr
 */
export declare const QueryLastPendingBatchRequestByAddrService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "LastPendingBatchRequestByAddr";
    readonly Request: typeof QueryLastPendingBatchRequestByAddrRequest;
    readonly Response: typeof QueryLastPendingBatchRequestByAddrResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.BatchRequestByNonce
 */
export declare const QueryBatchRequestByNonceService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "BatchRequestByNonce";
    readonly Request: typeof QueryBatchRequestByNonceRequest;
    readonly Response: typeof QueryBatchRequestByNonceResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.BatchConfirms
 */
export declare const QueryBatchConfirmsService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "BatchConfirms";
    readonly Request: typeof QueryBatchConfirmsRequest;
    readonly Response: typeof QueryBatchConfirmsResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.ERC20ToDenom
 */
export declare const QueryERC20ToDenomService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "ERC20ToDenom";
    readonly Request: typeof QueryERC20ToDenomRequest;
    readonly Response: typeof QueryERC20ToDenomResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.DenomToERC20
 */
export declare const QueryDenomToERC20Service: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "DenomToERC20";
    readonly Request: typeof QueryDenomToERC20Request;
    readonly Response: typeof QueryDenomToERC20Response;
};
/**
 * @generated from rpc injective.peggy.v1.Query.GetDelegateKeyByValidator
 */
export declare const QueryGetDelegateKeyByValidatorService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "GetDelegateKeyByValidator";
    readonly Request: typeof QueryDelegateKeysByValidatorAddress;
    readonly Response: typeof QueryDelegateKeysByValidatorAddressResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.GetDelegateKeyByEth
 */
export declare const QueryGetDelegateKeyByEthService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "GetDelegateKeyByEth";
    readonly Request: typeof QueryDelegateKeysByEthAddress;
    readonly Response: typeof QueryDelegateKeysByEthAddressResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.GetDelegateKeyByOrchestrator
 */
export declare const QueryGetDelegateKeyByOrchestratorService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "GetDelegateKeyByOrchestrator";
    readonly Request: typeof QueryDelegateKeysByOrchestratorAddress;
    readonly Response: typeof QueryDelegateKeysByOrchestratorAddressResponse;
};
/**
 * Retrieves the entire peggy module's state
 *
 * @generated from rpc injective.peggy.v1.Query.PeggyModuleState
 */
export declare const QueryPeggyModuleStateService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "PeggyModuleState";
    readonly Request: typeof QueryModuleStateRequest;
    readonly Response: typeof QueryModuleStateResponse;
};
/**
 * @generated from rpc injective.peggy.v1.Query.MissingPeggoNonces
 */
export declare const QueryMissingPeggoNoncesService: {
    readonly typeName: "injective.peggy.v1.Query";
    readonly method: "MissingPeggoNonces";
    readonly Request: typeof MissingNoncesRequest;
    readonly Response: typeof MissingNoncesResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map