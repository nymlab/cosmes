// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/poolmanager/v1beta1/query.proto (package osmosis.poolmanager.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./genesis_pb.js";
import { SwapAmountInRoute, SwapAmountOutRoute } from "./swap_route_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * =============================== Params
 *
 * @generated from message osmosis.poolmanager.v1beta1.ParamsRequest
 */
export class ParamsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ParamsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ParamsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ParamsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ParamsRequest, a, b);
    }
}
ParamsRequest.runtime = proto3;
ParamsRequest.typeName = "osmosis.poolmanager.v1beta1.ParamsRequest";
ParamsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message osmosis.poolmanager.v1beta1.ParamsResponse
 */
export class ParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ParamsResponse, a, b);
    }
}
ParamsResponse.runtime = proto3;
ParamsResponse.typeName = "osmosis.poolmanager.v1beta1.ParamsResponse";
ParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
/**
 * =============================== EstimateSwapExactAmountIn
 *
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest
 */
export class EstimateSwapExactAmountInRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 2 [deprecated = true];
         * @deprecated
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string token_in = 3;
         */
        this.tokenIn = "";
        /**
         * @generated from field: repeated osmosis.poolmanager.v1beta1.SwapAmountInRoute routes = 4;
         */
        this.routes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EstimateSwapExactAmountInRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EstimateSwapExactAmountInRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EstimateSwapExactAmountInRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EstimateSwapExactAmountInRequest, a, b);
    }
}
EstimateSwapExactAmountInRequest.runtime = proto3;
EstimateSwapExactAmountInRequest.typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInRequest";
EstimateSwapExactAmountInRequest.fields = proto3.util.newFieldList(() => [
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "token_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "routes", kind: "message", T: SwapAmountInRoute, repeated: true },
]);
/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest
 */
export class EstimateSwapExactAmountInWithPrimitiveTypesRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1 [deprecated = true];
         * @deprecated
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string token_in = 2;
         */
        this.tokenIn = "";
        /**
         * @generated from field: repeated uint64 routes_pool_id = 3;
         */
        this.routesPoolId = [];
        /**
         * @generated from field: repeated string routes_token_out_denom = 4;
         */
        this.routesTokenOutDenom = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EstimateSwapExactAmountInWithPrimitiveTypesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EstimateSwapExactAmountInWithPrimitiveTypesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EstimateSwapExactAmountInWithPrimitiveTypesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EstimateSwapExactAmountInWithPrimitiveTypesRequest, a, b);
    }
}
EstimateSwapExactAmountInWithPrimitiveTypesRequest.runtime = proto3;
EstimateSwapExactAmountInWithPrimitiveTypesRequest.typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInWithPrimitiveTypesRequest";
EstimateSwapExactAmountInWithPrimitiveTypesRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "token_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "routes_pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 4, name: "routes_token_out_denom", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest
 */
export class EstimateSinglePoolSwapExactAmountInRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string token_in = 2;
         */
        this.tokenIn = "";
        /**
         * @generated from field: string token_out_denom = 3;
         */
        this.tokenOutDenom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EstimateSinglePoolSwapExactAmountInRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EstimateSinglePoolSwapExactAmountInRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EstimateSinglePoolSwapExactAmountInRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EstimateSinglePoolSwapExactAmountInRequest, a, b);
    }
}
EstimateSinglePoolSwapExactAmountInRequest.runtime = proto3;
EstimateSinglePoolSwapExactAmountInRequest.typeName = "osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountInRequest";
EstimateSinglePoolSwapExactAmountInRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "token_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_out_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse
 */
export class EstimateSwapExactAmountInResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string token_out_amount = 1;
         */
        this.tokenOutAmount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EstimateSwapExactAmountInResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EstimateSwapExactAmountInResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EstimateSwapExactAmountInResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EstimateSwapExactAmountInResponse, a, b);
    }
}
EstimateSwapExactAmountInResponse.runtime = proto3;
EstimateSwapExactAmountInResponse.typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountInResponse";
EstimateSwapExactAmountInResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "token_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * =============================== EstimateSwapExactAmountOut
 *
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest
 */
export class EstimateSwapExactAmountOutRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 2 [deprecated = true];
         * @deprecated
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: repeated osmosis.poolmanager.v1beta1.SwapAmountOutRoute routes = 3;
         */
        this.routes = [];
        /**
         * @generated from field: string token_out = 4;
         */
        this.tokenOut = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EstimateSwapExactAmountOutRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EstimateSwapExactAmountOutRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EstimateSwapExactAmountOutRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EstimateSwapExactAmountOutRequest, a, b);
    }
}
EstimateSwapExactAmountOutRequest.runtime = proto3;
EstimateSwapExactAmountOutRequest.typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutRequest";
EstimateSwapExactAmountOutRequest.fields = proto3.util.newFieldList(() => [
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "routes", kind: "message", T: SwapAmountOutRoute, repeated: true },
    { no: 4, name: "token_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest
 */
export class EstimateSwapExactAmountOutWithPrimitiveTypesRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1 [deprecated = true];
         * @deprecated
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: repeated uint64 routes_pool_id = 2;
         */
        this.routesPoolId = [];
        /**
         * @generated from field: repeated string routes_token_in_denom = 3;
         */
        this.routesTokenInDenom = [];
        /**
         * @generated from field: string token_out = 4;
         */
        this.tokenOut = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EstimateSwapExactAmountOutWithPrimitiveTypesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EstimateSwapExactAmountOutWithPrimitiveTypesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EstimateSwapExactAmountOutWithPrimitiveTypesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EstimateSwapExactAmountOutWithPrimitiveTypesRequest, a, b);
    }
}
EstimateSwapExactAmountOutWithPrimitiveTypesRequest.runtime = proto3;
EstimateSwapExactAmountOutWithPrimitiveTypesRequest.typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutWithPrimitiveTypesRequest";
EstimateSwapExactAmountOutWithPrimitiveTypesRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "routes_pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 3, name: "routes_token_in_denom", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "token_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest
 */
export class EstimateSinglePoolSwapExactAmountOutRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string token_in_denom = 2;
         */
        this.tokenInDenom = "";
        /**
         * @generated from field: string token_out = 3;
         */
        this.tokenOut = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EstimateSinglePoolSwapExactAmountOutRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EstimateSinglePoolSwapExactAmountOutRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EstimateSinglePoolSwapExactAmountOutRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EstimateSinglePoolSwapExactAmountOutRequest, a, b);
    }
}
EstimateSinglePoolSwapExactAmountOutRequest.runtime = proto3;
EstimateSinglePoolSwapExactAmountOutRequest.typeName = "osmosis.poolmanager.v1beta1.EstimateSinglePoolSwapExactAmountOutRequest";
EstimateSinglePoolSwapExactAmountOutRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "token_in_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token_out", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse
 */
export class EstimateSwapExactAmountOutResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string token_in_amount = 1;
         */
        this.tokenInAmount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EstimateSwapExactAmountOutResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EstimateSwapExactAmountOutResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EstimateSwapExactAmountOutResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EstimateSwapExactAmountOutResponse, a, b);
    }
}
EstimateSwapExactAmountOutResponse.runtime = proto3;
EstimateSwapExactAmountOutResponse.typeName = "osmosis.poolmanager.v1beta1.EstimateSwapExactAmountOutResponse";
EstimateSwapExactAmountOutResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "token_in_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * =============================== NumPools
 *
 * @generated from message osmosis.poolmanager.v1beta1.NumPoolsRequest
 */
export class NumPoolsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new NumPoolsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new NumPoolsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new NumPoolsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(NumPoolsRequest, a, b);
    }
}
NumPoolsRequest.runtime = proto3;
NumPoolsRequest.typeName = "osmosis.poolmanager.v1beta1.NumPoolsRequest";
NumPoolsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message osmosis.poolmanager.v1beta1.NumPoolsResponse
 */
export class NumPoolsResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 num_pools = 1;
         */
        this.numPools = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new NumPoolsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new NumPoolsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new NumPoolsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(NumPoolsResponse, a, b);
    }
}
NumPoolsResponse.runtime = proto3;
NumPoolsResponse.typeName = "osmosis.poolmanager.v1beta1.NumPoolsResponse";
NumPoolsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "num_pools", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * =============================== Pool
 *
 * @generated from message osmosis.poolmanager.v1beta1.PoolRequest
 */
export class PoolRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PoolRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PoolRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PoolRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PoolRequest, a, b);
    }
}
PoolRequest.runtime = proto3;
PoolRequest.typeName = "osmosis.poolmanager.v1beta1.PoolRequest";
PoolRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message osmosis.poolmanager.v1beta1.PoolResponse
 */
export class PoolResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PoolResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PoolResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PoolResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PoolResponse, a, b);
    }
}
PoolResponse.runtime = proto3;
PoolResponse.typeName = "osmosis.poolmanager.v1beta1.PoolResponse";
PoolResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool", kind: "message", T: Any },
]);
/**
 * =============================== AllPools
 *
 * @generated from message osmosis.poolmanager.v1beta1.AllPoolsRequest
 */
export class AllPoolsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AllPoolsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AllPoolsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AllPoolsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AllPoolsRequest, a, b);
    }
}
AllPoolsRequest.runtime = proto3;
AllPoolsRequest.typeName = "osmosis.poolmanager.v1beta1.AllPoolsRequest";
AllPoolsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message osmosis.poolmanager.v1beta1.AllPoolsResponse
 */
export class AllPoolsResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated google.protobuf.Any pools = 1;
         */
        this.pools = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AllPoolsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AllPoolsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AllPoolsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AllPoolsResponse, a, b);
    }
}
AllPoolsResponse.runtime = proto3;
AllPoolsResponse.typeName = "osmosis.poolmanager.v1beta1.AllPoolsResponse";
AllPoolsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pools", kind: "message", T: Any, repeated: true },
]);
/**
 * =======================================================
 * ListPoolsByDenomRequest
 *
 * @generated from message osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest
 */
export class ListPoolsByDenomRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ListPoolsByDenomRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ListPoolsByDenomRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ListPoolsByDenomRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ListPoolsByDenomRequest, a, b);
    }
}
ListPoolsByDenomRequest.runtime = proto3;
ListPoolsByDenomRequest.typeName = "osmosis.poolmanager.v1beta1.ListPoolsByDenomRequest";
ListPoolsByDenomRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse
 */
export class ListPoolsByDenomResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated google.protobuf.Any pools = 1;
         */
        this.pools = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ListPoolsByDenomResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ListPoolsByDenomResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ListPoolsByDenomResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ListPoolsByDenomResponse, a, b);
    }
}
ListPoolsByDenomResponse.runtime = proto3;
ListPoolsByDenomResponse.typeName = "osmosis.poolmanager.v1beta1.ListPoolsByDenomResponse";
ListPoolsByDenomResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pools", kind: "message", T: Any, repeated: true },
]);
/**
 * ==========================================================
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 *
 * @generated from message osmosis.poolmanager.v1beta1.SpotPriceRequest
 */
export class SpotPriceRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string base_asset_denom = 2;
         */
        this.baseAssetDenom = "";
        /**
         * @generated from field: string quote_asset_denom = 3;
         */
        this.quoteAssetDenom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SpotPriceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SpotPriceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SpotPriceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SpotPriceRequest, a, b);
    }
}
SpotPriceRequest.runtime = proto3;
SpotPriceRequest.typeName = "osmosis.poolmanager.v1beta1.SpotPriceRequest";
SpotPriceRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "base_asset_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote_asset_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 *
 * @generated from message osmosis.poolmanager.v1beta1.SpotPriceResponse
 */
export class SpotPriceResponse extends Message {
    constructor(data) {
        super();
        /**
         * String of the Dec. Ex) 10.203uatom
         *
         * @generated from field: string spot_price = 1;
         */
        this.spotPrice = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SpotPriceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SpotPriceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SpotPriceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SpotPriceResponse, a, b);
    }
}
SpotPriceResponse.runtime = proto3;
SpotPriceResponse.typeName = "osmosis.poolmanager.v1beta1.SpotPriceResponse";
SpotPriceResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "spot_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * =============================== TotalPoolLiquidity
 *
 * @generated from message osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest
 */
export class TotalPoolLiquidityRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TotalPoolLiquidityRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TotalPoolLiquidityRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TotalPoolLiquidityRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TotalPoolLiquidityRequest, a, b);
    }
}
TotalPoolLiquidityRequest.runtime = proto3;
TotalPoolLiquidityRequest.typeName = "osmosis.poolmanager.v1beta1.TotalPoolLiquidityRequest";
TotalPoolLiquidityRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse
 */
export class TotalPoolLiquidityResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin liquidity = 1;
         */
        this.liquidity = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TotalPoolLiquidityResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TotalPoolLiquidityResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TotalPoolLiquidityResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TotalPoolLiquidityResponse, a, b);
    }
}
TotalPoolLiquidityResponse.runtime = proto3;
TotalPoolLiquidityResponse.typeName = "osmosis.poolmanager.v1beta1.TotalPoolLiquidityResponse";
TotalPoolLiquidityResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "liquidity", kind: "message", T: Coin, repeated: true },
]);
/**
 * =============================== TotalLiquidity
 *
 * @generated from message osmosis.poolmanager.v1beta1.TotalLiquidityRequest
 */
export class TotalLiquidityRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TotalLiquidityRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TotalLiquidityRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TotalLiquidityRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TotalLiquidityRequest, a, b);
    }
}
TotalLiquidityRequest.runtime = proto3;
TotalLiquidityRequest.typeName = "osmosis.poolmanager.v1beta1.TotalLiquidityRequest";
TotalLiquidityRequest.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message osmosis.poolmanager.v1beta1.TotalLiquidityResponse
 */
export class TotalLiquidityResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin liquidity = 1;
         */
        this.liquidity = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TotalLiquidityResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TotalLiquidityResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TotalLiquidityResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TotalLiquidityResponse, a, b);
    }
}
TotalLiquidityResponse.runtime = proto3;
TotalLiquidityResponse.typeName = "osmosis.poolmanager.v1beta1.TotalLiquidityResponse";
TotalLiquidityResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "liquidity", kind: "message", T: Coin, repeated: true },
]);
/**
 * =============================== TotalVolumeForPool
 *
 * @generated from message osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest
 */
export class TotalVolumeForPoolRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TotalVolumeForPoolRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TotalVolumeForPoolRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TotalVolumeForPoolRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TotalVolumeForPoolRequest, a, b);
    }
}
TotalVolumeForPoolRequest.runtime = proto3;
TotalVolumeForPoolRequest.typeName = "osmosis.poolmanager.v1beta1.TotalVolumeForPoolRequest";
TotalVolumeForPoolRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse
 */
export class TotalVolumeForPoolResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin volume = 1;
         */
        this.volume = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TotalVolumeForPoolResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TotalVolumeForPoolResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TotalVolumeForPoolResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TotalVolumeForPoolResponse, a, b);
    }
}
TotalVolumeForPoolResponse.runtime = proto3;
TotalVolumeForPoolResponse.typeName = "osmosis.poolmanager.v1beta1.TotalVolumeForPoolResponse";
TotalVolumeForPoolResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "volume", kind: "message", T: Coin, repeated: true },
]);
/**
 * =============================== TradingPairTakerFee
 *
 * @generated from message osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest
 */
export class TradingPairTakerFeeRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom_0 = 1;
         */
        this.denom0 = "";
        /**
         * @generated from field: string denom_1 = 2;
         */
        this.denom1 = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TradingPairTakerFeeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TradingPairTakerFeeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TradingPairTakerFeeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TradingPairTakerFeeRequest, a, b);
    }
}
TradingPairTakerFeeRequest.runtime = proto3;
TradingPairTakerFeeRequest.typeName = "osmosis.poolmanager.v1beta1.TradingPairTakerFeeRequest";
TradingPairTakerFeeRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom_0", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom_1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse
 */
export class TradingPairTakerFeeResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string taker_fee = 1;
         */
        this.takerFee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TradingPairTakerFeeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TradingPairTakerFeeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TradingPairTakerFeeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TradingPairTakerFeeResponse, a, b);
    }
}
TradingPairTakerFeeResponse.runtime = proto3;
TradingPairTakerFeeResponse.typeName = "osmosis.poolmanager.v1beta1.TradingPairTakerFeeResponse";
TradingPairTakerFeeResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "taker_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * EstimateTradeBasedOnPriceImpactRequest represents a request to estimate a
 * trade for Balancer/StableSwap/Concentrated liquidity pool types based on the
 * given parameters.
 *
 * @generated from message osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest
 */
export class EstimateTradeBasedOnPriceImpactRequest extends Message {
    constructor(data) {
        super();
        /**
         * to_coin_denom is the denom identifier of the token that the user wants to
         * buy.
         *
         * @generated from field: string to_coin_denom = 2;
         */
        this.toCoinDenom = "";
        /**
         * pool_id is the identifier of the liquidity pool that the trade will occur
         * on.
         *
         * @generated from field: uint64 pool_id = 3;
         */
        this.poolId = protoInt64.zero;
        /**
         * max_price_impact is the maximum percentage that the user is willing
         * to affect the price of the liquidity pool.
         *
         * @generated from field: string max_price_impact = 4;
         */
        this.maxPriceImpact = "";
        /**
         * external_price is an optional external price that the user can enter.
         * It adjusts the MaxPriceImpact as the SpotPrice of a pool can be changed at
         * any time.
         *
         * @generated from field: string external_price = 5;
         */
        this.externalPrice = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EstimateTradeBasedOnPriceImpactRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EstimateTradeBasedOnPriceImpactRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EstimateTradeBasedOnPriceImpactRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EstimateTradeBasedOnPriceImpactRequest, a, b);
    }
}
EstimateTradeBasedOnPriceImpactRequest.runtime = proto3;
EstimateTradeBasedOnPriceImpactRequest.typeName = "osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactRequest";
EstimateTradeBasedOnPriceImpactRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "from_coin", kind: "message", T: Coin },
    { no: 2, name: "to_coin_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "max_price_impact", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "external_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * EstimateTradeBasedOnPriceImpactResponse represents the response data
 * for an estimated trade based on price impact. If a trade fails to be
 * estimated the response would be 0,0 for input_coin and output_coin and will
 * not error.
 *
 * @generated from message osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse
 */
export class EstimateTradeBasedOnPriceImpactResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EstimateTradeBasedOnPriceImpactResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EstimateTradeBasedOnPriceImpactResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EstimateTradeBasedOnPriceImpactResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EstimateTradeBasedOnPriceImpactResponse, a, b);
    }
}
EstimateTradeBasedOnPriceImpactResponse.runtime = proto3;
EstimateTradeBasedOnPriceImpactResponse.typeName = "osmosis.poolmanager.v1beta1.EstimateTradeBasedOnPriceImpactResponse";
EstimateTradeBasedOnPriceImpactResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "input_coin", kind: "message", T: Coin },
    { no: 2, name: "output_coin", kind: "message", T: Coin },
]);
//# sourceMappingURL=query_pb.js.map