import { MsgCreateClient, MsgCreateClientResponse, MsgIBCSoftwareUpgrade, MsgIBCSoftwareUpgradeResponse, MsgRecoverClient, MsgRecoverClientResponse, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse, MsgUpdateClient, MsgUpdateClientResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpgradeClient, MsgUpgradeClientResponse } from "./tx_pb.js";
/**
 * CreateClient defines a rpc handler method for MsgCreateClient.
 *
 * @generated from rpc ibc.core.client.v1.Msg.CreateClient
 */
export declare const MsgCreateClientService: {
    readonly typeName: "ibc.core.client.v1.Msg";
    readonly method: "CreateClient";
    readonly Request: typeof MsgCreateClient;
    readonly Response: typeof MsgCreateClientResponse;
};
/**
 * UpdateClient defines a rpc handler method for MsgUpdateClient.
 *
 * @generated from rpc ibc.core.client.v1.Msg.UpdateClient
 */
export declare const MsgUpdateClientService: {
    readonly typeName: "ibc.core.client.v1.Msg";
    readonly method: "UpdateClient";
    readonly Request: typeof MsgUpdateClient;
    readonly Response: typeof MsgUpdateClientResponse;
};
/**
 * UpgradeClient defines a rpc handler method for MsgUpgradeClient.
 *
 * @generated from rpc ibc.core.client.v1.Msg.UpgradeClient
 */
export declare const MsgUpgradeClientService: {
    readonly typeName: "ibc.core.client.v1.Msg";
    readonly method: "UpgradeClient";
    readonly Request: typeof MsgUpgradeClient;
    readonly Response: typeof MsgUpgradeClientResponse;
};
/**
 * SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.
 *
 * @generated from rpc ibc.core.client.v1.Msg.SubmitMisbehaviour
 */
export declare const MsgSubmitMisbehaviourService: {
    readonly typeName: "ibc.core.client.v1.Msg";
    readonly method: "SubmitMisbehaviour";
    readonly Request: typeof MsgSubmitMisbehaviour;
    readonly Response: typeof MsgSubmitMisbehaviourResponse;
};
/**
 * RecoverClient defines a rpc handler method for MsgRecoverClient.
 *
 * @generated from rpc ibc.core.client.v1.Msg.RecoverClient
 */
export declare const MsgRecoverClientService: {
    readonly typeName: "ibc.core.client.v1.Msg";
    readonly method: "RecoverClient";
    readonly Request: typeof MsgRecoverClient;
    readonly Response: typeof MsgRecoverClientResponse;
};
/**
 * IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade.
 *
 * @generated from rpc ibc.core.client.v1.Msg.IBCSoftwareUpgrade
 */
export declare const MsgIBCSoftwareUpgradeService: {
    readonly typeName: "ibc.core.client.v1.Msg";
    readonly method: "IBCSoftwareUpgrade";
    readonly Request: typeof MsgIBCSoftwareUpgrade;
    readonly Response: typeof MsgIBCSoftwareUpgradeResponse;
};
/**
 * UpdateClientParams defines a rpc handler method for MsgUpdateParams.
 *
 * @generated from rpc ibc.core.client.v1.Msg.UpdateClientParams
 */
export declare const MsgUpdateClientParamsService: {
    readonly typeName: "ibc.core.client.v1.Msg";
    readonly method: "UpdateClientParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map