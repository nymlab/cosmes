import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message injective.peggy.v1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * @generated from field: string peggy_id = 1;
     */
    peggyId: string;
    /**
     * @generated from field: string contract_source_hash = 2;
     */
    contractSourceHash: string;
    /**
     * @generated from field: string bridge_ethereum_address = 3;
     */
    bridgeEthereumAddress: string;
    /**
     * @generated from field: uint64 bridge_chain_id = 4;
     */
    bridgeChainId: bigint;
    /**
     * @generated from field: uint64 signed_valsets_window = 5;
     */
    signedValsetsWindow: bigint;
    /**
     * @generated from field: uint64 signed_batches_window = 6;
     */
    signedBatchesWindow: bigint;
    /**
     * @generated from field: uint64 signed_claims_window = 7;
     */
    signedClaimsWindow: bigint;
    /**
     * @generated from field: uint64 target_batch_timeout = 8;
     */
    targetBatchTimeout: bigint;
    /**
     * @generated from field: uint64 average_block_time = 9;
     */
    averageBlockTime: bigint;
    /**
     * @generated from field: uint64 average_ethereum_block_time = 10;
     */
    averageEthereumBlockTime: bigint;
    /**
     * @generated from field: bytes slash_fraction_valset = 11;
     */
    slashFractionValset: Uint8Array;
    /**
     * @generated from field: bytes slash_fraction_batch = 12;
     */
    slashFractionBatch: Uint8Array;
    /**
     * @generated from field: bytes slash_fraction_claim = 13;
     */
    slashFractionClaim: Uint8Array;
    /**
     * @generated from field: bytes slash_fraction_conflicting_claim = 14;
     */
    slashFractionConflictingClaim: Uint8Array;
    /**
     * @generated from field: uint64 unbond_slashing_valsets_window = 15;
     */
    unbondSlashingValsetsWindow: bigint;
    /**
     * @generated from field: bytes slash_fraction_bad_eth_signature = 16;
     */
    slashFractionBadEthSignature: Uint8Array;
    /**
     * @generated from field: string cosmos_coin_denom = 17;
     */
    cosmosCoinDenom: string;
    /**
     * @generated from field: string cosmos_coin_erc20_contract = 18;
     */
    cosmosCoinErc20Contract: string;
    /**
     * @generated from field: bool claim_slashing_enabled = 19;
     */
    claimSlashingEnabled: boolean;
    /**
     * @generated from field: uint64 bridge_contract_start_height = 20;
     */
    bridgeContractStartHeight: bigint;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin valset_reward = 21;
     */
    valsetReward?: Coin;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=params_pb.d.ts.map