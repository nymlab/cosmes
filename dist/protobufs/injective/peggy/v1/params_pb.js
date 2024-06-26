// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/peggy/v1/params.proto (package injective.peggy.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message injective.peggy.v1.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string peggy_id = 1;
         */
        this.peggyId = "";
        /**
         * @generated from field: string contract_source_hash = 2;
         */
        this.contractSourceHash = "";
        /**
         * @generated from field: string bridge_ethereum_address = 3;
         */
        this.bridgeEthereumAddress = "";
        /**
         * @generated from field: uint64 bridge_chain_id = 4;
         */
        this.bridgeChainId = protoInt64.zero;
        /**
         * @generated from field: uint64 signed_valsets_window = 5;
         */
        this.signedValsetsWindow = protoInt64.zero;
        /**
         * @generated from field: uint64 signed_batches_window = 6;
         */
        this.signedBatchesWindow = protoInt64.zero;
        /**
         * @generated from field: uint64 signed_claims_window = 7;
         */
        this.signedClaimsWindow = protoInt64.zero;
        /**
         * @generated from field: uint64 target_batch_timeout = 8;
         */
        this.targetBatchTimeout = protoInt64.zero;
        /**
         * @generated from field: uint64 average_block_time = 9;
         */
        this.averageBlockTime = protoInt64.zero;
        /**
         * @generated from field: uint64 average_ethereum_block_time = 10;
         */
        this.averageEthereumBlockTime = protoInt64.zero;
        /**
         * @generated from field: bytes slash_fraction_valset = 11;
         */
        this.slashFractionValset = new Uint8Array(0);
        /**
         * @generated from field: bytes slash_fraction_batch = 12;
         */
        this.slashFractionBatch = new Uint8Array(0);
        /**
         * @generated from field: bytes slash_fraction_claim = 13;
         */
        this.slashFractionClaim = new Uint8Array(0);
        /**
         * @generated from field: bytes slash_fraction_conflicting_claim = 14;
         */
        this.slashFractionConflictingClaim = new Uint8Array(0);
        /**
         * @generated from field: uint64 unbond_slashing_valsets_window = 15;
         */
        this.unbondSlashingValsetsWindow = protoInt64.zero;
        /**
         * @generated from field: bytes slash_fraction_bad_eth_signature = 16;
         */
        this.slashFractionBadEthSignature = new Uint8Array(0);
        /**
         * @generated from field: string cosmos_coin_denom = 17;
         */
        this.cosmosCoinDenom = "";
        /**
         * @generated from field: string cosmos_coin_erc20_contract = 18;
         */
        this.cosmosCoinErc20Contract = "";
        /**
         * @generated from field: bool claim_slashing_enabled = 19;
         */
        this.claimSlashingEnabled = false;
        /**
         * @generated from field: uint64 bridge_contract_start_height = 20;
         */
        this.bridgeContractStartHeight = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Params().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Params().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Params().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Params, a, b);
    }
}
Params.runtime = proto3;
Params.typeName = "injective.peggy.v1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "peggy_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "contract_source_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "bridge_ethereum_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "bridge_chain_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "signed_valsets_window", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "signed_batches_window", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "signed_claims_window", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "target_batch_timeout", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "average_block_time", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "average_ethereum_block_time", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 11, name: "slash_fraction_valset", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 12, name: "slash_fraction_batch", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 13, name: "slash_fraction_claim", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 14, name: "slash_fraction_conflicting_claim", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 15, name: "unbond_slashing_valsets_window", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 16, name: "slash_fraction_bad_eth_signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 17, name: "cosmos_coin_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "cosmos_coin_erc20_contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "claim_slashing_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 20, name: "bridge_contract_start_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 21, name: "valset_reward", kind: "message", T: Coin },
]);
//# sourceMappingURL=params_pb.js.map