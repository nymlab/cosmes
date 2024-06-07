import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * spot authz messages
 *
 * @generated from message injective.exchange.v1beta1.CreateSpotLimitOrderAuthz
 */
export declare class CreateSpotLimitOrderAuthz extends Message<CreateSpotLimitOrderAuthz> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<CreateSpotLimitOrderAuthz>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.CreateSpotLimitOrderAuthz";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSpotLimitOrderAuthz;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSpotLimitOrderAuthz;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSpotLimitOrderAuthz;
    static equals(a: CreateSpotLimitOrderAuthz | PlainMessage<CreateSpotLimitOrderAuthz> | undefined, b: CreateSpotLimitOrderAuthz | PlainMessage<CreateSpotLimitOrderAuthz> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.CreateSpotMarketOrderAuthz
 */
export declare class CreateSpotMarketOrderAuthz extends Message<CreateSpotMarketOrderAuthz> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<CreateSpotMarketOrderAuthz>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.CreateSpotMarketOrderAuthz";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSpotMarketOrderAuthz;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSpotMarketOrderAuthz;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSpotMarketOrderAuthz;
    static equals(a: CreateSpotMarketOrderAuthz | PlainMessage<CreateSpotMarketOrderAuthz> | undefined, b: CreateSpotMarketOrderAuthz | PlainMessage<CreateSpotMarketOrderAuthz> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz
 */
export declare class BatchCreateSpotLimitOrdersAuthz extends Message<BatchCreateSpotLimitOrdersAuthz> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<BatchCreateSpotLimitOrdersAuthz>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchCreateSpotLimitOrdersAuthz;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchCreateSpotLimitOrdersAuthz;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchCreateSpotLimitOrdersAuthz;
    static equals(a: BatchCreateSpotLimitOrdersAuthz | PlainMessage<BatchCreateSpotLimitOrdersAuthz> | undefined, b: BatchCreateSpotLimitOrdersAuthz | PlainMessage<BatchCreateSpotLimitOrdersAuthz> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.CancelSpotOrderAuthz
 */
export declare class CancelSpotOrderAuthz extends Message<CancelSpotOrderAuthz> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<CancelSpotOrderAuthz>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.CancelSpotOrderAuthz";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CancelSpotOrderAuthz;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CancelSpotOrderAuthz;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CancelSpotOrderAuthz;
    static equals(a: CancelSpotOrderAuthz | PlainMessage<CancelSpotOrderAuthz> | undefined, b: CancelSpotOrderAuthz | PlainMessage<CancelSpotOrderAuthz> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz
 */
export declare class BatchCancelSpotOrdersAuthz extends Message<BatchCancelSpotOrdersAuthz> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<BatchCancelSpotOrdersAuthz>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchCancelSpotOrdersAuthz;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchCancelSpotOrdersAuthz;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchCancelSpotOrdersAuthz;
    static equals(a: BatchCancelSpotOrdersAuthz | PlainMessage<BatchCancelSpotOrdersAuthz> | undefined, b: BatchCancelSpotOrdersAuthz | PlainMessage<BatchCancelSpotOrdersAuthz> | undefined): boolean;
}
/**
 * derivative authz messages
 *
 * @generated from message injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz
 */
export declare class CreateDerivativeLimitOrderAuthz extends Message<CreateDerivativeLimitOrderAuthz> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<CreateDerivativeLimitOrderAuthz>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDerivativeLimitOrderAuthz;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDerivativeLimitOrderAuthz;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDerivativeLimitOrderAuthz;
    static equals(a: CreateDerivativeLimitOrderAuthz | PlainMessage<CreateDerivativeLimitOrderAuthz> | undefined, b: CreateDerivativeLimitOrderAuthz | PlainMessage<CreateDerivativeLimitOrderAuthz> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz
 */
export declare class CreateDerivativeMarketOrderAuthz extends Message<CreateDerivativeMarketOrderAuthz> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<CreateDerivativeMarketOrderAuthz>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDerivativeMarketOrderAuthz;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDerivativeMarketOrderAuthz;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDerivativeMarketOrderAuthz;
    static equals(a: CreateDerivativeMarketOrderAuthz | PlainMessage<CreateDerivativeMarketOrderAuthz> | undefined, b: CreateDerivativeMarketOrderAuthz | PlainMessage<CreateDerivativeMarketOrderAuthz> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz
 */
export declare class BatchCreateDerivativeLimitOrdersAuthz extends Message<BatchCreateDerivativeLimitOrdersAuthz> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<BatchCreateDerivativeLimitOrdersAuthz>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchCreateDerivativeLimitOrdersAuthz;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchCreateDerivativeLimitOrdersAuthz;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchCreateDerivativeLimitOrdersAuthz;
    static equals(a: BatchCreateDerivativeLimitOrdersAuthz | PlainMessage<BatchCreateDerivativeLimitOrdersAuthz> | undefined, b: BatchCreateDerivativeLimitOrdersAuthz | PlainMessage<BatchCreateDerivativeLimitOrdersAuthz> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.CancelDerivativeOrderAuthz
 */
export declare class CancelDerivativeOrderAuthz extends Message<CancelDerivativeOrderAuthz> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<CancelDerivativeOrderAuthz>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.CancelDerivativeOrderAuthz";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CancelDerivativeOrderAuthz;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CancelDerivativeOrderAuthz;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CancelDerivativeOrderAuthz;
    static equals(a: CancelDerivativeOrderAuthz | PlainMessage<CancelDerivativeOrderAuthz> | undefined, b: CancelDerivativeOrderAuthz | PlainMessage<CancelDerivativeOrderAuthz> | undefined): boolean;
}
/**
 * @generated from message injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz
 */
export declare class BatchCancelDerivativeOrdersAuthz extends Message<BatchCancelDerivativeOrdersAuthz> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated string market_ids = 2;
     */
    marketIds: string[];
    constructor(data?: PartialMessage<BatchCancelDerivativeOrdersAuthz>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchCancelDerivativeOrdersAuthz;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchCancelDerivativeOrdersAuthz;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchCancelDerivativeOrdersAuthz;
    static equals(a: BatchCancelDerivativeOrdersAuthz | PlainMessage<BatchCancelDerivativeOrdersAuthz> | undefined, b: BatchCancelDerivativeOrdersAuthz | PlainMessage<BatchCancelDerivativeOrdersAuthz> | undefined): boolean;
}
/**
 * common authz message used in both spot & derivative markets
 *
 * @generated from message injective.exchange.v1beta1.BatchUpdateOrdersAuthz
 */
export declare class BatchUpdateOrdersAuthz extends Message<BatchUpdateOrdersAuthz> {
    /**
     * @generated from field: string subaccount_id = 1;
     */
    subaccountId: string;
    /**
     * @generated from field: repeated string spot_markets = 2;
     */
    spotMarkets: string[];
    /**
     * @generated from field: repeated string derivative_markets = 3;
     */
    derivativeMarkets: string[];
    constructor(data?: PartialMessage<BatchUpdateOrdersAuthz>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.exchange.v1beta1.BatchUpdateOrdersAuthz";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchUpdateOrdersAuthz;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchUpdateOrdersAuthz;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchUpdateOrdersAuthz;
    static equals(a: BatchUpdateOrdersAuthz | PlainMessage<BatchUpdateOrdersAuthz> | undefined, b: BatchUpdateOrdersAuthz | PlainMessage<BatchUpdateOrdersAuthz> | undefined): boolean;
}
//# sourceMappingURL=authz_pb.d.ts.map