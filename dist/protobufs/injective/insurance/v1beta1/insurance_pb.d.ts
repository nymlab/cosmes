import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { OracleType } from "../../oracle/v1beta1/oracle_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message injective.insurance.v1beta1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * default_redemption_notice_period_duration defines the default minimum
     * notice period duration that must pass after an underwriter sends a
     * redemption request before the underwriter can claim his tokens
     *
     * @generated from field: google.protobuf.Duration default_redemption_notice_period_duration = 1;
     */
    defaultRedemptionNoticePeriodDuration?: Duration;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * @generated from message injective.insurance.v1beta1.InsuranceFund
 */
export declare class InsuranceFund extends Message<InsuranceFund> {
    /**
     * deposit denomination for the given insurance fund
     *
     * @generated from field: string deposit_denom = 1;
     */
    depositDenom: string;
    /**
     * insurance fund pool token denomination for the given insurance fund
     *
     * @generated from field: string insurance_pool_token_denom = 2;
     */
    insurancePoolTokenDenom: string;
    /**
     * redemption_notice_period_duration defines the minimum notice period
     * duration that must pass after an underwriter sends a redemption request
     * before the underwriter can claim his tokens
     *
     * @generated from field: google.protobuf.Duration redemption_notice_period_duration = 3;
     */
    redemptionNoticePeriodDuration?: Duration;
    /**
     * balance of fund
     *
     * @generated from field: string balance = 4;
     */
    balance: string;
    /**
     * total share tokens minted
     *
     * @generated from field: string total_share = 5;
     */
    totalShare: string;
    /**
     * marketID of the derivative market
     *
     * @generated from field: string market_id = 6;
     */
    marketId: string;
    /**
     * ticker of the derivative market
     *
     * @generated from field: string market_ticker = 7;
     */
    marketTicker: string;
    /**
     * Oracle base currency of the derivative market OR the oracle symbol for the
     * binary options market.
     *
     * @generated from field: string oracle_base = 8;
     */
    oracleBase: string;
    /**
     * Oracle quote currency of the derivative market OR the oracle provider for
     * the binary options market.
     *
     * @generated from field: string oracle_quote = 9;
     */
    oracleQuote: string;
    /**
     * Oracle type of the binary options or derivative market
     *
     * @generated from field: injective.oracle.v1beta1.OracleType oracle_type = 10;
     */
    oracleType: OracleType;
    /**
     * Expiration time of the derivative market. Should be -1 for perpetual or -2
     * for binary options markets.
     *
     * @generated from field: int64 expiry = 11;
     */
    expiry: bigint;
    constructor(data?: PartialMessage<InsuranceFund>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.InsuranceFund";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InsuranceFund;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InsuranceFund;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InsuranceFund;
    static equals(a: InsuranceFund | PlainMessage<InsuranceFund> | undefined, b: InsuranceFund | PlainMessage<InsuranceFund> | undefined): boolean;
}
/**
 * @generated from message injective.insurance.v1beta1.RedemptionSchedule
 */
export declare class RedemptionSchedule extends Message<RedemptionSchedule> {
    /**
     * id of redemption schedule
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * marketId of insurance fund for the redemption
     *
     * @generated from field: string marketId = 2;
     */
    marketId: string;
    /**
     * address of the redeemer
     *
     * @generated from field: string redeemer = 3;
     */
    redeemer: string;
    /**
     * the time after which the redemption can be claimed
     *
     * @generated from field: google.protobuf.Timestamp claimable_redemption_time = 4;
     */
    claimableRedemptionTime?: Timestamp;
    /**
     * the insurance_pool_token amount to redeem
     *
     * @generated from field: cosmos.base.v1beta1.Coin redemption_amount = 5;
     */
    redemptionAmount?: Coin;
    constructor(data?: PartialMessage<RedemptionSchedule>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.RedemptionSchedule";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedemptionSchedule;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedemptionSchedule;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedemptionSchedule;
    static equals(a: RedemptionSchedule | PlainMessage<RedemptionSchedule> | undefined, b: RedemptionSchedule | PlainMessage<RedemptionSchedule> | undefined): boolean;
}
//# sourceMappingURL=insurance_pb.d.ts.map