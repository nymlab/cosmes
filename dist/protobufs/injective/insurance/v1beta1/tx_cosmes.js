// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file injective/insurance/v1beta1/tx.proto (package injective.insurance.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgCreateInsuranceFund, MsgCreateInsuranceFundResponse, MsgRequestRedemption, MsgRequestRedemptionResponse, MsgUnderwrite, MsgUnderwriteResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
const TYPE_NAME = "injective.insurance.v1beta1.Msg";
/**
 * CreateInsuranceFund defines a method for creating an insurance fund
 *
 * @generated from rpc injective.insurance.v1beta1.Msg.CreateInsuranceFund
 */
export const MsgCreateInsuranceFundService = {
    typeName: TYPE_NAME,
    method: "CreateInsuranceFund",
    Request: MsgCreateInsuranceFund,
    Response: MsgCreateInsuranceFundResponse,
};
/**
 * Underwrite defines a method for depositing tokens to underwrite an
 * insurance fund
 *
 * @generated from rpc injective.insurance.v1beta1.Msg.Underwrite
 */
export const MsgUnderwriteService = {
    typeName: TYPE_NAME,
    method: "Underwrite",
    Request: MsgUnderwrite,
    Response: MsgUnderwriteResponse,
};
/**
 * RequestRedemption defines a method for requesting a redemption of the
 * sender's insurance fund tokens
 *
 * @generated from rpc injective.insurance.v1beta1.Msg.RequestRedemption
 */
export const MsgRequestRedemptionService = {
    typeName: TYPE_NAME,
    method: "RequestRedemption",
    Request: MsgRequestRedemption,
    Response: MsgRequestRedemptionResponse,
};
/**
 * @generated from rpc injective.insurance.v1beta1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
    typeName: TYPE_NAME,
    method: "UpdateParams",
    Request: MsgUpdateParams,
    Response: MsgUpdateParamsResponse,
};
//# sourceMappingURL=tx_cosmes.js.map