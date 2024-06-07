import { MsgBeginUnlocking, MsgBeginUnlockingAll, MsgBeginUnlockingAllResponse, MsgBeginUnlockingResponse, MsgExtendLockup, MsgExtendLockupResponse, MsgForceUnlock, MsgForceUnlockResponse, MsgLockTokens, MsgLockTokensResponse, MsgSetRewardReceiverAddress, MsgSetRewardReceiverAddressResponse } from "./tx_pb.js";
/**
 * LockTokens lock tokens
 *
 * @generated from rpc osmosis.lockup.Msg.LockTokens
 */
export declare const MsgLockTokensService: {
    readonly typeName: "osmosis.lockup.Msg";
    readonly method: "LockTokens";
    readonly Request: typeof MsgLockTokens;
    readonly Response: typeof MsgLockTokensResponse;
};
/**
 * BeginUnlockingAll begin unlocking all tokens
 *
 * @generated from rpc osmosis.lockup.Msg.BeginUnlockingAll
 */
export declare const MsgBeginUnlockingAllService: {
    readonly typeName: "osmosis.lockup.Msg";
    readonly method: "BeginUnlockingAll";
    readonly Request: typeof MsgBeginUnlockingAll;
    readonly Response: typeof MsgBeginUnlockingAllResponse;
};
/**
 * MsgBeginUnlocking begins unlocking tokens by lock ID
 *
 * @generated from rpc osmosis.lockup.Msg.BeginUnlocking
 */
export declare const MsgBeginUnlockingService: {
    readonly typeName: "osmosis.lockup.Msg";
    readonly method: "BeginUnlocking";
    readonly Request: typeof MsgBeginUnlocking;
    readonly Response: typeof MsgBeginUnlockingResponse;
};
/**
 * MsgEditLockup edits the existing lockups by lock ID
 *
 * @generated from rpc osmosis.lockup.Msg.ExtendLockup
 */
export declare const MsgExtendLockupService: {
    readonly typeName: "osmosis.lockup.Msg";
    readonly method: "ExtendLockup";
    readonly Request: typeof MsgExtendLockup;
    readonly Response: typeof MsgExtendLockupResponse;
};
/**
 * @generated from rpc osmosis.lockup.Msg.ForceUnlock
 */
export declare const MsgForceUnlockService: {
    readonly typeName: "osmosis.lockup.Msg";
    readonly method: "ForceUnlock";
    readonly Request: typeof MsgForceUnlock;
    readonly Response: typeof MsgForceUnlockResponse;
};
/**
 * SetRewardReceiverAddress edits the reward receiver for the given lock ID
 *
 * @generated from rpc osmosis.lockup.Msg.SetRewardReceiverAddress
 */
export declare const MsgSetRewardReceiverAddressService: {
    readonly typeName: "osmosis.lockup.Msg";
    readonly method: "SetRewardReceiverAddress";
    readonly Request: typeof MsgSetRewardReceiverAddress;
    readonly Response: typeof MsgSetRewardReceiverAddressResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map