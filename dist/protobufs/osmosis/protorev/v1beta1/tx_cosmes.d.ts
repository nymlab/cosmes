import { MsgSetBaseDenoms, MsgSetBaseDenomsResponse, MsgSetDeveloperAccount, MsgSetDeveloperAccountResponse, MsgSetHotRoutes, MsgSetHotRoutesResponse, MsgSetInfoByPoolType, MsgSetInfoByPoolTypeResponse, MsgSetMaxPoolPointsPerBlock, MsgSetMaxPoolPointsPerBlockResponse, MsgSetMaxPoolPointsPerTx, MsgSetMaxPoolPointsPerTxResponse } from "./tx_pb.js";
/**
 * SetHotRoutes sets the hot routes that will be explored when creating
 * cyclic arbitrage routes. Can only be called by the admin account.
 *
 * @generated from rpc osmosis.protorev.v1beta1.Msg.SetHotRoutes
 */
export declare const MsgSetHotRoutesService: {
    readonly typeName: "osmosis.protorev.v1beta1.Msg";
    readonly method: "SetHotRoutes";
    readonly Request: typeof MsgSetHotRoutes;
    readonly Response: typeof MsgSetHotRoutesResponse;
};
/**
 * SetDeveloperAccount sets the account that can withdraw a portion of the
 * profits from the protorev module. This will be Skip's address.
 *
 * @generated from rpc osmosis.protorev.v1beta1.Msg.SetDeveloperAccount
 */
export declare const MsgSetDeveloperAccountService: {
    readonly typeName: "osmosis.protorev.v1beta1.Msg";
    readonly method: "SetDeveloperAccount";
    readonly Request: typeof MsgSetDeveloperAccount;
    readonly Response: typeof MsgSetDeveloperAccountResponse;
};
/**
 * SetMaxPoolPointsPerTx sets the maximum number of pool points that can be
 * consumed per transaction. Can only be called by the admin account.
 *
 * @generated from rpc osmosis.protorev.v1beta1.Msg.SetMaxPoolPointsPerTx
 */
export declare const MsgSetMaxPoolPointsPerTxService: {
    readonly typeName: "osmosis.protorev.v1beta1.Msg";
    readonly method: "SetMaxPoolPointsPerTx";
    readonly Request: typeof MsgSetMaxPoolPointsPerTx;
    readonly Response: typeof MsgSetMaxPoolPointsPerTxResponse;
};
/**
 * SetMaxPoolPointsPerBlock sets the maximum number of pool points that can be
 * consumed per block. Can only be called by the admin account.
 *
 * @generated from rpc osmosis.protorev.v1beta1.Msg.SetMaxPoolPointsPerBlock
 */
export declare const MsgSetMaxPoolPointsPerBlockService: {
    readonly typeName: "osmosis.protorev.v1beta1.Msg";
    readonly method: "SetMaxPoolPointsPerBlock";
    readonly Request: typeof MsgSetMaxPoolPointsPerBlock;
    readonly Response: typeof MsgSetMaxPoolPointsPerBlockResponse;
};
/**
 * SetInfoByPoolType sets the pool type information needed to make smart
 * assumptions about swapping on different pool types
 *
 * @generated from rpc osmosis.protorev.v1beta1.Msg.SetInfoByPoolType
 */
export declare const MsgSetInfoByPoolTypeService: {
    readonly typeName: "osmosis.protorev.v1beta1.Msg";
    readonly method: "SetInfoByPoolType";
    readonly Request: typeof MsgSetInfoByPoolType;
    readonly Response: typeof MsgSetInfoByPoolTypeResponse;
};
/**
 * SetBaseDenoms sets the base denoms that will be used to create cyclic
 * arbitrage routes. Can only be called by the admin account.
 *
 * @generated from rpc osmosis.protorev.v1beta1.Msg.SetBaseDenoms
 */
export declare const MsgSetBaseDenomsService: {
    readonly typeName: "osmosis.protorev.v1beta1.Msg";
    readonly method: "SetBaseDenoms";
    readonly Request: typeof MsgSetBaseDenoms;
    readonly Response: typeof MsgSetBaseDenomsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map