import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { InsuranceFund, RedemptionSchedule } from "./insurance_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message injective.insurance.v1beta1.EventInsuranceFundUpdate
 */
export declare class EventInsuranceFundUpdate extends Message<EventInsuranceFundUpdate> {
    /**
     * @generated from field: injective.insurance.v1beta1.InsuranceFund fund = 1;
     */
    fund?: InsuranceFund;
    constructor(data?: PartialMessage<EventInsuranceFundUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.EventInsuranceFundUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventInsuranceFundUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventInsuranceFundUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventInsuranceFundUpdate;
    static equals(a: EventInsuranceFundUpdate | PlainMessage<EventInsuranceFundUpdate> | undefined, b: EventInsuranceFundUpdate | PlainMessage<EventInsuranceFundUpdate> | undefined): boolean;
}
/**
 * @generated from message injective.insurance.v1beta1.EventRequestRedemption
 */
export declare class EventRequestRedemption extends Message<EventRequestRedemption> {
    /**
     * @generated from field: injective.insurance.v1beta1.RedemptionSchedule schedule = 1;
     */
    schedule?: RedemptionSchedule;
    constructor(data?: PartialMessage<EventRequestRedemption>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.EventRequestRedemption";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventRequestRedemption;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventRequestRedemption;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventRequestRedemption;
    static equals(a: EventRequestRedemption | PlainMessage<EventRequestRedemption> | undefined, b: EventRequestRedemption | PlainMessage<EventRequestRedemption> | undefined): boolean;
}
/**
 * @generated from message injective.insurance.v1beta1.EventWithdrawRedemption
 */
export declare class EventWithdrawRedemption extends Message<EventWithdrawRedemption> {
    /**
     * redemption schedule triggered withdraw
     *
     * @generated from field: injective.insurance.v1beta1.RedemptionSchedule schedule = 1;
     */
    schedule?: RedemptionSchedule;
    /**
     * redeem coin amount in base_currency
     *
     * @generated from field: cosmos.base.v1beta1.Coin redeem_coin = 2;
     */
    redeemCoin?: Coin;
    constructor(data?: PartialMessage<EventWithdrawRedemption>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.EventWithdrawRedemption";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventWithdrawRedemption;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventWithdrawRedemption;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventWithdrawRedemption;
    static equals(a: EventWithdrawRedemption | PlainMessage<EventWithdrawRedemption> | undefined, b: EventWithdrawRedemption | PlainMessage<EventWithdrawRedemption> | undefined): boolean;
}
/**
 * @generated from message injective.insurance.v1beta1.EventUnderwrite
 */
export declare class EventUnderwrite extends Message<EventUnderwrite> {
    /**
     * address of the underwriter
     *
     * @generated from field: string underwriter = 1;
     */
    underwriter: string;
    /**
     * marketId of insurance fund for the redemption
     *
     * @generated from field: string marketId = 2;
     */
    marketId: string;
    /**
     * deposit coin amount
     *
     * @generated from field: cosmos.base.v1beta1.Coin deposit = 3;
     */
    deposit?: Coin;
    /**
     * share coin amount
     *
     * @generated from field: cosmos.base.v1beta1.Coin shares = 4;
     */
    shares?: Coin;
    constructor(data?: PartialMessage<EventUnderwrite>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.EventUnderwrite";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventUnderwrite;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventUnderwrite;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventUnderwrite;
    static equals(a: EventUnderwrite | PlainMessage<EventUnderwrite> | undefined, b: EventUnderwrite | PlainMessage<EventUnderwrite> | undefined): boolean;
}
/**
 * @generated from message injective.insurance.v1beta1.EventInsuranceWithdraw
 */
export declare class EventInsuranceWithdraw extends Message<EventInsuranceWithdraw> {
    /**
     * @generated from field: string market_id = 1;
     */
    marketId: string;
    /**
     * @generated from field: string market_ticker = 2;
     */
    marketTicker: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin withdrawal = 3;
     */
    withdrawal?: Coin;
    constructor(data?: PartialMessage<EventInsuranceWithdraw>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.insurance.v1beta1.EventInsuranceWithdraw";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventInsuranceWithdraw;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventInsuranceWithdraw;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventInsuranceWithdraw;
    static equals(a: EventInsuranceWithdraw | PlainMessage<EventInsuranceWithdraw> | undefined, b: EventInsuranceWithdraw | PlainMessage<EventInsuranceWithdraw> | undefined): boolean;
}
//# sourceMappingURL=events_pb.d.ts.map