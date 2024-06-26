// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ethermint/types/v1/web3.proto (package ethermint.types.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 *
 * @generated from message ethermint.types.v1.ExtensionOptionsWeb3Tx
 */
export class ExtensionOptionsWeb3Tx extends Message {
    constructor(data) {
        super();
        /**
         * typed_data_chain_id is used only in EIP712 Domain and should match
         * Ethereum network ID in a Web3 provider (e.g. Metamask).
         *
         * @generated from field: uint64 typed_data_chain_id = 1;
         */
        this.typedDataChainId = protoInt64.zero;
        /**
         * fee_payer is an account address for the fee payer. It will be validated
         * during EIP712 signature checking.
         *
         * @generated from field: string fee_payer = 2;
         */
        this.feePayer = "";
        /**
         * fee_payer_sig is a signature data from the fee paying account,
         * allows to perform fee delegation when using EIP712 Domain.
         *
         * @generated from field: bytes fee_payer_sig = 3;
         */
        this.feePayerSig = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ExtensionOptionsWeb3Tx().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ExtensionOptionsWeb3Tx().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ExtensionOptionsWeb3Tx().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ExtensionOptionsWeb3Tx, a, b);
    }
}
ExtensionOptionsWeb3Tx.runtime = proto3;
ExtensionOptionsWeb3Tx.typeName = "ethermint.types.v1.ExtensionOptionsWeb3Tx";
ExtensionOptionsWeb3Tx.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "typed_data_chain_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "fee_payer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "fee_payer_sig", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
//# sourceMappingURL=web3_pb.js.map