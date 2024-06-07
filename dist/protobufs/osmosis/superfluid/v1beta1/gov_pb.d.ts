import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { SuperfluidAsset } from "../superfluid_pb.js";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 *
 * @generated from message osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal
 */
export declare class SetSuperfluidAssetsProposal extends Message<SetSuperfluidAssetsProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated osmosis.superfluid.SuperfluidAsset assets = 3;
     */
    assets: SuperfluidAsset[];
    constructor(data?: PartialMessage<SetSuperfluidAssetsProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetSuperfluidAssetsProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetSuperfluidAssetsProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetSuperfluidAssetsProposal;
    static equals(a: SetSuperfluidAssetsProposal | PlainMessage<SetSuperfluidAssetsProposal> | undefined, b: SetSuperfluidAssetsProposal | PlainMessage<SetSuperfluidAssetsProposal> | undefined): boolean;
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 *
 * @generated from message osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal
 */
export declare class RemoveSuperfluidAssetsProposal extends Message<RemoveSuperfluidAssetsProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated string superfluid_asset_denoms = 3;
     */
    superfluidAssetDenoms: string[];
    constructor(data?: PartialMessage<RemoveSuperfluidAssetsProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveSuperfluidAssetsProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveSuperfluidAssetsProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveSuperfluidAssetsProposal;
    static equals(a: RemoveSuperfluidAssetsProposal | PlainMessage<RemoveSuperfluidAssetsProposal> | undefined, b: RemoveSuperfluidAssetsProposal | PlainMessage<RemoveSuperfluidAssetsProposal> | undefined): boolean;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 *
 * @generated from message osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal
 */
export declare class UpdateUnpoolWhiteListProposal extends Message<UpdateUnpoolWhiteListProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: repeated uint64 ids = 3;
     */
    ids: bigint[];
    /**
     * @generated from field: bool is_overwrite = 4;
     */
    isOverwrite: boolean;
    constructor(data?: PartialMessage<UpdateUnpoolWhiteListProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUnpoolWhiteListProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUnpoolWhiteListProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUnpoolWhiteListProposal;
    static equals(a: UpdateUnpoolWhiteListProposal | PlainMessage<UpdateUnpoolWhiteListProposal> | undefined, b: UpdateUnpoolWhiteListProposal | PlainMessage<UpdateUnpoolWhiteListProposal> | undefined): boolean;
}
//# sourceMappingURL=gov_pb.d.ts.map