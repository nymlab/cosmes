// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file injective/tokenfactory/v1beta1/tx.proto (package injective.tokenfactory.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
const TYPE_NAME = "injective.tokenfactory.v1beta1.Msg";
/**
 * @generated from rpc injective.tokenfactory.v1beta1.Msg.CreateDenom
 */
export const MsgCreateDenomService = {
    typeName: TYPE_NAME,
    method: "CreateDenom",
    Request: MsgCreateDenom,
    Response: MsgCreateDenomResponse,
};
/**
 * @generated from rpc injective.tokenfactory.v1beta1.Msg.Mint
 */
export const MsgMintService = {
    typeName: TYPE_NAME,
    method: "Mint",
    Request: MsgMint,
    Response: MsgMintResponse,
};
/**
 * @generated from rpc injective.tokenfactory.v1beta1.Msg.Burn
 */
export const MsgBurnService = {
    typeName: TYPE_NAME,
    method: "Burn",
    Request: MsgBurn,
    Response: MsgBurnResponse,
};
/**
 * @generated from rpc injective.tokenfactory.v1beta1.Msg.ChangeAdmin
 */
export const MsgChangeAdminService = {
    typeName: TYPE_NAME,
    method: "ChangeAdmin",
    Request: MsgChangeAdmin,
    Response: MsgChangeAdminResponse,
};
/**
 * @generated from rpc injective.tokenfactory.v1beta1.Msg.SetDenomMetadata
 */
export const MsgSetDenomMetadataService = {
    typeName: TYPE_NAME,
    method: "SetDenomMetadata",
    Request: MsgSetDenomMetadata,
    Response: MsgSetDenomMetadataResponse,
};
/**
 * @generated from rpc injective.tokenfactory.v1beta1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
    typeName: TYPE_NAME,
    method: "UpdateParams",
    Request: MsgUpdateParams,
    Response: MsgUpdateParamsResponse,
};
//# sourceMappingURL=tx_cosmes.js.map