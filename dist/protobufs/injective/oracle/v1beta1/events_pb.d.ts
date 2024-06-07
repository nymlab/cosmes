import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PythPriceState } from "./oracle_pb.js";
/**
 * @generated from message injective.oracle.v1beta1.SetChainlinkPriceEvent
 */
export declare class SetChainlinkPriceEvent extends Message<SetChainlinkPriceEvent> {
    /**
     * @generated from field: string feed_id = 1;
     */
    feedId: string;
    /**
     * @generated from field: string answer = 2;
     */
    answer: string;
    /**
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<SetChainlinkPriceEvent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.SetChainlinkPriceEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetChainlinkPriceEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetChainlinkPriceEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetChainlinkPriceEvent;
    static equals(a: SetChainlinkPriceEvent | PlainMessage<SetChainlinkPriceEvent> | undefined, b: SetChainlinkPriceEvent | PlainMessage<SetChainlinkPriceEvent> | undefined): boolean;
}
/**
 * Event type upon set ref
 *
 * @generated from message injective.oracle.v1beta1.SetBandPriceEvent
 */
export declare class SetBandPriceEvent extends Message<SetBandPriceEvent> {
    /**
     * @generated from field: string relayer = 1;
     */
    relayer: string;
    /**
     * @generated from field: string symbol = 2;
     */
    symbol: string;
    /**
     * @generated from field: string price = 3;
     */
    price: string;
    /**
     * @generated from field: uint64 resolve_time = 4;
     */
    resolveTime: bigint;
    /**
     * @generated from field: uint64 request_id = 5;
     */
    requestId: bigint;
    constructor(data?: PartialMessage<SetBandPriceEvent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.SetBandPriceEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetBandPriceEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetBandPriceEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetBandPriceEvent;
    static equals(a: SetBandPriceEvent | PlainMessage<SetBandPriceEvent> | undefined, b: SetBandPriceEvent | PlainMessage<SetBandPriceEvent> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.SetBandIBCPriceEvent
 */
export declare class SetBandIBCPriceEvent extends Message<SetBandIBCPriceEvent> {
    /**
     * @generated from field: string relayer = 1;
     */
    relayer: string;
    /**
     * @generated from field: repeated string symbols = 2;
     */
    symbols: string[];
    /**
     * @generated from field: repeated string prices = 3;
     */
    prices: string[];
    /**
     * @generated from field: uint64 resolve_time = 4;
     */
    resolveTime: bigint;
    /**
     * @generated from field: uint64 request_id = 5;
     */
    requestId: bigint;
    /**
     * @generated from field: int64 client_id = 6;
     */
    clientId: bigint;
    constructor(data?: PartialMessage<SetBandIBCPriceEvent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.SetBandIBCPriceEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetBandIBCPriceEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetBandIBCPriceEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetBandIBCPriceEvent;
    static equals(a: SetBandIBCPriceEvent | PlainMessage<SetBandIBCPriceEvent> | undefined, b: SetBandIBCPriceEvent | PlainMessage<SetBandIBCPriceEvent> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.EventBandIBCAckSuccess
 */
export declare class EventBandIBCAckSuccess extends Message<EventBandIBCAckSuccess> {
    /**
     * @generated from field: string ack_result = 1;
     */
    ackResult: string;
    /**
     * @generated from field: int64 client_id = 2;
     */
    clientId: bigint;
    constructor(data?: PartialMessage<EventBandIBCAckSuccess>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.EventBandIBCAckSuccess";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBandIBCAckSuccess;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBandIBCAckSuccess;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBandIBCAckSuccess;
    static equals(a: EventBandIBCAckSuccess | PlainMessage<EventBandIBCAckSuccess> | undefined, b: EventBandIBCAckSuccess | PlainMessage<EventBandIBCAckSuccess> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.EventBandIBCAckError
 */
export declare class EventBandIBCAckError extends Message<EventBandIBCAckError> {
    /**
     * @generated from field: string ack_error = 1;
     */
    ackError: string;
    /**
     * @generated from field: int64 client_id = 2;
     */
    clientId: bigint;
    constructor(data?: PartialMessage<EventBandIBCAckError>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.EventBandIBCAckError";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBandIBCAckError;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBandIBCAckError;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBandIBCAckError;
    static equals(a: EventBandIBCAckError | PlainMessage<EventBandIBCAckError> | undefined, b: EventBandIBCAckError | PlainMessage<EventBandIBCAckError> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.EventBandIBCResponseTimeout
 */
export declare class EventBandIBCResponseTimeout extends Message<EventBandIBCResponseTimeout> {
    /**
     * @generated from field: int64 client_id = 1;
     */
    clientId: bigint;
    constructor(data?: PartialMessage<EventBandIBCResponseTimeout>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.EventBandIBCResponseTimeout";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBandIBCResponseTimeout;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBandIBCResponseTimeout;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBandIBCResponseTimeout;
    static equals(a: EventBandIBCResponseTimeout | PlainMessage<EventBandIBCResponseTimeout> | undefined, b: EventBandIBCResponseTimeout | PlainMessage<EventBandIBCResponseTimeout> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.SetPriceFeedPriceEvent
 */
export declare class SetPriceFeedPriceEvent extends Message<SetPriceFeedPriceEvent> {
    /**
     * @generated from field: string relayer = 1;
     */
    relayer: string;
    /**
     * @generated from field: string base = 2;
     */
    base: string;
    /**
     * @generated from field: string quote = 3;
     */
    quote: string;
    /**
     * price defines the price of the oracle base and quote
     *
     * @generated from field: string price = 4;
     */
    price: string;
    constructor(data?: PartialMessage<SetPriceFeedPriceEvent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.SetPriceFeedPriceEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetPriceFeedPriceEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetPriceFeedPriceEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetPriceFeedPriceEvent;
    static equals(a: SetPriceFeedPriceEvent | PlainMessage<SetPriceFeedPriceEvent> | undefined, b: SetPriceFeedPriceEvent | PlainMessage<SetPriceFeedPriceEvent> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.SetProviderPriceEvent
 */
export declare class SetProviderPriceEvent extends Message<SetProviderPriceEvent> {
    /**
     * @generated from field: string provider = 1;
     */
    provider: string;
    /**
     * @generated from field: string relayer = 2;
     */
    relayer: string;
    /**
     * @generated from field: string symbol = 3;
     */
    symbol: string;
    /**
     * @generated from field: string price = 4;
     */
    price: string;
    constructor(data?: PartialMessage<SetProviderPriceEvent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.SetProviderPriceEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetProviderPriceEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetProviderPriceEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetProviderPriceEvent;
    static equals(a: SetProviderPriceEvent | PlainMessage<SetProviderPriceEvent> | undefined, b: SetProviderPriceEvent | PlainMessage<SetProviderPriceEvent> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.SetCoinbasePriceEvent
 */
export declare class SetCoinbasePriceEvent extends Message<SetCoinbasePriceEvent> {
    /**
     * @generated from field: string symbol = 1;
     */
    symbol: string;
    /**
     * @generated from field: string price = 2;
     */
    price: string;
    /**
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    constructor(data?: PartialMessage<SetCoinbasePriceEvent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.SetCoinbasePriceEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetCoinbasePriceEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetCoinbasePriceEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetCoinbasePriceEvent;
    static equals(a: SetCoinbasePriceEvent | PlainMessage<SetCoinbasePriceEvent> | undefined, b: SetCoinbasePriceEvent | PlainMessage<SetCoinbasePriceEvent> | undefined): boolean;
}
/**
 * @generated from message injective.oracle.v1beta1.EventSetPythPrices
 */
export declare class EventSetPythPrices extends Message<EventSetPythPrices> {
    /**
     * @generated from field: repeated injective.oracle.v1beta1.PythPriceState prices = 1;
     */
    prices: PythPriceState[];
    constructor(data?: PartialMessage<EventSetPythPrices>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.oracle.v1beta1.EventSetPythPrices";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSetPythPrices;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSetPythPrices;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSetPythPrices;
    static equals(a: EventSetPythPrices | PlainMessage<EventSetPythPrices> | undefined, b: EventSetPythPrices | PlainMessage<EventSetPythPrices> | undefined): boolean;
}
//# sourceMappingURL=events_pb.d.ts.map