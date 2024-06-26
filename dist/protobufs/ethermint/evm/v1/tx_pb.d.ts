import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { AccessTuple, Log, Params } from "./evm_pb.js";
/**
 * MsgEthereumTx encapsulates an Ethereum transaction as an SDK message.
 *
 * @generated from message ethermint.evm.v1.MsgEthereumTx
 */
export declare class MsgEthereumTx extends Message<MsgEthereumTx> {
    /**
     * data is inner transaction data of the Ethereum transaction
     *
     * @generated from field: google.protobuf.Any data = 1;
     */
    data?: Any;
    /**
     * size is the encoded storage size of the transaction (DEPRECATED)
     *
     * @generated from field: double size = 2;
     */
    size: number;
    /**
     * hash of the transaction in hex format
     *
     * @generated from field: string hash = 3;
     */
    hash: string;
    /**
     * from is the ethereum signer address in hex format. This address value is checked
     * against the address derived from the signature (V, R, S) using the
     * secp256k1 elliptic curve
     *
     * @generated from field: string from = 4;
     */
    from: string;
    constructor(data?: PartialMessage<MsgEthereumTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.MsgEthereumTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgEthereumTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgEthereumTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgEthereumTx;
    static equals(a: MsgEthereumTx | PlainMessage<MsgEthereumTx> | undefined, b: MsgEthereumTx | PlainMessage<MsgEthereumTx> | undefined): boolean;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 *
 * @generated from message ethermint.evm.v1.LegacyTx
 */
export declare class LegacyTx extends Message<LegacyTx> {
    /**
     * nonce corresponds to the account nonce (transaction sequence).
     *
     * @generated from field: uint64 nonce = 1;
     */
    nonce: bigint;
    /**
     * gas_price defines the value for each gas unit
     *
     * @generated from field: string gas_price = 2;
     */
    gasPrice: string;
    /**
     * gas defines the gas limit defined for the transaction.
     *
     * @generated from field: uint64 gas = 3;
     */
    gas: bigint;
    /**
     * to is the hex formatted address of the recipient
     *
     * @generated from field: string to = 4;
     */
    to: string;
    /**
     * value defines the unsigned integer value of the transaction amount.
     *
     * @generated from field: string value = 5;
     */
    value: string;
    /**
     * data is the data payload bytes of the transaction.
     *
     * @generated from field: bytes data = 6;
     */
    data: Uint8Array;
    /**
     * v defines the signature value
     *
     * @generated from field: bytes v = 7;
     */
    v: Uint8Array;
    /**
     * r defines the signature value
     *
     * @generated from field: bytes r = 8;
     */
    r: Uint8Array;
    /**
     * s define the signature value
     *
     * @generated from field: bytes s = 9;
     */
    s: Uint8Array;
    constructor(data?: PartialMessage<LegacyTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.LegacyTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LegacyTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LegacyTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LegacyTx;
    static equals(a: LegacyTx | PlainMessage<LegacyTx> | undefined, b: LegacyTx | PlainMessage<LegacyTx> | undefined): boolean;
}
/**
 * AccessListTx is the data of EIP-2930 access list transactions.
 *
 * @generated from message ethermint.evm.v1.AccessListTx
 */
export declare class AccessListTx extends Message<AccessListTx> {
    /**
     * chain_id of the destination EVM chain
     *
     * @generated from field: string chain_id = 1;
     */
    chainId: string;
    /**
     * nonce corresponds to the account nonce (transaction sequence).
     *
     * @generated from field: uint64 nonce = 2;
     */
    nonce: bigint;
    /**
     * gas_price defines the value for each gas unit
     *
     * @generated from field: string gas_price = 3;
     */
    gasPrice: string;
    /**
     * gas defines the gas limit defined for the transaction.
     *
     * @generated from field: uint64 gas = 4;
     */
    gas: bigint;
    /**
     * to is the recipient address in hex format
     *
     * @generated from field: string to = 5;
     */
    to: string;
    /**
     * value defines the unsigned integer value of the transaction amount.
     *
     * @generated from field: string value = 6;
     */
    value: string;
    /**
     * data is the data payload bytes of the transaction.
     *
     * @generated from field: bytes data = 7;
     */
    data: Uint8Array;
    /**
     * accesses is an array of access tuples
     *
     * @generated from field: repeated ethermint.evm.v1.AccessTuple accesses = 8;
     */
    accesses: AccessTuple[];
    /**
     * v defines the signature value
     *
     * @generated from field: bytes v = 9;
     */
    v: Uint8Array;
    /**
     * r defines the signature value
     *
     * @generated from field: bytes r = 10;
     */
    r: Uint8Array;
    /**
     * s define the signature value
     *
     * @generated from field: bytes s = 11;
     */
    s: Uint8Array;
    constructor(data?: PartialMessage<AccessListTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.AccessListTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessListTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessListTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessListTx;
    static equals(a: AccessListTx | PlainMessage<AccessListTx> | undefined, b: AccessListTx | PlainMessage<AccessListTx> | undefined): boolean;
}
/**
 * DynamicFeeTx is the data of EIP-1559 dinamic fee transactions.
 *
 * @generated from message ethermint.evm.v1.DynamicFeeTx
 */
export declare class DynamicFeeTx extends Message<DynamicFeeTx> {
    /**
     * chain_id of the destination EVM chain
     *
     * @generated from field: string chain_id = 1;
     */
    chainId: string;
    /**
     * nonce corresponds to the account nonce (transaction sequence).
     *
     * @generated from field: uint64 nonce = 2;
     */
    nonce: bigint;
    /**
     * gas_tip_cap defines the max value for the gas tip
     *
     * @generated from field: string gas_tip_cap = 3;
     */
    gasTipCap: string;
    /**
     * gas_fee_cap defines the max value for the gas fee
     *
     * @generated from field: string gas_fee_cap = 4;
     */
    gasFeeCap: string;
    /**
     * gas defines the gas limit defined for the transaction.
     *
     * @generated from field: uint64 gas = 5;
     */
    gas: bigint;
    /**
     * to is the hex formatted address of the recipient
     *
     * @generated from field: string to = 6;
     */
    to: string;
    /**
     * value defines the the transaction amount.
     *
     * @generated from field: string value = 7;
     */
    value: string;
    /**
     * data is the data payload bytes of the transaction.
     *
     * @generated from field: bytes data = 8;
     */
    data: Uint8Array;
    /**
     * accesses is an array of access tuples
     *
     * @generated from field: repeated ethermint.evm.v1.AccessTuple accesses = 9;
     */
    accesses: AccessTuple[];
    /**
     * v defines the signature value
     *
     * @generated from field: bytes v = 10;
     */
    v: Uint8Array;
    /**
     * r defines the signature value
     *
     * @generated from field: bytes r = 11;
     */
    r: Uint8Array;
    /**
     * s define the signature value
     *
     * @generated from field: bytes s = 12;
     */
    s: Uint8Array;
    constructor(data?: PartialMessage<DynamicFeeTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.DynamicFeeTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DynamicFeeTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DynamicFeeTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DynamicFeeTx;
    static equals(a: DynamicFeeTx | PlainMessage<DynamicFeeTx> | undefined, b: DynamicFeeTx | PlainMessage<DynamicFeeTx> | undefined): boolean;
}
/**
 * ExtensionOptionsEthereumTx is an extension option for ethereum transactions
 *
 * @generated from message ethermint.evm.v1.ExtensionOptionsEthereumTx
 */
export declare class ExtensionOptionsEthereumTx extends Message<ExtensionOptionsEthereumTx> {
    constructor(data?: PartialMessage<ExtensionOptionsEthereumTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.ExtensionOptionsEthereumTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtensionOptionsEthereumTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtensionOptionsEthereumTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtensionOptionsEthereumTx;
    static equals(a: ExtensionOptionsEthereumTx | PlainMessage<ExtensionOptionsEthereumTx> | undefined, b: ExtensionOptionsEthereumTx | PlainMessage<ExtensionOptionsEthereumTx> | undefined): boolean;
}
/**
 * MsgEthereumTxResponse defines the Msg/EthereumTx response type.
 *
 * @generated from message ethermint.evm.v1.MsgEthereumTxResponse
 */
export declare class MsgEthereumTxResponse extends Message<MsgEthereumTxResponse> {
    /**
     * hash of the ethereum transaction in hex format. This hash differs from the
     * Tendermint sha256 hash of the transaction bytes. See
     * https://github.com/tendermint/tendermint/issues/6539 for reference
     *
     * @generated from field: string hash = 1;
     */
    hash: string;
    /**
     * logs contains the transaction hash and the proto-compatible ethereum
     * logs.
     *
     * @generated from field: repeated ethermint.evm.v1.Log logs = 2;
     */
    logs: Log[];
    /**
     * ret is the returned data from evm function (result or data supplied with revert
     * opcode)
     *
     * @generated from field: bytes ret = 3;
     */
    ret: Uint8Array;
    /**
     * vm_error is the error returned by vm execution
     *
     * @generated from field: string vm_error = 4;
     */
    vmError: string;
    /**
     * gas_used specifies how much gas was consumed by the transaction
     *
     * @generated from field: uint64 gas_used = 5;
     */
    gasUsed: bigint;
    constructor(data?: PartialMessage<MsgEthereumTxResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.MsgEthereumTxResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgEthereumTxResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgEthereumTxResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgEthereumTxResponse;
    static equals(a: MsgEthereumTxResponse | PlainMessage<MsgEthereumTxResponse> | undefined, b: MsgEthereumTxResponse | PlainMessage<MsgEthereumTxResponse> | undefined): boolean;
}
/**
 * MsgUpdateParams defines a Msg for updating the x/evm module parameters.
 *
 * @generated from message ethermint.evm.v1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the x/evm parameters to update.
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: ethermint.evm.v1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * @generated from message ethermint.evm.v1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map