import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * AppDescriptor describes a cosmos-sdk based application
 *
 * @generated from message cosmos.base.reflection.v2alpha1.AppDescriptor
 */
export declare class AppDescriptor extends Message<AppDescriptor> {
    /**
     * AuthnDescriptor provides information on how to authenticate transactions on the application
     * NOTE: experimental and subject to change in future releases.
     *
     * @generated from field: cosmos.base.reflection.v2alpha1.AuthnDescriptor authn = 1;
     */
    authn?: AuthnDescriptor;
    /**
     * chain provides the chain descriptor
     *
     * @generated from field: cosmos.base.reflection.v2alpha1.ChainDescriptor chain = 2;
     */
    chain?: ChainDescriptor;
    /**
     * codec provides metadata information regarding codec related types
     *
     * @generated from field: cosmos.base.reflection.v2alpha1.CodecDescriptor codec = 3;
     */
    codec?: CodecDescriptor;
    /**
     * configuration provides metadata information regarding the sdk.Config type
     *
     * @generated from field: cosmos.base.reflection.v2alpha1.ConfigurationDescriptor configuration = 4;
     */
    configuration?: ConfigurationDescriptor;
    /**
     * query_services provides metadata information regarding the available queriable endpoints
     *
     * @generated from field: cosmos.base.reflection.v2alpha1.QueryServicesDescriptor query_services = 5;
     */
    queryServices?: QueryServicesDescriptor;
    /**
     * tx provides metadata information regarding how to send transactions to the given application
     *
     * @generated from field: cosmos.base.reflection.v2alpha1.TxDescriptor tx = 6;
     */
    tx?: TxDescriptor;
    constructor(data?: PartialMessage<AppDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.AppDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppDescriptor;
    static equals(a: AppDescriptor | PlainMessage<AppDescriptor> | undefined, b: AppDescriptor | PlainMessage<AppDescriptor> | undefined): boolean;
}
/**
 * TxDescriptor describes the accepted transaction type
 *
 * @generated from message cosmos.base.reflection.v2alpha1.TxDescriptor
 */
export declare class TxDescriptor extends Message<TxDescriptor> {
    /**
     * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
     * it is not meant to support polymorphism of transaction types, it is supposed to be used by
     * reflection clients to understand if they can handle a specific transaction type in an application.
     *
     * @generated from field: string fullname = 1;
     */
    fullname: string;
    /**
     * msgs lists the accepted application messages (sdk.Msg)
     *
     * @generated from field: repeated cosmos.base.reflection.v2alpha1.MsgDescriptor msgs = 2;
     */
    msgs: MsgDescriptor[];
    constructor(data?: PartialMessage<TxDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.TxDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxDescriptor;
    static equals(a: TxDescriptor | PlainMessage<TxDescriptor> | undefined, b: TxDescriptor | PlainMessage<TxDescriptor> | undefined): boolean;
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 *
 * @generated from message cosmos.base.reflection.v2alpha1.AuthnDescriptor
 */
export declare class AuthnDescriptor extends Message<AuthnDescriptor> {
    /**
     * sign_modes defines the supported signature algorithm
     *
     * @generated from field: repeated cosmos.base.reflection.v2alpha1.SigningModeDescriptor sign_modes = 1;
     */
    signModes: SigningModeDescriptor[];
    constructor(data?: PartialMessage<AuthnDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.AuthnDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthnDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthnDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthnDescriptor;
    static equals(a: AuthnDescriptor | PlainMessage<AuthnDescriptor> | undefined, b: AuthnDescriptor | PlainMessage<AuthnDescriptor> | undefined): boolean;
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 *
 * @generated from message cosmos.base.reflection.v2alpha1.SigningModeDescriptor
 */
export declare class SigningModeDescriptor extends Message<SigningModeDescriptor> {
    /**
     * name defines the unique name of the signing mode
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * number is the unique int32 identifier for the sign_mode enum
     *
     * @generated from field: int32 number = 2;
     */
    number: number;
    /**
     * authn_info_provider_method_fullname defines the fullname of the method to call to get
     * the metadata required to authenticate using the provided sign_modes
     *
     * @generated from field: string authn_info_provider_method_fullname = 3;
     */
    authnInfoProviderMethodFullname: string;
    constructor(data?: PartialMessage<SigningModeDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.SigningModeDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SigningModeDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SigningModeDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SigningModeDescriptor;
    static equals(a: SigningModeDescriptor | PlainMessage<SigningModeDescriptor> | undefined, b: SigningModeDescriptor | PlainMessage<SigningModeDescriptor> | undefined): boolean;
}
/**
 * ChainDescriptor describes chain information of the application
 *
 * @generated from message cosmos.base.reflection.v2alpha1.ChainDescriptor
 */
export declare class ChainDescriptor extends Message<ChainDescriptor> {
    /**
     * id is the chain id
     *
     * @generated from field: string id = 1;
     */
    id: string;
    constructor(data?: PartialMessage<ChainDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.ChainDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainDescriptor;
    static equals(a: ChainDescriptor | PlainMessage<ChainDescriptor> | undefined, b: ChainDescriptor | PlainMessage<ChainDescriptor> | undefined): boolean;
}
/**
 * CodecDescriptor describes the registered interfaces and provides metadata information on the types
 *
 * @generated from message cosmos.base.reflection.v2alpha1.CodecDescriptor
 */
export declare class CodecDescriptor extends Message<CodecDescriptor> {
    /**
     * interfaces is a list of the registerted interfaces descriptors
     *
     * @generated from field: repeated cosmos.base.reflection.v2alpha1.InterfaceDescriptor interfaces = 1;
     */
    interfaces: InterfaceDescriptor[];
    constructor(data?: PartialMessage<CodecDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.CodecDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodecDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodecDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodecDescriptor;
    static equals(a: CodecDescriptor | PlainMessage<CodecDescriptor> | undefined, b: CodecDescriptor | PlainMessage<CodecDescriptor> | undefined): boolean;
}
/**
 * InterfaceDescriptor describes the implementation of an interface
 *
 * @generated from message cosmos.base.reflection.v2alpha1.InterfaceDescriptor
 */
export declare class InterfaceDescriptor extends Message<InterfaceDescriptor> {
    /**
     * fullname is the name of the interface
     *
     * @generated from field: string fullname = 1;
     */
    fullname: string;
    /**
     * interface_accepting_messages contains information regarding the proto messages which contain the interface as
     * google.protobuf.Any field
     *
     * @generated from field: repeated cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor interface_accepting_messages = 2;
     */
    interfaceAcceptingMessages: InterfaceAcceptingMessageDescriptor[];
    /**
     * interface_implementers is a list of the descriptors of the interface implementers
     *
     * @generated from field: repeated cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor interface_implementers = 3;
     */
    interfaceImplementers: InterfaceImplementerDescriptor[];
    constructor(data?: PartialMessage<InterfaceDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.InterfaceDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InterfaceDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InterfaceDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InterfaceDescriptor;
    static equals(a: InterfaceDescriptor | PlainMessage<InterfaceDescriptor> | undefined, b: InterfaceDescriptor | PlainMessage<InterfaceDescriptor> | undefined): boolean;
}
/**
 * InterfaceImplementerDescriptor describes an interface implementer
 *
 * @generated from message cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor
 */
export declare class InterfaceImplementerDescriptor extends Message<InterfaceImplementerDescriptor> {
    /**
     * fullname is the protobuf queryable name of the interface implementer
     *
     * @generated from field: string fullname = 1;
     */
    fullname: string;
    /**
     * type_url defines the type URL used when marshalling the type as any
     * this is required so we can provide type safe google.protobuf.Any marshalling and
     * unmarshalling, making sure that we don't accept just 'any' type
     * in our interface fields
     *
     * @generated from field: string type_url = 2;
     */
    typeUrl: string;
    constructor(data?: PartialMessage<InterfaceImplementerDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InterfaceImplementerDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InterfaceImplementerDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InterfaceImplementerDescriptor;
    static equals(a: InterfaceImplementerDescriptor | PlainMessage<InterfaceImplementerDescriptor> | undefined, b: InterfaceImplementerDescriptor | PlainMessage<InterfaceImplementerDescriptor> | undefined): boolean;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 *
 * @generated from message cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor
 */
export declare class InterfaceAcceptingMessageDescriptor extends Message<InterfaceAcceptingMessageDescriptor> {
    /**
     * fullname is the protobuf fullname of the type containing the interface
     *
     * @generated from field: string fullname = 1;
     */
    fullname: string;
    /**
     * field_descriptor_names is a list of the protobuf name (not fullname) of the field
     * which contains the interface as google.protobuf.Any (the interface is the same, but
     * it can be in multiple fields of the same proto message)
     *
     * @generated from field: repeated string field_descriptor_names = 2;
     */
    fieldDescriptorNames: string[];
    constructor(data?: PartialMessage<InterfaceAcceptingMessageDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InterfaceAcceptingMessageDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InterfaceAcceptingMessageDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InterfaceAcceptingMessageDescriptor;
    static equals(a: InterfaceAcceptingMessageDescriptor | PlainMessage<InterfaceAcceptingMessageDescriptor> | undefined, b: InterfaceAcceptingMessageDescriptor | PlainMessage<InterfaceAcceptingMessageDescriptor> | undefined): boolean;
}
/**
 * ConfigurationDescriptor contains metadata information on the sdk.Config
 *
 * @generated from message cosmos.base.reflection.v2alpha1.ConfigurationDescriptor
 */
export declare class ConfigurationDescriptor extends Message<ConfigurationDescriptor> {
    /**
     * bech32_account_address_prefix is the account address prefix
     *
     * @generated from field: string bech32_account_address_prefix = 1;
     */
    bech32AccountAddressPrefix: string;
    constructor(data?: PartialMessage<ConfigurationDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.ConfigurationDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigurationDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigurationDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigurationDescriptor;
    static equals(a: ConfigurationDescriptor | PlainMessage<ConfigurationDescriptor> | undefined, b: ConfigurationDescriptor | PlainMessage<ConfigurationDescriptor> | undefined): boolean;
}
/**
 * MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction
 *
 * @generated from message cosmos.base.reflection.v2alpha1.MsgDescriptor
 */
export declare class MsgDescriptor extends Message<MsgDescriptor> {
    /**
     * msg_type_url contains the TypeURL of a sdk.Msg.
     *
     * @generated from field: string msg_type_url = 1;
     */
    msgTypeUrl: string;
    constructor(data?: PartialMessage<MsgDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.MsgDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDescriptor;
    static equals(a: MsgDescriptor | PlainMessage<MsgDescriptor> | undefined, b: MsgDescriptor | PlainMessage<MsgDescriptor> | undefined): boolean;
}
/**
 * GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest
 */
export declare class GetAuthnDescriptorRequest extends Message<GetAuthnDescriptorRequest> {
    constructor(data?: PartialMessage<GetAuthnDescriptorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthnDescriptorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthnDescriptorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthnDescriptorRequest;
    static equals(a: GetAuthnDescriptorRequest | PlainMessage<GetAuthnDescriptorRequest> | undefined, b: GetAuthnDescriptorRequest | PlainMessage<GetAuthnDescriptorRequest> | undefined): boolean;
}
/**
 * GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse
 */
export declare class GetAuthnDescriptorResponse extends Message<GetAuthnDescriptorResponse> {
    /**
     * authn describes how to authenticate to the application when sending transactions
     *
     * @generated from field: cosmos.base.reflection.v2alpha1.AuthnDescriptor authn = 1;
     */
    authn?: AuthnDescriptor;
    constructor(data?: PartialMessage<GetAuthnDescriptorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthnDescriptorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthnDescriptorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthnDescriptorResponse;
    static equals(a: GetAuthnDescriptorResponse | PlainMessage<GetAuthnDescriptorResponse> | undefined, b: GetAuthnDescriptorResponse | PlainMessage<GetAuthnDescriptorResponse> | undefined): boolean;
}
/**
 * GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest
 */
export declare class GetChainDescriptorRequest extends Message<GetChainDescriptorRequest> {
    constructor(data?: PartialMessage<GetChainDescriptorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetChainDescriptorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetChainDescriptorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetChainDescriptorRequest;
    static equals(a: GetChainDescriptorRequest | PlainMessage<GetChainDescriptorRequest> | undefined, b: GetChainDescriptorRequest | PlainMessage<GetChainDescriptorRequest> | undefined): boolean;
}
/**
 * GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse
 */
export declare class GetChainDescriptorResponse extends Message<GetChainDescriptorResponse> {
    /**
     * chain describes application chain information
     *
     * @generated from field: cosmos.base.reflection.v2alpha1.ChainDescriptor chain = 1;
     */
    chain?: ChainDescriptor;
    constructor(data?: PartialMessage<GetChainDescriptorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetChainDescriptorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetChainDescriptorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetChainDescriptorResponse;
    static equals(a: GetChainDescriptorResponse | PlainMessage<GetChainDescriptorResponse> | undefined, b: GetChainDescriptorResponse | PlainMessage<GetChainDescriptorResponse> | undefined): boolean;
}
/**
 * GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest
 */
export declare class GetCodecDescriptorRequest extends Message<GetCodecDescriptorRequest> {
    constructor(data?: PartialMessage<GetCodecDescriptorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCodecDescriptorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCodecDescriptorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCodecDescriptorRequest;
    static equals(a: GetCodecDescriptorRequest | PlainMessage<GetCodecDescriptorRequest> | undefined, b: GetCodecDescriptorRequest | PlainMessage<GetCodecDescriptorRequest> | undefined): boolean;
}
/**
 * GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse
 */
export declare class GetCodecDescriptorResponse extends Message<GetCodecDescriptorResponse> {
    /**
     * codec describes the application codec such as registered interfaces and implementations
     *
     * @generated from field: cosmos.base.reflection.v2alpha1.CodecDescriptor codec = 1;
     */
    codec?: CodecDescriptor;
    constructor(data?: PartialMessage<GetCodecDescriptorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCodecDescriptorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCodecDescriptorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCodecDescriptorResponse;
    static equals(a: GetCodecDescriptorResponse | PlainMessage<GetCodecDescriptorResponse> | undefined, b: GetCodecDescriptorResponse | PlainMessage<GetCodecDescriptorResponse> | undefined): boolean;
}
/**
 * GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest
 */
export declare class GetConfigurationDescriptorRequest extends Message<GetConfigurationDescriptorRequest> {
    constructor(data?: PartialMessage<GetConfigurationDescriptorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConfigurationDescriptorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConfigurationDescriptorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConfigurationDescriptorRequest;
    static equals(a: GetConfigurationDescriptorRequest | PlainMessage<GetConfigurationDescriptorRequest> | undefined, b: GetConfigurationDescriptorRequest | PlainMessage<GetConfigurationDescriptorRequest> | undefined): boolean;
}
/**
 * GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse
 */
export declare class GetConfigurationDescriptorResponse extends Message<GetConfigurationDescriptorResponse> {
    /**
     * config describes the application's sdk.Config
     *
     * @generated from field: cosmos.base.reflection.v2alpha1.ConfigurationDescriptor config = 1;
     */
    config?: ConfigurationDescriptor;
    constructor(data?: PartialMessage<GetConfigurationDescriptorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConfigurationDescriptorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConfigurationDescriptorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConfigurationDescriptorResponse;
    static equals(a: GetConfigurationDescriptorResponse | PlainMessage<GetConfigurationDescriptorResponse> | undefined, b: GetConfigurationDescriptorResponse | PlainMessage<GetConfigurationDescriptorResponse> | undefined): boolean;
}
/**
 * GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest
 */
export declare class GetQueryServicesDescriptorRequest extends Message<GetQueryServicesDescriptorRequest> {
    constructor(data?: PartialMessage<GetQueryServicesDescriptorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetQueryServicesDescriptorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetQueryServicesDescriptorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetQueryServicesDescriptorRequest;
    static equals(a: GetQueryServicesDescriptorRequest | PlainMessage<GetQueryServicesDescriptorRequest> | undefined, b: GetQueryServicesDescriptorRequest | PlainMessage<GetQueryServicesDescriptorRequest> | undefined): boolean;
}
/**
 * GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse
 */
export declare class GetQueryServicesDescriptorResponse extends Message<GetQueryServicesDescriptorResponse> {
    /**
     * queries provides information on the available queryable services
     *
     * @generated from field: cosmos.base.reflection.v2alpha1.QueryServicesDescriptor queries = 1;
     */
    queries?: QueryServicesDescriptor;
    constructor(data?: PartialMessage<GetQueryServicesDescriptorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetQueryServicesDescriptorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetQueryServicesDescriptorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetQueryServicesDescriptorResponse;
    static equals(a: GetQueryServicesDescriptorResponse | PlainMessage<GetQueryServicesDescriptorResponse> | undefined, b: GetQueryServicesDescriptorResponse | PlainMessage<GetQueryServicesDescriptorResponse> | undefined): boolean;
}
/**
 * GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest
 */
export declare class GetTxDescriptorRequest extends Message<GetTxDescriptorRequest> {
    constructor(data?: PartialMessage<GetTxDescriptorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTxDescriptorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTxDescriptorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTxDescriptorRequest;
    static equals(a: GetTxDescriptorRequest | PlainMessage<GetTxDescriptorRequest> | undefined, b: GetTxDescriptorRequest | PlainMessage<GetTxDescriptorRequest> | undefined): boolean;
}
/**
 * GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse
 */
export declare class GetTxDescriptorResponse extends Message<GetTxDescriptorResponse> {
    /**
     * tx provides information on msgs that can be forwarded to the application
     * alongside the accepted transaction protobuf type
     *
     * @generated from field: cosmos.base.reflection.v2alpha1.TxDescriptor tx = 1;
     */
    tx?: TxDescriptor;
    constructor(data?: PartialMessage<GetTxDescriptorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTxDescriptorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTxDescriptorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTxDescriptorResponse;
    static equals(a: GetTxDescriptorResponse | PlainMessage<GetTxDescriptorResponse> | undefined, b: GetTxDescriptorResponse | PlainMessage<GetTxDescriptorResponse> | undefined): boolean;
}
/**
 * QueryServicesDescriptor contains the list of cosmos-sdk queriable services
 *
 * @generated from message cosmos.base.reflection.v2alpha1.QueryServicesDescriptor
 */
export declare class QueryServicesDescriptor extends Message<QueryServicesDescriptor> {
    /**
     * query_services is a list of cosmos-sdk QueryServiceDescriptor
     *
     * @generated from field: repeated cosmos.base.reflection.v2alpha1.QueryServiceDescriptor query_services = 1;
     */
    queryServices: QueryServiceDescriptor[];
    constructor(data?: PartialMessage<QueryServicesDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.QueryServicesDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryServicesDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryServicesDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryServicesDescriptor;
    static equals(a: QueryServicesDescriptor | PlainMessage<QueryServicesDescriptor> | undefined, b: QueryServicesDescriptor | PlainMessage<QueryServicesDescriptor> | undefined): boolean;
}
/**
 * QueryServiceDescriptor describes a cosmos-sdk queryable service
 *
 * @generated from message cosmos.base.reflection.v2alpha1.QueryServiceDescriptor
 */
export declare class QueryServiceDescriptor extends Message<QueryServiceDescriptor> {
    /**
     * fullname is the protobuf fullname of the service descriptor
     *
     * @generated from field: string fullname = 1;
     */
    fullname: string;
    /**
     * is_module describes if this service is actually exposed by an application's module
     *
     * @generated from field: bool is_module = 2;
     */
    isModule: boolean;
    /**
     * methods provides a list of query service methods
     *
     * @generated from field: repeated cosmos.base.reflection.v2alpha1.QueryMethodDescriptor methods = 3;
     */
    methods: QueryMethodDescriptor[];
    constructor(data?: PartialMessage<QueryServiceDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.QueryServiceDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryServiceDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryServiceDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryServiceDescriptor;
    static equals(a: QueryServiceDescriptor | PlainMessage<QueryServiceDescriptor> | undefined, b: QueryServiceDescriptor | PlainMessage<QueryServiceDescriptor> | undefined): boolean;
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 *
 * @generated from message cosmos.base.reflection.v2alpha1.QueryMethodDescriptor
 */
export declare class QueryMethodDescriptor extends Message<QueryMethodDescriptor> {
    /**
     * name is the protobuf name (not fullname) of the method
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * full_query_path is the path that can be used to query
     * this method via tendermint abci.Query
     *
     * @generated from field: string full_query_path = 2;
     */
    fullQueryPath: string;
    constructor(data?: PartialMessage<QueryMethodDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v2alpha1.QueryMethodDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMethodDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMethodDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMethodDescriptor;
    static equals(a: QueryMethodDescriptor | PlainMessage<QueryMethodDescriptor> | undefined, b: QueryMethodDescriptor | PlainMessage<QueryMethodDescriptor> | undefined): boolean;
}
//# sourceMappingURL=reflection_pb.d.ts.map