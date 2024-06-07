import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
/**
 * ParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message osmosis.ibcratelimit.v1beta1.ParamsRequest
 */
export declare class ParamsRequest extends Message<ParamsRequest> {
    constructor(data?: PartialMessage<ParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.ibcratelimit.v1beta1.ParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsRequest;
    static equals(a: ParamsRequest | PlainMessage<ParamsRequest> | undefined, b: ParamsRequest | PlainMessage<ParamsRequest> | undefined): boolean;
}
/**
 * aramsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message osmosis.ibcratelimit.v1beta1.ParamsResponse
 */
export declare class ParamsResponse extends Message<ParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: osmosis.ibcratelimit.v1beta1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<ParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "osmosis.ibcratelimit.v1beta1.ParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsResponse;
    static equals(a: ParamsResponse | PlainMessage<ParamsResponse> | undefined, b: ParamsResponse | PlainMessage<ParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map