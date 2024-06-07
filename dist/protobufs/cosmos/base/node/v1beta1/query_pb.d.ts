import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ConfigRequest defines the request structure for the Config gRPC query.
 *
 * @generated from message cosmos.base.node.v1beta1.ConfigRequest
 */
export declare class ConfigRequest extends Message<ConfigRequest> {
    constructor(data?: PartialMessage<ConfigRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.node.v1beta1.ConfigRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigRequest;
    static equals(a: ConfigRequest | PlainMessage<ConfigRequest> | undefined, b: ConfigRequest | PlainMessage<ConfigRequest> | undefined): boolean;
}
/**
 * ConfigResponse defines the response structure for the Config gRPC query.
 *
 * @generated from message cosmos.base.node.v1beta1.ConfigResponse
 */
export declare class ConfigResponse extends Message<ConfigResponse> {
    /**
     * @generated from field: string minimum_gas_price = 1;
     */
    minimumGasPrice: string;
    constructor(data?: PartialMessage<ConfigResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.base.node.v1beta1.ConfigResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigResponse;
    static equals(a: ConfigResponse | PlainMessage<ConfigResponse> | undefined, b: ConfigResponse | PlainMessage<ConfigResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map