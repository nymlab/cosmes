// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/cosmwasmpool/v1beta1/model/module_sudo_msg.proto (package osmosis.cosmwasmpool.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * ===================== SwapExactAmountIn
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.SwapExactAmountIn
 */
export class SwapExactAmountIn extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * token_out_denom is the token denom to be received from the pool.
         *
         * @generated from field: string token_out_denom = 3;
         */
        this.tokenOutDenom = "";
        /**
         * token_out_min_amount is the minimum amount of token_out to be received from
         * the pool.
         *
         * @generated from field: string token_out_min_amount = 4;
         */
        this.tokenOutMinAmount = "";
        /**
         * swap_fee is the swap fee for this swap estimate.
         *
         * @generated from field: string swap_fee = 5;
         */
        this.swapFee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SwapExactAmountIn().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SwapExactAmountIn().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SwapExactAmountIn().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SwapExactAmountIn, a, b);
    }
}
SwapExactAmountIn.runtime = proto3;
SwapExactAmountIn.typeName = "osmosis.cosmwasmpool.v1beta1.SwapExactAmountIn";
SwapExactAmountIn.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token_in", kind: "message", T: Coin },
    { no: 3, name: "token_out_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "token_out_min_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsg
 */
export class SwapExactAmountInSudoMsg extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SwapExactAmountInSudoMsg().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SwapExactAmountInSudoMsg().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SwapExactAmountInSudoMsg().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SwapExactAmountInSudoMsg, a, b);
    }
}
SwapExactAmountInSudoMsg.runtime = proto3;
SwapExactAmountInSudoMsg.typeName = "osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsg";
SwapExactAmountInSudoMsg.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "swap_exact_amount_in", kind: "message", T: SwapExactAmountIn },
]);
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsgResponse
 */
export class SwapExactAmountInSudoMsgResponse extends Message {
    constructor(data) {
        super();
        /**
         * token_out_amount is the token out computed from this swap estimate call.
         *
         * @generated from field: string token_out_amount = 1;
         */
        this.tokenOutAmount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SwapExactAmountInSudoMsgResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SwapExactAmountInSudoMsgResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SwapExactAmountInSudoMsgResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SwapExactAmountInSudoMsgResponse, a, b);
    }
}
SwapExactAmountInSudoMsgResponse.runtime = proto3;
SwapExactAmountInSudoMsgResponse.typeName = "osmosis.cosmwasmpool.v1beta1.SwapExactAmountInSudoMsgResponse";
SwapExactAmountInSudoMsgResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "token_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ===================== SwapExactAmountOut
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.SwapExactAmountOut
 */
export class SwapExactAmountOut extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * token_in_denom is the token denom to be sent too the pool.
         *
         * @generated from field: string token_in_denom = 3;
         */
        this.tokenInDenom = "";
        /**
         * token_in_max_amount is the maximum amount of token_in to be sent to the
         * pool.
         *
         * @generated from field: string token_in_max_amount = 4;
         */
        this.tokenInMaxAmount = "";
        /**
         * swap_fee is the swap fee for this swap estimate.
         *
         * @generated from field: string swap_fee = 5;
         */
        this.swapFee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SwapExactAmountOut().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SwapExactAmountOut().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SwapExactAmountOut().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SwapExactAmountOut, a, b);
    }
}
SwapExactAmountOut.runtime = proto3;
SwapExactAmountOut.typeName = "osmosis.cosmwasmpool.v1beta1.SwapExactAmountOut";
SwapExactAmountOut.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token_out", kind: "message", T: Coin },
    { no: 3, name: "token_in_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "token_in_max_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsg
 */
export class SwapExactAmountOutSudoMsg extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SwapExactAmountOutSudoMsg().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SwapExactAmountOutSudoMsg().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SwapExactAmountOutSudoMsg().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SwapExactAmountOutSudoMsg, a, b);
    }
}
SwapExactAmountOutSudoMsg.runtime = proto3;
SwapExactAmountOutSudoMsg.typeName = "osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsg";
SwapExactAmountOutSudoMsg.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "swap_exact_amount_out", kind: "message", T: SwapExactAmountOut },
]);
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsgResponse
 */
export class SwapExactAmountOutSudoMsgResponse extends Message {
    constructor(data) {
        super();
        /**
         * token_in_amount is the token in computed from this swap estimate call.
         *
         * @generated from field: string token_in_amount = 1;
         */
        this.tokenInAmount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SwapExactAmountOutSudoMsgResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SwapExactAmountOutSudoMsgResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SwapExactAmountOutSudoMsgResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SwapExactAmountOutSudoMsgResponse, a, b);
    }
}
SwapExactAmountOutSudoMsgResponse.runtime = proto3;
SwapExactAmountOutSudoMsgResponse.typeName = "osmosis.cosmwasmpool.v1beta1.SwapExactAmountOutSudoMsgResponse";
SwapExactAmountOutSudoMsgResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "token_in_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=module_sudo_msg_pb.js.map