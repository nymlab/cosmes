import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BaseDenom, InfoByPoolType, TokenPairArbRoutes } from "./protorev_pb.js";
/**
 * MsgSetHotRoutes defines the Msg/SetHotRoutes request type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetHotRoutes
 */
export declare class MsgSetHotRoutes extends Message<MsgSetHotRoutes> {
    /**
     * admin is the account that is authorized to set the hot routes.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * hot_routes is the list of hot routes to set.
     *
     * @generated from field: repeated osmosis.protorev.v1beta1.TokenPairArbRoutes hot_routes = 2;
     */
    hotRoutes: TokenPairArbRoutes[];
    constructor(data?: PartialMessage<MsgSetHotRoutes>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.MsgSetHotRoutes";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetHotRoutes;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetHotRoutes;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetHotRoutes;
    static equals(a: MsgSetHotRoutes | PlainMessage<MsgSetHotRoutes> | undefined, b: MsgSetHotRoutes | PlainMessage<MsgSetHotRoutes> | undefined): boolean;
}
/**
 * MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetHotRoutesResponse
 */
export declare class MsgSetHotRoutesResponse extends Message<MsgSetHotRoutesResponse> {
    constructor(data?: PartialMessage<MsgSetHotRoutesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.MsgSetHotRoutesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetHotRoutesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetHotRoutesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetHotRoutesResponse;
    static equals(a: MsgSetHotRoutesResponse | PlainMessage<MsgSetHotRoutesResponse> | undefined, b: MsgSetHotRoutesResponse | PlainMessage<MsgSetHotRoutesResponse> | undefined): boolean;
}
/**
 * MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetDeveloperAccount
 */
export declare class MsgSetDeveloperAccount extends Message<MsgSetDeveloperAccount> {
    /**
     * admin is the account that is authorized to set the developer account.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * developer_account is the account that will receive a portion of the profits
     * from the protorev module.
     *
     * @generated from field: string developer_account = 2;
     */
    developerAccount: string;
    constructor(data?: PartialMessage<MsgSetDeveloperAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.MsgSetDeveloperAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetDeveloperAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetDeveloperAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetDeveloperAccount;
    static equals(a: MsgSetDeveloperAccount | PlainMessage<MsgSetDeveloperAccount> | undefined, b: MsgSetDeveloperAccount | PlainMessage<MsgSetDeveloperAccount> | undefined): boolean;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse
 */
export declare class MsgSetDeveloperAccountResponse extends Message<MsgSetDeveloperAccountResponse> {
    constructor(data?: PartialMessage<MsgSetDeveloperAccountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetDeveloperAccountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetDeveloperAccountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetDeveloperAccountResponse;
    static equals(a: MsgSetDeveloperAccountResponse | PlainMessage<MsgSetDeveloperAccountResponse> | undefined, b: MsgSetDeveloperAccountResponse | PlainMessage<MsgSetDeveloperAccountResponse> | undefined): boolean;
}
/**
 * MsgSetInfoByPoolType defines the Msg/SetInfoByPoolType request type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetInfoByPoolType
 */
export declare class MsgSetInfoByPoolType extends Message<MsgSetInfoByPoolType> {
    /**
     * admin is the account that is authorized to set the pool weights.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * info_by_pool_type contains information about the pool types.
     *
     * @generated from field: osmosis.protorev.v1beta1.InfoByPoolType info_by_pool_type = 2;
     */
    infoByPoolType?: InfoByPoolType;
    constructor(data?: PartialMessage<MsgSetInfoByPoolType>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.MsgSetInfoByPoolType";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetInfoByPoolType;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetInfoByPoolType;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetInfoByPoolType;
    static equals(a: MsgSetInfoByPoolType | PlainMessage<MsgSetInfoByPoolType> | undefined, b: MsgSetInfoByPoolType | PlainMessage<MsgSetInfoByPoolType> | undefined): boolean;
}
/**
 * MsgSetInfoByPoolTypeResponse defines the Msg/SetInfoByPoolType response type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse
 */
export declare class MsgSetInfoByPoolTypeResponse extends Message<MsgSetInfoByPoolTypeResponse> {
    constructor(data?: PartialMessage<MsgSetInfoByPoolTypeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.MsgSetInfoByPoolTypeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetInfoByPoolTypeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetInfoByPoolTypeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetInfoByPoolTypeResponse;
    static equals(a: MsgSetInfoByPoolTypeResponse | PlainMessage<MsgSetInfoByPoolTypeResponse> | undefined, b: MsgSetInfoByPoolTypeResponse | PlainMessage<MsgSetInfoByPoolTypeResponse> | undefined): boolean;
}
/**
 * MsgSetMaxPoolPointsPerTx defines the Msg/SetMaxPoolPointsPerTx request type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx
 */
export declare class MsgSetMaxPoolPointsPerTx extends Message<MsgSetMaxPoolPointsPerTx> {
    /**
     * admin is the account that is authorized to set the max pool points per tx.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * max_pool_points_per_tx is the maximum number of pool points that can be
     * consumed per transaction.
     *
     * @generated from field: uint64 max_pool_points_per_tx = 2;
     */
    maxPoolPointsPerTx: bigint;
    constructor(data?: PartialMessage<MsgSetMaxPoolPointsPerTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetMaxPoolPointsPerTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetMaxPoolPointsPerTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetMaxPoolPointsPerTx;
    static equals(a: MsgSetMaxPoolPointsPerTx | PlainMessage<MsgSetMaxPoolPointsPerTx> | undefined, b: MsgSetMaxPoolPointsPerTx | PlainMessage<MsgSetMaxPoolPointsPerTx> | undefined): boolean;
}
/**
 * MsgSetMaxPoolPointsPerTxResponse defines the Msg/SetMaxPoolPointsPerTx
 * response type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse
 */
export declare class MsgSetMaxPoolPointsPerTxResponse extends Message<MsgSetMaxPoolPointsPerTxResponse> {
    constructor(data?: PartialMessage<MsgSetMaxPoolPointsPerTxResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTxResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetMaxPoolPointsPerTxResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetMaxPoolPointsPerTxResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetMaxPoolPointsPerTxResponse;
    static equals(a: MsgSetMaxPoolPointsPerTxResponse | PlainMessage<MsgSetMaxPoolPointsPerTxResponse> | undefined, b: MsgSetMaxPoolPointsPerTxResponse | PlainMessage<MsgSetMaxPoolPointsPerTxResponse> | undefined): boolean;
}
/**
 * MsgSetMaxPoolPointsPerBlock defines the Msg/SetMaxPoolPointsPerBlock request
 * type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock
 */
export declare class MsgSetMaxPoolPointsPerBlock extends Message<MsgSetMaxPoolPointsPerBlock> {
    /**
     * admin is the account that is authorized to set the max pool points per
     * block.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * max_pool_points_per_block is the maximum number of pool points that can be
     * consumed per block.
     *
     * @generated from field: uint64 max_pool_points_per_block = 2;
     */
    maxPoolPointsPerBlock: bigint;
    constructor(data?: PartialMessage<MsgSetMaxPoolPointsPerBlock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetMaxPoolPointsPerBlock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetMaxPoolPointsPerBlock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetMaxPoolPointsPerBlock;
    static equals(a: MsgSetMaxPoolPointsPerBlock | PlainMessage<MsgSetMaxPoolPointsPerBlock> | undefined, b: MsgSetMaxPoolPointsPerBlock | PlainMessage<MsgSetMaxPoolPointsPerBlock> | undefined): boolean;
}
/**
 * MsgSetMaxPoolPointsPerBlockResponse defines the
 * Msg/SetMaxPoolPointsPerBlock response type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse
 */
export declare class MsgSetMaxPoolPointsPerBlockResponse extends Message<MsgSetMaxPoolPointsPerBlockResponse> {
    constructor(data?: PartialMessage<MsgSetMaxPoolPointsPerBlockResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlockResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetMaxPoolPointsPerBlockResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetMaxPoolPointsPerBlockResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetMaxPoolPointsPerBlockResponse;
    static equals(a: MsgSetMaxPoolPointsPerBlockResponse | PlainMessage<MsgSetMaxPoolPointsPerBlockResponse> | undefined, b: MsgSetMaxPoolPointsPerBlockResponse | PlainMessage<MsgSetMaxPoolPointsPerBlockResponse> | undefined): boolean;
}
/**
 * MsgSetBaseDenoms defines the Msg/SetBaseDenoms request type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetBaseDenoms
 */
export declare class MsgSetBaseDenoms extends Message<MsgSetBaseDenoms> {
    /**
     * admin is the account that is authorized to set the base denoms.
     *
     * @generated from field: string admin = 1;
     */
    admin: string;
    /**
     * base_denoms is the list of base denoms to set.
     *
     * @generated from field: repeated osmosis.protorev.v1beta1.BaseDenom base_denoms = 2;
     */
    baseDenoms: BaseDenom[];
    constructor(data?: PartialMessage<MsgSetBaseDenoms>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.MsgSetBaseDenoms";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetBaseDenoms;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetBaseDenoms;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetBaseDenoms;
    static equals(a: MsgSetBaseDenoms | PlainMessage<MsgSetBaseDenoms> | undefined, b: MsgSetBaseDenoms | PlainMessage<MsgSetBaseDenoms> | undefined): boolean;
}
/**
 * MsgSetBaseDenomsResponse defines the Msg/SetBaseDenoms response type.
 *
 * @generated from message osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse
 */
export declare class MsgSetBaseDenomsResponse extends Message<MsgSetBaseDenomsResponse> {
    constructor(data?: PartialMessage<MsgSetBaseDenomsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.protorev.v1beta1.MsgSetBaseDenomsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetBaseDenomsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetBaseDenomsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetBaseDenomsResponse;
    static equals(a: MsgSetBaseDenomsResponse | PlainMessage<MsgSetBaseDenomsResponse> | undefined, b: MsgSetBaseDenomsResponse | PlainMessage<MsgSetBaseDenomsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map