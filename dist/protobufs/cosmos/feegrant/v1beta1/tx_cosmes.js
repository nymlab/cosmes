// Since: cosmos-sdk 0.43
// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/feegrant/v1beta1/tx.proto (package cosmos.feegrant.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse } from "./tx_pb.js";
const TYPE_NAME = "cosmos.feegrant.v1beta1.Msg";
/**
 * GrantAllowance grants fee allowance to the grantee on the granter's
 * account with the provided expiration time.
 *
 * @generated from rpc cosmos.feegrant.v1beta1.Msg.GrantAllowance
 */
export const MsgGrantAllowanceService = {
    typeName: TYPE_NAME,
    method: "GrantAllowance",
    Request: MsgGrantAllowance,
    Response: MsgGrantAllowanceResponse,
};
/**
 * RevokeAllowance revokes any fee allowance of granter's account that
 * has been granted to the grantee.
 *
 * @generated from rpc cosmos.feegrant.v1beta1.Msg.RevokeAllowance
 */
export const MsgRevokeAllowanceService = {
    typeName: TYPE_NAME,
    method: "RevokeAllowance",
    Request: MsgRevokeAllowance,
    Response: MsgRevokeAllowanceResponse,
};
//# sourceMappingURL=tx_cosmes.js.map