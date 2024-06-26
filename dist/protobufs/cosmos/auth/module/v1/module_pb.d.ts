import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Module is the config object for the auth module.
 *
 * @generated from message cosmos.auth.module.v1.Module
 */
export declare class Module extends Message<Module> {
    /**
     * bech32_prefix is the bech32 account prefix for the app.
     *
     * @generated from field: string bech32_prefix = 1;
     */
    bech32Prefix: string;
    /**
     * module_account_permissions are module account permissions.
     *
     * @generated from field: repeated cosmos.auth.module.v1.ModuleAccountPermission module_account_permissions = 2;
     */
    moduleAccountPermissions: ModuleAccountPermission[];
    /**
     * authority defines the custom module authority. If not set, defaults to the governance module.
     *
     * @generated from field: string authority = 3;
     */
    authority: string;
    constructor(data?: PartialMessage<Module>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.module.v1.Module";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module;
    static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean;
}
/**
 * ModuleAccountPermission represents permissions for a module account.
 *
 * @generated from message cosmos.auth.module.v1.ModuleAccountPermission
 */
export declare class ModuleAccountPermission extends Message<ModuleAccountPermission> {
    /**
     * account is the name of the module.
     *
     * @generated from field: string account = 1;
     */
    account: string;
    /**
     * permissions are the permissions this module has. Currently recognized
     * values are minter, burner and staking.
     *
     * @generated from field: repeated string permissions = 2;
     */
    permissions: string[];
    constructor(data?: PartialMessage<ModuleAccountPermission>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.module.v1.ModuleAccountPermission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleAccountPermission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleAccountPermission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleAccountPermission;
    static equals(a: ModuleAccountPermission | PlainMessage<ModuleAccountPermission> | undefined, b: ModuleAccountPermission | PlainMessage<ModuleAccountPermission> | undefined): boolean;
}
//# sourceMappingURL=module_pb.d.ts.map