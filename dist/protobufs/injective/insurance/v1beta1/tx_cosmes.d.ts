import { MsgCreateInsuranceFund, MsgCreateInsuranceFundResponse, MsgRequestRedemption, MsgRequestRedemptionResponse, MsgUnderwrite, MsgUnderwriteResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
/**
 * CreateInsuranceFund defines a method for creating an insurance fund
 *
 * @generated from rpc injective.insurance.v1beta1.Msg.CreateInsuranceFund
 */
export declare const MsgCreateInsuranceFundService: {
    readonly typeName: "injective.insurance.v1beta1.Msg";
    readonly method: "CreateInsuranceFund";
    readonly Request: typeof MsgCreateInsuranceFund;
    readonly Response: typeof MsgCreateInsuranceFundResponse;
};
/**
 * Underwrite defines a method for depositing tokens to underwrite an
 * insurance fund
 *
 * @generated from rpc injective.insurance.v1beta1.Msg.Underwrite
 */
export declare const MsgUnderwriteService: {
    readonly typeName: "injective.insurance.v1beta1.Msg";
    readonly method: "Underwrite";
    readonly Request: typeof MsgUnderwrite;
    readonly Response: typeof MsgUnderwriteResponse;
};
/**
 * RequestRedemption defines a method for requesting a redemption of the
 * sender's insurance fund tokens
 *
 * @generated from rpc injective.insurance.v1beta1.Msg.RequestRedemption
 */
export declare const MsgRequestRedemptionService: {
    readonly typeName: "injective.insurance.v1beta1.Msg";
    readonly method: "RequestRedemption";
    readonly Request: typeof MsgRequestRedemption;
    readonly Response: typeof MsgRequestRedemptionResponse;
};
/**
 * @generated from rpc injective.insurance.v1beta1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "injective.insurance.v1beta1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map