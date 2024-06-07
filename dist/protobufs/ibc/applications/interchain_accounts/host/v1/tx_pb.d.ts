import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./host_pb.js";
/**
 * MsgUpdateParams defines the payload for Msg/UpdateParams
 *
 * @generated from message ibc.applications.interchain_accounts.host.v1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * signer address
     *
     * @generated from field: string signer = 1;
     */
    signer: string;
    /**
     * params defines the 27-interchain-accounts/host parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: ibc.applications.interchain_accounts.host.v1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.host.v1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * MsgUpdateParamsResponse defines the response for Msg/UpdateParams
 *
 * @generated from message ibc.applications.interchain_accounts.host.v1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.host.v1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map