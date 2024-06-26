import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { Input, Output, Params, SendEnabled } from "./bank_pb.js";
/**
 * MsgSend represents a message to send coins from one account to another.
 *
 * @generated from message cosmos.bank.v1beta1.MsgSend
 */
export declare class MsgSend extends Message<MsgSend> {
    /**
     * @generated from field: string from_address = 1;
     */
    fromAddress: string;
    /**
     * @generated from field: string to_address = 2;
     */
    toAddress: string;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<MsgSend>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.MsgSend";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSend;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSend;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSend;
    static equals(a: MsgSend | PlainMessage<MsgSend> | undefined, b: MsgSend | PlainMessage<MsgSend> | undefined): boolean;
}
/**
 * MsgSendResponse defines the Msg/Send response type.
 *
 * @generated from message cosmos.bank.v1beta1.MsgSendResponse
 */
export declare class MsgSendResponse extends Message<MsgSendResponse> {
    constructor(data?: PartialMessage<MsgSendResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.MsgSendResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSendResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSendResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSendResponse;
    static equals(a: MsgSendResponse | PlainMessage<MsgSendResponse> | undefined, b: MsgSendResponse | PlainMessage<MsgSendResponse> | undefined): boolean;
}
/**
 * MsgMultiSend represents an arbitrary multi-in, multi-out send message.
 *
 * @generated from message cosmos.bank.v1beta1.MsgMultiSend
 */
export declare class MsgMultiSend extends Message<MsgMultiSend> {
    /**
     * Inputs, despite being `repeated`, only allows one sender input. This is
     * checked in MsgMultiSend's ValidateBasic.
     *
     * @generated from field: repeated cosmos.bank.v1beta1.Input inputs = 1;
     */
    inputs: Input[];
    /**
     * @generated from field: repeated cosmos.bank.v1beta1.Output outputs = 2;
     */
    outputs: Output[];
    constructor(data?: PartialMessage<MsgMultiSend>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.MsgMultiSend";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMultiSend;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMultiSend;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMultiSend;
    static equals(a: MsgMultiSend | PlainMessage<MsgMultiSend> | undefined, b: MsgMultiSend | PlainMessage<MsgMultiSend> | undefined): boolean;
}
/**
 * MsgMultiSendResponse defines the Msg/MultiSend response type.
 *
 * @generated from message cosmos.bank.v1beta1.MsgMultiSendResponse
 */
export declare class MsgMultiSendResponse extends Message<MsgMultiSendResponse> {
    constructor(data?: PartialMessage<MsgMultiSendResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.MsgMultiSendResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMultiSendResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMultiSendResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMultiSendResponse;
    static equals(a: MsgMultiSendResponse | PlainMessage<MsgMultiSendResponse> | undefined, b: MsgMultiSendResponse | PlainMessage<MsgMultiSendResponse> | undefined): boolean;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten).
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the x/bank parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: cosmos.bank.v1beta1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.MsgUpdateParams";
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
 * @generated from message cosmos.bank.v1beta1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
/**
 * MsgSetSendEnabled is the Msg/SetSendEnabled request type.
 *
 * Only entries to add/update/delete need to be included.
 * Existing SendEnabled entries that are not included in this
 * message are left unchanged.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.MsgSetSendEnabled
 */
export declare class MsgSetSendEnabled extends Message<MsgSetSendEnabled> {
    /**
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * send_enabled is the list of entries to add or update.
     *
     * @generated from field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 2;
     */
    sendEnabled: SendEnabled[];
    /**
     * use_default_for is a list of denoms that should use the params.default_send_enabled value.
     * Denoms listed here will have their SendEnabled entries deleted.
     * If a denom is included that doesn't have a SendEnabled entry,
     * it will be ignored.
     *
     * @generated from field: repeated string use_default_for = 3;
     */
    useDefaultFor: string[];
    constructor(data?: PartialMessage<MsgSetSendEnabled>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.MsgSetSendEnabled";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetSendEnabled;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetSendEnabled;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetSendEnabled;
    static equals(a: MsgSetSendEnabled | PlainMessage<MsgSetSendEnabled> | undefined, b: MsgSetSendEnabled | PlainMessage<MsgSetSendEnabled> | undefined): boolean;
}
/**
 * MsgSetSendEnabledResponse defines the Msg/SetSendEnabled response type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.MsgSetSendEnabledResponse
 */
export declare class MsgSetSendEnabledResponse extends Message<MsgSetSendEnabledResponse> {
    constructor(data?: PartialMessage<MsgSetSendEnabledResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.MsgSetSendEnabledResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetSendEnabledResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetSendEnabledResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetSendEnabledResponse;
    static equals(a: MsgSetSendEnabledResponse | PlainMessage<MsgSetSendEnabledResponse> | undefined, b: MsgSetSendEnabledResponse | PlainMessage<MsgSetSendEnabledResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map