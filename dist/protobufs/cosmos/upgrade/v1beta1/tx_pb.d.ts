import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Plan } from "./upgrade_pb.js";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.MsgSoftwareUpgrade
 */
export declare class MsgSoftwareUpgrade extends Message<MsgSoftwareUpgrade> {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten).
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * plan is the upgrade plan.
     *
     * @generated from field: cosmos.upgrade.v1beta1.Plan plan = 2;
     */
    plan?: Plan;
    constructor(data?: PartialMessage<MsgSoftwareUpgrade>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.MsgSoftwareUpgrade";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSoftwareUpgrade;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSoftwareUpgrade;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSoftwareUpgrade;
    static equals(a: MsgSoftwareUpgrade | PlainMessage<MsgSoftwareUpgrade> | undefined, b: MsgSoftwareUpgrade | PlainMessage<MsgSoftwareUpgrade> | undefined): boolean;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse
 */
export declare class MsgSoftwareUpgradeResponse extends Message<MsgSoftwareUpgradeResponse> {
    constructor(data?: PartialMessage<MsgSoftwareUpgradeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSoftwareUpgradeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSoftwareUpgradeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSoftwareUpgradeResponse;
    static equals(a: MsgSoftwareUpgradeResponse | PlainMessage<MsgSoftwareUpgradeResponse> | undefined, b: MsgSoftwareUpgradeResponse | PlainMessage<MsgSoftwareUpgradeResponse> | undefined): boolean;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.MsgCancelUpgrade
 */
export declare class MsgCancelUpgrade extends Message<MsgCancelUpgrade> {
    /**
     * authority is the address that controls the module (defaults to x/gov unless overwritten).
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    constructor(data?: PartialMessage<MsgCancelUpgrade>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.MsgCancelUpgrade";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelUpgrade;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelUpgrade;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelUpgrade;
    static equals(a: MsgCancelUpgrade | PlainMessage<MsgCancelUpgrade> | undefined, b: MsgCancelUpgrade | PlainMessage<MsgCancelUpgrade> | undefined): boolean;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse
 */
export declare class MsgCancelUpgradeResponse extends Message<MsgCancelUpgradeResponse> {
    constructor(data?: PartialMessage<MsgCancelUpgradeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelUpgradeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelUpgradeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelUpgradeResponse;
    static equals(a: MsgCancelUpgradeResponse | PlainMessage<MsgCancelUpgradeResponse> | undefined, b: MsgCancelUpgradeResponse | PlainMessage<MsgCancelUpgradeResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map