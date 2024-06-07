import { MsgTransfer, MsgTransferResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
/**
 * Transfer defines a rpc handler method for MsgTransfer.
 *
 * @generated from rpc ibc.applications.transfer.v1.Msg.Transfer
 */
export declare const MsgTransferService: {
    readonly typeName: "ibc.applications.transfer.v1.Msg";
    readonly method: "Transfer";
    readonly Request: typeof MsgTransfer;
    readonly Response: typeof MsgTransferResponse;
};
/**
 * UpdateParams defines a rpc handler for MsgUpdateParams.
 *
 * @generated from rpc ibc.applications.transfer.v1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "ibc.applications.transfer.v1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map