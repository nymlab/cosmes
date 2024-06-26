import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * Plan specifies information about a planned upgrade and when it should occur.
 *
 * @generated from message cosmos.upgrade.v1beta1.Plan
 */
export declare class Plan extends Message<Plan> {
    /**
     * Sets the name for the upgrade. This name will be used by the upgraded
     * version of the software to apply any special "on-upgrade" commands during
     * the first BeginBlock method after the upgrade is applied. It is also used
     * to detect whether a software version can handle a given upgrade. If no
     * upgrade handler with this name has been set in the software, it will be
     * assumed that the software is out-of-date when the upgrade Time or Height is
     * reached and the software will exit.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Deprecated: Time based upgrades have been deprecated. Time based upgrade logic
     * has been removed from the SDK.
     * If this field is not empty, an error will be thrown.
     *
     * @generated from field: google.protobuf.Timestamp time = 2 [deprecated = true];
     * @deprecated
     */
    time?: Timestamp;
    /**
     * The height at which the upgrade must be performed.
     *
     * @generated from field: int64 height = 3;
     */
    height: bigint;
    /**
     * Any application specific upgrade info to be included on-chain
     * such as a git commit that validators could automatically upgrade to
     *
     * @generated from field: string info = 4;
     */
    info: string;
    /**
     * Deprecated: UpgradedClientState field has been deprecated. IBC upgrade logic has been
     * moved to the IBC module in the sub module 02-client.
     * If this field is not empty, an error will be thrown.
     *
     * @generated from field: google.protobuf.Any upgraded_client_state = 5 [deprecated = true];
     * @deprecated
     */
    upgradedClientState?: Any;
    constructor(data?: PartialMessage<Plan>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.Plan";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Plan;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Plan;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Plan;
    static equals(a: Plan | PlainMessage<Plan> | undefined, b: Plan | PlainMessage<Plan> | undefined): boolean;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgSoftwareUpgrade.
 *
 * @generated from message cosmos.upgrade.v1beta1.SoftwareUpgradeProposal
 * @deprecated
 */
export declare class SoftwareUpgradeProposal extends Message<SoftwareUpgradeProposal> {
    /**
     * title of the proposal
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * description of the proposal
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * plan of the proposal
     *
     * @generated from field: cosmos.upgrade.v1beta1.Plan plan = 3;
     */
    plan?: Plan;
    constructor(data?: PartialMessage<SoftwareUpgradeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SoftwareUpgradeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SoftwareUpgradeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SoftwareUpgradeProposal;
    static equals(a: SoftwareUpgradeProposal | PlainMessage<SoftwareUpgradeProposal> | undefined, b: SoftwareUpgradeProposal | PlainMessage<SoftwareUpgradeProposal> | undefined): boolean;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgCancelUpgrade.
 *
 * @generated from message cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal
 * @deprecated
 */
export declare class CancelSoftwareUpgradeProposal extends Message<CancelSoftwareUpgradeProposal> {
    /**
     * title of the proposal
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * description of the proposal
     *
     * @generated from field: string description = 2;
     */
    description: string;
    constructor(data?: PartialMessage<CancelSoftwareUpgradeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CancelSoftwareUpgradeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CancelSoftwareUpgradeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CancelSoftwareUpgradeProposal;
    static equals(a: CancelSoftwareUpgradeProposal | PlainMessage<CancelSoftwareUpgradeProposal> | undefined, b: CancelSoftwareUpgradeProposal | PlainMessage<CancelSoftwareUpgradeProposal> | undefined): boolean;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.upgrade.v1beta1.ModuleVersion
 */
export declare class ModuleVersion extends Message<ModuleVersion> {
    /**
     * name of the app module
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * consensus version of the app module
     *
     * @generated from field: uint64 version = 2;
     */
    version: bigint;
    constructor(data?: PartialMessage<ModuleVersion>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.upgrade.v1beta1.ModuleVersion";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleVersion;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleVersion;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleVersion;
    static equals(a: ModuleVersion | PlainMessage<ModuleVersion> | undefined, b: ModuleVersion | PlainMessage<ModuleVersion> | undefined): boolean;
}
//# sourceMappingURL=upgrade_pb.d.ts.map