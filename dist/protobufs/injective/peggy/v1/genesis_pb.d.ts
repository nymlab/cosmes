import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { ERC20ToDenom, Valset } from "./types_pb.js";
import { MsgConfirmBatch, MsgSetOrchestratorAddresses, MsgValsetConfirm } from "./msgs_pb.js";
import { OutgoingTransferTx, OutgoingTxBatch } from "./batch_pb.js";
import { Attestation } from "./attestation_pb.js";
/**
 * GenesisState struct
 *
 * @generated from message injective.peggy.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: injective.peggy.v1.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from field: uint64 last_observed_nonce = 2;
     */
    lastObservedNonce: bigint;
    /**
     * @generated from field: repeated injective.peggy.v1.Valset valsets = 3;
     */
    valsets: Valset[];
    /**
     * @generated from field: repeated injective.peggy.v1.MsgValsetConfirm valset_confirms = 4;
     */
    valsetConfirms: MsgValsetConfirm[];
    /**
     * @generated from field: repeated injective.peggy.v1.OutgoingTxBatch batches = 5;
     */
    batches: OutgoingTxBatch[];
    /**
     * @generated from field: repeated injective.peggy.v1.MsgConfirmBatch batch_confirms = 6;
     */
    batchConfirms: MsgConfirmBatch[];
    /**
     * @generated from field: repeated injective.peggy.v1.Attestation attestations = 7;
     */
    attestations: Attestation[];
    /**
     * @generated from field: repeated injective.peggy.v1.MsgSetOrchestratorAddresses orchestrator_addresses = 8;
     */
    orchestratorAddresses: MsgSetOrchestratorAddresses[];
    /**
     * @generated from field: repeated injective.peggy.v1.ERC20ToDenom erc20_to_denoms = 9;
     */
    erc20ToDenoms: ERC20ToDenom[];
    /**
     * @generated from field: repeated injective.peggy.v1.OutgoingTransferTx unbatched_transfers = 10;
     */
    unbatchedTransfers: OutgoingTransferTx[];
    /**
     * @generated from field: uint64 last_observed_ethereum_height = 11;
     */
    lastObservedEthereumHeight: bigint;
    /**
     * @generated from field: uint64 last_outgoing_batch_id = 12;
     */
    lastOutgoingBatchId: bigint;
    /**
     * @generated from field: uint64 last_outgoing_pool_id = 13;
     */
    lastOutgoingPoolId: bigint;
    /**
     * @generated from field: injective.peggy.v1.Valset last_observed_valset = 14;
     */
    lastObservedValset?: Valset;
    /**
     * @generated from field: repeated string ethereum_blacklist = 15;
     */
    ethereumBlacklist: string[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "injective.peggy.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map