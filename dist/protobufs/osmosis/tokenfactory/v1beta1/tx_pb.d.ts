import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank_pb.js";
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.MsgCreateDenom
 */
export declare class MsgCreateDenom extends Message<MsgCreateDenom> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * subdenom can be up to 44 "alphanumeric" characters long.
     *
     * @generated from field: string subdenom = 2;
     */
    subdenom: string;
    constructor(data?: PartialMessage<MsgCreateDenom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgCreateDenom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateDenom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateDenom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateDenom;
    static equals(a: MsgCreateDenom | PlainMessage<MsgCreateDenom> | undefined, b: MsgCreateDenom | PlainMessage<MsgCreateDenom> | undefined): boolean;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 *
 * @generated from message osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse
 */
export declare class MsgCreateDenomResponse extends Message<MsgCreateDenomResponse> {
    /**
     * @generated from field: string new_token_denom = 1;
     */
    newTokenDenom: string;
    constructor(data?: PartialMessage<MsgCreateDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateDenomResponse;
    static equals(a: MsgCreateDenomResponse | PlainMessage<MsgCreateDenomResponse> | undefined, b: MsgCreateDenomResponse | PlainMessage<MsgCreateDenomResponse> | undefined): boolean;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.
 * Only the admin of the token factory denom has permission to mint unless
 * the denom does not have any admin.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.MsgMint
 */
export declare class MsgMint extends Message<MsgMint> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
     */
    amount?: Coin;
    /**
     * @generated from field: string mintToAddress = 3;
     */
    mintToAddress: string;
    constructor(data?: PartialMessage<MsgMint>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgMint";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMint;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMint;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMint;
    static equals(a: MsgMint | PlainMessage<MsgMint> | undefined, b: MsgMint | PlainMessage<MsgMint> | undefined): boolean;
}
/**
 * @generated from message osmosis.tokenfactory.v1beta1.MsgMintResponse
 */
export declare class MsgMintResponse extends Message<MsgMintResponse> {
    constructor(data?: PartialMessage<MsgMintResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgMintResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMintResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMintResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMintResponse;
    static equals(a: MsgMintResponse | PlainMessage<MsgMintResponse> | undefined, b: MsgMintResponse | PlainMessage<MsgMintResponse> | undefined): boolean;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.
 * Only the admin of the token factory denom has permission to burn unless
 * the denom does not have any admin.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.MsgBurn
 */
export declare class MsgBurn extends Message<MsgBurn> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
     */
    amount?: Coin;
    /**
     * @generated from field: string burnFromAddress = 3;
     */
    burnFromAddress: string;
    constructor(data?: PartialMessage<MsgBurn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgBurn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBurn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBurn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBurn;
    static equals(a: MsgBurn | PlainMessage<MsgBurn> | undefined, b: MsgBurn | PlainMessage<MsgBurn> | undefined): boolean;
}
/**
 * @generated from message osmosis.tokenfactory.v1beta1.MsgBurnResponse
 */
export declare class MsgBurnResponse extends Message<MsgBurnResponse> {
    constructor(data?: PartialMessage<MsgBurnResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgBurnResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBurnResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBurnResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBurnResponse;
    static equals(a: MsgBurnResponse | PlainMessage<MsgBurnResponse> | undefined, b: MsgBurnResponse | PlainMessage<MsgBurnResponse> | undefined): boolean;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 *
 * @generated from message osmosis.tokenfactory.v1beta1.MsgChangeAdmin
 */
export declare class MsgChangeAdmin extends Message<MsgChangeAdmin> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    /**
     * @generated from field: string new_admin = 3;
     */
    newAdmin: string;
    constructor(data?: PartialMessage<MsgChangeAdmin>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgChangeAdmin";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChangeAdmin;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChangeAdmin;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChangeAdmin;
    static equals(a: MsgChangeAdmin | PlainMessage<MsgChangeAdmin> | undefined, b: MsgChangeAdmin | PlainMessage<MsgChangeAdmin> | undefined): boolean;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse
 */
export declare class MsgChangeAdminResponse extends Message<MsgChangeAdminResponse> {
    constructor(data?: PartialMessage<MsgChangeAdminResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChangeAdminResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChangeAdminResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChangeAdminResponse;
    static equals(a: MsgChangeAdminResponse | PlainMessage<MsgChangeAdminResponse> | undefined, b: MsgChangeAdminResponse | PlainMessage<MsgChangeAdminResponse> | undefined): boolean;
}
/**
 * MsgSetBeforeSendHook is the sdk.Msg type for allowing an admin account to
 * assign a CosmWasm contract to call with a BeforeSend hook
 *
 * @generated from message osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook
 */
export declare class MsgSetBeforeSendHook extends Message<MsgSetBeforeSendHook> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    /**
     * @generated from field: string cosmwasm_address = 3;
     */
    cosmwasmAddress: string;
    constructor(data?: PartialMessage<MsgSetBeforeSendHook>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetBeforeSendHook;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetBeforeSendHook;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetBeforeSendHook;
    static equals(a: MsgSetBeforeSendHook | PlainMessage<MsgSetBeforeSendHook> | undefined, b: MsgSetBeforeSendHook | PlainMessage<MsgSetBeforeSendHook> | undefined): boolean;
}
/**
 * MsgSetBeforeSendHookResponse defines the response structure for an executed
 * MsgSetBeforeSendHook message.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHookResponse
 */
export declare class MsgSetBeforeSendHookResponse extends Message<MsgSetBeforeSendHookResponse> {
    constructor(data?: PartialMessage<MsgSetBeforeSendHookResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHookResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetBeforeSendHookResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetBeforeSendHookResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetBeforeSendHookResponse;
    static equals(a: MsgSetBeforeSendHookResponse | PlainMessage<MsgSetBeforeSendHookResponse> | undefined, b: MsgSetBeforeSendHookResponse | PlainMessage<MsgSetBeforeSendHookResponse> | undefined): boolean;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 *
 * @generated from message osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata
 */
export declare class MsgSetDenomMetadata extends Message<MsgSetDenomMetadata> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: cosmos.bank.v1beta1.Metadata metadata = 2;
     */
    metadata?: Metadata;
    constructor(data?: PartialMessage<MsgSetDenomMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetDenomMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetDenomMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetDenomMetadata;
    static equals(a: MsgSetDenomMetadata | PlainMessage<MsgSetDenomMetadata> | undefined, b: MsgSetDenomMetadata | PlainMessage<MsgSetDenomMetadata> | undefined): boolean;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 *
 * @generated from message osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse
 */
export declare class MsgSetDenomMetadataResponse extends Message<MsgSetDenomMetadataResponse> {
    constructor(data?: PartialMessage<MsgSetDenomMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSetDenomMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSetDenomMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSetDenomMetadataResponse;
    static equals(a: MsgSetDenomMetadataResponse | PlainMessage<MsgSetDenomMetadataResponse> | undefined, b: MsgSetDenomMetadataResponse | PlainMessage<MsgSetDenomMetadataResponse> | undefined): boolean;
}
/**
 * @generated from message osmosis.tokenfactory.v1beta1.MsgForceTransfer
 */
export declare class MsgForceTransfer extends Message<MsgForceTransfer> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
     */
    amount?: Coin;
    /**
     * @generated from field: string transferFromAddress = 3;
     */
    transferFromAddress: string;
    /**
     * @generated from field: string transferToAddress = 4;
     */
    transferToAddress: string;
    constructor(data?: PartialMessage<MsgForceTransfer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgForceTransfer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgForceTransfer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgForceTransfer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgForceTransfer;
    static equals(a: MsgForceTransfer | PlainMessage<MsgForceTransfer> | undefined, b: MsgForceTransfer | PlainMessage<MsgForceTransfer> | undefined): boolean;
}
/**
 * @generated from message osmosis.tokenfactory.v1beta1.MsgForceTransferResponse
 */
export declare class MsgForceTransferResponse extends Message<MsgForceTransferResponse> {
    constructor(data?: PartialMessage<MsgForceTransferResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.tokenfactory.v1beta1.MsgForceTransferResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgForceTransferResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgForceTransferResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgForceTransferResponse;
    static equals(a: MsgForceTransferResponse | PlainMessage<MsgForceTransferResponse> | undefined, b: MsgForceTransferResponse | PlainMessage<MsgForceTransferResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map