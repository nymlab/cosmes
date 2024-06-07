import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/upgrade_pb.js";
import { Params } from "./client_pb.js";
/**
 * MsgCreateClient defines a message to create an IBC client
 *
 * @generated from message ibc.core.client.v1.MsgCreateClient
 */
export declare class MsgCreateClient extends Message<MsgCreateClient> {
    /**
     * light client state
     *
     * @generated from field: google.protobuf.Any client_state = 1;
     */
    clientState?: Any;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     *
     * @generated from field: google.protobuf.Any consensus_state = 2;
     */
    consensusState?: Any;
    /**
     * signer address
     *
     * @generated from field: string signer = 3;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgCreateClient>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgCreateClient";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateClient;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateClient;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateClient;
    static equals(a: MsgCreateClient | PlainMessage<MsgCreateClient> | undefined, b: MsgCreateClient | PlainMessage<MsgCreateClient> | undefined): boolean;
}
/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgCreateClientResponse
 */
export declare class MsgCreateClientResponse extends Message<MsgCreateClientResponse> {
    constructor(data?: PartialMessage<MsgCreateClientResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgCreateClientResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateClientResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateClientResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateClientResponse;
    static equals(a: MsgCreateClientResponse | PlainMessage<MsgCreateClientResponse> | undefined, b: MsgCreateClientResponse | PlainMessage<MsgCreateClientResponse> | undefined): boolean;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 *
 * @generated from message ibc.core.client.v1.MsgUpdateClient
 */
export declare class MsgUpdateClient extends Message<MsgUpdateClient> {
    /**
     * client unique identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * client message to update the light client
     *
     * @generated from field: google.protobuf.Any client_message = 2;
     */
    clientMessage?: Any;
    /**
     * signer address
     *
     * @generated from field: string signer = 3;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgUpdateClient>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgUpdateClient";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateClient;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateClient;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateClient;
    static equals(a: MsgUpdateClient | PlainMessage<MsgUpdateClient> | undefined, b: MsgUpdateClient | PlainMessage<MsgUpdateClient> | undefined): boolean;
}
/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgUpdateClientResponse
 */
export declare class MsgUpdateClientResponse extends Message<MsgUpdateClientResponse> {
    constructor(data?: PartialMessage<MsgUpdateClientResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgUpdateClientResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateClientResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateClientResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateClientResponse;
    static equals(a: MsgUpdateClientResponse | PlainMessage<MsgUpdateClientResponse> | undefined, b: MsgUpdateClientResponse | PlainMessage<MsgUpdateClientResponse> | undefined): boolean;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 *
 * @generated from message ibc.core.client.v1.MsgUpgradeClient
 */
export declare class MsgUpgradeClient extends Message<MsgUpgradeClient> {
    /**
     * client unique identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * upgraded client state
     *
     * @generated from field: google.protobuf.Any client_state = 2;
     */
    clientState?: Any;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     *
     * @generated from field: google.protobuf.Any consensus_state = 3;
     */
    consensusState?: Any;
    /**
     * proof that old chain committed to new client
     *
     * @generated from field: bytes proof_upgrade_client = 4;
     */
    proofUpgradeClient: Uint8Array;
    /**
     * proof that old chain committed to new consensus state
     *
     * @generated from field: bytes proof_upgrade_consensus_state = 5;
     */
    proofUpgradeConsensusState: Uint8Array;
    /**
     * signer address
     *
     * @generated from field: string signer = 6;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgUpgradeClient>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgUpgradeClient";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpgradeClient;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpgradeClient;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpgradeClient;
    static equals(a: MsgUpgradeClient | PlainMessage<MsgUpgradeClient> | undefined, b: MsgUpgradeClient | PlainMessage<MsgUpgradeClient> | undefined): boolean;
}
/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgUpgradeClientResponse
 */
export declare class MsgUpgradeClientResponse extends Message<MsgUpgradeClientResponse> {
    constructor(data?: PartialMessage<MsgUpgradeClientResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgUpgradeClientResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpgradeClientResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpgradeClientResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpgradeClientResponse;
    static equals(a: MsgUpgradeClientResponse | PlainMessage<MsgUpgradeClientResponse> | undefined, b: MsgUpgradeClientResponse | PlainMessage<MsgUpgradeClientResponse> | undefined): boolean;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 *
 * @generated from message ibc.core.client.v1.MsgSubmitMisbehaviour
 * @deprecated
 */
export declare class MsgSubmitMisbehaviour extends Message<MsgSubmitMisbehaviour> {
    /**
     * client unique identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * misbehaviour used for freezing the light client
     *
     * @generated from field: google.protobuf.Any misbehaviour = 2;
     */
    misbehaviour?: Any;
    /**
     * signer address
     *
     * @generated from field: string signer = 3;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgSubmitMisbehaviour>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgSubmitMisbehaviour";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitMisbehaviour;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitMisbehaviour;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitMisbehaviour;
    static equals(a: MsgSubmitMisbehaviour | PlainMessage<MsgSubmitMisbehaviour> | undefined, b: MsgSubmitMisbehaviour | PlainMessage<MsgSubmitMisbehaviour> | undefined): boolean;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 *
 * @generated from message ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export declare class MsgSubmitMisbehaviourResponse extends Message<MsgSubmitMisbehaviourResponse> {
    constructor(data?: PartialMessage<MsgSubmitMisbehaviourResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgSubmitMisbehaviourResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitMisbehaviourResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitMisbehaviourResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitMisbehaviourResponse;
    static equals(a: MsgSubmitMisbehaviourResponse | PlainMessage<MsgSubmitMisbehaviourResponse> | undefined, b: MsgSubmitMisbehaviourResponse | PlainMessage<MsgSubmitMisbehaviourResponse> | undefined): boolean;
}
/**
 * MsgRecoverClient defines the message used to recover a frozen or expired client.
 *
 * @generated from message ibc.core.client.v1.MsgRecoverClient
 */
export declare class MsgRecoverClient extends Message<MsgRecoverClient> {
    /**
     * the client identifier for the client to be updated if the proposal passes
     *
     * @generated from field: string subject_client_id = 1;
     */
    subjectClientId: string;
    /**
     * the substitute client identifier for the client which will replace the subject
     * client
     *
     * @generated from field: string substitute_client_id = 2;
     */
    substituteClientId: string;
    /**
     * signer address
     *
     * @generated from field: string signer = 3;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgRecoverClient>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgRecoverClient";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRecoverClient;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRecoverClient;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRecoverClient;
    static equals(a: MsgRecoverClient | PlainMessage<MsgRecoverClient> | undefined, b: MsgRecoverClient | PlainMessage<MsgRecoverClient> | undefined): boolean;
}
/**
 * MsgRecoverClientResponse defines the Msg/RecoverClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgRecoverClientResponse
 */
export declare class MsgRecoverClientResponse extends Message<MsgRecoverClientResponse> {
    constructor(data?: PartialMessage<MsgRecoverClientResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgRecoverClientResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRecoverClientResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRecoverClientResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRecoverClientResponse;
    static equals(a: MsgRecoverClientResponse | PlainMessage<MsgRecoverClientResponse> | undefined, b: MsgRecoverClientResponse | PlainMessage<MsgRecoverClientResponse> | undefined): boolean;
}
/**
 * MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal
 *
 * @generated from message ibc.core.client.v1.MsgIBCSoftwareUpgrade
 */
export declare class MsgIBCSoftwareUpgrade extends Message<MsgIBCSoftwareUpgrade> {
    /**
     * @generated from field: cosmos.upgrade.v1beta1.Plan plan = 1;
     */
    plan?: Plan;
    /**
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades. Correspondingly, the UpgradedClientState field has been
     * deprecated in the Cosmos SDK to allow for this logic to exist solely in
     * the 02-client module.
     *
     * @generated from field: google.protobuf.Any upgraded_client_state = 2;
     */
    upgradedClientState?: Any;
    /**
     * signer address
     *
     * @generated from field: string signer = 3;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgIBCSoftwareUpgrade>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgIBCSoftwareUpgrade";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIBCSoftwareUpgrade;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIBCSoftwareUpgrade;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIBCSoftwareUpgrade;
    static equals(a: MsgIBCSoftwareUpgrade | PlainMessage<MsgIBCSoftwareUpgrade> | undefined, b: MsgIBCSoftwareUpgrade | PlainMessage<MsgIBCSoftwareUpgrade> | undefined): boolean;
}
/**
 * MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type.
 *
 * @generated from message ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse
 */
export declare class MsgIBCSoftwareUpgradeResponse extends Message<MsgIBCSoftwareUpgradeResponse> {
    constructor(data?: PartialMessage<MsgIBCSoftwareUpgradeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIBCSoftwareUpgradeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIBCSoftwareUpgradeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIBCSoftwareUpgradeResponse;
    static equals(a: MsgIBCSoftwareUpgradeResponse | PlainMessage<MsgIBCSoftwareUpgradeResponse> | undefined, b: MsgIBCSoftwareUpgradeResponse | PlainMessage<MsgIBCSoftwareUpgradeResponse> | undefined): boolean;
}
/**
 * MsgUpdateParams defines the sdk.Msg type to update the client parameters.
 *
 * @generated from message ibc.core.client.v1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * signer address
     *
     * @generated from field: string signer = 1;
     */
    signer: string;
    /**
     * params defines the client parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: ibc.core.client.v1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * MsgUpdateParamsResponse defines the MsgUpdateParams response type.
 *
 * @generated from message ibc.core.client.v1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map