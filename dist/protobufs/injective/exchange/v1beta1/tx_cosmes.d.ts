import { MsgAdminUpdateBinaryOptionsMarket, MsgAdminUpdateBinaryOptionsMarketResponse, MsgBatchCancelBinaryOptionsOrders, MsgBatchCancelBinaryOptionsOrdersResponse, MsgBatchCancelDerivativeOrders, MsgBatchCancelDerivativeOrdersResponse, MsgBatchCancelSpotOrders, MsgBatchCancelSpotOrdersResponse, MsgBatchCreateDerivativeLimitOrders, MsgBatchCreateDerivativeLimitOrdersResponse, MsgBatchCreateSpotLimitOrders, MsgBatchCreateSpotLimitOrdersResponse, MsgBatchUpdateOrders, MsgBatchUpdateOrdersResponse, MsgCancelBinaryOptionsOrder, MsgCancelBinaryOptionsOrderResponse, MsgCancelDerivativeOrder, MsgCancelDerivativeOrderResponse, MsgCancelSpotOrder, MsgCancelSpotOrderResponse, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsLimitOrderResponse, MsgCreateBinaryOptionsMarketOrder, MsgCreateBinaryOptionsMarketOrderResponse, MsgCreateDerivativeLimitOrder, MsgCreateDerivativeLimitOrderResponse, MsgCreateDerivativeMarketOrder, MsgCreateDerivativeMarketOrderResponse, MsgCreateSpotLimitOrder, MsgCreateSpotLimitOrderResponse, MsgCreateSpotMarketOrder, MsgCreateSpotMarketOrderResponse, MsgDeposit, MsgDepositResponse, MsgEmergencySettleMarket, MsgEmergencySettleMarketResponse, MsgExternalTransfer, MsgExternalTransferResponse, MsgIncreasePositionMargin, MsgIncreasePositionMarginResponse, MsgInstantBinaryOptionsMarketLaunch, MsgInstantBinaryOptionsMarketLaunchResponse, MsgInstantExpiryFuturesMarketLaunch, MsgInstantExpiryFuturesMarketLaunchResponse, MsgInstantPerpetualMarketLaunch, MsgInstantPerpetualMarketLaunchResponse, MsgInstantSpotMarketLaunch, MsgInstantSpotMarketLaunchResponse, MsgLiquidatePosition, MsgLiquidatePositionResponse, MsgPrivilegedExecuteContract, MsgPrivilegedExecuteContractResponse, MsgReclaimLockedFunds, MsgReclaimLockedFundsResponse, MsgRewardsOptOut, MsgRewardsOptOutResponse, MsgSubaccountTransfer, MsgSubaccountTransferResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgWithdraw, MsgWithdrawResponse } from "./tx_pb.js";
/**
 * Deposit defines a method for transferring coins from the sender's bank
 * balance into the subaccount's exchange deposits
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.Deposit
 */
export declare const MsgDepositService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "Deposit";
    readonly Request: typeof MsgDeposit;
    readonly Response: typeof MsgDepositResponse;
};
/**
 * Withdraw defines a method for withdrawing coins from a subaccount's
 * deposits to the user's bank balance
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.Withdraw
 */
export declare const MsgWithdrawService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "Withdraw";
    readonly Request: typeof MsgWithdraw;
    readonly Response: typeof MsgWithdrawResponse;
};
/**
 * InstantSpotMarketLaunch defines method for creating a spot market by paying
 * listing fee without governance
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.InstantSpotMarketLaunch
 */
export declare const MsgInstantSpotMarketLaunchService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "InstantSpotMarketLaunch";
    readonly Request: typeof MsgInstantSpotMarketLaunch;
    readonly Response: typeof MsgInstantSpotMarketLaunchResponse;
};
/**
 * InstantPerpetualMarketLaunch defines a method for creating a new perpetual
 * futures market by paying listing fee without governance
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.InstantPerpetualMarketLaunch
 */
export declare const MsgInstantPerpetualMarketLaunchService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "InstantPerpetualMarketLaunch";
    readonly Request: typeof MsgInstantPerpetualMarketLaunch;
    readonly Response: typeof MsgInstantPerpetualMarketLaunchResponse;
};
/**
 * InstantExpiryFuturesMarketLaunch defines a method for creating a new expiry
 * futures market by paying listing fee without governance
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.InstantExpiryFuturesMarketLaunch
 */
export declare const MsgInstantExpiryFuturesMarketLaunchService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "InstantExpiryFuturesMarketLaunch";
    readonly Request: typeof MsgInstantExpiryFuturesMarketLaunch;
    readonly Response: typeof MsgInstantExpiryFuturesMarketLaunchResponse;
};
/**
 * CreateSpotLimitOrder defines a method for creating a new spot limit order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CreateSpotLimitOrder
 */
export declare const MsgCreateSpotLimitOrderService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "CreateSpotLimitOrder";
    readonly Request: typeof MsgCreateSpotLimitOrder;
    readonly Response: typeof MsgCreateSpotLimitOrderResponse;
};
/**
 * BatchCreateSpotLimitOrder defines a method for creating a new batch of spot
 * limit orders.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.BatchCreateSpotLimitOrders
 */
export declare const MsgBatchCreateSpotLimitOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "BatchCreateSpotLimitOrders";
    readonly Request: typeof MsgBatchCreateSpotLimitOrders;
    readonly Response: typeof MsgBatchCreateSpotLimitOrdersResponse;
};
/**
 * CreateSpotMarketOrder defines a method for creating a new spot market
 * order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CreateSpotMarketOrder
 */
export declare const MsgCreateSpotMarketOrderService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "CreateSpotMarketOrder";
    readonly Request: typeof MsgCreateSpotMarketOrder;
    readonly Response: typeof MsgCreateSpotMarketOrderResponse;
};
/**
 * MsgCancelSpotOrder defines a method for cancelling a spot order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CancelSpotOrder
 */
export declare const MsgCancelSpotOrderService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "CancelSpotOrder";
    readonly Request: typeof MsgCancelSpotOrder;
    readonly Response: typeof MsgCancelSpotOrderResponse;
};
/**
 * BatchCancelSpotOrders defines a method for cancelling a batch of spot
 * orders in a given market.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.BatchCancelSpotOrders
 */
export declare const MsgBatchCancelSpotOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "BatchCancelSpotOrders";
    readonly Request: typeof MsgBatchCancelSpotOrders;
    readonly Response: typeof MsgBatchCancelSpotOrdersResponse;
};
/**
 * BatchUpdateOrders defines a method for updating a batch of orders.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.BatchUpdateOrders
 */
export declare const MsgBatchUpdateOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "BatchUpdateOrders";
    readonly Request: typeof MsgBatchUpdateOrders;
    readonly Response: typeof MsgBatchUpdateOrdersResponse;
};
/**
 * PrivilegedExecuteContract defines a method for executing a Cosmwasm
 * contract from the exchange module with privileged capabilities.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.PrivilegedExecuteContract
 */
export declare const MsgPrivilegedExecuteContractService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "PrivilegedExecuteContract";
    readonly Request: typeof MsgPrivilegedExecuteContract;
    readonly Response: typeof MsgPrivilegedExecuteContractResponse;
};
/**
 * CreateDerivativeLimitOrder defines a method for creating a new derivative
 * limit order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CreateDerivativeLimitOrder
 */
export declare const MsgCreateDerivativeLimitOrderService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "CreateDerivativeLimitOrder";
    readonly Request: typeof MsgCreateDerivativeLimitOrder;
    readonly Response: typeof MsgCreateDerivativeLimitOrderResponse;
};
/**
 * BatchCreateDerivativeLimitOrders defines a method for creating a new batch
 * of derivative limit orders.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.BatchCreateDerivativeLimitOrders
 */
export declare const MsgBatchCreateDerivativeLimitOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "BatchCreateDerivativeLimitOrders";
    readonly Request: typeof MsgBatchCreateDerivativeLimitOrders;
    readonly Response: typeof MsgBatchCreateDerivativeLimitOrdersResponse;
};
/**
 * MsgCreateDerivativeLimitOrder defines a method for creating a new
 * derivative market order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CreateDerivativeMarketOrder
 */
export declare const MsgCreateDerivativeMarketOrderService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "CreateDerivativeMarketOrder";
    readonly Request: typeof MsgCreateDerivativeMarketOrder;
    readonly Response: typeof MsgCreateDerivativeMarketOrderResponse;
};
/**
 * MsgCancelDerivativeOrder defines a method for cancelling a derivative
 * order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CancelDerivativeOrder
 */
export declare const MsgCancelDerivativeOrderService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "CancelDerivativeOrder";
    readonly Request: typeof MsgCancelDerivativeOrder;
    readonly Response: typeof MsgCancelDerivativeOrderResponse;
};
/**
 * MsgBatchCancelDerivativeOrders defines a method for cancelling a batch of
 * derivative limit orders.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.BatchCancelDerivativeOrders
 */
export declare const MsgBatchCancelDerivativeOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "BatchCancelDerivativeOrders";
    readonly Request: typeof MsgBatchCancelDerivativeOrders;
    readonly Response: typeof MsgBatchCancelDerivativeOrdersResponse;
};
/**
 * InstantBinaryOptionsMarketLaunch defines method for creating a binary
 * options market by paying listing fee without governance
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.InstantBinaryOptionsMarketLaunch
 */
export declare const MsgInstantBinaryOptionsMarketLaunchService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "InstantBinaryOptionsMarketLaunch";
    readonly Request: typeof MsgInstantBinaryOptionsMarketLaunch;
    readonly Response: typeof MsgInstantBinaryOptionsMarketLaunchResponse;
};
/**
 * CreateBinaryOptionsLimitOrder defines a method for creating a new binary
 * options limit order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CreateBinaryOptionsLimitOrder
 */
export declare const MsgCreateBinaryOptionsLimitOrderService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "CreateBinaryOptionsLimitOrder";
    readonly Request: typeof MsgCreateBinaryOptionsLimitOrder;
    readonly Response: typeof MsgCreateBinaryOptionsLimitOrderResponse;
};
/**
 * CreateBinaryOptionsMarketOrder defines a method for creating a new binary
 * options market order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CreateBinaryOptionsMarketOrder
 */
export declare const MsgCreateBinaryOptionsMarketOrderService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "CreateBinaryOptionsMarketOrder";
    readonly Request: typeof MsgCreateBinaryOptionsMarketOrder;
    readonly Response: typeof MsgCreateBinaryOptionsMarketOrderResponse;
};
/**
 * MsgCancelBinaryOptionsOrder defines a method for cancelling a binary
 * options order.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.CancelBinaryOptionsOrder
 */
export declare const MsgCancelBinaryOptionsOrderService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "CancelBinaryOptionsOrder";
    readonly Request: typeof MsgCancelBinaryOptionsOrder;
    readonly Response: typeof MsgCancelBinaryOptionsOrderResponse;
};
/**
 * BatchCancelBinaryOptionsOrders defines a method for cancelling a batch of
 * binary options limit orders.
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.BatchCancelBinaryOptionsOrders
 */
export declare const MsgBatchCancelBinaryOptionsOrdersService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "BatchCancelBinaryOptionsOrders";
    readonly Request: typeof MsgBatchCancelBinaryOptionsOrders;
    readonly Response: typeof MsgBatchCancelBinaryOptionsOrdersResponse;
};
/**
 * SubaccountTransfer defines a method for transfer between subaccounts
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.SubaccountTransfer
 */
export declare const MsgSubaccountTransferService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "SubaccountTransfer";
    readonly Request: typeof MsgSubaccountTransfer;
    readonly Response: typeof MsgSubaccountTransferResponse;
};
/**
 * ExternalTransfer defines a method for transfer between external accounts
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.ExternalTransfer
 */
export declare const MsgExternalTransferService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "ExternalTransfer";
    readonly Request: typeof MsgExternalTransfer;
    readonly Response: typeof MsgExternalTransferResponse;
};
/**
 * LiquidatePosition defines a method for liquidating a position
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.LiquidatePosition
 */
export declare const MsgLiquidatePositionService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "LiquidatePosition";
    readonly Request: typeof MsgLiquidatePosition;
    readonly Response: typeof MsgLiquidatePositionResponse;
};
/**
 * EmergencySettleMarket defines a method for emergency settling a market
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.EmergencySettleMarket
 */
export declare const MsgEmergencySettleMarketService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "EmergencySettleMarket";
    readonly Request: typeof MsgEmergencySettleMarket;
    readonly Response: typeof MsgEmergencySettleMarketResponse;
};
/**
 * IncreasePositionMargin defines a method for increasing margin of a position
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.IncreasePositionMargin
 */
export declare const MsgIncreasePositionMarginService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "IncreasePositionMargin";
    readonly Request: typeof MsgIncreasePositionMargin;
    readonly Response: typeof MsgIncreasePositionMarginResponse;
};
/**
 * RewardsOptOut defines a method for opting out of rewards
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.RewardsOptOut
 */
export declare const MsgRewardsOptOutService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "RewardsOptOut";
    readonly Request: typeof MsgRewardsOptOut;
    readonly Response: typeof MsgRewardsOptOutResponse;
};
/**
 * AdminUpdateBinaryOptionsMarket defines method for updating a binary options
 * market by admin
 *
 * @generated from rpc injective.exchange.v1beta1.Msg.AdminUpdateBinaryOptionsMarket
 */
export declare const MsgAdminUpdateBinaryOptionsMarketService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "AdminUpdateBinaryOptionsMarket";
    readonly Request: typeof MsgAdminUpdateBinaryOptionsMarket;
    readonly Response: typeof MsgAdminUpdateBinaryOptionsMarketResponse;
};
/**
 * @generated from rpc injective.exchange.v1beta1.Msg.ReclaimLockedFunds
 */
export declare const MsgReclaimLockedFundsService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "ReclaimLockedFunds";
    readonly Request: typeof MsgReclaimLockedFunds;
    readonly Response: typeof MsgReclaimLockedFundsResponse;
};
/**
 * @generated from rpc injective.exchange.v1beta1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "injective.exchange.v1beta1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map