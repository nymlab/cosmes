import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { ConsensusParams } from "../types/params_pb.js";
import { Header } from "../types/types_pb.js";
import { ProofOps } from "../crypto/proof_pb.js";
import { PublicKey } from "../crypto/keys_pb.js";
/**
 * @generated from enum tendermint.abci.CheckTxType
 */
export declare enum CheckTxType {
    /**
     * @generated from enum value: NEW = 0;
     */
    NEW = 0,
    /**
     * @generated from enum value: RECHECK = 1;
     */
    RECHECK = 1
}
/**
 * @generated from enum tendermint.abci.MisbehaviorType
 */
export declare enum MisbehaviorType {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: DUPLICATE_VOTE = 1;
     */
    DUPLICATE_VOTE = 1,
    /**
     * @generated from enum value: LIGHT_CLIENT_ATTACK = 2;
     */
    LIGHT_CLIENT_ATTACK = 2
}
/**
 * @generated from message tendermint.abci.Request
 */
export declare class Request extends Message<Request> {
    /**
     * @generated from oneof tendermint.abci.Request.value
     */
    value: {
        /**
         * @generated from field: tendermint.abci.RequestEcho echo = 1;
         */
        value: RequestEcho;
        case: "echo";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestFlush flush = 2;
         */
        value: RequestFlush;
        case: "flush";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestInfo info = 3;
         */
        value: RequestInfo;
        case: "info";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestInitChain init_chain = 5;
         */
        value: RequestInitChain;
        case: "initChain";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestQuery query = 6;
         */
        value: RequestQuery;
        case: "query";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestBeginBlock begin_block = 7;
         */
        value: RequestBeginBlock;
        case: "beginBlock";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestCheckTx check_tx = 8;
         */
        value: RequestCheckTx;
        case: "checkTx";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestDeliverTx deliver_tx = 9;
         */
        value: RequestDeliverTx;
        case: "deliverTx";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestEndBlock end_block = 10;
         */
        value: RequestEndBlock;
        case: "endBlock";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestCommit commit = 11;
         */
        value: RequestCommit;
        case: "commit";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestListSnapshots list_snapshots = 12;
         */
        value: RequestListSnapshots;
        case: "listSnapshots";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestOfferSnapshot offer_snapshot = 13;
         */
        value: RequestOfferSnapshot;
        case: "offerSnapshot";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestLoadSnapshotChunk load_snapshot_chunk = 14;
         */
        value: RequestLoadSnapshotChunk;
        case: "loadSnapshotChunk";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestApplySnapshotChunk apply_snapshot_chunk = 15;
         */
        value: RequestApplySnapshotChunk;
        case: "applySnapshotChunk";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestPrepareProposal prepare_proposal = 16;
         */
        value: RequestPrepareProposal;
        case: "prepareProposal";
    } | {
        /**
         * @generated from field: tendermint.abci.RequestProcessProposal process_proposal = 17;
         */
        value: RequestProcessProposal;
        case: "processProposal";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<Request>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.Request";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Request;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Request;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Request;
    static equals(a: Request | PlainMessage<Request> | undefined, b: Request | PlainMessage<Request> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.RequestEcho
 */
export declare class RequestEcho extends Message<RequestEcho> {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
    constructor(data?: PartialMessage<RequestEcho>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestEcho";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestEcho;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestEcho;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestEcho;
    static equals(a: RequestEcho | PlainMessage<RequestEcho> | undefined, b: RequestEcho | PlainMessage<RequestEcho> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.RequestFlush
 */
export declare class RequestFlush extends Message<RequestFlush> {
    constructor(data?: PartialMessage<RequestFlush>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestFlush";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestFlush;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestFlush;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestFlush;
    static equals(a: RequestFlush | PlainMessage<RequestFlush> | undefined, b: RequestFlush | PlainMessage<RequestFlush> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.RequestInfo
 */
export declare class RequestInfo extends Message<RequestInfo> {
    /**
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * @generated from field: uint64 block_version = 2;
     */
    blockVersion: bigint;
    /**
     * @generated from field: uint64 p2p_version = 3;
     */
    p2pVersion: bigint;
    /**
     * @generated from field: string abci_version = 4;
     */
    abciVersion: string;
    constructor(data?: PartialMessage<RequestInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestInfo;
    static equals(a: RequestInfo | PlainMessage<RequestInfo> | undefined, b: RequestInfo | PlainMessage<RequestInfo> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.RequestInitChain
 */
export declare class RequestInitChain extends Message<RequestInitChain> {
    /**
     * @generated from field: google.protobuf.Timestamp time = 1;
     */
    time?: Timestamp;
    /**
     * @generated from field: string chain_id = 2;
     */
    chainId: string;
    /**
     * @generated from field: tendermint.types.ConsensusParams consensus_params = 3;
     */
    consensusParams?: ConsensusParams;
    /**
     * @generated from field: repeated tendermint.abci.ValidatorUpdate validators = 4;
     */
    validators: ValidatorUpdate[];
    /**
     * @generated from field: bytes app_state_bytes = 5;
     */
    appStateBytes: Uint8Array;
    /**
     * @generated from field: int64 initial_height = 6;
     */
    initialHeight: bigint;
    constructor(data?: PartialMessage<RequestInitChain>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestInitChain";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestInitChain;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestInitChain;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestInitChain;
    static equals(a: RequestInitChain | PlainMessage<RequestInitChain> | undefined, b: RequestInitChain | PlainMessage<RequestInitChain> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.RequestQuery
 */
export declare class RequestQuery extends Message<RequestQuery> {
    /**
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    /**
     * @generated from field: string path = 2;
     */
    path: string;
    /**
     * @generated from field: int64 height = 3;
     */
    height: bigint;
    /**
     * @generated from field: bool prove = 4;
     */
    prove: boolean;
    constructor(data?: PartialMessage<RequestQuery>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestQuery";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestQuery;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestQuery;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestQuery;
    static equals(a: RequestQuery | PlainMessage<RequestQuery> | undefined, b: RequestQuery | PlainMessage<RequestQuery> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.RequestBeginBlock
 */
export declare class RequestBeginBlock extends Message<RequestBeginBlock> {
    /**
     * @generated from field: bytes hash = 1;
     */
    hash: Uint8Array;
    /**
     * @generated from field: tendermint.types.Header header = 2;
     */
    header?: Header;
    /**
     * @generated from field: tendermint.abci.CommitInfo last_commit_info = 3;
     */
    lastCommitInfo?: CommitInfo;
    /**
     * @generated from field: repeated tendermint.abci.Misbehavior byzantine_validators = 4;
     */
    byzantineValidators: Misbehavior[];
    constructor(data?: PartialMessage<RequestBeginBlock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestBeginBlock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestBeginBlock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestBeginBlock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestBeginBlock;
    static equals(a: RequestBeginBlock | PlainMessage<RequestBeginBlock> | undefined, b: RequestBeginBlock | PlainMessage<RequestBeginBlock> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.RequestCheckTx
 */
export declare class RequestCheckTx extends Message<RequestCheckTx> {
    /**
     * @generated from field: bytes tx = 1;
     */
    tx: Uint8Array;
    /**
     * @generated from field: tendermint.abci.CheckTxType type = 2;
     */
    type: CheckTxType;
    constructor(data?: PartialMessage<RequestCheckTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestCheckTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestCheckTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestCheckTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestCheckTx;
    static equals(a: RequestCheckTx | PlainMessage<RequestCheckTx> | undefined, b: RequestCheckTx | PlainMessage<RequestCheckTx> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.RequestDeliverTx
 */
export declare class RequestDeliverTx extends Message<RequestDeliverTx> {
    /**
     * @generated from field: bytes tx = 1;
     */
    tx: Uint8Array;
    constructor(data?: PartialMessage<RequestDeliverTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestDeliverTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestDeliverTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestDeliverTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestDeliverTx;
    static equals(a: RequestDeliverTx | PlainMessage<RequestDeliverTx> | undefined, b: RequestDeliverTx | PlainMessage<RequestDeliverTx> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.RequestEndBlock
 */
export declare class RequestEndBlock extends Message<RequestEndBlock> {
    /**
     * @generated from field: int64 height = 1;
     */
    height: bigint;
    constructor(data?: PartialMessage<RequestEndBlock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestEndBlock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestEndBlock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestEndBlock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestEndBlock;
    static equals(a: RequestEndBlock | PlainMessage<RequestEndBlock> | undefined, b: RequestEndBlock | PlainMessage<RequestEndBlock> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.RequestCommit
 */
export declare class RequestCommit extends Message<RequestCommit> {
    constructor(data?: PartialMessage<RequestCommit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestCommit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestCommit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestCommit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestCommit;
    static equals(a: RequestCommit | PlainMessage<RequestCommit> | undefined, b: RequestCommit | PlainMessage<RequestCommit> | undefined): boolean;
}
/**
 * lists available snapshots
 *
 * @generated from message tendermint.abci.RequestListSnapshots
 */
export declare class RequestListSnapshots extends Message<RequestListSnapshots> {
    constructor(data?: PartialMessage<RequestListSnapshots>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestListSnapshots";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestListSnapshots;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestListSnapshots;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestListSnapshots;
    static equals(a: RequestListSnapshots | PlainMessage<RequestListSnapshots> | undefined, b: RequestListSnapshots | PlainMessage<RequestListSnapshots> | undefined): boolean;
}
/**
 * offers a snapshot to the application
 *
 * @generated from message tendermint.abci.RequestOfferSnapshot
 */
export declare class RequestOfferSnapshot extends Message<RequestOfferSnapshot> {
    /**
     * snapshot offered by peers
     *
     * @generated from field: tendermint.abci.Snapshot snapshot = 1;
     */
    snapshot?: Snapshot;
    /**
     * light client-verified app hash for snapshot height
     *
     * @generated from field: bytes app_hash = 2;
     */
    appHash: Uint8Array;
    constructor(data?: PartialMessage<RequestOfferSnapshot>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestOfferSnapshot";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestOfferSnapshot;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestOfferSnapshot;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestOfferSnapshot;
    static equals(a: RequestOfferSnapshot | PlainMessage<RequestOfferSnapshot> | undefined, b: RequestOfferSnapshot | PlainMessage<RequestOfferSnapshot> | undefined): boolean;
}
/**
 * loads a snapshot chunk
 *
 * @generated from message tendermint.abci.RequestLoadSnapshotChunk
 */
export declare class RequestLoadSnapshotChunk extends Message<RequestLoadSnapshotChunk> {
    /**
     * @generated from field: uint64 height = 1;
     */
    height: bigint;
    /**
     * @generated from field: uint32 format = 2;
     */
    format: number;
    /**
     * @generated from field: uint32 chunk = 3;
     */
    chunk: number;
    constructor(data?: PartialMessage<RequestLoadSnapshotChunk>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestLoadSnapshotChunk";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestLoadSnapshotChunk;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestLoadSnapshotChunk;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestLoadSnapshotChunk;
    static equals(a: RequestLoadSnapshotChunk | PlainMessage<RequestLoadSnapshotChunk> | undefined, b: RequestLoadSnapshotChunk | PlainMessage<RequestLoadSnapshotChunk> | undefined): boolean;
}
/**
 * Applies a snapshot chunk
 *
 * @generated from message tendermint.abci.RequestApplySnapshotChunk
 */
export declare class RequestApplySnapshotChunk extends Message<RequestApplySnapshotChunk> {
    /**
     * @generated from field: uint32 index = 1;
     */
    index: number;
    /**
     * @generated from field: bytes chunk = 2;
     */
    chunk: Uint8Array;
    /**
     * @generated from field: string sender = 3;
     */
    sender: string;
    constructor(data?: PartialMessage<RequestApplySnapshotChunk>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestApplySnapshotChunk";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestApplySnapshotChunk;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestApplySnapshotChunk;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestApplySnapshotChunk;
    static equals(a: RequestApplySnapshotChunk | PlainMessage<RequestApplySnapshotChunk> | undefined, b: RequestApplySnapshotChunk | PlainMessage<RequestApplySnapshotChunk> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.RequestPrepareProposal
 */
export declare class RequestPrepareProposal extends Message<RequestPrepareProposal> {
    /**
     * the modified transactions cannot exceed this size.
     *
     * @generated from field: int64 max_tx_bytes = 1;
     */
    maxTxBytes: bigint;
    /**
     * txs is an array of transactions that will be included in a block,
     * sent to the app for possible modifications.
     *
     * @generated from field: repeated bytes txs = 2;
     */
    txs: Uint8Array[];
    /**
     * @generated from field: tendermint.abci.ExtendedCommitInfo local_last_commit = 3;
     */
    localLastCommit?: ExtendedCommitInfo;
    /**
     * @generated from field: repeated tendermint.abci.Misbehavior misbehavior = 4;
     */
    misbehavior: Misbehavior[];
    /**
     * @generated from field: int64 height = 5;
     */
    height: bigint;
    /**
     * @generated from field: google.protobuf.Timestamp time = 6;
     */
    time?: Timestamp;
    /**
     * @generated from field: bytes next_validators_hash = 7;
     */
    nextValidatorsHash: Uint8Array;
    /**
     * address of the public key of the validator proposing the block.
     *
     * @generated from field: bytes proposer_address = 8;
     */
    proposerAddress: Uint8Array;
    constructor(data?: PartialMessage<RequestPrepareProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestPrepareProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestPrepareProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestPrepareProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestPrepareProposal;
    static equals(a: RequestPrepareProposal | PlainMessage<RequestPrepareProposal> | undefined, b: RequestPrepareProposal | PlainMessage<RequestPrepareProposal> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.RequestProcessProposal
 */
export declare class RequestProcessProposal extends Message<RequestProcessProposal> {
    /**
     * @generated from field: repeated bytes txs = 1;
     */
    txs: Uint8Array[];
    /**
     * @generated from field: tendermint.abci.CommitInfo proposed_last_commit = 2;
     */
    proposedLastCommit?: CommitInfo;
    /**
     * @generated from field: repeated tendermint.abci.Misbehavior misbehavior = 3;
     */
    misbehavior: Misbehavior[];
    /**
     * hash is the merkle root hash of the fields of the proposed block.
     *
     * @generated from field: bytes hash = 4;
     */
    hash: Uint8Array;
    /**
     * @generated from field: int64 height = 5;
     */
    height: bigint;
    /**
     * @generated from field: google.protobuf.Timestamp time = 6;
     */
    time?: Timestamp;
    /**
     * @generated from field: bytes next_validators_hash = 7;
     */
    nextValidatorsHash: Uint8Array;
    /**
     * address of the public key of the original proposer of the block.
     *
     * @generated from field: bytes proposer_address = 8;
     */
    proposerAddress: Uint8Array;
    constructor(data?: PartialMessage<RequestProcessProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.RequestProcessProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestProcessProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestProcessProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestProcessProposal;
    static equals(a: RequestProcessProposal | PlainMessage<RequestProcessProposal> | undefined, b: RequestProcessProposal | PlainMessage<RequestProcessProposal> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.Response
 */
export declare class Response extends Message<Response> {
    /**
     * @generated from oneof tendermint.abci.Response.value
     */
    value: {
        /**
         * @generated from field: tendermint.abci.ResponseException exception = 1;
         */
        value: ResponseException;
        case: "exception";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseEcho echo = 2;
         */
        value: ResponseEcho;
        case: "echo";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseFlush flush = 3;
         */
        value: ResponseFlush;
        case: "flush";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseInfo info = 4;
         */
        value: ResponseInfo;
        case: "info";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseInitChain init_chain = 6;
         */
        value: ResponseInitChain;
        case: "initChain";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseQuery query = 7;
         */
        value: ResponseQuery;
        case: "query";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseBeginBlock begin_block = 8;
         */
        value: ResponseBeginBlock;
        case: "beginBlock";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseCheckTx check_tx = 9;
         */
        value: ResponseCheckTx;
        case: "checkTx";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseDeliverTx deliver_tx = 10;
         */
        value: ResponseDeliverTx;
        case: "deliverTx";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseEndBlock end_block = 11;
         */
        value: ResponseEndBlock;
        case: "endBlock";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseCommit commit = 12;
         */
        value: ResponseCommit;
        case: "commit";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseListSnapshots list_snapshots = 13;
         */
        value: ResponseListSnapshots;
        case: "listSnapshots";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseOfferSnapshot offer_snapshot = 14;
         */
        value: ResponseOfferSnapshot;
        case: "offerSnapshot";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseLoadSnapshotChunk load_snapshot_chunk = 15;
         */
        value: ResponseLoadSnapshotChunk;
        case: "loadSnapshotChunk";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseApplySnapshotChunk apply_snapshot_chunk = 16;
         */
        value: ResponseApplySnapshotChunk;
        case: "applySnapshotChunk";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponsePrepareProposal prepare_proposal = 17;
         */
        value: ResponsePrepareProposal;
        case: "prepareProposal";
    } | {
        /**
         * @generated from field: tendermint.abci.ResponseProcessProposal process_proposal = 18;
         */
        value: ResponseProcessProposal;
        case: "processProposal";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<Response>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.Response";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Response;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Response;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Response;
    static equals(a: Response | PlainMessage<Response> | undefined, b: Response | PlainMessage<Response> | undefined): boolean;
}
/**
 * nondeterministic
 *
 * @generated from message tendermint.abci.ResponseException
 */
export declare class ResponseException extends Message<ResponseException> {
    /**
     * @generated from field: string error = 1;
     */
    error: string;
    constructor(data?: PartialMessage<ResponseException>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseException";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseException;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseException;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseException;
    static equals(a: ResponseException | PlainMessage<ResponseException> | undefined, b: ResponseException | PlainMessage<ResponseException> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseEcho
 */
export declare class ResponseEcho extends Message<ResponseEcho> {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
    constructor(data?: PartialMessage<ResponseEcho>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseEcho";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseEcho;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseEcho;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseEcho;
    static equals(a: ResponseEcho | PlainMessage<ResponseEcho> | undefined, b: ResponseEcho | PlainMessage<ResponseEcho> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseFlush
 */
export declare class ResponseFlush extends Message<ResponseFlush> {
    constructor(data?: PartialMessage<ResponseFlush>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseFlush";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseFlush;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseFlush;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseFlush;
    static equals(a: ResponseFlush | PlainMessage<ResponseFlush> | undefined, b: ResponseFlush | PlainMessage<ResponseFlush> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseInfo
 */
export declare class ResponseInfo extends Message<ResponseInfo> {
    /**
     * @generated from field: string data = 1;
     */
    data: string;
    /**
     * @generated from field: string version = 2;
     */
    version: string;
    /**
     * @generated from field: uint64 app_version = 3;
     */
    appVersion: bigint;
    /**
     * @generated from field: int64 last_block_height = 4;
     */
    lastBlockHeight: bigint;
    /**
     * @generated from field: bytes last_block_app_hash = 5;
     */
    lastBlockAppHash: Uint8Array;
    constructor(data?: PartialMessage<ResponseInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseInfo;
    static equals(a: ResponseInfo | PlainMessage<ResponseInfo> | undefined, b: ResponseInfo | PlainMessage<ResponseInfo> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseInitChain
 */
export declare class ResponseInitChain extends Message<ResponseInitChain> {
    /**
     * @generated from field: tendermint.types.ConsensusParams consensus_params = 1;
     */
    consensusParams?: ConsensusParams;
    /**
     * @generated from field: repeated tendermint.abci.ValidatorUpdate validators = 2;
     */
    validators: ValidatorUpdate[];
    /**
     * @generated from field: bytes app_hash = 3;
     */
    appHash: Uint8Array;
    constructor(data?: PartialMessage<ResponseInitChain>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseInitChain";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseInitChain;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseInitChain;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseInitChain;
    static equals(a: ResponseInitChain | PlainMessage<ResponseInitChain> | undefined, b: ResponseInitChain | PlainMessage<ResponseInitChain> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseQuery
 */
export declare class ResponseQuery extends Message<ResponseQuery> {
    /**
     * @generated from field: uint32 code = 1;
     */
    code: number;
    /**
     * bytes data = 2; // use "value" instead.
     *
     * nondeterministic
     *
     * @generated from field: string log = 3;
     */
    log: string;
    /**
     * nondeterministic
     *
     * @generated from field: string info = 4;
     */
    info: string;
    /**
     * @generated from field: int64 index = 5;
     */
    index: bigint;
    /**
     * @generated from field: bytes key = 6;
     */
    key: Uint8Array;
    /**
     * @generated from field: bytes value = 7;
     */
    value: Uint8Array;
    /**
     * @generated from field: tendermint.crypto.ProofOps proof_ops = 8;
     */
    proofOps?: ProofOps;
    /**
     * @generated from field: int64 height = 9;
     */
    height: bigint;
    /**
     * @generated from field: string codespace = 10;
     */
    codespace: string;
    constructor(data?: PartialMessage<ResponseQuery>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseQuery";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseQuery;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseQuery;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseQuery;
    static equals(a: ResponseQuery | PlainMessage<ResponseQuery> | undefined, b: ResponseQuery | PlainMessage<ResponseQuery> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseBeginBlock
 */
export declare class ResponseBeginBlock extends Message<ResponseBeginBlock> {
    /**
     * @generated from field: repeated tendermint.abci.Event events = 1;
     */
    events: Event[];
    constructor(data?: PartialMessage<ResponseBeginBlock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseBeginBlock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseBeginBlock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseBeginBlock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseBeginBlock;
    static equals(a: ResponseBeginBlock | PlainMessage<ResponseBeginBlock> | undefined, b: ResponseBeginBlock | PlainMessage<ResponseBeginBlock> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseCheckTx
 */
export declare class ResponseCheckTx extends Message<ResponseCheckTx> {
    /**
     * @generated from field: uint32 code = 1;
     */
    code: number;
    /**
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    /**
     * nondeterministic
     *
     * @generated from field: string log = 3;
     */
    log: string;
    /**
     * nondeterministic
     *
     * @generated from field: string info = 4;
     */
    info: string;
    /**
     * @generated from field: int64 gas_wanted = 5 [json_name = "gas_wanted"];
     */
    gasWanted: bigint;
    /**
     * @generated from field: int64 gas_used = 6 [json_name = "gas_used"];
     */
    gasUsed: bigint;
    /**
     * @generated from field: repeated tendermint.abci.Event events = 7;
     */
    events: Event[];
    /**
     * @generated from field: string codespace = 8;
     */
    codespace: string;
    /**
     * @generated from field: string sender = 9;
     */
    sender: string;
    /**
     * @generated from field: int64 priority = 10;
     */
    priority: bigint;
    /**
     * mempool_error is set by CometBFT.
     * ABCI applictions creating a ResponseCheckTX should not set mempool_error.
     *
     * @generated from field: string mempool_error = 11;
     */
    mempoolError: string;
    constructor(data?: PartialMessage<ResponseCheckTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseCheckTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseCheckTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseCheckTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseCheckTx;
    static equals(a: ResponseCheckTx | PlainMessage<ResponseCheckTx> | undefined, b: ResponseCheckTx | PlainMessage<ResponseCheckTx> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseDeliverTx
 */
export declare class ResponseDeliverTx extends Message<ResponseDeliverTx> {
    /**
     * @generated from field: uint32 code = 1;
     */
    code: number;
    /**
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    /**
     * nondeterministic
     *
     * @generated from field: string log = 3;
     */
    log: string;
    /**
     * nondeterministic
     *
     * @generated from field: string info = 4;
     */
    info: string;
    /**
     * @generated from field: int64 gas_wanted = 5 [json_name = "gas_wanted"];
     */
    gasWanted: bigint;
    /**
     * @generated from field: int64 gas_used = 6 [json_name = "gas_used"];
     */
    gasUsed: bigint;
    /**
     * nondeterministic
     *
     * @generated from field: repeated tendermint.abci.Event events = 7;
     */
    events: Event[];
    /**
     * @generated from field: string codespace = 8;
     */
    codespace: string;
    constructor(data?: PartialMessage<ResponseDeliverTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseDeliverTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseDeliverTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseDeliverTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseDeliverTx;
    static equals(a: ResponseDeliverTx | PlainMessage<ResponseDeliverTx> | undefined, b: ResponseDeliverTx | PlainMessage<ResponseDeliverTx> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseEndBlock
 */
export declare class ResponseEndBlock extends Message<ResponseEndBlock> {
    /**
     * @generated from field: repeated tendermint.abci.ValidatorUpdate validator_updates = 1;
     */
    validatorUpdates: ValidatorUpdate[];
    /**
     * @generated from field: tendermint.types.ConsensusParams consensus_param_updates = 2;
     */
    consensusParamUpdates?: ConsensusParams;
    /**
     * @generated from field: repeated tendermint.abci.Event events = 3;
     */
    events: Event[];
    constructor(data?: PartialMessage<ResponseEndBlock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseEndBlock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseEndBlock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseEndBlock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseEndBlock;
    static equals(a: ResponseEndBlock | PlainMessage<ResponseEndBlock> | undefined, b: ResponseEndBlock | PlainMessage<ResponseEndBlock> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseCommit
 */
export declare class ResponseCommit extends Message<ResponseCommit> {
    /**
     * reserve 1
     *
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    /**
     * @generated from field: int64 retain_height = 3;
     */
    retainHeight: bigint;
    constructor(data?: PartialMessage<ResponseCommit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseCommit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseCommit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseCommit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseCommit;
    static equals(a: ResponseCommit | PlainMessage<ResponseCommit> | undefined, b: ResponseCommit | PlainMessage<ResponseCommit> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseListSnapshots
 */
export declare class ResponseListSnapshots extends Message<ResponseListSnapshots> {
    /**
     * @generated from field: repeated tendermint.abci.Snapshot snapshots = 1;
     */
    snapshots: Snapshot[];
    constructor(data?: PartialMessage<ResponseListSnapshots>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseListSnapshots";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseListSnapshots;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseListSnapshots;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseListSnapshots;
    static equals(a: ResponseListSnapshots | PlainMessage<ResponseListSnapshots> | undefined, b: ResponseListSnapshots | PlainMessage<ResponseListSnapshots> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseOfferSnapshot
 */
export declare class ResponseOfferSnapshot extends Message<ResponseOfferSnapshot> {
    /**
     * @generated from field: tendermint.abci.ResponseOfferSnapshot.Result result = 1;
     */
    result: ResponseOfferSnapshot_Result;
    constructor(data?: PartialMessage<ResponseOfferSnapshot>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseOfferSnapshot";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseOfferSnapshot;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseOfferSnapshot;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseOfferSnapshot;
    static equals(a: ResponseOfferSnapshot | PlainMessage<ResponseOfferSnapshot> | undefined, b: ResponseOfferSnapshot | PlainMessage<ResponseOfferSnapshot> | undefined): boolean;
}
/**
 * @generated from enum tendermint.abci.ResponseOfferSnapshot.Result
 */
export declare enum ResponseOfferSnapshot_Result {
    /**
     * Unknown result, abort all snapshot restoration
     *
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Snapshot accepted, apply chunks
     *
     * @generated from enum value: ACCEPT = 1;
     */
    ACCEPT = 1,
    /**
     * Abort all snapshot restoration
     *
     * @generated from enum value: ABORT = 2;
     */
    ABORT = 2,
    /**
     * Reject this specific snapshot, try others
     *
     * @generated from enum value: REJECT = 3;
     */
    REJECT = 3,
    /**
     * Reject all snapshots of this format, try others
     *
     * @generated from enum value: REJECT_FORMAT = 4;
     */
    REJECT_FORMAT = 4,
    /**
     * Reject all snapshots from the sender(s), try others
     *
     * @generated from enum value: REJECT_SENDER = 5;
     */
    REJECT_SENDER = 5
}
/**
 * @generated from message tendermint.abci.ResponseLoadSnapshotChunk
 */
export declare class ResponseLoadSnapshotChunk extends Message<ResponseLoadSnapshotChunk> {
    /**
     * @generated from field: bytes chunk = 1;
     */
    chunk: Uint8Array;
    constructor(data?: PartialMessage<ResponseLoadSnapshotChunk>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseLoadSnapshotChunk";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseLoadSnapshotChunk;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseLoadSnapshotChunk;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseLoadSnapshotChunk;
    static equals(a: ResponseLoadSnapshotChunk | PlainMessage<ResponseLoadSnapshotChunk> | undefined, b: ResponseLoadSnapshotChunk | PlainMessage<ResponseLoadSnapshotChunk> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseApplySnapshotChunk
 */
export declare class ResponseApplySnapshotChunk extends Message<ResponseApplySnapshotChunk> {
    /**
     * @generated from field: tendermint.abci.ResponseApplySnapshotChunk.Result result = 1;
     */
    result: ResponseApplySnapshotChunk_Result;
    /**
     * Chunks to refetch and reapply
     *
     * @generated from field: repeated uint32 refetch_chunks = 2;
     */
    refetchChunks: number[];
    /**
     * Chunk senders to reject and ban
     *
     * @generated from field: repeated string reject_senders = 3;
     */
    rejectSenders: string[];
    constructor(data?: PartialMessage<ResponseApplySnapshotChunk>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseApplySnapshotChunk";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseApplySnapshotChunk;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseApplySnapshotChunk;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseApplySnapshotChunk;
    static equals(a: ResponseApplySnapshotChunk | PlainMessage<ResponseApplySnapshotChunk> | undefined, b: ResponseApplySnapshotChunk | PlainMessage<ResponseApplySnapshotChunk> | undefined): boolean;
}
/**
 * @generated from enum tendermint.abci.ResponseApplySnapshotChunk.Result
 */
export declare enum ResponseApplySnapshotChunk_Result {
    /**
     * Unknown result, abort all snapshot restoration
     *
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Chunk successfully accepted
     *
     * @generated from enum value: ACCEPT = 1;
     */
    ACCEPT = 1,
    /**
     * Abort all snapshot restoration
     *
     * @generated from enum value: ABORT = 2;
     */
    ABORT = 2,
    /**
     * Retry chunk (combine with refetch and reject)
     *
     * @generated from enum value: RETRY = 3;
     */
    RETRY = 3,
    /**
     * Retry snapshot (combine with refetch and reject)
     *
     * @generated from enum value: RETRY_SNAPSHOT = 4;
     */
    RETRY_SNAPSHOT = 4,
    /**
     * Reject this snapshot, try others
     *
     * @generated from enum value: REJECT_SNAPSHOT = 5;
     */
    REJECT_SNAPSHOT = 5
}
/**
 * @generated from message tendermint.abci.ResponsePrepareProposal
 */
export declare class ResponsePrepareProposal extends Message<ResponsePrepareProposal> {
    /**
     * @generated from field: repeated bytes txs = 1;
     */
    txs: Uint8Array[];
    constructor(data?: PartialMessage<ResponsePrepareProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponsePrepareProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponsePrepareProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponsePrepareProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponsePrepareProposal;
    static equals(a: ResponsePrepareProposal | PlainMessage<ResponsePrepareProposal> | undefined, b: ResponsePrepareProposal | PlainMessage<ResponsePrepareProposal> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ResponseProcessProposal
 */
export declare class ResponseProcessProposal extends Message<ResponseProcessProposal> {
    /**
     * @generated from field: tendermint.abci.ResponseProcessProposal.ProposalStatus status = 1;
     */
    status: ResponseProcessProposal_ProposalStatus;
    constructor(data?: PartialMessage<ResponseProcessProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ResponseProcessProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseProcessProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseProcessProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseProcessProposal;
    static equals(a: ResponseProcessProposal | PlainMessage<ResponseProcessProposal> | undefined, b: ResponseProcessProposal | PlainMessage<ResponseProcessProposal> | undefined): boolean;
}
/**
 * @generated from enum tendermint.abci.ResponseProcessProposal.ProposalStatus
 */
export declare enum ResponseProcessProposal_ProposalStatus {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: ACCEPT = 1;
     */
    ACCEPT = 1,
    /**
     * @generated from enum value: REJECT = 2;
     */
    REJECT = 2
}
/**
 * @generated from message tendermint.abci.CommitInfo
 */
export declare class CommitInfo extends Message<CommitInfo> {
    /**
     * @generated from field: int32 round = 1;
     */
    round: number;
    /**
     * @generated from field: repeated tendermint.abci.VoteInfo votes = 2;
     */
    votes: VoteInfo[];
    constructor(data?: PartialMessage<CommitInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.CommitInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitInfo;
    static equals(a: CommitInfo | PlainMessage<CommitInfo> | undefined, b: CommitInfo | PlainMessage<CommitInfo> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ExtendedCommitInfo
 */
export declare class ExtendedCommitInfo extends Message<ExtendedCommitInfo> {
    /**
     * The round at which the block proposer decided in the previous height.
     *
     * @generated from field: int32 round = 1;
     */
    round: number;
    /**
     * List of validators' addresses in the last validator set with their voting
     * information, including vote extensions.
     *
     * @generated from field: repeated tendermint.abci.ExtendedVoteInfo votes = 2;
     */
    votes: ExtendedVoteInfo[];
    constructor(data?: PartialMessage<ExtendedCommitInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ExtendedCommitInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtendedCommitInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtendedCommitInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtendedCommitInfo;
    static equals(a: ExtendedCommitInfo | PlainMessage<ExtendedCommitInfo> | undefined, b: ExtendedCommitInfo | PlainMessage<ExtendedCommitInfo> | undefined): boolean;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 *
 * @generated from message tendermint.abci.Event
 */
export declare class Event extends Message<Event> {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: repeated tendermint.abci.EventAttribute attributes = 2;
     */
    attributes: EventAttribute[];
    constructor(data?: PartialMessage<Event>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.Event";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event;
    static equals(a: Event | PlainMessage<Event> | undefined, b: Event | PlainMessage<Event> | undefined): boolean;
}
/**
 * EventAttribute is a single key-value pair, associated with an event.
 *
 * @generated from message tendermint.abci.EventAttribute
 */
export declare class EventAttribute extends Message<EventAttribute> {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
    /**
     * nondeterministic
     *
     * @generated from field: bool index = 3;
     */
    index: boolean;
    constructor(data?: PartialMessage<EventAttribute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.EventAttribute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventAttribute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventAttribute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventAttribute;
    static equals(a: EventAttribute | PlainMessage<EventAttribute> | undefined, b: EventAttribute | PlainMessage<EventAttribute> | undefined): boolean;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 *
 * @generated from message tendermint.abci.TxResult
 */
export declare class TxResult extends Message<TxResult> {
    /**
     * @generated from field: int64 height = 1;
     */
    height: bigint;
    /**
     * @generated from field: uint32 index = 2;
     */
    index: number;
    /**
     * @generated from field: bytes tx = 3;
     */
    tx: Uint8Array;
    /**
     * @generated from field: tendermint.abci.ResponseDeliverTx result = 4;
     */
    result?: ResponseDeliverTx;
    constructor(data?: PartialMessage<TxResult>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.TxResult";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxResult;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxResult;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxResult;
    static equals(a: TxResult | PlainMessage<TxResult> | undefined, b: TxResult | PlainMessage<TxResult> | undefined): boolean;
}
/**
 * Validator
 *
 * @generated from message tendermint.abci.Validator
 */
export declare class Validator extends Message<Validator> {
    /**
     * The first 20 bytes of SHA256(public key)
     *
     * @generated from field: bytes address = 1;
     */
    address: Uint8Array;
    /**
     * PubKey pub_key = 2 [(gogoproto.nullable)=false];
     *
     * The voting power
     *
     * @generated from field: int64 power = 3;
     */
    power: bigint;
    constructor(data?: PartialMessage<Validator>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.Validator";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Validator;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Validator;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Validator;
    static equals(a: Validator | PlainMessage<Validator> | undefined, b: Validator | PlainMessage<Validator> | undefined): boolean;
}
/**
 * ValidatorUpdate
 *
 * @generated from message tendermint.abci.ValidatorUpdate
 */
export declare class ValidatorUpdate extends Message<ValidatorUpdate> {
    /**
     * @generated from field: tendermint.crypto.PublicKey pub_key = 1;
     */
    pubKey?: PublicKey;
    /**
     * @generated from field: int64 power = 2;
     */
    power: bigint;
    constructor(data?: PartialMessage<ValidatorUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ValidatorUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorUpdate;
    static equals(a: ValidatorUpdate | PlainMessage<ValidatorUpdate> | undefined, b: ValidatorUpdate | PlainMessage<ValidatorUpdate> | undefined): boolean;
}
/**
 * VoteInfo
 *
 * @generated from message tendermint.abci.VoteInfo
 */
export declare class VoteInfo extends Message<VoteInfo> {
    /**
     * @generated from field: tendermint.abci.Validator validator = 1;
     */
    validator?: Validator;
    /**
     * @generated from field: bool signed_last_block = 2;
     */
    signedLastBlock: boolean;
    constructor(data?: PartialMessage<VoteInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.VoteInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VoteInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VoteInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VoteInfo;
    static equals(a: VoteInfo | PlainMessage<VoteInfo> | undefined, b: VoteInfo | PlainMessage<VoteInfo> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.ExtendedVoteInfo
 */
export declare class ExtendedVoteInfo extends Message<ExtendedVoteInfo> {
    /**
     * @generated from field: tendermint.abci.Validator validator = 1;
     */
    validator?: Validator;
    /**
     * @generated from field: bool signed_last_block = 2;
     */
    signedLastBlock: boolean;
    /**
     * Reserved for future use
     *
     * @generated from field: bytes vote_extension = 3;
     */
    voteExtension: Uint8Array;
    constructor(data?: PartialMessage<ExtendedVoteInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.ExtendedVoteInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtendedVoteInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtendedVoteInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtendedVoteInfo;
    static equals(a: ExtendedVoteInfo | PlainMessage<ExtendedVoteInfo> | undefined, b: ExtendedVoteInfo | PlainMessage<ExtendedVoteInfo> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.Misbehavior
 */
export declare class Misbehavior extends Message<Misbehavior> {
    /**
     * @generated from field: tendermint.abci.MisbehaviorType type = 1;
     */
    type: MisbehaviorType;
    /**
     * The offending validator
     *
     * @generated from field: tendermint.abci.Validator validator = 2;
     */
    validator?: Validator;
    /**
     * The height when the offense occurred
     *
     * @generated from field: int64 height = 3;
     */
    height: bigint;
    /**
     * The corresponding time where the offense occurred
     *
     * @generated from field: google.protobuf.Timestamp time = 4;
     */
    time?: Timestamp;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     *
     * @generated from field: int64 total_voting_power = 5;
     */
    totalVotingPower: bigint;
    constructor(data?: PartialMessage<Misbehavior>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.Misbehavior";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Misbehavior;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Misbehavior;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Misbehavior;
    static equals(a: Misbehavior | PlainMessage<Misbehavior> | undefined, b: Misbehavior | PlainMessage<Misbehavior> | undefined): boolean;
}
/**
 * @generated from message tendermint.abci.Snapshot
 */
export declare class Snapshot extends Message<Snapshot> {
    /**
     * The height at which the snapshot was taken
     *
     * @generated from field: uint64 height = 1;
     */
    height: bigint;
    /**
     * The application-specific snapshot format
     *
     * @generated from field: uint32 format = 2;
     */
    format: number;
    /**
     * Number of chunks in the snapshot
     *
     * @generated from field: uint32 chunks = 3;
     */
    chunks: number;
    /**
     * Arbitrary snapshot hash, equal only if identical
     *
     * @generated from field: bytes hash = 4;
     */
    hash: Uint8Array;
    /**
     * Arbitrary application metadata
     *
     * @generated from field: bytes metadata = 5;
     */
    metadata: Uint8Array;
    constructor(data?: PartialMessage<Snapshot>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.abci.Snapshot";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Snapshot;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Snapshot;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Snapshot;
    static equals(a: Snapshot | PlainMessage<Snapshot> | undefined, b: Snapshot | PlainMessage<Snapshot> | undefined): boolean;
}
//# sourceMappingURL=types_pb.d.ts.map