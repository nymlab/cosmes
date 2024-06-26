import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC.
 *
 * @generated from message cosmos.base.reflection.v1beta1.ListAllInterfacesRequest
 */
export declare class ListAllInterfacesRequest extends Message<ListAllInterfacesRequest> {
    constructor(data?: PartialMessage<ListAllInterfacesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v1beta1.ListAllInterfacesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAllInterfacesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAllInterfacesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAllInterfacesRequest;
    static equals(a: ListAllInterfacesRequest | PlainMessage<ListAllInterfacesRequest> | undefined, b: ListAllInterfacesRequest | PlainMessage<ListAllInterfacesRequest> | undefined): boolean;
}
/**
 * ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC.
 *
 * @generated from message cosmos.base.reflection.v1beta1.ListAllInterfacesResponse
 */
export declare class ListAllInterfacesResponse extends Message<ListAllInterfacesResponse> {
    /**
     * interface_names is an array of all the registered interfaces.
     *
     * @generated from field: repeated string interface_names = 1;
     */
    interfaceNames: string[];
    constructor(data?: PartialMessage<ListAllInterfacesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v1beta1.ListAllInterfacesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAllInterfacesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAllInterfacesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAllInterfacesResponse;
    static equals(a: ListAllInterfacesResponse | PlainMessage<ListAllInterfacesResponse> | undefined, b: ListAllInterfacesResponse | PlainMessage<ListAllInterfacesResponse> | undefined): boolean;
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 *
 * @generated from message cosmos.base.reflection.v1beta1.ListImplementationsRequest
 */
export declare class ListImplementationsRequest extends Message<ListImplementationsRequest> {
    /**
     * interface_name defines the interface to query the implementations for.
     *
     * @generated from field: string interface_name = 1;
     */
    interfaceName: string;
    constructor(data?: PartialMessage<ListImplementationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v1beta1.ListImplementationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListImplementationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListImplementationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListImplementationsRequest;
    static equals(a: ListImplementationsRequest | PlainMessage<ListImplementationsRequest> | undefined, b: ListImplementationsRequest | PlainMessage<ListImplementationsRequest> | undefined): boolean;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 *
 * @generated from message cosmos.base.reflection.v1beta1.ListImplementationsResponse
 */
export declare class ListImplementationsResponse extends Message<ListImplementationsResponse> {
    /**
     * @generated from field: repeated string implementation_message_names = 1;
     */
    implementationMessageNames: string[];
    constructor(data?: PartialMessage<ListImplementationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.reflection.v1beta1.ListImplementationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListImplementationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListImplementationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListImplementationsResponse;
    static equals(a: ListImplementationsResponse | PlainMessage<ListImplementationsResponse> | undefined, b: ListImplementationsResponse | PlainMessage<ListImplementationsResponse> | undefined): boolean;
}
//# sourceMappingURL=reflection_pb.d.ts.map