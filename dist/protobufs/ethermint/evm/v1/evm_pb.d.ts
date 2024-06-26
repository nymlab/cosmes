import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Params defines the EVM module parameters
 *
 * @generated from message ethermint.evm.v1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * evm_denom represents the token denomination used to run the EVM state
     * transitions.
     *
     * @generated from field: string evm_denom = 1;
     */
    evmDenom: string;
    /**
     * enable_create toggles state transitions that use the vm.Create function
     *
     * @generated from field: bool enable_create = 2;
     */
    enableCreate: boolean;
    /**
     * enable_call toggles state transitions that use the vm.Call function
     *
     * @generated from field: bool enable_call = 3;
     */
    enableCall: boolean;
    /**
     * extra_eips defines the additional EIPs for the vm.Config
     *
     * @generated from field: repeated int64 extra_eips = 4;
     */
    extraEips: bigint[];
    /**
     * chain_config defines the EVM chain configuration parameters
     *
     * @generated from field: ethermint.evm.v1.ChainConfig chain_config = 5;
     */
    chainConfig?: ChainConfig;
    /**
     * allow_unprotected_txs defines if replay-protected (i.e non EIP155
     * signed) transactions can be executed on the state machine.
     *
     * @generated from field: bool allow_unprotected_txs = 6;
     */
    allowUnprotectedTxs: boolean;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 *
 * @generated from message ethermint.evm.v1.ChainConfig
 */
export declare class ChainConfig extends Message<ChainConfig> {
    /**
     * homestead_block switch (nil no fork, 0 = already homestead)
     *
     * @generated from field: string homestead_block = 1;
     */
    homesteadBlock: string;
    /**
     * dao_fork_block corresponds to TheDAO hard-fork switch block (nil no fork)
     *
     * @generated from field: string dao_fork_block = 2;
     */
    daoForkBlock: string;
    /**
     * dao_fork_support defines whether the nodes supports or opposes the DAO hard-fork
     *
     * @generated from field: bool dao_fork_support = 3;
     */
    daoForkSupport: boolean;
    /**
     * eip150_block: EIP150 implements the Gas price changes
     * (https://github.com/ethereum/EIPs/issues/150) EIP150 HF block (nil no fork)
     *
     * @generated from field: string eip150_block = 4;
     */
    eip150Block: string;
    /**
     * eip150_hash: EIP150 HF hash (needed for header only clients as only gas pricing changed)
     *
     * @generated from field: string eip150_hash = 5;
     */
    eip150Hash: string;
    /**
     * eip155_block: EIP155Block HF block
     *
     * @generated from field: string eip155_block = 6;
     */
    eip155Block: string;
    /**
     * eip158_block: EIP158 HF block
     *
     * @generated from field: string eip158_block = 7;
     */
    eip158Block: string;
    /**
     * byzantium_block: Byzantium switch block (nil no fork, 0 = already on byzantium)
     *
     * @generated from field: string byzantium_block = 8;
     */
    byzantiumBlock: string;
    /**
     * constantinople_block: Constantinople switch block (nil no fork, 0 = already activated)
     *
     * @generated from field: string constantinople_block = 9;
     */
    constantinopleBlock: string;
    /**
     * petersburg_block: Petersburg switch block (nil same as Constantinople)
     *
     * @generated from field: string petersburg_block = 10;
     */
    petersburgBlock: string;
    /**
     * istanbul_block: Istanbul switch block (nil no fork, 0 = already on istanbul)
     *
     * @generated from field: string istanbul_block = 11;
     */
    istanbulBlock: string;
    /**
     * muir_glacier_block: Eip-2384 (bomb delay) switch block (nil no fork, 0 = already activated)
     *
     * @generated from field: string muir_glacier_block = 12;
     */
    muirGlacierBlock: string;
    /**
     * berlin_block: Berlin switch block (nil = no fork, 0 = already on berlin)
     *
     * @generated from field: string berlin_block = 13;
     */
    berlinBlock: string;
    /**
     * london_block: London switch block (nil = no fork, 0 = already on london)
     *
     * @generated from field: string london_block = 17;
     */
    londonBlock: string;
    /**
     * arrow_glacier_block: Eip-4345 (bomb delay) switch block (nil = no fork, 0 = already activated)
     *
     * @generated from field: string arrow_glacier_block = 18;
     */
    arrowGlacierBlock: string;
    /**
     * gray_glacier_block: EIP-5133 (bomb delay) switch block (nil = no fork, 0 = already activated)
     *
     * @generated from field: string gray_glacier_block = 20;
     */
    grayGlacierBlock: string;
    /**
     * merge_netsplit_block: Virtual fork after The Merge to use as a network splitter
     *
     * @generated from field: string merge_netsplit_block = 21;
     */
    mergeNetsplitBlock: string;
    /**
     * shanghai_block switch block (nil = no fork, 0 = already on shanghai)
     *
     * @generated from field: string shanghai_block = 22;
     */
    shanghaiBlock: string;
    /**
     * cancun_block switch block (nil = no fork, 0 = already on cancun)
     *
     * @generated from field: string cancun_block = 23;
     */
    cancunBlock: string;
    constructor(data?: PartialMessage<ChainConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.ChainConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainConfig;
    static equals(a: ChainConfig | PlainMessage<ChainConfig> | undefined, b: ChainConfig | PlainMessage<ChainConfig> | undefined): boolean;
}
/**
 * State represents a single Storage key value pair item.
 *
 * @generated from message ethermint.evm.v1.State
 */
export declare class State extends Message<State> {
    /**
     * key is the stored key
     *
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * value is the stored value for the given key
     *
     * @generated from field: string value = 2;
     */
    value: string;
    constructor(data?: PartialMessage<State>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.State";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): State;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): State;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): State;
    static equals(a: State | PlainMessage<State> | undefined, b: State | PlainMessage<State> | undefined): boolean;
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 *
 * @generated from message ethermint.evm.v1.TransactionLogs
 */
export declare class TransactionLogs extends Message<TransactionLogs> {
    /**
     * hash of the transaction
     *
     * @generated from field: string hash = 1;
     */
    hash: string;
    /**
     * logs is an array of Logs for the given transaction hash
     *
     * @generated from field: repeated ethermint.evm.v1.Log logs = 2;
     */
    logs: Log[];
    constructor(data?: PartialMessage<TransactionLogs>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.TransactionLogs";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionLogs;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionLogs;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionLogs;
    static equals(a: TransactionLogs | PlainMessage<TransactionLogs> | undefined, b: TransactionLogs | PlainMessage<TransactionLogs> | undefined): boolean;
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 *
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 *
 * @generated from message ethermint.evm.v1.Log
 */
export declare class Log extends Message<Log> {
    /**
     * address of the contract that generated the event
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * topics is a list of topics provided by the contract.
     *
     * @generated from field: repeated string topics = 2;
     */
    topics: string[];
    /**
     * data which is supplied by the contract, usually ABI-encoded
     *
     * @generated from field: bytes data = 3;
     */
    data: Uint8Array;
    /**
     * block_number of the block in which the transaction was included
     *
     * @generated from field: uint64 block_number = 4;
     */
    blockNumber: bigint;
    /**
     * tx_hash is the transaction hash
     *
     * @generated from field: string tx_hash = 5;
     */
    txHash: string;
    /**
     * tx_index of the transaction in the block
     *
     * @generated from field: uint64 tx_index = 6;
     */
    txIndex: bigint;
    /**
     * block_hash of the block in which the transaction was included
     *
     * @generated from field: string block_hash = 7;
     */
    blockHash: string;
    /**
     * index of the log in the block
     *
     * @generated from field: uint64 index = 8;
     */
    index: bigint;
    /**
     * removed is true if this log was reverted due to a chain
     * reorganisation. You must pay attention to this field if you receive logs
     * through a filter query.
     *
     * @generated from field: bool removed = 9;
     */
    removed: boolean;
    constructor(data?: PartialMessage<Log>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.Log";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Log;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Log;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Log;
    static equals(a: Log | PlainMessage<Log> | undefined, b: Log | PlainMessage<Log> | undefined): boolean;
}
/**
 * TxResult stores results of Tx execution.
 *
 * @generated from message ethermint.evm.v1.TxResult
 */
export declare class TxResult extends Message<TxResult> {
    /**
     * contract_address contains the ethereum address of the created contract (if
     * any). If the state transition is an evm.Call, the contract address will be
     * empty.
     *
     * @generated from field: string contract_address = 1;
     */
    contractAddress: string;
    /**
     * bloom represents the bloom filter bytes
     *
     * @generated from field: bytes bloom = 2;
     */
    bloom: Uint8Array;
    /**
     * tx_logs contains the transaction hash and the proto-compatible ethereum
     * logs.
     *
     * @generated from field: ethermint.evm.v1.TransactionLogs tx_logs = 3;
     */
    txLogs?: TransactionLogs;
    /**
     * ret defines the bytes from the execution.
     *
     * @generated from field: bytes ret = 4;
     */
    ret: Uint8Array;
    /**
     * reverted flag is set to true when the call has been reverted
     *
     * @generated from field: bool reverted = 5;
     */
    reverted: boolean;
    /**
     * gas_used notes the amount of gas consumed while execution
     *
     * @generated from field: uint64 gas_used = 6;
     */
    gasUsed: bigint;
    constructor(data?: PartialMessage<TxResult>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.TxResult";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxResult;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxResult;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxResult;
    static equals(a: TxResult | PlainMessage<TxResult> | undefined, b: TxResult | PlainMessage<TxResult> | undefined): boolean;
}
/**
 * AccessTuple is the element type of an access list.
 *
 * @generated from message ethermint.evm.v1.AccessTuple
 */
export declare class AccessTuple extends Message<AccessTuple> {
    /**
     * address is a hex formatted ethereum address
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * storage_keys are hex formatted hashes of the storage keys
     *
     * @generated from field: repeated string storage_keys = 2;
     */
    storageKeys: string[];
    constructor(data?: PartialMessage<AccessTuple>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.AccessTuple";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessTuple;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessTuple;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessTuple;
    static equals(a: AccessTuple | PlainMessage<AccessTuple> | undefined, b: AccessTuple | PlainMessage<AccessTuple> | undefined): boolean;
}
/**
 * TraceConfig holds extra parameters to trace functions.
 *
 * @generated from message ethermint.evm.v1.TraceConfig
 */
export declare class TraceConfig extends Message<TraceConfig> {
    /**
     * tracer is a custom javascript tracer
     *
     * @generated from field: string tracer = 1;
     */
    tracer: string;
    /**
     * timeout overrides the default timeout of 5 seconds for JavaScript-based tracing
     * calls
     *
     * @generated from field: string timeout = 2;
     */
    timeout: string;
    /**
     * reexec defines the number of blocks the tracer is willing to go back
     *
     * @generated from field: uint64 reexec = 3;
     */
    reexec: bigint;
    /**
     * disable_stack switches stack capture
     *
     * @generated from field: bool disable_stack = 5;
     */
    disableStack: boolean;
    /**
     * disable_storage switches storage capture
     *
     * @generated from field: bool disable_storage = 6;
     */
    disableStorage: boolean;
    /**
     * debug can be used to print output during capture end
     *
     * @generated from field: bool debug = 8;
     */
    debug: boolean;
    /**
     * limit defines the maximum length of output, but zero means unlimited
     *
     * @generated from field: int32 limit = 9;
     */
    limit: number;
    /**
     * overrides can be used to execute a trace using future fork rules
     *
     * @generated from field: ethermint.evm.v1.ChainConfig overrides = 10;
     */
    overrides?: ChainConfig;
    /**
     * enable_memory switches memory capture
     *
     * @generated from field: bool enable_memory = 11;
     */
    enableMemory: boolean;
    /**
     * enable_return_data switches the capture of return data
     *
     * @generated from field: bool enable_return_data = 12;
     */
    enableReturnData: boolean;
    /**
     * tracer_json_config configures the tracer using a JSON string
     *
     * @generated from field: string tracer_json_config = 13;
     */
    tracerJsonConfig: string;
    constructor(data?: PartialMessage<TraceConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ethermint.evm.v1.TraceConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TraceConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TraceConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TraceConfig;
    static equals(a: TraceConfig | PlainMessage<TraceConfig> | undefined, b: TraceConfig | PlainMessage<TraceConfig> | undefined): boolean;
}
//# sourceMappingURL=evm_pb.d.ts.map