import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { OracleType } from "../../oracle/v1beta1/oracle_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./insurance_pb.js";
/**
 * MsgCreateInsuranceFund a message to create an insurance fund for a derivative
 * market.
 *
 * @generated from message injective.insurance.v1beta1.MsgCreateInsuranceFund
 */
export declare class MsgCreateInsuranceFund extends Message<MsgCreateInsuranceFund> {
    /**
     * Creator of the insurance fund.
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Ticker for the derivative market.
     *
     * @generated from field: string ticker = 2;
     */
    ticker: string;
    /**
     * Coin denom to use for the market quote denom
     *
     * @generated from field: string quote_denom = 3;
     */
    quoteDenom: string;
    /**
     * Oracle base currency of the derivative market OR the oracle symbol for the
     * binary options market.
     *
     * @generated from field: string oracle_base = 4;
     */
    oracleBase: string;
    /**
     * Oracle quote currency of the derivative market OR the oracle provider for
     * the binary options market.
     *
     * @generated from field: string oracle_quote = 5;
     */
    oracleQuote: string;
    /**
     * Oracle type of the binary options or derivative market
     *
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 6;
     */
    oracleType: OracleType;
    /**
     * Expiration time of the derivative market. Should be -1 for perpetual or -2
     * for binary options markets.
     *
     * @generated from field: int64 expiry = 7;
     */
    expiry: bigint;
    /**
     * Initial deposit of the insurance fund
     *
     * @generated from field: cosmos.base.v1beta1.Coin initial_deposit = 8;
     */
    initialDeposit?: Coin;
    constructor(data?: PartialMessage<MsgCreateInsuranceFund>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.MsgCreateInsuranceFund";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateInsuranceFund;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateInsuranceFund;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateInsuranceFund;
    static equals(a: MsgCreateInsuranceFund | PlainMessage<MsgCreateInsuranceFund> | undefined, b: MsgCreateInsuranceFund | PlainMessage<MsgCreateInsuranceFund> | undefined): boolean;
}
/**
 * @generated from message injective.insurance.v1beta1.MsgCreateInsuranceFundResponse
 */
export declare class MsgCreateInsuranceFundResponse extends Message<MsgCreateInsuranceFundResponse> {
    constructor(data?: PartialMessage<MsgCreateInsuranceFundResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateInsuranceFundResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateInsuranceFundResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateInsuranceFundResponse;
    static equals(a: MsgCreateInsuranceFundResponse | PlainMessage<MsgCreateInsuranceFundResponse> | undefined, b: MsgCreateInsuranceFundResponse | PlainMessage<MsgCreateInsuranceFundResponse> | undefined): boolean;
}
/**
 * MsgUnderwrite defines a message for depositing coins to underwrite an
 * insurance fund
 *
 * @generated from message injective.insurance.v1beta1.MsgUnderwrite
 */
export declare class MsgUnderwrite extends Message<MsgUnderwrite> {
    /**
     * Address of the underwriter.
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * MarketID of the insurance fund.
     *
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    /**
     * Amount of quote_denom to underwrite the insurance fund.
     *
     * @generated from field: cosmos.base.v1beta1.Coin deposit = 3;
     */
    deposit?: Coin;
    constructor(data?: PartialMessage<MsgUnderwrite>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.MsgUnderwrite";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnderwrite;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnderwrite;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnderwrite;
    static equals(a: MsgUnderwrite | PlainMessage<MsgUnderwrite> | undefined, b: MsgUnderwrite | PlainMessage<MsgUnderwrite> | undefined): boolean;
}
/**
 * @generated from message injective.insurance.v1beta1.MsgUnderwriteResponse
 */
export declare class MsgUnderwriteResponse extends Message<MsgUnderwriteResponse> {
    constructor(data?: PartialMessage<MsgUnderwriteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.MsgUnderwriteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnderwriteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnderwriteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnderwriteResponse;
    static equals(a: MsgUnderwriteResponse | PlainMessage<MsgUnderwriteResponse> | undefined, b: MsgUnderwriteResponse | PlainMessage<MsgUnderwriteResponse> | undefined): boolean;
}
/**
 * MsgRequestRedemption defines a message for requesting a redemption of the
 * sender's insurance fund tokens
 *
 * @generated from message injective.insurance.v1beta1.MsgRequestRedemption
 */
export declare class MsgRequestRedemption extends Message<MsgRequestRedemption> {
    /**
     * Address of the underwriter requesting a redemption.
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * MarketID of the insurance fund.
     *
     * @generated from field: string market_id = 2;
     */
    marketId: string;
    /**
     * Insurance fund share token amount to be redeemed.
     *
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<MsgRequestRedemption>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.MsgRequestRedemption";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRequestRedemption;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRequestRedemption;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRequestRedemption;
    static equals(a: MsgRequestRedemption | PlainMessage<MsgRequestRedemption> | undefined, b: MsgRequestRedemption | PlainMessage<MsgRequestRedemption> | undefined): boolean;
}
/**
 * @generated from message injective.insurance.v1beta1.MsgRequestRedemptionResponse
 */
export declare class MsgRequestRedemptionResponse extends Message<MsgRequestRedemptionResponse> {
    constructor(data?: PartialMessage<MsgRequestRedemptionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.MsgRequestRedemptionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRequestRedemptionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRequestRedemptionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRequestRedemptionResponse;
    static equals(a: MsgRequestRedemptionResponse | PlainMessage<MsgRequestRedemptionResponse> | undefined, b: MsgRequestRedemptionResponse | PlainMessage<MsgRequestRedemptionResponse> | undefined): boolean;
}
/**
 * @generated from message injective.insurance.v1beta1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the insurance parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: injective.insurance.v1beta1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * @generated from message injective.insurance.v1beta1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map