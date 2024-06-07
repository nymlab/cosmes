import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Config } from "./config_pb.js";
/**
 * QueryConfigRequest is the Query/Config request type.
 *
 * @generated from message cosmos.app.v1alpha1.QueryConfigRequest
 */
export declare class QueryConfigRequest extends Message<QueryConfigRequest> {
    constructor(data?: PartialMessage<QueryConfigRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.app.v1alpha1.QueryConfigRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConfigRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConfigRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConfigRequest;
    static equals(a: QueryConfigRequest | PlainMessage<QueryConfigRequest> | undefined, b: QueryConfigRequest | PlainMessage<QueryConfigRequest> | undefined): boolean;
}
/**
 * QueryConfigRequest is the Query/Config response type.
 *
 * @generated from message cosmos.app.v1alpha1.QueryConfigResponse
 */
export declare class QueryConfigResponse extends Message<QueryConfigResponse> {
    /**
     * config is the current app config.
     *
     * @generated from field: cosmos.app.v1alpha1.Config config = 1;
     */
    config?: Config;
    constructor(data?: PartialMessage<QueryConfigResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.app.v1alpha1.QueryConfigResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConfigResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConfigResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConfigResponse;
    static equals(a: QueryConfigResponse | PlainMessage<QueryConfigResponse> | undefined, b: QueryConfigResponse | PlainMessage<QueryConfigResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map