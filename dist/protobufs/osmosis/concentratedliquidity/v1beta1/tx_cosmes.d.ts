import { MsgAddToPosition, MsgAddToPositionResponse, MsgCollectIncentives, MsgCollectIncentivesResponse, MsgCollectSpreadRewards, MsgCollectSpreadRewardsResponse, MsgCreatePosition, MsgCreatePositionResponse, MsgTransferPositions, MsgTransferPositionsResponse, MsgWithdrawPosition, MsgWithdrawPositionResponse } from "./tx_pb.js";
/**
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Msg.CreatePosition
 */
export declare const MsgCreatePositionService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Msg";
    readonly method: "CreatePosition";
    readonly Request: typeof MsgCreatePosition;
    readonly Response: typeof MsgCreatePositionResponse;
};
/**
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Msg.WithdrawPosition
 */
export declare const MsgWithdrawPositionService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Msg";
    readonly method: "WithdrawPosition";
    readonly Request: typeof MsgWithdrawPosition;
    readonly Response: typeof MsgWithdrawPositionResponse;
};
/**
 * AddToPosition attempts to add amount0 and amount1 to a position
 * with the given position id.
 * To maintain backwards-compatibility with future implementations of
 * charging, this function deletes the old position and creates a new one with
 * the resulting amount after addition.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Msg.AddToPosition
 */
export declare const MsgAddToPositionService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Msg";
    readonly method: "AddToPosition";
    readonly Request: typeof MsgAddToPosition;
    readonly Response: typeof MsgAddToPositionResponse;
};
/**
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Msg.CollectSpreadRewards
 */
export declare const MsgCollectSpreadRewardsService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Msg";
    readonly method: "CollectSpreadRewards";
    readonly Request: typeof MsgCollectSpreadRewards;
    readonly Response: typeof MsgCollectSpreadRewardsResponse;
};
/**
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Msg.CollectIncentives
 */
export declare const MsgCollectIncentivesService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Msg";
    readonly method: "CollectIncentives";
    readonly Request: typeof MsgCollectIncentives;
    readonly Response: typeof MsgCollectIncentivesResponse;
};
/**
 * TransferPositions transfers ownership of a set of one or more positions
 * from a sender to a recipient.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Msg.TransferPositions
 */
export declare const MsgTransferPositionsService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Msg";
    readonly method: "TransferPositions";
    readonly Request: typeof MsgTransferPositions;
    readonly Response: typeof MsgTransferPositionsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map