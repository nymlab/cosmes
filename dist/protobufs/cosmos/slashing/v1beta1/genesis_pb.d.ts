import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params, ValidatorSigningInfo } from "./slashing_pb.js";
/**
 * GenesisState defines the slashing module's genesis state.
 *
 * @generated from message cosmos.slashing.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines all the parameters of the module.
     *
     * @generated from field: cosmos.slashing.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     *
     * @generated from field: repeated cosmos.slashing.v1beta1.SigningInfo signing_infos = 2;
     */
    signingInfos: SigningInfo[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     *
     * @generated from field: repeated cosmos.slashing.v1beta1.ValidatorMissedBlocks missed_blocks = 3;
     */
    missedBlocks: ValidatorMissedBlocks[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * SigningInfo stores validator signing info of corresponding address.
 *
 * @generated from message cosmos.slashing.v1beta1.SigningInfo
 */
export declare class SigningInfo extends Message<SigningInfo> {
    /**
     * address is the validator address.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * validator_signing_info represents the signing info of this validator.
     *
     * @generated from field: cosmos.slashing.v1beta1.ValidatorSigningInfo validator_signing_info = 2;
     */
    validatorSigningInfo?: ValidatorSigningInfo;
    constructor(data?: PartialMessage<SigningInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.SigningInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SigningInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SigningInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SigningInfo;
    static equals(a: SigningInfo | PlainMessage<SigningInfo> | undefined, b: SigningInfo | PlainMessage<SigningInfo> | undefined): boolean;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 *
 * @generated from message cosmos.slashing.v1beta1.ValidatorMissedBlocks
 */
export declare class ValidatorMissedBlocks extends Message<ValidatorMissedBlocks> {
    /**
     * address is the validator address.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * missed_blocks is an array of missed blocks by the validator.
     *
     * @generated from field: repeated cosmos.slashing.v1beta1.MissedBlock missed_blocks = 2;
     */
    missedBlocks: MissedBlock[];
    constructor(data?: PartialMessage<ValidatorMissedBlocks>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.ValidatorMissedBlocks";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorMissedBlocks;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorMissedBlocks;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorMissedBlocks;
    static equals(a: ValidatorMissedBlocks | PlainMessage<ValidatorMissedBlocks> | undefined, b: ValidatorMissedBlocks | PlainMessage<ValidatorMissedBlocks> | undefined): boolean;
}
/**
 * MissedBlock contains height and missed status as boolean.
 *
 * @generated from message cosmos.slashing.v1beta1.MissedBlock
 */
export declare class MissedBlock extends Message<MissedBlock> {
    /**
     * index is the height at which the block was missed.
     *
     * @generated from field: int64 index = 1;
     */
    index: bigint;
    /**
     * missed is the missed status.
     *
     * @generated from field: bool missed = 2;
     */
    missed: boolean;
    constructor(data?: PartialMessage<MissedBlock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.slashing.v1beta1.MissedBlock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MissedBlock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MissedBlock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MissedBlock;
    static equals(a: MissedBlock | PlainMessage<MissedBlock> | undefined, b: MissedBlock | PlainMessage<MissedBlock> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map