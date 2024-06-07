import { MsgEthereumTx, MsgEthereumTxResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
/**
 * EthereumTx defines a method submitting Ethereum transactions.
 *
 * @generated from rpc ethermint.evm.v1.Msg.EthereumTx
 */
export declare const MsgEthereumTxService: {
    readonly typeName: "ethermint.evm.v1.Msg";
    readonly method: "EthereumTx";
    readonly Request: typeof MsgEthereumTx;
    readonly Response: typeof MsgEthereumTxResponse;
};
/**
 * UpdateParams defined a governance operation for updating the x/evm module parameters.
 * The authority is hard-coded to the Cosmos SDK x/gov module account
 *
 * @generated from rpc ethermint.evm.v1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "ethermint.evm.v1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map