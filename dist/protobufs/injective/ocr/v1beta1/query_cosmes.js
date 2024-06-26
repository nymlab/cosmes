// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file injective/ocr/v1beta1/query.proto (package injective.ocr.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
const TYPE_NAME = "injective.ocr.v1beta1.Query";
/**
 * @generated from rpc injective.ocr.v1beta1.Query.Params
 */
export const QueryParamsService = {
    typeName: TYPE_NAME,
    method: "Params",
    Request: QueryParamsRequest,
    Response: QueryParamsResponse,
};
/**
 * Retrieves the OCR FeedConfig for a given FeedId
 *
 * @generated from rpc injective.ocr.v1beta1.Query.FeedConfig
 */
export const QueryFeedConfigService = {
    typeName: TYPE_NAME,
    method: "FeedConfig",
    Request: QueryFeedConfigRequest,
    Response: QueryFeedConfigResponse,
};
/**
 * Retrieves the OCR FeedConfigInfo for a given FeedId
 *
 * @generated from rpc injective.ocr.v1beta1.Query.FeedConfigInfo
 */
export const QueryFeedConfigInfoService = {
    typeName: TYPE_NAME,
    method: "FeedConfigInfo",
    Request: QueryFeedConfigInfoRequest,
    Response: QueryFeedConfigInfoResponse,
};
/**
 * Retrieves latest round ID and data, including median answer for that round
 *
 * @generated from rpc injective.ocr.v1beta1.Query.LatestRound
 */
export const QueryLatestRoundService = {
    typeName: TYPE_NAME,
    method: "LatestRound",
    Request: QueryLatestRoundRequest,
    Response: QueryLatestRoundResponse,
};
/**
 * LatestTransmissionDetails returns details about the latest trasmission
 * recorded on chain for the given feed ID.
 *
 * @generated from rpc injective.ocr.v1beta1.Query.LatestTransmissionDetails
 */
export const QueryLatestTransmissionDetailsService = {
    typeName: TYPE_NAME,
    method: "LatestTransmissionDetails",
    Request: QueryLatestTransmissionDetailsRequest,
    Response: QueryLatestTransmissionDetailsResponse,
};
/**
 * Retrieves transmitter's owed amount
 *
 * @generated from rpc injective.ocr.v1beta1.Query.OwedAmount
 */
export const QueryOwedAmountService = {
    typeName: TYPE_NAME,
    method: "OwedAmount",
    Request: QueryOwedAmountRequest,
    Response: QueryOwedAmountResponse,
};
/**
 * Retrieves the entire OCR module's state
 *
 * @generated from rpc injective.ocr.v1beta1.Query.OcrModuleState
 */
export const QueryOcrModuleStateService = {
    typeName: TYPE_NAME,
    method: "OcrModuleState",
    Request: QueryModuleStateRequest,
    Response: QueryModuleStateResponse,
};
//# sourceMappingURL=query_cosmes.js.map