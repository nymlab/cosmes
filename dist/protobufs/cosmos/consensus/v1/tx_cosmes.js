// Since: cosmos-sdk 0.47
// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/consensus/v1/tx.proto (package cosmos.consensus.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
const TYPE_NAME = "cosmos.consensus.v1.Msg";
/**
 * UpdateParams defines a governance operation for updating the x/consensus_param module parameters.
 * The authority is defined in the keeper.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.consensus.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
    typeName: TYPE_NAME,
    method: "UpdateParams",
    Request: MsgUpdateParams,
    Response: MsgUpdateParamsResponse,
};
//# sourceMappingURL=tx_cosmes.js.map