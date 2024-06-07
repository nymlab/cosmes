import { MsgAcceptPayeeship, MsgAcceptPayeeshipResponse, MsgCreateFeed, MsgCreateFeedResponse, MsgFundFeedRewardPool, MsgFundFeedRewardPoolResponse, MsgSetPayees, MsgSetPayeesResponse, MsgTransferPayeeship, MsgTransferPayeeshipResponse, MsgTransmit, MsgTransmitResponse, MsgUpdateFeed, MsgUpdateFeedResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgWithdrawFeedRewardPool, MsgWithdrawFeedRewardPoolResponse } from "./tx_pb.js";
/**
 * CreateFeed defines a method for creating feed by module admin
 *
 * @generated from rpc injective.ocr.v1beta1.Msg.CreateFeed
 */
export declare const MsgCreateFeedService: {
    readonly typeName: "injective.ocr.v1beta1.Msg";
    readonly method: "CreateFeed";
    readonly Request: typeof MsgCreateFeed;
    readonly Response: typeof MsgCreateFeedResponse;
};
/**
 * CreateFeed defines a method for creating feed by feed admin or feed billing
 * admin
 *
 * @generated from rpc injective.ocr.v1beta1.Msg.UpdateFeed
 */
export declare const MsgUpdateFeedService: {
    readonly typeName: "injective.ocr.v1beta1.Msg";
    readonly method: "UpdateFeed";
    readonly Request: typeof MsgUpdateFeed;
    readonly Response: typeof MsgUpdateFeedResponse;
};
/**
 * Transmit defines a method for transmitting the feed info by transmitter
 *
 * @generated from rpc injective.ocr.v1beta1.Msg.Transmit
 */
export declare const MsgTransmitService: {
    readonly typeName: "injective.ocr.v1beta1.Msg";
    readonly method: "Transmit";
    readonly Request: typeof MsgTransmit;
    readonly Response: typeof MsgTransmitResponse;
};
/**
 * FundFeedRewardPool defines a method to put funds into feed reward pool
 *
 * @generated from rpc injective.ocr.v1beta1.Msg.FundFeedRewardPool
 */
export declare const MsgFundFeedRewardPoolService: {
    readonly typeName: "injective.ocr.v1beta1.Msg";
    readonly method: "FundFeedRewardPool";
    readonly Request: typeof MsgFundFeedRewardPool;
    readonly Response: typeof MsgFundFeedRewardPoolResponse;
};
/**
 * WithdrawFeedRewardPool defines a method to witdhraw feed reward by feed
 * admin or billing admin
 *
 * @generated from rpc injective.ocr.v1beta1.Msg.WithdrawFeedRewardPool
 */
export declare const MsgWithdrawFeedRewardPoolService: {
    readonly typeName: "injective.ocr.v1beta1.Msg";
    readonly method: "WithdrawFeedRewardPool";
    readonly Request: typeof MsgWithdrawFeedRewardPool;
    readonly Response: typeof MsgWithdrawFeedRewardPoolResponse;
};
/**
 * SetPayees defines a method to set payees for transmitters (batch action)
 *
 * @generated from rpc injective.ocr.v1beta1.Msg.SetPayees
 */
export declare const MsgSetPayeesService: {
    readonly typeName: "injective.ocr.v1beta1.Msg";
    readonly method: "SetPayees";
    readonly Request: typeof MsgSetPayees;
    readonly Response: typeof MsgSetPayeesResponse;
};
/**
 * TransferPayeeship defines a method for a payee to transfer reward receive
 * ownership
 *
 * @generated from rpc injective.ocr.v1beta1.Msg.TransferPayeeship
 */
export declare const MsgTransferPayeeshipService: {
    readonly typeName: "injective.ocr.v1beta1.Msg";
    readonly method: "TransferPayeeship";
    readonly Request: typeof MsgTransferPayeeship;
    readonly Response: typeof MsgTransferPayeeshipResponse;
};
/**
 * AcceptPayeeship defines a method for a new payee to accept reward receive
 * ownership
 *
 * @generated from rpc injective.ocr.v1beta1.Msg.AcceptPayeeship
 */
export declare const MsgAcceptPayeeshipService: {
    readonly typeName: "injective.ocr.v1beta1.Msg";
    readonly method: "AcceptPayeeship";
    readonly Request: typeof MsgAcceptPayeeship;
    readonly Response: typeof MsgAcceptPayeeshipResponse;
};
/**
 * @generated from rpc injective.ocr.v1beta1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "injective.ocr.v1beta1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map