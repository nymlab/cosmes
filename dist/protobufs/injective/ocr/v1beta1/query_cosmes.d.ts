import { QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * @generated from rpc injective.ocr.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "injective.ocr.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * Retrieves the OCR FeedConfig for a given FeedId
 *
 * @generated from rpc injective.ocr.v1beta1.Query.FeedConfig
 */
export declare const QueryFeedConfigService: {
    readonly typeName: "injective.ocr.v1beta1.Query";
    readonly method: "FeedConfig";
    readonly Request: typeof QueryFeedConfigRequest;
    readonly Response: typeof QueryFeedConfigResponse;
};
/**
 * Retrieves the OCR FeedConfigInfo for a given FeedId
 *
 * @generated from rpc injective.ocr.v1beta1.Query.FeedConfigInfo
 */
export declare const QueryFeedConfigInfoService: {
    readonly typeName: "injective.ocr.v1beta1.Query";
    readonly method: "FeedConfigInfo";
    readonly Request: typeof QueryFeedConfigInfoRequest;
    readonly Response: typeof QueryFeedConfigInfoResponse;
};
/**
 * Retrieves latest round ID and data, including median answer for that round
 *
 * @generated from rpc injective.ocr.v1beta1.Query.LatestRound
 */
export declare const QueryLatestRoundService: {
    readonly typeName: "injective.ocr.v1beta1.Query";
    readonly method: "LatestRound";
    readonly Request: typeof QueryLatestRoundRequest;
    readonly Response: typeof QueryLatestRoundResponse;
};
/**
 * LatestTransmissionDetails returns details about the latest trasmission
 * recorded on chain for the given feed ID.
 *
 * @generated from rpc injective.ocr.v1beta1.Query.LatestTransmissionDetails
 */
export declare const QueryLatestTransmissionDetailsService: {
    readonly typeName: "injective.ocr.v1beta1.Query";
    readonly method: "LatestTransmissionDetails";
    readonly Request: typeof QueryLatestTransmissionDetailsRequest;
    readonly Response: typeof QueryLatestTransmissionDetailsResponse;
};
/**
 * Retrieves transmitter's owed amount
 *
 * @generated from rpc injective.ocr.v1beta1.Query.OwedAmount
 */
export declare const QueryOwedAmountService: {
    readonly typeName: "injective.ocr.v1beta1.Query";
    readonly method: "OwedAmount";
    readonly Request: typeof QueryOwedAmountRequest;
    readonly Response: typeof QueryOwedAmountResponse;
};
/**
 * Retrieves the entire OCR module's state
 *
 * @generated from rpc injective.ocr.v1beta1.Query.OcrModuleState
 */
export declare const QueryOcrModuleStateService: {
    readonly typeName: "injective.ocr.v1beta1.Query";
    readonly method: "OcrModuleState";
    readonly Request: typeof QueryModuleStateRequest;
    readonly Response: typeof QueryModuleStateResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map