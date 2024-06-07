import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 *
 * @generated from message ethermint.types.v1.ExtensionOptionsWeb3Tx
 */
export declare class ExtensionOptionsWeb3Tx extends Message<ExtensionOptionsWeb3Tx> {
    /**
     * typed_data_chain_id is used only in EIP712 Domain and should match
     * Ethereum network ID in a Web3 provider (e.g. Metamask).
     *
     * @generated from field: uint64 typed_data_chain_id = 1;
     */
    typedDataChainId: bigint;
    /**
     * fee_payer is an account address for the fee payer. It will be validated
     * during EIP712 signature checking.
     *
     * @generated from field: string fee_payer = 2;
     */
    feePayer: string;
    /**
     * fee_payer_sig is a signature data from the fee paying account,
     * allows to perform fee delegation when using EIP712 Domain.
     *
     * @generated from field: bytes fee_payer_sig = 3;
     */
    feePayerSig: Uint8Array;
    constructor(data?: PartialMessage<ExtensionOptionsWeb3Tx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.types.v1.ExtensionOptionsWeb3Tx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtensionOptionsWeb3Tx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtensionOptionsWeb3Tx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtensionOptionsWeb3Tx;
    static equals(a: ExtensionOptionsWeb3Tx | PlainMessage<ExtensionOptionsWeb3Tx> | undefined, b: ExtensionOptionsWeb3Tx | PlainMessage<ExtensionOptionsWeb3Tx> | undefined): boolean;
}
//# sourceMappingURL=web3_pb.d.ts.map