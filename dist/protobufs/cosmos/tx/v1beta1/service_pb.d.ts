import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { Tx } from "./tx_pb.js";
import { GasInfo, Result, TxResponse } from "../../base/abci/v1beta1/abci_pb.js";
import { BlockID } from "../../../tendermint/types/types_pb.js";
import { Block } from "../../../tendermint/types/block_pb.js";
/**
 * OrderBy defines the sorting order
 *
 * @generated from enum cosmos.tx.v1beta1.OrderBy
 */
export declare enum OrderBy {
    /**
     * ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case.
     *
     * @generated from enum value: ORDER_BY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * ORDER_BY_ASC defines ascending order
     *
     * @generated from enum value: ORDER_BY_ASC = 1;
     */
    ASC = 1,
    /**
     * ORDER_BY_DESC defines descending order
     *
     * @generated from enum value: ORDER_BY_DESC = 2;
     */
    DESC = 2
}
/**
 * BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method.
 *
 * @generated from enum cosmos.tx.v1beta1.BroadcastMode
 */
export declare enum BroadcastMode {
    /**
     * zero-value for mode ordering
     *
     * @generated from enum value: BROADCAST_MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * DEPRECATED: use BROADCAST_MODE_SYNC instead,
     * BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards.
     *
     * @generated from enum value: BROADCAST_MODE_BLOCK = 1 [deprecated = true];
     * @deprecated
     */
    BLOCK = 1,
    /**
     * BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     *
     * @generated from enum value: BROADCAST_MODE_SYNC = 2;
     */
    SYNC = 2,
    /**
     * BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     *
     * @generated from enum value: BROADCAST_MODE_ASYNC = 3;
     */
    ASYNC = 3
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.GetTxsEventRequest
 */
export declare class GetTxsEventRequest extends Message<GetTxsEventRequest> {
    /**
     * events is the list of transaction event type.
     *
     * @generated from field: repeated string events = 1;
     */
    events: string[];
    /**
     * pagination defines a pagination for the request.
     * Deprecated post v0.46.x: use page and limit instead.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2 [deprecated = true];
     * @deprecated
     */
    pagination?: PageRequest;
    /**
     * @generated from field: cosmos.tx.v1beta1.OrderBy order_by = 3;
     */
    orderBy: OrderBy;
    /**
     * page is the page number to query, starts at 1. If not provided, will default to first page.
     *
     * @generated from field: uint64 page = 4;
     */
    page: bigint;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     *
     * @generated from field: uint64 limit = 5;
     */
    limit: bigint;
    constructor(data?: PartialMessage<GetTxsEventRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.GetTxsEventRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTxsEventRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTxsEventRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTxsEventRequest;
    static equals(a: GetTxsEventRequest | PlainMessage<GetTxsEventRequest> | undefined, b: GetTxsEventRequest | PlainMessage<GetTxsEventRequest> | undefined): boolean;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.GetTxsEventResponse
 */
export declare class GetTxsEventResponse extends Message<GetTxsEventResponse> {
    /**
     * txs is the list of queried transactions.
     *
     * @generated from field: repeated cosmos.tx.v1beta1.Tx txs = 1;
     */
    txs: Tx[];
    /**
     * tx_responses is the list of queried TxResponses.
     *
     * @generated from field: repeated cosmos.base.abci.v1beta1.TxResponse tx_responses = 2;
     */
    txResponses: TxResponse[];
    /**
     * pagination defines a pagination for the response.
     * Deprecated post v0.46.x: use total instead.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 3 [deprecated = true];
     * @deprecated
     */
    pagination?: PageResponse;
    /**
     * total is total number of results available
     *
     * @generated from field: uint64 total = 4;
     */
    total: bigint;
    constructor(data?: PartialMessage<GetTxsEventResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.GetTxsEventResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTxsEventResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTxsEventResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTxsEventResponse;
    static equals(a: GetTxsEventResponse | PlainMessage<GetTxsEventResponse> | undefined, b: GetTxsEventResponse | PlainMessage<GetTxsEventResponse> | undefined): boolean;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.BroadcastTxRequest
 */
export declare class BroadcastTxRequest extends Message<BroadcastTxRequest> {
    /**
     * tx_bytes is the raw transaction.
     *
     * @generated from field: bytes tx_bytes = 1;
     */
    txBytes: Uint8Array;
    /**
     * @generated from field: cosmos.tx.v1beta1.BroadcastMode mode = 2;
     */
    mode: BroadcastMode;
    constructor(data?: PartialMessage<BroadcastTxRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.BroadcastTxRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BroadcastTxRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BroadcastTxRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BroadcastTxRequest;
    static equals(a: BroadcastTxRequest | PlainMessage<BroadcastTxRequest> | undefined, b: BroadcastTxRequest | PlainMessage<BroadcastTxRequest> | undefined): boolean;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 *
 * @generated from message cosmos.tx.v1beta1.BroadcastTxResponse
 */
export declare class BroadcastTxResponse extends Message<BroadcastTxResponse> {
    /**
     * tx_response is the queried TxResponses.
     *
     * @generated from field: cosmos.base.abci.v1beta1.TxResponse tx_response = 1;
     */
    txResponse?: TxResponse;
    constructor(data?: PartialMessage<BroadcastTxResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.BroadcastTxResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BroadcastTxResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BroadcastTxResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BroadcastTxResponse;
    static equals(a: BroadcastTxResponse | PlainMessage<BroadcastTxResponse> | undefined, b: BroadcastTxResponse | PlainMessage<BroadcastTxResponse> | undefined): boolean;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.SimulateRequest
 */
export declare class SimulateRequest extends Message<SimulateRequest> {
    /**
     * tx is the transaction to simulate.
     * Deprecated. Send raw tx bytes instead.
     *
     * @generated from field: cosmos.tx.v1beta1.Tx tx = 1 [deprecated = true];
     * @deprecated
     */
    tx?: Tx;
    /**
     * tx_bytes is the raw transaction.
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from field: bytes tx_bytes = 2;
     */
    txBytes: Uint8Array;
    constructor(data?: PartialMessage<SimulateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.SimulateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimulateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimulateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimulateRequest;
    static equals(a: SimulateRequest | PlainMessage<SimulateRequest> | undefined, b: SimulateRequest | PlainMessage<SimulateRequest> | undefined): boolean;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 *
 * @generated from message cosmos.tx.v1beta1.SimulateResponse
 */
export declare class SimulateResponse extends Message<SimulateResponse> {
    /**
     * gas_info is the information about gas used in the simulation.
     *
     * @generated from field: cosmos.base.abci.v1beta1.GasInfo gas_info = 1;
     */
    gasInfo?: GasInfo;
    /**
     * result is the result of the simulation.
     *
     * @generated from field: cosmos.base.abci.v1beta1.Result result = 2;
     */
    result?: Result;
    constructor(data?: PartialMessage<SimulateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.SimulateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimulateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimulateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimulateResponse;
    static equals(a: SimulateResponse | PlainMessage<SimulateResponse> | undefined, b: SimulateResponse | PlainMessage<SimulateResponse> | undefined): boolean;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.GetTxRequest
 */
export declare class GetTxRequest extends Message<GetTxRequest> {
    /**
     * hash is the tx hash to query, encoded as a hex string.
     *
     * @generated from field: string hash = 1;
     */
    hash: string;
    constructor(data?: PartialMessage<GetTxRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.GetTxRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTxRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTxRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTxRequest;
    static equals(a: GetTxRequest | PlainMessage<GetTxRequest> | undefined, b: GetTxRequest | PlainMessage<GetTxRequest> | undefined): boolean;
}
/**
 * GetTxResponse is the response type for the Service.GetTx method.
 *
 * @generated from message cosmos.tx.v1beta1.GetTxResponse
 */
export declare class GetTxResponse extends Message<GetTxResponse> {
    /**
     * tx is the queried transaction.
     *
     * @generated from field: cosmos.tx.v1beta1.Tx tx = 1;
     */
    tx?: Tx;
    /**
     * tx_response is the queried TxResponses.
     *
     * @generated from field: cosmos.base.abci.v1beta1.TxResponse tx_response = 2;
     */
    txResponse?: TxResponse;
    constructor(data?: PartialMessage<GetTxResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.GetTxResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTxResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTxResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTxResponse;
    static equals(a: GetTxResponse | PlainMessage<GetTxResponse> | undefined, b: GetTxResponse | PlainMessage<GetTxResponse> | undefined): boolean;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 *
 * @generated from message cosmos.tx.v1beta1.GetBlockWithTxsRequest
 */
export declare class GetBlockWithTxsRequest extends Message<GetBlockWithTxsRequest> {
    /**
     * height is the height of the block to query.
     *
     * @generated from field: int64 height = 1;
     */
    height: bigint;
    /**
     * pagination defines a pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<GetBlockWithTxsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.GetBlockWithTxsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBlockWithTxsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBlockWithTxsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBlockWithTxsRequest;
    static equals(a: GetBlockWithTxsRequest | PlainMessage<GetBlockWithTxsRequest> | undefined, b: GetBlockWithTxsRequest | PlainMessage<GetBlockWithTxsRequest> | undefined): boolean;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 *
 * Since: cosmos-sdk 0.45.2
 *
 * @generated from message cosmos.tx.v1beta1.GetBlockWithTxsResponse
 */
export declare class GetBlockWithTxsResponse extends Message<GetBlockWithTxsResponse> {
    /**
     * txs are the transactions in the block.
     *
     * @generated from field: repeated cosmos.tx.v1beta1.Tx txs = 1;
     */
    txs: Tx[];
    /**
     * @generated from field: tendermint.types.BlockID block_id = 2;
     */
    blockId?: BlockID;
    /**
     * @generated from field: tendermint.types.Block block = 3;
     */
    block?: Block;
    /**
     * pagination defines a pagination for the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 4;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<GetBlockWithTxsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.GetBlockWithTxsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBlockWithTxsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBlockWithTxsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBlockWithTxsResponse;
    static equals(a: GetBlockWithTxsResponse | PlainMessage<GetBlockWithTxsResponse> | undefined, b: GetBlockWithTxsResponse | PlainMessage<GetBlockWithTxsResponse> | undefined): boolean;
}
/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxDecodeRequest
 */
export declare class TxDecodeRequest extends Message<TxDecodeRequest> {
    /**
     * tx_bytes is the raw transaction.
     *
     * @generated from field: bytes tx_bytes = 1;
     */
    txBytes: Uint8Array;
    constructor(data?: PartialMessage<TxDecodeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.TxDecodeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxDecodeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxDecodeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxDecodeRequest;
    static equals(a: TxDecodeRequest | PlainMessage<TxDecodeRequest> | undefined, b: TxDecodeRequest | PlainMessage<TxDecodeRequest> | undefined): boolean;
}
/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxDecodeResponse
 */
export declare class TxDecodeResponse extends Message<TxDecodeResponse> {
    /**
     * tx is the decoded transaction.
     *
     * @generated from field: cosmos.tx.v1beta1.Tx tx = 1;
     */
    tx?: Tx;
    constructor(data?: PartialMessage<TxDecodeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.TxDecodeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxDecodeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxDecodeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxDecodeResponse;
    static equals(a: TxDecodeResponse | PlainMessage<TxDecodeResponse> | undefined, b: TxDecodeResponse | PlainMessage<TxDecodeResponse> | undefined): boolean;
}
/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxEncodeRequest
 */
export declare class TxEncodeRequest extends Message<TxEncodeRequest> {
    /**
     * tx is the transaction to encode.
     *
     * @generated from field: cosmos.tx.v1beta1.Tx tx = 1;
     */
    tx?: Tx;
    constructor(data?: PartialMessage<TxEncodeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.TxEncodeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxEncodeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxEncodeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxEncodeRequest;
    static equals(a: TxEncodeRequest | PlainMessage<TxEncodeRequest> | undefined, b: TxEncodeRequest | PlainMessage<TxEncodeRequest> | undefined): boolean;
}
/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxEncodeResponse
 */
export declare class TxEncodeResponse extends Message<TxEncodeResponse> {
    /**
     * tx_bytes is the encoded transaction bytes.
     *
     * @generated from field: bytes tx_bytes = 1;
     */
    txBytes: Uint8Array;
    constructor(data?: PartialMessage<TxEncodeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.TxEncodeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxEncodeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxEncodeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxEncodeResponse;
    static equals(a: TxEncodeResponse | PlainMessage<TxEncodeResponse> | undefined, b: TxEncodeResponse | PlainMessage<TxEncodeResponse> | undefined): boolean;
}
/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxEncodeAminoRequest
 */
export declare class TxEncodeAminoRequest extends Message<TxEncodeAminoRequest> {
    /**
     * @generated from field: string amino_json = 1;
     */
    aminoJson: string;
    constructor(data?: PartialMessage<TxEncodeAminoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.TxEncodeAminoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxEncodeAminoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxEncodeAminoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxEncodeAminoRequest;
    static equals(a: TxEncodeAminoRequest | PlainMessage<TxEncodeAminoRequest> | undefined, b: TxEncodeAminoRequest | PlainMessage<TxEncodeAminoRequest> | undefined): boolean;
}
/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxEncodeAminoResponse
 */
export declare class TxEncodeAminoResponse extends Message<TxEncodeAminoResponse> {
    /**
     * @generated from field: bytes amino_binary = 1;
     */
    aminoBinary: Uint8Array;
    constructor(data?: PartialMessage<TxEncodeAminoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.TxEncodeAminoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxEncodeAminoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxEncodeAminoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxEncodeAminoResponse;
    static equals(a: TxEncodeAminoResponse | PlainMessage<TxEncodeAminoResponse> | undefined, b: TxEncodeAminoResponse | PlainMessage<TxEncodeAminoResponse> | undefined): boolean;
}
/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxDecodeAminoRequest
 */
export declare class TxDecodeAminoRequest extends Message<TxDecodeAminoRequest> {
    /**
     * @generated from field: bytes amino_binary = 1;
     */
    aminoBinary: Uint8Array;
    constructor(data?: PartialMessage<TxDecodeAminoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.TxDecodeAminoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxDecodeAminoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxDecodeAminoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxDecodeAminoRequest;
    static equals(a: TxDecodeAminoRequest | PlainMessage<TxDecodeAminoRequest> | undefined, b: TxDecodeAminoRequest | PlainMessage<TxDecodeAminoRequest> | undefined): boolean;
}
/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxDecodeAminoResponse
 */
export declare class TxDecodeAminoResponse extends Message<TxDecodeAminoResponse> {
    /**
     * @generated from field: string amino_json = 1;
     */
    aminoJson: string;
    constructor(data?: PartialMessage<TxDecodeAminoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.tx.v1beta1.TxDecodeAminoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxDecodeAminoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxDecodeAminoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxDecodeAminoResponse;
    static equals(a: TxDecodeAminoResponse | PlainMessage<TxDecodeAminoResponse> | undefined, b: TxDecodeAminoResponse | PlainMessage<TxDecodeAminoResponse> | undefined): boolean;
}
//# sourceMappingURL=service_pb.d.ts.map