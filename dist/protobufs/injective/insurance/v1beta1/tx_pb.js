// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/insurance/v1beta1/tx.proto (package injective.insurance.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { OracleType } from "../../oracle/v1beta1/oracle_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./insurance_pb.js";
/**
 * MsgCreateInsuranceFund a message to create an insurance fund for a derivative
 * market.
 *
 * @generated from message injective.insurance.v1beta1.MsgCreateInsuranceFund
 */
export class MsgCreateInsuranceFund extends Message {
    constructor(data) {
        super();
        /**
         * Creator of the insurance fund.
         *
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * Ticker for the derivative market.
         *
         * @generated from field: string ticker = 2;
         */
        this.ticker = "";
        /**
         * Coin denom to use for the market quote denom
         *
         * @generated from field: string quote_denom = 3;
         */
        this.quoteDenom = "";
        /**
         * Oracle base currency of the derivative market OR the oracle symbol for the
         * binary options market.
         *
         * @generated from field: string oracle_base = 4;
         */
        this.oracleBase = "";
        /**
         * Oracle quote currency of the derivative market OR the oracle provider for
         * the binary options market.
         *
         * @generated from field: string oracle_quote = 5;
         */
        this.oracleQuote = "";
        /**
         * Oracle type of the binary options or derivative market
         *
         * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 6;
         */
        this.oracleType = OracleType.Unspecified;
        /**
         * Expiration time of the derivative market. Should be -1 for perpetual or -2
         * for binary options markets.
         *
         * @generated from field: int64 expiry = 7;
         */
        this.expiry = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateInsuranceFund().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateInsuranceFund().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateInsuranceFund().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateInsuranceFund, a, b);
    }
}
MsgCreateInsuranceFund.runtime = proto3;
MsgCreateInsuranceFund.typeName = "injective.insurance.v1beta1.MsgCreateInsuranceFund";
MsgCreateInsuranceFund.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ticker", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "oracle_base", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "oracle_quote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "oracle_type", kind: "enum", T: proto3.getEnumType(OracleType) },
    { no: 7, name: "expiry", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "initial_deposit", kind: "message", T: Coin },
]);
/**
 * @generated from message injective.insurance.v1beta1.MsgCreateInsuranceFundResponse
 */
export class MsgCreateInsuranceFundResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateInsuranceFundResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateInsuranceFundResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateInsuranceFundResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateInsuranceFundResponse, a, b);
    }
}
MsgCreateInsuranceFundResponse.runtime = proto3;
MsgCreateInsuranceFundResponse.typeName = "injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
MsgCreateInsuranceFundResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgUnderwrite defines a message for depositing coins to underwrite an
 * insurance fund
 *
 * @generated from message injective.insurance.v1beta1.MsgUnderwrite
 */
export class MsgUnderwrite extends Message {
    constructor(data) {
        super();
        /**
         * Address of the underwriter.
         *
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * MarketID of the insurance fund.
         *
         * @generated from field: string market_id = 2;
         */
        this.marketId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUnderwrite().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUnderwrite().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUnderwrite().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUnderwrite, a, b);
    }
}
MsgUnderwrite.runtime = proto3;
MsgUnderwrite.typeName = "injective.insurance.v1beta1.MsgUnderwrite";
MsgUnderwrite.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "deposit", kind: "message", T: Coin },
]);
/**
 * @generated from message injective.insurance.v1beta1.MsgUnderwriteResponse
 */
export class MsgUnderwriteResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUnderwriteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUnderwriteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUnderwriteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUnderwriteResponse, a, b);
    }
}
MsgUnderwriteResponse.runtime = proto3;
MsgUnderwriteResponse.typeName = "injective.insurance.v1beta1.MsgUnderwriteResponse";
MsgUnderwriteResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgRequestRedemption defines a message for requesting a redemption of the
 * sender's insurance fund tokens
 *
 * @generated from message injective.insurance.v1beta1.MsgRequestRedemption
 */
export class MsgRequestRedemption extends Message {
    constructor(data) {
        super();
        /**
         * Address of the underwriter requesting a redemption.
         *
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * MarketID of the insurance fund.
         *
         * @generated from field: string market_id = 2;
         */
        this.marketId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRequestRedemption().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRequestRedemption().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRequestRedemption().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgRequestRedemption, a, b);
    }
}
MsgRequestRedemption.runtime = proto3;
MsgRequestRedemption.typeName = "injective.insurance.v1beta1.MsgRequestRedemption";
MsgRequestRedemption.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin },
]);
/**
 * @generated from message injective.insurance.v1beta1.MsgRequestRedemptionResponse
 */
export class MsgRequestRedemptionResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRequestRedemptionResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRequestRedemptionResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRequestRedemptionResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgRequestRedemptionResponse, a, b);
    }
}
MsgRequestRedemptionResponse.runtime = proto3;
MsgRequestRedemptionResponse.typeName = "injective.insurance.v1beta1.MsgRequestRedemptionResponse";
MsgRequestRedemptionResponse.fields = proto3.util.newFieldList(() => []);
/**
 * @generated from message injective.insurance.v1beta1.MsgUpdateParams
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
MsgUpdateParams.typeName = "injective.insurance.v1beta1.MsgUpdateParams";
MsgUpdateParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
]);
/**
 * @generated from message injective.insurance.v1beta1.MsgUpdateParamsResponse
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
MsgUpdateParamsResponse.typeName = "injective.insurance.v1beta1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map