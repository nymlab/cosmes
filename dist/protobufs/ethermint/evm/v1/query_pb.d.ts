import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Log, Params, TraceConfig } from "./evm_pb.js";
import { MsgEthereumTx } from "./tx_pb.js";
/**
 * QueryAccountRequest is the request type for the Query/Account RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryAccountRequest
 */
export declare class QueryAccountRequest extends Message<QueryAccountRequest> {
    /**
     * address is the ethereum hex address to query the account for.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryAccountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryAccountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountRequest;
    static equals(a: QueryAccountRequest | PlainMessage<QueryAccountRequest> | undefined, b: QueryAccountRequest | PlainMessage<QueryAccountRequest> | undefined): boolean;
}
/**
 * QueryAccountResponse is the response type for the Query/Account RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryAccountResponse
 */
export declare class QueryAccountResponse extends Message<QueryAccountResponse> {
    /**
     * balance is the balance of the EVM denomination.
     *
     * @generated from field: string balance = 1;
     */
    balance: string;
    /**
     * code_hash is the hex-formatted code bytes from the EOA.
     *
     * @generated from field: string code_hash = 2;
     */
    codeHash: string;
    /**
     * nonce is the account's sequence number.
     *
     * @generated from field: uint64 nonce = 3;
     */
    nonce: bigint;
    constructor(data?: PartialMessage<QueryAccountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryAccountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAccountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAccountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAccountResponse;
    static equals(a: QueryAccountResponse | PlainMessage<QueryAccountResponse> | undefined, b: QueryAccountResponse | PlainMessage<QueryAccountResponse> | undefined): boolean;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 *
 * @generated from message ethermint.evm.v1.QueryCosmosAccountRequest
 */
export declare class QueryCosmosAccountRequest extends Message<QueryCosmosAccountRequest> {
    /**
     * address is the ethereum hex address to query the account for.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryCosmosAccountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryCosmosAccountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCosmosAccountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCosmosAccountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCosmosAccountRequest;
    static equals(a: QueryCosmosAccountRequest | PlainMessage<QueryCosmosAccountRequest> | undefined, b: QueryCosmosAccountRequest | PlainMessage<QueryCosmosAccountRequest> | undefined): boolean;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryCosmosAccountResponse
 */
export declare class QueryCosmosAccountResponse extends Message<QueryCosmosAccountResponse> {
    /**
     * cosmos_address is the cosmos address of the account.
     *
     * @generated from field: string cosmos_address = 1;
     */
    cosmosAddress: string;
    /**
     * sequence is the account's sequence number.
     *
     * @generated from field: uint64 sequence = 2;
     */
    sequence: bigint;
    /**
     * account_number is the account number
     *
     * @generated from field: uint64 account_number = 3;
     */
    accountNumber: bigint;
    constructor(data?: PartialMessage<QueryCosmosAccountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryCosmosAccountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCosmosAccountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCosmosAccountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCosmosAccountResponse;
    static equals(a: QueryCosmosAccountResponse | PlainMessage<QueryCosmosAccountResponse> | undefined, b: QueryCosmosAccountResponse | PlainMessage<QueryCosmosAccountResponse> | undefined): boolean;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryValidatorAccountRequest
 */
export declare class QueryValidatorAccountRequest extends Message<QueryValidatorAccountRequest> {
    /**
     * cons_address is the validator cons address to query the account for.
     *
     * @generated from field: string cons_address = 1;
     */
    consAddress: string;
    constructor(data?: PartialMessage<QueryValidatorAccountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryValidatorAccountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorAccountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorAccountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorAccountRequest;
    static equals(a: QueryValidatorAccountRequest | PlainMessage<QueryValidatorAccountRequest> | undefined, b: QueryValidatorAccountRequest | PlainMessage<QueryValidatorAccountRequest> | undefined): boolean;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryValidatorAccountResponse
 */
export declare class QueryValidatorAccountResponse extends Message<QueryValidatorAccountResponse> {
    /**
     * account_address is the cosmos address of the account in bech32 format.
     *
     * @generated from field: string account_address = 1;
     */
    accountAddress: string;
    /**
     * sequence is the account's sequence number.
     *
     * @generated from field: uint64 sequence = 2;
     */
    sequence: bigint;
    /**
     * account_number is the account number
     *
     * @generated from field: uint64 account_number = 3;
     */
    accountNumber: bigint;
    constructor(data?: PartialMessage<QueryValidatorAccountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryValidatorAccountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorAccountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorAccountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorAccountResponse;
    static equals(a: QueryValidatorAccountResponse | PlainMessage<QueryValidatorAccountResponse> | undefined, b: QueryValidatorAccountResponse | PlainMessage<QueryValidatorAccountResponse> | undefined): boolean;
}
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryBalanceRequest
 */
export declare class QueryBalanceRequest extends Message<QueryBalanceRequest> {
    /**
     * address is the ethereum hex address to query the balance for.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryBalanceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryBalanceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBalanceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBalanceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBalanceRequest;
    static equals(a: QueryBalanceRequest | PlainMessage<QueryBalanceRequest> | undefined, b: QueryBalanceRequest | PlainMessage<QueryBalanceRequest> | undefined): boolean;
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryBalanceResponse
 */
export declare class QueryBalanceResponse extends Message<QueryBalanceResponse> {
    /**
     * balance is the balance of the EVM denomination.
     *
     * @generated from field: string balance = 1;
     */
    balance: string;
    constructor(data?: PartialMessage<QueryBalanceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryBalanceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBalanceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBalanceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBalanceResponse;
    static equals(a: QueryBalanceResponse | PlainMessage<QueryBalanceResponse> | undefined, b: QueryBalanceResponse | PlainMessage<QueryBalanceResponse> | undefined): boolean;
}
/**
 * QueryStorageRequest is the request type for the Query/Storage RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryStorageRequest
 */
export declare class QueryStorageRequest extends Message<QueryStorageRequest> {
    /**
     * address is the ethereum hex address to query the storage state for.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * key defines the key of the storage state
     *
     * @generated from field: string key = 2;
     */
    key: string;
    constructor(data?: PartialMessage<QueryStorageRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryStorageRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryStorageRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryStorageRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryStorageRequest;
    static equals(a: QueryStorageRequest | PlainMessage<QueryStorageRequest> | undefined, b: QueryStorageRequest | PlainMessage<QueryStorageRequest> | undefined): boolean;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 *
 * @generated from message ethermint.evm.v1.QueryStorageResponse
 */
export declare class QueryStorageResponse extends Message<QueryStorageResponse> {
    /**
     * value defines the storage state value hash associated with the given key.
     *
     * @generated from field: string value = 1;
     */
    value: string;
    constructor(data?: PartialMessage<QueryStorageResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryStorageResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryStorageResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryStorageResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryStorageResponse;
    static equals(a: QueryStorageResponse | PlainMessage<QueryStorageResponse> | undefined, b: QueryStorageResponse | PlainMessage<QueryStorageResponse> | undefined): boolean;
}
/**
 * QueryCodeRequest is the request type for the Query/Code RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryCodeRequest
 */
export declare class QueryCodeRequest extends Message<QueryCodeRequest> {
    /**
     * address is the ethereum hex address to query the code for.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryCodeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryCodeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCodeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCodeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCodeRequest;
    static equals(a: QueryCodeRequest | PlainMessage<QueryCodeRequest> | undefined, b: QueryCodeRequest | PlainMessage<QueryCodeRequest> | undefined): boolean;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 *
 * @generated from message ethermint.evm.v1.QueryCodeResponse
 */
export declare class QueryCodeResponse extends Message<QueryCodeResponse> {
    /**
     * code represents the code bytes from an ethereum address.
     *
     * @generated from field: bytes code = 1;
     */
    code: Uint8Array;
    constructor(data?: PartialMessage<QueryCodeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryCodeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCodeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCodeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCodeResponse;
    static equals(a: QueryCodeResponse | PlainMessage<QueryCodeResponse> | undefined, b: QueryCodeResponse | PlainMessage<QueryCodeResponse> | undefined): boolean;
}
/**
 * QueryTxLogsRequest is the request type for the Query/TxLogs RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryTxLogsRequest
 */
export declare class QueryTxLogsRequest extends Message<QueryTxLogsRequest> {
    /**
     * hash is the ethereum transaction hex hash to query the logs for.
     *
     * @generated from field: string hash = 1;
     */
    hash: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryTxLogsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryTxLogsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTxLogsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTxLogsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTxLogsRequest;
    static equals(a: QueryTxLogsRequest | PlainMessage<QueryTxLogsRequest> | undefined, b: QueryTxLogsRequest | PlainMessage<QueryTxLogsRequest> | undefined): boolean;
}
/**
 * QueryTxLogsResponse is the response type for the Query/TxLogs RPC method.
 *
 * @generated from message ethermint.evm.v1.QueryTxLogsResponse
 */
export declare class QueryTxLogsResponse extends Message<QueryTxLogsResponse> {
    /**
     * logs represents the ethereum logs generated from the given transaction.
     *
     * @generated from field: repeated ethermint.evm.v1.Log logs = 1;
     */
    logs: Log[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryTxLogsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryTxLogsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTxLogsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTxLogsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTxLogsResponse;
    static equals(a: QueryTxLogsResponse | PlainMessage<QueryTxLogsResponse> | undefined, b: QueryTxLogsResponse | PlainMessage<QueryTxLogsResponse> | undefined): boolean;
}
/**
 * QueryParamsRequest defines the request type for querying x/evm parameters.
 *
 * @generated from message ethermint.evm.v1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse defines the response type for querying x/evm parameters.
 *
 * @generated from message ethermint.evm.v1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params define the evm module parameters.
     *
     * @generated from field: ethermint.evm.v1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * EthCallRequest defines EthCall request
 *
 * @generated from message ethermint.evm.v1.EthCallRequest
 */
export declare class EthCallRequest extends Message<EthCallRequest> {
    /**
     * args uses the same json format as the json rpc api.
     *
     * @generated from field: bytes args = 1;
     */
    args: Uint8Array;
    /**
     * gas_cap defines the default gas cap to be used
     *
     * @generated from field: uint64 gas_cap = 2;
     */
    gasCap: bigint;
    /**
     * proposer_address of the requested block in hex format
     *
     * @generated from field: bytes proposer_address = 3;
     */
    proposerAddress: Uint8Array;
    /**
     * chain_id is the eip155 chain id parsed from the requested block header
     *
     * @generated from field: int64 chain_id = 4;
     */
    chainId: bigint;
    constructor(data?: PartialMessage<EthCallRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.EthCallRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EthCallRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EthCallRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EthCallRequest;
    static equals(a: EthCallRequest | PlainMessage<EthCallRequest> | undefined, b: EthCallRequest | PlainMessage<EthCallRequest> | undefined): boolean;
}
/**
 * EstimateGasResponse defines EstimateGas response
 *
 * @generated from message ethermint.evm.v1.EstimateGasResponse
 */
export declare class EstimateGasResponse extends Message<EstimateGasResponse> {
    /**
     * gas returns the estimated gas
     *
     * @generated from field: uint64 gas = 1;
     */
    gas: bigint;
    constructor(data?: PartialMessage<EstimateGasResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.EstimateGasResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateGasResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateGasResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateGasResponse;
    static equals(a: EstimateGasResponse | PlainMessage<EstimateGasResponse> | undefined, b: EstimateGasResponse | PlainMessage<EstimateGasResponse> | undefined): boolean;
}
/**
 * QueryTraceTxRequest defines TraceTx request
 *
 * @generated from message ethermint.evm.v1.QueryTraceTxRequest
 */
export declare class QueryTraceTxRequest extends Message<QueryTraceTxRequest> {
    /**
     * msg is the MsgEthereumTx for the requested transaction
     *
     * @generated from field: ethermint.evm.v1.MsgEthereumTx msg = 1;
     */
    msg?: MsgEthereumTx;
    /**
     * trace_config holds extra parameters to trace functions.
     *
     * @generated from field: ethermint.evm.v1.TraceConfig trace_config = 3;
     */
    traceConfig?: TraceConfig;
    /**
     * predecessors is an array of transactions included in the same block
     * need to be replayed first to get correct context for tracing.
     *
     * @generated from field: repeated ethermint.evm.v1.MsgEthereumTx predecessors = 4;
     */
    predecessors: MsgEthereumTx[];
    /**
     * block_number of requested transaction
     *
     * @generated from field: int64 block_number = 5;
     */
    blockNumber: bigint;
    /**
     * block_hash of requested transaction
     *
     * @generated from field: string block_hash = 6;
     */
    blockHash: string;
    /**
     * block_time of requested transaction
     *
     * @generated from field: google.protobuf.Timestamp block_time = 7;
     */
    blockTime?: Timestamp;
    /**
     * proposer_address is the proposer of the requested block
     *
     * @generated from field: bytes proposer_address = 8;
     */
    proposerAddress: Uint8Array;
    /**
     * chain_id is the the eip155 chain id parsed from the requested block header
     *
     * @generated from field: int64 chain_id = 9;
     */
    chainId: bigint;
    constructor(data?: PartialMessage<QueryTraceTxRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryTraceTxRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTraceTxRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTraceTxRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTraceTxRequest;
    static equals(a: QueryTraceTxRequest | PlainMessage<QueryTraceTxRequest> | undefined, b: QueryTraceTxRequest | PlainMessage<QueryTraceTxRequest> | undefined): boolean;
}
/**
 * QueryTraceTxResponse defines TraceTx response
 *
 * @generated from message ethermint.evm.v1.QueryTraceTxResponse
 */
export declare class QueryTraceTxResponse extends Message<QueryTraceTxResponse> {
    /**
     * data is the response serialized in bytes
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<QueryTraceTxResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryTraceTxResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTraceTxResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTraceTxResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTraceTxResponse;
    static equals(a: QueryTraceTxResponse | PlainMessage<QueryTraceTxResponse> | undefined, b: QueryTraceTxResponse | PlainMessage<QueryTraceTxResponse> | undefined): boolean;
}
/**
 * QueryTraceBlockRequest defines TraceTx request
 *
 * @generated from message ethermint.evm.v1.QueryTraceBlockRequest
 */
export declare class QueryTraceBlockRequest extends Message<QueryTraceBlockRequest> {
    /**
     * txs is an array of messages in the block
     *
     * @generated from field: repeated ethermint.evm.v1.MsgEthereumTx txs = 1;
     */
    txs: MsgEthereumTx[];
    /**
     * trace_config holds extra parameters to trace functions.
     *
     * @generated from field: ethermint.evm.v1.TraceConfig trace_config = 3;
     */
    traceConfig?: TraceConfig;
    /**
     * block_number of the traced block
     *
     * @generated from field: int64 block_number = 5;
     */
    blockNumber: bigint;
    /**
     * block_hash (hex) of the traced block
     *
     * @generated from field: string block_hash = 6;
     */
    blockHash: string;
    /**
     * block_time of the traced block
     *
     * @generated from field: google.protobuf.Timestamp block_time = 7;
     */
    blockTime?: Timestamp;
    /**
     * proposer_address is the address of the requested block
     *
     * @generated from field: bytes proposer_address = 8;
     */
    proposerAddress: Uint8Array;
    /**
     * chain_id is the eip155 chain id parsed from the requested block header
     *
     * @generated from field: int64 chain_id = 9;
     */
    chainId: bigint;
    constructor(data?: PartialMessage<QueryTraceBlockRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryTraceBlockRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTraceBlockRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTraceBlockRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTraceBlockRequest;
    static equals(a: QueryTraceBlockRequest | PlainMessage<QueryTraceBlockRequest> | undefined, b: QueryTraceBlockRequest | PlainMessage<QueryTraceBlockRequest> | undefined): boolean;
}
/**
 * QueryTraceBlockResponse defines TraceBlock response
 *
 * @generated from message ethermint.evm.v1.QueryTraceBlockResponse
 */
export declare class QueryTraceBlockResponse extends Message<QueryTraceBlockResponse> {
    /**
     * data is the response serialized in bytes
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<QueryTraceBlockResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryTraceBlockResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTraceBlockResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTraceBlockResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTraceBlockResponse;
    static equals(a: QueryTraceBlockResponse | PlainMessage<QueryTraceBlockResponse> | undefined, b: QueryTraceBlockResponse | PlainMessage<QueryTraceBlockResponse> | undefined): boolean;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 *
 * @generated from message ethermint.evm.v1.QueryBaseFeeRequest
 */
export declare class QueryBaseFeeRequest extends Message<QueryBaseFeeRequest> {
    constructor(data?: PartialMessage<QueryBaseFeeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryBaseFeeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBaseFeeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBaseFeeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBaseFeeRequest;
    static equals(a: QueryBaseFeeRequest | PlainMessage<QueryBaseFeeRequest> | undefined, b: QueryBaseFeeRequest | PlainMessage<QueryBaseFeeRequest> | undefined): boolean;
}
/**
 * QueryBaseFeeResponse returns the EIP1559 base fee.
 *
 * @generated from message ethermint.evm.v1.QueryBaseFeeResponse
 */
export declare class QueryBaseFeeResponse extends Message<QueryBaseFeeResponse> {
    /**
     * base_fee is the EIP1559 base fee
     *
     * @generated from field: string base_fee = 1;
     */
    baseFee: string;
    constructor(data?: PartialMessage<QueryBaseFeeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.QueryBaseFeeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryBaseFeeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryBaseFeeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryBaseFeeResponse;
    static equals(a: QueryBaseFeeResponse | PlainMessage<QueryBaseFeeResponse> | undefined, b: QueryBaseFeeResponse | PlainMessage<QueryBaseFeeResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map