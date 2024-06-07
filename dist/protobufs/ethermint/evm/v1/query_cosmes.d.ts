import { EstimateGasResponse, EthCallRequest, QueryAccountRequest, QueryAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryCodeRequest, QueryCodeResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryStorageRequest, QueryStorageResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse } from "./query_pb.js";
import { MsgEthereumTxResponse } from "./tx_pb.js";
/**
 * Account queries an Ethereum account.
 *
 * @generated from rpc ethermint.evm.v1.Query.Account
 */
export declare const QueryAccountService: {
    readonly typeName: "ethermint.evm.v1.Query";
    readonly method: "Account";
    readonly Request: typeof QueryAccountRequest;
    readonly Response: typeof QueryAccountResponse;
};
/**
 * CosmosAccount queries an Ethereum account's Cosmos Address.
 *
 * @generated from rpc ethermint.evm.v1.Query.CosmosAccount
 */
export declare const QueryCosmosAccountService: {
    readonly typeName: "ethermint.evm.v1.Query";
    readonly method: "CosmosAccount";
    readonly Request: typeof QueryCosmosAccountRequest;
    readonly Response: typeof QueryCosmosAccountResponse;
};
/**
 * ValidatorAccount queries an Ethereum account's from a validator consensus
 * Address.
 *
 * @generated from rpc ethermint.evm.v1.Query.ValidatorAccount
 */
export declare const QueryValidatorAccountService: {
    readonly typeName: "ethermint.evm.v1.Query";
    readonly method: "ValidatorAccount";
    readonly Request: typeof QueryValidatorAccountRequest;
    readonly Response: typeof QueryValidatorAccountResponse;
};
/**
 * Balance queries the balance of a the EVM denomination for a single
 * EthAccount.
 *
 * @generated from rpc ethermint.evm.v1.Query.Balance
 */
export declare const QueryBalanceService: {
    readonly typeName: "ethermint.evm.v1.Query";
    readonly method: "Balance";
    readonly Request: typeof QueryBalanceRequest;
    readonly Response: typeof QueryBalanceResponse;
};
/**
 * Storage queries the balance of all coins for a single account.
 *
 * @generated from rpc ethermint.evm.v1.Query.Storage
 */
export declare const QueryStorageService: {
    readonly typeName: "ethermint.evm.v1.Query";
    readonly method: "Storage";
    readonly Request: typeof QueryStorageRequest;
    readonly Response: typeof QueryStorageResponse;
};
/**
 * Code queries the balance of all coins for a single account.
 *
 * @generated from rpc ethermint.evm.v1.Query.Code
 */
export declare const QueryCodeService: {
    readonly typeName: "ethermint.evm.v1.Query";
    readonly method: "Code";
    readonly Request: typeof QueryCodeRequest;
    readonly Response: typeof QueryCodeResponse;
};
/**
 * Params queries the parameters of x/evm module.
 *
 * @generated from rpc ethermint.evm.v1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "ethermint.evm.v1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * EthCall implements the `eth_call` rpc api
 *
 * @generated from rpc ethermint.evm.v1.Query.EthCall
 */
export declare const QueryEthCallService: {
    readonly typeName: "ethermint.evm.v1.Query";
    readonly method: "EthCall";
    readonly Request: typeof EthCallRequest;
    readonly Response: typeof MsgEthereumTxResponse;
};
/**
 * EstimateGas implements the `eth_estimateGas` rpc api
 *
 * @generated from rpc ethermint.evm.v1.Query.EstimateGas
 */
export declare const QueryEstimateGasService: {
    readonly typeName: "ethermint.evm.v1.Query";
    readonly method: "EstimateGas";
    readonly Request: typeof EthCallRequest;
    readonly Response: typeof EstimateGasResponse;
};
/**
 * TraceTx implements the `debug_traceTransaction` rpc api
 *
 * @generated from rpc ethermint.evm.v1.Query.TraceTx
 */
export declare const QueryTraceTxService: {
    readonly typeName: "ethermint.evm.v1.Query";
    readonly method: "TraceTx";
    readonly Request: typeof QueryTraceTxRequest;
    readonly Response: typeof QueryTraceTxResponse;
};
/**
 * TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api
 *
 * @generated from rpc ethermint.evm.v1.Query.TraceBlock
 */
export declare const QueryTraceBlockService: {
    readonly typeName: "ethermint.evm.v1.Query";
    readonly method: "TraceBlock";
    readonly Request: typeof QueryTraceBlockRequest;
    readonly Response: typeof QueryTraceBlockResponse;
};
/**
 * BaseFee queries the base fee of the parent block of the current block,
 * it's similar to feemarket module's method, but also checks london hardfork status.
 *
 * @generated from rpc ethermint.evm.v1.Query.BaseFee
 */
export declare const QueryBaseFeeService: {
    readonly typeName: "ethermint.evm.v1.Query";
    readonly method: "BaseFee";
    readonly Request: typeof QueryBaseFeeRequest;
    readonly Response: typeof QueryBaseFeeResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map