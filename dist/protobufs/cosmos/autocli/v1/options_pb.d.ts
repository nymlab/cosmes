import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ModuleOptions describes the CLI options for a Cosmos SDK module.
 *
 * @generated from message cosmos.autocli.v1.ModuleOptions
 */
export declare class ModuleOptions extends Message<ModuleOptions> {
    /**
     * tx describes the tx command for the module.
     *
     * @generated from field: cosmos.autocli.v1.ServiceCommandDescriptor tx = 1;
     */
    tx?: ServiceCommandDescriptor;
    /**
     * query describes the tx command for the module.
     *
     * @generated from field: cosmos.autocli.v1.ServiceCommandDescriptor query = 2;
     */
    query?: ServiceCommandDescriptor;
    constructor(data?: PartialMessage<ModuleOptions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.autocli.v1.ModuleOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleOptions;
    static equals(a: ModuleOptions | PlainMessage<ModuleOptions> | undefined, b: ModuleOptions | PlainMessage<ModuleOptions> | undefined): boolean;
}
/**
 * ServiceCommandDescriptor describes a CLI command based on a protobuf service.
 *
 * @generated from message cosmos.autocli.v1.ServiceCommandDescriptor
 */
export declare class ServiceCommandDescriptor extends Message<ServiceCommandDescriptor> {
    /**
     * service is the fully qualified name of the protobuf service to build
     * the command from. It can be left empty if sub_commands are used instead
     * which may be the case if a module provides multiple tx and/or query services.
     *
     * @generated from field: string service = 1;
     */
    service: string;
    /**
     * rpc_command_options are options for commands generated from rpc methods.
     * If no options are specified for a given rpc method on the service, a
     * command will be generated for that method with the default options.
     *
     * @generated from field: repeated cosmos.autocli.v1.RpcCommandOptions rpc_command_options = 2;
     */
    rpcCommandOptions: RpcCommandOptions[];
    /**
     * sub_commands is a map of optional sub-commands for this command based on
     * different protobuf services. The map key is used as the name of the
     * sub-command.
     *
     * @generated from field: map<string, cosmos.autocli.v1.ServiceCommandDescriptor> sub_commands = 3;
     */
    subCommands: {
        [key: string]: ServiceCommandDescriptor;
    };
    constructor(data?: PartialMessage<ServiceCommandDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.autocli.v1.ServiceCommandDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceCommandDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceCommandDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceCommandDescriptor;
    static equals(a: ServiceCommandDescriptor | PlainMessage<ServiceCommandDescriptor> | undefined, b: ServiceCommandDescriptor | PlainMessage<ServiceCommandDescriptor> | undefined): boolean;
}
/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 *
 * @generated from message cosmos.autocli.v1.RpcCommandOptions
 */
export declare class RpcCommandOptions extends Message<RpcCommandOptions> {
    /**
     * rpc_method is short name of the protobuf rpc method that this command is
     * generated from.
     *
     * @generated from field: string rpc_method = 1;
     */
    rpcMethod: string;
    /**
     * use is the one-line usage method. It also allows specifying an alternate
     * name for the command as the first word of the usage text.
     *
     * By default the name of an rpc command is the kebab-case short name of the
     * rpc method.
     *
     * @generated from field: string use = 2;
     */
    use: string;
    /**
     * long is the long message shown in the 'help <this-command>' output.
     *
     * @generated from field: string long = 3;
     */
    long: string;
    /**
     * short is the short description shown in the 'help' output.
     *
     * @generated from field: string short = 4;
     */
    short: string;
    /**
     * example is examples of how to use the command.
     *
     * @generated from field: string example = 5;
     */
    example: string;
    /**
     * alias is an array of aliases that can be used instead of the first word in Use.
     *
     * @generated from field: repeated string alias = 6;
     */
    alias: string[];
    /**
     * suggest_for is an array of command names for which this command will be suggested -
     * similar to aliases but only suggests.
     *
     * @generated from field: repeated string suggest_for = 7;
     */
    suggestFor: string[];
    /**
     * deprecated defines, if this command is deprecated and should print this string when used.
     *
     * @generated from field: string deprecated = 8;
     */
    deprecated: string;
    /**
     * version defines the version for this command. If this value is non-empty and the command does not
     * define a "version" flag, a "version" boolean flag will be added to the command and, if specified,
     * will print content of the "Version" variable. A shorthand "v" flag will also be added if the
     * command does not define one.
     *
     * @generated from field: string version = 9;
     */
    version: string;
    /**
     * flag_options are options for flags generated from rpc request fields.
     * By default all request fields are configured as flags. They can
     * also be configured as positional args instead using positional_args.
     *
     * @generated from field: map<string, cosmos.autocli.v1.FlagOptions> flag_options = 10;
     */
    flagOptions: {
        [key: string]: FlagOptions;
    };
    /**
     * positional_args specifies positional arguments for the command.
     *
     * @generated from field: repeated cosmos.autocli.v1.PositionalArgDescriptor positional_args = 11;
     */
    positionalArgs: PositionalArgDescriptor[];
    /**
     * skip specifies whether to skip this rpc method when generating commands.
     *
     * @generated from field: bool skip = 12;
     */
    skip: boolean;
    constructor(data?: PartialMessage<RpcCommandOptions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.autocli.v1.RpcCommandOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RpcCommandOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RpcCommandOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RpcCommandOptions;
    static equals(a: RpcCommandOptions | PlainMessage<RpcCommandOptions> | undefined, b: RpcCommandOptions | PlainMessage<RpcCommandOptions> | undefined): boolean;
}
/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 *
 * @generated from message cosmos.autocli.v1.FlagOptions
 */
export declare class FlagOptions extends Message<FlagOptions> {
    /**
     * name is an alternate name to use for the field flag.
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * shorthand is a one-letter abbreviated flag.
     *
     * @generated from field: string shorthand = 2;
     */
    shorthand: string;
    /**
     * usage is the help message.
     *
     * @generated from field: string usage = 3;
     */
    usage: string;
    /**
     * default_value is the default value as text.
     *
     * @generated from field: string default_value = 4;
     */
    defaultValue: string;
    /**
     * default value is the default value as text if the flag is used without any value.
     *
     * @generated from field: string no_opt_default_value = 5;
     */
    noOptDefaultValue: string;
    /**
     * deprecated is the usage text to show if this flag is deprecated.
     *
     * @generated from field: string deprecated = 6;
     */
    deprecated: string;
    /**
     * shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated.
     *
     * @generated from field: string shorthand_deprecated = 7;
     */
    shorthandDeprecated: string;
    /**
     * hidden hides the flag from help/usage text
     *
     * @generated from field: bool hidden = 8;
     */
    hidden: boolean;
    constructor(data?: PartialMessage<FlagOptions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.autocli.v1.FlagOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlagOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlagOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlagOptions;
    static equals(a: FlagOptions | PlainMessage<FlagOptions> | undefined, b: FlagOptions | PlainMessage<FlagOptions> | undefined): boolean;
}
/**
 * PositionalArgDescriptor describes a positional argument.
 *
 * @generated from message cosmos.autocli.v1.PositionalArgDescriptor
 */
export declare class PositionalArgDescriptor extends Message<PositionalArgDescriptor> {
    /**
     * proto_field specifies the proto field to use as the positional arg. Any
     * fields used as positional args will not have a flag generated.
     *
     * @generated from field: string proto_field = 1;
     */
    protoField: string;
    /**
     * varargs makes a positional parameter a varargs parameter. This can only be
     * applied to last positional parameter and the proto_field must a repeated
     * field.
     *
     * @generated from field: bool varargs = 2;
     */
    varargs: boolean;
    constructor(data?: PartialMessage<PositionalArgDescriptor>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.autocli.v1.PositionalArgDescriptor";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PositionalArgDescriptor;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PositionalArgDescriptor;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PositionalArgDescriptor;
    static equals(a: PositionalArgDescriptor | PlainMessage<PositionalArgDescriptor> | undefined, b: PositionalArgDescriptor | PlainMessage<PositionalArgDescriptor> | undefined): boolean;
}
//# sourceMappingURL=options_pb.d.ts.map