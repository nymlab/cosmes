// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/txfees/v1beta1/query.proto (package dymensionxyz.dymension.txfees.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./genesis_pb.js";
import { FeeToken } from "./feetoken_pb.js";
/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryParamsRequest, a, b);
    }
}
QueryParamsRequest.runtime = proto3;
QueryParamsRequest.typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryParamsResponse, a, b);
    }
}
QueryParamsResponse.runtime = proto3;
QueryParamsResponse.typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryFeeTokensRequest
 */
export class QueryFeeTokensRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryFeeTokensRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryFeeTokensRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryFeeTokensRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryFeeTokensRequest, a, b);
    }
}
QueryFeeTokensRequest.runtime = proto3;
QueryFeeTokensRequest.typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryFeeTokensRequest";
QueryFeeTokensRequest.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryFeeTokensResponse
 */
export class QueryFeeTokensResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated dymensionxyz.dymension.txfees.v1beta1.FeeToken fee_tokens = 1;
         */
        this.feeTokens = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryFeeTokensResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryFeeTokensResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryFeeTokensResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryFeeTokensResponse, a, b);
    }
}
QueryFeeTokensResponse.runtime = proto3;
QueryFeeTokensResponse.typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryFeeTokensResponse";
QueryFeeTokensResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "fee_tokens", kind: "message", T: FeeToken, repeated: true },
]);
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 *
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryDenomSpotPriceRequest
 */
export class QueryDenomSpotPriceRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomSpotPriceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomSpotPriceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomSpotPriceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomSpotPriceRequest, a, b);
    }
}
QueryDenomSpotPriceRequest.runtime = proto3;
QueryDenomSpotPriceRequest.typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryDenomSpotPriceRequest";
QueryDenomSpotPriceRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 *
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryDenomSpotPriceResponse
 */
export class QueryDenomSpotPriceResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 poolID = 1;
         */
        this.poolID = protoInt64.zero;
        /**
         * @generated from field: string spot_price = 2;
         */
        this.spotPrice = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomSpotPriceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomSpotPriceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomSpotPriceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomSpotPriceResponse, a, b);
    }
}
QueryDenomSpotPriceResponse.runtime = proto3;
QueryDenomSpotPriceResponse.typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryDenomSpotPriceResponse";
QueryDenomSpotPriceResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "poolID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "spot_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryDenomPoolIdRequest
 */
export class QueryDenomPoolIdRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomPoolIdRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomPoolIdRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomPoolIdRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomPoolIdRequest, a, b);
    }
}
QueryDenomPoolIdRequest.runtime = proto3;
QueryDenomPoolIdRequest.typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryDenomPoolIdRequest";
QueryDenomPoolIdRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryDenomPoolIdResponse
 */
export class QueryDenomPoolIdResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 poolID = 1;
         */
        this.poolID = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomPoolIdResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomPoolIdResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomPoolIdResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomPoolIdResponse, a, b);
    }
}
QueryDenomPoolIdResponse.runtime = proto3;
QueryDenomPoolIdResponse.typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryDenomPoolIdResponse";
QueryDenomPoolIdResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "poolID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryBaseDenomRequest
 */
export class QueryBaseDenomRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBaseDenomRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBaseDenomRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBaseDenomRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryBaseDenomRequest, a, b);
    }
}
QueryBaseDenomRequest.runtime = proto3;
QueryBaseDenomRequest.typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryBaseDenomRequest";
QueryBaseDenomRequest.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message dymensionxyz.dymension.txfees.v1beta1.QueryBaseDenomResponse
 */
export class QueryBaseDenomResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string base_denom = 1;
         */
        this.baseDenom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBaseDenomResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBaseDenomResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBaseDenomResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryBaseDenomResponse, a, b);
    }
}
QueryBaseDenomResponse.runtime = proto3;
QueryBaseDenomResponse.typeName = "dymensionxyz.dymension.txfees.v1beta1.QueryBaseDenomResponse";
QueryBaseDenomResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "base_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=query_pb.js.map