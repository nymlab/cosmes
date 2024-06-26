// Since: cosmos-sdk 0.43
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * AppDescriptor describes a cosmos-sdk based application
 *
 * @generated from message cosmos.base.reflection.v2alpha1.AppDescriptor
 */
export class AppDescriptor extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AppDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AppDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AppDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AppDescriptor, a, b);
    }
}
AppDescriptor.runtime = proto3;
AppDescriptor.typeName = "cosmos.base.reflection.v2alpha1.AppDescriptor";
AppDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authn", kind: "message", T: AuthnDescriptor },
    { no: 2, name: "chain", kind: "message", T: ChainDescriptor },
    { no: 3, name: "codec", kind: "message", T: CodecDescriptor },
    { no: 4, name: "configuration", kind: "message", T: ConfigurationDescriptor },
    { no: 5, name: "query_services", kind: "message", T: QueryServicesDescriptor },
    { no: 6, name: "tx", kind: "message", T: TxDescriptor },
]);
/**
 * TxDescriptor describes the accepted transaction type
 *
 * @generated from message cosmos.base.reflection.v2alpha1.TxDescriptor
 */
export class TxDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
         * it is not meant to support polymorphism of transaction types, it is supposed to be used by
         * reflection clients to understand if they can handle a specific transaction type in an application.
         *
         * @generated from field: string fullname = 1;
         */
        this.fullname = "";
        /**
         * msgs lists the accepted application messages (sdk.Msg)
         *
         * @generated from field: repeated cosmos.base.reflection.v2alpha1.MsgDescriptor msgs = 2;
         */
        this.msgs = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TxDescriptor, a, b);
    }
}
TxDescriptor.runtime = proto3;
TxDescriptor.typeName = "cosmos.base.reflection.v2alpha1.TxDescriptor";
TxDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "fullname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "msgs", kind: "message", T: MsgDescriptor, repeated: true },
]);
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 *
 * @generated from message cosmos.base.reflection.v2alpha1.AuthnDescriptor
 */
export class AuthnDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * sign_modes defines the supported signature algorithm
         *
         * @generated from field: repeated cosmos.base.reflection.v2alpha1.SigningModeDescriptor sign_modes = 1;
         */
        this.signModes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AuthnDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AuthnDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AuthnDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AuthnDescriptor, a, b);
    }
}
AuthnDescriptor.runtime = proto3;
AuthnDescriptor.typeName = "cosmos.base.reflection.v2alpha1.AuthnDescriptor";
AuthnDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sign_modes", kind: "message", T: SigningModeDescriptor, repeated: true },
]);
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 *
 * @generated from message cosmos.base.reflection.v2alpha1.SigningModeDescriptor
 */
export class SigningModeDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * name defines the unique name of the signing mode
         *
         * @generated from field: string name = 1;
         */
        this.name = "";
        /**
         * number is the unique int32 identifier for the sign_mode enum
         *
         * @generated from field: int32 number = 2;
         */
        this.number = 0;
        /**
         * authn_info_provider_method_fullname defines the fullname of the method to call to get
         * the metadata required to authenticate using the provided sign_modes
         *
         * @generated from field: string authn_info_provider_method_fullname = 3;
         */
        this.authnInfoProviderMethodFullname = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SigningModeDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SigningModeDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SigningModeDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SigningModeDescriptor, a, b);
    }
}
SigningModeDescriptor.runtime = proto3;
SigningModeDescriptor.typeName = "cosmos.base.reflection.v2alpha1.SigningModeDescriptor";
SigningModeDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "number", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "authn_info_provider_method_fullname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ChainDescriptor describes chain information of the application
 *
 * @generated from message cosmos.base.reflection.v2alpha1.ChainDescriptor
 */
export class ChainDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * id is the chain id
         *
         * @generated from field: string id = 1;
         */
        this.id = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ChainDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ChainDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ChainDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ChainDescriptor, a, b);
    }
}
ChainDescriptor.runtime = proto3;
ChainDescriptor.typeName = "cosmos.base.reflection.v2alpha1.ChainDescriptor";
ChainDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * CodecDescriptor describes the registered interfaces and provides metadata information on the types
 *
 * @generated from message cosmos.base.reflection.v2alpha1.CodecDescriptor
 */
export class CodecDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * interfaces is a list of the registerted interfaces descriptors
         *
         * @generated from field: repeated cosmos.base.reflection.v2alpha1.InterfaceDescriptor interfaces = 1;
         */
        this.interfaces = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CodecDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CodecDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CodecDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CodecDescriptor, a, b);
    }
}
CodecDescriptor.runtime = proto3;
CodecDescriptor.typeName = "cosmos.base.reflection.v2alpha1.CodecDescriptor";
CodecDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "interfaces", kind: "message", T: InterfaceDescriptor, repeated: true },
]);
/**
 * InterfaceDescriptor describes the implementation of an interface
 *
 * @generated from message cosmos.base.reflection.v2alpha1.InterfaceDescriptor
 */
export class InterfaceDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * fullname is the name of the interface
         *
         * @generated from field: string fullname = 1;
         */
        this.fullname = "";
        /**
         * interface_accepting_messages contains information regarding the proto messages which contain the interface as
         * google.protobuf.Any field
         *
         * @generated from field: repeated cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor interface_accepting_messages = 2;
         */
        this.interfaceAcceptingMessages = [];
        /**
         * interface_implementers is a list of the descriptors of the interface implementers
         *
         * @generated from field: repeated cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor interface_implementers = 3;
         */
        this.interfaceImplementers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new InterfaceDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new InterfaceDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new InterfaceDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(InterfaceDescriptor, a, b);
    }
}
InterfaceDescriptor.runtime = proto3;
InterfaceDescriptor.typeName = "cosmos.base.reflection.v2alpha1.InterfaceDescriptor";
InterfaceDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "fullname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "interface_accepting_messages", kind: "message", T: InterfaceAcceptingMessageDescriptor, repeated: true },
    { no: 3, name: "interface_implementers", kind: "message", T: InterfaceImplementerDescriptor, repeated: true },
]);
/**
 * InterfaceImplementerDescriptor describes an interface implementer
 *
 * @generated from message cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor
 */
export class InterfaceImplementerDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * fullname is the protobuf queryable name of the interface implementer
         *
         * @generated from field: string fullname = 1;
         */
        this.fullname = "";
        /**
         * type_url defines the type URL used when marshalling the type as any
         * this is required so we can provide type safe google.protobuf.Any marshalling and
         * unmarshalling, making sure that we don't accept just 'any' type
         * in our interface fields
         *
         * @generated from field: string type_url = 2;
         */
        this.typeUrl = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new InterfaceImplementerDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new InterfaceImplementerDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new InterfaceImplementerDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(InterfaceImplementerDescriptor, a, b);
    }
}
InterfaceImplementerDescriptor.runtime = proto3;
InterfaceImplementerDescriptor.typeName = "cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor";
InterfaceImplementerDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "fullname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 *
 * @generated from message cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor
 */
export class InterfaceAcceptingMessageDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * fullname is the protobuf fullname of the type containing the interface
         *
         * @generated from field: string fullname = 1;
         */
        this.fullname = "";
        /**
         * field_descriptor_names is a list of the protobuf name (not fullname) of the field
         * which contains the interface as google.protobuf.Any (the interface is the same, but
         * it can be in multiple fields of the same proto message)
         *
         * @generated from field: repeated string field_descriptor_names = 2;
         */
        this.fieldDescriptorNames = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new InterfaceAcceptingMessageDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new InterfaceAcceptingMessageDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new InterfaceAcceptingMessageDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(InterfaceAcceptingMessageDescriptor, a, b);
    }
}
InterfaceAcceptingMessageDescriptor.runtime = proto3;
InterfaceAcceptingMessageDescriptor.typeName = "cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor";
InterfaceAcceptingMessageDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "fullname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "field_descriptor_names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * ConfigurationDescriptor contains metadata information on the sdk.Config
 *
 * @generated from message cosmos.base.reflection.v2alpha1.ConfigurationDescriptor
 */
export class ConfigurationDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * bech32_account_address_prefix is the account address prefix
         *
         * @generated from field: string bech32_account_address_prefix = 1;
         */
        this.bech32AccountAddressPrefix = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ConfigurationDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ConfigurationDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ConfigurationDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ConfigurationDescriptor, a, b);
    }
}
ConfigurationDescriptor.runtime = proto3;
ConfigurationDescriptor.typeName = "cosmos.base.reflection.v2alpha1.ConfigurationDescriptor";
ConfigurationDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "bech32_account_address_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction
 *
 * @generated from message cosmos.base.reflection.v2alpha1.MsgDescriptor
 */
export class MsgDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * msg_type_url contains the TypeURL of a sdk.Msg.
         *
         * @generated from field: string msg_type_url = 1;
         */
        this.msgTypeUrl = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgDescriptor, a, b);
    }
}
MsgDescriptor.runtime = proto3;
MsgDescriptor.typeName = "cosmos.base.reflection.v2alpha1.MsgDescriptor";
MsgDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest
 */
export class GetAuthnDescriptorRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetAuthnDescriptorRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetAuthnDescriptorRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetAuthnDescriptorRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetAuthnDescriptorRequest, a, b);
    }
}
GetAuthnDescriptorRequest.runtime = proto3;
GetAuthnDescriptorRequest.typeName = "cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest";
GetAuthnDescriptorRequest.fields = proto3.util.newFieldList(() => []);
/**
 * GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse
 */
export class GetAuthnDescriptorResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetAuthnDescriptorResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetAuthnDescriptorResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetAuthnDescriptorResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetAuthnDescriptorResponse, a, b);
    }
}
GetAuthnDescriptorResponse.runtime = proto3;
GetAuthnDescriptorResponse.typeName = "cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse";
GetAuthnDescriptorResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authn", kind: "message", T: AuthnDescriptor },
]);
/**
 * GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest
 */
export class GetChainDescriptorRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetChainDescriptorRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetChainDescriptorRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetChainDescriptorRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetChainDescriptorRequest, a, b);
    }
}
GetChainDescriptorRequest.runtime = proto3;
GetChainDescriptorRequest.typeName = "cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest";
GetChainDescriptorRequest.fields = proto3.util.newFieldList(() => []);
/**
 * GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse
 */
export class GetChainDescriptorResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetChainDescriptorResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetChainDescriptorResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetChainDescriptorResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetChainDescriptorResponse, a, b);
    }
}
GetChainDescriptorResponse.runtime = proto3;
GetChainDescriptorResponse.typeName = "cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse";
GetChainDescriptorResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "chain", kind: "message", T: ChainDescriptor },
]);
/**
 * GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest
 */
export class GetCodecDescriptorRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetCodecDescriptorRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetCodecDescriptorRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetCodecDescriptorRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetCodecDescriptorRequest, a, b);
    }
}
GetCodecDescriptorRequest.runtime = proto3;
GetCodecDescriptorRequest.typeName = "cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest";
GetCodecDescriptorRequest.fields = proto3.util.newFieldList(() => []);
/**
 * GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse
 */
export class GetCodecDescriptorResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetCodecDescriptorResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetCodecDescriptorResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetCodecDescriptorResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetCodecDescriptorResponse, a, b);
    }
}
GetCodecDescriptorResponse.runtime = proto3;
GetCodecDescriptorResponse.typeName = "cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse";
GetCodecDescriptorResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "codec", kind: "message", T: CodecDescriptor },
]);
/**
 * GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest
 */
export class GetConfigurationDescriptorRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetConfigurationDescriptorRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetConfigurationDescriptorRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetConfigurationDescriptorRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetConfigurationDescriptorRequest, a, b);
    }
}
GetConfigurationDescriptorRequest.runtime = proto3;
GetConfigurationDescriptorRequest.typeName = "cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest";
GetConfigurationDescriptorRequest.fields = proto3.util.newFieldList(() => []);
/**
 * GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse
 */
export class GetConfigurationDescriptorResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetConfigurationDescriptorResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetConfigurationDescriptorResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetConfigurationDescriptorResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetConfigurationDescriptorResponse, a, b);
    }
}
GetConfigurationDescriptorResponse.runtime = proto3;
GetConfigurationDescriptorResponse.typeName = "cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse";
GetConfigurationDescriptorResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "config", kind: "message", T: ConfigurationDescriptor },
]);
/**
 * GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest
 */
export class GetQueryServicesDescriptorRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetQueryServicesDescriptorRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetQueryServicesDescriptorRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetQueryServicesDescriptorRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetQueryServicesDescriptorRequest, a, b);
    }
}
GetQueryServicesDescriptorRequest.runtime = proto3;
GetQueryServicesDescriptorRequest.typeName = "cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest";
GetQueryServicesDescriptorRequest.fields = proto3.util.newFieldList(() => []);
/**
 * GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse
 */
export class GetQueryServicesDescriptorResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetQueryServicesDescriptorResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetQueryServicesDescriptorResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetQueryServicesDescriptorResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetQueryServicesDescriptorResponse, a, b);
    }
}
GetQueryServicesDescriptorResponse.runtime = proto3;
GetQueryServicesDescriptorResponse.typeName = "cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse";
GetQueryServicesDescriptorResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "queries", kind: "message", T: QueryServicesDescriptor },
]);
/**
 * GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest
 */
export class GetTxDescriptorRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetTxDescriptorRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetTxDescriptorRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetTxDescriptorRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetTxDescriptorRequest, a, b);
    }
}
GetTxDescriptorRequest.runtime = proto3;
GetTxDescriptorRequest.typeName = "cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest";
GetTxDescriptorRequest.fields = proto3.util.newFieldList(() => []);
/**
 * GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC
 *
 * @generated from message cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse
 */
export class GetTxDescriptorResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GetTxDescriptorResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GetTxDescriptorResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GetTxDescriptorResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GetTxDescriptorResponse, a, b);
    }
}
GetTxDescriptorResponse.runtime = proto3;
GetTxDescriptorResponse.typeName = "cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse";
GetTxDescriptorResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tx", kind: "message", T: TxDescriptor },
]);
/**
 * QueryServicesDescriptor contains the list of cosmos-sdk queriable services
 *
 * @generated from message cosmos.base.reflection.v2alpha1.QueryServicesDescriptor
 */
export class QueryServicesDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * query_services is a list of cosmos-sdk QueryServiceDescriptor
         *
         * @generated from field: repeated cosmos.base.reflection.v2alpha1.QueryServiceDescriptor query_services = 1;
         */
        this.queryServices = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryServicesDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryServicesDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryServicesDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryServicesDescriptor, a, b);
    }
}
QueryServicesDescriptor.runtime = proto3;
QueryServicesDescriptor.typeName = "cosmos.base.reflection.v2alpha1.QueryServicesDescriptor";
QueryServicesDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "query_services", kind: "message", T: QueryServiceDescriptor, repeated: true },
]);
/**
 * QueryServiceDescriptor describes a cosmos-sdk queryable service
 *
 * @generated from message cosmos.base.reflection.v2alpha1.QueryServiceDescriptor
 */
export class QueryServiceDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * fullname is the protobuf fullname of the service descriptor
         *
         * @generated from field: string fullname = 1;
         */
        this.fullname = "";
        /**
         * is_module describes if this service is actually exposed by an application's module
         *
         * @generated from field: bool is_module = 2;
         */
        this.isModule = false;
        /**
         * methods provides a list of query service methods
         *
         * @generated from field: repeated cosmos.base.reflection.v2alpha1.QueryMethodDescriptor methods = 3;
         */
        this.methods = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryServiceDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryServiceDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryServiceDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryServiceDescriptor, a, b);
    }
}
QueryServiceDescriptor.runtime = proto3;
QueryServiceDescriptor.typeName = "cosmos.base.reflection.v2alpha1.QueryServiceDescriptor";
QueryServiceDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "fullname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_module", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "methods", kind: "message", T: QueryMethodDescriptor, repeated: true },
]);
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 *
 * @generated from message cosmos.base.reflection.v2alpha1.QueryMethodDescriptor
 */
export class QueryMethodDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * name is the protobuf name (not fullname) of the method
         *
         * @generated from field: string name = 1;
         */
        this.name = "";
        /**
         * full_query_path is the path that can be used to query
         * this method via tendermint abci.Query
         *
         * @generated from field: string full_query_path = 2;
         */
        this.fullQueryPath = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryMethodDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryMethodDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryMethodDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryMethodDescriptor, a, b);
    }
}
QueryMethodDescriptor.runtime = proto3;
QueryMethodDescriptor.typeName = "cosmos.base.reflection.v2alpha1.QueryMethodDescriptor";
QueryMethodDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "full_query_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=reflection_pb.js.map