import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Event } from "../../../../tendermint/abci/types_pb.js";
/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 *
 * @generated from message cosmos.base.abci.v1beta1.TxResponse
 */
export declare class TxResponse extends Message<TxResponse> {
    /**
     * The block height
     *
     * @generated from field: int64 height = 1;
     */
    height: bigint;
    /**
     * The transaction hash.
     *
     * @generated from field: string txhash = 2;
     */
    txhash: string;
    /**
     * Namespace for the Code
     *
     * @generated from field: string codespace = 3;
     */
    codespace: string;
    /**
     * Response code.
     *
     * @generated from field: uint32 code = 4;
     */
    code: number;
    /**
     * Result bytes, if any.
     *
     * @generated from field: string data = 5;
     */
    data: string;
    /**
     * The output of the application's logger (raw string). May be
     * non-deterministic.
     *
     * @generated from field: string raw_log = 6;
     */
    rawLog: string;
    /**
     * The output of the application's logger (typed). May be non-deterministic.
     *
     * @generated from field: repeated cosmos.base.abci.v1beta1.ABCIMessageLog logs = 7;
     */
    logs: ABCIMessageLog[];
    /**
     * Additional information. May be non-deterministic.
     *
     * @generated from field: string info = 8;
     */
    info: string;
    /**
     * Amount of gas requested for transaction.
     *
     * @generated from field: int64 gas_wanted = 9;
     */
    gasWanted: bigint;
    /**
     * Amount of gas consumed by transaction.
     *
     * @generated from field: int64 gas_used = 10;
     */
    gasUsed: bigint;
    /**
     * The request transaction bytes.
     *
     * @generated from field: google.protobuf.Any tx = 11;
     */
    tx?: Any;
    /**
     * Time of the previous block. For heights > 1, it's the weighted median of
     * the timestamps of the valid votes in the block.LastCommit. For height == 1,
     * it's genesis time.
     *
     * @generated from field: string timestamp = 12;
     */
    timestamp: string;
    /**
     * Events defines all the events emitted by processing a transaction. Note,
     * these events include those emitted by processing all the messages and those
     * emitted from the ante. Whereas Logs contains the events, with
     * additional metadata, emitted only by processing the messages.
     *
     * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
     *
     * @generated from field: repeated tendermint.abci.Event events = 13;
     */
    events: Event[];
    constructor(data?: PartialMessage<TxResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.abci.v1beta1.TxResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxResponse;
    static equals(a: TxResponse | PlainMessage<TxResponse> | undefined, b: TxResponse | PlainMessage<TxResponse> | undefined): boolean;
}
/**
 * ABCIMessageLog defines a structure containing an indexed tx ABCI message log.
 *
 * @generated from message cosmos.base.abci.v1beta1.ABCIMessageLog
 */
export declare class ABCIMessageLog extends Message<ABCIMessageLog> {
    /**
     * @generated from field: uint32 msg_index = 1;
     */
    msgIndex: number;
    /**
     * @generated from field: string log = 2;
     */
    log: string;
    /**
     * Events contains a slice of Event objects that were emitted during some
     * execution.
     *
     * @generated from field: repeated cosmos.base.abci.v1beta1.StringEvent events = 3;
     */
    events: StringEvent[];
    constructor(data?: PartialMessage<ABCIMessageLog>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.abci.v1beta1.ABCIMessageLog";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ABCIMessageLog;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ABCIMessageLog;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ABCIMessageLog;
    static equals(a: ABCIMessageLog | PlainMessage<ABCIMessageLog> | undefined, b: ABCIMessageLog | PlainMessage<ABCIMessageLog> | undefined): boolean;
}
/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 *
 * @generated from message cosmos.base.abci.v1beta1.StringEvent
 */
export declare class StringEvent extends Message<StringEvent> {
    /**
     * @generated from field: string type = 1;
     */
    type: string;
    /**
     * @generated from field: repeated cosmos.base.abci.v1beta1.Attribute attributes = 2;
     */
    attributes: Attribute[];
    constructor(data?: PartialMessage<StringEvent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.abci.v1beta1.StringEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StringEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StringEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StringEvent;
    static equals(a: StringEvent | PlainMessage<StringEvent> | undefined, b: StringEvent | PlainMessage<StringEvent> | undefined): boolean;
}
/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 *
 * @generated from message cosmos.base.abci.v1beta1.Attribute
 */
export declare class Attribute extends Message<Attribute> {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
    constructor(data?: PartialMessage<Attribute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.abci.v1beta1.Attribute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Attribute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Attribute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Attribute;
    static equals(a: Attribute | PlainMessage<Attribute> | undefined, b: Attribute | PlainMessage<Attribute> | undefined): boolean;
}
/**
 * GasInfo defines tx execution gas context.
 *
 * @generated from message cosmos.base.abci.v1beta1.GasInfo
 */
export declare class GasInfo extends Message<GasInfo> {
    /**
     * GasWanted is the maximum units of work we allow this tx to perform.
     *
     * @generated from field: uint64 gas_wanted = 1;
     */
    gasWanted: bigint;
    /**
     * GasUsed is the amount of gas actually consumed.
     *
     * @generated from field: uint64 gas_used = 2;
     */
    gasUsed: bigint;
    constructor(data?: PartialMessage<GasInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.abci.v1beta1.GasInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GasInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GasInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GasInfo;
    static equals(a: GasInfo | PlainMessage<GasInfo> | undefined, b: GasInfo | PlainMessage<GasInfo> | undefined): boolean;
}
/**
 * Result is the union of ResponseFormat and ResponseCheckTx.
 *
 * @generated from message cosmos.base.abci.v1beta1.Result
 */
export declare class Result extends Message<Result> {
    /**
     * Data is any data returned from message or handler execution. It MUST be
     * length prefixed in order to separate data from multiple message executions.
     * Deprecated. This field is still populated, but prefer msg_response instead
     * because it also contains the Msg response typeURL.
     *
     * @generated from field: bytes data = 1 [deprecated = true];
     * @deprecated
     */
    data: Uint8Array;
    /**
     * Log contains the log information from message or handler execution.
     *
     * @generated from field: string log = 2;
     */
    log: string;
    /**
     * Events contains a slice of Event objects that were emitted during message
     * or handler execution.
     *
     * @generated from field: repeated tendermint.abci.Event events = 3;
     */
    events: Event[];
    /**
     * msg_responses contains the Msg handler responses type packed in Anys.
     *
     * Since: cosmos-sdk 0.46
     *
     * @generated from field: repeated google.protobuf.Any msg_responses = 4;
     */
    msgResponses: Any[];
    constructor(data?: PartialMessage<Result>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.abci.v1beta1.Result";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Result;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Result;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Result;
    static equals(a: Result | PlainMessage<Result> | undefined, b: Result | PlainMessage<Result> | undefined): boolean;
}
/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 *
 * @generated from message cosmos.base.abci.v1beta1.SimulationResponse
 */
export declare class SimulationResponse extends Message<SimulationResponse> {
    /**
     * @generated from field: cosmos.base.abci.v1beta1.GasInfo gas_info = 1;
     */
    gasInfo?: GasInfo;
    /**
     * @generated from field: cosmos.base.abci.v1beta1.Result result = 2;
     */
    result?: Result;
    constructor(data?: PartialMessage<SimulationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.abci.v1beta1.SimulationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimulationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimulationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimulationResponse;
    static equals(a: SimulationResponse | PlainMessage<SimulationResponse> | undefined, b: SimulationResponse | PlainMessage<SimulationResponse> | undefined): boolean;
}
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 *
 * @generated from message cosmos.base.abci.v1beta1.MsgData
 * @deprecated
 */
export declare class MsgData extends Message<MsgData> {
    /**
     * @generated from field: string msg_type = 1;
     */
    msgType: string;
    /**
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<MsgData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.abci.v1beta1.MsgData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgData;
    static equals(a: MsgData | PlainMessage<MsgData> | undefined, b: MsgData | PlainMessage<MsgData> | undefined): boolean;
}
/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 *
 * @generated from message cosmos.base.abci.v1beta1.TxMsgData
 */
export declare class TxMsgData extends Message<TxMsgData> {
    /**
     * data field is deprecated and not populated.
     *
     * @generated from field: repeated cosmos.base.abci.v1beta1.MsgData data = 1 [deprecated = true];
     * @deprecated
     */
    data: MsgData[];
    /**
     * msg_responses contains the Msg handler responses packed into Anys.
     *
     * Since: cosmos-sdk 0.46
     *
     * @generated from field: repeated google.protobuf.Any msg_responses = 2;
     */
    msgResponses: Any[];
    constructor(data?: PartialMessage<TxMsgData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.abci.v1beta1.TxMsgData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxMsgData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxMsgData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxMsgData;
    static equals(a: TxMsgData | PlainMessage<TxMsgData> | undefined, b: TxMsgData | PlainMessage<TxMsgData> | undefined): boolean;
}
/**
 * SearchTxsResult defines a structure for querying txs pageable
 *
 * @generated from message cosmos.base.abci.v1beta1.SearchTxsResult
 */
export declare class SearchTxsResult extends Message<SearchTxsResult> {
    /**
     * Count of all txs
     *
     * @generated from field: uint64 total_count = 1;
     */
    totalCount: bigint;
    /**
     * Count of txs in current page
     *
     * @generated from field: uint64 count = 2;
     */
    count: bigint;
    /**
     * Index of current page, start from 1
     *
     * @generated from field: uint64 page_number = 3;
     */
    pageNumber: bigint;
    /**
     * Count of total pages
     *
     * @generated from field: uint64 page_total = 4;
     */
    pageTotal: bigint;
    /**
     * Max count txs per page
     *
     * @generated from field: uint64 limit = 5;
     */
    limit: bigint;
    /**
     * List of txs in current page
     *
     * @generated from field: repeated cosmos.base.abci.v1beta1.TxResponse txs = 6;
     */
    txs: TxResponse[];
    constructor(data?: PartialMessage<SearchTxsResult>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.abci.v1beta1.SearchTxsResult";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchTxsResult;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchTxsResult;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchTxsResult;
    static equals(a: SearchTxsResult | PlainMessage<SearchTxsResult> | undefined, b: SearchTxsResult | PlainMessage<SearchTxsResult> | undefined): boolean;
}
//# sourceMappingURL=abci_pb.d.ts.map