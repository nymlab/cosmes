import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { InsuranceFund, Params } from "./insurance_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { GenesisState } from "./genesis_pb.js";
/**
 * QueryInsuranceParamsRequest is the request type for the Query/InsuranceParams
 * RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryInsuranceParamsRequest
 */
export declare class QueryInsuranceParamsRequest extends Message<QueryInsuranceParamsRequest> {
    constructor(data?: PartialMessage<QueryInsuranceParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.QueryInsuranceParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInsuranceParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInsuranceParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInsuranceParamsRequest;
    static equals(a: QueryInsuranceParamsRequest | PlainMessage<QueryInsuranceParamsRequest> | undefined, b: QueryInsuranceParamsRequest | PlainMessage<QueryInsuranceParamsRequest> | undefined): boolean;
}
/**
 * QueryInsuranceParamsRequest is the response type for the
 * Query/InsuranceParams RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryInsuranceParamsResponse
 */
export declare class QueryInsuranceParamsResponse extends Message<QueryInsuranceParamsResponse> {
    /**
     * @generated from field: injective.insurance.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryInsuranceParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.QueryInsuranceParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInsuranceParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInsuranceParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInsuranceParamsResponse;
    static equals(a: QueryInsuranceParamsResponse | PlainMessage<QueryInsuranceParamsResponse> | undefined, b: QueryInsuranceParamsResponse | PlainMessage<QueryInsuranceParamsResponse> | undefined): boolean;
}
/**
 * QueryInsuranceFundRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryInsuranceFundRequest
 */
export declare class QueryInsuranceFundRequest extends Message<QueryInsuranceFundRequest> {
    /**
     * Market ID for the market
     *
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    constructor(data?: PartialMessage<QueryInsuranceFundRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.QueryInsuranceFundRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInsuranceFundRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInsuranceFundRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInsuranceFundRequest;
    static equals(a: QueryInsuranceFundRequest | PlainMessage<QueryInsuranceFundRequest> | undefined, b: QueryInsuranceFundRequest | PlainMessage<QueryInsuranceFundRequest> | undefined): boolean;
}
/**
 * QueryInsuranceFundResponse is the response type for the Query/InsuranceFund
 * RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryInsuranceFundResponse
 */
export declare class QueryInsuranceFundResponse extends Message<QueryInsuranceFundResponse> {
    /**
     * @generated from field: injective.insurance.v1beta1.InsuranceFund fund = 1;
     */
    fund?: InsuranceFund;
    constructor(data?: PartialMessage<QueryInsuranceFundResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.QueryInsuranceFundResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInsuranceFundResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInsuranceFundResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInsuranceFundResponse;
    static equals(a: QueryInsuranceFundResponse | PlainMessage<QueryInsuranceFundResponse> | undefined, b: QueryInsuranceFundResponse | PlainMessage<QueryInsuranceFundResponse> | undefined): boolean;
}
/**
 * QueryInsuranceFundsRequest is the request type for the Query/InsuranceFunds
 * RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryInsuranceFundsRequest
 */
export declare class QueryInsuranceFundsRequest extends Message<QueryInsuranceFundsRequest> {
    constructor(data?: PartialMessage<QueryInsuranceFundsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.QueryInsuranceFundsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInsuranceFundsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInsuranceFundsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInsuranceFundsRequest;
    static equals(a: QueryInsuranceFundsRequest | PlainMessage<QueryInsuranceFundsRequest> | undefined, b: QueryInsuranceFundsRequest | PlainMessage<QueryInsuranceFundsRequest> | undefined): boolean;
}
/**
 * QueryInsuranceFundsResponse is the response type for the Query/InsuranceFunds
 * RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryInsuranceFundsResponse
 */
export declare class QueryInsuranceFundsResponse extends Message<QueryInsuranceFundsResponse> {
    /**
     * @generated from field: repeated injective.insurance.v1beta1.InsuranceFund funds = 1;
     */
    funds: InsuranceFund[];
    constructor(data?: PartialMessage<QueryInsuranceFundsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.QueryInsuranceFundsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInsuranceFundsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInsuranceFundsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInsuranceFundsResponse;
    static equals(a: QueryInsuranceFundsResponse | PlainMessage<QueryInsuranceFundsResponse> | undefined, b: QueryInsuranceFundsResponse | PlainMessage<QueryInsuranceFundsResponse> | undefined): boolean;
}
/**
 * QueryEstimatedRedemptionsRequest is the request type for the
 * Query/EstimatedRedemptions RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest
 */
export declare class QueryEstimatedRedemptionsRequest extends Message<QueryEstimatedRedemptionsRequest> {
    /**
     * @generated from field: string marketId = 1;
     */
    marketId: string;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<QueryEstimatedRedemptionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.QueryEstimatedRedemptionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEstimatedRedemptionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEstimatedRedemptionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEstimatedRedemptionsRequest;
    static equals(a: QueryEstimatedRedemptionsRequest | PlainMessage<QueryEstimatedRedemptionsRequest> | undefined, b: QueryEstimatedRedemptionsRequest | PlainMessage<QueryEstimatedRedemptionsRequest> | undefined): boolean;
}
/**
 * QueryEstimatedRedemptionsResponse is the response type for the
 * Query/EstimatedRedemptions RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse
 */
export declare class QueryEstimatedRedemptionsResponse extends Message<QueryEstimatedRedemptionsResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<QueryEstimatedRedemptionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.QueryEstimatedRedemptionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEstimatedRedemptionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEstimatedRedemptionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEstimatedRedemptionsResponse;
    static equals(a: QueryEstimatedRedemptionsResponse | PlainMessage<QueryEstimatedRedemptionsResponse> | undefined, b: QueryEstimatedRedemptionsResponse | PlainMessage<QueryEstimatedRedemptionsResponse> | undefined): boolean;
}
/**
 * QueryPendingRedemptionsRequest is the request type for the
 * Query/PendingRedemptions RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryPendingRedemptionsRequest
 */
export declare class QueryPendingRedemptionsRequest extends Message<QueryPendingRedemptionsRequest> {
    /**
     * @generated from field: string marketId = 1;
     */
    marketId: string;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<QueryPendingRedemptionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.QueryPendingRedemptionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPendingRedemptionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPendingRedemptionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPendingRedemptionsRequest;
    static equals(a: QueryPendingRedemptionsRequest | PlainMessage<QueryPendingRedemptionsRequest> | undefined, b: QueryPendingRedemptionsRequest | PlainMessage<QueryPendingRedemptionsRequest> | undefined): boolean;
}
/**
 * QueryPendingRedemptionsResponse is the response type for the
 * Query/PendingRedemptions RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryPendingRedemptionsResponse
 */
export declare class QueryPendingRedemptionsResponse extends Message<QueryPendingRedemptionsResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<QueryPendingRedemptionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.QueryPendingRedemptionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPendingRedemptionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPendingRedemptionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPendingRedemptionsResponse;
    static equals(a: QueryPendingRedemptionsResponse | PlainMessage<QueryPendingRedemptionsResponse> | undefined, b: QueryPendingRedemptionsResponse | PlainMessage<QueryPendingRedemptionsResponse> | undefined): boolean;
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/InsuranceModuleState RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryModuleStateRequest
 */
export declare class QueryModuleStateRequest extends Message<QueryModuleStateRequest> {
    constructor(data?: PartialMessage<QueryModuleStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.QueryModuleStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateRequest;
    static equals(a: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined, b: QueryModuleStateRequest | PlainMessage<QueryModuleStateRequest> | undefined): boolean;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/InsuranceModuleState RPC method.
 *
 * @generated from message injective.insurance.v1beta1.QueryModuleStateResponse
 */
export declare class QueryModuleStateResponse extends Message<QueryModuleStateResponse> {
    /**
     * @generated from field: injective.insurance.v1beta1.GenesisState state = 1;
     */
    state?: GenesisState;
    constructor(data?: PartialMessage<QueryModuleStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.QueryModuleStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryModuleStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryModuleStateResponse;
    static equals(a: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined, b: QueryModuleStateResponse | PlainMessage<QueryModuleStateResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map