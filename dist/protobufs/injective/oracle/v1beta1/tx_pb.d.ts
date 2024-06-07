import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params, PriceAttestation } from "./oracle_pb.js";
/**
 * MsgRelayProviderPrice defines a SDK message for setting a price through the
 * provider oracle.
 *
 * @generated from message injective.oracle.v1beta1.MsgRelayProviderPrices
 */
export declare class MsgRelayProviderPrices extends Message<MsgRelayProviderPrices> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string provider = 2;
     */
    provider: string;
    /**
     * @generated from field: repeated string symbols = 3;
     */
    symbols: string[];
    /**
     * @generated from field: repeated string prices = 4;
     */
    prices: string[];
    constructor(data?: PartialMessage<MsgRelayProviderPrices>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgRelayProviderPrices";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRelayProviderPrices;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRelayProviderPrices;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRelayProviderPrices;
    static equals(a: MsgRelayProviderPrices | PlainMessage<MsgRelayProviderPrices> | undefined, b: MsgRelayProviderPrices | PlainMessage<MsgRelayProviderPrices> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.MsgRelayProviderPricesResponse
 */
export declare class MsgRelayProviderPricesResponse extends Message<MsgRelayProviderPricesResponse> {
    constructor(data?: PartialMessage<MsgRelayProviderPricesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgRelayProviderPricesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRelayProviderPricesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRelayProviderPricesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRelayProviderPricesResponse;
    static equals(a: MsgRelayProviderPricesResponse | PlainMessage<MsgRelayProviderPricesResponse> | undefined, b: MsgRelayProviderPricesResponse | PlainMessage<MsgRelayProviderPricesResponse> | undefined): boolean;
}
/**
 * MsgRelayPriceFeedPrice defines a SDK message for setting a price through the
 * pricefeed oracle.
 *
 * @generated from message injective.oracle.v1beta1.MsgRelayPriceFeedPrice
 */
export declare class MsgRelayPriceFeedPrice extends Message<MsgRelayPriceFeedPrice> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated string base = 2;
     */
    base: string[];
    /**
     * @generated from field: repeated string quote = 3;
     */
    quote: string[];
    /**
     * price defines the price of the oracle base and quote
     *
     * @generated from field: repeated string price = 4;
     */
    price: string[];
    constructor(data?: PartialMessage<MsgRelayPriceFeedPrice>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgRelayPriceFeedPrice";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRelayPriceFeedPrice;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRelayPriceFeedPrice;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRelayPriceFeedPrice;
    static equals(a: MsgRelayPriceFeedPrice | PlainMessage<MsgRelayPriceFeedPrice> | undefined, b: MsgRelayPriceFeedPrice | PlainMessage<MsgRelayPriceFeedPrice> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse
 */
export declare class MsgRelayPriceFeedPriceResponse extends Message<MsgRelayPriceFeedPriceResponse> {
    constructor(data?: PartialMessage<MsgRelayPriceFeedPriceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRelayPriceFeedPriceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRelayPriceFeedPriceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRelayPriceFeedPriceResponse;
    static equals(a: MsgRelayPriceFeedPriceResponse | PlainMessage<MsgRelayPriceFeedPriceResponse> | undefined, b: MsgRelayPriceFeedPriceResponse | PlainMessage<MsgRelayPriceFeedPriceResponse> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.MsgRelayBandRates
 */
export declare class MsgRelayBandRates extends Message<MsgRelayBandRates> {
    /**
     * @generated from field: string relayer = 1;
     */
    relayer: string;
    /**
     * @generated from field: repeated string symbols = 2;
     */
    symbols: string[];
    /**
     * @generated from field: repeated uint64 rates = 3;
     */
    rates: bigint[];
    /**
     * @generated from field: repeated uint64 resolve_times = 4;
     */
    resolveTimes: bigint[];
    /**
     * @generated from field: repeated uint64 requestIDs = 5;
     */
    requestIDs: bigint[];
    constructor(data?: PartialMessage<MsgRelayBandRates>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgRelayBandRates";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRelayBandRates;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRelayBandRates;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRelayBandRates;
    static equals(a: MsgRelayBandRates | PlainMessage<MsgRelayBandRates> | undefined, b: MsgRelayBandRates | PlainMessage<MsgRelayBandRates> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.MsgRelayBandRatesResponse
 */
export declare class MsgRelayBandRatesResponse extends Message<MsgRelayBandRatesResponse> {
    constructor(data?: PartialMessage<MsgRelayBandRatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgRelayBandRatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRelayBandRatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRelayBandRatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRelayBandRatesResponse;
    static equals(a: MsgRelayBandRatesResponse | PlainMessage<MsgRelayBandRatesResponse> | undefined, b: MsgRelayBandRatesResponse | PlainMessage<MsgRelayBandRatesResponse> | undefined): boolean;
}
/**
 * MsgRelayCoinbaseMessages defines a SDK message for relaying price messages
 * from Coinbase API.
 *
 * @generated from message injective.oracle.v1beta1.MsgRelayCoinbaseMessages
 */
export declare class MsgRelayCoinbaseMessages extends Message<MsgRelayCoinbaseMessages> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated bytes messages = 2;
     */
    messages: Uint8Array[];
    /**
     * @generated from field: repeated bytes signatures = 3;
     */
    signatures: Uint8Array[];
    constructor(data?: PartialMessage<MsgRelayCoinbaseMessages>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgRelayCoinbaseMessages";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRelayCoinbaseMessages;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRelayCoinbaseMessages;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRelayCoinbaseMessages;
    static equals(a: MsgRelayCoinbaseMessages | PlainMessage<MsgRelayCoinbaseMessages> | undefined, b: MsgRelayCoinbaseMessages | PlainMessage<MsgRelayCoinbaseMessages> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse
 */
export declare class MsgRelayCoinbaseMessagesResponse extends Message<MsgRelayCoinbaseMessagesResponse> {
    constructor(data?: PartialMessage<MsgRelayCoinbaseMessagesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRelayCoinbaseMessagesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRelayCoinbaseMessagesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRelayCoinbaseMessagesResponse;
    static equals(a: MsgRelayCoinbaseMessagesResponse | PlainMessage<MsgRelayCoinbaseMessagesResponse> | undefined, b: MsgRelayCoinbaseMessagesResponse | PlainMessage<MsgRelayCoinbaseMessagesResponse> | undefined): boolean;
}
/**
 * MsgRequestBandIBCRates defines a SDK message for requesting data from
 * BandChain using IBC.
 *
 * @generated from message injective.oracle.v1beta1.MsgRequestBandIBCRates
 */
export declare class MsgRequestBandIBCRates extends Message<MsgRequestBandIBCRates> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: uint64 request_id = 2;
     */
    requestId: bigint;
    constructor(data?: PartialMessage<MsgRequestBandIBCRates>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgRequestBandIBCRates";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRequestBandIBCRates;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRequestBandIBCRates;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRequestBandIBCRates;
    static equals(a: MsgRequestBandIBCRates | PlainMessage<MsgRequestBandIBCRates> | undefined, b: MsgRequestBandIBCRates | PlainMessage<MsgRequestBandIBCRates> | undefined): boolean;
}
/**
 * MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type.
 *
 * @generated from message injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse
 */
export declare class MsgRequestBandIBCRatesResponse extends Message<MsgRequestBandIBCRatesResponse> {
    constructor(data?: PartialMessage<MsgRequestBandIBCRatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRequestBandIBCRatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRequestBandIBCRatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRequestBandIBCRatesResponse;
    static equals(a: MsgRequestBandIBCRatesResponse | PlainMessage<MsgRequestBandIBCRatesResponse> | undefined, b: MsgRequestBandIBCRatesResponse | PlainMessage<MsgRequestBandIBCRatesResponse> | undefined): boolean;
}
/**
 * MsgRelayPythPrices defines a SDK message for updating Pyth prices
 *
 * @generated from message injective.oracle.v1beta1.MsgRelayPythPrices
 */
export declare class MsgRelayPythPrices extends Message<MsgRelayPythPrices> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: repeated injective.oracle.v1beta1.PriceAttestation price_attestations = 2;
     */
    priceAttestations: PriceAttestation[];
    constructor(data?: PartialMessage<MsgRelayPythPrices>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgRelayPythPrices";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRelayPythPrices;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRelayPythPrices;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRelayPythPrices;
    static equals(a: MsgRelayPythPrices | PlainMessage<MsgRelayPythPrices> | undefined, b: MsgRelayPythPrices | PlainMessage<MsgRelayPythPrices> | undefined): boolean;
}
/**
 * MsgRelayPythPricesResponse defines the Msg/RelayPythPrices response type.
 *
 * @generated from message injective.oracle.v1beta1.MsgRelayPythPricesResponse
 */
export declare class MsgRelayPythPricesResponse extends Message<MsgRelayPythPricesResponse> {
    constructor(data?: PartialMessage<MsgRelayPythPricesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgRelayPythPricesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRelayPythPricesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRelayPythPricesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRelayPythPricesResponse;
    static equals(a: MsgRelayPythPricesResponse | PlainMessage<MsgRelayPythPricesResponse> | undefined, b: MsgRelayPythPricesResponse | PlainMessage<MsgRelayPythPricesResponse> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the oracle parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: injective.oracle.v1beta1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map