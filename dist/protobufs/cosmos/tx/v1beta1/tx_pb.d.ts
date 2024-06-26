import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { SignMode } from "../signing/v1beta1/signing_pb.js";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig_pb.js";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * Tx is the standard type used for broadcasting transactions.
 *
 * @generated from message cosmos.tx.v1beta1.Tx
 */
export declare class Tx extends Message<Tx> {
    /**
     * body is the processable content of the transaction
     *
     * @generated from field: cosmos.tx.v1beta1.TxBody body = 1;
     */
    body?: TxBody;
    /**
     * auth_info is the authorization related content of the transaction,
     * specifically signers, signer modes and fee
     *
     * @generated from field: cosmos.tx.v1beta1.AuthInfo auth_info = 2;
     */
    authInfo?: AuthInfo;
    /**
     * signatures is a list of signatures that matches the length and order of
     * AuthInfo's signer_infos to allow connecting signature meta information like
     * public key and signing mode by position.
     *
     * @generated from field: repeated bytes signatures = 3;
     */
    signatures: Uint8Array[];
    constructor(data?: PartialMessage<Tx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.Tx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tx;
    static equals(a: Tx | PlainMessage<Tx> | undefined, b: Tx | PlainMessage<Tx> | undefined): boolean;
}
/**
 * TxRaw is a variant of Tx that pins the signer's exact binary representation
 * of body and auth_info. This is used for signing, broadcasting and
 * verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
 * the hash `sha256(serialize(tx: TxRaw))` becomes the "txhash", commonly used
 * as the transaction ID.
 *
 * @generated from message cosmos.tx.v1beta1.TxRaw
 */
export declare class TxRaw extends Message<TxRaw> {
    /**
     * body_bytes is a protobuf serialization of a TxBody that matches the
     * representation in SignDoc.
     *
     * @generated from field: bytes body_bytes = 1;
     */
    bodyBytes: Uint8Array;
    /**
     * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
     * representation in SignDoc.
     *
     * @generated from field: bytes auth_info_bytes = 2;
     */
    authInfoBytes: Uint8Array;
    /**
     * signatures is a list of signatures that matches the length and order of
     * AuthInfo's signer_infos to allow connecting signature meta information like
     * public key and signing mode by position.
     *
     * @generated from field: repeated bytes signatures = 3;
     */
    signatures: Uint8Array[];
    constructor(data?: PartialMessage<TxRaw>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.TxRaw";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxRaw;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxRaw;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxRaw;
    static equals(a: TxRaw | PlainMessage<TxRaw> | undefined, b: TxRaw | PlainMessage<TxRaw> | undefined): boolean;
}
/**
 * SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT.
 *
 * @generated from message cosmos.tx.v1beta1.SignDoc
 */
export declare class SignDoc extends Message<SignDoc> {
    /**
     * body_bytes is protobuf serialization of a TxBody that matches the
     * representation in TxRaw.
     *
     * @generated from field: bytes body_bytes = 1;
     */
    bodyBytes: Uint8Array;
    /**
     * auth_info_bytes is a protobuf serialization of an AuthInfo that matches the
     * representation in TxRaw.
     *
     * @generated from field: bytes auth_info_bytes = 2;
     */
    authInfoBytes: Uint8Array;
    /**
     * chain_id is the unique identifier of the chain this transaction targets.
     * It prevents signed transactions from being used on another chain by an
     * attacker
     *
     * @generated from field: string chain_id = 3;
     */
    chainId: string;
    /**
     * account_number is the account number of the account in state
     *
     * @generated from field: uint64 account_number = 4;
     */
    accountNumber: bigint;
    constructor(data?: PartialMessage<SignDoc>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.SignDoc";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignDoc;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignDoc;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignDoc;
    static equals(a: SignDoc | PlainMessage<SignDoc> | undefined, b: SignDoc | PlainMessage<SignDoc> | undefined): boolean;
}
/**
 * SignDocDirectAux is the type used for generating sign bytes for
 * SIGN_MODE_DIRECT_AUX.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.tx.v1beta1.SignDocDirectAux
 */
export declare class SignDocDirectAux extends Message<SignDocDirectAux> {
    /**
     * body_bytes is protobuf serialization of a TxBody that matches the
     * representation in TxRaw.
     *
     * @generated from field: bytes body_bytes = 1;
     */
    bodyBytes: Uint8Array;
    /**
     * public_key is the public key of the signing account.
     *
     * @generated from field: google.protobuf.Any public_key = 2;
     */
    publicKey?: Any;
    /**
     * chain_id is the identifier of the chain this transaction targets.
     * It prevents signed transactions from being used on another chain by an
     * attacker.
     *
     * @generated from field: string chain_id = 3;
     */
    chainId: string;
    /**
     * account_number is the account number of the account in state.
     *
     * @generated from field: uint64 account_number = 4;
     */
    accountNumber: bigint;
    /**
     * sequence is the sequence number of the signing account.
     *
     * @generated from field: uint64 sequence = 5;
     */
    sequence: bigint;
    /**
     * Tip is the optional tip used for transactions fees paid in another denom.
     * It should be left empty if the signer is not the tipper for this
     * transaction.
     *
     * This field is ignored if the chain didn't enable tips, i.e. didn't add the
     * `TipDecorator` in its posthandler.
     *
     * @generated from field: cosmos.tx.v1beta1.Tip tip = 6;
     */
    tip?: Tip;
    constructor(data?: PartialMessage<SignDocDirectAux>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.SignDocDirectAux";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignDocDirectAux;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignDocDirectAux;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignDocDirectAux;
    static equals(a: SignDocDirectAux | PlainMessage<SignDocDirectAux> | undefined, b: SignDocDirectAux | PlainMessage<SignDocDirectAux> | undefined): boolean;
}
/**
 * TxBody is the body of a transaction that all signers sign over.
 *
 * @generated from message cosmos.tx.v1beta1.TxBody
 */
export declare class TxBody extends Message<TxBody> {
    /**
     * messages is a list of messages to be executed. The required signers of
     * those messages define the number and order of elements in AuthInfo's
     * signer_infos and Tx's signatures. Each required signer address is added to
     * the list only the first time it occurs.
     * By convention, the first required signer (usually from the first message)
     * is referred to as the primary signer and pays the fee for the whole
     * transaction.
     *
     * @generated from field: repeated google.protobuf.Any messages = 1;
     */
    messages: Any[];
    /**
     * memo is any arbitrary note/comment to be added to the transaction.
     * WARNING: in clients, any publicly exposed text should not be called memo,
     * but should be called `note` instead (see https://github.com/cosmos/cosmos-sdk/issues/9122).
     *
     * @generated from field: string memo = 2;
     */
    memo: string;
    /**
     * timeout is the block height after which this transaction will not
     * be processed by the chain
     *
     * @generated from field: uint64 timeout_height = 3;
     */
    timeoutHeight: bigint;
    /**
     * extension_options are arbitrary options that can be added by chains
     * when the default options are not sufficient. If any of these are present
     * and can't be handled, the transaction will be rejected
     *
     * @generated from field: repeated google.protobuf.Any extension_options = 1023;
     */
    extensionOptions: Any[];
    /**
     * extension_options are arbitrary options that can be added by chains
     * when the default options are not sufficient. If any of these are present
     * and can't be handled, they will be ignored
     *
     * @generated from field: repeated google.protobuf.Any non_critical_extension_options = 2047;
     */
    nonCriticalExtensionOptions: Any[];
    constructor(data?: PartialMessage<TxBody>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.TxBody";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxBody;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxBody;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxBody;
    static equals(a: TxBody | PlainMessage<TxBody> | undefined, b: TxBody | PlainMessage<TxBody> | undefined): boolean;
}
/**
 * AuthInfo describes the fee and signer modes that are used to sign a
 * transaction.
 *
 * @generated from message cosmos.tx.v1beta1.AuthInfo
 */
export declare class AuthInfo extends Message<AuthInfo> {
    /**
     * signer_infos defines the signing modes for the required signers. The number
     * and order of elements must match the required signers from TxBody's
     * messages. The first element is the primary signer and the one which pays
     * the fee.
     *
     * @generated from field: repeated cosmos.tx.v1beta1.SignerInfo signer_infos = 1;
     */
    signerInfos: SignerInfo[];
    /**
     * Fee is the fee and gas limit for the transaction. The first signer is the
     * primary signer and the one which pays the fee. The fee can be calculated
     * based on the cost of evaluating the body and doing signature verification
     * of the signers. This can be estimated via simulation.
     *
     * @generated from field: cosmos.tx.v1beta1.Fee fee = 2;
     */
    fee?: Fee;
    /**
     * Tip is the optional tip used for transactions fees paid in another denom.
     *
     * This field is ignored if the chain didn't enable tips, i.e. didn't add the
     * `TipDecorator` in its posthandler.
     *
     * Since: cosmos-sdk 0.46
     *
     * @generated from field: cosmos.tx.v1beta1.Tip tip = 3;
     */
    tip?: Tip;
    constructor(data?: PartialMessage<AuthInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.AuthInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthInfo;
    static equals(a: AuthInfo | PlainMessage<AuthInfo> | undefined, b: AuthInfo | PlainMessage<AuthInfo> | undefined): boolean;
}
/**
 * SignerInfo describes the public key and signing mode of a single top-level
 * signer.
 *
 * @generated from message cosmos.tx.v1beta1.SignerInfo
 */
export declare class SignerInfo extends Message<SignerInfo> {
    /**
     * public_key is the public key of the signer. It is optional for accounts
     * that already exist in state. If unset, the verifier can use the required \
     * signer address for this position and lookup the public key.
     *
     * @generated from field: google.protobuf.Any public_key = 1;
     */
    publicKey?: Any;
    /**
     * mode_info describes the signing mode of the signer and is a nested
     * structure to support nested multisig pubkey's
     *
     * @generated from field: cosmos.tx.v1beta1.ModeInfo mode_info = 2;
     */
    modeInfo?: ModeInfo;
    /**
     * sequence is the sequence of the account, which describes the
     * number of committed transactions signed by a given address. It is used to
     * prevent replay attacks.
     *
     * @generated from field: uint64 sequence = 3;
     */
    sequence: bigint;
    constructor(data?: PartialMessage<SignerInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.SignerInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignerInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignerInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignerInfo;
    static equals(a: SignerInfo | PlainMessage<SignerInfo> | undefined, b: SignerInfo | PlainMessage<SignerInfo> | undefined): boolean;
}
/**
 * ModeInfo describes the signing mode of a single or nested multisig signer.
 *
 * @generated from message cosmos.tx.v1beta1.ModeInfo
 */
export declare class ModeInfo extends Message<ModeInfo> {
    /**
     * sum is the oneof that specifies whether this represents a single or nested
     * multisig signer
     *
     * @generated from oneof cosmos.tx.v1beta1.ModeInfo.sum
     */
    sum: {
        /**
         * single represents a single signer
         *
         * @generated from field: cosmos.tx.v1beta1.ModeInfo.Single single = 1;
         */
        value: ModeInfo_Single;
        case: "single";
    } | {
        /**
         * multi represents a nested multisig signer
         *
         * @generated from field: cosmos.tx.v1beta1.ModeInfo.Multi multi = 2;
         */
        value: ModeInfo_Multi;
        case: "multi";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<ModeInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.ModeInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModeInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModeInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModeInfo;
    static equals(a: ModeInfo | PlainMessage<ModeInfo> | undefined, b: ModeInfo | PlainMessage<ModeInfo> | undefined): boolean;
}
/**
 * Single is the mode info for a single signer. It is structured as a message
 * to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
 * future
 *
 * @generated from message cosmos.tx.v1beta1.ModeInfo.Single
 */
export declare class ModeInfo_Single extends Message<ModeInfo_Single> {
    /**
     * mode is the signing mode of the single signer
     *
     * @generated from field: cosmos.tx.signing.v1beta1.SignMode mode = 1;
     */
    mode: SignMode;
    constructor(data?: PartialMessage<ModeInfo_Single>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.ModeInfo.Single";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModeInfo_Single;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModeInfo_Single;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModeInfo_Single;
    static equals(a: ModeInfo_Single | PlainMessage<ModeInfo_Single> | undefined, b: ModeInfo_Single | PlainMessage<ModeInfo_Single> | undefined): boolean;
}
/**
 * Multi is the mode info for a multisig public key
 *
 * @generated from message cosmos.tx.v1beta1.ModeInfo.Multi
 */
export declare class ModeInfo_Multi extends Message<ModeInfo_Multi> {
    /**
     * bitarray specifies which keys within the multisig are signing
     *
     * @generated from field: cosmos.crypto.multisig.v1beta1.CompactBitArray bitarray = 1;
     */
    bitarray?: CompactBitArray;
    /**
     * mode_infos is the corresponding modes of the signers of the multisig
     * which could include nested multisig public keys
     *
     * @generated from field: repeated cosmos.tx.v1beta1.ModeInfo mode_infos = 2;
     */
    modeInfos: ModeInfo[];
    constructor(data?: PartialMessage<ModeInfo_Multi>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.ModeInfo.Multi";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModeInfo_Multi;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModeInfo_Multi;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModeInfo_Multi;
    static equals(a: ModeInfo_Multi | PlainMessage<ModeInfo_Multi> | undefined, b: ModeInfo_Multi | PlainMessage<ModeInfo_Multi> | undefined): boolean;
}
/**
 * Fee includes the amount of coins paid in fees and the maximum
 * gas to be used by the transaction. The ratio yields an effective "gasprice",
 * which must be above some miminum to be accepted into the mempool.
 *
 * @generated from message cosmos.tx.v1beta1.Fee
 */
export declare class Fee extends Message<Fee> {
    /**
     * amount is the amount of coins to be paid as a fee
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    /**
     * gas_limit is the maximum gas that can be used in transaction processing
     * before an out of gas error occurs
     *
     * @generated from field: uint64 gas_limit = 2;
     */
    gasLimit: bigint;
    /**
     * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
     * the payer must be a tx signer (and thus have signed this field in AuthInfo).
     * setting this field does *not* change the ordering of required signers for the transaction.
     *
     * @generated from field: string payer = 3;
     */
    payer: string;
    /**
     * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
     * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
     * not support fee grants, this will fail
     *
     * @generated from field: string granter = 4;
     */
    granter: string;
    constructor(data?: PartialMessage<Fee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.Fee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Fee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Fee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Fee;
    static equals(a: Fee | PlainMessage<Fee> | undefined, b: Fee | PlainMessage<Fee> | undefined): boolean;
}
/**
 * Tip is the tip used for meta-transactions.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.tx.v1beta1.Tip
 */
export declare class Tip extends Message<Tip> {
    /**
     * amount is the amount of the tip
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    /**
     * tipper is the address of the account paying for the tip
     *
     * @generated from field: string tipper = 2;
     */
    tipper: string;
    constructor(data?: PartialMessage<Tip>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.Tip";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tip;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tip;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tip;
    static equals(a: Tip | PlainMessage<Tip> | undefined, b: Tip | PlainMessage<Tip> | undefined): boolean;
}
/**
 * AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
 * tipper) builds and sends to the fee payer (who will build and broadcast the
 * actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
 * by the node if sent directly as-is.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.tx.v1beta1.AuxSignerData
 */
export declare class AuxSignerData extends Message<AuxSignerData> {
    /**
     * address is the bech32-encoded address of the auxiliary signer. If using
     * AuxSignerData across different chains, the bech32 prefix of the target
     * chain (where the final transaction is broadcasted) should be used.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * sign_doc is the SIGN_MODE_DIRECT_AUX sign doc that the auxiliary signer
     * signs. Note: we use the same sign doc even if we're signing with
     * LEGACY_AMINO_JSON.
     *
     * @generated from field: cosmos.tx.v1beta1.SignDocDirectAux sign_doc = 2;
     */
    signDoc?: SignDocDirectAux;
    /**
     * mode is the signing mode of the single signer.
     *
     * @generated from field: cosmos.tx.signing.v1beta1.SignMode mode = 3;
     */
    mode: SignMode;
    /**
     * sig is the signature of the sign doc.
     *
     * @generated from field: bytes sig = 4;
     */
    sig: Uint8Array;
    constructor(data?: PartialMessage<AuxSignerData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.AuxSignerData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuxSignerData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuxSignerData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuxSignerData;
    static equals(a: AuxSignerData | PlainMessage<AuxSignerData> | undefined, b: AuxSignerData | PlainMessage<AuxSignerData> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map