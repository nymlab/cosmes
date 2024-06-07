// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/auction/v1beta1/tx.proto (package injective.auction.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./auction_pb.js";
/**
 * Bid defines a SDK message for placing a bid for an auction
 *
 * @generated from message injective.auction.v1beta1.MsgBid
 */
export class MsgBid extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * the current auction round being bid on
         *
         * @generated from field: uint64 round = 3;
         */
        this.round = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgBid().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgBid().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgBid().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgBid, a, b);
    }
}
MsgBid.runtime = proto3;
MsgBid.typeName = "injective.auction.v1beta1.MsgBid";
MsgBid.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bid_amount", kind: "message", T: Coin },
    { no: 3, name: "round", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * @generated from message injective.auction.v1beta1.MsgBidResponse
 */
export class MsgBidResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgBidResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgBidResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgBidResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgBidResponse, a, b);
    }
}
MsgBidResponse.runtime = proto3;
MsgBidResponse.typeName = "injective.auction.v1beta1.MsgBidResponse";
MsgBidResponse.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message injective.auction.v1beta1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message {
    constructor(data) {
        super();
        /**
         * authority is the address of the governance account.
         *
         * @generated from field: string authority = 1;
         */
        this.authority = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateParams, a, b);
    }
}
MsgUpdateParams.runtime = proto3;
MsgUpdateParams.typeName = "injective.auction.v1beta1.MsgUpdateParams";
MsgUpdateParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
]);
/**
 * @generated from message injective.auction.v1beta1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateParamsResponse, a, b);
    }
}
MsgUpdateParamsResponse.runtime = proto3;
MsgUpdateParamsResponse.typeName = "injective.auction.v1beta1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map