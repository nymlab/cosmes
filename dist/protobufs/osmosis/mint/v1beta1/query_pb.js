// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/mint/v1beta1/query.proto (package osmosis.mint.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./mint_pb.js";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message osmosis.mint.v1beta1.QueryParamsRequest
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
QueryParamsRequest.typeName = "osmosis.mint.v1beta1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message osmosis.mint.v1beta1.QueryParamsResponse
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
QueryParamsResponse.typeName = "osmosis.mint.v1beta1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
/**
 * QueryEpochProvisionsRequest is the request type for the
 * Query/EpochProvisions RPC method.
 *
 * @generated from message osmosis.mint.v1beta1.QueryEpochProvisionsRequest
 */
export class QueryEpochProvisionsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryEpochProvisionsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryEpochProvisionsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryEpochProvisionsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryEpochProvisionsRequest, a, b);
    }
}
QueryEpochProvisionsRequest.runtime = proto3;
QueryEpochProvisionsRequest.typeName = "osmosis.mint.v1beta1.QueryEpochProvisionsRequest";
QueryEpochProvisionsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * QueryEpochProvisionsResponse is the response type for the
 * Query/EpochProvisions RPC method.
 *
 * @generated from message osmosis.mint.v1beta1.QueryEpochProvisionsResponse
 */
export class QueryEpochProvisionsResponse extends Message {
    constructor(data) {
        super();
        /**
         * epoch_provisions is the current minting per epoch provisions value.
         *
         * @generated from field: bytes epoch_provisions = 1;
         */
        this.epochProvisions = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryEpochProvisionsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryEpochProvisionsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryEpochProvisionsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryEpochProvisionsResponse, a, b);
    }
}
QueryEpochProvisionsResponse.runtime = proto3;
QueryEpochProvisionsResponse.typeName = "osmosis.mint.v1beta1.QueryEpochProvisionsResponse";
QueryEpochProvisionsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "epoch_provisions", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
//# sourceMappingURL=query_pb.js.map