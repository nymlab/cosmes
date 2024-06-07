import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * each Action enum value should be a power of two
 *
 * @generated from enum injective.permissions.v1beta1.Action
 */
export declare enum Action {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: MINT = 1;
     */
    MINT = 1,
    /**
     * @generated from enum value: RECEIVE = 2;
     */
    RECEIVE = 2,
    /**
     * @generated from enum value: BURN = 4;
     */
    BURN = 4
}
/**
 * Namespace defines a permissions namespace
 *
 * @generated from message injective.permissions.v1beta1.Namespace
 */
export declare class Namespace extends Message<Namespace> {
    /**
     * tokenfactory denom to which this namespace applies to
     *
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * address of smart contract to apply code-based restrictions
     *
     * @generated from field: string wasm_hook = 2;
     */
    wasmHook: string;
    /**
     * @generated from field: bool mints_paused = 3;
     */
    mintsPaused: boolean;
    /**
     * @generated from field: bool sends_paused = 4;
     */
    sendsPaused: boolean;
    /**
     * @generated from field: bool burns_paused = 5;
     */
    burnsPaused: boolean;
    /**
     * permissions for each role
     *
     * @generated from field: map<string, uint32> role_permissions = 6;
     */
    rolePermissions: {
        [key: string]: number;
    };
    /**
     * @generated from field: map<string, injective.permissions.v1beta1.Roles> address_roles = 7;
     */
    addressRoles: {
        [key: string]: Roles;
    };
    constructor(data?: PartialMessage<Namespace>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.Namespace";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Namespace;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Namespace;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Namespace;
    static equals(a: Namespace | PlainMessage<Namespace> | undefined, b: Namespace | PlainMessage<Namespace> | undefined): boolean;
}
/**
 * Role is only used for storage
 *
 * @generated from message injective.permissions.v1beta1.Role
 */
export declare class Role extends Message<Role> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: uint32 permissions = 2;
     */
    permissions: number;
    constructor(data?: PartialMessage<Role>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.Role";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Role;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Role;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Role;
    static equals(a: Role | PlainMessage<Role> | undefined, b: Role | PlainMessage<Role> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.Roles
 */
export declare class Roles extends Message<Roles> {
    /**
     * @generated from field: repeated string roles = 1;
     */
    roles: string[];
    constructor(data?: PartialMessage<Roles>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.Roles";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Roles;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Roles;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Roles;
    static equals(a: Roles | PlainMessage<Roles> | undefined, b: Roles | PlainMessage<Roles> | undefined): boolean;
}
/**
 * used in storage
 *
 * @generated from message injective.permissions.v1beta1.RoleIDs
 */
export declare class RoleIDs extends Message<RoleIDs> {
    /**
     * @generated from field: repeated uint32 role_ids = 1;
     */
    roleIds: number[];
    constructor(data?: PartialMessage<RoleIDs>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.RoleIDs";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoleIDs;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoleIDs;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoleIDs;
    static equals(a: RoleIDs | PlainMessage<RoleIDs> | undefined, b: RoleIDs | PlainMessage<RoleIDs> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.Voucher
 */
export declare class Voucher extends Message<Voucher> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 1;
     */
    coins: Coin[];
    constructor(data?: PartialMessage<Voucher>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.Voucher";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Voucher;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Voucher;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Voucher;
    static equals(a: Voucher | PlainMessage<Voucher> | undefined, b: Voucher | PlainMessage<Voucher> | undefined): boolean;
}
//# sourceMappingURL=permissions_pb.d.ts.map