import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BaseAccount } from "../../../cosmos/auth/v1beta1/auth_pb.js";
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 *
 * @generated from message ethermint.types.v1.EthAccount
 */
export declare class EthAccount extends Message<EthAccount> {
    /**
     * base_account is an authtypes.BaseAccount
     *
     * @generated from field: cosmos.auth.v1beta1.BaseAccount base_account = 1;
     */
    baseAccount?: BaseAccount;
    /**
     * code_hash is the hash calculated from the code contents
     *
     * @generated from field: string code_hash = 2;
     */
    codeHash: string;
    constructor(data?: PartialMessage<EthAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.types.v1.EthAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EthAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EthAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EthAccount;
    static equals(a: EthAccount | PlainMessage<EthAccount> | undefined, b: EthAccount | PlainMessage<EthAccount> | undefined): boolean;
}
//# sourceMappingURL=account_pb.d.ts.map