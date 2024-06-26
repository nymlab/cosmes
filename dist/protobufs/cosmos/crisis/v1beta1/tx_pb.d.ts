import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * MsgVerifyInvariant represents a message to verify a particular invariance.
 *
 * @generated from message cosmos.crisis.v1beta1.MsgVerifyInvariant
 */
export declare class MsgVerifyInvariant extends Message<MsgVerifyInvariant> {
    /**
     * sender is the account address of private key to send coins to fee collector account.
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * name of the invariant module.
     *
     * @generated from field: string invariant_module_name = 2;
     */
    invariantModuleName: string;
    /**
     * invariant_route is the msg's invariant route.
     *
     * @generated from field: string invariant_route = 3;
     */
    invariantRoute: string;
    constructor(data?: PartialMessage<MsgVerifyInvariant>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crisis.v1beta1.MsgVerifyInvariant";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVerifyInvariant;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVerifyInvariant;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVerifyInvariant;
    static equals(a: MsgVerifyInvariant | PlainMessage<MsgVerifyInvariant> | undefined, b: MsgVerifyInvariant | PlainMessage<MsgVerifyInvariant> | undefined): boolean;
}
/**
 * MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type.
 *
 * @generated from message cosmos.crisis.v1beta1.MsgVerifyInvariantResponse
 */
export declare class MsgVerifyInvariantResponse extends Message<MsgVerifyInvariantResponse> {
    constructor(data?: PartialMessage<MsgVerifyInvariantResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crisis.v1beta1.MsgVerifyInvariantResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVerifyInvariantResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVerifyInvariantResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVerifyInvariantResponse;
    static equals(a: MsgVerifyInvariantResponse | PlainMessage<MsgVerifyInvariantResponse> | undefined, b: MsgVerifyInvariantResponse | PlainMessage<MsgVerifyInvariantResponse> | undefined): boolean;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.crisis.v1beta1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten).
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * constant_fee defines the x/crisis parameter.
     *
     * @generated from field: cosmos.base.v1beta1.Coin constant_fee = 2;
     */
    constantFee?: Coin;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crisis.v1beta1.MsgUpdateParams";
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
 * @generated from message cosmos.crisis.v1beta1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crisis.v1beta1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map