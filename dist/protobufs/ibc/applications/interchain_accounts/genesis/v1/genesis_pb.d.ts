import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "../../controller/v1/controller_pb.js";
import { Params as Params$1 } from "../../host/v1/host_pb.js";
/**
 * GenesisState defines the interchain accounts genesis state
 *
 * @generated from message ibc.applications.interchain_accounts.genesis.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState controller_genesis_state = 1;
     */
    controllerGenesisState?: ControllerGenesisState;
    /**
     * @generated from field: ibc.applications.interchain_accounts.genesis.v1.HostGenesisState host_genesis_state = 2;
     */
    hostGenesisState?: HostGenesisState;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.genesis.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * ControllerGenesisState defines the interchain accounts controller genesis state
 *
 * @generated from message ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState
 */
export declare class ControllerGenesisState extends Message<ControllerGenesisState> {
    /**
     * @generated from field: repeated ibc.applications.interchain_accounts.genesis.v1.ActiveChannel active_channels = 1;
     */
    activeChannels: ActiveChannel[];
    /**
     * @generated from field: repeated ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount interchain_accounts = 2;
     */
    interchainAccounts: RegisteredInterchainAccount[];
    /**
     * @generated from field: repeated string ports = 3;
     */
    ports: string[];
    /**
     * @generated from field: ibc.applications.interchain_accounts.controller.v1.Params params = 4;
     */
    params?: Params;
    constructor(data?: PartialMessage<ControllerGenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ControllerGenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ControllerGenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ControllerGenesisState;
    static equals(a: ControllerGenesisState | PlainMessage<ControllerGenesisState> | undefined, b: ControllerGenesisState | PlainMessage<ControllerGenesisState> | undefined): boolean;
}
/**
 * HostGenesisState defines the interchain accounts host genesis state
 *
 * @generated from message ibc.applications.interchain_accounts.genesis.v1.HostGenesisState
 */
export declare class HostGenesisState extends Message<HostGenesisState> {
    /**
     * @generated from field: repeated ibc.applications.interchain_accounts.genesis.v1.ActiveChannel active_channels = 1;
     */
    activeChannels: ActiveChannel[];
    /**
     * @generated from field: repeated ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount interchain_accounts = 2;
     */
    interchainAccounts: RegisteredInterchainAccount[];
    /**
     * @generated from field: string port = 3;
     */
    port: string;
    /**
     * @generated from field: ibc.applications.interchain_accounts.host.v1.Params params = 4;
     */
    params?: Params$1;
    constructor(data?: PartialMessage<HostGenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.genesis.v1.HostGenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HostGenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HostGenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HostGenesisState;
    static equals(a: HostGenesisState | PlainMessage<HostGenesisState> | undefined, b: HostGenesisState | PlainMessage<HostGenesisState> | undefined): boolean;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 *
 * @generated from message ibc.applications.interchain_accounts.genesis.v1.ActiveChannel
 */
export declare class ActiveChannel extends Message<ActiveChannel> {
    /**
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
    /**
     * @generated from field: string port_id = 2;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 3;
     */
    channelId: string;
    /**
     * @generated from field: bool is_middleware_enabled = 4;
     */
    isMiddlewareEnabled: boolean;
    constructor(data?: PartialMessage<ActiveChannel>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.genesis.v1.ActiveChannel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveChannel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveChannel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveChannel;
    static equals(a: ActiveChannel | PlainMessage<ActiveChannel> | undefined, b: ActiveChannel | PlainMessage<ActiveChannel> | undefined): boolean;
}
/**
 * RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address
 *
 * @generated from message ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount
 */
export declare class RegisteredInterchainAccount extends Message<RegisteredInterchainAccount> {
    /**
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
    /**
     * @generated from field: string port_id = 2;
     */
    portId: string;
    /**
     * @generated from field: string account_address = 3;
     */
    accountAddress: string;
    constructor(data?: PartialMessage<RegisteredInterchainAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisteredInterchainAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisteredInterchainAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisteredInterchainAccount;
    static equals(a: RegisteredInterchainAccount | PlainMessage<RegisteredInterchainAccount> | undefined, b: RegisteredInterchainAccount | PlainMessage<RegisteredInterchainAccount> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map