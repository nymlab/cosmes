import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.bank.v1beta1.SendAuthorization
 */
export declare class SendAuthorization extends Message<SendAuthorization> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin spend_limit = 1;
     */
    spendLimit: Coin[];
    /**
     * allow_list specifies an optional list of addresses to whom the grantee can send tokens on behalf of the
     * granter. If omitted, any recipient is allowed.
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from field: repeated string allow_list = 2;
     */
    allowList: string[];
    constructor(data?: PartialMessage<SendAuthorization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.v1beta1.SendAuthorization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendAuthorization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendAuthorization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendAuthorization;
    static equals(a: SendAuthorization | PlainMessage<SendAuthorization> | undefined, b: SendAuthorization | PlainMessage<SendAuthorization> | undefined): boolean;
}
//# sourceMappingURL=authz_pb.d.ts.map