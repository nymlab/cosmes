import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
/**
 * UpdateParams defined a governance operation for updating the x/feemarket module parameters.
 * The authority is hard-coded to the Cosmos SDK x/gov module account
 *
 * @generated from rpc ethermint.feemarket.v1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "ethermint.feemarket.v1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map