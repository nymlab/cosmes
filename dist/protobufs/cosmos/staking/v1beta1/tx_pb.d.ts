import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { CommissionRates, Description, Params } from "./staking_pb.js";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * MsgCreateValidator defines a SDK message for creating a new validator.
 *
 * @generated from message cosmos.staking.v1beta1.MsgCreateValidator
 */
export declare class MsgCreateValidator extends Message<MsgCreateValidator> {
    /**
     * @generated from field: cosmos.staking.v1beta1.Description description = 1;
     */
    description?: Description;
    /**
     * @generated from field: cosmos.staking.v1beta1.CommissionRates commission = 2;
     */
    commission?: CommissionRates;
    /**
     * @generated from field: string min_self_delegation = 3;
     */
    minSelfDelegation: string;
    /**
     * @generated from field: string delegator_address = 4;
     */
    delegatorAddress: string;
    /**
     * @generated from field: string validator_address = 5;
     */
    validatorAddress: string;
    /**
     * @generated from field: google.protobuf.Any pubkey = 6;
     */
    pubkey?: Any;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin value = 7;
     */
    value?: Coin;
    constructor(data?: PartialMessage<MsgCreateValidator>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgCreateValidator";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateValidator;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateValidator;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateValidator;
    static equals(a: MsgCreateValidator | PlainMessage<MsgCreateValidator> | undefined, b: MsgCreateValidator | PlainMessage<MsgCreateValidator> | undefined): boolean;
}
/**
 * MsgCreateValidatorResponse defines the Msg/CreateValidator response type.
 *
 * @generated from message cosmos.staking.v1beta1.MsgCreateValidatorResponse
 */
export declare class MsgCreateValidatorResponse extends Message<MsgCreateValidatorResponse> {
    constructor(data?: PartialMessage<MsgCreateValidatorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgCreateValidatorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateValidatorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateValidatorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateValidatorResponse;
    static equals(a: MsgCreateValidatorResponse | PlainMessage<MsgCreateValidatorResponse> | undefined, b: MsgCreateValidatorResponse | PlainMessage<MsgCreateValidatorResponse> | undefined): boolean;
}
/**
 * MsgEditValidator defines a SDK message for editing an existing validator.
 *
 * @generated from message cosmos.staking.v1beta1.MsgEditValidator
 */
export declare class MsgEditValidator extends Message<MsgEditValidator> {
    /**
     * @generated from field: cosmos.staking.v1beta1.Description description = 1;
     */
    description?: Description;
    /**
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     *
     * @generated from field: string commission_rate = 3;
     */
    commissionRate: string;
    /**
     * @generated from field: string min_self_delegation = 4;
     */
    minSelfDelegation: string;
    constructor(data?: PartialMessage<MsgEditValidator>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgEditValidator";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgEditValidator;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgEditValidator;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgEditValidator;
    static equals(a: MsgEditValidator | PlainMessage<MsgEditValidator> | undefined, b: MsgEditValidator | PlainMessage<MsgEditValidator> | undefined): boolean;
}
/**
 * MsgEditValidatorResponse defines the Msg/EditValidator response type.
 *
 * @generated from message cosmos.staking.v1beta1.MsgEditValidatorResponse
 */
export declare class MsgEditValidatorResponse extends Message<MsgEditValidatorResponse> {
    constructor(data?: PartialMessage<MsgEditValidatorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgEditValidatorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgEditValidatorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgEditValidatorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgEditValidatorResponse;
    static equals(a: MsgEditValidatorResponse | PlainMessage<MsgEditValidatorResponse> | undefined, b: MsgEditValidatorResponse | PlainMessage<MsgEditValidatorResponse> | undefined): boolean;
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 *
 * @generated from message cosmos.staking.v1beta1.MsgDelegate
 */
export declare class MsgDelegate extends Message<MsgDelegate> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<MsgDelegate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgDelegate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDelegate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDelegate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDelegate;
    static equals(a: MsgDelegate | PlainMessage<MsgDelegate> | undefined, b: MsgDelegate | PlainMessage<MsgDelegate> | undefined): boolean;
}
/**
 * MsgDelegateResponse defines the Msg/Delegate response type.
 *
 * @generated from message cosmos.staking.v1beta1.MsgDelegateResponse
 */
export declare class MsgDelegateResponse extends Message<MsgDelegateResponse> {
    constructor(data?: PartialMessage<MsgDelegateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgDelegateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDelegateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDelegateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDelegateResponse;
    static equals(a: MsgDelegateResponse | PlainMessage<MsgDelegateResponse> | undefined, b: MsgDelegateResponse | PlainMessage<MsgDelegateResponse> | undefined): boolean;
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 *
 * @generated from message cosmos.staking.v1beta1.MsgBeginRedelegate
 */
export declare class MsgBeginRedelegate extends Message<MsgBeginRedelegate> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from field: string validator_src_address = 2;
     */
    validatorSrcAddress: string;
    /**
     * @generated from field: string validator_dst_address = 3;
     */
    validatorDstAddress: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 4;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<MsgBeginRedelegate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgBeginRedelegate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBeginRedelegate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBeginRedelegate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBeginRedelegate;
    static equals(a: MsgBeginRedelegate | PlainMessage<MsgBeginRedelegate> | undefined, b: MsgBeginRedelegate | PlainMessage<MsgBeginRedelegate> | undefined): boolean;
}
/**
 * MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type.
 *
 * @generated from message cosmos.staking.v1beta1.MsgBeginRedelegateResponse
 */
export declare class MsgBeginRedelegateResponse extends Message<MsgBeginRedelegateResponse> {
    /**
     * @generated from field: google.protobuf.Timestamp completion_time = 1;
     */
    completionTime?: Timestamp;
    constructor(data?: PartialMessage<MsgBeginRedelegateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgBeginRedelegateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBeginRedelegateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBeginRedelegateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBeginRedelegateResponse;
    static equals(a: MsgBeginRedelegateResponse | PlainMessage<MsgBeginRedelegateResponse> | undefined, b: MsgBeginRedelegateResponse | PlainMessage<MsgBeginRedelegateResponse> | undefined): boolean;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 *
 * @generated from message cosmos.staking.v1beta1.MsgUndelegate
 */
export declare class MsgUndelegate extends Message<MsgUndelegate> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<MsgUndelegate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgUndelegate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUndelegate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUndelegate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUndelegate;
    static equals(a: MsgUndelegate | PlainMessage<MsgUndelegate> | undefined, b: MsgUndelegate | PlainMessage<MsgUndelegate> | undefined): boolean;
}
/**
 * MsgUndelegateResponse defines the Msg/Undelegate response type.
 *
 * @generated from message cosmos.staking.v1beta1.MsgUndelegateResponse
 */
export declare class MsgUndelegateResponse extends Message<MsgUndelegateResponse> {
    /**
     * @generated from field: google.protobuf.Timestamp completion_time = 1;
     */
    completionTime?: Timestamp;
    constructor(data?: PartialMessage<MsgUndelegateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgUndelegateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUndelegateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUndelegateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUndelegateResponse;
    static equals(a: MsgUndelegateResponse | PlainMessage<MsgUndelegateResponse> | undefined, b: MsgUndelegateResponse | PlainMessage<MsgUndelegateResponse> | undefined): boolean;
}
/**
 * MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.staking.v1beta1.MsgCancelUnbondingDelegation
 */
export declare class MsgCancelUnbondingDelegation extends Message<MsgCancelUnbondingDelegation> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    /**
     * amount is always less than or equal to unbonding delegation entry balance
     *
     * @generated from field: cosmos.base.v1beta1.Coin amount = 3;
     */
    amount?: Coin;
    /**
     * creation_height is the height which the unbonding took place.
     *
     * @generated from field: int64 creation_height = 4;
     */
    creationHeight: bigint;
    constructor(data?: PartialMessage<MsgCancelUnbondingDelegation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgCancelUnbondingDelegation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelUnbondingDelegation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelUnbondingDelegation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelUnbondingDelegation;
    static equals(a: MsgCancelUnbondingDelegation | PlainMessage<MsgCancelUnbondingDelegation> | undefined, b: MsgCancelUnbondingDelegation | PlainMessage<MsgCancelUnbondingDelegation> | undefined): boolean;
}
/**
 * MsgCancelUnbondingDelegationResponse
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse
 */
export declare class MsgCancelUnbondingDelegationResponse extends Message<MsgCancelUnbondingDelegationResponse> {
    constructor(data?: PartialMessage<MsgCancelUnbondingDelegationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelUnbondingDelegationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelUnbondingDelegationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelUnbondingDelegationResponse;
    static equals(a: MsgCancelUnbondingDelegationResponse | PlainMessage<MsgCancelUnbondingDelegationResponse> | undefined, b: MsgCancelUnbondingDelegationResponse | PlainMessage<MsgCancelUnbondingDelegationResponse> | undefined): boolean;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.staking.v1beta1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten).
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the x/staking parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: cosmos.staking.v1beta1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.staking.v1beta1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.staking.v1beta1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map