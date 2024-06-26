import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./slashing_pb.js";
/**
 * MsgUnjail defines the Msg/Unjail request type
 *
 * @generated from message cosmos.slashing.v1beta1.MsgUnjail
 */
export declare class MsgUnjail extends Message<MsgUnjail> {
    /**
     * @generated from field: string validator_addr = 1;
     */
    validatorAddr: string;
    constructor(data?: PartialMessage<MsgUnjail>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.MsgUnjail";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnjail;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnjail;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnjail;
    static equals(a: MsgUnjail | PlainMessage<MsgUnjail> | undefined, b: MsgUnjail | PlainMessage<MsgUnjail> | undefined): boolean;
}
/**
 * MsgUnjailResponse defines the Msg/Unjail response type
 *
 * @generated from message cosmos.slashing.v1beta1.MsgUnjailResponse
 */
export declare class MsgUnjailResponse extends Message<MsgUnjailResponse> {
    constructor(data?: PartialMessage<MsgUnjailResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.MsgUnjailResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnjailResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnjailResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnjailResponse;
    static equals(a: MsgUnjailResponse | PlainMessage<MsgUnjailResponse> | undefined, b: MsgUnjailResponse | PlainMessage<MsgUnjailResponse> | undefined): boolean;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.slashing.v1beta1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten).
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the x/slashing parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: cosmos.slashing.v1beta1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.MsgUpdateParams";
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
 * @generated from message cosmos.slashing.v1beta1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map