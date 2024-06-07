import { MsgMigrateContract, MsgMigrateContractResponse, MsgRemoveChecksum, MsgRemoveChecksumResponse, MsgStoreCode, MsgStoreCodeResponse } from "./tx_pb.js";
/**
 * StoreCode defines a rpc handler method for MsgStoreCode.
 *
 * @generated from rpc ibc.lightclients.wasm.v1.Msg.StoreCode
 */
export declare const MsgStoreCodeService: {
    readonly typeName: "ibc.lightclients.wasm.v1.Msg";
    readonly method: "StoreCode";
    readonly Request: typeof MsgStoreCode;
    readonly Response: typeof MsgStoreCodeResponse;
};
/**
 * RemoveChecksum defines a rpc handler method for MsgRemoveChecksum.
 *
 * @generated from rpc ibc.lightclients.wasm.v1.Msg.RemoveChecksum
 */
export declare const MsgRemoveChecksumService: {
    readonly typeName: "ibc.lightclients.wasm.v1.Msg";
    readonly method: "RemoveChecksum";
    readonly Request: typeof MsgRemoveChecksum;
    readonly Response: typeof MsgRemoveChecksumResponse;
};
/**
 * MigrateContract defines a rpc handler method for MsgMigrateContract.
 *
 * @generated from rpc ibc.lightclients.wasm.v1.Msg.MigrateContract
 */
export declare const MsgMigrateContractService: {
    readonly typeName: "ibc.lightclients.wasm.v1.Msg";
    readonly method: "MigrateContract";
    readonly Request: typeof MsgMigrateContract;
    readonly Response: typeof MsgMigrateContractResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map