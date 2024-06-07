import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FileDescriptorProto, Message, proto3 } from "@bufbuild/protobuf";
/**
 * FileDescriptorsRequest is the Query/FileDescriptors request type.
 *
 * @generated from message cosmos.reflection.v1.FileDescriptorsRequest
 */
export declare class FileDescriptorsRequest extends Message<FileDescriptorsRequest> {
    constructor(data?: PartialMessage<FileDescriptorsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.reflection.v1.FileDescriptorsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileDescriptorsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileDescriptorsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileDescriptorsRequest;
    static equals(a: FileDescriptorsRequest | PlainMessage<FileDescriptorsRequest> | undefined, b: FileDescriptorsRequest | PlainMessage<FileDescriptorsRequest> | undefined): boolean;
}
/**
 * FileDescriptorsResponse is the Query/FileDescriptors response type.
 *
 * @generated from message cosmos.reflection.v1.FileDescriptorsResponse
 */
export declare class FileDescriptorsResponse extends Message<FileDescriptorsResponse> {
    /**
     * files is the file descriptors.
     *
     * @generated from field: repeated google.protobuf.FileDescriptorProto files = 1;
     */
    files: FileDescriptorProto[];
    constructor(data?: PartialMessage<FileDescriptorsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.reflection.v1.FileDescriptorsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileDescriptorsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileDescriptorsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileDescriptorsResponse;
    static equals(a: FileDescriptorsResponse | PlainMessage<FileDescriptorsResponse> | undefined, b: FileDescriptorsResponse | PlainMessage<FileDescriptorsResponse> | undefined): boolean;
}
//# sourceMappingURL=reflection_pb.d.ts.map