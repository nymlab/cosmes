import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Namespace, Roles } from "./permissions_pb.js";
/**
 * @generated from message injective.permissions.v1beta1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the permissions parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: injective.permissions.v1beta1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgCreateNamespace
 */
export declare class MsgCreateNamespace extends Message<MsgCreateNamespace> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: injective.permissions.v1beta1.Namespace namespace = 2;
     */
    namespace?: Namespace;
    constructor(data?: PartialMessage<MsgCreateNamespace>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgCreateNamespace";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateNamespace;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateNamespace;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateNamespace;
    static equals(a: MsgCreateNamespace | PlainMessage<MsgCreateNamespace> | undefined, b: MsgCreateNamespace | PlainMessage<MsgCreateNamespace> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgCreateNamespaceResponse
 */
export declare class MsgCreateNamespaceResponse extends Message<MsgCreateNamespaceResponse> {
    constructor(data?: PartialMessage<MsgCreateNamespaceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgCreateNamespaceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateNamespaceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateNamespaceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateNamespaceResponse;
    static equals(a: MsgCreateNamespaceResponse | PlainMessage<MsgCreateNamespaceResponse> | undefined, b: MsgCreateNamespaceResponse | PlainMessage<MsgCreateNamespaceResponse> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgDeleteNamespace
 */
export declare class MsgDeleteNamespace extends Message<MsgDeleteNamespace> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string namespace_denom = 2;
     */
    namespaceDenom: string;
    constructor(data?: PartialMessage<MsgDeleteNamespace>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgDeleteNamespace";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDeleteNamespace;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDeleteNamespace;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDeleteNamespace;
    static equals(a: MsgDeleteNamespace | PlainMessage<MsgDeleteNamespace> | undefined, b: MsgDeleteNamespace | PlainMessage<MsgDeleteNamespace> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgDeleteNamespaceResponse
 */
export declare class MsgDeleteNamespaceResponse extends Message<MsgDeleteNamespaceResponse> {
    constructor(data?: PartialMessage<MsgDeleteNamespaceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgDeleteNamespaceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDeleteNamespaceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDeleteNamespaceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDeleteNamespaceResponse;
    static equals(a: MsgDeleteNamespaceResponse | PlainMessage<MsgDeleteNamespaceResponse> | undefined, b: MsgDeleteNamespaceResponse | PlainMessage<MsgDeleteNamespaceResponse> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgUpdateNamespace
 */
export declare class MsgUpdateNamespace extends Message<MsgUpdateNamespace> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * namespace denom to which this updates are applied
     *
     * @generated from field: string namespace_denom = 2;
     */
    namespaceDenom: string;
    /**
     * address of smart contract to apply code-based restrictions
     *
     * @generated from field: injective.permissions.v1beta1.MsgUpdateNamespace.MsgSetWasmHook wasm_hook = 3;
     */
    wasmHook?: MsgUpdateNamespace_MsgSetWasmHook;
    /**
     * @generated from field: injective.permissions.v1beta1.MsgUpdateNamespace.MsgSetMintsPaused mints_paused = 4;
     */
    mintsPaused?: MsgUpdateNamespace_MsgSetMintsPaused;
    /**
     * @generated from field: injective.permissions.v1beta1.MsgUpdateNamespace.MsgSetSendsPaused sends_paused = 5;
     */
    sendsPaused?: MsgUpdateNamespace_MsgSetSendsPaused;
    /**
     * @generated from field: injective.permissions.v1beta1.MsgUpdateNamespace.MsgSetBurnsPaused burns_paused = 6;
     */
    burnsPaused?: MsgUpdateNamespace_MsgSetBurnsPaused;
    constructor(data?: PartialMessage<MsgUpdateNamespace>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgUpdateNamespace";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateNamespace;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateNamespace;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateNamespace;
    static equals(a: MsgUpdateNamespace | PlainMessage<MsgUpdateNamespace> | undefined, b: MsgUpdateNamespace | PlainMessage<MsgUpdateNamespace> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgUpdateNamespace.MsgSetWasmHook
 */
export declare class MsgUpdateNamespace_MsgSetWasmHook extends Message<MsgUpdateNamespace_MsgSetWasmHook> {
    /**
     * @generated from field: string new_value = 1;
     */
    newValue: string;
    constructor(data?: PartialMessage<MsgUpdateNamespace_MsgSetWasmHook>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgUpdateNamespace.MsgSetWasmHook";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateNamespace_MsgSetWasmHook;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateNamespace_MsgSetWasmHook;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateNamespace_MsgSetWasmHook;
    static equals(a: MsgUpdateNamespace_MsgSetWasmHook | PlainMessage<MsgUpdateNamespace_MsgSetWasmHook> | undefined, b: MsgUpdateNamespace_MsgSetWasmHook | PlainMessage<MsgUpdateNamespace_MsgSetWasmHook> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgUpdateNamespace.MsgSetMintsPaused
 */
export declare class MsgUpdateNamespace_MsgSetMintsPaused extends Message<MsgUpdateNamespace_MsgSetMintsPaused> {
    /**
     * @generated from field: bool new_value = 1;
     */
    newValue: boolean;
    constructor(data?: PartialMessage<MsgUpdateNamespace_MsgSetMintsPaused>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgUpdateNamespace.MsgSetMintsPaused";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateNamespace_MsgSetMintsPaused;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateNamespace_MsgSetMintsPaused;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateNamespace_MsgSetMintsPaused;
    static equals(a: MsgUpdateNamespace_MsgSetMintsPaused | PlainMessage<MsgUpdateNamespace_MsgSetMintsPaused> | undefined, b: MsgUpdateNamespace_MsgSetMintsPaused | PlainMessage<MsgUpdateNamespace_MsgSetMintsPaused> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgUpdateNamespace.MsgSetSendsPaused
 */
export declare class MsgUpdateNamespace_MsgSetSendsPaused extends Message<MsgUpdateNamespace_MsgSetSendsPaused> {
    /**
     * @generated from field: bool new_value = 1;
     */
    newValue: boolean;
    constructor(data?: PartialMessage<MsgUpdateNamespace_MsgSetSendsPaused>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgUpdateNamespace.MsgSetSendsPaused";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateNamespace_MsgSetSendsPaused;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateNamespace_MsgSetSendsPaused;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateNamespace_MsgSetSendsPaused;
    static equals(a: MsgUpdateNamespace_MsgSetSendsPaused | PlainMessage<MsgUpdateNamespace_MsgSetSendsPaused> | undefined, b: MsgUpdateNamespace_MsgSetSendsPaused | PlainMessage<MsgUpdateNamespace_MsgSetSendsPaused> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgUpdateNamespace.MsgSetBurnsPaused
 */
export declare class MsgUpdateNamespace_MsgSetBurnsPaused extends Message<MsgUpdateNamespace_MsgSetBurnsPaused> {
    /**
     * @generated from field: bool new_value = 1;
     */
    newValue: boolean;
    constructor(data?: PartialMessage<MsgUpdateNamespace_MsgSetBurnsPaused>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgUpdateNamespace.MsgSetBurnsPaused";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateNamespace_MsgSetBurnsPaused;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateNamespace_MsgSetBurnsPaused;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateNamespace_MsgSetBurnsPaused;
    static equals(a: MsgUpdateNamespace_MsgSetBurnsPaused | PlainMessage<MsgUpdateNamespace_MsgSetBurnsPaused> | undefined, b: MsgUpdateNamespace_MsgSetBurnsPaused | PlainMessage<MsgUpdateNamespace_MsgSetBurnsPaused> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgUpdateNamespaceResponse
 */
export declare class MsgUpdateNamespaceResponse extends Message<MsgUpdateNamespaceResponse> {
    constructor(data?: PartialMessage<MsgUpdateNamespaceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgUpdateNamespaceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateNamespaceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateNamespaceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateNamespaceResponse;
    static equals(a: MsgUpdateNamespaceResponse | PlainMessage<MsgUpdateNamespaceResponse> | undefined, b: MsgUpdateNamespaceResponse | PlainMessage<MsgUpdateNamespaceResponse> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgUpdateNamespaceRoles
 */
export declare class MsgUpdateNamespaceRoles extends Message<MsgUpdateNamespaceRoles> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * namespace denom to which this updates are applied
     *
     * @generated from field: string namespace_denom = 2;
     */
    namespaceDenom: string;
    /**
     * new role definitions or updated permissions for existing roles
     *
     * @generated from field: map<string, uint32> role_permissions = 3;
     */
    rolePermissions: {
        [key: string]: number;
    };
    /**
     * new addresses to add or new roles for existing addresses to
     *
     * @generated from field: map<string, injective.permissions.v1beta1.Roles> address_roles = 4;
     */
    addressRoles: {
        [key: string]: Roles;
    };
    constructor(data?: PartialMessage<MsgUpdateNamespaceRoles>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgUpdateNamespaceRoles";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateNamespaceRoles;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateNamespaceRoles;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateNamespaceRoles;
    static equals(a: MsgUpdateNamespaceRoles | PlainMessage<MsgUpdateNamespaceRoles> | undefined, b: MsgUpdateNamespaceRoles | PlainMessage<MsgUpdateNamespaceRoles> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgUpdateNamespaceRolesResponse
 */
export declare class MsgUpdateNamespaceRolesResponse extends Message<MsgUpdateNamespaceRolesResponse> {
    constructor(data?: PartialMessage<MsgUpdateNamespaceRolesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgUpdateNamespaceRolesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateNamespaceRolesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateNamespaceRolesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateNamespaceRolesResponse;
    static equals(a: MsgUpdateNamespaceRolesResponse | PlainMessage<MsgUpdateNamespaceRolesResponse> | undefined, b: MsgUpdateNamespaceRolesResponse | PlainMessage<MsgUpdateNamespaceRolesResponse> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgRevokeNamespaceRoles
 */
export declare class MsgRevokeNamespaceRoles extends Message<MsgRevokeNamespaceRoles> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * namespace denom to which this updates are applied
     *
     * @generated from field: string namespace_denom = 2;
     */
    namespaceDenom: string;
    /**
     * map of {"address" => array of roles to revoke from this address}
     *
     * @generated from field: map<string, injective.permissions.v1beta1.Roles> address_roles_to_revoke = 3;
     */
    addressRolesToRevoke: {
        [key: string]: Roles;
    };
    constructor(data?: PartialMessage<MsgRevokeNamespaceRoles>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgRevokeNamespaceRoles";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRevokeNamespaceRoles;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRevokeNamespaceRoles;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRevokeNamespaceRoles;
    static equals(a: MsgRevokeNamespaceRoles | PlainMessage<MsgRevokeNamespaceRoles> | undefined, b: MsgRevokeNamespaceRoles | PlainMessage<MsgRevokeNamespaceRoles> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgRevokeNamespaceRolesResponse
 */
export declare class MsgRevokeNamespaceRolesResponse extends Message<MsgRevokeNamespaceRolesResponse> {
    constructor(data?: PartialMessage<MsgRevokeNamespaceRolesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgRevokeNamespaceRolesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRevokeNamespaceRolesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRevokeNamespaceRolesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRevokeNamespaceRolesResponse;
    static equals(a: MsgRevokeNamespaceRolesResponse | PlainMessage<MsgRevokeNamespaceRolesResponse> | undefined, b: MsgRevokeNamespaceRolesResponse | PlainMessage<MsgRevokeNamespaceRolesResponse> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgClaimVoucher
 */
export declare class MsgClaimVoucher extends Message<MsgClaimVoucher> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * address of the original voucher sender (typically a module address,
     *
     * @generated from field: string originator = 2;
     */
    originator: string;
    constructor(data?: PartialMessage<MsgClaimVoucher>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgClaimVoucher";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClaimVoucher;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClaimVoucher;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClaimVoucher;
    static equals(a: MsgClaimVoucher | PlainMessage<MsgClaimVoucher> | undefined, b: MsgClaimVoucher | PlainMessage<MsgClaimVoucher> | undefined): boolean;
}
/**
 * @generated from message injective.permissions.v1beta1.MsgClaimVoucherResponse
 */
export declare class MsgClaimVoucherResponse extends Message<MsgClaimVoucherResponse> {
    constructor(data?: PartialMessage<MsgClaimVoucherResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.permissions.v1beta1.MsgClaimVoucherResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClaimVoucherResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClaimVoucherResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClaimVoucherResponse;
    static equals(a: MsgClaimVoucherResponse | PlainMessage<MsgClaimVoucherResponse> | undefined, b: MsgClaimVoucherResponse | PlainMessage<MsgClaimVoucherResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map