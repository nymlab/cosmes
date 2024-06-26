import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { Params } from "./distribution_pb.js";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 *
 * @generated from message cosmos.distribution.v1beta1.MsgSetWithdrawAddress
 */
export declare class MsgSetWithdrawAddress extends Message<MsgSetWithdrawAddress> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from field: string withdraw_address = 2;
     */
    withdrawAddress: string;
    constructor(data?: PartialMessage<MsgSetWithdrawAddress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetWithdrawAddress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetWithdrawAddress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetWithdrawAddress;
    static equals(a: MsgSetWithdrawAddress | PlainMessage<MsgSetWithdrawAddress> | undefined, b: MsgSetWithdrawAddress | PlainMessage<MsgSetWithdrawAddress> | undefined): boolean;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse
 */
export declare class MsgSetWithdrawAddressResponse extends Message<MsgSetWithdrawAddressResponse> {
    constructor(data?: PartialMessage<MsgSetWithdrawAddressResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetWithdrawAddressResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetWithdrawAddressResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetWithdrawAddressResponse;
    static equals(a: MsgSetWithdrawAddressResponse | PlainMessage<MsgSetWithdrawAddressResponse> | undefined, b: MsgSetWithdrawAddressResponse | PlainMessage<MsgSetWithdrawAddressResponse> | undefined): boolean;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
 */
export declare class MsgWithdrawDelegatorReward extends Message<MsgWithdrawDelegatorReward> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    constructor(data?: PartialMessage<MsgWithdrawDelegatorReward>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawDelegatorReward;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawDelegatorReward;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawDelegatorReward;
    static equals(a: MsgWithdrawDelegatorReward | PlainMessage<MsgWithdrawDelegatorReward> | undefined, b: MsgWithdrawDelegatorReward | PlainMessage<MsgWithdrawDelegatorReward> | undefined): boolean;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse
 */
export declare class MsgWithdrawDelegatorRewardResponse extends Message<MsgWithdrawDelegatorRewardResponse> {
    /**
     * Since: cosmos-sdk 0.46
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<MsgWithdrawDelegatorRewardResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawDelegatorRewardResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawDelegatorRewardResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawDelegatorRewardResponse;
    static equals(a: MsgWithdrawDelegatorRewardResponse | PlainMessage<MsgWithdrawDelegatorRewardResponse> | undefined, b: MsgWithdrawDelegatorRewardResponse | PlainMessage<MsgWithdrawDelegatorRewardResponse> | undefined): boolean;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission
 */
export declare class MsgWithdrawValidatorCommission extends Message<MsgWithdrawValidatorCommission> {
    /**
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    constructor(data?: PartialMessage<MsgWithdrawValidatorCommission>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawValidatorCommission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawValidatorCommission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawValidatorCommission;
    static equals(a: MsgWithdrawValidatorCommission | PlainMessage<MsgWithdrawValidatorCommission> | undefined, b: MsgWithdrawValidatorCommission | PlainMessage<MsgWithdrawValidatorCommission> | undefined): boolean;
}
/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse
 */
export declare class MsgWithdrawValidatorCommissionResponse extends Message<MsgWithdrawValidatorCommissionResponse> {
    /**
     * Since: cosmos-sdk 0.46
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<MsgWithdrawValidatorCommissionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawValidatorCommissionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawValidatorCommissionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawValidatorCommissionResponse;
    static equals(a: MsgWithdrawValidatorCommissionResponse | PlainMessage<MsgWithdrawValidatorCommissionResponse> | undefined, b: MsgWithdrawValidatorCommissionResponse | PlainMessage<MsgWithdrawValidatorCommissionResponse> | undefined): boolean;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgFundCommunityPool
 */
export declare class MsgFundCommunityPool extends Message<MsgFundCommunityPool> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    /**
     * @generated from field: string depositor = 2;
     */
    depositor: string;
    constructor(data?: PartialMessage<MsgFundCommunityPool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.MsgFundCommunityPool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFundCommunityPool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFundCommunityPool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFundCommunityPool;
    static equals(a: MsgFundCommunityPool | PlainMessage<MsgFundCommunityPool> | undefined, b: MsgFundCommunityPool | PlainMessage<MsgFundCommunityPool> | undefined): boolean;
}
/**
 * MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse
 */
export declare class MsgFundCommunityPoolResponse extends Message<MsgFundCommunityPoolResponse> {
    constructor(data?: PartialMessage<MsgFundCommunityPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgFundCommunityPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgFundCommunityPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgFundCommunityPoolResponse;
    static equals(a: MsgFundCommunityPoolResponse | PlainMessage<MsgFundCommunityPoolResponse> | undefined, b: MsgFundCommunityPoolResponse | PlainMessage<MsgFundCommunityPoolResponse> | undefined): boolean;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.distribution.v1beta1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten).
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the x/distribution parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: cosmos.distribution.v1beta1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.MsgUpdateParams";
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
 * @generated from message cosmos.distribution.v1beta1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.distribution.v1beta1.MsgCommunityPoolSpend
 */
export declare class MsgCommunityPoolSpend extends Message<MsgCommunityPoolSpend> {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten).
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * @generated from field: string recipient = 2;
     */
    recipient: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<MsgCommunityPoolSpend>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.MsgCommunityPoolSpend";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCommunityPoolSpend;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCommunityPoolSpend;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCommunityPoolSpend;
    static equals(a: MsgCommunityPoolSpend | PlainMessage<MsgCommunityPoolSpend> | undefined, b: MsgCommunityPoolSpend | PlainMessage<MsgCommunityPoolSpend> | undefined): boolean;
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse
 */
export declare class MsgCommunityPoolSpendResponse extends Message<MsgCommunityPoolSpendResponse> {
    constructor(data?: PartialMessage<MsgCommunityPoolSpendResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCommunityPoolSpendResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCommunityPoolSpendResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCommunityPoolSpendResponse;
    static equals(a: MsgCommunityPoolSpendResponse | PlainMessage<MsgCommunityPoolSpendResponse> | undefined, b: MsgCommunityPoolSpendResponse | PlainMessage<MsgCommunityPoolSpendResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map