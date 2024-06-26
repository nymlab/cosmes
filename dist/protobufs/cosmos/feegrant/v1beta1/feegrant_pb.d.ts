import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 *
 * @generated from message cosmos.feegrant.v1beta1.BasicAllowance
 */
export declare class BasicAllowance extends Message<BasicAllowance> {
    /**
     * spend_limit specifies the maximum amount of coins that can be spent
     * by this allowance and will be updated as coins are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin spend_limit = 1;
     */
    spendLimit: Coin[];
    /**
     * expiration specifies an optional time when this allowance expires
     *
     * @generated from field: google.protobuf.Timestamp expiration = 2;
     */
    expiration?: Timestamp;
    constructor(data?: PartialMessage<BasicAllowance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.BasicAllowance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BasicAllowance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BasicAllowance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BasicAllowance;
    static equals(a: BasicAllowance | PlainMessage<BasicAllowance> | undefined, b: BasicAllowance | PlainMessage<BasicAllowance> | undefined): boolean;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 *
 * @generated from message cosmos.feegrant.v1beta1.PeriodicAllowance
 */
export declare class PeriodicAllowance extends Message<PeriodicAllowance> {
    /**
     * basic specifies a struct of `BasicAllowance`
     *
     * @generated from field: cosmos.feegrant.v1beta1.BasicAllowance basic = 1;
     */
    basic?: BasicAllowance;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     *
     * @generated from field: google.protobuf.Duration period = 2;
     */
    period?: Duration;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin period_spend_limit = 3;
     */
    periodSpendLimit: Coin[];
    /**
     * period_can_spend is the number of coins left to be spent before the period_reset time
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin period_can_spend = 4;
     */
    periodCanSpend: Coin[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     *
     * @generated from field: google.protobuf.Timestamp period_reset = 5;
     */
    periodReset?: Timestamp;
    constructor(data?: PartialMessage<PeriodicAllowance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.PeriodicAllowance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PeriodicAllowance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PeriodicAllowance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PeriodicAllowance;
    static equals(a: PeriodicAllowance | PlainMessage<PeriodicAllowance> | undefined, b: PeriodicAllowance | PlainMessage<PeriodicAllowance> | undefined): boolean;
}
/**
 * AllowedMsgAllowance creates allowance only for specified message types.
 *
 * @generated from message cosmos.feegrant.v1beta1.AllowedMsgAllowance
 */
export declare class AllowedMsgAllowance extends Message<AllowedMsgAllowance> {
    /**
     * allowance can be any of basic and periodic fee allowance.
     *
     * @generated from field: google.protobuf.Any allowance = 1;
     */
    allowance?: Any;
    /**
     * allowed_messages are the messages for which the grantee has the access.
     *
     * @generated from field: repeated string allowed_messages = 2;
     */
    allowedMessages: string[];
    constructor(data?: PartialMessage<AllowedMsgAllowance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.AllowedMsgAllowance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllowedMsgAllowance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllowedMsgAllowance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllowedMsgAllowance;
    static equals(a: AllowedMsgAllowance | PlainMessage<AllowedMsgAllowance> | undefined, b: AllowedMsgAllowance | PlainMessage<AllowedMsgAllowance> | undefined): boolean;
}
/**
 * Grant is stored in the KVStore to record a grant with full context
 *
 * @generated from message cosmos.feegrant.v1beta1.Grant
 */
export declare class Grant extends Message<Grant> {
    /**
     * granter is the address of the user granting an allowance of their funds.
     *
     * @generated from field: string granter = 1;
     */
    granter: string;
    /**
     * grantee is the address of the user being granted an allowance of another user's funds.
     *
     * @generated from field: string grantee = 2;
     */
    grantee: string;
    /**
     * allowance can be any of basic, periodic, allowed fee allowance.
     *
     * @generated from field: google.protobuf.Any allowance = 3;
     */
    allowance?: Any;
    constructor(data?: PartialMessage<Grant>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.Grant";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Grant;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Grant;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Grant;
    static equals(a: Grant | PlainMessage<Grant> | undefined, b: Grant | PlainMessage<Grant> | undefined): boolean;
}
//# sourceMappingURL=feegrant_pb.d.ts.map