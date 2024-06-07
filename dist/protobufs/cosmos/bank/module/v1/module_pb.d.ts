import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Module is the config object of the bank module.
 *
 * @generated from message cosmos.bank.module.v1.Module
 */
export declare class Module extends Message<Module> {
    /**
     * blocked_module_accounts configures exceptional module accounts which should be blocked from receiving funds.
     * If left empty it defaults to the list of account names supplied in the auth module configuration as
     * module_account_permissions
     *
     * @generated from field: repeated string blocked_module_accounts_override = 1;
     */
    blockedModuleAccountsOverride: string[];
    /**
     * authority defines the custom module authority. If not set, defaults to the governance module.
     *
     * @generated from field: string authority = 2;
     */
    authority: string;
    constructor(data?: PartialMessage<Module>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.bank.module.v1.Module";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module;
    static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean;
}
//# sourceMappingURL=module_pb.d.ts.map