// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/oracle/v1beta1/events.proto (package injective.oracle.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { PythPriceState } from "./oracle_pb.js";
/**
 * @generated from message injective.oracle.v1beta1.SetChainlinkPriceEvent
 */
export class SetChainlinkPriceEvent extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string feed_id = 1;
         */
        this.feedId = "";
        /**
         * @generated from field: string answer = 2;
         */
        this.answer = "";
        /**
         * @generated from field: uint64 timestamp = 3;
         */
        this.timestamp = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetChainlinkPriceEvent().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetChainlinkPriceEvent().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetChainlinkPriceEvent().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SetChainlinkPriceEvent, a, b);
    }
}
SetChainlinkPriceEvent.runtime = proto3;
SetChainlinkPriceEvent.typeName = "injective.oracle.v1beta1.SetChainlinkPriceEvent";
SetChainlinkPriceEvent.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "answer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * Event type upon set ref
 *
 * @generated from message injective.oracle.v1beta1.SetBandPriceEvent
 */
export class SetBandPriceEvent extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string relayer = 1;
         */
        this.relayer = "";
        /**
         * @generated from field: string symbol = 2;
         */
        this.symbol = "";
        /**
         * @generated from field: string price = 3;
         */
        this.price = "";
        /**
         * @generated from field: uint64 resolve_time = 4;
         */
        this.resolveTime = protoInt64.zero;
        /**
         * @generated from field: uint64 request_id = 5;
         */
        this.requestId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetBandPriceEvent().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetBandPriceEvent().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetBandPriceEvent().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SetBandPriceEvent, a, b);
    }
}
SetBandPriceEvent.runtime = proto3;
SetBandPriceEvent.typeName = "injective.oracle.v1beta1.SetBandPriceEvent";
SetBandPriceEvent.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "relayer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "resolve_time", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "request_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message injective.oracle.v1beta1.SetBandIBCPriceEvent
 */
export class SetBandIBCPriceEvent extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string relayer = 1;
         */
        this.relayer = "";
        /**
         * @generated from field: repeated string symbols = 2;
         */
        this.symbols = [];
        /**
         * @generated from field: repeated string prices = 3;
         */
        this.prices = [];
        /**
         * @generated from field: uint64 resolve_time = 4;
         */
        this.resolveTime = protoInt64.zero;
        /**
         * @generated from field: uint64 request_id = 5;
         */
        this.requestId = protoInt64.zero;
        /**
         * @generated from field: int64 client_id = 6;
         */
        this.clientId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetBandIBCPriceEvent().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetBandIBCPriceEvent().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetBandIBCPriceEvent().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SetBandIBCPriceEvent, a, b);
    }
}
SetBandIBCPriceEvent.runtime = proto3;
SetBandIBCPriceEvent.typeName = "injective.oracle.v1beta1.SetBandIBCPriceEvent";
SetBandIBCPriceEvent.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "relayer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "symbols", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "prices", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "resolve_time", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "request_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "client_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * @generated from message injective.oracle.v1beta1.EventBandIBCAckSuccess
 */
export class EventBandIBCAckSuccess extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string ack_result = 1;
         */
        this.ackResult = "";
        /**
         * @generated from field: int64 client_id = 2;
         */
        this.clientId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventBandIBCAckSuccess().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventBandIBCAckSuccess().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventBandIBCAckSuccess().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventBandIBCAckSuccess, a, b);
    }
}
EventBandIBCAckSuccess.runtime = proto3;
EventBandIBCAckSuccess.typeName = "injective.oracle.v1beta1.EventBandIBCAckSuccess";
EventBandIBCAckSuccess.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "ack_result", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * @generated from message injective.oracle.v1beta1.EventBandIBCAckError
 */
export class EventBandIBCAckError extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string ack_error = 1;
         */
        this.ackError = "";
        /**
         * @generated from field: int64 client_id = 2;
         */
        this.clientId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventBandIBCAckError().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventBandIBCAckError().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventBandIBCAckError().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventBandIBCAckError, a, b);
    }
}
EventBandIBCAckError.runtime = proto3;
EventBandIBCAckError.typeName = "injective.oracle.v1beta1.EventBandIBCAckError";
EventBandIBCAckError.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "ack_error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * @generated from message injective.oracle.v1beta1.EventBandIBCResponseTimeout
 */
export class EventBandIBCResponseTimeout extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: int64 client_id = 1;
         */
        this.clientId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventBandIBCResponseTimeout().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventBandIBCResponseTimeout().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventBandIBCResponseTimeout().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventBandIBCResponseTimeout, a, b);
    }
}
EventBandIBCResponseTimeout.runtime = proto3;
EventBandIBCResponseTimeout.typeName = "injective.oracle.v1beta1.EventBandIBCResponseTimeout";
EventBandIBCResponseTimeout.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * @generated from message injective.oracle.v1beta1.SetPriceFeedPriceEvent
 */
export class SetPriceFeedPriceEvent extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string relayer = 1;
         */
        this.relayer = "";
        /**
         * @generated from field: string base = 2;
         */
        this.base = "";
        /**
         * @generated from field: string quote = 3;
         */
        this.quote = "";
        /**
         * price defines the price of the oracle base and quote
         *
         * @generated from field: string price = 4;
         */
        this.price = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetPriceFeedPriceEvent().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetPriceFeedPriceEvent().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetPriceFeedPriceEvent().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SetPriceFeedPriceEvent, a, b);
    }
}
SetPriceFeedPriceEvent.runtime = proto3;
SetPriceFeedPriceEvent.typeName = "injective.oracle.v1beta1.SetPriceFeedPriceEvent";
SetPriceFeedPriceEvent.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "relayer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.oracle.v1beta1.SetProviderPriceEvent
 */
export class SetProviderPriceEvent extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string provider = 1;
         */
        this.provider = "";
        /**
         * @generated from field: string relayer = 2;
         */
        this.relayer = "";
        /**
         * @generated from field: string symbol = 3;
         */
        this.symbol = "";
        /**
         * @generated from field: string price = 4;
         */
        this.price = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetProviderPriceEvent().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetProviderPriceEvent().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetProviderPriceEvent().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SetProviderPriceEvent, a, b);
    }
}
SetProviderPriceEvent.runtime = proto3;
SetProviderPriceEvent.typeName = "injective.oracle.v1beta1.SetProviderPriceEvent";
SetProviderPriceEvent.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "provider", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "relayer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message injective.oracle.v1beta1.SetCoinbasePriceEvent
 */
export class SetCoinbasePriceEvent extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string symbol = 1;
         */
        this.symbol = "";
        /**
         * @generated from field: string price = 2;
         */
        this.price = "";
        /**
         * @generated from field: uint64 timestamp = 3;
         */
        this.timestamp = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetCoinbasePriceEvent().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetCoinbasePriceEvent().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetCoinbasePriceEvent().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SetCoinbasePriceEvent, a, b);
    }
}
SetCoinbasePriceEvent.runtime = proto3;
SetCoinbasePriceEvent.typeName = "injective.oracle.v1beta1.SetCoinbasePriceEvent";
SetCoinbasePriceEvent.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message injective.oracle.v1beta1.EventSetPythPrices
 */
export class EventSetPythPrices extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated injective.oracle.v1beta1.PythPriceState prices = 1;
         */
        this.prices = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventSetPythPrices().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventSetPythPrices().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventSetPythPrices().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventSetPythPrices, a, b);
    }
}
EventSetPythPrices.runtime = proto3;
EventSetPythPrices.typeName = "injective.oracle.v1beta1.EventSetPythPrices";
EventSetPythPrices.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "prices", kind: "message", T: PythPriceState, repeated: true },
]);
//# sourceMappingURL=events_pb.js.map